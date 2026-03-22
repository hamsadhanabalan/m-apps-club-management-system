type Props = {
  title: string;
  value: string;
  icon: string;
};

export default function StatCard({ title, value, icon }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">

      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      <span className="text-3xl">{icon}</span>

    </div>
  );
}