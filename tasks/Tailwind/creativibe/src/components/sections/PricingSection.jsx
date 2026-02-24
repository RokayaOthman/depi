export default function PricingSection() {
  const plans = [
    {
      title: "Hot Desk Membership",
      price: "$250/mo",
      features: ["High-speed internet", "Coffee included", "Community access"],
    },
    {
      title: "Dedicated Membership",
      price: "$400/mo",
      features: ["Private locker", "24/7 Access", "Meeting room credits"],
    },
    {
      title: "Private Office Membership",
      price: "$800/mo",
      features: ["Lockable door", "Team seating", "Mail handling"],
    },
  ];

  return (
    <section className="py-20">
        <div className="w-full h-50 bg-olive-50 flex justify-center align-center">
              <span className="text-orange-500 text-3xl items-center">From dedicated desks to private offices, find the space that fits your work style.</span>
        </div>
      <div className="w-full bg-gray-100 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Membership Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <span className="text-4xl font-extrabold text-orange-500 block mb-6">
                {plan.price}
              </span>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-black text-black py-2 font-bold hover:bg-black hover:text-white transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
