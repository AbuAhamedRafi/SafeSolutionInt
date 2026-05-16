import { useEffect } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/SEO";

// ─── Service Data ─────────────────────────────────────────────────────────────
const services = [
  {
    id: "facilities-services",
    title: "Facilities Management Services",
    tag: "Facilities",
    description:
      "Focuses on covering a vast range of business needs to achieve desirable results by summing up contracts in one place across different sectors and verticals.",
    points: [
      "Applies a customer-centric approach focusing on performance management and analysis.",
      "Targets different objectives varying from business to business and their specific functions.",
      "Customizes the approach to understand the dynamics of each market.",
    ],
    image: "/images/facilities_management.png",
    imageAlt: "Commercial building exterior or high-level manager reviewing blueprints",
    accent: "from-red-500 to-rose-600",
    tagColor: "text-red-600 bg-red-50",
  },
  {
    id: "technical-operations",
    title: "Technical Operations & Maintenance",
    tag: "Engineering",
    description:
      "Provides a range of technical operations, maintenance services, and engineering consultancy for all-scale enterprises and organizations.",
    points: [
      "Uses a highly technical approach to achieve desired client results.",
      "Experienced technical teams that closely observe industry-specific project requirements.",
      "Covers a wide range of tasks from fleet management to quality assurance.",
      "Helps clients run operations efficiently and reduces costs in the long run.",
    ],
    image: "/images/technical_operations.png",
    imageAlt: "Engineers in high-vis vests inspecting HVAC units or electrical panels",
    accent: "from-orange-500 to-amber-600",
    tagColor: "text-orange-600 bg-orange-50",
  },
  {
    id: "soft-services",
    title: "Soft Services",
    tag: "Operations",
    description:
      "Offers the broadest range of soft services for commercial, residential, and corporate clients through a masterful, extensive team.",
    points: [
      "Capable of fulfilling typical business objectives as well as highly customized service requests.",
      "Maintains consistency and high-quality service across all engagements.",
      "Strong track record, holding long-term contracts with Fortune companies and top-tier projects.",
    ],
    image: "/images/soft_services.png",
    imageAlt: "Professional cleaning staff in a modern corporate lobby",
    accent: "from-emerald-500 to-teal-600",
    tagColor: "text-emerald-600 bg-emerald-50",
  },
  {
    id: "fm-consultancy",
    title: "FM Consultancy and Advisory Services",
    tag: "Advisory",
    description:
      "Helps private and public enterprises plan, design, develop, and execute business development and project management strategies.",
    points: [
      "Aims to help businesses step up and reach the level of Fortune companies.",
      "Consultancy experts identify and address obstacles preventing businesses from achieving their goals.",
      "Utilizes analytical skills and vast industry experience to create a roadmap for business betterment.",
    ],
    image: "/images/fm_consultancy.png",
    imageAlt: "Professional boardroom setting with consultants analyzing digital roadmaps",
    accent: "from-blue-500 to-indigo-600",
    tagColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "project-management",
    title: "Project Management and Support Services",
    tag: "Management",
    description:
      "Specialized managerial initiatives introduced to support the frameworks and processes of small to large enterprises in an organized, timely manner.",
    points: [
      "Ensures all projects comply with strict laws and regulations regarding health, safety, and quality.",
      "Assigns capable experts emphasizing performance management.",
      "Handles the entire project lifecycle: initiation, development, management, and wrapping up across any vertical.",
    ],
    image: "/images/project_management.png",
    imageAlt: "Project managers collaborating over project timelines in a modern office",
    accent: "from-violet-500 to-purple-600",
    tagColor: "text-violet-600 bg-violet-50",
  },
  {
    id: "bio-clean",
    title: "Bio Clean Services",
    tag: "Sanitation",
    description:
      "Professional cleaning and complete disinfecting services for the commercial, residential, and public sectors.",
    points: [
      "Trained and experienced teams that take strict precautionary safety measures.",
      "Aims to create a healthy and safe environment for employee growth.",
      "Available 24/7 on standby for disinfecting services.",
      "Capable of handling traumatic/harmful residue elimination, adhering to high standards.",
    ],
    image: "/images/bio_clean.png",
    imageAlt: "Staff in full PPE using specialized deep-cleaning equipment",
    accent: "from-cyan-500 to-sky-600",
    tagColor: "text-cyan-600 bg-cyan-50",
  },
];

// ─── Service Section Component ────────────────────────────────────────────────
const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 !== 0; // 0-indexed: section 1 = index 0 = odd number (text left)

  return (
    <section
      id={service.id}
      className={`py-20 lg:py-28 scroll-mt-28 ${
        isEven ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 lg:gap-16 lg:items-center ${
            isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* ── Image ── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient accent border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none rounded-2xl`}
              />
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-72 sm:h-80 lg:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-10" />
            </div>
          </div>

          {/* ── Text ── */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Tag */}
            <span
              className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md ${service.tagColor}`}
            >
              {service.tag}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {service.title}
            </h2>

            {/* Accent divider */}
            <div
              className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.accent}`}
            />

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Key Points */}
            <ul className="space-y-3">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <span
                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.accent} flex items-center justify-center`}
                  >
                    <FaCheckCircle className="text-white text-[10px]" />
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.accent} text-white font-semibold text-sm py-3 px-7 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
              >
                Enquire Now
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to allow the page to fully render before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Services | Safe Solutions Int."
        description="Safe Solutions Int. offers a comprehensive suite of B2B services including Facilities Management, Technical Operations, Soft Services, FM Consultancy, Project Management, and Bio Clean Services."
        keywords="facilities management, technical operations, soft services, FM consultancy, project management, bio clean services, B2B services Bangladesh"
        url="/services"
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 pt-36 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-red-500/20 text-red-300 font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-red-500/30">
            What We Offer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Prompt, Organized, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Quality Assured
            </span>{" "}
            Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            At Safe Solutions Int., we adopt a strategic, customer-centric
            approach to every engagement — ensuring our clients maximize their
            operational benefits, protect asset longevity, and achieve their
            business objectives with confidence.
          </p>

          {/* Quick nav pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold text-white bg-white/10 border border-white/20 hover:bg-red-500 hover:border-red-500 px-4 py-2 rounded-full transition-all duration-300"
              >
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zig-Zag Service Sections ──────────────────────────────────────────── */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ── Bottom CTA Banner ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Get in touch with our team to discuss a tailored service plan for
            your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold text-sm py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
