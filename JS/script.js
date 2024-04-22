window.addEventListener('DOMContentLoaded',function(){
    const time = () =>{
        const date = new Date;

        // CURRENT DATE //
        let currentDay = date.getDate();
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();
        let fullDate = currentDay + '/' + currentMonth + '/' + currentYear;

        // CURRENT TIME //
        let currentHours = date.getHours() - 12;
        let currentMinutes = date.getMinutes();    
        let fullTime = currentHours + ':' + currentMinutes;

        // DISPLAY CURRENT DATE //
        let fullDateElement = document.getElementById('full-date');
        fullDateElement.textContent = fullDate;

        // DISPLAY CURRENT TIME //
        let fullTimeElement = document.getElementById('full-time');
        fullTimeElement.textContent = fullTime;
    }

    // UPDATE FUNCTION EACH SECOND
    setInterval(time,1000)
})











