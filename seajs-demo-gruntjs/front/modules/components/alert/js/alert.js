/**
 * @author
 * @desc
 */
define(function(require, exports, module){
    require('components/alert/css/alert.css');
    var $ = require('jquery');
    var tpl = require('components/alert/htpl/tpl.alert.js');
    var id = 0;

    function show(txt){
        var $tpl = $(tpl.replace(/\{id\}/g, id++).replace('{txt}', txt));
        $tpl.appendTo($('body')).show();
        $tpl.find('[data-rel="alert-ok"]').click(hide);
    }

    function hide(){
        console.log($(this).attr('data-id'));
        $('#' + $(this).attr('data-id')).fadeOut(function(){
            $(this).remove();
        })
    }

    module.exports = show;
})
