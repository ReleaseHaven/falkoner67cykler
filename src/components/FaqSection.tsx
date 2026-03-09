import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const faqs = [
  {
    question: "Hvad er jeres åbningstider?",
    answer: "Vi har åbent mandag til torsdag 11–18 og lørdag til søndag 11–16. Fredag er vi lukket.",
  },
  {
    question: "Sælger I brugte cykler med dokumentation?",
    answer: "Ja. Alle cykler sælges med kvittering, og stelnummer samt relevant dokumentation følger med. Det sikrer lovlig handel og gør det nemt at forsikre cyklen.",
  },
  {
    question: "Hvor kommer de brugte cykler fra?",
    answer: "En stor del af vores brugte cykler stammer fra officielle politiaktioner, hvor cykler uden ejere indsamles og frigives til salg. Alle cykler gennemgås og serviceres grundigt i vores værksted inden de sælges.",
  },
  {
    question: "Hvad koster en service?",
    answer: "Lille service koster 200 kr (smøring og efterspænding). Stor service koster 350 kr – kun 200 kr hvis cyklen er købt hos os. Service på Christiania ladcykler koster 750 kr (500 kr ved køb hos os).",
  },
  {
    question: "Hvilke cykelmærker fører I?",
    answer: "Vi fører bl.a. Mustang, Raleigh Tourist Deluxe og Van de Falk i både dame- og herreudgaver, samt Christiania ladcykler.",
  },
  {
    question: "Laver I cykelreparationer?",
    answer: "Ja. Vi tilbyder reparationer som udskiftning af slanger (200 kr), bremsekabel, gearkabel, hjul og meget mere. Priserne er lavere hvis cyklen er købt hos os. Kom forbi butikken og få et uforpligtende tilbud.",
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-muted-foreground text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section id="faq" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl text-center mb-16">Ofte stillede spørgsmål</h2>
      </FadeInSection>
      <FadeInSection>
        <div className="border-t border-border">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default FaqSection;
