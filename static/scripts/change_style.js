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
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let sizeText = document.createElement('h4');
        let colorText = document.createElement('h4');
        let colorBgText = document.createElement('h4');
        let sizePlus = document.createElement('button');
        let sizeMinus = document.createElement('button');
        let colorInput = document.createElement('input');
        let colorBgInput = document.createElement('input');

        sizeText.innerHTML = 'font-size';
        colorText.innerHTML = 'color';
        colorBgText.innerHTML = 'background-color';
        sizePlus.innerHTML = '+';
        sizeMinus.innerHTML = '-';
        colorInput.type = "color";
        colorBgInput.type = "color";
        colorInput.value = "#B846E0"
        colorBgInput.value = "#62BCF5"

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

        colorInput.addEventListener('change', function () {
            document.body.style.color = colorInput.value;
        });

        colorBgInput.addEventListener('change', function () {
            document.body.style.backgroundColor = colorBgInput.value;
        });

        div.appendChild(sizeText);
        div.appendChild(sizePlus);
        div.appendChild(sizeMinus);
        div2.appendChild(colorText);
        div2.appendChild(colorInput);
        div3.appendChild(colorBgText);
        div3.appendChild(colorBgInput);
        change_container.appendChild(div);
        change_container.appendChild(div2);
        change_container.appendChild(div3);
    }
}