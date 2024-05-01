document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    function handleClick() {
        const value = this.dataset.value;

        // Réinitialiser resultDisplayed si un chiffre est cliqué après avoir affiché un résultat
        if (resultDisplayed && !['AC', 'DEL', '='].includes(value) && isNaN(parseInt(value))) {
            display.value = ''; // Effacer le champ d'affichage pour commencer une nouvelle opération
            resultDisplayed = false; // Réinitialiser resultDisplayed pour permettre l'ajout d'opérateurs
        }

        if (value === 'AC') {
            display.value = '';
            resultDisplayed = false; // Réinitialiser resultDisplayed lorsque AC est pressé
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
            resultDisplayed = true;
        } else {
            if (value === '.' && display.value.includes('.')) {
                return; // Empêcher l'ajout de plusieurs décimales
            }
            display.value += value;
        }
    }
});
