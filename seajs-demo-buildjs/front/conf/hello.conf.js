(function(){
    seajs.config({
        base: '/front/modules',

        alias: {
            // {@alias
            // {@ignore
            'jquery': '/front/lib/jquery/2.0.3/jquery.js',
            // @ignore}
            'hello.js': 'app/hello/js/hello.js',
            'alert.js': 'components/alert/js/alert.js'
            // @alias}
        },

        debug: true,

        map: [
            //['modules', 'modules_dist']
        ]
    });
})()