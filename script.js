const  inputDiv=document.querySelector('.input');
const hmtlBody=document.getElementById('body')
const  playDiv=document.querySelector('.blacksrceen');
function on(){
  inputDiv.style.borderColor=' #f08804 ';
//   inputDiv.style.borderRadius='8px ';
   playDiv.classList.add('play');
   hmtlBody.classList.add('overflow');
 
   
}
document.querySelector('main').addEventListener('click',function(){
  playDiv.classList.remove('play');
    hmtlBody.classList.remove('overflow');
  inputDiv.style.borderColor='black';

})
// sec-1 image infinity sildeing js
   let imgBox=document.querySelector('.image-box');
   const slides=document.querySelectorAll('.slide')

   let cS=0;
   let slideCount=slides.length ;
  //  slides.addEventListener('focus',()=>{
  //   let div=document.querySelectorAll('.slide-btn');
  //    div.style.display='inline'
  //  })

 function moveSlide(index){
 imgBox.style.transform=`translateX(-${index*100}%)`;
 }  

function nextSlide(){
     console.log('function on next');
      cS=(cS+1)%slideCount;
      moveSlide(cS);
}
 setInterval(nextSlide,5000) 
//main -slide prodect

// const rBtn=document.querySelector('.r-btn');
// const lBtn=document.querySelector('.l-btn');
// const ulDiv=document.querySelector('.ulBox');

// rBtn.addEventListener('click',(event)=>{
//   console.log('its on')
//   ulDiv.scrollLeft+=600;
//   event.preventDefault();
// })
// lBtn.addEventListener('click',(event)=>{
//   console.log('its on')
//   ulDiv.scrollLeft-=600;
//   event.preventDefault();
// })
 document.querySelector('.r-btn').addEventListener('click',()=>{
   document.querySelector('.ulBox').scrollLeft+=600;
 })
 document.querySelector('.l-btn').addEventListener('click',()=>{
   document.querySelector('.ulBox').scrollLeft-=600;
 })

// secound product slider
const rBtn1=document.querySelector('.r-btn-1');
const lBtn2=document.querySelector('.l-btn-1')
const ulDiv1=document.querySelector('.slideing-ul');
rBtn1.addEventListener('click',(event)=>{
  console.log('its on')
  ulDiv1.scrollLeft +=600;
  event.preventDefault();
})
lBtn2.addEventListener('click',(event)=>{
  console.log('its on')
  ulDiv1.scrollLeft -=600;
  event.preventDefault();
})

// view product click dom in section-3
 
const sec3=document.querySelector('.sec-3');
const ParentDiv=sec3.querySelector('.pro_display1');
// const shcopDiv=sec3.querySelector('.shcop');
const shcopDiv=document.getElementById('shcop');//.src='images/brand.png';
const paraChild=ParentDiv.querySelector('p');
const headingChild=ParentDiv.querySelector('.off-price');
const mrpChild=ParentDiv.querySelector('.mrp-price');
const pdt1=sec3.querySelector('.r1a');
const pdt2=sec3.querySelector('.r1b');
const pdt3=sec3.querySelector('.r1c');
const pdt4=sec3.querySelector('.r1d');

pdt1.addEventListener('click',()=>{
       shcopDiv.src='https://m.media-amazon.com/images/I/71657TiFeHL._AC_SY175_.jpg';
       paraChild.innerText='Apple iPhone 15 (128 GB) - Black';
       headingChild.innerText='₹ 58999';
       mrpChild.innerHTML=`M.R.P &#8377 79 900`;
      //  pdt1.classList.toggle('stying')

})

pdt2.addEventListener('click',()=>{
       shcopDiv.src='https://m.media-amazon.com/images/I/71Nwtop9jtL._AC_SY175_.jpg';
       paraChild.innerText='Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)';
       headingChild.innerText='₹ 94,990';
       mrpChild.innerHTML=`M.R.P &#8377 134999`})

pdt3.addEventListener('click',()=>{
       shcopDiv.src='https://m.media-amazon.com/images/I/718HzJbvY1L._AC_SY175_.jpg';
       paraChild.innerText='Redmi A4 5G (Starry Black, 4GB RAM, 64GB Storage) | Global Debut SD 4s Gen 2 | Segm…';
       headingChild.innerText='₹ 7999';
       mrpChild.innerHTML=`M.R.P &#8377 10999`;
})

pdt4.addEventListener('click',()=>{
       shcopDiv.src='https://m.media-amazon.com/images/I/71oZ2oEeD4L._AC_SY175_.jpg';
       paraChild.innerText='Samsung Galaxy A55 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) | Metal Frame | 5…';
       headingChild.innerText='₹ 26999';
       mrpChild.innerHTML=`M.R.P &#8377 42999`;
        
})

// theard product slider

const rBtn3=document.querySelector('.r-btn-2');
const lBtn3=document.querySelector('.l-btn-2')
const ulDiv2=document.querySelector('.slideing-ul1');
rBtn3.addEventListener('click',(event)=>{
  console.log('its on')
  console.log(ulDiv2)
  ulDiv2.scrollLeft +=640;
  event.preventDefault();
 })
lBtn3.addEventListener('click',(event)=>{
  console.log('its on')
  console.log(ulDiv2)
  ulDiv2.scrollLeft -=640;

})

// naviction menu 

document.querySelector('.flex-menu').addEventListener('click',()=>{
  document.querySelector('aside').style.left='1px';
   hmtlBody.classList.add('overflow');
   playDiv.classList.add('play');
  
})
document.getElementById('menu-x').addEventListener('click',()=>{
  document.querySelector('aside').style.left='-1450px';
   playDiv.classList.remove('play');
   hmtlBody.classList.remove('overflow');
})

// scrolling beighver

document.querySelector('.nav-top').addEventListener('click',()=>{
   

document.querySelector('.a').addEventListener('click',()=>{
  window.scrollTo({
   top:0,
   behavior:"smooth"
  })
})
})

