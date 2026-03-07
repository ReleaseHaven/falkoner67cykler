import { Phone, MapPin } from "lucide-react";
import raleighHerre from "@/assets/raleigh-herre.jpg";

interface HeroSectionProps {
  phoneLink: string;
  phone: string;
  mapsLink: string;
}

const HeroSection = ({ phoneLink, phone, mapsLink }: HeroSectionProps) => (
  <section className="relative mt-12 md:mt-0 overflow-hidden">
    <div className="relative w-full">
      {/* Image container - shows the full bike */}
      <div className="relative w-full h-[60vh] md:h-[75vh] bg-[#1B2A4A]">
        <img
          src={raleighHerre}
          alt="Raleigh herrecykel – Kvalitetscykler på Frederiksberg"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Kvalitetscykler på Frederiksberg
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
            Brugte og nye cykler – servicerede, dokumenterede og klar til brug.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={phoneLink} className="bg-primary-foreground text-foreground px-8 py-4 rounded font-medium text-base hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Ring {phone}
            </a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded font-medium text-base hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Find vej
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
