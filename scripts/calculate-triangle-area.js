function calculateTriangleArea() {
   const base = getInputValueById("triangle-base");
   const height = getInputValueById("triangle-height");

   const area = base * height * 0.5;
   document.getElementById("triangle-area-display").innerText = area;
}

function getInputValueById(input) {
   const inputText = document.getElementById(input);
   const inputValue = inputText.value;
   const inputFloat = parseFloat(inputValue);

   return inputFloat;
}
