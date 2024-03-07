const time = document.querySelector('.clock')
time.innerHTML = "B"
setInterval(() => {
    const date = new Date()

    console.log(date)
    time.innerHTML = date.toLocaleTimeString();
}, 1000);