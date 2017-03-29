import Vue from 'vue'
import Vuex from 'vuex'
// 模块

import pathMap from './modules/pathMap.js'
import loginModule from './modules/login.js'
import dialogModule from './modules/dialog.js'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        loginModule,
        dialogModule,
        pathMap
    }
});
