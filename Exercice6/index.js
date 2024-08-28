// Fonction pour ajouter un caractère au display
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Fonction pour calculer le résultat de l'expression
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Vérifier si la division par zéro est tentée
    if (display.value.includes("/0")) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Erreur";
  }
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}
