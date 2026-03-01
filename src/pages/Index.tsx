import { Phone, MapPin } from "lucide-react";
import raleighHerre from "@/assets/raleigh-herre.jpg";
import raleighDame from "@/assets/raleigh-dame.jpg";
import vandefalkHerre from "@/assets/vandefalk-herre.webp";
import vandefalkDame from "@/assets/vandefalk-dame.webp";
import mustangHerre from "@/assets/mustang-herre.webp";
import mustangDame from "@/assets/mustang-dame.webp";
import cykelkurv from "@/assets/cykelkurv.webp";
import cykellås from "@/assets/cykellås.jpg";
import brooksSadel from "@/assets/brooks-sadel.webp";
import FadeInSection from "@/components/FadeInSection";
import { Shield, FileText, Lock, CheckCircle, Receipt, Key } from "lucide-react";

const PHONE = "40 20 73 73";
const PHONE_LINK = "tel:+4540207373";
const MAPS_LINK = "https://share.google/6hdT9UOX5UqDpBtFE";

const bikes = [
  { name: "Raleigh Tourist Deluxe Herre", img: raleighHerre, brand: "Raleigh" },
  { name: "Raleigh Tourist Deluxe Dame", img: raleighDame, brand: "Raleigh" },
  { name: "Van de Falk Herrecykel", img: vandefalkHerre, brand: "Van de Falk" },
  { name: "Van de Falk Damecykel", img: vandefalkDame, brand: "Van de Falk" },
  { name: "Mustang Herrecykel", img: mustangHerre, brand: "Mustang" },
  { name: "Mustang Damecykel", img: mustangDame, brand: "Mustang" },
];

const accessories = [
  { name: "Kurve", img: cykelkurv, text: "Montering af kurve tilbydes" },
  { name: "Låse", img: cykellås, text: "Forsikringsgodkendte låse med 2 nøgler. Låsens forsikringsnummer medfølger." },
  { name: "Brooks sadler", img: brooksSadel, text: "Stort udvalg af Brooks sadler" },
];

const features = [
  { icon: Shield, text: "3 måneders garanti på alle brugte cykler" },
  { icon: Receipt, text: "Kvittering medfølger ved alle salg" },
  { icon: FileText, text: "Registreret stelnummer" },
  { icon: Lock, text: "Forsikringsgodkendte låse med 2 nøgler" },
  { icon: Key, text: "Låsens forsikringsnummer medfølger" },
  { icon: CheckCircle, text: "Gennemsigtighed og dokumentation" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky mobile header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 px-4 flex items-center justify-between md:hidden">
        <span className="font-serif text-lg">Falkoner 67</span>
        <a href={PHONE_LINK} className="flex items-center gap-2 font-medium text-sm">
          <Phone className="w-4 h-4" />
          Ring nu
        </a>
      </div>

      {/* Desktop header */}
      <header className="hidden md:flex items-center justify-between px-8 lg:px-16 py-5 bg-background border-b border-border">
        <span className="font-serif text-2xl text-foreground">Falkoner 67 Cykler</span>
        <div className="flex items-center gap-6">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Falkoner Allé 67
          </a>
          <a href={PHONE_LINK} className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium hover:bg-navy-light transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center mt-12 md:mt-0">
        <div className="absolute inset-0">
          <img src={raleighHerre} alt="Raleigh herrecykel – Kvalitetscykler på Frederiksberg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Kvalitetscykler på Frederiksberg
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
            Brugte og nye cykler – servicerede, dokumenterede og klar til brug.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="bg-primary-foreground text-foreground px-8 py-4 rounded font-medium text-base hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Ring {PHONE}
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded font-medium text-base hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Find vej
            </a>
          </div>
        </div>
      </section>

      {/* Vores udvalg */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl text-center mb-4">Vores udvalg</h2>
            <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
              Vi har et stort og skiftende udvalg af dame- og herrecykler.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {bikes.map((bike, i) => (
              <FadeInSection key={bike.name} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/2] overflow-hidden rounded bg-secondary mb-4">
                    <img
                      src={bike.img}
                      alt={bike.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-foreground font-medium">{bike.name}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <p className="text-center text-foreground text-xl md:text-2xl font-medium max-w-2xl mx-auto mt-12">
              Alle brugte cykler er nyligt servicerede og gennemgået. Alt fungerer som det skal.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Tilbehør */}
      <section className="py-24 md:py-32 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl text-center mb-16">Tilbehør</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {accessories.map((item, i) => (
              <FadeInSection key={item.name} delay={i * 0.1}>
                <div className="bg-background rounded-lg overflow-hidden">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain p-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hvad vi tilbyder */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl text-center mb-16">Hvad vi tilbyder</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            {features.map((f, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-lg">{f.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <p className="text-center text-muted-foreground text-lg">
              Gode priser på brugte cykler. Kom forbi og få et godt tilbud.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Lovlige og dokumenterede */}
      <section className="py-24 md:py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl mb-6">Lovlige og dokumenterede cykler</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vi handler kun lovlige cykler. Alle cykler sælges med registreret stelnummer og fuld dokumentation.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Besøg butikken */}
      <section className="py-24 md:py-32 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl text-center mb-16">Besøg butikken</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <FadeInSection>
              <div>
                <h3 className="text-2xl mb-6">Adresse</h3>
                <p className="text-foreground text-lg mb-1">Falkoner Allé 67</p>
                <p className="text-foreground text-lg mb-8">2000 Frederiksberg</p>

                <h3 className="text-2xl mb-6">Åbningstider</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between max-w-xs">
                    <span className="text-foreground">Mandag – Torsdag</span>
                    <span className="text-foreground font-medium">11–18</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Fredag</span>
                    <span className="text-muted-foreground">Lukket</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-foreground">Lørdag – Søndag</span>
                    <span className="text-foreground font-medium">11–16</span>
                  </div>
                </div>

                <div className="mt-10">
                  <a href={PHONE_LINK} className="text-3xl md:text-4xl font-serif text-primary hover:text-navy-light transition-colors">
                    {PHONE}
                  </a>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href={PHONE_LINK} className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium text-base hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Ring nu
                  </a>
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-3 rounded font-medium text-base hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Find vej
                  </a>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="rounded overflow-hidden h-80 md:h-full min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.8!2d12.5244!3d55.6806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQwJzUwLjIiTiAxMsKwMzEnMjcuOCJF!5e0!3m2!1sda!2sdk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Falkoner 67 Cykler - Google Maps"
                />
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <p className="text-center text-xl text-foreground font-serif mt-8">
              Kom ned og gør en god handel.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-serif text-foreground text-lg">Falkoner 67 Cykler</span>
          <span>Falkoner Allé 67, 2000 Frederiksberg</span>
          <a href={PHONE_LINK} className="hover:text-foreground transition-colors">{PHONE}</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
