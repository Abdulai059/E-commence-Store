import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

function ShippingDetails() {
  const features = [
    {
      id: 1,
      icon: Truck,
      title: "Fast Shipping",
      description: "All over Ghana",
      color: "text-red-500",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Certified products",
      color: "text-green-500",
    },
    {
      id: 3,
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated support team",
      color: "text-red-500",
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Secure Payment",
      description: "Safe Payment Processing",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="mx-auto max-w-full px-2 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex items-center gap-3 rounded-lg px-2 py-3 shadow-sm md:py-6"
            >
              <Icon className={`h-6 w-6 md:h-10 md:w-10 ${feature.color}`} />

              <div>
                <h3 className="text-sm font-semibold text-gray-600">{feature.title}</h3>
                <p className="text-xs text-gray-400 md:text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShippingDetails;
