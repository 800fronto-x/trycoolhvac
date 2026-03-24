
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "HVAC Installation Washington DC | Free Estimates | CoolHVAC",
  description: "Professional HVAC installation in DC, Maryland, and Virginia. Free in-home estimates, financing through GreenSky and Ally, NATE-certified installation. Call 202-455-0020.",
  alternates: { canonical: "/services/hvac-installation" },
};

export default function HvacInstallation() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "HVAC Installation",
            "description": "High-efficiency HVAC system installation across Washington DC, Maryland, and Northern Virginia. Free in-home estimates, financing through GreenSky and Ally, NATE-certified technicians.",
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
              { "@type": "ListItem", "position": 3, "name": "HVAC Installation", "item": "https://www.trycoolhvac.com/services/hvac-installation" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a new HVAC system cost in DC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A new HVAC system installation in the DC metro area typically ranges from $4,000\u2013$12,000 depending on system type, size, and efficiency rating. CoolHVAC provides free in-home estimates with no obligation."
                }
              },
              {
                "@type": "Question",
                "name": "How long does HVAC installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential HVAC installations are completed in one day. Complex systems or duct modifications may require 1\u20132 additional days."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer financing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer flexible financing options through GreenSky and Ally for qualifying installations. Ask us about current offers when you schedule your free estimate."
                }
              },
              {
                "@type": "Question",
                "name": "What size HVAC system do I need?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The right size depends on your home\u2019s square footage, insulation, windows, and other factors. Our technicians perform a Manual J load calculation to recommend the correct size \u2014 oversized and undersized systems both cause problems."
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
            <span className="text-sm font-medium text-gray-200">Free In-Home Estimates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">HVAC Installation in Washington DC &amp; the DMV</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC installs high-efficiency heating and cooling systems across Washington DC, Maryland, and Northern Virginia. Free in-home estimates, flexible financing through GreenSky and Ally, and a full installation workmanship guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center">
              Get a Free Estimate
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
            {["Free Estimates", "GreenSky & Ally Financing", "Installation Guarantee", "NATE Certified"].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems We Install */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">All System Types</p>
          <h2 className="text-3xl font-black text-navy-900">Systems We Install</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Central AC",
              desc: "High-efficiency central air conditioning systems sized and installed for your home\u2019s specific needs.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              )
            },
            {
              title: "Gas Furnaces",
              desc: "Energy-efficient gas furnaces from top brands, professionally installed with full commissioning and safety checks.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
                </svg>
              )
            },
            {
              title: "Heat Pumps",
              desc: "Modern heat pumps that efficiently handle both heating and cooling, ideal for the DC metro climate.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>
              )
            },
            {
              title: "Mini-Split Systems",
              desc: "Ductless mini-split systems for room additions, older homes, or areas without existing ductwork.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
              )
            },
            {
              title: "Ductless Systems",
              desc: "Multi-zone ductless systems that let you control the temperature in each room independently for maximum comfort.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"/>
                </svg>
              )
            },
            {
              title: "Dual-Fuel Systems",
              desc: "Dual-fuel systems combine a heat pump and gas furnace backup for ideal efficiency in the DC climate\u2019s variable winters.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              )
            },
          ].map((system, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
                {system.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-2">{system.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{system.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Brands We Install</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Carrier", "Lennox", "Trane", "Rheem", "Goodman", "Daikin", "York", "Bryant"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-gray-300 hover:text-gray-500 transition cursor-default tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">What to Expect</p>
          <h2 className="text-3xl font-black text-navy-900">Our Installation Process</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Free In-Home Estimate", desc: "A CoolHVAC technician visits your home to assess your current system, measure your space, and recommend the right replacement." },
            { step: "2", title: "Choose Your System", desc: "We walk you through your options, including efficiency ratings, brands, and financing. No pressure \u2014 just clear information." },
            { step: "3", title: "Professional Installation", desc: "Our NATE-certified team installs your new system with care, using proper techniques and following all local codes." },
            { step: "4", title: "Final Inspection & Walkthrough", desc: "We test the system fully and walk you through everything \u2014 thermostat settings, filter schedules, and warranty details." },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-lg mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financing */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <div className="mb-6">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Make It Affordable</p>
            <h2 className="text-3xl font-black text-navy-900">Flexible Financing Options</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            A new HVAC system is a significant investment, and we want to make it accessible. CoolHVAC offers flexible financing options through <strong className="text-navy-900">GreenSky</strong> and <strong className="text-navy-900">Ally</strong> for qualifying installations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Call or schedule online to ask about current offers. Our team will walk you through available plans when you receive your free in-home estimate.
          </p>
          <a href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-sm">
            Ask About Financing
          </a>
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
              q: "How much does a new HVAC system cost in DC?",
              a: "A new HVAC system installation in the DC metro area typically ranges from $4,000\u2013$12,000 depending on system type, size, and efficiency rating. CoolHVAC provides free in-home estimates with no obligation."
            },
            {
              q: "How long does HVAC installation take?",
              a: "Most residential HVAC installations are completed in one day. Complex systems or duct modifications may require 1\u20132 additional days."
            },
            {
              q: "Do you offer financing?",
              a: "Yes. We offer flexible financing options through GreenSky and Ally for qualifying installations. Ask us about current offers when you schedule your free estimate."
            },
            {
              q: "What size HVAC system do I need?",
              a: "The right size depends on your home\u2019s square footage, insulation, windows, and other factors. Our technicians perform a Manual J load calculation to recommend the correct size \u2014 oversized and undersized systems both cause problems."
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
            <h3 className="text-2xl md:text-3xl font-black mb-2">Ready to upgrade your system?</h3>
            <p className="text-red-100">Free in-home estimates. No obligation. Financing available.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex-shrink-0">
            Get a Free Estimate
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
