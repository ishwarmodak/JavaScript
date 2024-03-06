const butt = document.querySelectorAll(".butt")
const body = document.querySelector("body")

butt.forEach((c) => {
    console.log(c)
    c.addEventListener('click', (e) => {
        console.log(e);
        if (e.target.id === 'r') body.style.backgroundColor = 'red';
        if (e.target.id === 'y') body.style.backgroundColor = 'yellow';
        if (e.target.id === 'o') body.style.backgroundColor = 'orange';
        if (e.target.id === 'p') body.style.backgroundColor = 'pink';
    })
})
