import Header from "@/components/Header";
import SkeletonProduct from "@/components/SkeletonProduct";

export default function Loading() {
  return (
    <>
      <Header />
      <main className="p-6 max-w-7xl mx-auto">
        <SkeletonProduct />
      </main>
    </>
  );
}
