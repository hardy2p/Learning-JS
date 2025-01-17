const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let ans;
    if (bmi < 18.6) {
      ans = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      ans = 'Normal';
    } else {
      ans = 'Over Weight';
    }
    result.innerHTML = `Your BMI is${bmi}. You are ${ans}`;
  }
});
