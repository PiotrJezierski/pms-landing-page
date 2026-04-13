import { Building2 } from "lucide-react";

export function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const iconSize = size === "small" ? "w-7 h-7" : "w-8 h-8";
  const iconInner = size === "small" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textSize = size === "small" ? "text-[14px]" : "text-[15px]";

  return (
    <span className="flex items-center gap-2">
      <span
        className={`${iconSize} rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center`}
      >
        <Building2 className={`${iconInner} text-white`} strokeWidth={2} />
      </span>
      <span className={`${textSize} font-semibold tracking-tight`}>
        Property<span className="text-indigo-400">PMS</span>
      </span>
    </span>
  );
}
