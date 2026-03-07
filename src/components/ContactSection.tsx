import { Phone, MapPin } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

interface ContactSectionProps {
  phoneLink: string;
  phone: string;
  mapsLink: string;
}

const ContactSection = ({ phoneLink, phone, mapsLink }: ContactSectionProps) => (
  <section className="py-24 md:py-32 px-6">
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
              <a href={phoneLink} className="text-3xl md:text-4xl font-serif text-primary hover:text-navy-light transition-colors">
                {phone}
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={phoneLink} className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium text-base hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Ring nu
              </a>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-3 rounded font-medium text-base hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Find vej
              </a>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="rounded overflow-hidden h-80 md:h-full min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.9!2d12.5244!3d55.6806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4531d047b83c0e7%3A0xa44ab39e5b2f7c67!2s67%20A%2FS!5e0!3m2!1sda!2sdk!4v1"
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
);

export default ContactSection;
