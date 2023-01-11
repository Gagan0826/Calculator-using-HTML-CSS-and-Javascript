let s=""
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((ele)=>{
ele.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="=")
    {
        s=eval(s)
        document.querySelector("input").value=s
        
    }
    
    else if(e.target.innerHTML=="C")
    {   s=''
        document.querySelector("input").value=s
    }
    else if(e.target.innerHTML=="+/-")
    {   s=s.slice(0,(s.length)-1)
        document.querySelector("input").value=s
    }
    else if(e.target.innerHTML=="%")
    {   
        s=s/100
        document.querySelector("input").value=s
    }
    else if(e.target.innerHTML=="sqrt")
    {   
        s=eval(Math.sqrt(eval(s)))
        document.querySelector("input").value=s
    }
    else{
        console.log(e.target,e.value)
        s=s+e.target.innerHTML;
        document.querySelector("input").value=s
    }

})
})
