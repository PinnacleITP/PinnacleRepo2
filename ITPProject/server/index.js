const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BankCardModel = require("./models/BankCards");
const PrimiumPlanModel = require("./models/PremiumPlan");
const CartModel = require("./models/Cart");
const MemberModel = require("./models/Member");
const LeaderBoardModel = require("./models/LeaderBoard");

const app = express();
app.use(cors());
app.use(express.json());

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
    .then((cards) => {
      if (cards.length > 0) {
        res.json(cards);
      }
    })
    .catch((err) => res.json(err));
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

app.listen(3001, () => {
  console.log("Server is Running");
});
