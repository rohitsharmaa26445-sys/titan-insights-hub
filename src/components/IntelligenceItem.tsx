import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Plus, Info, Clock } from "lucide-react";

export interface FeedEvent {
  id: string;
  company: string;
  type: "price_drop" | "price_hike" | "new_plan" | "summary";
  description: string;
  delta?: string;
  time: string;
}

const typeConfig = {
  price_drop: { icon: ArrowDownRight, color: "#00FF88", label: "PRICE DROP" },
  price_hike: { icon: ArrowUpRight, color: "#FF4444", label: "PRICE HIKE" },
  new_plan: { icon: Plus, color: "#00A3FF", label: "NEW PLAN" },
  summary: { icon: Info, color: "#888888", label: "SUMMARY" },
};

interface Props {
  event: FeedEvent;
  index: number;
}

const IntelligenceItem = ({ event, index }: Props) => {
  const config = typeConfig[event.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="flex items-start gap-3.5 px-4 py-3.5 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors cursor-pointer group"
    >
      {/* Icon */}
      <div
        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${config.color}15` }}
      >
        <Icon className="w-4 h-4" style={{ color: config.color }} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-semibold text-foreground">{event.company}</span>
          <span
            className="text-[10px] font-semibold tracking-wider px-1.5 py-0.5 rounded"
            style={{ color: config.color, backgroundColor: `${config.color}12` }}
          >
            {config.label}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{event.description}</p>
        {event.delta && (
          <span
            className="inline-block mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-md"
            style={{ color: config.color, backgroundColor: `${config.color}15` }}
          >
            {event.delta}
          </span>
        )}
      </div>

      {/* Time */}
      <div className="shrink-0 flex items-center gap-1 text-muted-foreground pt-0.5">
        <Clock className="w-3 h-3" />
        <span className="text-[11px] italic">{event.time}</span>
      </div>
    </motion.div>
  );
};

export default IntelligenceItem;
