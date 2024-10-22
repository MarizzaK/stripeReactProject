import { useCart } from "../../context/CartContext";
import "./cartPage.scss";

function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity } = useCart();

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(0);
  };

  const checkout = async () => {
    console.log(
      "Request body for checkout:",
      JSON.stringify({ items: cartItems })
    );

    try {
      const response = await fetch("http://localhost:8800/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Checkout session created:", data);
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Error during checkout:", data.error);
        alert(`Checkout error: ${data.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("Network error during checkout:", error);
      alert("There was a network error. Please try again.");
    }
  };

  return (
    <div className="cartPage">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.img} alt={item.title} className="cartItemImg" />
              <div className="cartItemDetails">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>Price: {item.price}:-</p>
                <p>Quantity: {item.quantity}</p>
                <div className="buttons">
                  <button
                    className="desc"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="asc"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="totalPrice">
            <h3>Total Price: {calculateTotalPrice()}:-</h3>
          </div>
          <button className="purchaseButton" onClick={checkout}>
            Purchase items!
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
