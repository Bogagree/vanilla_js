//  handler или подписчик или subscriber, listener, слушатель -> function
// handler будет вызван при наступлении события
// handler будет вызван с аргументом ({})
// аргумент функции handler это объект
// {} (сведения о произошедшем событии) -> event, ev, e, evt

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const big = document.getElementById("big")
const a = document.getElementById("a")

function onClickHandlerSm(e) {
    e.stopPropagation()
    alert("yo")
    }

function onClickHandlerBig() {
    console.log("hey!")
}

function anchorHandler(e) {
    e.preventDefault()
    alert("я не хочу работать как ссылка")
}

sm.addEventListener("click", onClickHandlerSm)

md.addEventListener("click", (e) => {
    console.log(e.currentTarget.id)})

big.addEventListener('click', onClickHandlerBig )


// ВСЕГДА ИСПОЛЬЗУЮЕМ currentTurget

// базовая концепция события это ВСПЛЫВАЮЩЕЕ

a.addEventListener("click", anchorHandler)
