
// src/components/Envelope.tsx

import { cn } from "@/lib/utils";

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const Envelope = ({ isOpen, onClick }: EnvelopeProps) => {
  return (
    <div 
      className="relative cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={onClick}
      style={{ perspective: "1000px" }}
    >
      {/* Envelope Body */}
      <div className="relative w-80 h-56 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg shadow-2xl border border-amber-200">
        
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg" />
        
        {/* Envelope Front Triangular Flaps */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[112px] border-b-amber-100" />
        </div>
        
        {/* Top Flap */}
        <div
          className={cn(
            "absolute top-0 left-0 w-full origin-top transition-all duration-700 ease-out z-50",
            isOpen ? "rotate-x-180" : "rotate-x-0"
          )}
          style={{ 
            transformStyle: "preserve-3d",
            clipPath: "polygon(0 0, 100% 0, 50% 70%)"
          }}
        >
          <div className="w-full h-32 bg-gradient-to-b from-amber-200 to-amber-300 shadow-lg border border-amber-300 rounded-t-lg" />
        </div>
        
        {/* Envelope Seal */}
        <div
          className={cn(
            "absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full shadow-md transition-all duration-500",
            isOpen ? "opacity-50 scale-75" : "opacity-100 scale-100"
          )}
        >
          <div className="absolute inset-1 bg-blue-400 rounded-full" />
        </div>
        
        {/* Decorative Border */}
        <div className="absolute inset-2 border-2 border-dashed border-amber-300/50 rounded-md" />
      </div>

      {/* Hover Glow Effect with Blue Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default Envelope;
