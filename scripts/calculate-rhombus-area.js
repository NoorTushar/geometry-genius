function calculateRhombusArea() {
   const diagonal1 = getInputValueById("rhombus-diagonal-1");
   const diagonal2 = getInputValueById("rhombus-diagonal-2");

   const area = 0.5 * diagonal1 * diagonal2;
   document.getElementById("rhombus-area-display").innerText = area;
}
