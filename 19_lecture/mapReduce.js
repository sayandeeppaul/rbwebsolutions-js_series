// ====================== map ========================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = nums.map((num)=>{
//     return num * 10
// })

// const result = nums.map((num)=> (num * 10))

// function chaining
const result = nums
  .map((prevNum) => prevNum * 10)
  .map((currNum) => {
    //  console.log(currNum)
    //  let value=  currNum + 5;
    //  console.log(currNum)
    //  return value;
    return currNum + 5;
  })
  .map((item) => {
    // console.log(item)
    let value = item - 1;
    return value;
  })
  .filter((item) => item > 24 && item < 64);

// console.log(result);

// ========================== reduce ======================

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 3;
const sumWithInitial = array1
                .reduce((accumulator, currentValue) => 
                {
                    // console.log(`acc -> ${accumulator} & curr -> ${currentValue}`);
                    return accumulator + currentValue 
                },0
                );

// console.log(sumWithInitial);
// Expected output: 10


const courses = [
    {
      courseName: "Fullstack WebD ",
      coursePrice: 30000 ,
      publiseDate: "2010 ",
      type: "programming",
    },
    {
      courseName: "AI/ML ",
      coursePrice: 1000 ,
      publiseDate: "2020 ",
      type: "programming",
    },
    {
      courseName: " Blockchain Development",
      coursePrice: 5000,
      publiseDate: " 2015",
      type: "programming",
    },
    {
      courseName: " Python Fundamentals",
      coursePrice: 1000 ,
      publiseDate: "2000 ",
      type: "programming",
    },
  ];

const totalCost = courses.reduce((accumulator,item)=>
                                                    {return accumulator +item.coursePrice}
                                                                                        ,0)

console.log(totalCost)