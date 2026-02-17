
 
function marcarVaso(elemento) {
    
    elemento.classList.toggle('lleno');

    const vasosLlenos = document.querySelectorAll('.vaso-pequeno.lleno').length;
    const totalVasos = 8; 

    const porcentaje = (vasosLlenos / totalVasos) * 100;
    const litrosConsumidos = vasosLlenos * 0.25;
    const litrosFaltantes = 2 - litrosConsumidos;

    const capaAgua = document.getElementById('relleno-agua');
    const textoCentral = document.getElementById('texto-estado');

    capaAgua.style.height = `${porcentaje}%`;

    if (porcentaje === 100) {
        textoCentral.innerText = "¡Meta lograda!";
        textoCentral.style.color = "white";
    } else if (porcentaje === 0) {
        textoCentral.innerText = "Meta: 2 litros";
        textoCentral.style.color = "#333";
    } else {
        textoCentral.innerText = `Faltan ${litrosFaltantes.toFixed(2)}L`;
      
        textoCentral.style.color = porcentaje > 50 ? "white" : "#333";
    }
}