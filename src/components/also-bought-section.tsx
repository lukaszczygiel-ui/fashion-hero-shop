import type { Product } from "@/types";
import { ProductCard } from "@/components/product-card";

interface AlsoBoughtSectionProps {
  products: Product[];
}

export function AlsoBoughtSection({ products }: AlsoBoughtSectionProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-lg font-medium text-charcoal mb-6">Klientki kupiły też</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
