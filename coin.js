const element = document.querySelector(elemntId);
element. addEventListener("collide", e => {
if (elemntId.includes("#coin")){
element.setAttribute("visible", false);
console.log ("ring collision");
}
if(elementId.includes("#fish")){
console.log("fish collision");
}
});

coinEL.setAttribute("static-body", {
    shape: "sphere",
    sphereRadius: 2
});