import { motion } from "framer-motion";
import { Zap, Bell } from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "competitors", label: "Competitors" },
  { id: "audit", label: "Audit Logs" },
] as const;

type Tab = (typeof tabs)[number]["id"];

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onDeployClick: () => void;
}

const Header = ({ activeTab, onTabChange, onDeployClick }: HeaderProps) => (
  <header className="flex items-center justify-between px-6 h-14 border-b border-[rgba(255,255,255,0.06)] shrink-0">
    {/* Logo */}
    <div className="flex items-center gap-2 cursor-pointer">
      <Zap className="w-5 h-5 text-primary fill-primary" />
      <span className="text-foreground font-extrabold tracking-[0.2em] text-sm">TITAN</span>
    </div>

    {/* Nav Pills */}
    <nav className="flex items-center bg-[rgba(255,255,255,0.04)] rounded-xl p-1 relative">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="relative px-4 py-1.5 text-sm font-medium cursor-pointer z-10 transition-colors duration-200"
          style={{ color: activeTab === tab.id ? "#FAFAFA" : "#888888" }}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-lg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </nav>

    {/* Right actions */}
    <div className="flex items-center gap-3">
      <button className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
        <Bell className="w-4.5 h-4.5 text-muted-foreground" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
      </button>
      <button
        onClick={onDeployClick}
        className="px-4 py-1.5 bg-foreground text-background text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer glow-blue"
      >
        Deploy Agent
      </button>
    </div>
  </header>
);

export default Header;
