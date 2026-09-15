export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="animate-float aurora-blob top-[-10%] left-[8%] w-[26rem] h-[26rem] bg-[#a3e635] opacity-40" />
      <div className="animate-float-d2 aurora-blob top-[10%] right-[4%] w-[24rem] h-[24rem] bg-[#c026d3] opacity-[0.18]" />
      <div className="animate-float-d3 aurora-blob bottom-[-15%] left-[28%] w-[30rem] h-[30rem] bg-[#f5c344] opacity-[0.22]" />
      <div className="grain-overlay" />
    </div>
  );
}
