// 

const containerEl=document.getElementById('box');
const rightEl=document.querySelector('.right');
const leftEl=document.querySelector('.left');
const btnElR=document.querySelector('.r-btn')
const btnElL=document.querySelector('.l-btn')


btnElL.addEventListener('click',()=>{
     containerEl.classList.toggle('active-left')
     
})

btnElR.addEventListener('click',()=>{
     containerEl.classList.toggle('active-right')
})

// rightEl.addEventListener('mouseenter',()=>{   
//   containerEl.classList.add('active-right')
// })

// rightEl.addEventListener('mouseleave',()=>{   
//   containerEl.classList.remove('active-right')
// })

// leftEl.addEventListener('mouseenter',()=>{   
//   containerEl.classList.add('active-left')
// })

// leftEl.addEventListener('mouseleave',()=>{   
//   containerEl.classList.remove('active-left')
// })

