import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What services does Safe Solution International provide?",
    answer:
      "Safe Solution International offers comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation & logistics, construction services, project management, HR & recruitment, branding & identity, event management, air ticketing, safety & security solutions, renewable energy, and facilities management services across Bangladesh.",
  },
  {
    question: "Where is Safe Solution International located?",
    answer:
      "Safe Solution International is located in Dhaka, Bangladesh, serving clients across the entire country with our comprehensive business solutions and consultancy services.",
  },
  {
    question: "How can Safe Solution International help my startup?",
    answer:
      "We provide end-to-end startup support including business planning, legal entity registration, market research, financial planning, IT infrastructure setup, and strategic guidance to help entrepreneurs launch and grow successful businesses in Bangladesh.",
  },
  {
    question: "Does Safe Solution International assist with government tenders?",
    answer:
      "Yes, we specialise in government tender assistance including documentation preparation, compliance management, bid writing, and submission support to help businesses win government contracts in Bangladesh.",
  },
  {
    question: "What makes Safe Solution International different from other consultancy firms?",
    answer:
      "Safe Solution International stands out with our comprehensive service portfolio, local expertise in the Bangladesh market, a proven track record of 200+ satisfied clients, an end-to-end solutions approach, and dedicated support throughout your business journey.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion — divider style, no cards */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    isOpen ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-[10px] text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-red-400' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="text-sm text-gray-400 leading-relaxed pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* SEO schema — preserved */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQ;
