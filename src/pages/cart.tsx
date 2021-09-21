/* eslint-disable @next/next/no-img-element */
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

import { Container, ProductTable, Total } from "../styles/pages/cart";

import { formatPrice } from "../util/format";

import { Header } from "../components/Header";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  amount?: number;
}

export default function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    sumTotal: formatPrice(product.amount * product.price),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount * product.price;
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      stock: product.stock,
      amount: product.amount + 1,
    });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      stock: product.stock,
      amount: product.amount - 1,
    });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <>
      <Header />
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map((product) => {
              return (
                <tr data-testid="product" key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>
                    <strong>{product.name}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        data-testid="decrement-product"
                        disabled={product.amount <= 1}
                        onClick={() => handleProductDecrement(product)}
                      >
                        <FaMinus size={20} />
                      </button>
                      <input
                        type="text"
                        data-testid="product-amount"
                        readOnly
                        value={product.amount}
                      />
                      <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement(product)}
                      >
                        <FaPlus size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.sumTotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
