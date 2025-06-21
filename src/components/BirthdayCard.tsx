
const BirthdayCard = () => {
  return (
    <div className="w-72 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-16 flex items-center justify-center">
        <h1 className="text-white text-xl font-bold tracking-wide">Happy Birthday! 🎂</h1>
      </div>

      {/* Card Content */}
      <div className="p-6 text-center space-y-4">
        {/* Friend Image Placeholder */}
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-200 to-purple-300 rounded-full shadow-lg flex items-center justify-center">
          <div className="text-4xl">👥</div>
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
  );
};

export default BirthdayCard;
