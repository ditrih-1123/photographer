export function FAQSection() {
  const faqs = [
    {
      question: "How long does a session take?",
      answer: "Typically 1-2 hours depending on the package.",
    },
    {
      question: "Do you provide raw files?",
      answer: "Yes, raw files are available upon request.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



