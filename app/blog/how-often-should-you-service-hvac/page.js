
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Often Should You Service Your HVAC System? | CoolHVAC",
  description: "HVAC systems should be serviced twice a year. Learn the ideal maintenance schedule for your heating and cooling system and what\u2019s included in a tune-up.",
  alternates: { canonical: "/blog/how-often-should-you-service-hvac" },
};

export default function HvacServiceFrequencyPost() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How Often Should You Service Your HVAC System?",
        "author": { "@type": "Organization", "name": "CoolHVAC" },
        "datePublished": "2025-08-01",
        "url": "https://www.trycoolhvac.com/blog/how-often-should-you-service-hvac",
        "publisher": {
          "@type": "Organization",
          "name": "CoolHVAC",
          "url": "https://www.trycoolhvac.com"
        },
        "description": "HVAC systems should be serviced twice a year. Learn the ideal maintenance schedule for your heating and cooling system and what\u2019s included in a tune-up."
      }} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Maintenance</span>
            <span className="text-gray-400 text-sm">August 2025 &middot; 4 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 leading-tight">How Often Should You Service Your HVAC System?</h1>
          <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-5 mb-8">
            <p className="text-gray-700 leading-relaxed">
              HVAC systems should be serviced <strong>twice a year</strong> &mdash; once in spring for your air conditioning and once in fall for your heating system. Regular tune-ups prevent costly breakdowns, keep your system running efficiently, and are often required to maintain manufacturer warranties.
            </p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">The Recommended HVAC Maintenance Schedule</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-blue-50 rounded-xl p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                  </svg>
                  <p className="font-bold text-navy-900">Spring AC Tune-Up</p>
                </div>
                <p className="text-gray-600 text-sm">Schedule your cooling system tune-up in March, April, or early May &mdash; before DC&apos;s hot, humid summer arrives. This gives you time to address any issues before you actually need the AC.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
                  </svg>
                  <p className="font-bold text-navy-900">Fall Heating Tune-Up</p>
                </div>
                <p className="text-gray-600 text-sm">Schedule your heating system tune-up in September or October, before the first cold snap hits. A fall tune-up ensures your furnace or heat pump is ready when you need it most.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">What&apos;s Included in an HVAC Tune-Up</h2>
            <p className="mb-4">A professional HVAC tune-up from CoolHVAC includes:</p>
            <ul className="space-y-2">
              {[
                "Full system inspection and safety check",
                "Cleaning of evaporator and condenser coils",
                "Refrigerant level check and adjustment if needed",
                "Lubrication of all moving parts",
                "Tightening of electrical connections",
                "Thermostat calibration test",
                "Air filter replacement",
                "Written summary of your system\u2019s condition",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">What Happens If You Skip Maintenance?</h2>
            <p className="mb-3">
              Skipping maintenance doesn&apos;t just increase the chance of a breakdown &mdash; it also costs you money every month. A dirty, poorly maintained system works harder to achieve the same results, consuming more energy in the process.
            </p>
            <p className="mb-3">
              Industry data shows that systems without regular maintenance can lose up to 5% of their efficiency per year. After five years without a tune-up, your system might be running at 75% of its original efficiency &mdash; which means higher bills and more wear on components.
            </p>
            <p>
              Many manufacturers also require documented annual maintenance to honor warranty claims. Skipping service could leave you responsible for a repair that would otherwise be covered.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Signs Your HVAC Needs Service Right Now</h2>
            <p className="mb-4">Don&apos;t wait for your scheduled tune-up if you notice any of these:</p>
            <div className="space-y-3">
              {[
                "Unusual noises (banging, rattling, or squealing)",
                "Uneven temperatures or hot/cold spots in the home",
                "Unexpected spike in energy bills",
                "Ice forming on the indoor or outdoor unit",
                "Musty or burning odors from vents",
              ].map((sign, i) => (
                <div key={i} className="flex items-start space-x-3 bg-gray-50 rounded-lg px-4 py-3">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{sign}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Inline CTA */}
          <div className="bg-red-600 text-white rounded-xl p-6">
            <p className="font-bold text-lg mb-2">Ready to schedule your seasonal tune-up?</p>
            <p className="text-red-100 text-sm mb-4">CoolHVAC offers spring and fall maintenance tune-ups across the DC metro area. Call 202-455-0020 or schedule online.</p>
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
