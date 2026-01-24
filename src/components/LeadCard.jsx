export default function LeadCard({ lead }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow border">
      <h3 className="font-bold">{lead.name}</h3>
      <p className="text-sm text-gray-500">{lead.serviceName}</p>
      <p className="text-sm mt-2">{lead.company}</p>
      <p className="text-xs text-gray-400">{lead.email}</p>
    </div>
  );
}
