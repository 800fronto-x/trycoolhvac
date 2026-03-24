
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Indoor Air Quality Services Washington DC | CoolHVAC",
  description: "Improve indoor air quality in your DC home or business. Air purifiers, humidifiers, duct cleaning, and ventilation solutions. Call CoolHVAC 202-455-0020.",
  alternates: { canonical: "/services/indoor-air-quality" },
};

export default function IndoorAirQuality() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Indoor Air Quality Services",
            "description": "Indoor air quality solutions across Washington DC, Maryland, and Northern Virginia. Air purifiers, humidifiers, dehumidifiers, UV germicidal lights, and duct cleaning.",
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
              { "@type": "ListItem", "position": 3, "name": "Indoor Air Quality", "item": "https://www.trycoolhvac.com/services/indoor-air-quality" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best air purifier for a home in DC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Whole-home air purifiers installed in your HVAC system are more effective than portable units. We install systems that filter particles, kill bacteria, and neutralize odors \u2014 ask us about the right fit for your home."
                }
              },
              {
                "@type": "Question",
                "name": "Does duct cleaning really make a difference?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, especially in older homes or after renovations. Clean ducts reduce dust, allergens, and mold spores circulating through your home. We recommend duct cleaning every 3\u20135 years."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my home is too humid or too dry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ideal indoor humidity is 30\u201350%. Signs of too much humidity include condensation on windows, musty smells, or mold. Too little humidity causes dry skin, static electricity, and wood cracking."
                }
              },
              {
                "@type": "Question",
                "name": "Can you install a whole-home humidifier on any system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In most cases, yes. Whole-home humidifiers connect directly to your HVAC system and work automatically. Our technicians will assess your system and recommend the right unit."
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
            <span className="text-sm font-medium text-gray-200">Breathe Cleaner Air</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Indoor Air Quality Services in Washington DC</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC provides indoor air quality solutions across Washington DC, Maryland, and Northern Virginia &mdash; including air purifiers, whole-home humidifiers and dehumidifiers, UV germicidal lights, and duct cleaning. Breathe cleaner, healthier air at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center">
              Schedule an IAQ Consultation
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
            {["Air Purifiers", "Duct Cleaning", "Humidity Control", "UV Germicidal Lights"].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IAQ Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Complete IAQ Solutions</p>
          <h2 className="text-3xl font-black text-navy-900">Our IAQ Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Air Purifiers & Filtration",
              desc: "We install whole-home air purification systems that integrate with your HVAC to remove particles, allergens, bacteria, and odors. Far more effective than portable units and requires no daily attention.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33"/>
                </svg>
              )
            },
            {
              title: "Whole-Home Humidifiers",
              desc: "Whole-home humidifiers connect to your HVAC system to maintain ideal humidity levels automatically. Reduce dry skin, static electricity, and protect wood furniture and flooring all winter.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 01-8.25-8.25c0-4.5 8.25-13.5 8.25-13.5s8.25 9 8.25 13.5A8.25 8.25 0 0112 21z"/>
                </svg>
              )
            },
            {
              title: "Dehumidifiers",
              desc: "DC summers bring high humidity that can lead to mold growth and musty odors. A whole-home dehumidifier keeps your home comfortable and protects your structure from moisture damage.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                </svg>
              )
            },
            {
              title: "UV Germicidal Lights",
              desc: "UV lights installed in your HVAC system kill bacteria, viruses, and mold at the source. Particularly effective for homes with allergy sufferers or immune-compromised family members.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              )
            },
            {
              title: "Duct Cleaning",
              desc: "Over time, ducts accumulate dust, pet dander, mold spores, and debris. Professional duct cleaning improves airflow, reduces allergens, and eliminates odors circulating through your home.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
                </svg>
              )
            },
          ].map((service, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signs */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Watch for These Signs</p>
            <h2 className="text-3xl font-black text-navy-900">Signs Your Air Quality Needs Attention</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              "Frequent allergies or recurring illness at home",
              "Dusty surfaces that build up quickly",
              "Dry or stuffy air indoors",
              "Musty odors from vents or rooms",
              "Visible mold or mildew near vents",
              "Excessive condensation or high humidity",
            ].map((sign, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-5 py-4">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">{sign}</span>
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
              q: "What is the best air purifier for a home in DC?",
              a: "Whole-home air purifiers installed in your HVAC system are more effective than portable units. We install systems that filter particles, kill bacteria, and neutralize odors \u2014 ask us about the right fit for your home."
            },
            {
              q: "Does duct cleaning really make a difference?",
              a: "Yes, especially in older homes or after renovations. Clean ducts reduce dust, allergens, and mold spores circulating through your home. We recommend duct cleaning every 3\u20135 years."
            },
            {
              q: "How do I know if my home is too humid or too dry?",
              a: "Ideal indoor humidity is 30\u201350%. Signs of too much humidity include condensation on windows, musty smells, or mold. Too little humidity causes dry skin, static electricity, and wood cracking."
            },
            {
              q: "Can you install a whole-home humidifier on any system?",
              a: "In most cases, yes. Whole-home humidifiers connect directly to your HVAC system and work automatically. Our technicians will assess your system and recommend the right unit."
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
            <h3 className="text-2xl md:text-3xl font-black mb-2">Breathe easier at home.</h3>
            <p className="text-red-100">Schedule an IAQ consultation with a CoolHVAC technician.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex-shrink-0">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
