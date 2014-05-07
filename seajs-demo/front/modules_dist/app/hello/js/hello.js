/**
 * @author
 * @desc
 */
define("app/hello/js/hello", [ "/front/lib/jquery/2.0.3/jquery.js", "components/alert/js/alert.js", "components/alert/css/alert.css", "components/alert/htpl/tpl.alert.js" ], function(require, exports, module) {
    var $ = require("/front/lib/jquery/2.0.3/jquery.js");
    var Alert = require("alert.js");
    $("#click").click(function() {
        Alert("Seajs modules!");
    });
});