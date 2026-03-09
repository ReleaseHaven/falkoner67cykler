import { Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BikesSection from "@/components/BikesSection";
import OfferingsSection from "@/components/OfferingsSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import RentalSection from "@/components/RentalSection";
import NavMenu from "@/components/NavMenu";

const PHONE = "40 20 73 73";
const PHONE_LINK = "tel:+4540207373";
const MAPS_LINK = "https://maps.app.goo.gl/zoCXcQiMVECK3tnG6";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky mobile header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 px-4 flex items-center justify-between md:hidden">
        <span className="font-serif text-lg">Falkoner 67</span>
        <div className="flex items-center gap-3">
          <a href={PHONE_LINK} className="flex items-center gap-2 font-medium text-sm">
            <Phone className="w-4 h-4" />
            Ring nu
          </a>
          <NavMenu />
        </div>
      </div>

      {/* Desktop header */}
      <header className="hidden md:flex items-center justify-between px-8 lg:px-16 py-5 bg-background border-b border-border">
        <span className="font-serif text-2xl text-foreground">Falkoner 67 Cykler</span>
        <NavMenu />
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

      <HeroSection phoneLink={PHONE_LINK} phone={PHONE} mapsLink={MAPS_LINK} />
      <div id="cykler"><BikesSection /></div>
      <OfferingsSection />
      <RentalSection />
      <div id="tilbehoer"><AccessoriesSection /></div>
      <div id="service"><ServiceSection /></div>
      <div id="om-os"><AboutSection /></div>
      <div id="kontakt"><ContactSection phoneLink={PHONE_LINK} phone={PHONE} mapsLink={MAPS_LINK} /></div>
      <FaqSection />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-serif text-foreground text-lg">Falkoner 67 Cykler</span>
          <span>Falkoner Allé 67, 2000 Frederiksberg</span>
          <a href={PHONE_LINK} className="hover:text-foreground transition-colors">{PHONE}</a>
          <span>CVR 45408825</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
