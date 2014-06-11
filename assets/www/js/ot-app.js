
function onDeviceReady()
{
    timestamp();
    // Now safe to use the PhoneGap API
    var db = openDatabase ("BSL", "1.0", "BSL", 65535);

    db.transaction (function (transaction)
    {
    var sql = "CREATE TABLE bloodsugar " +
    " (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
    "datetimelog DATETIME, " +
    "bloodsugar VARCHAR(5))";
    transaction.executeSql (sql, undefined, function ()
    {
    }, error);
    });

    $("#loginputbutton").bind ("click", function (event)
    {
        timestamp();
        var datetimelog = $("#timestamp").val ();
        var bloodsugar = $("#loginput").val ();

        db.transaction (function (transaction)
        {
            var sql = "INSERT INTO bloodsugar (datetimelog, bloodsugar) VALUES (?, ?)";
            transaction.executeSql (sql, [datetimelog, bloodsugar], function ()
            {
                alert ("Log inserted");
                document.getElementById('loginput').innerHTML="";
            }, error);
        });

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

function viewLog(){

    $("#ViewLog div:jqmData(role=content)").html ("");


var resultshtml = "";

    var db = openDatabase ("BSL", "1.0", "BSL", 65535);
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM bloodsugar ORDER BY id DESC', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++){

                resultshtml += "<li data-icon=delete>";
                resultshtml += "<a href=#>"+ results.rows.item(i).datetimelog + "</br>Bloodsugar: " + results.rows.item(i).bloodsugar + "</a>";
                resultshtml += "</li>";

            }

            var html = "";
            html += "<ul id=list1 data-role=listview>";
            html += resultshtml;
            html += "<li></li>"
            html += "</ul>";
            $("#ViewLog div:jqmData(role=content)").append (html);

            $("#list1").listview();

        }, null);

    });



}



