export default function PricingSection() {
  const plans = [
    {
      title: "Hot Desk Membership",
      description: "Access to a shared workspace where members can choose any available desk.",
      price: "$200",
      accessHours: "Monday to Friday, 9 AM – 5 PM.",
      features: [
        "High-speed Wi-Fi.",
        "Access to communal areas (kitchen, lounge).",
        "Printing and copying services.",
        "Networking events and workshops."
      ]
    },
    {
      title: "Dedicated Desk Membership",
      description: "A personal desk in a shared office space reserved for the member.",
      price: "$350",
      accessHours: "24/7 access.",
      features: [
        "High-speed Wi-Fi.",
        "Personal storage and space for your belongings.",
        "Access to meeting rooms (limited hours).",
        "Invitations to exclusive member events."
      ]
    },
    {
      title: "Corporate Membership",
      description: "Tailored for businesses that want to provide coworking access to multiple employees.",
      price: "$1200",
      accessHours: "24/7 access.",
      features: [
        "Dedicated account manager.",
        "Access to communal areas (kitchen, lounge).",
        "Flexible desk arrangements.",
        "Access to meeting rooms and event spaces."
      ]
    }
  ];

  const FeatureItem = ({ text }) => (
    <div className="flex items-start gap-2">
      <span className="text-green-500 text-lg">✓</span>
      <span className="text-gray-600 text-sm">{text}</span>
    </div>
  );

  return (
    <section className="bg-white">
      {/* Top Banner - Fixed height 162px */}
      <div className="w-full h-[162px] bg-white flex items-center justify-center px-4">
        <span className="text-orange-500 text-[22px] font-bold text-center max-w-[721px] leading-[33px]">
          From dedicated desks to private offices, find the space that fits your work style.
        </span>
      </div>

      {/* Gray Background Section - Fixed height 633px */}
      <div className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-extrabold text-orange-500 mb-2">
              Membership Plans
            </h2>
            <p className="text-gray-600 text-xl max-w-[595px] mx-auto">
              Access to a shared workspace where members can choose any available desk.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1187px] mx-auto mb-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Title */}
                <h3 className="text-[18px] font-semibold text-black text-center mb-2">
                  {plan.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-xs text-center mb-10">
                  {plan.description}
                </p>

                {/* Access Hours */}
                <div className="flex items-start gap-2 mb-10">
                  <span className="text-gray-700">🕒</span>
                  <span className="text-xs text-black">{plan.accessHours}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </div>

                {/* Price */}
                <div className="text-[19px] font-semibold text-orange-500">
                  Price: {plan.price} <span className="text-black">/Month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}