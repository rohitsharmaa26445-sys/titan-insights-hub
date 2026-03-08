import { motion } from "framer-motion";
import { Target } from "lucide-react";

export interface Competitor {
  id: string;
  name: string;
  initials: string;
  lastCheck: string;
  status: "active" | "syncing";
}

interface Props {
  competitors: Competitor[];
}

const MonitoredElite = ({ competitors }: Props) => (
  <div className="glass-card rounded-3xl flex flex-col overflow-hidden">
    {/* Header */}
    <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
      <Target className="w-4 h-4 text-accent" />
      <h2 className="text-sm font-semibold text-foreground">Monitored Elite</h2>
    </div>

    {/* List */}
    <div className="py-1">
      {competitors.map((c) => (
        <motion.div
          key={c.id}
          whileHover={{ scale: 1.01 }}
          className="flex items-center gap-3 px-5 py-2.5 hover:bg-[rgba(255,255,255,0.03)] transition-colors cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-xs font-bold text-muted-foreground">
            {c.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
              {c.name}
            </p>
            <p className="text-[11px] text-muted-foreground">{c.lastCheck}</p>
          </div>
          {c.status === "active" ? (
            <span className="text-[10px] font-semibold tracking-wider text-success bg-[rgba(0,255,136,0.1)] px-2 py-0.5 rounded">
              ACTIVE
            </span>
          ) : (
            <span className="text-[10px] font-semibold tracking-wider text-primary bg-[rgba(0,163,255,0.1)] px-2 py-0.5 rounded animate-pulse">
              SYNCING
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default MonitoredElite;
