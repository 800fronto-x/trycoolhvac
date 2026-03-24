
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "AC Repair Washington DC | Same-Day Service | CoolHVAC",
  description: "Expert AC repair in Washington DC, Maryland, and Northern Virginia. NATE-certified technicians, same-day service, upfront pricing. Call CoolHVAC at 202-455-0020.",
  alternates: { canonical: "/services/ac-repair" },
};

export default function AcRepair() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "AC Repair",
            "description": "Same-day AC repair across Washington DC, Maryland, and Northern Virginia. NATE-certified technicians, upfront pricing, 90-day labor warranty.",
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
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AC Repair Services"
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trycoolhvac.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trycoolhvac.com/services" },
              { "@type": "ListItem", "position": 3, "name": "AC Repair", "item": "https://www.trycoolhvac.com/services/ac-repair" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does AC repair cost in DC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AC repair costs in the DC metro area typically range from $150\u2013$500 depending on the issue. CoolHVAC provides upfront pricing before any work begins \u2014 no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "Do you service all AC brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our NATE-certified technicians service all major brands including Carrier, Lennox, Trane, Rheem, Goodman, Daikin, York, and Bryant."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you come out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer same-day service for most AC repairs across the DC metro area. For emergencies, call 202-455-0020 \u2014 we\u2019re available 24/7."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer a warranty on repairs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All repair work is backed by a 90-day labor warranty. Parts carry the manufacturer\u2019s warranty."
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
            <span className="text-sm font-medium text-gray-200">NATE-Certified Technicians</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">AC Repair in Washington DC &amp; the DMV</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC provides same-day AC repair across Washington DC, Maryland, and Northern Virginia. Our NATE-certified technicians diagnose and fix all makes and models &mdash; with upfront pricing and a 90-day labor warranty on every repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center space-x-2">
              <span>Schedule AC Repair</span>
            </a>
            <a href="tel:2024550020" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-bold transition inline-flex items-center justify-center space-x-2">
              <span>Call 202-455-0020</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Same-Day Service" },
              { label: "All Makes & Models" },
              { label: "90-Day Labor Warranty" },
              { label: "NATE Certified" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common AC Problems */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">We Fix It All</p>
          <h2 className="text-3xl font-black text-navy-900">Common AC Problems We Fix</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Not Cooling",
              desc: "Your AC is running but the house stays warm — we diagnose refrigerant, compressor, and airflow issues fast.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              )
            },
            {
              title: "Blowing Warm Air",
              desc: "Warm air from your vents usually means a refrigerant leak or a failing compressor — both are repairs we handle same-day.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>
                </svg>
              )
            },
            {
              title: "Strange Noises",
              desc: "Banging, rattling, or squealing sounds indicate loose parts or motor problems that need immediate attention.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
                </svg>
              )
            },
            {
              title: "Leaking Water",
              desc: "Water pooling around your unit is often a clogged condensate drain or frozen evaporator coil — we clear it quickly.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 01-8.25-8.25c0-4.5 8.25-13.5 8.25-13.5s8.25 9 8.25 13.5A8.25 8.25 0 0112 21z"/>
                </svg>
              )
            },
            {
              title: "Short Cycling",
              desc: "An AC that turns on and off repeatedly is often oversized, low on refrigerant, or has a failing thermostat.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>
              )
            },
            {
              title: "High Energy Bills",
              desc: "A sudden spike in your electric bill often means your AC is working harder than it should — we find and fix the root cause.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"/>
                </svg>
              )
            },
          ].map((problem, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
                {problem.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Repair Process */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Simple &amp; Transparent</p>
            <h2 className="text-3xl font-black text-navy-900">Our Repair Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Diagnose", desc: "Our technician arrives and performs a full diagnostic to pinpoint the exact cause of your AC problem. No guesswork." },
              { step: "2", title: "Quote", desc: "Before touching anything, we give you an upfront written quote. You approve it — or you don\u2019t. No pressure, no surprises." },
              { step: "3", title: "Repair", desc: "Once approved, we complete the repair on the spot in most cases. We carry common parts on every truck so you\u2019re not waiting days for a fix." },
            ].map((s, i) => (
              <div key={i} className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CoolHVAC */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">The CoolHVAC Difference</p>
          <h2 className="text-3xl font-black text-navy-900">Why Choose CoolHVAC for AC Repair?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {[
            "NATE-certified technicians trained on all makes and models",
            "Same-day availability for most AC repairs in the DC metro area",
            "Upfront pricing guarantee — you approve the quote before work begins",
            "90-day labor warranty on every repair we perform",
          ].map((point, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="text-3xl font-black text-navy-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            {[
              {
                q: "How much does AC repair cost in DC?",
                a: "AC repair costs in the DC metro area typically range from $150\u2013$500 depending on the issue. CoolHVAC provides upfront pricing before any work begins \u2014 no surprises."
              },
              {
                q: "Do you service all AC brands?",
                a: "Yes. Our NATE-certified technicians service all major brands including Carrier, Lennox, Trane, Rheem, Goodman, Daikin, York, and Bryant."
              },
              {
                q: "How quickly can you come out?",
                a: "We offer same-day service for most AC repairs across the DC metro area. For emergencies, call 202-455-0020 \u2014 we\u2019re available 24/7."
              },
              {
                q: "Do you offer a warranty on repairs?",
                a: "Yes. All repair work is backed by a 90-day labor warranty. Parts carry the manufacturer\u2019s warranty."
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">AC not working? We can help today.</h3>
            <p className="text-red-100">Same-day service available across the DC metro area.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex-shrink-0">
            Schedule Service
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
