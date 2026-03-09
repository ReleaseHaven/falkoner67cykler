import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Cykler", href: "#cykler" },
  { label: "Tilbehør", href: "#tilbehoer" },
  { label: "Service", href: "#service" },
  { label: "Om os", href: "#om-os" },
  { label: "Kontakt", href: "#kontakt" },
];

const PHONE_LINK = "tel:+4540207373";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button - vises i sticky header */}
      <button
        className="md:hidden p-1 text-primary-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="fixed top-12 left-0 right-0 z-40 bg-primary text-primary-foreground shadow-lg md:hidden">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-base font-medium border-b border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop nav links */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
