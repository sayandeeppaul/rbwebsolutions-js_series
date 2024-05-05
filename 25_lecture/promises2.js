const products = ["Python", "Javascript", "AI/ML", "Dart"];

// create
const promise = createCourseOrder(products);

promise
  .then((courseId) => {
    console.log(courseId);
    //   proceedToPayment(courseId);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createCourseOrder(products) {
  const myPromise = new Promise((resolve, reject) => {
    // order create
    // validation
    if (!validateProduct(products)) {
      const error = new Error("Product is not validated");
      reject(error);
    }
    // generate orderId
    const orderId = "python12345";
    if (orderId) {
      setTimeout(() => {
        // return
        resolve(orderId);
      }, 5000);
    }
  });
  return myPromise;
}

function validateProduct(products) {
  return true;
}

// ************************************* promise chaining ***********************************************

// createCourseOder(products)
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .catch((error) => {
//     console.log("Error while payment");
//   })
//   .then((paymentInfo) => {
//     return sendMailToUser(paymentInfo);
//   })
//   .catch((error) => {
//     console.log("Error while sending the mail");
//   })
//   .then((paymentCourseId) => {
//     pushCourseidToUser(paymentCourseId);
//   })
//   .catch((error) => {
//     console.log("Error while updating the course in user object");
//   });
