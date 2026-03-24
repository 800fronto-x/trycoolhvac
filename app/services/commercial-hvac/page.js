
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Commercial HVAC Services Washington DC | CoolHVAC",
  description: "Commercial HVAC installation, repair, and maintenance in DC, Maryland, and Virginia. Office buildings, retail spaces, restaurants. Call CoolHVAC 202-455-0020.",
  alternates: { canonical: "/services/commercial-hvac" },
};

export default function CommercialHvac() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Commercial HVAC Services",
            "description": "Commercial HVAC installation, repair, and preventive maintenance for businesses across Washington DC, Maryland, and Northern Virginia. Licensed, insured, and available 24/7.",
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
              { "@type": "ListItem", "position": 3, "name": "Commercial HVAC", "item": "https://www.trycoolhvac.com/services/commercial-hvac" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer maintenance contracts for businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer flexible preventive maintenance contracts for commercial clients, including scheduled inspections, priority emergency response, and discounted repair rates."
                }
              },
              {
                "@type": "Question",
                "name": "Can you service rooftop HVAC units?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our commercial technicians are trained and equipped to service rooftop package units, split systems, and other commercial HVAC configurations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work after hours for commercial clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer 24/7 emergency service for commercial clients and can schedule non-emergency maintenance during off-hours to minimize disruption to your business."
                }
              },
              {
                "@type": "Question",
                "name": "What size commercial buildings do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service commercial properties of all sizes, from single-unit retail spaces to large office buildings and multi-tenant properties."
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
            <span className="text-sm font-medium text-gray-200">Licensed for Commercial Work in DC, MD &amp; VA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Commercial HVAC Services in Washington DC</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            CoolHVAC provides commercial HVAC installation, repair, and preventive maintenance for businesses across Washington DC, Maryland, and Northern Virginia. From office buildings and retail spaces to restaurants and multi-family properties &mdash; licensed, insured, and available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center">
              Request a Commercial Quote
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
            {["Office Buildings", "Retail Spaces", "Restaurants", "Multi-Family"].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Full-Service Commercial HVAC</p>
          <h2 className="text-3xl font-black text-navy-900">Commercial Services We Provide</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Commercial Installation",
              desc: "New HVAC system installation for commercial properties, sized and designed for your building\u2019s specific load requirements.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                </svg>
              )
            },
            {
              title: "Preventive Maintenance Contracts",
              desc: "Scheduled maintenance agreements with priority response, inspection reports, and discounted repair rates for commercial clients.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                </svg>
              )
            },
            {
              title: "Emergency Repairs",
              desc: "24/7 emergency HVAC repair for commercial properties. When your system goes down, every hour costs money \u2014 we respond fast.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
              )
            },
            {
              title: "Rooftop Unit Service",
              desc: "Our commercial technicians service all makes of rooftop package units, including installation, repair, and seasonal maintenance.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
              )
            },
            {
              title: "Ductwork Design & Install",
              desc: "Custom ductwork design and installation for new builds, renovations, and tenant improvements. Engineered for efficiency and code compliance.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                </svg>
              )
            },
            {
              title: "Energy Assessments",
              desc: "We evaluate your building\u2019s HVAC energy performance and identify opportunities to reduce operating costs through efficiency improvements.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
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

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Who We Serve</p>
            <h2 className="text-3xl font-black text-navy-900">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
            {[
              "Office Buildings",
              "Retail Stores",
              "Restaurants & Cafes",
              "Medical Offices",
              "Apartment Buildings",
              "Warehouses",
              "Government Buildings",
              "Schools",
              "Houses of Worship",
            ].map((industry, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center">
                <span className="text-gray-700 font-medium text-sm">{industry}</span>
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
              q: "Do you offer maintenance contracts for businesses?",
              a: "Yes. We offer flexible preventive maintenance contracts for commercial clients, including scheduled inspections, priority emergency response, and discounted repair rates."
            },
            {
              q: "Can you service rooftop HVAC units?",
              a: "Yes. Our commercial technicians are trained and equipped to service rooftop package units, split systems, and other commercial HVAC configurations."
            },
            {
              q: "Do you work after hours for commercial clients?",
              a: "Yes. We offer 24/7 emergency service for commercial clients and can schedule non-emergency maintenance during off-hours to minimize disruption to your business."
            },
            {
              q: "What size commercial buildings do you service?",
              a: "We service commercial properties of all sizes, from single-unit retail spaces to large office buildings and multi-tenant properties."
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
            <h3 className="text-2xl md:text-3xl font-black mb-2">Keep your business comfortable year-round.</h3>
            <p className="text-red-100">Commercial HVAC service across DC, Maryland &amp; Northern Virginia.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex-shrink-0">
            Request a Commercial Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
