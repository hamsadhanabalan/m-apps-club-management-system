import Navbar from "./Navbar"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-8">
        {children}
      </div>
    </>
  )
}