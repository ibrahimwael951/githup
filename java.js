let color = document.getElementById('color')
let height = document.getElementById('height')
let width = document.getElementById('width')
let radius = document.getElementById('radius')
let box = document.getElementById('box')
let h1 = document.getElementById('h1-box')
let h1type = document.getElementById('h1type')









h1type.addEventListener("input", () => {
h1.innerHTML = h1type.value; 
    
    
    })



color.addEventListener("input", () => {
box.style.background = color.value; 

if(box.style.background == 'black'){
    h1.style.color = 'white'
 }else{
    h1.style.color = 'black'
 }

})


 


{width.addEventListener("input", () => {
    

    if(width.value <= 300){
        box.style.width = width.value  + 'px'; 

    }else if(width.value >= 300){
        width.value=300 
        box.style.width= 300+ 'px'
    }
}) }



{height.addEventListener("input", () => {
    

    if(height.value <= 300){
        box.style.height = height.value  + 'px'; 

    }else if(height.value >= 300){

        box.style.height= 300+ 'px'
        height.value=300 
    }
}) }




 
{radius.addEventListener("input", () => {
    if(radius.value <= 100){
        box.style.borderRadius = radius.value  + 'px'; 

    }else if(radius.value >= 100){

        box.style.borderRadius= 100+ '%'
        radius.value=100 
    }
}) }


