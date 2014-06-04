
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
}

function ok ()
    {
        }

function error (transaction, err)
    {
        alert ("DB error : " + err.message);
        return false;
        }

$("#insert").bind ("click", function (event)
{
    alert ("Button clicked");
    var datetimelog = $("#timestamp").val ();
    var log = $("#loginput").val ();

    db.transaction (function (transaction)
    {
        var sql = "INSERT INTO bloodsugar (datetimelog, log) VALUES (?, ?)";
        transaction.executeSql (sql, [datetimelog, log], function ()
        {
            alert ("Log inserted");
        }, error);
    });
});