import FadeInSection from "@/components/FadeInSection";
import raleighHerre from "@/assets/raleigh-herre.jpg";
import raleighDame from "@/assets/raleigh-dame.jpg";
import vandefalkHerre from "@/assets/vandefalk-herre.webp";
import vandefalkDame from "@/assets/vandefalk-dame.webp";
import mustangHerre from "@/assets/mustang-herre.webp";
import mustangDame from "@/assets/mustang-dame.webp";
import christianiaCykel from "@/assets/christiania-cykel.jpg";

const bikes = [
  { name: "Van de Falk Herrecykel", img: vandefalkHerre },
  { name: "Van de Falk Damecykel", img: vandefalkDame },
  { name: "Raleigh Tourist Deluxe Herre", img: raleighHerre },
  { name: "Raleigh Tourist Deluxe Dame", img: raleighDame },
  { name: "Mustang Herrecykel", img: mustangHerre },
  { name: "Mustang Damecykel", img: mustangDame },
  {
    name: "Christiania Ladcykel",
    img: christianiaCykel,
    description: "Vi har også Christiania ladcykler i butikken. Kom forbi og se vores aktuelle udvalg.",
  },
];

const BikesSection = () => (
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
              <div className="aspect-[3/2] overflow-hidden rounded-lg bg-muted mb-4">
                <img
                  src={bike.img}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-foreground font-medium">{bike.name}</p>
              {bike.description && (
                <p className="text-muted-foreground text-sm mt-1">{bike.description}</p>
              )}
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
);

export default BikesSection;
