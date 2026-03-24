
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "HVAC Maintenance Checklist for DC Homeowners | CoolHVAC",
  description: "A complete HVAC maintenance checklist for DC homeowners. Monthly, seasonal, and annual tasks to keep your heating and cooling system running efficiently.",
  alternates: { canonical: "/blog/hvac-maintenance-checklist-homeowners" },
};

export default function HvacMaintenanceChecklistPost() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "HVAC Maintenance Checklist for DC Homeowners",
        "author": { "@type": "Organization", "name": "CoolHVAC" },
        "datePublished": "2025-11-01",
        "url": "https://www.trycoolhvac.com/blog/hvac-maintenance-checklist-homeowners",
        "publisher": {
          "@type": "Organization",
          "name": "CoolHVAC",
          "url": "https://www.trycoolhvac.com"
        },
        "description": "A complete HVAC maintenance checklist for DC homeowners. Monthly, seasonal, and annual tasks to keep your heating and cooling system running efficiently."
      }} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Maintenance</span>
            <span className="text-gray-400 text-sm">November 2025 &middot; 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 leading-tight">HVAC Maintenance Checklist for DC Homeowners</h1>
          <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-5 mb-8">
            <p className="text-gray-700 leading-relaxed">
              DC homeowners should replace air filters every 1&ndash;3 months, schedule professional tune-ups twice a year (spring for AC, fall for heating), keep outdoor units clear of debris, check thermostat settings seasonally, and inspect vents and registers for blockages. This checklist covers everything you need to do monthly, seasonally, and annually.
            </p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          {/* Monthly */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Monthly Tasks</h2>
            <div className="space-y-3">
              {[
                { task: "Check and replace the air filter", detail: "A dirty filter is the #1 cause of HVAC inefficiency and breakdowns. Check monthly; replace every 1\u20133 months depending on filter type and household conditions (pets, allergies, etc.)." },
                { task: "Check thermostat settings", detail: "Ensure your thermostat is set correctly for the season. If you have a programmable thermostat, confirm schedules are set appropriately." },
                { task: "Inspect supply and return vents", detail: "Make sure furniture, rugs, or curtains aren\u2019t blocking airflow from supply vents or return air grilles." },
                { task: "Listen for unusual sounds", detail: "Take a moment each month to listen to your system running. Banging, rattling, or high-pitched sounds can indicate developing issues." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm mb-1">{item.task}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Spring */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Spring (Pre-Cooling Season) Tasks</h2>
            <p className="text-sm text-gray-500 mb-4">Complete these in March or April before DC&apos;s summer heat arrives.</p>
            <div className="space-y-3">
              {[
                { task: "Schedule your AC tune-up", detail: "Book a professional cooling system tune-up with CoolHVAC before the summer rush. Appointments fill up fast in May and June." },
                { task: "Clear debris from outdoor unit", detail: "Remove leaves, dirt, and debris from around your outdoor condenser unit. Maintain at least 2 feet of clearance on all sides." },
                { task: "Clean or replace air filter", detail: "Start the cooling season with a fresh filter." },
                { task: "Test the AC before it gets hot", detail: "Run your AC on a mild spring day to confirm it\u2019s cooling properly before you actually need it." },
                { task: "Check window seals and weatherstripping", detail: "Gaps around windows and doors make your AC work harder. Seal any drafts before summer." },
                { task: "Program thermostat for cooling season", detail: "Update your thermostat schedule for summer. Raise the setpoint when you\u2019re away to save energy." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm mb-1">{item.task}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fall */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Fall (Pre-Heating Season) Tasks</h2>
            <p className="text-sm text-gray-500 mb-4">Complete these in September or October before the first cold snap.</p>
            <div className="space-y-3">
              {[
                { task: "Schedule your heating tune-up", detail: "Book a professional heating system tune-up with CoolHVAC before the fall rush. Don\u2019t wait until your furnace stops working on the first cold night." },
                { task: "Test the heat before you need it", detail: "Turn on your heat on a cool fall day to make sure it\u2019s working properly before temperatures drop." },
                { task: "Replace air filter", detail: "Start the heating season with a fresh filter." },
                { task: "Check carbon monoxide detectors", detail: "Test all CO detectors and replace batteries. CO leaks from furnaces can be life-threatening." },
                { task: "Clear area around furnace and vents", detail: "Remove stored items from around your furnace and ensure all heating vents are unobstructed." },
                { task: "Program thermostat for heating season", detail: "Update your thermostat schedule for winter. Lower the setpoint when you\u2019re away or asleep to save on heating costs." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm mb-1">{item.task}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Annual */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Annual Tasks (Have a Pro Do These)</h2>
            <div className="space-y-3">
              {[
                { task: "Full system inspection and tune-up", detail: "A certified technician inspects every component, tests system performance, and addresses any issues before they become failures." },
                { task: "Refrigerant level check", detail: "Low refrigerant means your AC is either leaking or was undercharged at installation. A technician can test and recharge as needed." },
                { task: "Coil cleaning (evaporator and condenser)", detail: "Dirty coils reduce efficiency and can cause the system to freeze up. Professional cleaning restores performance." },
                { task: "Duct inspection", detail: "Have your ductwork checked for leaks, blockages, or insulation issues. Leaky ducts can waste 20\u201330% of your conditioned air." },
                { task: "Heat exchanger inspection (gas furnaces)", detail: "A cracked heat exchanger is a serious safety hazard that can allow carbon monoxide into your home. This should be checked annually." },
                { task: "Electrical connection tightening", detail: "Loose electrical connections cause efficiency loss and can create fire hazards. A professional will check and tighten all connections." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-blue-50 rounded-xl p-4">
                  <div className="w-6 h-6 bg-blue-800 text-white rounded flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm mb-1">{item.task}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DIY vs Pro */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">What Homeowners Can Do vs. What Needs a Pro</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-bold text-navy-900 mb-3">DIY-Friendly Tasks</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Replace air filters",
                    "Clear debris from outdoor unit",
                    "Check and update thermostat settings",
                    "Test CO detectors",
                    "Keep vents unobstructed",
                    "Visual inspection for obvious issues",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-bold text-navy-900 mb-3">Requires a Certified Tech</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Refrigerant handling",
                    "Coil cleaning",
                    "Heat exchanger inspection",
                    "Electrical component testing",
                    "Ductwork inspection and sealing",
                    "Any repair work",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg className="w-3.5 h-3.5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <div className="bg-red-600 text-white rounded-xl p-6">
            <p className="font-bold text-lg mb-2">Ready to schedule your tune-up?</p>
            <p className="text-red-100 text-sm mb-4">CoolHVAC handles all the professional tasks on this list. Spring and fall tune-ups available across the DC metro area.</p>
            <a href="/contact" className="inline-block bg-white text-red-600 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
              Schedule a Tune-Up
            </a>
          </div>

        </article>

        {/* Footer link */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <a href="/services/maintenance" className="text-blue-800 font-semibold hover:underline">
            Learn more about our HVAC maintenance plans &rarr;
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
