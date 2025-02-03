import { useSelector } from "react-redux";
import CartProducts from "../components/CartProducts";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const {cartItems} = useSelector((state) => state.cart);

  return (
    <div className="max-w-6xl mx-auto p-4 md:pt-24 pt-20">
      {/* Cart Heading */}
      <h2 className="text-2xl font-bold mb-6">Cart Products</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartProducts key={item.id} item={item} />
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="md:w-fit w-82 bg-white border border-gray-300 shadow-md rounded-lg p-4 h-fit">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
