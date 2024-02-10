// const swiggyUser = {
// }

// let userDetails={
//     name:"Sayandeep",
//     name:"Anirban"
// }

// console.log(userDetails.name)

// const swiggyUser = new Object()
// swiggyUser.id = "1234abc"
// swiggyUser.userName = "Sayandeep"
// swiggyUser.isLoggedin = true
// console.log(swiggyUser)

// const user = {
//     name: "Sayandeep",
//     location: {
//         stateName: "WB",
//         city: {
//             cityName: "Kolkata",
//             laneName: "Chauranghee rode"
//         }
//     },
//     age: 80,
//     isLoggedIn: true,
//     lastLogin: ["Monday", "Tuesday"]
// }


// console.log(user.location.city.laneName)

//ternary operator ?->true :->false
// console.log(user.Age ? user.location.city.cityName : "No City Here")

// const obj1 = {
//     name: "Sayandeep",
//     age: 35
// }
// const obj2 = {
//     fullName: "Nabab Ali",
//     dob:"11-sep-2203"
// }

// const obj3 = {obj1,obj2}
// obj3 ={ name: "Nabab",age: 20}

// const obj3 = Object.assign(obj2, obj1)
// console.log(obj3)


// const obj4 = {
//     name: "Sayandeep",
//     age: 35
// }
// const obj5 = {
//     property: "Nabab Ali",
//     age:20
// }

// const obj6 = {...obj4,...obj5}
// console.log(obj6)

// let temparature = {
//     "temp": 298.48,         //0
//     "feels_like": 298.74,   //1
//     "temp_min": 297.56,     //2
//     "temp_max": 300.05,     //3
//     "pressure": 1015,       //4
//     "humidity": 64,         //5
//     "sea_level": 1015,      //6
//     "grnd_level": 933,      //7
// }

// console.log(temparature.hasOwnProperty("temp_min1"))

// console.log(temparature["pressure"])

// console.log(Object.keys(temparature))

// const tempArray = Object.keys(temparature)
// console.log(tempArray)
// console.log(tempArray[4])

// const tempArray = Object.values(temparature)
// console.log(tempArray)
// console.log(tempArray[4])

// const tempArray = Object.entries(temparature)
// console.log(tempArray)
// console.log(tempArray[4][4])    //sanchari,bikash  undefined   wrong
// console.log(tempArray[4][1])    //hafizur  1015 right
// console.log(tempArray[4][0])    //nabab,saurav,imon  pressure

// console.log(tempArray[pressure])
