document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#square_matrix');
  const n = document.querySelector("#sq_matrix_input");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = Number(document.getElementById('sq_matrix_input').value);
    fillTable(input);
  });
});

function fillTable(n){
    let output = document.getElementById("sq_matrix_output");

    while (output.rows.length > 0) {
        output.deleteRow(0);
    }
    for (let i = 0; i < n; i++) {
      let row = output.insertRow(i);
      for (let j = 0; j < n; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = Math.floor(Math.random() * 100).toString();
      }
    }
}
