
function onDeviceReady()
{
    // Now safe to use the PhoneGap API
    alert ("Now safe to use the PhoneGap API");
    var db = openDatabase ("BSL", "1.0", "BSL", 65535);

    db.transaction (function (transaction)
    {
    var sql = "CREATE TABLE bloodsugar " +
    " (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
    "datetimelog DATETIME, " +
    "bloodsugar VARCHAR(5))";
    transaction.executeSql (sql, undefined, function ()
    {
    alert ("Table 'bloodsugar' created");
    }, error);
    });

    $("#insert").bind ("click", function (event)
    {
        var datetimelog = $("#timestamp").val ();
        var bloodsugar = $("#loginput").val ();

        db.transaction (function (transaction)
        {
            var sql = "INSERT INTO bloodsugar (datetimelog, bloodsugar) VALUES (?, ?)";
            transaction.executeSql (sql, [datetimelog, bloodsugar], function ()
            {
                alert ("Log inserted");
            }, error);
        });
    });

    timestamp();


    var keypadoutput = "";


    $("#Keypad_1").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "1";
        keypadupdate();
    });

    $("#Keypad_2").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "2";
        keypadupdate();
    });

    $("#Keypad_3").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "3";
        keypadupdate();
    });

    $("#Keypad_4").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "4";
        keypadupdate();
    });

    $("#Keypad_5").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "5";
        keypadupdate();
    });

    $("#Keypad_6").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "6";
        keypadupdate();
    });

    $("#Keypad_7").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "7";
        keypadupdate();
    });

    $("#Keypad_8").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "8";
        keypadupdate();
    });

    $("#Keypad_9").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "9";
        keypadupdate();
    });

    $("#Keypad_0").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + "0";
        keypadupdate();
    });

    $("#Keypad_period").bind ("click", function (event)
    {
        keypadoutput = keypadoutput + ".";
        keypadupdate();
    });

    $("#Keypad_backspace").bind ("click", function (event)
    {
        keypadoutput = keypadoutput.substring(0, keypadoutput.length - 1)
        keypadupdate();
    });


    function keypadupdate()

    {
        document.getElementById("loginput").value = keypadoutput;
        document.getElementById("loginput_p").innerHTML = keypadoutput;
    }



}

function ok ()
    {
        }

function error (transaction, err)
    {
        alert ("DB error : " + err.message);
        return false;
        }

