import SkeletonProduct from "./SkeletonProduct";

export default function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
    </div>
  );
}
