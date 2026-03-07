import FadeInSection from "@/components/FadeInSection";
import cykelkurv from "@/assets/cykelkurv.webp";
import cykellaas from "@/assets/cykellaas.jpg";
import brooksSadel from "@/assets/brooks-sadel.jpg";
import magnetlys from "@/assets/magnetlys.jpeg";
import cykellygter from "@/assets/cykellygter.jpeg";
import ringeklokkemedgps from "@/assets/ringeklokkemedgps.webp";
import pluginringlaas from "@/assets/pluginringlaas.webp";
import kaedelaasstor from "@/assets/kaedelaasstor.jpg";
import kaedelaaslille from "@/assets/kaedelaaslille.jpeg";
import cykelhjelm from "@/assets/cykelhjelm.jpg";

const accessories = [
  {
    name: "Kurve",
    img: cykelkurv,
    price: "Fra 149 kr",
    text: "Montering af kurve tilbydes i butikken.",
  },
  {
    name: "Forsikringsgodkendt ringlås",
    img: cykellaas,
    price: "350 kr",
    text: "Forsikringsgodkendt ringlås med 2 nøgler.",
  },
  {
    name: "Brooks sadler",
    img: brooksSadel,
    text: "Stort udvalg af Brooks sadler.",
  },
  {
    name: "Magnetlys",
    img: magnetlys,
    price: "300 kr",
  },
  {
    name: "Batterilys",
    img: cykellygter,
    price: "1 stk 150 kr · 2 stk 250 kr",
  },
  {
    name: "Ringeklokke med GPS",
    img: ringeklokkemedgps,
    price: "600 kr",
  },
  {
    name: "Forsikringsgodkendt plug-in ringlås",
    img: pluginringlaas,
    price: "600 kr",
  },
  {
    name: "Stor kædelås",
    img: kaedelaasstor,
    price: "900 kr",
  },
  {
    name: "Lille kædelås",
    img: kaedelaaslille,
    price: "400 kr",
  },
  {
    name: "Cykelhjelme",
    img: cykelhjelm,
    price: "400 kr",
    text: "Bredt udvalg af cykelhjelme.",
  },
];

const AccessoriesSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl text-center mb-16">Tilbehør</h2>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accessories.map((item, i) => (
          <FadeInSection key={item.name} delay={i * 0.05}>
            <div className="rounded-lg overflow-hidden h-full flex flex-col bg-secondary">
              <div className="aspect-square overflow-hidden flex items-center justify-center bg-secondary">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-medium mb-1">{item.name}</h3>
                {item.price && (
                  <p className="text-primary font-semibold text-sm mb-1">{item.price}</p>
                )}
                {item.text && (
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default AccessoriesSection;
