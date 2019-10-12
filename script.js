window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let parent = document.querySelector('.game-wrapper'),
        cells = document.querySelectorAll('.game-cell'),
        clearButton = document.querySelector('button'),
        xResult = document.querySelector('.x-win'),
        oResult = document.querySelector('.o-win'),
        draw = document.querySelector('.draw'),
        gameResult = document.querySelector('.game-result'),
        move = 0,
        arrDraw = [];
    
        cells.forEach(function(cell){
            cell.addEventListener('click', fillOutCell);
        });
    
        clearButton.addEventListener('click', clearCells);
    
        function clearCells() {
            cells.forEach(function(cell){
                cell.innerHTML = "";
                cell.addEventListener('click', fillOutCell);
                move = 0;
                gameResult.innerHTML = "";
                arrDraw.length = 0;
            });
        }
    
        function fillOutCell(event) {
            arrDraw.push('DRAW');
            if (event.target.tagName == "DIV" && event.target.classList.contains('game-cell')) {
                if (move % 2 == 0) {
                    this.innerHTML = "X";
                    this.style.color = "rgba(56, 197, 103, 0.61)";
                    this.removeEventListener('click', fillOutCell);
                } else {
                    this.innerHTML = "0";
                    this.style.color = "rgb(248, 72, 72)";
                    this.removeEventListener('click', fillOutCell);
                }
                    move++;
                    checkWinner();
            }
        }
    
        function checkWinner() {
            if (cells[0].innerHTML == "X" && cells[1].innerHTML == "X" && cells[2].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[3].innerHTML == "X" && cells[4].innerHTML == "X" && cells[5].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[6].innerHTML == "X" && cells[7].innerHTML == "X" && cells[8].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[0].innerHTML == "X" && cells[3].innerHTML == "X" && cells[6].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[1].innerHTML == "X" && cells[4].innerHTML == "X" && cells[7].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[2].innerHTML == "X" && cells[5].innerHTML == "X" && cells[8].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[0].innerHTML == "X" && cells[4].innerHTML == "X" && cells[8].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            if (cells[2].innerHTML == "X" && cells[4].innerHTML == "X" && cells[6].innerHTML == "X") {
                xResult.innerHTML = +xResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                xWin();
            }
            
            if (cells[0].innerHTML == "0" && cells[1].innerHTML == "0" && cells[2].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[3].innerHTML == "0" && cells[4].innerHTML == "0" && cells[5].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[6].innerHTML == "0" && cells[7].innerHTML == "0" && cells[8].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[0].innerHTML == "0" && cells[3].innerHTML == "0" && cells[6].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[1].innerHTML == "0" && cells[4].innerHTML == "0" && cells[7].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[2].innerHTML == "0" && cells[5].innerHTML == "0" && cells[8].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[0].innerHTML == "0" && cells[4].innerHTML == "0" && cells[8].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                oWin();
            }
            if (cells[2].innerHTML == "0" && cells[4].innerHTML == "0" && cells[6].innerHTML == "0") {
                oResult.innerHTML = +oResult.innerHTML + 1;
                cells.forEach(function(cell){
                    cell.removeEventListener('click', fillOutCell);
                });
                 oWin();
            } 
            
            if (arrDraw.length == 9) {
                draw.innerHTML = +draw.innerHTML + 1;
                makeDraw();
            }
        }

        function xWin() {
            gameResult.innerHTML = '"X" wins';
        }

        function oWin() {
            gameResult.innerHTML = '"0" wins';
        }

        function makeDraw() {
            gameResult.innerHTML = "Draw";
        }
    
    }); 
      