import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
      <p className="max-w-2xl">
        Denne side bruger cookies til Google Maps. Ved at fortsætte accepterer du vores{" "}
        <a href="/cookiepolitik" className="underline opacity-80 hover:opacity-100">cookiepolitik</a>.
      </p>
      <button
        onClick={accept}
        className="whitespace-nowrap bg-primary-foreground text-primary px-4 py-1.5 rounded text-sm font-medium hover:opacity-90 transition-opacity"
      >
        OK, forstået
      </button>
    </div>
  );
};

export default CookieConsent;
