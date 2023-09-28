let celRadio = document.getElementById("celsius");
let farRadio = document.getElementById("farenheit");
let convertBtn = document.getElementById("convertBtn");
let textBox = document.getElementById("textBox");
let convertedVal; 
convertBtn.onclick = function(){
    switch(true){
        case celRadio.checked:
            convertedVal = convertTempToCelsius(textBox.value);
            alert("The temperature in celsius is "+convertedVal);
            break; 
        case farRadio.checked:
            convertedVal = convertTempToFarenheit(textBox.value);
            alert("The temperature in farenheit is "+convertedVal);
            break; 
        case textBox.value == "":
            alert("Please enter a value you wish to convert!");
            break;
        case !farRadio.checked || !celRadio.checked:
            alert("Please select a check box!");
    }
}
function convertTempToFarenheit(value){
   return (value - 32) * 5/9;

}
function convertTempToCelsius(value){
    return (value * 9 / 5) + 32;
}
