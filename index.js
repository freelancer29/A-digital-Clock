const hourE1 = document.getElementById('hour');
const minuteE1 = document.getElementById('minute');
const secondE1 = document.getElementById('second');
const ampmE1 = document.getElementById('ampm');

function digitalClock() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = 'PM';

    if (h > 24) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    
    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    ampmE1, (innerHTML = ampm)
    setTimeout(()=> {
        digitalClock()
    }, 1000)
}
digitalClock();