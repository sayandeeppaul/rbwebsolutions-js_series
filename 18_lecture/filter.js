// ================== filter =================

// const languages = ["C", "C++", "Java", "Python", "Javascript"];

// const langs = languages.forEach(
//   (item)=>{
//       console.log(item)
//   }
// );

// console.log(langs)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// implicit return
// const updatedNums = nums.filter((num)=>num>5)

// explicit return
// const updatedNums = nums.filter((num) => {
//   return num > 5;
// });
// console.log(updatedNums);

// using for each loop

// let newNums =[]
// nums.forEach((num)=>{
//     if (num>5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const courses = [
  {
    courseName: "Fullstack WebD ",
    coursePrice: "30000 ",
    publiseDate: "2010 ",
    type: "programming",
  },
  {
    courseName: "AI/ML ",
    coursePrice: "1000 ",
    publiseDate: "2020 ",
    type: "programming",
  },
  {
    courseName: " Blockchain Development",
    coursePrice: "5000",
    publiseDate: " 2015",
    type: "programming",
  },
  {
    courseName: " Python Fundamentals",
    coursePrice: "1000 ",
    publiseDate: "2000 ",
    type: "programming",
  },
  {
    courseName: " MS Excel",
    coursePrice: "15000 ",
    publiseDate: "2006 ",
    type: "Banking",
  },
  {
    courseName: "Finance Expert",
    coursePrice: "18000 ",
    publiseDate: "2002 ",
    type: "Banking",
  },
  {
    courseName: " Digital Marketing ",
    coursePrice: " 16000 ",
    publiseDate: " 2023 ",
    type: "marketing",
  },
];

// const programmingCourses = courses.filter((course)=>(course.type==="programming"))

// console.log(programmingCourses.length)

// const highPriceCourses = courses.filter((course)=>{return course.coursePrice>=10000})
// console.log(highPriceCourses)

// const highPriceProgrammingCourses = courses.filter((course)=>(course.type ==="programming" && course.coursePrice>=20000))

// console.log(highPriceProgrammingCourses)

// const newCourses = courses.filter((course)=>(course.coursePrice>10000 && (course.type==="programming" || course.type==="Banking")))

// console.log(newCourses)



function findDifference(json1, json2) {
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    const commonKeys = keys1.filter(key => keys2.includes(key));
    
    const differences = commonKeys.filter(key => obj1[key] !== obj2[key]);
    
    differences.sort();
    
    return differences;
}
