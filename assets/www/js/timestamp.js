    var d = new Date();

    var year = d.getFullYear();

    var month = d.getMonth();
    if (month <10)
    {
        month = "0" + month;
    }

    var date = d.getDate();
    if (date < 10)
    {
        date = "0" + date;
    }

    var hours = d.getHours();
    if (hours < 10)
    {
        hours = "0" + hours;
    }

    var minutes = d.getMinutes();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    var seconds = d.getSeconds();
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }


    document.getElementById("#timestamp").value = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

