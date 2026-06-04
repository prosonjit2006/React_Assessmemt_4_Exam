import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { groceryList } from "../services/json/grocery.json";
import { addToCart } from "../store/slices/cart.slice";
import type { CartItem } from "../typescript/interface/cart.interface";

interface CardProps {
  searchTerm: string;
  selectedCategory: string;
  sortOrder: "asc" | "desc" | "";
}

const Card = ({ searchTerm, selectedCategory, sortOrder }: CardProps) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  let filtered = groceryList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (selectedCategory !== "all") {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory,
    );
  }

  if (sortOrder === "asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const getCartQuantity = (name: string) => {
    const item = cart.find((i) => i.name === name);
    return item ? item.quantity : 0;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-14">
      {filtered.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 text-lg py-12">
          No products found.
        </p>
      ) : (
        filtered.map((product: CartItem) => {
          const cartQty = getCartQuantity(product.name);

          return (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4 flex flex-col gap-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />

              <div className="flex flex-col gap-1 flex-1">
                <h3 className="font-semibold text-base">{product.name}</h3>
                <p className="text-gray-500 text-sm capitalize">
                  {product.category}
                </p>
                <p className="text-green-600 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                {cartQty > 0 ? (
                  <span className="text-sm text-green-600 font-medium">
                    In cart: {cartQty}
                  </span>
                ) : (
                  <span />
                )}

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
