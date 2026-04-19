import { useParams } from "react-router-dom";

// Standard mock data based on the specification
const productCatalog = {
  "fire-detection-systems": {
    title: "Fire Detection Systems",
    brands: ["JBE", "NINGBO", "DELING", "Tenda", "CQR"],
    products: [
      { name: "JBE Smoke Detector", brand: "JBE", image: "/images/logo.png" },
      { name: "DELING Heat Sensor", brand: "DELING", image: "/images/logo.png" },
      { name: "CQR Fike Twinflex System Panel", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Fire Manual Call Point", brand: "CQR", image: "/images/logo.png" }
    ]
  },
  "fire-protection-systems": {
    title: "Fire Protection Systems",
    brands: ["World Fire Fighting", "Noah", "Naffco"],
    products: [
      { name: "World Fire Fighting Sprinkler", brand: "World Fire Fighting", image: "/images/logo.png" },
      { name: "Noah Fire Pump System", brand: "Noah", image: "/images/logo.png" },
      { name: "Naffco Fire Hydrant", brand: "Naffco", image: "/images/logo.png" }
    ]
  },
  "fire-extinguishers": {
    title: "Fire Extinguishers",
    brands: ["Standard Offerings"],
    products: [
      { name: "CO2 Fire Extinguisher 5KG", brand: "Standard Offerings", image: "/images/logo.png" },
      { name: "Dry Powder Extinguisher 6KG", brand: "Standard Offerings", image: "/images/logo.png" }
    ]
  },
  "cctv-monitoring": {
    title: "CCTV & Monitoring",
    brands: ["Varito", "Dahua", "HikVision", "BOSCH"],
    products: [
      { name: "VARITO IP Camera", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO HD Digital Camera", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO PTZ Dome Camera", brand: "Varito", image: "/images/logo.png" },
      { name: "BOSCH FLEXIDOME IP", brand: "BOSCH", image: "/images/logo.png" },
      { name: "BOSCH DINION IP Starlight", brand: "BOSCH", image: "/images/logo.png" },
      { name: "BOSCH AUTODOME IP", brand: "BOSCH", image: "/images/logo.png" },
      { name: "BOSCH MIC IP Fusion", brand: "BOSCH", image: "/images/logo.png" }
    ]
  },
  "access-control-systems": {
    title: "Access Control Systems",
    brands: ["Varito", "CQR", "ZKTeco"],
    products: [
      { name: "VARITO Tripod Turnstile Gate", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO Full Height Turnstiles BG538D", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO Optical Barrier Turnstiles A203", brand: "Varito", image: "/images/logo.png" },
      { name: "CQR Electro-Magnetic Lock Standard", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Standalone Keypad", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Proximity Reader", brand: "CQR", image: "/images/logo.png" }
    ]
  },
  "baggage-claim-machines": {
    title: "Baggage Claim & Scanners",
    brands: ["Varito", "Standard Offerings"],
    products: [
      { name: "VARITO X-ray Baggage Scanner BG6550D", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO Single Energy Scanner", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO Double Energy Scanner", brand: "Varito", image: "/images/logo.png" },
      { name: "VARITO Under Vehicle Surveillance System BG3300", brand: "Varito", image: "/images/logo.png" }
    ]
  },
  "energy-saving-pumps": {
    title: "Energy Saving Pumps",
    brands: ["Purity", "Standard Offerings"],
    products: [
      { name: "Purity Integrated Water Pump", brand: "Purity", image: "/images/logo.png" },
      { name: "High-Efficiency Submersible Pump", brand: "Standard Offerings", image: "/images/logo.png" }
    ]
  },
  "safety-cabinets-modular-systems": {
    title: "Safety Cabinets & Modular Systems",
    brands: ["Standard Offerings"],
    products: [
      { name: "Explosion-Proof Flammable Storage Cabinet", brand: "Standard Offerings", image: "/images/logo.png" },
      { name: "Corrosive Liquid Safety Cabinet", brand: "Standard Offerings", image: "/images/logo.png" }
    ]
  },
  "emergency-lights": {
    title: "Emergency Lights",
    brands: ["Wisdom", "CQR", "Yawe"],
    products: [
      { name: "CQR Bulkhead Plus", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Spot Non-Maintained Recessed", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Escape Square - Surface Mount", brand: "CQR", image: "/images/logo.png" },
      { name: "CQR Emergency Exit Sign - Blade 5 in 1", brand: "CQR", image: "/images/logo.png" },
      { name: "Yawe Warning Light System", brand: "Yawe", image: "/images/logo.png" }
    ]
  },
  "health-medical-equipment": {
    title: "Health & Medical Equipment",
    brands: ["Comprehensive Catalog"],
    products: [
      { name: "Industrial First Aid Kit", brand: "Comprehensive Catalog", image: "/images/logo.png" },
      { name: "Automated External Defibrillator (AED)", brand: "Comprehensive Catalog", image: "/images/logo.png" }
    ]
  },
  "emergency-garments-vests": {
    title: "Emergency Garments & Vests",
    brands: ["Standard Offerings"],
    products: [
      { name: "High Visibility Reflective Vest", brand: "Standard Offerings", image: "/images/logo.png" },
      { name: "Fire Resistant Coverall", brand: "Standard Offerings", image: "/images/logo.png" }
    ]
  },
  "electric-fences": {
    title: "Electric Fences",
    brands: ["Standard Offerings"],
    products: [
      { name: "High Voltage Perimeter Fence Controller", brand: "Standard Offerings", image: "/images/logo.png" }
    ]
  }
};

const CatalogPage = () => {
  const { category } = useParams();
  const categoryData = productCatalog[category];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-gray-800">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h1>
          <p className="text-lg text-gray-600">
            Explore our industrial-grade {categoryData.title.toLowerCase()} from authorized partners.
          </p>
        </div>

        {/* Filter Section / Brands */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg text-sm">All Brands</span>
          {categoryData.brands.map((brand, i) => (
             <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg text-sm hover:border-red-500 cursor-pointer transition-colors">
               {brand}
             </span>
          ))}
        </div>

        {/* Product Grid */}
        {categoryData.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryData.products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-48 bg-gray-100 flex items-center justify-center border-b p-4 relative">
                  <span className="absolute top-3 right-3 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                    {product.brand}
                  </span>
                  <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
                  <button className="w-full mt-2 bg-gray-900 hover:bg-red-500 text-white font-medium py-2 rounded-lg transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl text-gray-400 font-medium tracking-wide">Products uploading soon...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
