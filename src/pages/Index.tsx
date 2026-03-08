import { useState } from "react";
import Header from "@/components/Header";
import StrategicFeed from "@/components/StrategicFeed";
import MonitoredElite from "@/components/MonitoredElite";
import DeployAgentCard from "@/components/DeployAgentCard";
import AddCompetitorDialog from "@/components/AddCompetitorDialog";
import AmbientBackground from "@/components/AmbientBackground";
import type { Competitor } from "@/components/MonitoredElite";

const initialCompetitors: Competitor[] = [
  { id: "1", name: "Vercel", initials: "VE", lastCheck: "2m ago", status: "active" },
  { id: "2", name: "OpenAI", initials: "OP", lastCheck: "14m ago", status: "active" },
  { id: "3", name: "Stripe", initials: "ST", lastCheck: "1h ago", status: "active" },
  { id: "4", name: "Google Cloud", initials: "GC", lastCheck: "Just now", status: "syncing" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "competitors" | "audit">("overview");
  const [competitors, setCompetitors] = useState<Competitor[]>(initialCompetitors);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCompetitor = (name: string, _url: string) => {
    const initials = name.slice(0, 2).toUpperCase();
    setCompetitors((prev) => [
      { id: crypto.randomUUID(), name, initials, lastCheck: "Just now", status: "syncing" },
      ...prev,
    ]);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <AmbientBackground />
      <Header activeTab={activeTab} onTabChange={setActiveTab} onDeployClick={() => setIsDialogOpen(true)} />

      {/* Main content */}
      <main className="flex-1 grid grid-cols-12 gap-4 p-4 min-h-0">
        {/* Left — Strategic Feed */}
        <div className="col-span-8 min-h-0">
          <StrategicFeed />
        </div>

        {/* Right — Sidebar */}
        <div className="col-span-4 flex flex-col gap-4 min-h-0">
          <div className="flex-1 min-h-0">
            <MonitoredElite competitors={competitors} />
          </div>
          <DeployAgentCard onClick={() => setIsDialogOpen(true)} />
        </div>
      </main>

      <AddCompetitorDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddCompetitor}
      />
    </div>
  );
};

export default Index;
