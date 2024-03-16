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