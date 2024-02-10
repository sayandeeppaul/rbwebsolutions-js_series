// JSON -> Javascript object notation 

// const course = {
//     courseName :"MERN Stack",
//     courseProce:  10000,
//     courseInstructorFirstName : "Sayandeep"
// }

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

// console.log(user.location.city.cityName)
// console.log(course.courseInstructor)

// Destructure

// const {courseInstructorFirstName : firstName} = course
// console.log(firstName)

// const {cityName} = user.location.city
// console.log(cityName)

// let obj = {
//     num1: 2,
//     num2: 3
// }

// let num1 = 5
// let num2 = 7
// function addTwo(n1,n2) {
//     console.log(n1+n2)
// }

// addTwo(num1,num2)

// function add({ num1: n1, num2: n2 }) {
//     console.log(n1 + n2)
// }

// function add({ num1, num2}) {
//     console.log(num1 + num2)
// }

// add(obj)

// const gitHub = {
//     "login": "sayandeeppaul",
//     "id": 104418784,
//     "node_id": "U_kgDOBjlN4A",
//     "avatar_url": "https://avatars.githubusercontent.com/u/104418784?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/sayandeeppaul",
//     "html_url": "https://github.com/sayandeeppaul",
//     "followers_url": "https://api.github.com/users/sayandeeppaul/followers",
//     "following_url": "https://api.github.com/users/sayandeeppaul/following{/other_user}",
//     "gists_url": "https://api.github.com/users/sayandeeppaul/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/sayandeeppaul/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/sayandeeppaul/subscriptions",
//     "organizations_url": "https://api.github.com/users/sayandeeppaul/orgs",
//     "repos_url": "https://api.github.com/users/sayandeeppaul/repos",
//     "events_url": "https://api.github.com/users/sayandeeppaul/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/sayandeeppaul/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Sayandeep Paul",
//     "company": null,
//     "blog": "https://sayandeep-paul.netlify.app/",
//     "location": "Asansol, India",
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 8,
//     "public_gists": 0,
//     "followers": 2,
//     "following": 2,
//     "created_at": "2022-04-26T07:22:09Z",
//     "updated_at": "2023-10-27T06:01:54Z"
//   }

// function showURL({url :URL}) {
//     console.log(URL)
// }

// showURL(gitHub)

// {
//     "userName":"Saurav",
//     "age":16
// }

const obj = {"results":[{"gender":"male","name":{"title":"Mr","first":"Mehmet","last":"Korol"},"location":{"street":{"number":1670,"name":"Talak Göktepe Cd"},"city":"Mersin","state":"Erzincan","country":"Turkey","postcode":21740,"coordinates":{"latitude":"65.6946","longitude":"-58.5149"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"mehmet.korol@example.com","login":{"uuid":"a8424642-8485-439a-b9ea-3dcc97a1a3c4","username":"tinyostrich315","password":"morton","salt":"FqGuoKOS","md5":"752a5dde6776235195a168f22116be42","sha1":"ffdaffae1eddd4ccc6b40aea746c170987ddf8fe","sha256":"d5ed21657611ae64e35f72f9eaf8d21bf9f457fac96bbd771ee337cb0f5d8ced"},"dob":{"date":"1991-08-07T00:01:24.844Z","age":32},"registered":{"date":"2017-07-05T12:27:13.986Z","age":6},"phone":"(646)-161-7227","cell":"(842)-486-1966","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"TR"}],"info":{"seed":"e29d4597ff4d0d19","results":1,"page":1,"version":"1.4"}}

// console.log(obj.results.login.salt)     // hafizur
console.log(obj.results[0].login.salt)