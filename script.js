// Operatör al (+, -, /, *).
var op = prompt("Islem Seciniz (+, -, /, *)");

// Sayilari al.
var sayiBir = prompt("Birinci Sayiyi Giriniz:");
var sayiIki = prompt("Ikinci Sayiyi Giriniz:");

// İf statement oluştur.
if(op == "+"){
    var result = parseFloat(sayiBir) + parseFloat(sayiIki);
} else if(op == "-") {
    var result = parseFloat(sayiBir) - parseFloat(sayiIki);
} else if(op == "/") {
    var result = parseFloat(sayiBir) / parseFloat(sayiIki);
} else if(op == "*") {
    var result = parseFloat(sayiBir) * parseFloat(sayiIki);
} else if (op == "tirbüşon"){
    console.log("Beklenmeyen Operatör");
    var result = "ALLA";
} else {
    console.log("Beklenmeyen Operatör Girişi");
    var result = "undefined";
}

// Sonucu yazdır.

document.getElementById("res").innerHTML = result;