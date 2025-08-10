import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What services does Safe Solution International provide?",
      answer: "Safe Solution International offers comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation & logistics, construction services, project management, HR & recruitment, branding & identity, event management, air ticketing, safety & security solutions, renewable energy, and facilities management services across Bangladesh."
    },
    {
      question: "Where is Safe Solution International located?",
      answer: "Safe Solution International is located in Dhaka, Bangladesh, serving clients across the entire country with our comprehensive business solutions and consultancy services."
    },
    {
      question: "How can Safe Solution International help my startup?",
      answer: "We provide end-to-end startup support including business planning, legal entity registration, market research, financial planning, IT infrastructure setup, and strategic guidance to help entrepreneurs launch and grow successful businesses in Bangladesh."
    },
    {
      question: "Does Safe Solution International assist with government tenders?",
      answer: "Yes, we specialize in government tender assistance including documentation preparation, compliance management, bid writing, and submission support to help businesses win government contracts in Bangladesh."
    },
    {
      question: "What makes Safe Solution International different from other consultancy firms?",
      answer: "Safe Solution International stands out with our comprehensive service portfolio, local expertise in Bangladesh market, proven track record of 200+ satisfied clients, end-to-end solutions approach, and dedicated support throughout your business journey."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Safe Solution International and our business services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <FaChevronUp className="text-red-500 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;
