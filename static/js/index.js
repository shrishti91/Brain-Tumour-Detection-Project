const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


//navbar menu
const menubtn=document.getElementById("menu");
const closebtn=document.getElementById("close-btn");
const menu=document.querySelector("nav .container ul");

// menu.classList.add("active")
// menu.style.display='none';
menubtn.addEventListener("click",()=>{
  menu.style.display='block';
  menubtn.style.display='none';
  closebtn.style.display='inline-block';
})

closebtn.addEventListener("click",()=>{
  menu.style.display='none';
  menubtn.style.display='inline-block';
  closebtn.style.display='none';
})

//changing the active class
const navItems=menu.querySelectorAll("li");
const updateactive=()=>{
  navItems.forEach(item=>{
    const link=item.querySelector('a');
    link.classList.remove('active');
    })
}
navItems.forEach(item=>{
  const linkel=item.querySelector('a');
  linkel.addEventListener("click",()=>{
    updateactive();
    linkel.classList.add('active');
  })
})



//about read more section

const read_more_content=document.querySelector("section.about .info .more p");
const moreel=document.querySelector("section.about .info .more a");
// moreel.style.display='none';
// read_more_content.style.display='flex'
moreel.addEventListener("click",()=>{
  read_more_content.classList.toggle("show-content");
  if(read_more_content.classList.contains("show-content"))
  {
    moreel.textContent='Show-Less';
  }
  else{
    moreel.textContent='Show more'
  }
})

//skills dropdown

const skillel=document.querySelectorAll("section.skills .skill");
skillel.forEach(skill=>{  
  skill.querySelector('.head').addEventListener('click',()=>{
    skill.querySelector('.items').classList.toggle('open');
  })
})  




// dropdownel.style.display='none';