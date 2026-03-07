import FadeInSection from "@/components/FadeInSection";
import { ShieldCheck, Receipt, FileText, Lock, Bike, Tag } from "lucide-react";

const offerings = [
  {
    icon: ShieldCheck,
    title: "Garanti",
    text: "Vi står inde for de cykler vi sælger og tilbyder garanti på alle cykler.",
  },
  {
    icon: Receipt,
    title: "Kvittering",
    text: "Alle cykler sælges med kvittering som dokumentation for lovligt køb.",
  },
  {
    icon: FileText,
    title: "Registreret stelnummer",
    text: "Stelnummer og relevant dokumentation følger med hver cykel.",
  },
  {
    icon: Lock,
    title: "Forsikringsgodkendte låse",
    text: "Vi forhandler forsikringsgodkendte ringlåse og kædelåse.",
  },
  {
    icon: Bike,
    title: "Brooks sadler & tilbehør",
    text: "Stort udvalg af Brooks sadler, kurve, låse og andet kvalitetstilbehør.",
  },
  {
    icon: Tag,
    title: "Gode priser",
    text: "Kvalitetscykler til fair priser – både brugte og nye modeller.",
  },
];

const OfferingsSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl text-center mb-4">Hvad vi tilbyder</h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Hos Falkoner 67 Cykler får du tryghed, dokumentation og kvalitet.
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((item, i) => (
          <FadeInSection key={item.title} delay={i * 0.08}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default OfferingsSection;
