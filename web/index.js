document.addEventListener('DOMContentLoaded', function () {

    // ELEMENTS INITS
    let runButton = document.getElementById("runButton");
    let runSVG = document.getElementById("runSVG");
    let fileInput = document.getElementById('fileInput');
    let audio = document.getElementById("audioPlayer");
    let source = document.getElementById("audioSource");
    let fileName = document.getElementById("fileName");

    // PRE-USE CONFIG
    runButton.disabled = true;
    runSVG.style.opacity = "0.2";
    runSVG.style.cursor = "not-allowed";

    // LISTENERS
    fileInput.addEventListener('change', handleFileSelect);

    // FUNCTIONS
    function handleFileSelect(event) {
        // Obtenez l'élément d'entrée de fichier
        let input = event.target;

        // Assurez-vous qu'un fichier a été sélectionné
        if (input.files && input.files[0]) {
            // Accédez au fichier sélectionné
            let selectedFile = input.files[0];

            input.disabled = true;
            runButton.disabled = false;
            runSVG.style.opacity = "1";
            runSVG.style.cursor = "pointer";

            // Fonction appelée avant le rechargement de la page
            window.onbeforeunload = function () {
                return "You are about to leave this and delete unsaved changes, are you sure ?";
            };

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

                fileName.textContent = selectedFile.name;

                // Mettez à jour le lecteur audio
                audio.load();
            } else {
                console.error("Audio file not found.");
            }
        }
    }

    function test() {

        alert('fzzeef');

    }
});



