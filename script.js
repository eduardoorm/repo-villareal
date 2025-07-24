// Script to show "hola mundo"
console.log("hola mundo");

// Function to display "hola mundo" 
function mostrarHolaMundo() {
    console.log("hola mundo");
}

// Call the function
mostrarHolaMundo();

// sumar dos números en pantalla
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('sum-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const a = parseFloat(document.getElementById('num1').value) || 0;
    const b = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('sum-result').textContent = a + b;
  });
});
