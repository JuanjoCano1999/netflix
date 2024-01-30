
function showDetails(movieId) {
    const selectedMovieImage = document.getElementById('selectedMovieImage');
    const selectedMovieTitle = document.getElementById('selectedMovieTitle');
    const selectedMovieDescription = document.getElementById('selectedMovieDescription');
    const detailsOverlay = document.getElementById('detailsOverlay');

    // Informacion de la peli
    let movieInfo = getMovieInfo(movieId);

    // Para ver los detalles
    selectedMovieImage.src = movieInfo.image;
    selectedMovieTitle.innerText = movieInfo.title;
    selectedMovieDescription.innerText = movieInfo.description;
    
    detailsOverlay.style.display = 'flex';
}

function hideDetails() {
    const detailsOverlay = document.getElementById('detailsOverlay');
    detailsOverlay.style.display = 'none';
}
setTimeout(() => {
    introModal.style.display = 'none';

}, 4500);

function getMovieInfo(movieId) {
    

    const movies = {
        pelicula1: {
            title: 'Host (Terror)',
            description: 'Cuenta la historia de seis amigos que realizan una sesión espiritista por Zoom durante la cuarentena, lo que les lleva a vivir una serie de aterradoras experiencias. Cuando un espíritu maligno invade sus casas, comienzan a preguntarse qué es lo que pueden hacer para sobrevivir a la noche.',
            image: 'HostMiedo.jpg'
        },
        pelicula2: {
            title: 'Mr.Robot(Accion)',
            description: 'La serie gira en torno a Elliot Alderson, un joven que trabaja como ingeniero de seguridad en la empresa neoyorquina de seguridad informática Allsafe. Constantemente luchando con el trastorno de ansiedad social, trastorno de identidad disociativo y depresión clínica, el proceso de pensamiento de Elliot parece fuertemente influido por la paranoia y el delirio.​ Se conecta con personas hackeándolas, lo que a menudo le lleva a actuar como vigilante clandestino de internet. Es reclutado por Mr. Robot, un misterioso anarquista insurreccional, uniéndose a su equipo de hacktivistas conocido como fsociety. Una de sus misiones es cancelar todas las deudas de crédito destruyendo los datos de una de las corporaciones más grandes del mundo, E Corp (que Elliot percibe como Corporación Malvada), que también es el principal cliente de Allsafe.8',
            image: 'mrRobot.jpg'
        },
        pelicula3: {
            title: 'BlackMirror(MultiGenero)',
            description: 'Descrita por su productora como «un híbrido de The Twilight Zone y Relatos de lo inesperado que se nutre del malestar contemporáneo sobre nuestro mundo moderno», la serie se caracteriza por presentar relatos autoconclusivos, algunos con una ambientación distópica, escenarios postapocalípticos, otros presentan una sátira, una trama de fantasía, una realidad alternativa, sociedades orwellianas o incluso ambientados en una utopía, mostrando generalmente un sentimiento de «tecno-paranoia» y, en gran parte, cómo la tecnología afecta al ser humano.2​',
            image: 'BlackMirror.jpg'
        }
    };

    return movies[movieId];
}
