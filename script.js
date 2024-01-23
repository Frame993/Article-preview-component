let popUpShare = document.querySelector(".share");
let popUp = document.querySelector(".pop-up");

const changeShare = (toggle) => {
    if (toggle) {
        popUpShare.style.backgroundColor = 'var(--Desaturated-Dark-Blue)'
        popUpShare.style.backgroundImage = `url('./images/icon-share-white.svg')`
    } else {
        popUpShare.style.backgroundColor = 'var(--Light-Grayish-Blue)'
        popUpShare.style.backgroundImage = `url('./images/icon-share.svg')`
    }
}



const showPopUp = (popUpShare.addEventListener("mouseenter", () => {
    changeShare(true)
    popUp.classList.toggle("hidden");
}))

const hidePopUp = (popUp.addEventListener("mouseleave", () => {
    changeShare(false)
    popUp.classList.toggle("hidden");
}))


