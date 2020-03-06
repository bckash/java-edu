
//Click & hide: showing current date - using simple change of css "display" of buttons.

const but1 = document.getElementById("b1");
const par1 = document.getElementById("d1");
const hid1 = document.getElementById("h1");

but1.addEventListener("click", function(){
    par1.innerHTML = Date();
    par1.style.display = "inline-block";
    but1.style.display = "none";
    hid1.style.display = "inline-block";
});

hid1.addEventListener("click", function(){
    par1.style.display = "none";
    but1.style.display = "inline-block";
    hid1.style.display = "none";
})

//Click & hide: inserting a link. need a third way for show&hide content

const but2 = document.getElementById("b2");
const par2 = document.getElementById("d2");
const hid2 = document.getElementById("h2");

but2.addEventListener("click", function(){
    par2.innerHTML = `<a href="https://www.nike.com/gb/" target="_blank">nike<a/>`
});

//Click & hide: showing text. using "toggle" method from classList property

const but3 = document.getElementById("b3");
const par3 = document.getElementById("d3");
const hid3 = document.getElementById("h3");

but3.addEventListener("click", function(){
    par3.innerHTML = "Hello!"
    par3.classList.toggle("d3");
});