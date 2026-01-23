// utils/groupServices.js
export function groupServicesByCategory(services, limit = null) {
  const grouped = services.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return Object.entries(grouped).map(([category, services]) => ({
    category,
    services: limit ? services.slice(0, limit) : services,
  }));
}
