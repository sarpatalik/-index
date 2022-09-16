// Operatör al (+, -, /, *).

var op = prompt("Islem Seciniz (+, -, /, *, kokal, kareal)");


// If statement oluştur.

if(op == "+"){
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var sayiIki = prompt("Ikinci Sayiyi Giriniz:");
    var result = parseFloat(sayiBir) + parseFloat(sayiIki);
} else if(op == "-") {
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var sayiIki = prompt("Ikinci Sayiyi Giriniz:");
    var result = parseFloat(sayiBir) - parseFloat(sayiIki);
} else if(op == "/") {
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var sayiIki = prompt("Ikinci Sayiyi Giriniz:");
    var result = parseFloat(sayiBir) / parseFloat(sayiIki);
} else if(op == "*") {
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var sayiIki = prompt("Ikinci Sayiyi Giriniz:");
    var result = parseFloat(sayiBir) * parseFloat(sayiIki);
} else if (op == "tirbuşon"){
    console.log("Beklenmeyen Operatör");
    var result = "ALLAH";
} else if (op == "kokal"){
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var result = Math.sqrt(sayiBir);
} else if (op =="kareal"){
    var sayiBir = prompt("Birinci Sayiyi Giriniz:");
    var result = parseFloat(sayiBir) * parseFloat(sayiBir);
    
}else {
    console.log("Beklenmeyen Operatör Girişi");
    var result = "undefined";
}

// Sonucu yazdır.

document.getElementById("res").innerHTML = result;
// Sarp 9-G.