import React from 'react';


interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    { question: 'Como faço para acionar um sinistro?', answer: 'Para acionar um sinistro, entre no nosso portal de clientes e siga os passos indicados na seção de sinistros.' },
    { question: 'Quais são os tipos de seguros oferecidos?', answer: 'Oferecemos uma ampla gama de seguros, incluindo seguro de vida, automóvel, residencial e empresarial.' },
  ];

  return (
    <section className="faq">
      <h2>Perguntas Frequentes</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;
