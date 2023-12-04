document.addEventListener('DOMContentLoaded', function () {

    // ELEMENTS INITS
    const runButton = document.getElementById("runButton");
    const runSVG = document.getElementById("runSVG");
    const fileInput = document.getElementById('fileInput');
    const audio = document.getElementById("audioPlayer");
    const source = document.getElementById("audioSource");
    const fileName = document.getElementById("fileName");

    // PRE-USE CONFIG
    runButton.disabled = true;
    runSVG.style.opacity = "0.2";
    runSVG.style.cursor = "not-allowed";

    // LISTENERS
    fileInput.addEventListener('change', handleFileSelect);
    runButton.addEventListener('click', run);

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

    function run() {

        alert('Lancé !');

    }
});



