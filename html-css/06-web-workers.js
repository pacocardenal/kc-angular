
function cuentaAtras(desde) {
    
    // Notificamos el valor al worker
    postMessage(desde);

    // Esperamos 1 segundo
    setTimeout(function() {
        
        // Decrementamos el contador
        desde--;

        // Ejecutamos de nuevo la función cuentaAtras con el nuevo contador
        cuentaAtras(desde);
    }, 1000);
    
}

// Iniciar la cuenta atrás
cuentaAtras(10);
