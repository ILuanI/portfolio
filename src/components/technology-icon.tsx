import type { IconType } from "react-icons";
import {
  SiChatwoot,
  SiCoolify,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiGooglesearchconsole,
  SiHetzner,
  SiHostinger,
  SiInertia,
  SiJavascript,
  SiLaravel,
  SiLighthouse,
  SiMeta,
  SiMoodle,
  SiMysql,
  SiN8N,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
  SiWordpress,
} from "react-icons/si";
import {
  TbChartBar,
  TbCode,
  TbSearch,
  TbServer,
  TbSitemap,
  TbWorldWww,
} from "react-icons/tb";

const technologies: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Zustand: { icon: TbSitemap, color: "#C9A78A" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Recharts: { icon: TbChartBar, color: "#22B5BF" },
  "GitHub API": { icon: SiGithub, color: "var(--foreground)" },
  OAuth: { icon: TbCode, color: "var(--muted)" },
  WordPress: { icon: SiWordpress, color: "#21759B" },
  Moodle: { icon: SiMoodle, color: "#F98012" },
  n8n: { icon: SiN8N, color: "#EA4B71" },
  "WhatsApp API": { icon: SiWhatsapp, color: "#25D366" },
  WhatsApp: { icon: SiWhatsapp, color: "#25D366" },
  "Meta Business": { icon: SiMeta, color: "#0866FF" },
  Meta: { icon: SiMeta, color: "#0866FF" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  "Inertia.js": { icon: SiInertia, color: "#9553E9" },
  PHP: { icon: SiPhp, color: "#A3A9DB" },
  Git: { icon: SiGit, color: "#F05032" },
  HestiaCP: { icon: TbServer, color: "#81C4F4" },
  DigitalOcean: { icon: SiDigitalocean, color: "#0080FF" },
  Hetzner: { icon: SiHetzner, color: "#D50C2D" },
  Coolify: { icon: SiCoolify, color: "#A855F7" },
  Python: { icon: SiPython, color: "#FFD43B" },
  Chatwoot: { icon: SiChatwoot, color: "#1F93FF" },
  DNS: { icon: TbWorldWww, color: "#8DD6F9" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Ahrefs: { icon: TbSearch, color: "#FF8800" },
  "Google Search Console": { icon: SiGooglesearchconsole, color: "#458CF5" },
  Lighthouse: { icon: SiLighthouse, color: "#F44B21" },
  Hostinger: { icon: SiHostinger, color: "#A78BFA" },
};

export default function TechnologyIcon({ technology }: { technology: string }) {
  const { icon: Icon, color } = technologies[technology] ?? {
    icon: TbCode,
    color: "var(--accent)",
  };

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      size={18}
      color={color}
      className="shrink-0"
    />
  );
}
