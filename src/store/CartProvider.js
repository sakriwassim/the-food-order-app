import CartContext from "./cart-context";

const CartProvider = props => {
 return <CartProvider>
  {props.children}
 </CartProvider>
}

export default CartProvider;