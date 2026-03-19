// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener todos los textos y el enlace del conejo
    const textos = document.querySelectorAll('.texto-activo');
    const conejoBoton = document.getElementById('conejoBoton');
    
    // Asegurarnos de que solo el primer texto sea visible al inicio
    for (let i = 0; i < textos.length; i++) {
        if (i === 0) {
            textos[i].classList.add('visible');
        } else {
            textos[i].classList.remove('visible');
        }
    }
    
    // El conejo empieza sin la animación de respiración (no clickeable)
    conejoBoton.classList.remove('clickeable');
    
    // Función principal que se ejecuta en cada scroll
    function actualizarPorScroll() {
        // Calcular el progreso del scroll (0 a 1)
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progreso = scrollTop / maxScroll;
        
        // DEFINIR LOS PUNTOS DE CAMBIO
        const puntoTexto2 = 0.15; // 15% del scroll
        const puntoTexto3 = 0.3;  // 30% del scroll
        const puntoTexto4 = 0.45; // 45% del scroll
        const puntoTexto5 = 0.6;  // 60% del scroll
        const puntoConejoActivo = 0.7; // 70% - el conejo se vuelve clickeable
        
        // OCULTAR TODOS LOS TEXTOS PRIMERO
        textos.forEach(texto => {
            texto.classList.remove('visible');
        });
        
        // MOSTRAR EL TEXTO CORRESPONDIENTE
        if (progreso < puntoTexto2) {
            textos[0].classList.add('visible'); // Primer texto
        } 
        else if (progreso < puntoTexto3) {
            textos[1].classList.add('visible'); // Segundo texto
        } 
        else if (progreso < puntoTexto4) {
            textos[2].classList.add('visible'); // Tercer texto
        } 
        else if (progreso < puntoTexto5) {
            textos[3].classList.add('visible'); // Cuarto texto
        } 
        else {
            textos[4].classList.add('visible'); // Quinto texto (el que invita a hacer clic)
        }
        
        // CONTROL DEL CONEJO - se vuelve clickeable al final
        if (progreso > puntoConejoActivo) {
            conejoBoton.classList.add('clickeable');
            // Cambiar el texto para indicar que ya puede hacer clic
            // (opcional, ya tenemos el texto 5 que lo dice)
        } else {
            conejoBoton.classList.remove('clickeable');
        }
    }
    
    // Escuchar el evento scroll
    window.addEventListener('scroll', actualizarPorScroll);
    
    // Ejecutar una vez al inicio
    actualizarPorScroll();
    
    // Pequeño detalle: si el usuario ya había scrolleado
    setTimeout(actualizarPorScroll, 100);
    
    // Opcional: Mostrar un mensaje si intenta hacer clic antes de tiempo
    conejoBoton.addEventListener('click', function(e) {
        if (!conejoBoton.classList.contains('clickeable')) {
            e.preventDefault();
            // Mostrar un pequeño mensaje o simplemente no hacer nada
            console.log('Espera a que termine la historia...');
            
            // Opcional: hacer que el texto vibre o algo
            textos[Math.min(3, textos.length-1)].style.transform = 'translateX(-50%) scale(1.05)';
            setTimeout(() => {
                textos[Math.min(3, textos.length-1)].style.transform = 'translateX(-50%) scale(1)';
            }, 200);
        }
    });
});