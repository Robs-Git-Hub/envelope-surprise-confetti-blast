
import { motion } from "framer-motion";

const BirthdayCard = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full"
      initial={{ y: "100%" }}
      animate={{ y: "-100%" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }}
    >
      <div className="w-72 h-[480px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-16 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold tracking-wide">Happy Birthday! 🎂</h1>
        </div>
        
        {/* Card Content */}
        <div className="p-6 text-center space-y-4">
          {/* Portrait Image - increased height to show full image */}
          <div className="w-full mb-4">
            <img 
              src="/assets/friends.png" 
              alt="Friends" 
              className="w-full h-48 object-cover rounded-lg shadow-md"
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
