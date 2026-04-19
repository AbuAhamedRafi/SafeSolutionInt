const TrustBanner = () => {
  return (
    <div className="bg-gray-100 py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-base text-gray-500 font-semibold uppercase tracking-wider mb-8">
          Authorized Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
          <div className="flex items-center gap-2">
             <span className="text-2xl font-black text-gray-900 tracking-tighter">VARITO</span>
             <span className="text-xs text-gray-500 font-bold border-l-2 border-red-500 pl-2">Security</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-2xl font-black text-gray-900 tracking-tight">CQR Security</span>
             <span className="text-xs text-gray-500 font-bold border-l-2 border-red-500 pl-2">Fire & Locks</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-3xl font-black text-gray-900 tracking-tighter">BOSCH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
