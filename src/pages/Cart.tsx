import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/slices/cart.slice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  const { subtotal, discountPercentage, discountAmount, finalPrice } =
    useMemo(() => {
      const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      let discountPercentage = 0;

      if (subtotal > 30) {
        discountPercentage = 15;
      } else if (subtotal > 10) {
        discountPercentage = 10;
      } else if (subtotal > 5) {
        discountPercentage = 5;
      }

      const discountAmount = (subtotal * discountPercentage) / 100;
      const finalPrice = subtotal - discountAmount;

      return {
        subtotal,
        discountPercentage,
        discountAmount,
        finalPrice,
      };
    }, [cart]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.name}
            className="border rounded-xl p-4 flex justify-between items-center"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>

                <p>${item.price}</p>

                <p className="text-green-600">
                  Total: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 rounded bg-gray-200"
                onClick={() => dispatch(decreaseQuantity(item.name))}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                className="w-8 h-8 rounded bg-gray-200"
                onClick={() => dispatch(increaseQuantity(item.name))}
              >
                +
              </button>
            </div>

            <button
              className="text-red-500 font-medium"
              onClick={() => dispatch(removeFromCart(item.name))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border rounded-xl p-6 bg-gray-50">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2 text-green-600">
          <span>Discount ({discountPercentage}%)</span>
          <span>- ${discountAmount.toFixed(2)}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
