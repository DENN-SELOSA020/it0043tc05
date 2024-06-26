function reset() {
    const boxContainer = document.getElementById('simulation-box');
    boxContainer.style.flexDirection = 'row';
    boxContainer.style.justifyContent = 'flex-start';
    boxContainer.style.alignItems = 'stretch';
    boxContainer.style.gap = '0px';

    document.getElementById('grow1').value = 0;
    document.getElementById('grow2').value = 0;
    document.getElementById('grow3').value = 0;

    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.style.flexGrow = '0';
    }
}

function setGap() {
    const gapValue = document.getElementById('count-flex').value;
    const boxContainer = document.getElementById('simulation-box');
    boxContainer.style.gap = gapValue + 'px';
}

function setDirection(direction) {
    const boxContainer = document.getElementById('simulation-box');
    boxContainer.style.flexDirection = direction;
}

function setJustifyContent(value) {
    const boxContainer = document.getElementById('simulation-box');
    boxContainer.style.justifyContent = value;
}

function setAlignItems(value) {
    const boxContainer = document.getElementById('simulation-box');
    boxContainer.style.alignItems = value;
}

function setFlexGrow(boxNumber) {
    const growValue = document.getElementById('grow' + boxNumber).value;
    const box = document.getElementById('box' + boxNumber);
    box.style.flexGrow = growValue;
}

function growAll() {
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.style.flexGrow = '1';
    }
}

function resetGrow() {
    document.getElementById('grow1').value = 0;
    document.getElementById('grow2').value = 0;
    document.getElementById('grow3').value = 0;

    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.style.flexGrow = '0';
    }
}
