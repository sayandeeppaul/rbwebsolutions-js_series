// ======================= for loop =======================

// we want to print 1 to 10
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")

// for (var index = 0; index <= 10; index++) {
//     console.log(index)
// }

// console.log(index)

// for(let i = 1 ; i<=5 ; i++)
// {
//     console.log(`Table of ${i} ---->`)
//     for(let j = 1 ; j<=10 ; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// **************** break statement *****************

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) break;
//   console.log(index);
// }

// ************** continue statement ****************

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) continue;
//   console.log(index);
// }

// ****************** while loop *****************

// let num = 1

// while(num<=10){
//     console.log(num)
//     num++
// }

// ****************** do while loop *****************

// let num = 10

// do {
//     console.log(num)
// } while (num<5);

// Q1.  Print the ODD numbers from 7 to 31

// let lowerRange = 7;
// let higherRange = 31;

// for (let i = lowerRange; i <= higherRange; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// Q2.
// *
// **
// ***
// ****

// for (let i = 0; i < 4; i++) {
//     for(let j = 0 ; j< i+1 ;j ++){
//         let star = "* "
//         console.log(star.repeat(j))
//     }
// }

// Q3. find the power of a number

// let base = 5;
// let expo = 4;

// let result = 1;
// for (let i = 0; i < expo; i++) {
//   result = base * result;
//   console.log(result)
// }

// Q4. Find the reverse of a number

// let num = 12345
// let reverseNumber
// while (num>=0) {
//     let rem = num%10
//     reverseNumber = reverseNumber * 10 + rem
//     num = num/ 10
// }

// ======================== for of loop ===================

//                  0           1       2               3
// let myHeros = ["spiderman", "batman", "hulk", "captain amaerica"];

// for (const hero of myHeros) {
//   console.log(hero);
// }

// const myGames = {
//     game1:"NFS",
//     game2:"spider man 4",
//     game3:"asphalt 8"
// }

// ************ We can not use for of loop for objects ****************

// for (const game of myGames) {
//     console.log(game)
// }

// ================================ for in loop =========================

// const myGames = {
//   game1: "NFS",
//   game2: "spider man 4",
//   game3: "asphalt 8",
//   game4: {
//     game5: "Mario",
//     game6: {
//       game7: {
//         game8: "Getting over it",
//       },
//     },
//   },
// };

// for (const key in myGames) {
//   // console.log(typeof myGames[key])
//   if (typeof myGames[key] === "object") {
//     for (const subKey in myGames[key]) {
//       //   console.log(subKey);
//       if (typeof myGames[key][subKey] === "object") {
//         for (const superKey in myGames[key][subKey]) {
//           //    console.log(superKey)
//           if (typeof myGames[key][subKey][superKey] === "object") {
//             for (const supremeKey in myGames[key][subKey][superKey]) {
//               console.log(myGames[key][subKey][superKey][supremeKey]);
//             }
//           }
//         }
//       }
//     }
//   }
// }

// Iterate through each property of myGames
// for (const key in myGames) {
//     // console.log(typeof myGames[key])
//     if (typeof myGames[key] === 'object') {
//         for (const nestedKey in myGames[key]) {
//             // console.log(nestedKey)
//             console.log(myGames[key][nestedKey]);
//         }
//     }
// }

// for (const key in myGames) {
//     console.log(key)
//     console.log(myGames[key])
//     console.log(myGames.key)    // not correct way to fetch data
// }

// ======================= for each loop ===================

//                  0     1      2        3           4
// const languages = ["C", "C++", "Java", "Python", "Javascript"];

// languages.forEach(
//   (item,index,array)=>{
//       console.log(item,index,array)
//   }
// //   function (language) {
// //     console.log(language);
// //   }
// );

// output --->
// C 0 [ 'C', 'C++', 'Java', 'Python', 'Javascript' ]
// C++ 1 [ 'C', 'C++', 'Java', 'Python', 'Javascript' ]
// Java 2 [ 'C', 'C++', 'Java', 'Python', 'Javascript' ]
// Python 3 [ 'C', 'C++', 'Java', 'Python', 'Javascript' ]
// Javascript 4 [ 'C', 'C++', 'Java', 'Python', 'Javascript' ]

const coding = [
  {
    languageName: "Javascript",
    extension: ".js",
    user: {
      downloads: "10M+",
    },
  },
  {
    languageName: "Python",
    extension: ".py",
    user: {
      downloads: "100M+",
    },
  },
  {
    languageName: "C Plus Plus",
    extension: ".cpp",
    user: {
      downloads: "5M+",
    },
  },
  {
    languageName: "Java",
    extension: ".java",
    user: {
      downloads: "1M+",
    },
  },
];

// const user ={
//     "username" :"Sayandeep"
// }

// console.log(user["username"])

coding.forEach((item, index, arr) => {
  // console.log(item["extension"])
  // console.log(item.user.downloads);
  // console.log(item, index, arr)
});

// coding.forEach((item) => {
//   // console.log(item)
//   for (const key in item) {
//     // console.log(key)
//     if (typeof item[key] === "object") {
//       // console.log(key)
//       for (const elem in item[key]) {
//         console.log(item[key][elem]);
//       }
//     }
//   }
// });

favMovies = [
  "Begin Again",
  "Soul",
  ["Matrix", "Matix Reloaded", "Matrix Revolutions"],
  [
    "Frozen",
    "Frozen 2",
    [
      "Tangled",
      "Alladin",
      "Matrix",
      "Matix Reloaded",
      "Matrix Revolutions",
      "Begin Again",
      "Soul",
    ],
  ],
];

favMovies.forEach((element) => {
  // console.log(element)
  if (Array.isArray(element)) {
    // console.log(element)

    // element.forEach((items)=>{
    //   console.log(items)
    // })

    element.forEach((item) => {
      if (Array.isArray(item)) {
        // console.log(item.length)
        // let min = 0
        // let max = item.length - 1
        // randomIndex1 = Math.round(Math.random()*(max-min))
        // randomIndex2 = Math.round(Math.random()*(max-min))

        // console.log(randomIndex1,randomIndex2)
        // console.log(item[randomIndex1]," ",item[randomIndex2])

        for (let index = 0; index < item.length; index++) {
          if (item[index]==="Matix Reloaded") {
            continue
          }
          console.log(item[index])

        }
        // const filteredItems = item.filter(
        //   (filterElem) =>
        //     filterElem !== "Matrix Revolutions" && filterElem !== "Soul"
        // );
        // console.log(filteredItems);

        // item.forEach((members)=>{
        //   console.log(members)
        // })

        // for (const members of item) {
        //   console.log(members)

        // }

        // console.log(item)
        // const len = item.length
        // console.log(len)
        // for (let index = 0; index < len; index++) {
        //   if (index===4) {
        //     // console.log(item[index])
        //   }
        // }
      }
    });
  }
});
