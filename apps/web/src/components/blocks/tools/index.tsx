import { ToolsGrid } from "./tools-grid";

export default function ToolsSection() {
  return (
    <section className="py-10 md:py-20 xl:py-30">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[1.16] tracking-[-0.48px] mb-6 text-center text-content-slate-medium">Tools that don't fight you</h2>

      <ToolsGrid />
    </section>
  );
}
