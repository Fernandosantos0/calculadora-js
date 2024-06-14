'use strict';

const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.rest');
const display = document.querySelector('.display');
const tlimpar = document.querySelector('#tlimpar');
const tigual = document.querySelector('#tigual');
const tcopy = document.querySelector('#tcopy');
const teste = document.querySelector('#teste');

let sinal = false;
let decimal = false;

/* Funcionalidade das teclas numéricas */
teclasNum.forEach(el => {
    el.addEventListener('click', event => {
        sinal = false;

        if(display.innerHTML == '0') display.innerHTML = '';

        if(event.target.innerText === ',') {
            if(!decimal) {
                decimal = true;
                
                if(display.innerHTML === '') {
                    display.innerHTML = '0,';
                } else {
                    display.innerHTML += event.target.textContent;
                }
            }
        } else {
            display.innerHTML += event.target.textContent;
        }

    });
});

/* Funcionalidade das teclas de operação */
teclasOp.forEach(el => {
    el.addEventListener('click', event => {
        
        if(!sinal) {
            sinal = true;

            if(display.innerHTML == '0') {
                display.innerHTML = '';
            }

            if(event.target.innerText === 'x') {
                display.innerHTML += '*';
            } else {
                display.innerHTML += event.target.textContent;
            }
        }
    });
});

/* Funcionalidade da tecla de adição */
tlimpar.addEventListener('click', event => {
    sinal = false;
    decimal = false;
    display.innerText = '0';
});

/* Funcionalidade da tecla de igual */
tigual.addEventListener('click', event => {
    sinal = false;
    decimal = false;
    const resultado = window.eval(display.innerHTML);
    
    display.innerHTML = resultado;
});

/* Funcionalidade para copia na área de transferência */
tcopy.addEventListener('click', event => {
    // navigator.clipboard.writeText(display.innerHTML);

    teste.select();
    teste.setSelectionRange(0, 99999); // Mobile
    navigator.clipboard.writeText(teste.value);
});