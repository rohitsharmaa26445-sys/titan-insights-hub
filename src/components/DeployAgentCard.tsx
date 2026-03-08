import { Plus } from "lucide-react";

interface Props {
  onClick: () => void;
}

const DeployAgentCard = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    className="glass-card rounded-3xl w-full p-5 flex items-center gap-4 hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer group text-left"
  >
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center glow-blue shrink-0">
      <Plus className="w-5 h-5 text-primary" />
    </div>
    <div>
      <p className="text-xs font-bold tracking-wider text-foreground uppercase">Add Competitor</p>
      <p className="text-[11px] text-muted-foreground italic">Configure new surveillance target</p>
    </div>
  </button>
);

export default DeployAgentCard;
