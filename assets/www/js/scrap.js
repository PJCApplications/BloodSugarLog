/**
 * Created by Pauls on 04/06/2014.
 */


//Comment...................................................................................................


/*$("#remove").bind ("click", function (event)
 {
 if (!confirm ("Delete table?", "")) return;;
 db.transaction (function (transaction)
 {
 var sql = "DROP TABLE bloodsugar";
 transaction.executeSql (sql, undefined, ok, error);
 });
 });

 $("#insert").bind ("click", function (event)
 {
 var datetimelog = $("#datetimelog").val ();
 var log = $("#loginput").val ();

 db.transaction (function (transaction)
 {
 var sql = "INSERT INTO overtime (datetimelog, log) VALUES (?, ?)";
 transaction.executeSql (sql, [datetimelog, log], function ()
 {
 alert ("Log inserted");
 }, error);
 });
 });

 $("#list").bind ("click", function (event)
 {
 db.transaction (function (transaction)
 {
 var sql = "SELECT * FROM bloodsugar";
 transaction.executeSql (sql, undefined,
 function (transaction, result)
 {
 var html = "<ul>";
 if (result.rows.length)
 {
 for (var i = 0; i < result.rows.length; i++)
 {
 var row = result.rows.item (i);
 var id = row.id;
 var datetimelog = row.datetimelog;
 var log = row.log;

 html += "<li>" +
 id + "&nbsp;" +
 datetimelog + "&nbsp;" +
 log + "&nbsp;" +
 "</li>";
 }
 }
 else
 {
 html += "<li> No Logs </li>";
 }

 html += "</ul>";

 $("#win2").unbind ().bind ("pagebeforeshow", function ()
 {
 var $content = $("#win2 div:jqmData(role=content)");
 $content.html (html);
 var $ul = $content.find ("ul");
 $ul.listview ();
 });

 $.mobile.changePage ($("#win2"));

 }, error);
 });
 });*/



