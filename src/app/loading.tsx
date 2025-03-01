import Header from "@/components/Header";
import SkeletonGrid from "@/components/SkeletonGrid";

export default function Loading() {
  return (
    <>
      <Header />
      <main className="p-0 max-w-7xl mx-auto">
        <SkeletonGrid />
      </main>
    </>
  );
}
