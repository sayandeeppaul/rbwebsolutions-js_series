// const products = ["Python","Javascript","AI/ML","Dart"]

// createCourseOder(products,function (orderId) {
//     proceedtoPayment(orderId)
// })

// const promise = createCourseOder(products)

// // {data : response}

// promise.then(function (orderId) {
//     proceedtoPayment(orderId)
// })


const GITHUB_API = "https://api.github.com/users/tirtha251280"

const tirthaData = fetch(GITHUB_API)

console.log(tirthaData)
