import FadeInSection from "@/components/FadeInSection";
import christianiaCykel from "@/assets/christiania-cykel.jpg";
import raleighHerre from "@/assets/raleigh-herre.jpg";

const rentals = [
  {
    name: "Almindelig cykel",
    description: "Herre- og damecykel. Fuldt serviceret og klar til brug.",
    price: "100 kr",
    unit: "pr. dag",
    img: raleighHerre,
  },
  {
    name: "Christiania ladcykel",
    description: "Uden el-motor. Perfekt til transport af børn eller indkøb.",
    price: "300 kr",
    unit: "pr. dag",
    img: christianiaCykel,
  },
  {
    name: "Christiania ladcykel med el",
    description: "Med el-motor. Gør det nemt at komme rundt i byen med last.",
    price: "500 kr",
    unit: "pr. dag",
    img: christianiaCykel,
  },
];

const RentalSection = () => (
  <section id="udlejning" className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl text-center mb-4">Udlejning</h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Lej en cykel til dagen – vi har cykler til alle behov.
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        {rentals.map((rental, i) => (
          <FadeInSection key={rental.name} delay={i * 0.1}>
            <div className="bg-background rounded-lg overflow-hidden flex flex-col h-full">
              {rental.img && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={rental.img}
                    alt={rental.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {!rental.img && (
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Billede kommer snart</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-medium mb-2">{rental.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{rental.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-primary">{rental.price}</span>
                  <span className="text-muted-foreground text-sm">{rental.unit}</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <p className="text-center text-foreground text-lg">
          Kom ned og se vores udvalg af udlejningscykler – vi hjælper dig med at finde den rigtige.
        </p>
      </FadeInSection>
    </div>
  </section>
);

export default RentalSection;
