// class SquareMatrix {
//     constructor() {
//         this.form = document.querySelector('#square_matrix');
//         this.transposeForm = document.querySelector('#transpose_matrix');
//         this.addRowForm = document.querySelector('#add_row');
//         this.addColumnForm = document.querySelector('#add_column');
//         this.matrixSizeInput = document.querySelector("#sq_matrix_input");
//         this.maxSelectionInput = document.getElementById('sq_matrix_max');
//         this.matrixOutput = document.getElementById("sq_matrix_output");
//     }
//
//     get inputValue() {
//         return Number(this.matrixSizeInput.value);
//     }
//
//     set alertValue(text) {
//         alert(text);
//     }
//
//     handleFormSubmit(event) {
//         event.preventDefault();
//         this.fillTable(this.inputValue);
//     }
//
//     fillTable(n) {
//         while (this.matrixOutput.rows.length > 0) {
//             this.matrixOutput.deleteRow(0);
//         }
//
//         for (let i = 0; i < n; i++) {
//             let row = this.matrixOutput.insertRow(i);
//             for (let j = 0; j < n; j++) {
//                 let cell = row.insertCell(j);
//                 cell.innerHTML = Math.floor(Math.random() * 100).toString();
//                 cell.addEventListener('click', () => this.changeColor(cell));
//             }
//         }
//     }
//
//     transposeMatrix(event) {
//         event.preventDefault();
//         let rows = this.matrixOutput.rows;
//         if (rows.length === 0) {
//             return;
//         }
//
//         let cols = rows[0].cells.length;
//         let transposedMatrix = new Array(cols).fill(0).map(() => new Array(rows.length).fill(0));
//
//         for (let i = 0; i < rows.length; i++) {
//             for (let j = 0; j < cols; j++) {
//                 transposedMatrix[j][i] = parseInt(rows[i].cells[j].innerHTML);
//             }
//         }
//
//         while (this.matrixOutput.rows.length > 0) {
//             this.matrixOutput.deleteRow(0);
//         }
//
//         for (let i = 0; i < transposedMatrix.length; i++) {
//             let row = this.matrixOutput.insertRow(i);
//             for (let j = 0; j < transposedMatrix[i].length; j++) {
//                 let cell = row.insertCell(j);
//                 cell.innerHTML = transposedMatrix[i][j];
//                 cell.addEventListener('click', () => this.changeColor(cell));
//             }
//         }
//     }
//
//     changeColor(cell) {
//         if (cell.classList.contains('selected')) {
//             cell.classList.remove('selected');
//             cell.style.backgroundColor = ''; // Reset background color
//             return;
//         }
//
//         let maxSelection = parseInt(this.maxSelectionInput.value);
//         let selectedCellsInRow = document.querySelectorAll('.selected[data-row="' + cell.parentNode.rowIndex + '"]');
//         let selectedCellsInCol = document.querySelectorAll('.selected[data-col="' + cell.cellIndex + '"]');
//
//         if (selectedCellsInRow.length >= maxSelection || selectedCellsInCol.length >= maxSelection) {
//             this.alertValue = 'Maximum selection limit reached in row or column';
//             return;
//         }
//
//         let cellIndex = cell.cellIndex;
//         let rowIndex = cell.parentNode.rowIndex;
//
//         for (let selectedCell of selectedCellsInRow) {
//             let selectedCellIndex = selectedCell.cellIndex;
//             if (Math.abs(selectedCellIndex - cellIndex) === 1) {
//                 this.alertValue = 'Cannot select neighbors';
//                 return;
//             }
//         }
//
//         for (let selectedCell of selectedCellsInCol) {
//             let selectedRowIndex = selectedCell.parentNode.rowIndex;
//             if (Math.abs(selectedRowIndex - rowIndex) === 1) {
//                 this.alertValue = 'Cannot select neighbors';
//                 return;
//             }
//         }
//
//         cell.classList.add('selected');
//         cell.setAttribute('data-row', rowIndex);
//         cell.setAttribute('data-col', cellIndex);
//
//         let num = parseInt(cell.innerHTML);
//         if (num % 2 === 0) {
//             cell.style.backgroundColor = "#95F5A6"
//         } else {
//             cell.style.backgroundColor = "#F5BD7C"
//         }
//     }
//
//     addRow(e) {
//         e.preventDefault();
//         let newRow = this.matrixOutput.insertRow(this.matrixOutput.rows.length);
//         for (let i = 0; i < this.matrixOutput.rows[0].cells.length; i++) {
//             let cell = newRow.insertCell(i);
//             cell.innerHTML = Math.floor(Math.random() * 100).toString();
//             cell.addEventListener('click', () => this.changeColor(cell));
//         }
//     }
//
//     addColumn(e) {
//         e.preventDefault();
//
//         for (let i = 0; i < this.matrixOutput.rows.length; i++) {
//             let cell = this.matrixOutput.rows[i].insertCell(this.matrixOutput.rows[i].cells.length);
//             cell.innerHTML = Math.floor(Math.random() * 100).toString();
//             cell.addEventListener('click', () => this.changeColor(cell));
//         }
//     }
// }
//
// class MatrixManipulator extends SquareMatrix {
//     init() {
//         this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
//         this.transposeForm.addEventListener('click', this.transposeMatrix.bind(this.matrix));
//         this.addRowForm.addEventListener('click', this.addRow.bind(this.matrix));
//         this.addColumnForm.addEventListener('click', this.addColumn.bind(this.matrix));
//     }
// }
//
// const manipulator = new MatrixManipulator();
// manipulator.init();

function SquareMatrix() {
    this.form = document.querySelector('#square_matrix');
    this.transposeForm = document.querySelector('#transpose_matrix');
    this.addRowForm = document.querySelector('#add_row');
    this.addColumnForm = document.querySelector('#add_column');
    this.matrixSizeInput = document.querySelector("#sq_matrix_input");
    this.maxSelectionInput = document.getElementById('sq_matrix_max');
    this.matrixOutput = document.getElementById("sq_matrix_output");
}

SquareMatrix.prototype.inputValue = function () {
    return Number(this.matrixSizeInput.value);
};

SquareMatrix.prototype.alertValue = function (text) {
    alert(text);
};

SquareMatrix.prototype.handleFormSubmit = function (event) {
    event.preventDefault();
    this.fillTable(this.inputValue());
};

SquareMatrix.prototype.fillTable = function (n) {
    while (this.matrixOutput.rows.length > 0) {
        this.matrixOutput.deleteRow(0);
    }

    for (let i = 0; i < n; i++) {
        let row = this.matrixOutput.insertRow(i);
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = Math.floor(Math.random() * 100).toString();
            cell.addEventListener('click', () => this.changeColor(cell));
        }
    }
};

SquareMatrix.prototype.transposeMatrix = function (event) {
    event.preventDefault();
    let rows = this.matrixOutput.rows;
    if (rows.length === 0) {
        return;
    }

    let cols = rows[0].cells.length;
    let transposedMatrix = new Array(cols).fill(0).map(() => new Array(rows.length).fill(0));

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = parseInt(rows[i].cells[j].innerHTML);
        }
    }

    while (this.matrixOutput.rows.length > 0) {
        this.matrixOutput.deleteRow(0);
    }

    for (let i = 0; i < transposedMatrix.length; i++) {
        let row = this.matrixOutput.insertRow(i);
        for (let j = 0; j < transposedMatrix[i].length; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = transposedMatrix[i][j];
            cell.addEventListener('click', () => this.changeColor(cell));
        }
    }
};

SquareMatrix.prototype.changeColor = function (cell) {
    if (cell.classList.contains('selected')) {
        this.clearCell(cell);
        return;
    }

    let maxSelection = parseInt(this.maxSelectionInput.value);
    let selectedCellsInRow = document.querySelectorAll('.selected[data-row="' + cell.parentNode.rowIndex + '"]');
    let selectedCellsInCol = document.querySelectorAll('.selected[data-col="' + cell.cellIndex + '"]');

    if (selectedCellsInRow.length >= maxSelection || selectedCellsInCol.length >= maxSelection) {
        this.alertValue('Maximum selection limit reached in row or column');
        return;
    }

    let cellIndex = cell.cellIndex;
    let rowIndex = cell.parentNode.rowIndex;

    for (let selectedCell of selectedCellsInRow) {
        let selectedCellIndex = selectedCell.cellIndex;
        if (Math.abs(selectedCellIndex - cellIndex) === 1) {
            this.alertValue('Cannot select neighbors');
            return;
        }
    }

    for (let selectedCell of selectedCellsInCol) {
        let selectedRowIndex = selectedCell.parentNode.rowIndex;
        if (Math.abs(selectedRowIndex - rowIndex) === 1) {
            this.alertValue('Cannot select neighbors');
            return;
        }
    }

    cell.classList.add('selected');
    cell.setAttribute('data-row', rowIndex);
    cell.setAttribute('data-col', cellIndex);

    let num = parseInt(cell.innerHTML);
    if (num % 2 === 0) {
        cell.style.backgroundColor = "#95F5A6"
    } else {
        cell.style.backgroundColor = "#F5BD7C"
    }
};

SquareMatrix.prototype.clearCell = function (cell) {
    cell.classList.remove('selected');
    cell.style.backgroundColor = ''; // Reset background color
};

SquareMatrix.prototype.addRow = function (e) {
    e.preventDefault();
    let newRow = this.matrixOutput.insertRow(this.matrixOutput.rows.length);
    for (let i = 0; i < this.matrixOutput.rows[0].cells.length; i++) {
        let cell = newRow.insertCell(i);
        cell.innerHTML = Math.floor(Math.random() * 100).toString();
        cell.addEventListener('click', () => this.changeColor(cell));
    }
};

SquareMatrix.prototype.addColumn = function (e) {
    e.preventDefault();

    for (let i = 0; i < this.matrixOutput.rows.length; i++) {
        let cell = this.matrixOutput.rows[i].insertCell(this.matrixOutput.rows[i].cells.length);
        cell.innerHTML = Math.floor(Math.random() * 100).toString();
        cell.addEventListener('click', () => this.changeColor(cell));
    }
};

function MatrixManipulator() {
    SquareMatrix.call(this);
}

MatrixManipulator.prototype = Object.create(SquareMatrix.prototype);
MatrixManipulator.prototype.constructor = MatrixManipulator;

MatrixManipulator.prototype.init = function () {
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    this.transposeForm.addEventListener('click', this.transposeMatrix.bind(this));
    this.addRowForm.addEventListener('click', this.addRow.bind(this));
    this.addColumnForm.addEventListener('click', this.addColumn.bind(this));
};

const manipulator = new MatrixManipulator();
manipulator.init();
