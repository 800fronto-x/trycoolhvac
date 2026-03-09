
"use client";
import { useState } from "react";

const serviceTypes = [
  { id: "ac-repair", label: "AC Repair", baseMin: 150, baseMax: 500 },
  { id: "heating-repair", label: "Heating / Furnace Repair", baseMin: 150, baseMax: 600 },
  { id: "ac-install", label: "AC System Installation", baseMin: 3500, baseMax: 7500 },
  { id: "heating-install", label: "Heating System Installation", baseMin: 3000, baseMax: 7000 },
  { id: "full-hvac", label: "Full HVAC System Replacement", baseMin: 6000, baseMax: 15000 },
  { id: "maintenance", label: "Annual Maintenance Plan", baseMin: 150, baseMax: 350 },
  { id: "duct-work", label: "Ductwork Repair / Replacement", baseMin: 1500, baseMax: 5000 },
  { id: "air-quality", label: "Indoor Air Quality Solutions", baseMin: 500, baseMax: 2500 },
];

const homeSizes = [
  { id: "small", label: "Small (Under 1,000 sq ft)", multiplier: 0.8 },
  { id: "medium", label: "Medium (1,000 – 2,000 sq ft)", multiplier: 1.0 },
  { id: "large", label: "Large (2,000 – 3,000 sq ft)", multiplier: 1.25 },
  { id: "xlarge", label: "Extra Large (3,000+ sq ft)", multiplier: 1.5 },
];

const systemAges = [
  { id: "new", label: "Under 5 years", multiplier: 0.9, note: "Likely under warranty" },
  { id: "mid", label: "5 – 10 years", multiplier: 1.0, note: "Standard maintenance needed" },
  { id: "old", label: "10 – 15 years", multiplier: 1.15, note: "May need more extensive repair" },
  { id: "very-old", label: "15+ years", multiplier: 1.3, note: "Consider replacement" },
];

const efficiencyLevels = [
  { id: "standard", label: "Standard Efficiency", multiplier: 1.0 },
  { id: "high", label: "High Efficiency (ENERGY STAR)", multiplier: 1.2 },
  { id: "premium", label: "Premium / Variable Speed", multiplier: 1.45 },
];

export default function QuoteCalculator() {
  const [service, setService] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [systemAge, setSystemAge] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [urgency, setUrgency] = useState("standard");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const svc = serviceTypes.find((s) => s.id === service);
    const size = homeSizes.find((s) => s.id === homeSize);
    const age = systemAges.find((s) => s.id === systemAge);
    const eff = efficiencyLevels.find((e) => e.id === efficiency);

    if (!svc || !size || !age || !eff) return;

    const urgencyMultiplier = urgency === "emergency" ? 1.25 : urgency === "soon" ? 1.1 : 1.0;

    const min = Math.round(svc.baseMin * size.multiplier * age.multiplier * eff.multiplier * urgencyMultiplier);
    const max = Math.round(svc.baseMax * size.multiplier * age.multiplier * eff.multiplier * urgencyMultiplier);

    // Determine if it's an installation type
    const isInstall = ["ac-install", "heating-install", "full-hvac"].includes(service);

    setResult({
      min,
      max,
      service: svc.label,
      ageNote: age.note,
      isInstall,
      monthlySavings: isInstall && efficiency !== "standard" ? Math.round((max - min) * 0.02) : null,
    });
  };

  const isComplete = service && homeSize && systemAge && efficiency;

  return (
    <div>
      {/* Service Type */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-navy-900 mb-2">
          1. What service do you need?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {serviceTypes.map((s) => (
            <button
              key={s.id}
              onClick={() => { setService(s.id); setResult(null); }}
              className={`text-left px-4 py-3 rounded border text-sm font-medium transition ${
                service === s.id
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-800"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Home Size */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-navy-900 mb-2">
          2. What is your home size?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {homeSizes.map((s) => (
            <button
              key={s.id}
              onClick={() => { setHomeSize(s.id); setResult(null); }}
              className={`text-left px-4 py-3 rounded border text-sm font-medium transition ${
                homeSize === s.id
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-800"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* System Age */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-navy-900 mb-2">
          3. How old is your current system?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {systemAges.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSystemAge(s.id); setResult(null); }}
              className={`text-left px-4 py-3 rounded border text-sm transition ${
                systemAge === s.id
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-800"
              }`}
            >
              <span className="font-medium">{s.label}</span>
              <span className={`block text-xs mt-0.5 ${systemAge === s.id ? "text-blue-200" : "text-gray-400"}`}>
                {s.note}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Efficiency */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-navy-900 mb-2">
          4. Preferred efficiency level?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {efficiencyLevels.map((e) => (
            <button
              key={e.id}
              onClick={() => { setEfficiency(e.id); setResult(null); }}
              className={`text-center px-4 py-3 rounded border text-sm font-medium transition ${
                efficiency === e.id
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-800"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>

      {/* Urgency */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-2">
          5. How soon do you need service?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "standard", label: "Flexible / Scheduled" },
            { id: "soon", label: "Within a few days" },
            { id: "emergency", label: "Emergency (24hr)" },
          ].map((u) => (
            <button
              key={u.id}
              onClick={() => { setUrgency(u.id); setResult(null); }}
              className={`text-center px-4 py-3 rounded border text-sm font-medium transition ${
                urgency === u.id
                  ? u.id === "emergency" ? "bg-red-600 text-white border-red-600" : "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-800"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculate}
        disabled={!isComplete}
        className={`w-full py-4 rounded font-bold text-lg transition ${
          isComplete
            ? "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Get Your Estimate
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 bg-gradient-to-br from-navy-900 to-blue-800 rounded-xl p-8 text-white">
          <h3 className="text-lg font-semibold mb-1">Estimated Cost for {result.service}</h3>
          <div className="text-4xl font-black my-3">
            ${result.min.toLocaleString()} – ${result.max.toLocaleString()}
          </div>
          <p className="text-blue-200 text-sm mb-4">{result.ageNote}</p>

          {result.monthlySavings && (
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <p className="text-sm">
                <span className="font-bold text-green-300">Energy Savings:</span>{" "}
                A high-efficiency system could save you up to ${result.monthlySavings}/month on energy bills.
              </p>
            </div>
          )}

          <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm text-blue-100">
            <p className="font-semibold text-white mb-1">About this estimate:</p>
            <p>This is a general estimate based on typical costs in the DC metro area. Your actual price may vary based on the specific equipment, complexity of the job, and current promotions. We provide exact, upfront pricing before any work begins.</p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <a
              href="/contact"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded font-bold transition"
            >
              Schedule a Free In-Home Estimate
            </a>
            <a
              href="tel:2025551234"
              className="flex-1 bg-white text-navy-900 text-center py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              Call (202) 555-1234
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
