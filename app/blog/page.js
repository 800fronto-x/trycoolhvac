
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "HVAC Tips & Guides | CoolHVAC Blog",
  description: "HVAC tips, maintenance guides, and DC-area insights from CoolHVAC. Learn how to keep your heating and cooling system running at its best.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "How Much Does AC Repair Cost in Washington DC?",
    slug: "how-much-does-ac-repair-cost-washington-dc",
    date: "June 2025",
    category: "AC Repair",
    excerpt: "AC repair in Washington DC typically costs $150\u2013$500 depending on the type of repair. Learn what factors affect pricing and when to repair vs. replace.",
  },
  {
    title: "5 Signs You Need a New HVAC System",
    slug: "signs-you-need-a-new-hvac-system",
    date: "July 2025",
    category: "HVAC Installation",
    excerpt: "Is your system over 15 years old, cycling frequently, or driving up your energy bills? Learn the five key signs it\u2019s time to replace your HVAC system.",
  },
  {
    title: "How Often Should You Service Your HVAC System?",
    slug: "how-often-should-you-service-hvac",
    date: "August 2025",
    category: "Maintenance",
    excerpt: "HVAC systems should be serviced twice a year. Learn the ideal maintenance schedule and what\u2019s included in a professional tune-up.",
  },
  {
    title: "Best HVAC Brands of 2025: What We Install and Why",
    slug: "best-hvac-brands-2025",
    date: "September 2025",
    category: "HVAC Installation",
    excerpt: "We install Carrier, Lennox, Trane, Rheem, Goodman, Daikin, York, and Bryant. Here\u2019s what sets each brand apart and which is right for your home.",
  },
  {
    title: "Heat Pump vs. Furnace: What\u2019s Best for the DC Climate?",
    slug: "heat-pump-vs-furnace-dc-climate",
    date: "October 2025",
    category: "HVAC Installation",
    excerpt: "DC winters are mild enough for heat pumps to work well, but gas furnaces heat faster and cost less upfront. We break down the pros, cons, and costs.",
  },
  {
    title: "HVAC Maintenance Checklist for DC Homeowners",
    slug: "hvac-maintenance-checklist-homeowners",
    date: "November 2025",
    category: "Maintenance",
    excerpt: "Monthly, seasonal, and annual HVAC maintenance tasks every DC homeowner should know to keep their system running efficiently year-round.",
  },
];

export default function BlogIndex() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "CoolHVAC Blog",
        "description": "HVAC tips, maintenance guides, and DC-area insights from CoolHVAC.",
        "url": "https://www.trycoolhvac.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "CoolHVAC",
          "url": "https://www.trycoolhvac.com"
        }
      }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sm font-medium text-gray-200">Tips &amp; Guides from CoolHVAC</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">HVAC Tips &amp; Guides for DC Homeowners</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Practical advice on keeping your heating and cooling system running efficiently, preventing breakdowns, and making smart decisions about HVAC service.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition group">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h2 className="text-lg font-bold text-navy-900 mb-3 leading-snug group-hover:text-red-600 transition">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-700 transition">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Need HVAC service in the DC area?</h3>
            <p className="text-red-100">Same-day service available. Call 202-455-0020 or schedule online.</p>
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
