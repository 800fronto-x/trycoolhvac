
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuoteCalculator from "../../components/QuoteCalculator";

export const metadata = {
  title: "HVAC Quote Calculator | Estimate Your Cost | TryCool HVAC",
  description: "Get an instant HVAC cost estimate for AC repair, heating repair, and system installation in the DC metro area. Free online quote calculator.",
};

export default function QuotePage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black mb-4">HVAC Quote Calculator</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Get an instant cost estimate for your HVAC project. Answer a few questions about your home and needs, and we will provide a price range based on typical costs in the DC metro area.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-2.25h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900">Estimate Your HVAC Costs</h2>
              <p className="text-sm text-gray-500">Select your options below for an instant estimate</p>
            </div>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-navy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How accurate is this HVAC cost estimate?",
                a: "This calculator provides a general price range based on typical costs in the Washington DC metro area. Actual pricing depends on specific equipment, complexity, and current promotions. We always provide an exact, written quote before beginning any work."
              },
              {
                q: "Is the in-home estimate really free?",
                a: "Yes! We offer free in-home estimates for all installations and major repairs. A TryCool technician will assess your home, discuss your options, and provide an exact written quote with no obligation."
              },
              {
                q: "Do you offer financing for HVAC installations?",
                a: "Yes, we offer flexible financing options for qualifying customers. Monthly payments start as low as $89/month for a complete system replacement. Ask about our 0% APR promotional financing."
              },
              {
                q: "How long does an HVAC installation take?",
                a: "Most residential HVAC installations are completed in one day. Complex installations or ductwork modifications may take 2-3 days. We will provide a timeline with your written estimate."
              },
              {
                q: "What brands do you install and service?",
                a: "We are certified to install and service all major HVAC brands including Carrier, Lennox, Trane, Rheem, Goodman, and more. We will recommend the best system for your home and budget."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
