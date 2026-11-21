import { Gauge, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metric } from "@/types";

export const companyValues: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Profit over vanity",
    description:
      "We measure success in contribution margin and TACoS — not impressions or isolated ACoS wins.",
    icon: Gauge,
  },
  {
    title: "Radical transparency",
    description:
      "You own your accounts and data. Every action, test and result is visible in clear reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Senior expertise",
    description:
      "Your account is run by experienced specialists, not juniors learning on your budget.",
    icon: Lightbulb,
  },
  {
    title: "True partnership",
    description:
      "We operate as an extension of your team, aligned to your goals, margins and brand.",
    icon: HeartHandshake,
  },
];

export const companyStats: Metric[] = [
  { value: "2016", label: "Founded" },
  { value: "60+", label: "Amazon specialists" },
  { value: "12", label: "Marketplaces served" },
  { value: "96%", label: "Client retention" },
];

export const team: { name: string; role: string; initials: string }[] = [
  { name: "Ethan Brooks", role: "Founder & CEO", initials: "EB" },
  { name: "Alex Rivera", role: "Director of Strategy", initials: "AR" },
  { name: "Jordan Hale", role: "Head of Advertising", initials: "JH" },
  { name: "Maya Chen", role: "SEO & Content Lead", initials: "MC" },
];
