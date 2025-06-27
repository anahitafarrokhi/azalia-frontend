// context/CartContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: any;
  selectedStone?: string;
  engraving?: string;
}

interface CartContextType {
  cart: Product[];
  hasMounted: boolean;
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  showCart: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // ✅ Load from localStorage on first mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch {
        setCart([]);
      }
    }
    setHasMounted(true);
  }, []);

  // ✅ Save to localStorage on cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id && item.size === product.size);
      if (exists) {
        return prev.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
    setShowCart(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <CartContext.Provider
      value={{
        cart,
        hasMounted,
        addToCart,
        updateQuantity,
        removeFromCart,
        showCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
