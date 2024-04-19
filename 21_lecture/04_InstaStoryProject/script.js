let instaArray = [
    {
        dp:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1578852612716-854e527abf2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1684189487524-108a0ab15b73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        story:"https://plus.unsplash.com/premium_photo-1677230986567-806de95c3d05?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let sty = ""
let stories =document.querySelector("#stories")

instaArray.forEach((elem,index)=>{
    // console.log(elem)
    sty = sty + `
    <div class="story" id="${index}">
    <img src="${elem.dp}">
    </div>
    `
})

// console.log(story)

stories.innerHTML = sty
 
stories.addEventListener("click",function (event) {
    console.log(instaArray[event.target.id].story)
    document.querySelector(".full-screen").style.display="block"
    document.querySelector(".full-screen").style.backgroundImage=`url(${instaArray[event.target.id].story})`


    setTimeout(() => {
        document.querySelector(".full-screen").style.display="none"
    }, 2000);
})