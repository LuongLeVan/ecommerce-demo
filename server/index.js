const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["eddie"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://ecommerce-demo-bice-delta.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("https://ecommerce-demo-bice-delta.vercel.app", () => {
  console.log("Server is running!");
});