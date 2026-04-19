import { FaVideo, FaSearch, FaLock, FaCar, FaFire, FaPlug, FaBell } from "react-icons/fa";

const PartnersSection = () => {
  const varitoProducts = [
    { title: "Video Surveillance", icon: <FaVideo />, items: ["IP Cameras", "Full HD Bullet/Dome", "PTZ Cameras"] },
    { title: "Screening & Detection", icon: <FaSearch />, items: ["Walk-Through Metal Detectors", "Hand-Held Detectors", "X-Ray Baggage Scanners"] },
    { title: "Access Control", icon: <FaLock />, items: ["Tripod & Flap Barrier Gates", "Full Height Turnstiles", "Biometric Terminals"] },
    { title: "Advanced Systems", icon: <FaCar />, items: ["Under Vehicle Surveillance (UVSS)", "Automated Parking Guidance"] },
  ];

  const cqrProducts = [
    { title: "Cabling Solutions", icon: <FaPlug />, items: ["Professional Cables", "Screened Cables", "CCA Intruder Alarm Cables"] },
    { title: "Intruder Systems", icon: <FaBell />, items: ["Magnetic Contacts", "Shock Sensors", "Panic Buttons", "Sounders"] },
    { title: "Access & Hardware", icon: <FaLock />, items: ["Electronic Locks", "Electro-Magnetic Locks", "Mechanical Push-Button"] },
    { title: "Fire Safety", icon: <FaFire />, items: ["Detection Components", "Call Points", "Emergency Lighting"] },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authorized distributors for the world&apos;s leading manufacturers of physical security and fire safety infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* VARITO Block */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <h3 className="text-3xl font-black tracking-tighter text-gray-900">VARITO</h3>
              <a href="https://varito.de" target="_blank" rel="noreferrer" className="text-xs text-red-500 font-bold hover:underline bg-red-50 px-2 py-1 rounded">
                varito.de
              </a>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-6">German-engineered security, surveillance, and high-traffic screening systems.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {varitoProducts.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 bg-red-50 p-2 rounded-lg">{cat.icon}</span>
                    <h4 className="font-bold text-gray-800 text-sm">{cat.title}</h4>
                  </div>
                  <ul className="space-y-1 pl-10 text-xs text-gray-600 list-disc">
                    {cat.items.map((item, idy) => (
                      <li key={idy}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CQR Security Block */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-900">CQR Security</h3>
              <a href="https://cqr.co.uk" target="_blank" rel="noreferrer" className="text-xs text-blue-500 font-bold hover:underline bg-blue-50 px-2 py-1 rounded">
                cqr.co.uk
              </a>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-6">UK-based market leader in fire safety components and intruder security hardware.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cqrProducts.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-500 bg-blue-50 p-2 rounded-lg">{cat.icon}</span>
                    <h4 className="font-bold text-gray-800 text-sm">{cat.title}</h4>
                  </div>
                  <ul className="space-y-1 pl-10 text-xs text-gray-600 list-disc">
                    {cat.items.map((item, idy) => (
                      <li key={idy}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
