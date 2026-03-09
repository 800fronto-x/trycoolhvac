
export default function Navbar(){
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">TryCool HVAC</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/locations">Service Areas</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}
