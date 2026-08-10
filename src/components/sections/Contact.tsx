import { Mail, Instagram, Youtube, Palette, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { fabStoreUrl } from "@/data/assets";

export const CONTACT_EMAIL = "contato@quebramar.art";

const socials = [
  { label: "Fab", href: fabStoreUrl, Icon: ShoppingBag },
  { label: "ArtStation", href: "https://www.artstation.com/", Icon: Palette },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: Youtube },
];

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            {t("contact.email")}
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-display text-lg text-deep underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
