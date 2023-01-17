let scoreH = document.getElementById("scoreH")
let scoreG = document.getElementById("scoreG")

let sH = 0
let sG = 0

function incH1() {
    sH += 1
    scoreH.textContent = sH
    console.log("clicked")
}
function incH3() {
    sH += 3
    scoreH.textContent = sH
    console.log("clicked")
}
function incH5() {
    sH += 5
    scoreH.textContent = sH
    console.log("clicked")
}
function incG1() {
    sG += 1
    scoreG.textContent = sG
    console.log("clicked")
}
function incG3() {
    sG += 3
    scoreG.textContent = sG
    console.log("clicked")
}
function incG5() {
    sG += 5
    scoreG.textContent = sG
    console.log("clicked")
}
