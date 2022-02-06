var liczba1 = 0;
var liczba2 = 0;
var rodzajDzialania = 0;
var wynik = 0;
var poleWynik = document.getElementById("wynik");



function wpisz(cyfra) {
    if(poleWynik.innerHTML == "NaN" || poleWynik.innerHTML == "Error") {
        poleWynik.innerHTML = "";
    };
    poleWynik.innerHTML = poleWynik.innerHTML + cyfra;
};

function dzialanie(symbol) {
    if(poleWynik.innerHTML !== "") {
    liczba1 = Number(poleWynik.innerHTML);
    };
    poleWynik.innerHTML = "";
    rodzajDzialania = symbol;
    document.getElementById("dzialanie").innerHTML = symbol;
};

function rownanie() {
    liczba2 = Number(poleWynik.innerHTML);
    wynik = liczba1 + rodzajDzialania + liczba2;
    poleWynik.innerHTML = eval(wynik);
    document.getElementById("dzialanie").innerHTML = "";
    if(liczba2 == 0 && rodzajDzialania == "/") {
        poleWynik.innerHTML = "Error";
    };
    liczba1 = 0;
    liczba2 = 0;
};

function wyczysc() {
    poleWynik.innerHTML = "";
};
