// ==========================================
// CULTURA CHINA - CONEJO DE JADE (SIN MANCHA)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // OBTENER TODOS LOS ELEMENTOS
    // ==========================================
    
    // Textos
    const textos = document.querySelectorAll('.texto-activo');
    
    // Elementos visuales
    const nubeIzq = document.getElementById('nubeIzq');
    const nubeDer = document.getElementById('nubeDer');
    const change = document.getElementById('change');
    const mono = document.getElementById('mono');
    const zorro = document.getElementById('zorro');
    const conejoPequeno = document.getElementById('conejoPequeno');
    const anciano = document.getElementById('anciano');
    const fruta = document.getElementById('fruta');
    const pescado = document.getElementById('pescado');
    const conejoPensando = document.getElementById('conejoPensando');
    const idea = document.getElementById('idea');
    const conejoSentado = document.getElementById('conejoSentado');
    const escenaFuego = document.getElementById('escenaFuego');
    const fogataEncendida = document.getElementById('fogataEncendida');
    const fogataApagada = document.getElementById('fogataApagada');
    const conejoSalto = document.getElementById('conejoSalto');
    const conejoLuna = document.getElementById('conejoLuna');
    const conejoLunarFinal = document.getElementById('conejoLunarFinal');
    
    // NUEVO: Pantalla final
    const pantallaFinal = document.getElementById('pantallaFinal');
    
    // ==========================================
    // CONFIGURACIÓN DE PUNTOS DE SCROLL
    // ==========================================
    const puntos = {
        p2Inicio: 0.08, p2Fin: 0.15,
        p3Inicio: 0.15, p3Fin: 0.22,
        p4Inicio: 0.22, p4Fin: 0.29,
        p5aInicio: 0.29, p5aFin: 0.33,
        p5bInicio: 0.33, p5bFin: 0.37,
        p5cInicio: 0.37, p5cFin: 0.42,
        p6Inicio: 0.42, p6Fin: 0.48,
        p7Inicio: 0.48, p7Fin: 0.54,
        p8aInicio: 0.54, p8aFin: 0.58,
        p8bInicio: 0.58, p8bFin: 0.62,
        p8cInicio: 0.62, p8cFin: 0.67,
        p9Inicio: 0.67, p9Fin: 0.74,
        p10Inicio: 0.74, p10Fin: 0.82,
        p11aInicio: 0.82, p11aFin: 0.88
        // ELIMINADO p11b
    };
    
    // ==========================================
    // FUNCIÓN PARA LIMPIAR TODAS LAS PANTALLAS
    // ==========================================
    function limpiarTodo() {
        document.querySelectorAll('img').forEach(img => {
            img.classList.remove('activo');
        });
        
        textos.forEach(texto => {
            texto.classList.remove('visible');
        });
        
        if (conejoSalto) {
            conejoSalto.style.transform = '';
        }
        
        // NUEVO: Ocultar pantalla final
        if (pantallaFinal) {
            pantallaFinal.classList.remove('visible');
        }
    }
    
    // ==========================================
    // FUNCIÓN PRINCIPAL
    // ==========================================
    function actualizarPorScroll() {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progreso = scrollTop / maxScroll;
        
        limpiarTodo();
        
        // Pantalla 1
        if (progreso < puntos.p2Inicio) {
            textos[0]?.classList.add('visible');
        }
        
        // Pantalla 2
        else if (progreso >= puntos.p2Inicio && progreso < puntos.p2Fin) {
            textos[1]?.classList.add('visible');
            if (change) change.classList.add('activo');
        }
        
        // Pantalla 3
        else if (progreso >= puntos.p3Inicio && progreso < puntos.p3Fin) {
            textos[2]?.classList.add('visible');
            if (mono) mono.classList.add('activo');
            if (zorro) zorro.classList.add('activo');
            if (conejoPequeno) conejoPequeno.classList.add('activo');
        }
        
        // Pantalla 4
        else if (progreso >= puntos.p4Inicio && progreso < puntos.p4Fin) {
            textos[3]?.classList.add('visible');
            if (anciano) anciano.classList.add('activo');
        }
        
        // Pantalla 5a
        else if (progreso >= puntos.p5aInicio && progreso < puntos.p5aFin) {
            textos[4]?.classList.add('visible');
            if (fruta) fruta.classList.add('activo');
        }
        
        // Pantalla 5b
        else if (progreso >= puntos.p5bInicio && progreso < puntos.p5bFin) {
            textos[5]?.classList.add('visible');
            if (fruta) fruta.classList.add('activo');
            if (pescado) pescado.classList.add('activo');
        }
        
        // Pantalla 5c
        else if (progreso >= puntos.p5cInicio && progreso < puntos.p5cFin) {
            textos[6]?.classList.add('visible');
            if (fruta) fruta.classList.add('activo');
            if (pescado) pescado.classList.add('activo');
        }
        
        // Pantalla 6
        else if (progreso >= puntos.p6Inicio && progreso < puntos.p6Fin) {
            textos[7]?.classList.add('visible');
            if (conejoPensando) conejoPensando.classList.add('activo');
            if (idea) idea.classList.add('activo');
        }
        
        // Pantalla 7
        else if (progreso >= puntos.p7Inicio && progreso < puntos.p7Fin) {
            textos[8]?.classList.add('visible');
            if (conejoSentado) conejoSentado.classList.add('activo');
        }
        
        // Pantalla 8a
        else if (progreso >= puntos.p8aInicio && progreso < puntos.p8aFin) {
            textos[9]?.classList.add('visible');
            if (escenaFuego) escenaFuego.classList.add('activo');
            if (fogataEncendida) fogataEncendida.classList.add('activo');
        }
        
        // Pantalla 8b
        else if (progreso >= puntos.p8bInicio && progreso < puntos.p8bFin) {
            textos[10]?.classList.add('visible');
            if (escenaFuego) escenaFuego.classList.add('activo');
            if (fogataEncendida) fogataEncendida.classList.add('activo');
            if (conejoSalto) conejoSalto.classList.add('activo');
        }
        
        // Pantalla 8c
        else if (progreso >= puntos.p8cInicio && progreso < puntos.p8cFin) {
            textos[11]?.classList.add('visible');
            if (escenaFuego) escenaFuego.classList.add('activo');
            if (fogataApagada) fogataApagada.classList.add('activo');
            if (conejoSalto) conejoSalto.classList.add('activo');
        }
        
        // Pantalla 9
        else if (progreso >= puntos.p9Inicio && progreso < puntos.p9Fin) {
            textos[12]?.classList.add('visible');
            if (anciano) anciano.classList.add('activo');
        }
        
        // Pantalla 10
        else if (progreso >= puntos.p10Inicio && progreso < puntos.p10Fin) {
            textos[13]?.classList.add('visible');
            if (conejoLuna) conejoLuna.classList.add('activo');
        }
        
        // Pantalla 11a
        else if (progreso >= puntos.p11aInicio && progreso < puntos.p11aFin) {
            textos[14]?.classList.add('visible');
            if (conejoLunarFinal) conejoLunarFinal.classList.add('activo');
        }
        
        // ======================================
        // NUEVA PANTALLA FINAL (desde 88%)
        // ======================================
        else if (progreso >= 0.88) {
            textos[15]?.classList.add('visible'); // "—¡Mira!..."
            if (conejoLunarFinal) conejoLunarFinal.classList.add('activo');
            
            // Mostrar pantalla final
            if (pantallaFinal) {
                pantallaFinal.classList.add('visible');
            }
        }
    }
    
    // ==========================================
    // EVENTOS
    // ==========================================
    window.addEventListener('scroll', actualizarPorScroll);
    actualizarPorScroll();
    
    // Animación del salto (opcional)
    function animarSalto() {
        const progreso = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        
        if (progreso >= puntos.p8bInicio && progreso < puntos.p8bFin && conejoSalto) {
            const progresoLocal = (progreso - puntos.p8bInicio) / (puntos.p8bFin - puntos.p8bInicio);
            const x = 200 * progresoLocal;
            const y = -150 * Math.sin(progresoLocal * Math.PI);
            conejoSalto.style.transform = `translate(${x}px, ${y}px) scale(${1 + progresoLocal * 0.3})`;
        }
    }
    
    window.addEventListener('scroll', animarSalto);
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
    if (progreso < 0.08) indiceActivo = 0;
    else if (progreso < 0.16) indiceActivo = 1;
    else if (progreso < 0.22) indiceActivo = 2;
    else if (progreso < 0.30) indiceActivo = 3;
    else if (progreso < 0.40) indiceActivo = 4;
    else if (progreso < 0.48) indiceActivo = 5;
    else if (progreso < 0.54) indiceActivo = 6;
    else if (progreso < 0.68) indiceActivo = 7;
    else if (progreso < 0.74) indiceActivo = 8;
    else if (progreso < 0.80) indiceActivo = 9;
    else indiceActivo = 10;
    
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