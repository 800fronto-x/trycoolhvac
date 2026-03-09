
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services(){
  return (
    <div>
      <Navbar/>
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">HVAC Services</h1>

        <h2 className="text-xl font-semibold mt-6">AC Repair</h2>
        <p>Air conditioning diagnostics, repairs and tune-ups.</p>

        <h2 className="text-xl font-semibold mt-6">Heating Repair</h2>
        <p>Furnace and heat pump repair across the DC metro area.</p>

        <h2 className="text-xl font-semibold mt-6">HVAC Installation</h2>
        <p>Full HVAC replacement and system upgrades.</p>
      </div>
      <Footer/>
    </div>
  )
}
