function calculateMinGrade() {
  let currentAve = parseFloat(document.getElementById("currentAve").value);
  let testWeight = (parseInt(document.getElementById("testWeight").value)) / 100;
  let minFinal = parseFloat(document.getElementById("minFinal").value);

  currentWeight = 1 - testWeight

  minTestGrade = ((minFinal - (currentAve * currentWeight)) / testWeight)
  minTestGrade = minTestGrade.toFixed(0);

  document.getElementById("result").textContent = `Minimum Test Grade: ${minTestGrade}`;
}