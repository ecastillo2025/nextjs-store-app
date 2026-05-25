import Product from "@/components/product";
import FavoriteBtn from "@/components/favorite-btn";

export default function Home() {
  return (

      <main className="flex flex-col items-center mt-32 gap-12">
        <h1 className="text-5xl font-semibold">My Store</h1>

        <Product />

        <FavoriteBtn />
      </main>

  );
}
