//get DOM box element
const mainContainer_DOM = document.getElementById("main-container");
const button_DOM = document.getElementById("button1");
const rangeVal_DOM =document.getElementById("rangeVal");
const range_DOM = document.getElementById("sizeRange");
const clear_DOM = document.getElementById("clear");
const colorChoice_DOM = document.querySelectorAll('input[name="colorChoice"]');

var colorChoice;

var divs;
function createDivs(num){
    refresh();
    gridArea = num * num;
    divSize = 500 / num;
    for (let i=0; i<gridArea;i++){
        divs = document.createElement("div");
        divs.classList.add("miniDiv");
        //divs.textContent = i;
        divs.style.height= `${divSize}px`;
        divs.style.width = `${divSize}px`;
        mainContainer_DOM.append(divs);
        //console.log(i);
        
    }
}
function refresh(){
    while(mainContainer_DOM.hasChildNodes()){
        mainContainer_DOM.removeChild(mainContainer_DOM.firstChild);
    }
}
function chooseMode () {
    for (let i=0; i<colorChoice_DOM.length; i++){
        if (colorChoice_DOM[i].checked){
        colorChoice = colorChoice_DOM[i].value;
        //console.log(colorChoice, i,colorChoice_DOM.length);
        }
    }

}
var sizeRange_DOM = document.getElementById("sizeRange").value;
var color;
createDivs(sizeRange_DOM);


colorChoice_DOM.forEach(radio => {
    radio.addEventListener('click', () => {
    chooseMode();
})});

button_DOM.addEventListener('click', () => {
    createDivs(sizeRange_DOM);
});
mainContainer_DOM.addEventListener('mouseover',function(e){
    if(e.target && e.target.className == 'miniDiv'){
        color = `rgb(0,0,0)`;
        if (colorChoice == 'random'){
        color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        //console.log(color);
    } else if (colorChoice == 'darken') {
            color =`rgb(40,30,200)`;
    } else if(colorChoice == 'black') {
            color = `rgb(0,0,0)`;
    }   else if(colorChoice == 'white'){
        color = `rgb(255,255,255)`;
    }
        //console.log(color);
        e.target.style.backgroundColor = `${color}`;
    }
 });
range_DOM.addEventListener('mouseup', () => {
    sizeRange_DOM = document.getElementById("sizeRange").value;
    console.log(sizeRange_DOM);
    rangeVal_DOM.textContent = `${sizeRange_DOM} x ${sizeRange_DOM}`;
});


// $('#main-container').on('mouseover', '.miniDiv', () => {
//     console.log("hi");
// })
