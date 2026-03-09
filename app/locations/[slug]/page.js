
import { notFound } from "next/navigation";
import locations from "../../../data/locations";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// Generate static pages for all 163 locations at build time
export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

// Dynamic SEO metadata per location
export async function generateMetadata({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) return {};

  const title = `HVAC Services in ${loc.city}, ${loc.state} | TryCool HVAC`;
  const description = `Professional heating and air conditioning services in ${loc.city}, ${loc.state}. AC repair, furnace repair, and HVAC installation. Call (202) 555-1234 for same-day service in ${loc.county}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

// Get nearby locations for internal linking
function getNearbyLocations(currentSlug, currentRegion) {
  return locations
    .filter((l) => l.slug !== currentSlug && l.region === currentRegion)
    .slice(0, 6);
}

// Seasonal content that varies by location for unique SEO content
function getSeasonalContent(loc) {
  const stateContent = {
    DC: {
      summer: "Washington DC summers bring extreme heat and humidity, with temperatures regularly exceeding 95°F. A reliable air conditioning system is essential for comfort and health.",
      winter: "DC winters can be unpredictable, with temperatures dropping into the 20s and occasional ice storms. A well-maintained heating system keeps your home safe and warm.",
    },
    MD: {
      summer: `${loc.county} experiences hot, humid summers that put significant strain on air conditioning systems. Regular maintenance helps prevent mid-summer breakdowns when you need cooling most.`,
      winter: `Maryland winters in ${loc.county} bring freezing temperatures and heavy snowfall. A dependable furnace or heat pump is critical for keeping your family comfortable through the cold months.`,
    },
    VA: {
      summer: `Northern Virginia summers are known for intense heat and humidity. Homes in ${loc.city} depend on efficient air conditioning to stay comfortable from June through September.`,
      winter: `${loc.city} homeowners face cold winters with temperatures frequently below freezing. Reliable heating service ensures your family stays warm and your pipes stay protected.`,
    },
  };
  return stateContent[loc.state] || stateContent.DC;
}

export default function LocationPage({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  const nearby = getNearbyLocations(loc.slug, loc.region);
  const seasonal = getSeasonalContent(loc);

  const services = [
    {
      title: `AC Repair in ${loc.city}`,
      desc: `Fast, reliable air conditioning repair for homes and businesses in ${loc.city}, ${loc.state}. Our certified technicians diagnose and fix all AC makes and models with same-day service available.`,
      features: ["Same-day emergency service", "All AC brands serviced", "Upfront flat-rate pricing", "Parts and labor warranty"],
    },
    {
      title: `Heating & Furnace Repair in ${loc.city}`,
      desc: `Don't get left in the cold. TryCool HVAC provides expert furnace and heat pump repair throughout ${loc.city} and surrounding ${loc.county} areas. Available 24/7 for heating emergencies.`,
      features: ["24/7 emergency heating repair", "Furnace and heat pump service", "Carbon monoxide safety checks", "Energy efficiency assessments"],
    },
    {
      title: `HVAC Installation in ${loc.city}`,
      desc: `Ready for a new HVAC system? We install high-efficiency heating and cooling systems for ${loc.city} homeowners. Free in-home estimates and flexible financing available.`,
      features: ["Free in-home estimates", "High-efficiency systems", "Flexible financing options", "10-year installation guarantee"],
    },
    {
      title: `AC & Heating Maintenance in ${loc.city}`,
      desc: `Preventive maintenance keeps your HVAC system running efficiently and extends its lifespan. Our ${loc.city} maintenance plans include seasonal tune-ups and priority emergency service.`,
      features: ["Spring and fall tune-ups", "Priority scheduling", "15% discount on repairs", "No overtime charges"],
    },
  ];

  // JSON-LD structured data for local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `TryCool HVAC - ${loc.city}, ${loc.state}`,
    description: `Professional HVAC services in ${loc.city}, ${loc.state}. AC repair, heating repair, and installation.`,
    url: `https://trycoolhvac.com/locations/${loc.slug}`,
    telephone: "(202) 555-1234",
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "State",
        name: loc.state === "DC" ? "District of Columbia" : loc.state === "MD" ? "Maryland" : "Virginia",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <a href="/locations" className="hover:text-white">Service Areas</a>
            <span className="mx-2">/</span>
            <span className="text-white">{loc.city}, {loc.state}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            HVAC Services in {loc.city}, {loc.state}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">
            Professional heating and air conditioning repair, installation, and maintenance for homes and businesses in {loc.city} and {loc.county}. Upfront pricing. Same-day service. Satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition">
              Schedule Service in {loc.city}
            </a>
            <a href="tel:2025551234" className="text-white font-bold text-xl hover:text-red-400 transition">
              (202) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Seasonal Content for SEO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-800 mb-2">Summer Cooling in {loc.city}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{seasonal.summer}</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-red-700 mb-2">Winter Heating in {loc.city}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{seasonal.winter}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-10">
            HVAC Services Available in {loc.city}, {loc.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-xs text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TryCool in This Area */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-6">
            Why {loc.city} Homeowners Choose TryCool HVAC
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy-900 mb-2">Local {loc.county} Experts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our technicians know {loc.city} and {loc.county} inside and out. We understand the local climate challenges and building codes specific to your area.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-900 mb-2">Fast Response Times</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With technicians based near {loc.city}, we offer same-day service for most repairs. Emergency heating and AC repair is available 24/7, including holidays.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-900 mb-2">5-Star Rated Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {loc.city} customers rate us 5/5 stars. We provide upfront pricing, quality workmanship, and a satisfaction guarantee on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-red-600 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Need HVAC service in {loc.city}?</h3>
            <p className="text-red-100">Call now or schedule online — same-day service available.</p>
          </div>
          <div className="flex space-x-3">
            <a href="/contact" className="bg-white text-red-600 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">Schedule Service</a>
            <a href="/quote" className="bg-navy-900 text-white font-bold px-6 py-3 rounded hover:bg-navy-800 transition">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas - internal linking for SEO */}
      {nearby.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-navy-900 mb-6">
              Nearby Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {nearby.map((n) => (
                <a
                  key={n.slug}
                  href={`/locations/${n.slug}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-blue-800 hover:shadow transition"
                >
                  <p className="font-semibold text-navy-900 text-sm">{n.city}</p>
                  <p className="text-gray-500 text-xs">{n.state}</p>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="/locations" className="text-blue-800 font-semibold hover:underline">
                View all {locations.length} service areas →
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
