interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function Product() {
  const res = await fetch('https://fakestoreapi.com/products/3');
  const product: Product = await res.json();


  return (
    <section className="flex flex-col items-center gap-2">
      <p>{product.title}</p>
    </section>
  )
}
