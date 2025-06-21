
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BirthdayCardProps {
  isVisible: boolean;
}

const BirthdayCard = ({ isVisible }: BirthdayCardProps) => {
  // The height of the envelope is 224px (h-56 in Tailwind).
  const envelopeHeight = 224;

  return (
    <motion.div
      // `z-40` ensures the card appears in front of the envelope (`z-30`).
      // `pointer-events-none` is added when the card is not visible to prevent
      // it from blocking clicks on the envelope underneath.
      className={cn(
        "absolute bottom-0 left-0 right-0 mx-auto w-72 z-40",
        !isVisible && "pointer-events-none"
      )}
      
      variants={{
        // `hidden`: The card's initial state, concealed within the envelope.
        hidden: { y: "0%", opacity: 0 },
        // `visible`: The card's final state, aligned with the envelope's top.
        visible: { y: `-${envelopeHeight}px`, opacity: 1 },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 2.5,
      }}
    >
      <div className="w-full h-[480px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-16 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold tracking-wide">Happy Birthday! 🎂</h1>
        </div>
        
        {/* Card Content */}
        <div className="p-6 text-center space-y-4">
          {/* Portrait Image - Using inline style for precise vertical cropping. */}
          <div className="w-full mb-4">
            <img 
              src="/assets/friends.png" 
              alt="Friends" 
              className="w-full h-48 object-cover rounded-lg shadow-md"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
          
          {/* Birthday Message */}
          <div className="space-y-3 text-gray-800">
            <p className="text-lg font-semibold text-blue-600">
              Happy birthday mate.
            </p>
            <p className="text-base">
              Ready for your next escape room?
            </p>
            <p className="text-base font-medium">
              Have a great day, Rob
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-2 text-2xl mt-4">
            <span className="animate-bounce">🎉</span>
            <span className="animate-bounce delay-100">🎈</span>
            <span className="animate-bounce delay-200">🎁</span>
          </div>
        </div>
        
        {/* Card Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-500 italic">
            "Another year of awesome adventures!"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BirthdayCard;