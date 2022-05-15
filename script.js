let minutesHTML = document.querySelector(".minutes")
let hoursHTML = document.querySelector(".hours")
let secondsHTMl = document.querySelector(".seconds")
let timeSelector = document.querySelector(".am-pm")
let body = document.querySelector("body")
let alarmTime = document.querySelector(".alarm-time")
let alarmStop = document.querySelector(".alarm-stop")
let alarmSet = document.querySelector(".alarm-set")
let alarmWrapper = document.querySelector(".set-wrapper")
let setText = document.querySelector(".text")
let audio = document.querySelector("audio")

function startTime() {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    hoursHTML.innerHTML = hours
    minutesHTML.innerHTML = minutes
    secondsHTMl.innerHTML = seconds

    if (hours > 12) {
        hours -= 12
        hoursHTML.innerHTML = hours
        timeSelector.innerHTML = " PM"
    } else if (hours < 12) { timeSelector.innerHTML = " AM" }

    if (minutes <= 9) {
        minutes = `0${minutes}`
        minutesHTML.innerHTML = minutes
    }

    if (seconds <= 9) {
        seconds = `0${seconds}`
        secondsHTMl.innerHTML = seconds
    }

    let time = `${hours}:${minutes}`

    if (alarmTime.value == time) {
        body.style.backgroundColor = "white"
        alarmStop.className = "alarm-active"
        alarmStop = document.querySelector(".alarm-active")
        audio.play()
    }

    alarmStop.onclick = function () {
        audio.pause()
        body.style.backgroundColor = "Black"
        alarmStop.className = "alarm-stop"
        alarmStop = document.querySelector(".alarm-stop")
        alarmWrapper.className = "set-visible"
        alarmWrapper = document.querySelector(".set-visible")
        alarmTime.value = ""
        setText.className = ""
    }

    alarmSet.onclick = function () {
        alarmWrapper.className = "set-invisible"
        alarmWrapper = document.querySelector(".set-invisible")
        setText.className = "text-fadein"
    }

    setInterval(startTime, 1000)
}
startTime()

