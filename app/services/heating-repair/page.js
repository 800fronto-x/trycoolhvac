
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Heating & Furnace Repair Washington DC | 24/7 | CoolHVAC",
  description: "Fast heating and furnace repair in DC, Maryland, and Virginia. Available 24/7 for emergencies. NATE-certified technicians. Call CoolHVAC 202-455-0020.",
  alternates: { canonical: "/services/heating-repair" },
};

export default function HeatingRepair() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Heating & Furnace Repair",
            "description": "24/7 emergency heating and furnace repair across Washington DC, Maryland, and Northern Virginia. NATE-certified technicians, same-day availability, upfront pricing.",
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
              { "@type": "ListItem", "position": 3, "name": "Heating Repair", "item": "https://www.trycoolhvac.com/services/heating-repair" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are signs my furnace needs repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common signs include no heat or weak airflow, strange noises (banging, rattling), a yellow pilot light (should be blue), frequent cycling on and off, or sudden spikes in your heating bill."
                }
              },
              {
                "@type": "Question",
                "name": "Do you repair heat pumps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We repair all types of heat pumps, including air-source, ground-source, and mini-split heat pump systems."
                }
              },
              {
                "@type": "Question",
                "name": "Is it safe to run my furnace if it\u2019s making noise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on the noise. Banging or booming sounds can indicate a dangerous delayed ignition and should be addressed immediately. Call 202-455-0020 for 24/7 emergency service."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a furnace repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most furnace repairs are completed in a single visit, typically 1\u20133 hours. Our technicians carry common replacement parts to resolve issues same-day."
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
            <span className="text-sm font-medium text-gray-200">24/7 Emergency Heating Repair</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Heating &amp; Furnace Repair in Washington DC</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC provides 24/7 emergency heating and furnace repair across Washington DC, Maryland, and Northern Virginia. NATE-certified technicians service all furnace, heat pump, and boiler systems &mdash; with same-day availability and upfront pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center">
              Schedule Heating Repair
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
            {["24/7 Emergency Service", "Furnaces & Heat Pumps", "Same-Day Availability", "NATE Certified"].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heating Systems We Repair */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Full-Service Heating Repair</p>
          <h2 className="text-3xl font-black text-navy-900">Heating Systems We Repair</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Gas Furnaces",
              desc: "We repair all gas furnace brands and models, including ignition issues, heat exchanger problems, and burner failures.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
                </svg>
              )
            },
            {
              title: "Heat Pumps",
              desc: "From air-source to ground-source, our technicians diagnose and repair all heat pump configurations, including mini-splits.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              )
            },
            {
              title: "Electric Furnaces",
              desc: "We service electric heating systems, including element replacement, sequencer repairs, and blower motor issues.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              )
            },
            {
              title: "Boilers",
              desc: "Our team services residential and light commercial boiler systems, including pressure issues, pump failures, and valve repairs.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
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

      {/* Common Heating Problems */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">We Diagnose &amp; Fix</p>
            <h2 className="text-3xl font-black text-navy-900">Common Heating Problems</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              "No heat or insufficient heat",
              "Uneven heating throughout the home",
              "Furnace won\u2019t start or ignite",
              "Strange smells or sounds",
              "High utility bills",
              "Frequent cycling on and off",
            ].map((problem, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-5 py-4">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Simple &amp; Transparent</p>
          <h2 className="text-3xl font-black text-navy-900">Our Repair Process</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Diagnose", desc: "Our technician arrives and performs a thorough diagnostic of your heating system to identify the exact cause of the problem." },
            { step: "2", title: "Quote", desc: "We provide a clear, upfront written quote before any repair work begins. You approve it first \u2014 no hidden fees." },
            { step: "3", title: "Repair", desc: "Most heating repairs are completed same-day. Our trucks are stocked with common parts so you\u2019re not left without heat." },
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
                q: "What are signs my furnace needs repair?",
                a: "Common signs include no heat or weak airflow, strange noises (banging, rattling), a yellow pilot light (should be blue), frequent cycling on and off, or sudden spikes in your heating bill."
              },
              {
                q: "Do you repair heat pumps?",
                a: "Yes. We repair all types of heat pumps, including air-source, ground-source, and mini-split heat pump systems."
              },
              {
                q: "Is it safe to run my furnace if it\u2019s making noise?",
                a: "It depends on the noise. Banging or booming sounds can indicate a dangerous delayed ignition and should be addressed immediately. Call 202-455-0020 for 24/7 emergency service."
              },
              {
                q: "How long does a furnace repair take?",
                a: "Most furnace repairs are completed in a single visit, typically 1\u20133 hours. Our technicians carry common replacement parts to resolve issues same-day."
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
            <h3 className="text-2xl md:text-3xl font-black mb-2">Heating not working? Don&apos;t wait.</h3>
            <p className="text-red-100">24/7 emergency heating repair across the DC metro area.</p>
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
