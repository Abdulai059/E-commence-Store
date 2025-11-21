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
    <div className="px-2  py-8">
      <div className="mx-auto max-w-full">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex w-[calc(50%-12px)] flex-row items-center gap-2 py-6 px-2  shadow-sm rounded-lg text-center md:px-10 md:w-auto md:flex-row md:gap-3 md:text-left"
              >
                <Icon className={`h-5 w-5 flex-shrink-0 md:h-10 md:w-10 ${feature.color}`} />
                <div className="min-w-0">
                  <h3 className="text-sm leading-tight font-semibold text-gray-600 ">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-tight text-gray-400 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
