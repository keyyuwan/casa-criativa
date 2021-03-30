function onOff() {
    let modal = document.querySelector("#modal")
    modal.classList.toggle("hide")
    modal.classList.toggle("addScroll")

    let body = document.querySelector("body")
    body.classList.toggle("hideScroll")
}