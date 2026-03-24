
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does AC Repair Cost in Washington DC? | CoolHVAC",
  description: "AC repair in Washington DC typically costs $150\u2013$500. Learn what factors affect pricing, what common repairs cost, and when to repair vs. replace your AC.",
  alternates: { canonical: "/blog/how-much-does-ac-repair-cost-washington-dc" },
};

export default function AcRepairCostPost() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How Much Does AC Repair Cost in Washington DC?",
        "author": { "@type": "Organization", "name": "CoolHVAC" },
        "datePublished": "2025-06-01",
        "url": "https://www.trycoolhvac.com/blog/how-much-does-ac-repair-cost-washington-dc",
        "publisher": {
          "@type": "Organization",
          "name": "CoolHVAC",
          "url": "https://www.trycoolhvac.com"
        },
        "description": "AC repair in Washington DC typically costs $150\u2013$500. Learn what factors affect pricing, what common repairs cost, and when to repair vs. replace your AC."
      }} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">AC Repair</span>
            <span className="text-gray-400 text-sm">June 2025 &middot; 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 leading-tight">How Much Does AC Repair Cost in Washington DC?</h1>
          <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-5 mb-8">
            <p className="text-gray-700 leading-relaxed">
              AC repair in Washington DC typically costs between <strong>$150 and $500</strong>, depending on the type of repair. Minor fixes like capacitor replacement or refrigerant recharge run $150&ndash;$300. Larger repairs like compressor replacement or evaporator coil issues can run $400&ndash;$800 or more. CoolHVAC provides upfront pricing before any work begins.
            </p>
          </div>
        </div>

        <article className="prose-custom space-y-10 text-gray-700 leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Common AC Repair Costs in DC</h2>
            <p className="mb-4">Here are typical price ranges for the most common AC repairs in the Washington DC metro area. Prices vary based on brand, system age, and whether parts need to be ordered.</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-navy-900 border-b border-gray-200">Repair Type</th>
                    <th className="text-left px-5 py-3 font-bold text-navy-900 border-b border-gray-200">Typical Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Capacitor replacement", "$150\u2013$250"],
                    ["Refrigerant recharge", "$200\u2013$400"],
                    ["Contactor replacement", "$150\u2013$300"],
                    ["Evaporator coil cleaning", "$150\u2013$250"],
                    ["Fan motor replacement", "$300\u2013$600"],
                    ["Compressor replacement", "$800\u2013$2,000+"],
                  ].map(([repair, cost], i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      <td className="px-5 py-3 text-gray-700">{repair}</td>
                      <td className="px-5 py-3 font-semibold text-navy-900">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">What Affects AC Repair Cost?</h2>
            <p className="mb-4">Several factors influence how much you&apos;ll pay for AC repair in the DC area:</p>
            <div className="space-y-4">
              {[
                { title: "Type of repair needed", desc: "Smaller repairs like sensor or capacitor replacement are straightforward and inexpensive. Motor or compressor work involves more labor and costly parts." },
                { title: "System age and brand", desc: "Older systems or less common brands may require special-order parts, adding cost and time to the repair." },
                { title: "Refrigerant type (R-410A vs. R-22)", desc: "Older systems using R-22 refrigerant face higher recharge costs because R-22 is being phased out and is now expensive. Systems using R-410A are less costly to recharge." },
                { title: "Time of service (after-hours rates)", desc: "Emergency or after-hours calls may carry higher service fees. CoolHVAC is available 24/7 \u2014 ask about our current rates." },
              ].map((factor, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-5">
                  <div className="w-7 h-7 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <p className="font-bold text-navy-900 mb-1">{factor.title}</p>
                    <p className="text-gray-600 text-sm">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">When to Repair vs. Replace Your AC</h2>
            <p className="mb-4">
              A common rule of thumb: if the repair cost exceeds <strong>50% of the cost of a replacement system</strong> and your AC is over 10&ndash;12 years old, replacement is often the better long-term investment. An older system that keeps needing repairs will also cost you more in energy bills each month.
            </p>
            <p>
              CoolHVAC technicians can help you evaluate whether repair or replacement makes more sense for your specific situation. We provide free in-home estimates for system replacement.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">How to Get Accurate AC Repair Pricing</h2>
            <div className="space-y-3">
              {[
                "Get upfront written quotes before authorizing any work. A reputable contractor will always price before they proceed.",
                "Ask if the diagnostic fee is waived when you proceed with the repair. Many companies, including CoolHVAC, credit the diagnostic cost toward the repair.",
                "Ask about the warranty on parts and labor. CoolHVAC backs all repair work with a 90-day labor warranty.",
              ].map((tip, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inline CTA */}
          <div className="bg-red-600 text-white rounded-xl p-6">
            <p className="font-bold text-lg mb-2">Need AC repair in DC?</p>
            <p className="text-red-100 text-sm mb-4">CoolHVAC offers upfront pricing and same-day service. Call 202-455-0020 or schedule online.</p>
            <a href="/contact" className="inline-block bg-white text-red-600 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
              Schedule Repair
            </a>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-navy-900 mb-2">Is it worth repairing an old AC unit?</p>
                <p className="text-gray-600 text-sm">It depends on the age and the repair cost. If your system is under 10 years old and the repair is under $400, repair is usually worthwhile. For older systems or costly repairs, replacement may be more economical. A CoolHVAC technician can walk you through the numbers.</p>
              </div>
              <div>
                <p className="font-bold text-navy-900 mb-2">Do AC repair companies charge for estimates?</p>
                <p className="text-gray-600 text-sm">Most companies charge a diagnostic fee (typically $75&ndash;$150) to come out and assess the problem. CoolHVAC credits this fee toward the repair if you proceed with service.</p>
              </div>
              <div>
                <p className="font-bold text-navy-900 mb-2">How long does an AC repair take?</p>
                <p className="text-gray-600 text-sm">Most standard AC repairs are completed in a single visit, typically 1&ndash;2 hours. More involved repairs like compressor or coil replacement may take longer or require a return visit if parts need to be ordered.</p>
              </div>
            </div>
          </section>

        </article>

        {/* Footer link */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <a href="/services/ac-repair" className="text-blue-800 font-semibold hover:underline">
            Learn more about our AC repair services &rarr;
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
