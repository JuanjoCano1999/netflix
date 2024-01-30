            
            
            function reproducirTrailer(elemento, videoSrc) {
            // Obtener el elemento de video
            var video = document.createElement('video');
            video.src = videoSrc;
            
            // Agregar controles al video
            video.controls = true;

            // Agregar video al cuerpo del documento
            document.body.appendChild(video);

            // Iniciar la reproducción del video
            video.play();

            // Intentar activar el modo de pantalla completa
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }

            // Manejar el evento de salir de pantalla completa
            video.addEventListener('fullscreenchange', function () {
                if (!document.fullscreenElement) {
                    // Eliminar el video cuando se sale de pantalla completa
                    document.body.removeChild(video);
                }
            });
        }