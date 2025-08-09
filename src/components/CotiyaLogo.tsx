import { cn } from "@/lib/utils";

interface CotiyaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CotiyaLogo = ({ className, size = "md" }: CotiyaLogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative", sizeClasses[size])}>
         <svg    viewBox="0 0 100 100"    className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg"  >
    
            {/* Silueta principal en forma de C */}
            <path
              d="M50 10 C25 10 5 30 5 55 C5 80 25 100 50 100 L65 100 L65 85 L50 85 
                C32.5 85 18 70.5 18 55 C18 39.5 32.5 25 50 25 L65 25 L65 10 L50 10 Z"
              fill="currentColor"
            />

          {/* Rectángulo central */}
          <rect
            x="42"
            y="42"
            width="20"
            height="16"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Línea superior del rectángulo */}
          <path
            d="M42 48 L62 48"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          {/* Línea corta izquierda */}
          <path
            d="M46 52 L50 52"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          {/* Línea corta derecha */}
          <path
            d="M54 52 L58 52"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          {/* Flecha a la derecha */}
          <path
            d="M65 50 L75 50 M70 45 L75 50 L70 55"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-lg font-bold text-current">CotiYa</span>
    </div>
  );
};

export default CotiyaLogo;