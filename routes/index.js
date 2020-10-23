const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/mock/payment/chkMerchantTxnStatus', function (req, res) {
  if(req.headers.authorization==="GvGja9e4IwEfWjcAQ6zAL0alqzadaad17WrojzAdzx4=") {
    let merchantKey = req.query.merchantKey;
    let merchantTransactionIds = req.query.merchantTransactionIds;

    if (merchantKey === undefined || merchantTransactionIds === undefined) {
      res.status(400)
      res.json();
    } else if (merchantTransactionIds.length !== 50) {
      res.json({
        "status": -1,
        "message": "merchantTxnId list is empty or more than 100",
        "result": null,
        "errorCode": null,
        "responseCode": null
      });
    } else {
      res.json({
        "status": 0,
        "message": "All txnIds are valid",
        "result": [
          {
            "merchantTransactionId": merchantTransactionIds,
            "paymentId": 250258666,
            "status": "Money with Payumoney",
            "amount": 60.0
          }
        ],
        "errorCode": null,
        "responseCode": null
      });
    }
  }
  else{
    res.status(401);
    res.render("index")
  }
});

module.exports = router;
