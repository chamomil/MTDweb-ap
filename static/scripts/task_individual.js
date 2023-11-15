document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#task_form');
    const formRes = document.querySelector("#task_res_form");
    const array = new Map();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputDate = new Date(document.getElementById('date_input').value);
        const inputKey = document.getElementById('key_input').value;
        array.set(inputKey, inputDate);
        console.log(array);
        document.getElementById('key_input').value = "";
        document.getElementById('date_input').value = "";
    });

    formRes.addEventListener('submit', function (event) {
        event.preventDefault();
        const springDates = filterSpringDates(array);
        let table_output = document.getElementById('table_output');
        let table_input = document.getElementById('table_input');
        let input_text = document.getElementById('input_text');
        let result_text = document.getElementById('result_text');

        if (array.size !== 0) {
            input_text.style.visibility = "visible";
            result_text.style.visibility = "visible";
        }

        while (table_input.rows.length > 0) {
            table_input.deleteRow(0);
        }
        while (table_output.rows.length > 0) {
            table_output.deleteRow(0);
        }
        for (const [key, date] of array) {
            console.log(key, date);
            let row = table_input.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = key;
            cell2.innerHTML = date.toString();
        }

        for (const [key, date] of springDates) {
            console.log(key, date);
            let row = table_output.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = key;
            cell2.innerHTML = date.toString();
        }
    });
});

/**
 *
 * @param map
 * @returns {Map<string, Date>}
 */
function filterSpringDates(map) {
    /** @type {Map<string, Date>} */
    const springEntries = new Map();

    for (const [key, date] of map) {
        console.log(date);
        if (date.getMonth() >= 2 && date.getMonth() <= 4) {
            springEntries.set(key, date);
        }
    }

    return springEntries;
}

