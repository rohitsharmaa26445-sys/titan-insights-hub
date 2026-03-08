import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string, url: string) => void;
}

const AddCompetitorDialog = ({ open, onClose, onAdd }: Props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !url.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    onAdd(name.trim(), url.trim());
    toast.success(`${name.trim()} added to surveillance targets`, {
      style: { background: "#111", border: "1px solid rgba(255,255,255,0.1)", color: "#fafafa" },
    });
    setName("");
    setUrl("");
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#0B0B0C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-foreground">Add Competitor</h3>
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Vercel"
                className="glass-input w-full"
                required
              />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                placeholder="https://company.com"
                className="glass-input w-full"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
              >
                {loading ? "Adding..." : "Add Competitor"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddCompetitorDialog;
