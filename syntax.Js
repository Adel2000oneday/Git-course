let menuList =document.querySelector("nav")
let menu =document.querySelector(".menu-list")
//let menuPage =document.querySelectorAll("#menu-list li a")
let ulArray = Array.from(document.querySelectorAll("#menu-list li a"))
// console.log(menuList)
menu.addEventListener("click",function(){
    menuList.classList.toggle("active")
})
// // remove all active classes from list
function removeClass(){
    ulArray.forEach(function(list){
        list.classList.remove("active")
    })
}
ulArray.onclick=listButton
function listButton(){
    listButton.classList.add("active")
}
function theChecker(){
    removeClass()
}

theChecker()