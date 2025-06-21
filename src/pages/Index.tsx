
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
      
      {/* 
        Content Container:
        - `pt-80`: Increased padding to push the scene further down the page.
      */}
      <div className="relative z-10 min-h-screen flex items-start justify-center p-4 pt-80">
        {showConfetti && <Confetti />}
        
        {/* 
          Animation Stage:
          This container now acts as the main stage without any overflow clipping.
        */}
        <div className="relative w-80 h-56">
          {/*
            Card Clipping Container:
            - This new container is dedicated to the card.
            - It has `overflow-hidden` to clip the card.
            - `pointer-events-none` ensures it doesn't block clicks on the envelope below it in the DOM, but z-index will handle the visual stacking.
          */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <BirthdayCard isVisible={showCard} />
          </div>

          {/* The Envelope component is now a direct child of the main stage,
              so its 3D animation context is preserved. */}
          <Envelope 
            isOpen={isEnvelopeOpen} 
            onClick={handleEnvelopeClick}
          />
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