let num1 = "";
let num2 = "";
let operadorBas= "";

let lineaSecundaria = document.querySelector("h2");
let lineaPrincipal = document.querySelector("h1");


function obtieneNum1(num) {
    num1 += num;
    return num1;
};

function obtieneNum2(num) {
    num2 += num;
    return num2
};

function obtieneResultado() {
    switch (operadorBas) {
        case "+":
            num1 = parseFloat(num1) + parseFloat(num2);
            num1 = String(num1);
            num2 = "";
            operadorBas = "";
            return num1;
            break;
        case "-":
            num1 = parseFloat(num1) - parseFloat(num2);
            num1 = String(num1);
            num2 = "";
            operadorBas = "";
            return num1;
            break;
        case "/":
            if (num2 === "0") {
                num1 = "";
                num2 = "";
                operadorBas = "";
                return "ERROR"
                break;
            } else {
                num1 = parseFloat(num1) / parseFloat(num2);
                num1 = String(num1);
                num2 = "";
                operadorBas = "";
                return num1;
                break;
            }
        case "*":
            num1 = parseFloat(num1) * parseFloat(num2);
            num1 = String(num1);
            num2 = "";
            operadorBas = "";
            return num1;
            break;
    }
};

let botonNumeros = Array.from(document.querySelectorAll(".numero"));
botonNumeros.forEach((numero) => numero.addEventListener("click", (e) => {
    if (!operadorBas) lineaPrincipal.textContent = (obtieneNum1(e.target.textContent));
    else lineaPrincipal.textContent = (obtieneNum2(e.target.textContent));
}));    

let operadoresBasicos = Array.from(document.querySelectorAll(".basicos"));
operadoresBasicos.forEach((operador) => operador.addEventListener("click", (e) => {
    operadorBas = e.target.textContent;
    lineaSecundaria.textContent = lineaPrincipal.textContent + (e.target.textContent);
    lineaPrincipal.textContent = "";
}));

let operadorIgual = document.querySelector(".igual");
operadorIgual.addEventListener("click", () => {
    if (!num1) lineaPrincipal.textContent = ("");
    else if (num1 && !num2) lineaPrincipal.textContent = (num1);
    else {
        lineaPrincipal.textContent = (obtieneResultado());
        lineaSecundaria.textContent = "";
    };
});

let operadorBorrar = document.querySelector(".borrar");
operadorBorrar.addEventListener("click", () => {
    if (lineaPrincipal.textContent === num1) {
        num1 = num1.slice(0, -1);
        lineaPrincipal.textContent = num1;
    }
    else if (lineaPrincipal.textContent === num2) {
        num2 = num2.slice(0, -1);
        lineaPrincipal.textContent = num2;
    }
});

let operadorLimpiar = document.querySelector(".limpiar");
operadorLimpiar.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operadorBas = "";
    lineaPrincipal.textContent = lineaSecundaria.textContent = ("");
});

let operadorPorcentaje = document.querySelector(".porcentaje");
operadorPorcentaje.addEventListener("click", () => {
    if (num2 && (operadorBas == "/" || operadorBas == "*")) {
        num2 = num2 / 100;
        num2 = String(num2); 
    } else if (num2 && (operadorBas == "+" || operadorBas == "-")) {
        num2 = parseFloat(num1) * num2 / 100;
        num2 = String(num2); 
    } else if (!operadorBas && num1) {
        num1 = num1 / 100;
        num1 = String(num1);
    }
})

let operadorDecimal = document.querySelector(".decimal");
operadorDecimal.addEventListener("click", () => {
    if (num2 && num2.indexOf(".") == -1) {
        num2 += ".";
        lineaPrincipal.textContent = (num2);
    } else if (num1 && num1.indexOf(".") == -1) {
        num1 += ".";
        lineaPrincipal.textContent = (num1);
    }
});


/* copia

let operadorBorrar = document.querySelector(".borrar");
operadorBorrar.addEventListener("click", () => {
    if (num2) {
        num2 = num2.slice(0, -1);
        console.log(num2);
    } else if (operadorBas) {
        operadorBas = "";
    } else {
        num1 = num1.slice(0, -1);
        console.log(num1);
    }
});

let operadorPorcentaje = document.querySelector(".porcentaje");
operadorPorcentaje.addEventListener("click", () => {
    if (num2 && (operadorBas == "/" || operadorBas == "*")) {
        num2 = num2 / 100;
        num2 = String(num2); 
    } else if (num2 && (operadorBas == "+" || operadorBas == "-")) {
        num2 = parseFloat(num1) * num2 / 100;
        num2 = String(num2); 
    } else if (!operadorBas && num1) {
        num1 = num1 / 100;
        num1 = String(num1);
    }
})

*/
