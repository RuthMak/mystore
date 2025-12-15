import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={setSelectedProduct}
          />
        ))}
      </div>

      <Modal
        open={!!selectedProduct}
        title={selectedProduct?.name}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="space-y-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-2xl border border-rooted-line"
            />

            <p className="text-rooted-greenSoft">
              {selectedProduct.description}
            </p>

            <p className="text-sm text-rooted-greenSoft">
              Category:{" "}
              <span className="font-semibold text-rooted-green">
                {selectedProduct.category}
              </span>
            </p>

            <p className="text-xl font-bold text-rooted-green">
              ${selectedProduct.price}
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}
