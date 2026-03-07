import { Phone, MapPin } from "lucide-react";
import raleighHero from "@/assets/raleigh-hero.webp";

interface HeroSectionProps {
  phoneLink: string;
  phone: string;
  mapsLink: string;
}

const HeroSection = ({ phoneLink, phone, mapsLink }: HeroSectionProps) => (
  <section className="mt-12 md:mt-0 bg-white md:min-h-[55vh] md:max-h-[65vh] flex items-center">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-10 md:py-0 flex flex-col md:flex-row items-center gap-10 md:gap-12">
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
          Kvalitetscykler på Frederiksberg
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 font-light max-w-md mx-auto md:mx-0">
          Brugte og nye cykler – servicerede, dokumenterede og klar til brug.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href={phoneLink} className="bg-primary text-primary-foreground px-8 py-4 rounded font-medium text-base hover:bg-accent transition-colors flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Ring {phoneLink.replace("tel:+45", "").replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4")}
          </a>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-8 py-4 rounded font-medium text-base hover:bg-muted transition-colors flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            Find vej
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={raleighHero}
          alt="Raleigh Tourist de Luxe – Kvalitetscykler på Frederiksberg"
          className="w-full max-w-2xl object-contain"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
