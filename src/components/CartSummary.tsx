
// pages/checkout.tsx or wherever your checkout component is
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CartSummary = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      const items = router.query.items ? JSON.parse(router.query.items as string) : [];
      setCartItems(items);
      setTotal(Number(router.query.total));
      setCount(Number(router.query.count));
    }
  }, [router.isReady]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border p-2 rounded">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
            <div>
              <p className="font-medium">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>{item.price.toLocaleString()} AED</p>
            </div>
          </div>
        ))}

        <div className="mt-6 border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal ({count} items)</span>
            <span>{total.toLocaleString()} AED</span>
          </div>
          {/* <div className="flex justify-between">
            <span>Shipping</span>
            <span>FREE</span>
          </div> */}
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>{total.toLocaleString()} AED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
