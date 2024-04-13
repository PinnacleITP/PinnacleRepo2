const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { resolve } = require('path');
const env = require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51P0Ggb02NNbm5WjcvAZ8IAsOgpidQiTfSeqewumWezdCAORzNCcfATJXnNGG0CIMHcqOcFsjigLKuKgMrJJHMNhW00vtdgHWvv');
const BankCardModel = require("./models/BankCards");
const PrimiumPlanModel = require("./models/PremiumPlan");
const CartModel = require("./models/Cart");
const MemberModel = require("./models/Member");
const LeaderBoardModel = require("./models/LeaderBoard");
const GameModel = require("./models/Game");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://pinnacleitp:pinnacle123@crud.vsshiuj.mongodb.net/?retryWrites=true&w=majority&appName=crud"
);

// mongoose.connect("mongodb://127.0.0.1:27017/pinnacle")

//create new bank card details
app.post("/createBankCard", (req, res) => {
  BankCardModel.create(req.body)
    .then((bankcard) => res.json(bankcard))
    .catch((err) => res.json(err));
});

//get all the bank card details
// app.get('/', (req, res) => {
//     BankCardModel.find({})
//     .then(bankcards => res.json(bankcards))
//     .catch(err => res.json(err))
// })

// get specific cards details related to the given memberid
app.get("/getBankCardByUserID/:id", (req, res) => {
  const id = req.params.id;
  BankCardModel.find({ memberID: id })
    .then((cards) => {
      if (cards.length > 0) {
        res.json(cards);
      } else {
        res.json({ message: "No cards found for memberID 1" });
      }
    })
    .catch((err) => res.json(err));
});

//update nickname
app.put("/updateNickName/:id", (req, res) => {
  const id = req.params.id;
  BankCardModel.findByIdAndUpdate(
    { _id: id },
    {
      CardName: req.body.cardName,
    }
  )
    .then((bankcards) => res.json(bankcards))
    .catch((err) => res.json(err));
});

//delete card details
app.delete("/deleteCardDeatils/:id", (req, res) => {
  const id = req.params.id;
  BankCardModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//create premium plan 
app.post("/createPremiumPlane", (req, res) => {
  PrimiumPlanModel.create(req.body)
    .then((premiumplan) => res.json(premiumplan))
    .catch((err) => res.json(err));
});

//get premium plan details using id
app.get("/getPlanById/:id", (req, res) => {
  const id = req.params.id;
  PrimiumPlanModel.findById(id)
    .then((premiumplan) => {
      if (premiumplan) {
        res.json(premiumplan);
      } else {
        res.status(404).json({ message: "No plan found for the given ID" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

// app.get('/getcartitems',(req,res) =>{
//     CartModel.find({})
//     .then(ItemDetails => res.json(ItemDetails))
//     .catch(err => res.json(err))
// })

//get cart details related to member
app.get("/getCartItemByMemberID/:id", (req, res) => {
  const id = req.params.id;
  CartModel.find({ memberID: id })
    .then((carts) => {
      if (carts.length > 0) {
        res.json(carts);
      }
    })
    .catch((err) => res.json(err));
});

//get cart item by id
app.get("/getCartItemById/:id", (req, res) => {
  const id = req.params.id;
  CartModel.findById(id)
    .then((cart) => {
      if (cart) {
        res.json(cart);
      } else {
        res.status(404).json({ message: "No item found for the given ID" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

//delete cart items
app.delete("/deleteItem/:id", (req, res) => {
  const id = req.params.id;
  CartModel.findByIdAndDelete({ _id: id })
    .then((ItemDetails) => res.json(ItemDetails))
    .catch((err) => res.json(err));
});


app.get("/:id", (req, res) => {
  const id = req.params.id;

  //get leaderboard details
  if (id === "LeaderBoard") {
    LeaderBoardModel.find({})
    .sort({ viewcount: -1 }) // Sorting by viewcount column in descending order
    .then((LeaderboardDetails) => res.json(LeaderboardDetails))
    .catch((err) => res.json(err));
  } 
  //get all the premium plan details
  else if (id === "premiumplan") {
      PrimiumPlanModel.find({})
        .then((premiumplan) => res.json(premiumplan))
        .catch((err) => res.json(err));
  }
  //get all the premium plan details
  else if (id === "game") {
    GameModel.find({})
      .then((game) => res.json(game))
      .catch((err) => res.json(err));
  }
});


//get member details using member id
app.get("/getMemberById/:id", (req, res) => {
  const id = req.params.id;
  MemberModel.findById(id)
    .then((Member) => {
      if (Member) {
        res.json(Member);
      } else {
        res.status(404).json({ message: "No plan found for the given ID" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

app.post('/api/payment', async (req, res) => {
  try {
    const { payment_method_id } = req.body;

    // Create a PaymentIntent on the server using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: payment_method_id,
      amount: 1000, // Amount in cents
      currency: 'usd',
      description: 'Example payment',
      confirm: true,
      return_url: 'http://localhost:3000/success', // Set your actual success URL here
    });

    // PaymentIntent was successful
    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});


// create new game
app.post("/createGame", (req, res) => {
  GameModel.create(req.body)
    .then((game) => res.json(game))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// get game details using id
app.get("/getGamebyID/:id", (req, res) => {
  const id = req.params.id;
  GameModel.findById(id)
    .then((game) => {
      if (game) {
        res.json(game);
      } else {
        res.status(404).json({ message: "No game found for the given ID" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});



app.listen(3001, () => {
  console.log("Server is Running");
});
