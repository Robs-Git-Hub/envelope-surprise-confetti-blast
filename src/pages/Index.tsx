
import { useState } from "react";
import Envelope from "@/components/Envelope";
import BirthdayCard from "@/components/BirthdayCard";
import Confetti from "@/components/Confetti";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      // Delay card appearance to sync with envelope animation
      setTimeout(() => {
        console.log("Verification Step 1: Setting showCard to true in Index.tsx");
        setShowCard(true);
        setShowConfetti(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-repeat opacity-50"
        style={{
          backgroundImage: "url('/assets/pattern-bg.png')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/80 via-purple-200/80 to-indigo-300/80" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {showConfetti && <Confetti />}
        
        {/* We keep the original changes to Envelope and BirthdayCard components */}
        {/* The key is passing the `showCard` state into the `isVisible` prop */}
        <div className="relative w-80 h-56">
          <Envelope 
            isOpen={isEnvelopeOpen} 
            onClick={handleEnvelopeClick}
          />
          <BirthdayCard isVisible={showCard} />
        </div>
        
        {!isEnvelopeOpen && (
          <div className="absolute bottom-8 text-center text-white/90 font-medium">
            <p className="text-lg mb-2">🎉 You have a special message!</p>
            <p className="text-sm">Click the envelope to open</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
