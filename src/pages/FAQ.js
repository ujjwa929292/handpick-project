import React from "react";

const FAQ = () => {
  // FAQ Data
  const faqs = [
    {
      question: "What is Listee?",
      answer:
        "Listee is an online platform where you can explore curated collections of handcrafted and authentic products from artisans worldwide.",
    },
    {
      question: "How can I place an order?",
      answer:
        "To place an order, simply browse our catalog, select the product you love, add it to your cart, and proceed to checkout. You’ll receive a confirmation email once the order is placed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, as well as online payment services like PayPal, Google Pay, and Apple Pay.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times may vary depending on your location.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team via email at listee@example.com or call us at +017 123 456 78. Our team is available Monday to Friday, 9 AM to 6 PM.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 14-day return policy for most items. If you’re unsatisfied with your purchase, contact our support team for assistance with returns.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-700 mb-8">
          Find answers to common questions about Listee and our services. If
          you don’t find your answer here, feel free to reach out to us!
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-[#a55e3f] mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
