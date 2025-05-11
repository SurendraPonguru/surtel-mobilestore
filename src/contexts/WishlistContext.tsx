
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (productId: number, productTitle: string) => void;
  removeFromWishlist: (productId: number, productTitle: string) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (productId: number, productTitle: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (productId: number, productTitle: string) => {
    if (!wishlist.includes(productId)) {
      setWishlist((prev) => [...prev, productId]);
      toast.success(`${productTitle} added to favorites`);
    }
  };

  const removeFromWishlist = (productId: number, productTitle: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    toast.info(`${productTitle} removed from favorites`);
  };

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  const toggleWishlist = (productId: number, productTitle: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId, productTitle);
    } else {
      addToWishlist(productId, productTitle);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
