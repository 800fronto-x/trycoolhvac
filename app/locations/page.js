
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const locations = [
  "Washington DC",
  "Bethesda MD",
  "Rockville MD",
  "Silver Spring MD",
  "Arlington VA",
  "Alexandria VA"
]

export default function Locations(){
  return (
    <div>
      <Navbar/>
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Service Areas</h1>
        <ul className="space-y-2">
          {locations.map(loc => <li key={loc}>{loc}</li>)}
        </ul>
      </div>
      <Footer/>
    </div>
  )
}
