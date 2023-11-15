document.getElementById('change_style').addEventListener('change', handleCheckboxChange);

function handleCheckboxChange() {
    let checkbox = document.getElementById('change_style');
    let change_container = document.getElementById('change_container');
    while (change_container.firstChild) {
        change_container.removeChild(change_container.firstChild);
    }
    change_container.style.backgroundColor = '';


    if (checkbox.checked) {
        change_container.style.backgroundColor = 'white';
        let div = document.createElement('div');
        let sizeText = document.createElement('h4');
        let sizePlus = document.createElement('button');
        let sizeMinus = document.createElement('button');

        sizeText.innerHTML = 'font-size';
        sizePlus.innerHTML = '+';
        sizeMinus.innerHTML = '-';

        sizePlus.addEventListener('click', function () {
            let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
            console.log(currentFontSize);
            document.body.style.fontSize = (currentFontSize + 2) + 'px';
        });

        sizeMinus.addEventListener('click', function () {
            let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
            console.log(currentFontSize);
            document.body.style.fontSize = (currentFontSize - 2) + 'px';
        });

        div.appendChild(sizeText);
        div.appendChild(sizePlus);
        div.appendChild(sizeMinus);
        change_container.appendChild(div);
    }
}