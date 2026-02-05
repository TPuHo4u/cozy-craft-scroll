import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className={cn(
        "relative w-14 h-8 rounded-full p-1 transition-all duration-500",
        "bg-accent/80 hover:bg-accent border border-border/50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Track background */}
      <span
        className={cn(
          "absolute inset-0 rounded-full transition-colors duration-500",
          isDark ? "bg-slate-800/50" : "bg-amber-100/50"
        )}
      />

      {/* Sliding thumb */}
      <span
        className={cn(
          "relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500 shadow-md",
          isDark
            ? "translate-x-6 bg-slate-700"
            : "translate-x-0 bg-white"
        )}
      >
        <Sun
          className={cn(
            "absolute w-4 h-4 transition-all duration-300",
            isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100 text-amber-500"
          )}
        />
        <Moon
          className={cn(
            "absolute w-4 h-4 transition-all duration-300",
            isDark
              ? "opacity-100 rotate-0 scale-100 text-amber-300"
              : "opacity-0 -rotate-90 scale-0"
          )}
        />
      </span>

      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
