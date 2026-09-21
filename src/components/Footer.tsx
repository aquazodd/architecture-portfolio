import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 {site.name}</span>

      <div>
        {site.socials.map((social) => (
          <a key={social.label} href={social.href}>
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
