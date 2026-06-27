import {
  Globe2,
  TrendingUp,
  UserSquare2,
  Megaphone,
  Search,
  Handshake,
  Rocket,
  Calendar,
  ClipboardList,
  PenTool,
  MessageSquare,
  Share2,
  ThumbsUp,
  Users,
  Map,
  Building2,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  globe: Globe2,
  chart: TrendingUp,
  userTie: UserSquare2,
  bullhorn: Megaphone,
  search: Search,
  handshake: Handshake,
  rocket: Rocket,
  calendar: Calendar,
  clipboard: ClipboardList,
  pen: PenTool,
  comments: MessageSquare,
  share: Share2,
  thumbsUp: ThumbsUp,
  users: Users,
  map: Map,
  building: Building2,
  envelope: Mail,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Globe2;
  return <Cmp className={className} strokeWidth={1.75} />;
}
