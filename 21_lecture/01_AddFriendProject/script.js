let rmvBtn = document.querySelector(".remove-btn");
let addBtn = document.querySelector(".add-btn")
let isStatus = document.querySelector(".type")
// 0 -> not friend 1 -> friend

let check = 0
// let check = 1

// rmvBtn.addEventListener("click",()=>{
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"

// })

addBtn.addEventListener("click",()=>{
    if(check===0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        addBtn.innerHTML = "Remove"
        check = 1
    }else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        addBtn.innerHTML = "Add"
        check = 0
    }
})