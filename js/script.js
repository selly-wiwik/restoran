*{

let menu = document.querySelecor('#menu-bars');
let navbar = document.querySelector('.navbar');
}

menu.onclick = () =>{
	menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
  }

  let section= document.querySelector('section');
  let navLinks= document.querySelector('header .navbar a');


  window.onscroll = () =>{

	menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');

    section.forEach(sec =>{

    	let top = window.scrollY;
    	let height = sec.offsetHeight;
    	let offset = sec.offsetTop - 150;
    	let id = sec.getAttribute('id');

    	if(top => offset && top < offset + height){
    		navLinks.forEach(links =>{
    			links.classlist.remove('active');
    			document.querySelector('header .navbar a[href*='+id+']').classlist.add('active');
    		});
    	};
    });

   }

  document.querySelector('#search-icon').onclick = () =>{
  	document.querySelector('#search-form').classlist.toggle('active');
  }

  document.querySelector('#close').onclick = () =>{
  	document.querySelector('#search-form').classlist.remove('active');
  }