const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 border border-gray-200 shadow-md p-6 text-center rounded-xl animate-pulse">
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
