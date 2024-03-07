const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#h').value)
    const weight = parseInt(document.querySelector('#w').value)
    const result = document.querySelector('#result')
    console.log(height);
    if (height === '' || height < 0 || isNaN(height)) result.innerHTML = "Enter a valid input"
    else {
        if (weight === '' || weight < 0 || isNaN(weight)) result.innerHTML = "Enter a valid input"
        else {
            const bmi = (weight / ((height * height) / 10000).toFixed(2))
            result.innerHTML = `<span>${bmi}</span>`;
        }
    }

})