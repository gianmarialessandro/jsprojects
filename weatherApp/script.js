
const METEOAPIBERLIN = "http://api.weatherstack.com/current?access_key=b649a42ca7b9f6897b9e39a1b980334e&query=Berlin";
//   http://api.weatherstack.com/current?access_key=b649a42ca7b9f6897b9e39a1b980334e&query=New%20York

const body = document.querySelector('body')

getMeteo(METEOAPIBERLIN);

async function getMeteo(url) {
    const res = await fetch(url);
    const resData = await res.json();
    
    // console.log(resData)

    const container = document.createElement('div');
    container.classList.add('container');

    const { temperature, weather_icons,  } = resData.current
    const { localtime, name } = resData.location

    let time = localtime.slice(11, 16)
    let day = localtime.slice(8, 10)
    let month = localtime.slice(5, 7)
    // console.log(day, month, time)



    container.innerHTML = `
        <div class="city">
            <h2>${name}</h2>
        </div>
        <div class="temp">
            <h2>${temperature}°</h2>
        </div>
        <div class="icon">
            <img src="${weather_icons}" alt="">
        </div>
        <div class="time">
            <h2>${day}/${month} - ${time}</h2>
        </div> 
    `;

    body.appendChild(container)
    
    

}


