
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import locations from "../../data/locations";

export const metadata = {
  title: "HVAC Service Areas | 163 Locations in DC, MD & VA | TryCool HVAC",
  description: "TryCool HVAC serves 163+ locations across Washington DC, Maryland, and Northern Virginia. Find expert heating and AC services near you.",
};

// Group locations by region
function groupByRegion(locs) {
  const groups = {};
  locs.forEach((loc) => {
    if (!groups[loc.region]) groups[loc.region] = [];
    groups[loc.region].push(loc);
  });
  return groups;
}

export default function Locations() {
  const grouped = groupByRegion(locations);
  const regionOrder = [
    "Washington DC",
    "Montgomery County",
    "Prince George's County",
    "Anne Arundel County",
    "Howard County",
    "Frederick County",
    "Northern Virginia",
    "Fairfax County",
    "Loudoun County",
    "Prince William County",
    "Stafford County",
    "Spotsylvania County",
    "Fauquier County",
    "Culpeper County",
    "Warren County",
    "Frederick County VA",
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black mb-4">HVAC Service Areas</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            TryCool HVAC proudly serves <strong className="text-white">{locations.length} locations</strong> across Washington DC, Maryland, and Northern Virginia. Click any location below for local service information.
          </p>
        </div>
      </section>

      {/* Location Grid by Region */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {regionOrder.map((region) => {
          const locs = grouped[region];
          if (!locs) return null;
          return (
            <div key={region} className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                {region}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4">
                {locs.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-blue-800 hover:bg-blue-50 hover:shadow transition"
                  >
                    <p className="font-semibold text-navy-900 text-sm">{loc.city}</p>
                    <p className="text-gray-400 text-xs">{loc.state} {loc.zip}</p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Don&apos;t see your area?</h3>
            <p className="text-red-100">Call us — we may still be able to help.</p>
          </div>
          <a href="tel:2025551234" className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
            (202) 555-1234
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
