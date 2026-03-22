type Props = {
  admins: number;
  members: number;
  events: number;
};

export default function SuperAdminDashboardCards({ admins, members, events }: Props) {
  const cards = [
    { title: "Total Admins", value: admins },
    { title: "Total Members", value: members },
    { title: "Total Events", value: events },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">{card.title}</h2>
          <p className="text-3xl font-bold text-purple-700">{card.value}</p>
        </div>
      ))}
    </div>
  );
}