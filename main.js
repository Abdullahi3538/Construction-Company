const Hear=document.getElementById("Hear")
const Hear1=document.getElementById("Hear1")
const Hear2=document.getElementById("Hear2")
const Hear3=document.getElementById("Hear3")

Hear.addEventListener("click",()=>{
    Hear.style.color="red"
    Hear.style.font="bold"
})
Hear1.addEventListener("click",()=>{
    Hear1.style.color="red"
    Hear1.style.font="bold"
})
Hear2.addEventListener("click",()=>{
    Hear2.style.color="red"
    Hear2.style.font="bold"
})
Hear3.addEventListener("click",()=>{
    Hear3.style.color="red"
    Hear3.style.font="bold"
})

// form

const Name=document.getElementById("Name")
const last=document.getElementById("Last")
const Email=document.getElementById("Email")
const span1=document.getElementById("span1")
const span2=document.getElementById("span2")
const span3=document.getElementById("span3")
const Summit=document.getElementById("Summit")

span1.style.display="none"
span2.style.display="none"
span3.style.display="none"

Summit.addEventListener("click",(event)=>{
    event.preventDefault()
    if(Name.value=="" || last.value=="" || Email.value==""){
        span1.style.display="flex"
        span2.style.display="flex"
       span3.style.display="flex"
       
    }
})


// menu


const btnM=document.getElementById("btnM")
const btnX=document.getElementById("btnX")
const ul=document.getElementById("ul")

btnM.addEventListener("click",()=>{
    ul.style.display="flex"
    btnM.style.display="none"
    btnX.style.display="flex"   

})

btnX.addEventListener("click",()=>{
    ul.style.display="none"
    btnM.style.display="flex"
    btnX.style.display="none" 
})





