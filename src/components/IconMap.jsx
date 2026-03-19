import {
  ArrowUpRight,
  Atom,
  Award,
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  ChartColumnBig,
  Code2,
  Coffee,
  Container,
  Cpu,
  Database,
  DatabaseZap,
  FileCode2,
  Gamepad2,
  Github,
  GitBranch,
  Globe2,
  GraduationCap,
  Landmark,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  PlugZap,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Twitter,
  Zap,
} from "lucide-react";

const iconMap = {
  atom: Atom,
  award: Award,
  binary: Binary,
  "brain-circuit": BrainCircuit,
  "briefcase-business": BriefcaseBusiness,
  "chart-column-big": ChartColumnBig,
  coffee: Coffee,
  code2: Code2,
  container: Container,
  cpu: Cpu,
  database: Database,
  "database-zap": DatabaseZap,
  "file-code": FileCode2,
  gamepad2: Gamepad2,
  github: Github,
  "git-branch": GitBranch,
  globe2: Globe2,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  leaf: Leaf,
  linkedin: Linkedin,
  mail: Mail,
  "map-pin": MapPin,
  palette: Palette,
  phone: Phone,
  "plug-zap": PlugZap,
  rocket: Rocket,
  send: Send,
  server: Server,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  "terminal-square": TerminalSquare,
  trophy: Trophy,
  twitter: Twitter,
  "arrow-up-right": ArrowUpRight,
  zap: Zap,
};

export function AppIcon({ name, className = "h-5 w-5" }) {
  const Icon = iconMap[name?.toLowerCase()] || Sparkles;
  return <Icon className={className} strokeWidth={1.8} />;
}

export function SocialIcon({ label, className = "h-4 w-4" }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("github")) return <Github className={className} strokeWidth={1.8} />;
  if (normalized.includes("linkedin")) return <Linkedin className={className} strokeWidth={1.8} />;
  if (normalized.includes("twitter") || normalized.includes("x")) {
    return <Twitter className={className} strokeWidth={1.8} />;
  }

  return <Globe2 className={className} strokeWidth={1.8} />;
}
