
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
    par2.innerHTML = `<a href="https://www.nike.com/gb/" target="_blank">
                        <img id="nike" src="img/nike.png">
                        <a/>`
});

//Click & hide: showing text. using "toggle" method from classList property

const but3 = document.getElementById("b3");
const par3 = document.getElementById("d3");
const hid3 = document.getElementById("h3");

but3.addEventListener("click", function(){
    par3.innerHTML = "Hello!"
    par3.classList.toggle("d3");
});

// TESLA - changing img src. For the EL function - the trick is to asign number to each picture situation, with initial value assigned to "n outside the function, so it is available everytime the function starts (#scope!, #clousures!). If the "n" was in the function it would got "destroyed" everytime the function starts (it would have the same value in the begginig everytimne) 

const butColor = document.getElementById("color_change");
const teslaImg = document.getElementById("tesla_pick");

let n=0;

butColor.addEventListener("click", function(){

        if (n==0) {
            teslaImg.src = "img/tes_wh.jpg";
            n = 1;}

        else {
            teslaImg.src = "img/tes_bl.jpg";
            n = 0;}
    

});