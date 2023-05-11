function displaydata(n) {
    result.value = result.value + n
}

function evaluateOper() {
    result.value = eval(result.value)
}

function cleardisplay() {
    result.value = ""
}

function backSpace() {
    result.value = result.value.slice(0, -1)
}