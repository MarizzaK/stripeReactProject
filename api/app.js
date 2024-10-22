import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/testRoute", testRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
