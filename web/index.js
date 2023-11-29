// FILE INPUT
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez l'élément d'entrée de fichier
    let fileInput = document.getElementById('fileInput');

    // Ajoutez un écouteur d'événements 'change' à l'élément d'entrée de fichier
    fileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        // Obtenez l'élément d'entrée de fichier
        let input = event.target;

        // Assurez-vous qu'un fichier a été sélectionné
        if (input.files && input.files[0]) {
            // Accédez au fichier sélectionné
            let selectedFile = input.files[0];

            // AUDIO PLAYER 
            let audio = document.getElementById("audioPlayer");

            // Vérifiez si l'élément audio existe
            if (audio) {
                // Vérifiez si la balise source existe à l'intérieur de l'élément audio
                let source = audio.querySelector('source');

                // Créez une URL pour le fichier audio sélectionné
                let audioURL = URL.createObjectURL(selectedFile);

                // Mettez le fichier audio sélectionné dans la balise source
                source.src = audioURL;

                // Mettez à jour le lecteur audio
                audio.load();
            } else {
                console.error("Audio file not found.");
            }
        }
    }
});


// AUDIO PLAYER 

let audio = document.getElementById("audioPlayer");
let source = document.getElementById("audioSource");

