import React from "react";
import { useCart } from "@/context/CartProvider";
import Image from "next/image";
import { useRouter } from "next/router";

const CartSidebar: React.FC = () => {
  const { cart, hasMounted, showCart, toggleCart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  if (!hasMounted) return null;
  return (

    <div
      className={`fixed top-0 right-0 w-96 h-full bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ${showCart ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button onClick={toggleCart} className="text-gray-500 text-2xl">×</button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item:any, index) => (
            console.log(item,'kk'),
            <div key={index} className="flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
              <div className="flex-1 ml-4">
                <p className="text-sm text-gray-800 font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                {item.selectedStone ?? <p className="text-sm text-gray-500">Inner Stone: {item?.selectedStone}</p>}
                {item.engraving ?? <p className="text-sm text-gray-500">Engraving: {item?.engraving}</p> }
                <p className="text-sm" style={{ color: "#0e0d0dc7" }}>
                  {item.price.toLocaleString()} AED
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded text-sm"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-sm text-blue-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {cart.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">
          <div className="flex justify-between items-center mb-4 text-gray-800 font-semibold">
            <span>Subtotal</span>
            <span>{subtotal.toLocaleString()} AED</span>
          </div>
          <button
            onClick={() => {
              toggleCart();
              router.push({
                pathname: "/checkout",
                query: {
                  items: JSON.stringify(cart),
                  total: subtotal,
                  count: cart.reduce((acc, item) => acc + item.quantity, 0),
                },
              });
            }}
            className="w-full bg-black text-white py-2 rounded text-sm font-semibold hover:bg-gray-800 mb-2"
          >
            CHECK OUT
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded text-sm font-semibold hover:bg-gray-100">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
