import { TrendingUp } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import IntelligenceItem, { type FeedEvent } from "./IntelligenceItem";

const feedData: FeedEvent[] = [
  {
    id: "1",
    company: "OpenAI",
    type: "price_drop",
    description: "GPT-4o API pricing reduced by 20% across all tiers",
    delta: "-$0.10 / 1M tokens",
    time: "14m ago",
  },
  {
    id: "2",
    company: "Vercel",
    type: "price_hike",
    description: "Pro Plan base cost increased by $5/month",
    delta: "+$5.00",
    time: "2h ago",
  },
  {
    id: "3",
    company: "Stripe",
    type: "new_plan",
    description: "Launched 'Checkout Pro' for high-volume enterprises",
    delta: "New Service",
    time: "5h ago",
  },
  {
    id: "4",
    company: "Google Cloud",
    type: "summary",
    description: "Autonomous sweep confirmed no changes on Dev Portal",
    time: "1d ago",
  },
  {
    id: "5",
    company: "AWS",
    type: "price_drop",
    description: "Lambda pricing reduced for ARM-based workloads in us-east-1",
    delta: "-12%",
    time: "1d ago",
  },
];

const StrategicFeed = () => (
  <div className="glass-card rounded-3xl flex flex-col h-full overflow-hidden">
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h2 className="text-sm font-semibold text-foreground">Strategic Feed</h2>
      </div>
      <button className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-3 py-1 rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
        Audit Stream
      </button>
    </div>

    {/* Feed list */}
    <ScrollArea className="flex-1">
      <div className="py-1">
        {feedData.map((event, i) => (
          <IntelligenceItem key={event.id} event={event} index={i} />
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default StrategicFeed;
