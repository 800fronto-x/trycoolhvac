
import locations from "../data/locations";

const BASE_URL = "https://trycoolhvac.com";

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/ac-repair`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/heating-repair`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/hvac-installation`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/maintenance`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/indoor-air-quality`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/commercial-hvac`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/locations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/quote`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/terms-of-service`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/reviews`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog/how-much-does-ac-repair-cost-washington-dc`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog/signs-you-need-a-new-hvac-system`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog/how-often-should-you-service-hvac`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog/best-hvac-brands-2025`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog/heat-pump-vs-furnace-dc-climate`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog/hvac-maintenance-checklist-homeowners`, changeFrequency: "monthly", priority: 0.65 },
  ];

  const locationPages = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages];
}
