let time = document.querySelector('.timeText')
let dateParagraph = document.querySelector('.date')
let buttonLeft = document.querySelector('.left')
let buttonright = document.querySelector('.right')
randomNumber = getInt(10)
console.log(randomNumber)


buttonLeft.onclick = function () {
    randomNumber = randomNumber - 1
    setBg()
    if (randomNumber == 1)  {
        randomNumber = 11
    }
    
}

buttonright.onclick = function () {
    randomNumber = randomNumber + 1
    setBg()
    if (randomNumber == 10)  {
        randomNumber =1
    }
}




function showTime() {
    const date = new Date()
    let currentTime = date.toLocaleTimeString()
    time.textContent = currentTime

    const options = {
        month: 'long', 
        day: 'numeric'
    };
    const currentDate = date.toLocaleDateString('Ru-ru', options);
    dateParagraph.textContent = currentDate
    greeting()

    setTimeout(showTime, 1000)
}   

function getHour () {
    const date = new Date();
    const hours = date.getHours();
    return hours
}

console.log(getHour())

function getTimeOfDay () {
    if (getHour() >= 0 && getHour() < 6)  {
        return 'идите спать';
    }

    if (getHour() >= 6 && getHour() < 12)  {
        return 'доброе утро';
    }

    if (getHour() >= 12 && getHour() < 18)  {
        return 'добрый день';
    }

    if (getHour() >= 18 && getHour() <= 23)  {
        return 'добрый вечер';
    }
}

console.log(getTimeOfDay())

let greetingBlock = document.querySelector('.greeting')


function greeting () {
    let textGreeting = getTimeOfDay();
    greetingBlock.textContent = textGreeting
}

showTime()




function getInt (max) {
    let number = Math.floor(Math.random() * max )
    if (number == 0) {
        return 1
    }
    return number
}
console.log(getInt(11))



function setBg () {
    const img = new Image();
    img.src = `/bg${randomNumber}.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `url(https://maaaaaryyyyyyyyyyy.github.io/KEBERone/${img.src})`
    }
}

setBg()
