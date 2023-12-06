/* console.log($)

let h1 = document.querySelector('h1')
h1.style.color='red' */

/* $('h1').css({
    color:"red",
    border: '2px solid black'
}) */

/* console.log($('h1').text); */

/* let inp = document.querySelector('input') 
*/


/* console.log($('input').attr('type')); */
/* $('li').first().css('color','red') */

/* $('button').click(function(){
    console.log('hello')
}) */



/* API */

/* use 1 there is no use now  old*/

/* let req = new XMLHttpRequest()
req.open('GET','https://dummyjson.com/products/1')
req.send()

req.onload=function(data){
    console.log(data)
}

req.onerror=function(err){
    console.log(err)
} */

/* 2nd use  */
/* fetch('https://dummyjson.com/products/1').then((res)=>{
 console.log(res); 
return res.json()
}).then((data)=>{
  console.log(data);
})

.catch((err)=>{
    console.log(err);
}) */

/* practice */
let a=document.querySelector('#div')
fetch('https://dummyjson.com/products').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    xyz(data.products)
    
})
function xyz(result){
    for (let i of result) {
        let img=document.createElement('img')
        img.setAttribute('src',i.images[0])
        img.style.width='100px'
        let li = document.createElement('li')
        let li2= document.createElement('li')
        img.innerText=i.jpg
        li2.innerText=i.title
        li.innerText=i.id
        a.append(img)
        a.append(li)
        a.append(li2)
        
      }
      console.log(result,'rrrrr');
    }