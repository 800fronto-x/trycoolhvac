
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact(){
  return (
    <div>
      <Navbar/>
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Request HVAC Service</h1>

        <form className="space-y-4">
          <input className="w-full border p-2" placeholder="Name"/>
          <input className="w-full border p-2" placeholder="Phone"/>
          <input className="w-full border p-2" placeholder="Email"/>
          <textarea className="w-full border p-2" placeholder="Describe the issue"/>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit Request
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
