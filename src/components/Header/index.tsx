import { Container, Content, Cart, Logo } from "./styles";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { cart } = useCart();
  const { user } = useContext(AuthContext);
  const cartSize = cart?.length;

  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <Logo src="/images/logo_transparent.png" alt="logo" />
        </Link>
        <Link href="/cart" passHref>
          <Cart>
            <div>
              <strong>{user?.nome}</strong>
            </div>
            <FaShoppingCart size={28} color="#05B6D4" />
            <span>{cartSize > 0 ? `${cartSize}` : `0`}</span>
          </Cart>
        </Link>
      </Content>
    </Container>
  );
}
