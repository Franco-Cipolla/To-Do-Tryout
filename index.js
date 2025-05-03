const container = document.querySelector("#container");
const input = document.querySelector("#task");
const addBtn = document.querySelector("#addButton");
const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menuButton");
const returnBtn = document.querySelector("#returnButton");
const burgerBtn = document.querySelector("#logo");
let newButton = document.createElement("button");
let newDiv = document.createElement("div");


addBtn.addEventListener("click",(e) =>{
    e.preventDefault();

    addBtn.classList.add("animate-scale")
    setTimeout(() => {
        addBtn.classList.remove("animate-scale")
    }, 600);
    if(input.value !== ""){
    let newDiv = document.createElement("div");
    let newH2 = document.createElement("h2");
    let newCheck = document.createElement("input");
    let newButton = document.createElement("button");
    let textGroup = document.createElement("div");

    newCheck.setAttribute("type", "checkbox")

    newH2.classList.add("inline-block");
    newDiv.classList.add("border-b-1", "border-gray-200", "w-full", "flex", "p-2", "justify-between");
    newCheck.classList.add("cursor-pointer")
    textGroup.classList.add("flex", "gap-3", "items-center")
    newButton.classList.add("text-gray-400", "font-light", "hover:text-blue-400", "cursor-pointer", "transition", "duration-200", "ease-in-out", "hover:underline", "underline-offset-4");

    newDiv.append(textGroup);
    newDiv.append(newButton);
    container.append(newDiv);
    textGroup.append(newCheck, newH2);

    newButton.textContent = "Delete"
    newH2.textContent = input.value;
    input.value = "";
    newButton.addEventListener("click", function (e){
        e.preventDefault();
        newDiv.remove();
    });

}
})


menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden")
    menu.classList.toggle("ml-3")
    menuBtn.classList.toggle("transition-all")
    menuBtn.classList.toggle("duration-300")
    burgerBtn.classList.toggle("fa-bars");
    burgerBtn.classList.toggle("fa-xmark");

})
