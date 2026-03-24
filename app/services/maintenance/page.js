
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "HVAC Maintenance Plans Washington DC | CoolHVAC",
  description: "Preventive HVAC maintenance plans in DC, Maryland, and Virginia. Seasonal tune-ups, priority scheduling, extended equipment life. Call CoolHVAC 202-455-0020.",
  alternates: { canonical: "/services/maintenance" },
};

export default function Maintenance() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "HVAC Preventive Maintenance",
            "description": "Preventive HVAC maintenance plans for homes and businesses across Washington DC, Maryland, and Northern Virginia. Seasonal tune-ups, priority scheduling, and repair discounts.",
            "provider": {
              "@type": "HVACBusiness",
              "name": "CoolHVAC",
              "telephone": "202-455-0020",
              "url": "https://www.trycoolhvac.com"
            },
            "areaServed": [
              { "@type": "State", "name": "District of Columbia" },
              { "@type": "State", "name": "Maryland" },
              { "@type": "State", "name": "Virginia" }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trycoolhvac.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trycoolhvac.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Maintenance", "item": "https://www.trycoolhvac.com/services/maintenance" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How often should I get my HVAC serviced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend twice a year \u2014 a cooling tune-up in spring and a heating tune-up in fall. This keeps your system running efficiently and catches small issues before they become expensive repairs."
                }
              },
              {
                "@type": "Question",
                "name": "What does a maintenance visit include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our tune-ups include a full inspection of your system, cleaning of coils and components, lubrication, refrigerant check, filter replacement, and a written summary of your system\u2019s condition."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need maintenance if my system is new?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. New systems benefit from maintenance to ensure installation was done correctly and to keep manufacturer warranties valid. Most HVAC warranties require documented annual maintenance."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if you find a problem during maintenance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We\u2019ll tell you exactly what we found, show you the issue, and provide an upfront quote before any repair work begins. No pressure."
                }
              }
            ]
          }
        ]
      }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-200">Prevent Costly Breakdowns</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">HVAC Maintenance Plans in Washington DC</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC offers preventive HVAC maintenance plans for homes and businesses across Washington DC, Maryland, and Northern Virginia. Seasonal tune-ups, priority scheduling, and discounts on repairs &mdash; designed to extend equipment life and prevent costly breakdowns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center">
              Schedule a Tune-Up
            </a>
            <a href="tel:2024550020" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-bold transition inline-flex items-center justify-center">
              Call 202-455-0020
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Spring & Fall Tune-Ups", "Priority Scheduling", "Extended Equipment Life", "Lower Energy Bills"].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in a Tune-Up */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Comprehensive Service</p>
          <h2 className="text-3xl font-black text-navy-900">What&apos;s Included in a Tune-Up</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 text-xl">Cooling Tune-Up</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Inspect and test refrigerant levels",
                "Clean evaporator and condenser coils",
                "Check all electrical connections",
                "Lubricate moving parts",
                "Test thermostat operation and calibration",
                "Inspect ductwork for leaks",
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
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 text-xl">Heating Tune-Up</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Inspect heat exchanger for cracks",
                "Check burners and ignition system",
                "Test safety controls and limits",
                "Check flue and venting for blockages",
                "Lubricate blower motor and bearings",
                "Replace air filter",
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
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">The Value of Maintenance</p>
            <h2 className="text-3xl font-black text-navy-900">Why Regular Maintenance Matters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Prevent Breakdowns",
                desc: "Catch small issues before they become expensive emergency repairs.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                  </svg>
                )
              },
              {
                title: "Lower Energy Bills",
                desc: "A well-maintained system runs more efficiently, using less energy to heat or cool your home.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"/>
                  </svg>
                )
              },
              {
                title: "Extend Equipment Life",
                desc: "Regular maintenance can add years to the lifespan of your HVAC equipment.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                )
              },
              {
                title: "Keep Warranty Valid",
                desc: "Most HVAC manufacturers require documented annual maintenance to keep warranties in effect.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                  </svg>
                )
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition text-center">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Common Questions</p>
          <h2 className="text-3xl font-black text-navy-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 max-w-3xl">
          {[
            {
              q: "How often should I get my HVAC serviced?",
              a: "We recommend twice a year \u2014 a cooling tune-up in spring and a heating tune-up in fall. This keeps your system running efficiently and catches small issues before they become expensive repairs."
            },
            {
              q: "What does a maintenance visit include?",
              a: "Our tune-ups include a full inspection of your system, cleaning of coils and components, lubrication, refrigerant check, filter replacement, and a written summary of your system\u2019s condition."
            },
            {
              q: "Do I need maintenance if my system is new?",
              a: "Yes. New systems benefit from maintenance to ensure installation was done correctly and to keep manufacturer warranties valid. Most HVAC warranties require documented annual maintenance."
            },
            {
              q: "What happens if you find a problem during maintenance?",
              a: "We\u2019ll tell you exactly what we found, show you the issue, and provide an upfront quote before any repair work begins. No pressure."
            },
          ].map((faq, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="font-bold text-navy-900 text-lg pr-4">{faq.q}</h3>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Keep your system running all year.</h3>
            <p className="text-red-100">Schedule your seasonal tune-up today.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex-shrink-0">
            Schedule a Tune-Up
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
