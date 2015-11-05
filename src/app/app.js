'use strict';

angular.module('angularBrowserfyModuleApp', [
        'ui.router',
        'ct.ui.router.extras',
        'oc.lazyLoad',
        'templates-app'
        // require('./common'),
    ]).controller('AppCtrl', require('./appCtrl'))
    .config(require('./routes'));
