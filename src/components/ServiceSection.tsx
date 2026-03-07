import FadeInSection from "@/components/FadeInSection";
import { Wrench, Settings, Bike } from "lucide-react";

const ServiceSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl text-center mb-16">Service & reparationer</h2>
      </FadeInSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Service – almindelig cykel */}
        <FadeInSection delay={0}>
          <div className="bg-secondary rounded-lg p-8 h-full">
            <div className="w-12 h-12 rounded bg-primary flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl mb-8">Service – almindelig cykel</h3>

            <div className="mb-8">
              <div className="flex items-baseline justify-between mb-3">
                <h4 className="text-lg font-medium">Lille service</h4>
                <span className="text-primary font-semibold">200 kr</span>
              </div>
              <ul className="space-y-1.5 text-muted-foreground text-sm">
                <li>Smøring af kæde</li>
                <li>Efterspænding af cyklen (sæde, styr, for- og baghjul, lås)</li>
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="text-lg font-medium">Stor service</h4>
                <span className="text-primary font-semibold">350 kr</span>
              </div>
              <p className="text-sm text-primary/70 mb-3">200 kr hvis cyklen er købt hos os</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm">
                <li>Stramning af kæde</li>
                <li>Smøring af kæde</li>
                <li>Gearjustering</li>
                <li>Justering af bremser</li>
                <li>Efterspænding af eger</li>
                <li>Udskiftning af batteri i lygter (hvis batteridrevet)</li>
                <li>Efterspænding af cyklen (sæde, styr, for- og baghjul, pedaler, lås)</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        {/* Service – Christiania ladcykler */}
        <FadeInSection delay={0.1}>
          <div className="bg-secondary rounded-lg p-8 h-full">
            <div className="w-12 h-12 rounded bg-primary flex items-center justify-center mb-6">
              <Bike className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl mb-8">Service – Christiania ladcykler</h3>

            <div className="flex items-baseline justify-between mb-1">
              <h4 className="text-lg font-medium">Fuld service</h4>
              <span className="text-primary font-semibold">750 kr</span>
            </div>
            <p className="text-sm text-primary/70 mb-3">500 kr hvis cyklen er købt hos os</p>
            <p className="text-sm text-muted-foreground italic mb-4">Anbefales cirka hvert halve år</p>

            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li>Stramning af kæde</li>
              <li>Smøring af kæde</li>
              <li>Gearjustering</li>
              <li>Tjek af bremseklodser</li>
              <li>Påfyldning af bremsevæske</li>
              <li>Efterspænding af eger</li>
              <li>Efterspænding af cyklen (sæde, styr, hjul, pedaler, lås)</li>
              <li>Rengøring af cyklen</li>
            </ul>
          </div>
        </FadeInSection>

      </div>

      <FadeInSection>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-foreground text-lg">
            Er du i tvivl om hvad din cykel har brug for?
          </p>
          <p className="text-muted-foreground text-lg">
            Kom forbi butikken og få et uforpligtende tilbud på din reparation.
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default ServiceSection;
