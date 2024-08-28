function convertToBinary() {
  // Récupérer la valeur saisie par l'utilisateur
  const decimalInput = document.getElementById("decimalInput").value.trim();

  // Convertir l'entrée en nombre
  const decimalNumber = Number(decimalInput);

  // Vérifier si l'entrée est un nombre valide et entier
  if (
    isNaN(decimalNumber) ||
    !Number.isInteger(decimalNumber) ||
    decimalNumber < 0
  ) {
    document.getElementById("binaryResult").textContent = "";
    return;
  }

  // Convertir le nombre décimal en binaire
  const binaryResult = decimalNumber.toString(2);

  // Afficher le résultat binaire
  document.getElementById(
    "binaryResult"
  ).textContent = `Résultat binaire: ${binaryResult}`;
}
