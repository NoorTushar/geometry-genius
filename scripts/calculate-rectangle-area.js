function calculateRectangleArea() {
   const width = getInputValueById("rectangle-width");
   const length = getInputValueById("rectangle-length");

   const area = width * length;
   document.getElementById("rectangle-area-display").innerText = area;
}
