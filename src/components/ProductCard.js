export default function ProductCard({ product, onView }) {
  return (
    <div className="rounded-3xl border border-rooted-line bg-white p-4 transition hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-2xl"
      />

      <h3 className="mt-3 font-bold text-rooted-green">
        {product.name}
      </h3>

      <p className="text-sm text-rooted-greenSoft">
        {product.category}
      </p>

      <p className="mt-1 font-semibold text-rooted-green">
        ${product.price}
      </p>

      <button
        onClick={() => onView(product)}
        className="mt-3 w-full rounded-2xl bg-rooted-green px-4 py-2 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
      >
        View Details
      </button>
    </div>
  );
}
