var sidenav = document.getElementById("sidenav")
var menuline = document.getElementById("menuline")
var closenav = document.getElementById("closenav")


menuline.addEventListener("click",function()
{
    sidenav.style.right=0
}
)

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})




var plants = document.getElementById("plants")
var search = document.getElementById("search")
var plantlist = plants.querySelectorAll("div")

search.addEventListener("keyup",function(){

var enteredvalue = event.target.value.touppercase()

for(count=0; count<plantlist.length; count=count+1)

{
    var plantsname=plantlist[count].querySelector("h3").textContent

    if(plantsname.toUpperCase().indexof(enteredvalue)<0)
    {
         plantlist[count].style.display="none"
    }
    else{
        plantlist[count].style.display="block"
    }
}
})
