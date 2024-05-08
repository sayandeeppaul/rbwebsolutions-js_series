// console.log("line1");

// setTimeout(() => {
//   console.log("line2");
// }, 5000);

// console.log("line3");

const products = ["python", "java", "SQL"];

// create a product/order ID
api.createProductID();

// once we have the orderID then we can go with payment
api.paymentToProceed(orderID);

// update wallet details
api.updateWallet(paymentInfo);

// callback hell
api.createProductID(products, function (orderID) {
  api.paymentToProceed(orderID, function (paymentInfo) {
    api.updateWallet(paymentInfo);
  });
});

// inversion of control
