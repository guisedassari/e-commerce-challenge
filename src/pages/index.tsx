/* eslint-disable @next/next/no-img-element */
import { FaCartPlus } from "react-icons/fa";

import { ProductList, Container } from "../styles/pages/home";

import { GetServerSideProps } from "next";
import { api } from "../services/api";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../util/format";
import { Header } from "../components/Header";
import { parseCookies } from "nookies";
import { getApiClient } from "../services/axios";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  DisplayName: string;
  type: string;
  description: string;
}

interface HomeProps {
  ListProducts?: Product[];
}

interface CartItemsAmount {
  [key: number]: number;
}

export default function Home({ ListProducts }: HomeProps) {
  const { addProductToCart, cart } = useCart();

  const cartItemsAmount = cart?.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount);

  function handleAddProductToCart(product: Product) {
    addProductToCart(product);
  }

  return (
    <>
      <Header />
      <Container>
        <ProductList>
          {ListProducts.map((product) => {
            return (
              <li key={product.id}>
                <p className="stock">({product.stock})</p>
                <div className="container-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <strong>
                  {product.DisplayName} - {product.type}
                </strong>
                <span>{formatPrice(product.price)}</span>
                <button
                  type="button"
                  data-testid="add-fruit-button"
                  onClick={() => handleAddProductToCart(product)}
                >
                  <div>
                    <FaCartPlus size={16} color="#FFF" />
                    {cartItemsAmount[product.id] || 0}
                  </div>

                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            );
          })}
        </ProductList>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  ctx
) => {
  const apiClient = getApiClient(ctx);
  const { "@front-e-commerce:token": token } = parseCookies(ctx);

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const { data: ListProducts } = await apiClient.get("products");

  return {
    props: {
      ListProducts,
    },
  };
};
