// Criando uma constante
const PI = 3.14159;

var radius = 5;

var area = PI * (radius * radius);

function calculateArea(radius){
    // Definindo uma variaável como let 
    let area;
    // Calculando a área
    area = PI * (radius * radius);
    return area;
}

var calculatedArea = calculateArea()

console.log("O rádio é igual a: " +radius);
console.log("A área do círculo é:", calculatedArea);
