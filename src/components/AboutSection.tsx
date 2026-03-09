import FadeInSection from "@/components/FadeInSection";

const AboutSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-10">Om os</h2>
        <div className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
          <p>
            Hos Falkoner 67 Cykler arbejder vi med at give gode cykler et nyt liv. En stor del af vores cykler kommer fra officielle politiaktioner, hvor cykler uden ejere bliver indsamlet og senere frigivet til salg. Disse cykler gennemgår vi grundigt i vores værksted, hvor de bliver restaureret, serviceret og gjort klar til brug igen.
          </p>
          <p>
            Vores mål er at tilbyde solide kvalitetscykler til gode priser, samtidig med at alt foregår helt transparent og lovligt. Alle cykler sælges med kvittering, og vi sørger for at stelnummer og relevant dokumentation følger med. Alle cyklerne bliver gennemgået fra ende til anden, så de kører som de skal, før de kommer ud på gulvet i butikken.
          </p>
          <p>
            Vi lægger vægt på ærlig handel og god service. Kom gerne forbi butikken på Falkoner Allé og se vores udvalg – vi hjælper gerne med at finde den cykel, der passer til dine behov.
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default AboutSection;
