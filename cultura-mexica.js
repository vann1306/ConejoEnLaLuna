 // ==========================================
// CULTURA MEXICA - EL CONEJO QUE TOCÓ LA LUNA
// VERSIÓN REORGANIZADA
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener elementos
    const textos = document.querySelectorAll('.texto-activo');
    const pantallaFinal = document.getElementById('pantallaFinal');
    
    // Elementos visuales
    const mapa = document.getElementById('mapa');
    const quetzal = document.getElementById('quetzal');
    const sol = document.getElementById('sol');
    const luna = document.getElementById('luna');
    const montana = document.getElementById('montana');
    const tierra = document.getElementById('tierra');
    const rio = document.getElementById('rio');
    const conejo = document.getElementById('conejo');
    const vozDerecha = document.getElementById('vozDerecha');
    const vozIzquierda = document.getElementById('vozIzquierda');
    const manos = document.getElementById('manos');
    const conejoLunaFinal = document.getElementById('conejoLunaFinal');
    
    // Función para limpiar todo
    function limpiarTodo() {
        document.querySelectorAll('img').forEach(img => {
            img.classList.remove('activo');
        });
        textos.forEach(t => t.classList.remove('visible'));
        if (pantallaFinal) pantallaFinal.classList.remove('visible');
        
        // Resetear clases específicas
        if (quetzal) {
            quetzal.classList.remove('avanza-40', 'avanza-50', 'montana', 'fuera');
        }
        if (conejo) {
            conejo.classList.remove('grande');
        }
    }
    
    
// ==========================================
// FUNCIÓN PRINCIPAL - CON TIERRA CONTROLADA
// ==========================================
function actualizarPorScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progreso = scrollTop / maxScroll;
    
    limpiarTodo();
    
    // ======================================
    // PANTALLA 1: TÍTULO (0% - 10%)
    // ======================================
    if (progreso < 0.1) {
        textos[0]?.classList.add('visible');
        // SIN TIERRA
    }
    
    // ======================================
    // PANTALLA 2: MAPA CRECE (10% - 20%)
    // ======================================
    else if (progreso >= 0.1 && progreso < 0.2) {
        if (mapa) mapa.classList.add('activo');
        // SIN TIERRA
    }
    
    // ======================================
    // PANTALLA 2: TEXTO INFERIOR (20% - 25%)
    // ======================================
    else if (progreso >= 0.2 && progreso < 0.25) {
        textos[1]?.classList.add('visible');
        if (mapa) mapa.classList.add('activo');
   
    }
    
    // ======================================
    // PANTALLA 3: QUETZAL APARECE (25% - 30%)
    // ======================================
    else if (progreso >= 0.25 && progreso < 0.3) {
        textos[2]?.classList.add('visible');
        if (quetzal) quetzal.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); 
    }
    
    // ======================================
    // PANTALLA 3: SOL Y LUNA (30% - 35%)
    // ======================================
    else if (progreso >= 0.3 && progreso < 0.35) {
        textos[3]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-40');
        }
        if (sol) sol.classList.add('activo');
        if (luna) luna.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 3: MONTAÑA (35% - 40%)
    // ======================================
    else if (progreso >= 0.35 && progreso < 0.4) {
        textos[4]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('montana');
        }
        if (montana) montana.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 3: RÍO (40% - 45%)
    // ======================================
    else if (progreso >= 0.4 && progreso < 0.45) {
        textos[4]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('fuera');
        }
        if (rio) rio.classList.add('activo');
        // SIN TIERRA (RÍO LA REEMPLAZA)
    }
    
    // ======================================
    // PANTALLA 4: LUNA Y QUETZAL (45% - 50%)
    // ======================================
    else if (progreso >= 0.45 && progreso < 0.5) {
        textos[5]?.classList.add('visible');
        if (luna) luna.classList.add('activo');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
        }
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 4: TEXTO HAMBRE (50% - 53%)
    // ======================================
    else if (progreso >= 0.5 && progreso < 0.53) {
        textos[6]?.classList.add('visible');
        if (luna) luna.classList.add('activo');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
        }
         if (vozDerecha) vozDerecha.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 4: VOZ (53% - 56%)
    // ======================================
    else if (progreso >= 0.53 && progreso < 0.56) {
        textos[7]?.classList.add('visible');
        if (luna) luna.classList.add('activo');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
        }
        if (vozDerecha) vozDerecha.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 4: CONEJO APARECE (56% - 60%)
    // ======================================
    else if (progreso >= 0.56 && progreso < 0.6) {
        textos[8]?.classList.add('visible');
        if (luna) luna.classList.add('activo');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
        }
        if (conejo) conejo.classList.add('activo');
        if (vozIzquierda) vozIzquierda.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 5: DIÁLOGO 1 (60% - 63%)
    // ======================================
    else if (progreso >= 0.6 && progreso < 0.63) {
        textos[9]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
            quetzal.style.width = '140px';
        }
        if (conejo) {
            conejo.classList.add('activo', 'grande');
        }
       
        if (vozDerecha) vozDerecha.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 5: DIÁLOGO 2 (63% - 66%)
    // ======================================
    else if (progreso >= 0.63 && progreso < 0.66) {
        textos[10]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
            quetzal.style.width = '140px';
        }
        if (conejo) {
            conejo.classList.add('activo', 'grande');
        }
       
        if (vozIzquierda) vozIzquierda.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 5: DIÁLOGO 3 (66% - 69%)
    // ======================================
    else if (progreso >= 0.66 && progreso < 0.69) {
        textos[11]?.classList.add('visible');
        if (quetzal) {
            quetzal.classList.add('activo');
            quetzal.classList.add('avanza-50');
            quetzal.style.width = '140px';
        }
        if (conejo) {
            conejo.classList.add('activo', 'grande');
        }
        if (vozIzquierda) vozIzquierda.classList.add('activo');
        if (tierra) tierra.classList.add('activo'); // TIERRA ACTIVADA
    }
    
    // ======================================
    // PANTALLA 5: MANOS (69% - 73%)
    // ======================================
    else if (progreso >= 0.69 && progreso < 0.73) {
        textos[12]?.classList.add('visible');
        if (manos) manos.classList.add('activo');
        // SIN TIERRA (YA NO ESTÁ EN SUELO)
    }
    
    // ======================================
    // PANTALLA 5: VOZ FINAL (73% - 77%)
    // ======================================
    else if (progreso >= 0.73 && progreso < 0.77) {
        textos[13]?.classList.add('visible');
        if (manos) manos.classList.add('activo');
        if (vozIzquierda) vozIzquierda.classList.add('activo');
        // SIN TIERRA
    }
    
    // ======================================
    // PANTALLA 5: FUNDIDO (77% - 82%)
    // ======================================
    else if (progreso >= 0.77 && progreso < 0.82) {
        textos[13]?.classList.add('visible');
        if (conejoLunaFinal) conejoLunaFinal.classList.add('activo');
        // SIN TIERRA
    }
    
    // ======================================
    // PANTALLA 6: CONEJO EN LUNA (82% - 90%)
    // ======================================
    else if (progreso >= 0.82 && progreso < 0.9) {
        textos[14]?.classList.add('visible');
        if (conejoLunaFinal) conejoLunaFinal.classList.add('activo');
        // SIN TIERRA
    }
    
    // ======================================
    // PANTALLA FINAL: REGRESO (90% - 100%)
    // ======================================
    else {
        textos[14]?.classList.add('visible');
        if (conejoLunaFinal) conejoLunaFinal.classList.add('activo');
        if (pantallaFinal) pantallaFinal.classList.add('visible');
        // SIN TIERRA
    }
}
    
    window.addEventListener('scroll', actualizarPorScroll);
    actualizarPorScroll();

    // ==========================================
// INDICADOR DE PUNTITOS
// ==========================================
const puntitos = document.querySelectorAll('.puntito');

function actualizarPuntitos() {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progreso = scrollTop / maxScroll;
    
    // Definir en qué puntito estamos según el progreso
    let indiceActivo = 0;
    if (progreso < 0.10) indiceActivo = 0;
    else if (progreso < 0.25) indiceActivo = 1;
    else if (progreso < 0.35) indiceActivo = 2;
    else if (progreso < 0.45) indiceActivo = 3;
    else if (progreso < 0.69) indiceActivo = 4;
    else if (progreso < 0.82) indiceActivo = 5;
    else indiceActivo = 6;
    
    puntitos.forEach((p, i) => {
        p.classList.remove('puntito-activo');
        if (i === indiceActivo) {
            p.classList.add('puntito-activo');
        }
    });
}

window.addEventListener('scroll', actualizarPuntitos);
actualizarPuntitos();
});