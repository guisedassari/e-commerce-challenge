import { createContext, ReactNode, useContext, useState } from "react";
import { parseCookies, setCookie } from "nookies";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  DisplayName: string;
  type: string;
  description: string;
  amount?: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
  stock: number;
}

interface CartContextData {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({
    productId,
    amount,
    stock,
  }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const cookies = parseCookies();
    const storagedCart = cookies["@front-e-commerce:cart"];

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  console.log(cart);

  const addProductToCart = async (product: Product) => {
    console.log(product);
    try {
      const updatedCart = [...cart];

      const productExists = updatedCart.find((prod) => prod.id === product.id);
      const currentAmount = productExists?.amount ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (productExists) {
        if (amount > productExists.stock) {
          alert("Não a estoque disponivel");
          return;
        }
        productExists.amount = amount;
      } else {
        const newProduct = {
          ...product,
          amount: 1,
        };
        updatedCart.push(newProduct);
      }
      setCart(updatedCart);
      setCookie(null, "@front-e-commerce:cart", JSON.stringify(updatedCart), {
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
    } catch {
      alert("Erro ao adicionar produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = cart.filter((product) => product.id !== productId);

      setCart(updatedCart);
      setCookie(null, "@front-e-commerce:cart", JSON.stringify(updatedCart), {
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
    } catch {
      alert("Erro ao remover produto.");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
    stock,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      if (amount > stock) {
        alert("Quantidade nao disponivel no estoque");
        return;
      }
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        setCookie(null, "@front-e-commerce:cart", JSON.stringify(updatedCart), {
          maxAge: 60 * 60 * 24, // 24 hours
          path: "/",
        });
      } else {
        throw Error();
      }
    } catch {
      alert("Erro ao alterar produto.");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
