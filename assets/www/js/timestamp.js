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

    document.getElementById("timestamp").innerHTML = year + "-" + month + "-" + date + " " + hours + ":" + minutes;

