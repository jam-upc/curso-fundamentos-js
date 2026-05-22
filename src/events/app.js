/**
 * 1. L'ESTAT (The State)
 * És la "font de la veritat" de la teva aplicació. 
 * Aquí es guarden les dades pures en memòria. La pantalla reflectirà el que hi hagi aquí.
 */
const state = {
    likes: 0,           // Comptador de "M'agrada"
    isHovering: false   // Booleà que sap si el ratolí està a sobre de la zona o no
}

/**
 * 2. FUNCIÓ AUXILIAR DE TEXT (getStatusMessage)
 * Depenent del nombre de likes que hi hagi a l'estat, ens retorna un text diferent.
 */
function getStatusMessage(){
    if (state.likes === 0) return 'Aun no hay Likes. Haz click en "Me gusta"';
    if (state.likes === 1) return 'Tienes 1 Like. Buen inicio';
    return `Tienes ${state.likes} Likes! Sigue!` // Ús de Template Literals per posar el número dinàmic
}

/**
 * 3. EL PINTOR / EL RENDERIZADOR (render)
 * Aquesta funció s'encarrega d'agafar les dades de 'state' i "dibuixar-les" a l'HTML.
 * Cada vegada que l'estat canvia, hem de cridar aquesta funció per actualitzar la pantalla.
 */
function render(){
    // --- Captura d'elements del DOM (els llocs on pintarem o modificarem) ---
    const status = document.querySelector('#status');
    const btnLike = document.querySelector('#btn-like');
    const btnReset = document.querySelector('#btn-reset');
    
    const hoverZone = document.querySelector('#hover-zone');
    const hoverPill = document.querySelector('#hover-pill');
    const hoverTitle = document.querySelector('#hover-title');
    const hoverText = document.querySelector('#hover-text');

    // Actualitza el text de l'estat dels likes amb el missatge de la funció anterior
    status.textContent = getStatusMessage();

    // LÒGICA DEL BOTÓ RESET:
    // Si els likes són 0, el botó de reset quedarà deshabilitat (true). Si és major que 0, s'activa (false).
    btnReset.disabled = state.likes === 0;
    // Si els likes són 0, el posem mig transparent (0.55 d'opacitat), si no, es veu al 100% (1)
    btnReset.style.opacity = state.likes === 0 ? '0.55' : 1;

    // LÒGICA DE LA ZONA HOVER:
    // .classList.toggle afegeix la classe 'is-hover' si state.isHovering és true, i la treu si és false.
    hoverZone.classList.toggle('is-hover', state.isHovering);
    
    // Modifiquem els textos de la zona hover dinàmicament usant un operador ternari (condicional ràpid)
    hoverPill.textContent = state.isHovering ? 'mouse: dentro' : 'mouse: fuera';
    hoverTitle.textContent = state.isHovering ? 'Hover: detectado' : 'Pasa el mouse por aquí';
    hoverText.textContent = state.isHovering ? 'Este cambio se disparó por mouseenter' : 'Cuando entras/sales, cambia una clase y el texto';
}

/**
 * 4. CONFIGURACIÓ D'ESDEVENIMENTS DE RATOLÍ I CLICKS (setupEvents)
 * Escolta el que fa l'usuari a la pantalla (clicks, moure el ratolí) per reaccionar.
 */
function setupEvents(){
    // Capturem els botons i zones on l'usuari interactuarà
    const btnLike = document.querySelector('#btn-like');
    const btnReset = document.querySelector('#btn-reset');
    const hoverZone = document.querySelector('#hover-zone');

    // Quan es fa click a "Like": sumem 1 a l'estat i tornem a pintar
    btnLike.addEventListener('click', () => {
        state.likes++;
        render(); // Re-renderitzem per veure el canvi
    });
    
    // Quan es fa click a "Reset": posem el comptador a 0 i tornem a pintar
    btnReset.addEventListener('click', () =>{
        state.likes = 0;
        render(); // Re-renderitzem
    });

    // Quan el ratolí ENTRA a la zona: canviem la propietat de l'estat a true i tornem a pintar
    hoverZone.addEventListener('mouseenter', () =>{
        state.isHovering = true;
        render();
    });
    
    // Quan el ratolí SURT de la zona: canviem la propietat de l'estat a false i tornem a pintar
    hoverZone.addEventListener('mouseleave', () =>{
        state.isHovering = false;
        render();
    });
}

/**
 * 5. CONFIGURACIÓ D'ESDEVENIMENTS DE TECLAT (setupKeyboardLike)
 * Escolta si l'usuari toca una tecla del teclat a qualsevol lloc de la pàgina.
 */
function setupKeyboardLike(){
    document.addEventListener('keydown', (event) => {
        // Si la tecla premuda (convertida a minúscula) NO és la 'l', aturem la funció (return)
        if (event.key?.toLocaleLowerCase() != 'l') return;
        
        // Si és la 'l', sumem un like i actualitzem la pantalla
        state.likes++;
        render();
    });
}

/**
 * 6. ENGEGADA DE L'APLICACIÓ (Inicialització)
 * Executem les funcions per deixar-ho tot funcionant quan es carrega la pàgina.
 */
setupEvents();        // Activem els detectors de clicks i ratolí
setupKeyboardLike();  // Activem el detector del teclat (tecla 'L')
render();             // Fem un primer "pintat" inicial perquè la pantalla no surti buida o desquadrada