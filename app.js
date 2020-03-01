
const but1 = document.getElementById("b1");
const par1 = document.getElementById("d1");



//setting "true" sets bubbling (up)
but1.addEventListener("click", function(){
    par1.innerHTML = Date();
});

const but2 = document.getElementById("b2");
const par2 = document.getElementById("d2");

//default "false" sets capturing (down)
but2.addEventListener("click", function(){
    par2.innerHTML = `<a href="https://www.nike.com/gb/" target="_blank">nike<a/>`
});

const but3 = document.getElementById("b3");
const par3 = document.getElementById("d3");

//setting "false"
but3.addEventListener("click", function(){
    par3.innerHTML = "Hello!"
});