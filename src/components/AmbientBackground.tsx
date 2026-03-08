const AmbientBackground = () => (
  <>
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#00A3FF] opacity-[0.05] blur-[120px] animate-orb-pulse" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#6B21A8] opacity-[0.05] blur-[120px] animate-orb-pulse [animation-delay:2s]" />
    </div>
    <div className="noise-overlay" />
  </>
);

export default AmbientBackground;
