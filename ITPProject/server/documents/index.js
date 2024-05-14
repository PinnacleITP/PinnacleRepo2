module.exports = ({ name, email, description, officialpice, crystal, discount, pid, date, subtotal }) => {
    const today = new Date();
return `
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 90px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',
        }

        .logod {
            display: flex;
            justify-items: center;
        }

        .logoh {
            display: inline;
            margin-right: 20px;
        }

        .name {
            font-size: 32px;
            font-weight: 600;
        }

        .subtitle {
            font-size: 17px;
            font-weight: normal;
        }

        .date {
            float: right;
        }

        .invicetitle {
         font-size: 30px;
            text-align: center;
            text-decoration: underline;
        }

        .imagediv {
            margin: 0 auto;
            display: flex;
            justify-items: center;
        }

        .simage {
            margin-top: 35px;
            
        }

        .successtitle {
            font-size: 32px;
            color: green;
            font-weight: bold;
            text-align: center;
        }

        .st {
            margin-top: 30px;
            color: rgb(11, 196, 11);
            font-size: 22px;
            font-weight: 700;
        }

        .am {
            font-size: 18px;
            font-weight: 700;
            color: rgb(11, 196, 11);
        }

        .des {
            font-size: 16px;
            font-weight: 700;
        }

        .val {
            float: right;
            color: #494646;
        }
    </style>
</head>

<body>
    <div class="invoice-box">
        <div class="logod">
            <img class="logoh" width="50px" height="50px" width="150px" height="150px"
                scr="https://res.cloudinary.com/dg8cpnx1m/image/upload/v1713894657/Games/cjkembjpn4tijij7hbhi.jpg " />
            <span class="name">PINNACLE<br /><span class="subtitle">Pinnacle gaming pvt(ltd).</span></span>

        </div>
        <p class="date">Date: ${` ${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}</p>
        <br />
        <br />
        <h1 class="invicetitle">INVOICE</h1><br/>

        <h1 class="successtitle">Payment Successfull!</h1>
        <br/>
        <span class="st">Pay from</span><br />
        <span class="des">Name</span><span class="val">${name}</span><br />
        <span class="des">Email</span><span class="val">${email}</span><br />
        <span class="des">Currency</span><span class="val">USD</span><br /><br/>

        <span class="st">Description</span><br />
        <span class="des">${description}</span><span class="val">USD ${officialpice}.00</span><br />

        <br />
        <span class="st">Amount</span><span class="val" style="font-weight: 700;">USD ${officialpice}.00</span><br /><br />

        <span class="st">Discount</span><br />
        <span class="des">Seasonal Discount</span><span class="val">USD ${discount}.00</span><br />
        <span class="des">Crystal Discount</span><span class="val">USD ${crystal}.00</span><br />

        <br />
        <span class="st">Total debit amount</span><span class="val" style="font-weight: 700;">USD ${subtotal}.00</span><br />

        <br />
        <span class="st">Date & Time</span><span class="val" style="font-weight: 700;">${date}</span><br />

        <br />
        <span class="st">Transaction No</span><span class="val" style="font-weight: 700;">${pid}</span><br />

        <br />
        <br />
        <p style="font-size: 17px; text-align: center;">Thank you for your Purchace</p>
        <hr />
        <div class="logod" style="margin-top: 20px;">
            <img class="logoh" width="50px" height="50px" width="150px" height="150px"
                scr="https://res.cloudinary.com/dg8cpnx1m/image/upload/v1713894657/Games/cjkembjpn4tijij7hbhi.jpg " />
            <span class="name">PINNACLE<br /><span class="subtitle">Pinnacle gaming pvt(ltd).</span></span>

        </div>
        <p style="font-size: 15px; color: #494646; text-align: center;">Copyright @ 2024 Pinnalce. - All rights reserved</p>


    </div>
</body>

</html>
    `;
};