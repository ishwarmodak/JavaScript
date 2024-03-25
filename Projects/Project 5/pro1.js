const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const d = parseInt(document.querySelector('#d').value)
    const r = parseInt(document.querySelector('#r').value)
    const d2 = parseInt(document.querySelector('#d2').value)
    const ans = document.querySelector('.ans')
    if (d === 1 || r === 1 || d2 === 1) {
        ans.innerHTML = "Yes"
    } else {
        ans.innerHTML = "No"
    }

})