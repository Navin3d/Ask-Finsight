import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

let totalTransactions = 0;
let currentUser = "Not registered please register Your account.";
let transactions = `John bought a loaf of bread from the bakery for $2.50, a gallon of milk from the grocery store for $3.00, a book from the bookstore for $12.99, a new shirt from the clothing store for $25.00, and a cup of coffee from the café for $4.00. and your no of transactions through me is ${totalTransactions}`;

app.get("/register/:uname", (req, res) => {
    const { uname } = req.params;
    currentUser = uname;
    // res.status(200).json({
    //     data: transactions
    // });
    res.status(200).json({
        data: `Hi ${uname} your transactions are ` + transactions
    });
});

app.post("/pay", (req, res) => {
    const { amount, benefeciary } = req.data;
    const currentStatement = `Amount ${amount} sent from your Natwest account to ${benefeciary}`;
    totalTransactions += 1;
    transactions += currentStatement;
    res.status(200).json({
        data: currentStatement
    });
});

app.get("/transactions", (req, res) => {
    res.status(200).json({
        data: transactions
    });
});

app.post("/", (req, res) => {
    const data = req.data;
    console.log(data);
    res.status(200).json({
        data: "OK hnhnjn"
    });
});

app.listen(80, () => console.log("Started..."));
