document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bmi-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const h = parseFloat(document.getElementById('height').value) / 100;
    const w = parseFloat(document.getElementById('weight').value);
    if (!h || !w) {
      alert('Please enter a valid height and weight');
      return;
    }
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';
    document.getElementById('result').textContent =
      `Your BMI is ${bmi.toFixed(1)}, category: ${category}.`;
  });
});
