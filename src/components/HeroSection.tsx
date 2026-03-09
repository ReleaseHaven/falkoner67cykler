import { Phone, MapPin } from "lucide-react";

interface HeroSectionProps {
  phoneLink: string;
  phone: string;
  mapsLink: string;
}

const HeroSection = ({ phoneLink, phone, mapsLink }: HeroSectionProps) => (
  <section className="mt-12 md:mt-0 bg-background">
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-14 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
        Kvalitetscykler på Frederiksberg
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-10 font-light max-w-md mx-auto">
        Brugte og nye cykler – servicerede, dokumenterede og klar til brug.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={phoneLink} className="bg-primary text-primary-foreground px-8 py-4 rounded font-medium text-base hover:bg-accent transition-colors flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Ring {phoneLink.replace("tel:+45", "").replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4")}
        </a>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-8 py-4 rounded font-medium text-base hover:bg-muted transition-colors flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          Find vej
        </a>
      </div>
      <div className="mt-8 flex flex-row border border-border rounded-lg overflow-hidden w-full sm:w-auto sm:inline-flex">
        <div className="flex-1 sm:flex-none px-4 sm:px-5 py-3 flex flex-col items-center border-r border-border">
          <span className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">Man – Tor</span>
          <span className="text-foreground font-semibold text-sm sm:text-base">11 – 18</span>
        </div>
        <div className="flex-1 sm:flex-none px-4 sm:px-5 py-3 flex flex-col items-center border-r border-border opacity-50">
          <span className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">Fredag</span>
          <span className="text-foreground font-semibold text-sm sm:text-base">Lukket</span>
        </div>
        <div className="flex-1 sm:flex-none px-4 sm:px-5 py-3 flex flex-col items-center">
          <span className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">Lør – Søn</span>
          <span className="text-foreground font-semibold text-sm sm:text-base">11 – 16</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
