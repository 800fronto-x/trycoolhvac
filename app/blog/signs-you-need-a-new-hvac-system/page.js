
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "5 Signs You Need a New HVAC System | CoolHVAC DC",
  description: "Is your HVAC system showing warning signs? Learn the 5 key indicators it\u2019s time to replace your heating or cooling system in the DC metro area.",
  alternates: { canonical: "/blog/signs-you-need-a-new-hvac-system" },
};

export default function SignsNewHvacPost() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "5 Signs You Need a New HVAC System",
        "author": { "@type": "Organization", "name": "CoolHVAC" },
        "datePublished": "2025-07-01",
        "url": "https://www.trycoolhvac.com/blog/signs-you-need-a-new-hvac-system",
        "publisher": {
          "@type": "Organization",
          "name": "CoolHVAC",
          "url": "https://www.trycoolhvac.com"
        },
        "description": "Is your HVAC system showing warning signs? Learn the 5 key indicators it\u2019s time to replace your heating or cooling system in the DC metro area."
      }} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">HVAC Installation</span>
            <span className="text-gray-400 text-sm">July 2025 &middot; 4 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 leading-tight">5 Signs You Need a New HVAC System</h1>
          <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-5 mb-8">
            <p className="text-gray-700 leading-relaxed">
              The five most common signs you need a new HVAC system are: your system is over 15 years old, repair costs exceed 50% of replacement cost, your energy bills are rising without explanation, your home heats or cools unevenly, and your system uses R-22 refrigerant (now phased out). If you&apos;re seeing two or more of these signs, it may be time to replace.
            </p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          {/* Sign 1 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">1. Your System Is Over 15 Years Old</h2>
            <p className="mb-3">
              Most HVAC systems have a lifespan of 15&ndash;20 years with proper maintenance. Once your system passes the 15-year mark, it&apos;s operating at a fraction of its original efficiency and is increasingly likely to require expensive repairs.
            </p>
            <p>
              Even if your old system is still running, it almost certainly uses significantly more energy than a modern high-efficiency unit. Replacing a 15-year-old system with a new SEER 18+ system can reduce your cooling costs by 30&ndash;40%.
            </p>
          </section>

          {/* Sign 2 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">2. Repair Costs Exceed 50% of Replacement Cost</h2>
            <p className="mb-3">
              This is the most important financial test. If a technician quotes you a repair that costs more than half of what a new system would cost, replacement almost always makes more sense.
            </p>
            <p>
              A $1,500 compressor repair on a system that needs replacing in 2&ndash;3 years anyway is money that could go toward a new installation. CoolHVAC technicians will always give you both options so you can make an informed decision.
            </p>
          </section>

          {/* Sign 3 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">3. Your Energy Bills Are Rising Without Explanation</h2>
            <p className="mb-3">
              If your utility bills have been climbing but your usage habits haven&apos;t changed, your HVAC system is the most likely culprit. Aging systems lose efficiency even when they appear to be running normally.
            </p>
            <p>
              Dirty heat exchangers, failing compressors, and refrigerant leaks all force your system to work harder to achieve the same result &mdash; which means more electricity or gas consumed every hour it runs.
            </p>
          </section>

          {/* Sign 4 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">4. Your Home Heats or Cools Unevenly</h2>
            <p className="mb-3">
              Hot spots in summer, cold rooms in winter, or wide temperature swings between floors are signs that your HVAC system is struggling. This can be caused by an aging system, duct problems, or a system that was never properly sized for your home.
            </p>
            <p>
              A new system installation includes a Manual J load calculation to ensure the right size equipment is installed &mdash; which eliminates the uneven comfort that plagues many older systems.
            </p>
          </section>

          {/* Sign 5 */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">5. Your System Uses R-22 Refrigerant</h2>
            <p className="mb-3">
              R-22 (Freon) was phased out in 2020. If your AC still uses R-22, you&apos;re facing increasingly expensive refrigerant costs if it ever develops a leak &mdash; and the supply of R-22 will only become more limited over time.
            </p>
            <p>
              Modern systems use R-410A, which is more environmentally friendly and readily available. If your system is still on R-22, it&apos;s time to start planning for replacement.
            </p>
          </section>

          {/* Should You Repair or Replace? */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">Should You Repair or Replace?</h2>
            <p className="mb-3">
              Use the <strong>50% rule</strong>: if the repair cost exceeds 50% of the system&apos;s replacement cost, and the system is more than 10 years old, replacement is typically the better investment. You&apos;ll recoup the cost through lower energy bills and avoid the cycle of recurring repairs.
            </p>
            <p>
              If you&apos;re unsure, a CoolHVAC technician can assess your system, provide repair and replacement quotes side by side, and give you an honest recommendation &mdash; with no pressure to do anything you&apos;re not comfortable with.
            </p>
          </section>

          {/* Inline CTA */}
          <div className="bg-red-600 text-white rounded-xl p-6">
            <p className="font-bold text-lg mb-2">Thinking about replacing your HVAC system?</p>
            <p className="text-red-100 text-sm mb-4">CoolHVAC offers free in-home estimates with no obligation. Financing available through GreenSky and Ally.</p>
            <a href="/contact" className="inline-block bg-white text-red-600 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition text-sm">
              Get a Free Estimate
            </a>
          </div>

          {/* What to Expect */}
          <section>
            <h2 className="text-2xl font-black text-navy-900 mb-3">What to Expect When Replacing Your HVAC System</h2>
            <p>
              Most residential HVAC replacements are completed in a single day. Our team handles everything from removing the old equipment to commissioning the new system and walking you through the thermostat settings. We&apos;ll also provide documentation of the installation for warranty purposes and help you register the equipment with the manufacturer.
            </p>
          </section>

        </article>

        {/* Footer link */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <a href="/services/hvac-installation" className="text-blue-800 font-semibold hover:underline">
            Learn more about our HVAC installation services &rarr;
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
