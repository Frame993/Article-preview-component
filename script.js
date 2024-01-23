let popUpShare = document.querySelector(".share");
let popUp = document.querySelector(".pop-up");


const showPopUp = (popUpShare.addEventListener("mouseover", () => {
    popUp.classList.toggle("hidden");
}))

const hidePopUp = (popUp.addEventListener("mouseleave", () => {
    popUp.classList.toggle("hidden");
}))

const showPopUpShare = popUp.addEventListener('mouseover', () => {
    popUpShare.classList.toggle('active')
})


