import { connectDB } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await context.params;
  const cert = await Certificate.findById(id);

  if (!cert) {
    return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
  }

  const baseUrl = new URL(req.url);
  const logoUrl = new URL("/logo.png", baseUrl);
  const signUrl = new URL("/signature.png", baseUrl);

  const loadImage = async (url: URL) => {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  };

  const logoImageBytes = await loadImage(logoUrl);
  const signatureImageBytes = await loadImage(signUrl);

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // A4 landscape

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const borderColor = rgb(0.83, 0.68, 0.22);
  page.drawRectangle({
    x: 20,
    y: 20,
    width: 800,
    height: 550,
    borderColor,
    borderWidth: 10,
  });

  if (logoImageBytes) {
    const logoImage = await pdfDoc.embedPng(logoImageBytes);
    const dims = logoImage.scale(0.25);
    page.drawImage(logoImage, {
      x: 360,
      y: 460,
      width: dims.width,
      height: dims.height,
    });
  }

  const pageWidth = 842
  const margin = 60
  const usableWidth = pageWidth - margin * 2

  const centerX = (text: string, size: number, font: any) => {
    const textWidth = font.widthOfTextAtSize(text, size)
    return margin + Math.max((usableWidth - textWidth) / 2, 0)
  }

  page.drawText("Certificate of Achievement", {
    x: centerX("Certificate of Achievement", 40, helveticaBold),
    y: 420,
    size: 40,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
    maxWidth: usableWidth,
    lineHeight: 48,
  });

  page.drawText("This certificate is proudly presented to", {
    x: centerX("This certificate is proudly presented to", 18, helvetica),
    y: 360,
    size: 18,
    font: helvetica,
    color: rgb(0, 0, 0),
    maxWidth: usableWidth,
    lineHeight: 22,
  });

  page.drawText(cert.name, {
    x: centerX(cert.name, 35, helveticaBold),
    y: 315,
    size: 35,
    font: helveticaBold,
    color: rgb(0, 0, 0),
    maxWidth: usableWidth,
    lineHeight: 42,
  });

  page.drawText("For successfully completing", {
    x: centerX("For successfully completing", 20, helvetica),
    y: 250,
    size: 20,
    font: helvetica,
    color: rgb(0, 0, 0),
    maxWidth: usableWidth,
    lineHeight: 26,
  });

  page.drawText(cert.title, {
    x: centerX(cert.title, 24, helveticaBold),
    y: 215,
    size: 24,
    font: helveticaBold,
    color: rgb(0, 0, 0),
    maxWidth: usableWidth,
    lineHeight: 30,
  });

  if (signatureImageBytes) {
    const signImage = await pdfDoc.embedPng(signatureImageBytes);
    const dims = signImage.scale(0.35);
    page.drawImage(signImage, {
      x: 150,
      y: 110,
      width: dims.width,
      height: dims.height,
    });
  }

  page.drawText("Authorized Signature", {
    x: 150,
    y: 90,
    size: 14,
    font: helvetica,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Certificate ID: ${cert._id}`, {
    x: 600,
    y: 85,
    size: 12,
    font: helvetica,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  // Convert to a Buffer so the response body matches Next.js BodyInit types.
  const pdfBuffer = Buffer.from(pdfBytes);

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=certificate.pdf",
    },
  });
}
