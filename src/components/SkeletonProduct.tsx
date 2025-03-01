export default function SkeletonProduct() {
    return (
      <div className="p-4 border rounded-lg shadow-md animate-pulse">
        <div className="w-full h-32 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-1/4"></div>
      </div>
    );
  }
  