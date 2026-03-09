
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Reliable Heating & Air Conditioning Services
        </h1>
        <p className="mb-6">
          Serving Washington DC, Maryland and Northern Virginia
        </p>
        <a className="bg-blue-600 text-white px-6 py-3 rounded" href="/contact">
          Request Service
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-8 p-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">AC Repair</h2>
          <p>Fast air conditioning repair across the DC metro area.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Heating Repair</h2>
          <p>Keep your home warm with professional furnace service.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">HVAC Installation</h2>
          <p>Upgrade to a high efficiency HVAC system.</p>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
