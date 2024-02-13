function calculateEllipseArea() {
   const pie = 3.14;
   const aAxis = getInputValueById("ellipse-aAxis");
   const bAxis = getInputValueById("ellipse-bAxis");

   const area = pie * aAxis * bAxis;
   document.getElementById("ellipse-area-display").innerText = area;
}
