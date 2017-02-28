// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "e:\\ihm\\dmc\\dmc-webpage\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
for (var name in module) {
__vue_options__.style[name] = module[name]
}
})

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = function (time, formatStr) {
    var nowDate = new Date(time);
    var str = formatStr;

    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, nowDate.getFullYear());
    str = str.replace(/yy|YY/, nowDate.getYear() % 100 > 9 ? (nowDate.getYear() % 100).toString() : '0' + nowDate.getYear() % 100);
    str = str.replace(/MM/, nowDate.getMonth() + 1 > 9 ? (nowDate.getMonth() + 1).toString() : '0' + (nowDate.getMonth() + 1));
    str = str.replace(/M/g, nowDate.getMonth() + 1);
    str = str.replace(/w|W/g, Week[nowDate.getDay()]);
    str = str.replace(/dd|DD/, nowDate.getDate() > 9 ? nowDate.getDate().toString() : '0' + nowDate.getDate());
    str = str.replace(/d|D/g, nowDate.getDate());
    str = str.replace(/hh|HH/, nowDate.getHours() > 9 ? nowDate.getHours().toString() : '0' + nowDate.getHours());
    str = str.replace(/h|H/g, nowDate.getHours());
    str = str.replace(/mm/, nowDate.getMinutes() > 9 ? nowDate.getMinutes().toString() : '0' + nowDate.getMinutes());
    str = str.replace(/m/g, nowDate.getMinutes());
    str = str.replace(/ss|SS/, nowDate.getSeconds() > 9 ? nowDate.getSeconds().toString() : '0' + nowDate.getSeconds());
    str = str.replace(/s|S/g, nowDate.getSeconds());
    return str;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vueI18n = __webpack_require__(6);

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _dataFormat = __webpack_require__(1);

var _dataFormat2 = _interopRequireDefault(_dataFormat);

var _locales = __webpack_require__(4);

var _locales2 = _interopRequireDefault(_locales);

var _echarts_locales = __webpack_require__(3);

var _echarts_locales2 = _interopRequireDefault(_echarts_locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var stream = weex.requireModule('stream');
var picker = weex.requireModule('picker');

var Y_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/queryBIbizTDeviceUserDaily.action';
var T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
var D_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getTrainBusYtjDevNum.action';
var U_URL = 'http://139.217.23.179:8080/metrics/talkingdata/users/daily';

Vue.use(_vueI18n2.default);
Vue.config.lang = 'cn';
storage.getItem('language', function (ev) {
    Vue.config.lang = ev.data && ev.data != 'undefined' ? ev.data : 'cn';
});
Object.keys(_locales2.default).forEach(function (lang) {
    Vue.locale(lang, _locales2.default[lang]);
});

Vue.filter("format_time", function (str) {
    return (0, _dataFormat2.default)(str, "YYYY-MM-DD hh:mm");
});
Vue.filter("number", function (n) {
    return n > 10000 ? (n / 10000).toFixed(1) + 'W' : n;
});
Vue.filter("minute", function (n) {
    return (n / 60).toFixed(1) + 'min';
});

exports.default = {
    data: function data() {
        return {
            isBrowser: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object',
            now: Date.now(),
            today_detail: {},
            yesterday_all: [],
            today_all: [],
            device_all: [],
            user_all: []
        };
    },

    computed: {
        url: function url() {
            var str = this.isBrowser ? './dist/' : './';
            return str + 'v-echarts.html#' + Vue.config.lang;
        },
        newAmp: function newAmp() {
            return this.countAmp("new");
        },
        activeAmp: function activeAmp() {
            return this.countAmp("active");
        },
        totalAmp: function totalAmp() {
            return this.countAmp("total");
        },
        durationAmp: function durationAmp() {
            return this.countAmp("duration");
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.get();

        setInterval(function () {
            _this.now = Date.now();
            _this.get();
        }, 60000);
    },

    methods: {
        countAmp: function countAmp(name) {
            if (this.user_all.length == 0) {
                return "";
            }
            return ((this.user_all[1][name] - this.user_all[2][name]) / this.user_all[2][name] * 100).toFixed(2) + '%';
        },
        get: function get() {
            var _this2 = this;

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: Y_URL,
                body: ''
            }, function (data) {
                if (data.ok) {
                    var arr = data.data;
                    var yesterday_all = [{}, {}, {}];
                    arr.sort(function (a, b) {
                        return a.userType - b.userType;
                    });
                    for (var i = 0; i < arr.length; i++) {
                        yesterday_all[i].trainUser = arr[i].trainUser - 0;
                        yesterday_all[i].busUser = arr[i].busUser - 0;
                        yesterday_all[i].ytjUser = arr[i].ytjUser - 0;
                    }
                    _this2.yesterday_all = yesterday_all;
                } else {
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: T_URL,
                body: ''
            }, function (data) {
                if (data.ok) {
                    var arr = data.data;
                    var today_detail = {
                        x_data: [], // time
                        r_user: [], // real_users
                        c_user: [], // connected_users
                        a_user: [] // active_users
                    };
                    var today_all = [{}, {}, {}];
                    for (var i = 0; i < arr.length; i++) {
                        switch (arr[i].userType) {
                            case 1:
                                today_all[0].trainUser = arr[i].trainUser - 0;
                                today_all[0].busUser = arr[i].busUser - 0;
                                today_all[0].ytjUser = arr[i].ytjUser - 0;
                                break;
                            case 2:
                                today_all[1].trainUser = arr[i].trainUser - 0;
                                today_all[1].busUser = arr[i].busUser - 0;
                                today_all[1].ytjUser = arr[i].ytjUser - 0;
                                break;
                            case 3:
                                today_all[2].trainUser = arr[i].trainUser - 0;
                                today_all[2].busUser = arr[i].busUser - 0;
                                today_all[2].ytjUser = arr[i].ytjUser - 0;
                                break;
                        }
                    }

                    var LAST_DAY = (0, _dataFormat2.default)(Date.now() - 1000 * 3600 * 24, "YYYYMMDD");
                    for (var i = 0; i < arr.length; i++) {
                        var json = arr[i];
                        if (json.dayId == LAST_DAY) {
                            json.timeId = '\u6628' + json.timeId;
                        }
                        switch (json.userType) {
                            case 1:
                                today_detail.x_data.push(json.timeId);
                                today_detail.r_user.push(json.totalUser);
                                break;
                            case 2:
                                today_detail.c_user.push(json.totalUser);
                                break;
                            case 3:
                                today_detail.a_user.push(json.totalUser);
                                break;
                        }
                    }
                    _this2.today_detail = today_detail;
                    _this2.today_all = today_all;
                } else {
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: D_URL,
                body: ''
            }, function (data) {
                if (data.ok) {
                    var arr = data.data;
                    var device_all = [{}, {}, {}];
                    for (var i = 0; i < arr.length; i += 3) {
                        for (var j = 0; j < 3; j++) {
                            switch (arr[i + j].carType) {
                                case 1:
                                    device_all[0].trainUser = arr[i + j].sumTodayActive;
                                    device_all[1].trainUser = arr[i + j].sumTodayOnline;
                                    device_all[2].trainUser = arr[i + j].sumOnline;
                                    break;
                                case 2:
                                    device_all[0].busUser = arr[i + j].sumTodayActive;
                                    device_all[1].busUser = arr[i + j].sumTodayOnline;
                                    device_all[2].busUser = arr[i + j].sumOnline;
                                    break;
                                case 11:
                                    device_all[0].ytjUser = arr[i + j].sumTodayActive;
                                    device_all[1].ytjUser = arr[i + j].sumTodayOnline;
                                    device_all[2].ytjUser = arr[i + j].sumOnline;
                                    break;
                            }
                        }
                    }
                    _this2.device_all = device_all;
                } else {
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: U_URL,
                body: ''
            }, function (data) {
                if (data.ok) {
                    var arr = data.data.result.data;
                    var user_all = [];
                    for (var name in arr) {
                        var json = Object.assign({ date: name }, arr[name]);
                        user_all.push(json);
                    }
                    _this2.user_all = user_all.sort(function (a, b) {
                        return _this2.format2Time(b.date) - _this2.format2Time(a.date);
                    }).slice(0, 3);
                } else {
                    console.error(data);
                }
            });
        },
        format2Time: function format2Time(time) {
            var y = time.substr(0, 4),
                M = time.substr(5, 2) - 1,
                d = time.substr(8, 2),
                h = time.substr(11, 2) || 0,
                m = time.substr(14, 2) || 0,
                s = time.substr(17, 2) || 0;
            var nowDate = new Date();
            nowDate.setFullYear(y, M, d);
            nowDate.setHours(h, m, s);
            return nowDate.getTime();
        },
        lang: function lang() {
            var index = Vue.config.lang == 'en' ? 0 : 1;
            if (this.isBrowser) {
                console.warn('only app support,play use weex');
            } else {
                picker.pick({
                    index: index,
                    items: ['English', '中文']
                }, function (ret) {
                    if (ret.result == 'success') {
                        Vue.config.lang = ret.data == 0 ? 'en' : 'cn';
                        stream.setItem('language', Vue.config.lang);
                    }
                });
            }
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"cn": {
		"e_title": "用户详情",
		"e_actual": "实际用户",
		"e_connect": "连接用户",
		"e_active": "活跃用户"
	},
	"en": {
		"e_title": "User Details",
		"e_actual": "Actual User",
		"e_connect": "Connect User",
		"e_active": "Active Users"
	}
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"cn": {
		"vtime": "当前时间",
		"Portal": {
			"hourly": "Portal小时数据统计",
			"yesterday": "Portal昨日数据统计",
			"train": "火车",
			"bus": "大巴",
			"ytj": "一体机",
			"total": "总计",
			"actual": "实际用户",
			"connect": "已连接用户",
			"active": "活跃用户"
		},
		"equip": {
			"title": "设备安装统计",
			"active": "设备活跃数",
			"online": "设备在线数",
			"install": "设备安装数"
		},
		"wangfan": {
			"application": "往返应用统计表",
			"newU": "新增用户",
			"active": "活跃用户",
			"total": "用户总数",
			"duration": "使用时长",
			"increase": "增幅"
		},
		"explain": [
			"实际用户　: 已看见自弹页的用户",
			"已连接用户: 已经进入首页的用户",
			"活跃用户　: 已有用户行为的用户",
			"设备活跃数: 今天有用户连接的设备数量",
			"设备在线数: 今天有上电联网的设备数量",
			"设备安装数: 截至今天已安装的设备数量"
		],
		"language": "语言"
	},
	"en": {
		"vtime": "current time",
		"Portal": {
			"hourly": "Portal of hourly data statistics",
			"yesterday": "Portal yesterday's data statistics",
			"train": "train",
			"bus": "Bus",
			"ytj": "YTJ",
			"total": "Total",
			"actual": "Actual User",
			"connect": "Connect User",
			"active": "Active Users"
		},
		"equip": {
			"title": "Equipment installation statistics",
			"active": "Device Active",
			"online": "Equip Online",
			"install": "Equip Install"
		},
		"wangfan": {
			"application": "Wangfan Application Statistics",
			"newU": "New Users",
			"active": "Active Users",
			"total": "Total",
			"duration": "Duration",
			"increase": "Increase"
		},
		"explain": [
			"Actual User: Users who have seen the page",
			"Connect User: Users who have entered the home page",
			"Active Users: User behavior",
			"Device Active: Today there is a number of devices connected to the user",
			"Equipment Online: Today, the number of equipment connected to the network",
			"Equipment Installation: Number of devices installed as of today"
		],
		"language": "Language"
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*!
 * vue-i18n v5.0.2 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */


/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

function warn (msg, err) {
  if (window.console) {
    console.warn('[vue-i18n] ' + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}

var Asset = function (Vue, langVM) {
  /**
   * Register or retrieve a global locale definition.
   *
   * @param {String} id
   * @param {Object | Function | Promise} definition
   * @param {Function} cb
   */

  Vue.locale = function (id, definition, cb) {
    if (definition === undefined) { // getter
      return langVM.locales[id]
    } else { // setter
      if (definition === null) {
        langVM.locales[id] = undefined;
        delete langVM.locales[id];
      } else {
        setLocale(id, definition, function (locale) {
          if (locale) {
            langVM.$set(langVM.locales, id, locale);
          } else {
            warn('failed set `' + id + '` locale');
          }
          cb && cb();
        });
      }
    }
  };
};


function setLocale (id, definition, cb) {
  if (typeof definition === 'object') { // sync
    cb(definition);
  } else {
    var future = definition.call(this);
    if (typeof future === 'function') {
      if (future.resolved) {
        // cached
        cb(future.resolved);
      } else if (future.requested) {
        // pool callbacks
        future.pendingCallbacks.push(cb);
      } else {
        future.requested = true;
        var cbs = future.pendingCallbacks = [cb];
        future(function (locale) { // resolve
          future.resolved = locale;
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](locale);
          }
        }, function () { // reject
          cb();
        });
      }
    } else if (isPromise(future)) { // promise
      future.then(function (locale) { // resolve
        cb(locale);
      }, function () { // reject
        cb();
      }).catch(function (err) {
        console.error(err);
        cb();
      });
    }
  }
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise (p) {
  return p && typeof p.then === 'function'
}

var Override = function (Vue, langVM) {
  // override _init
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var this$1 = this;

    init.call(this, options);

    if (!this.$parent) { // root
      this._$lang = langVM;
      this._langUnwatch = this._$lang.$watch('$data', function (val, old) {
        this$1.$forceUpdate();
      }, { deep: true });
    }
  };

  // override _destroy
  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this.$parent && this._langUnwatch) {
      this._langUnwatch();
      this._langUnwatch = null;
      this._$lang = null;
    }

    destroy.apply(this, arguments);
  };
};

/**
 * Observer
 */

var Watcher;
/**
 * getWatcher
 *
 * @param {Vue} vm
 * @return {Watcher}
 */

function getWatcher (vm) {
  if (!Watcher) {
    var unwatch = vm.$watch('__watcher__', function (a) {});
    Watcher = vm._watchers[0].constructor;
    unwatch();
  }
  return Watcher
}

var Dep;
/**
 * getDep
 *
 * @param {Vue} vm
 * @return {Dep}
 */

function getDep (vm) {
  if (!Dep && vm && vm._data && vm._data.__ob__ && vm._data.__ob__.dep) {
    Dep = vm._data.__ob__.dep.constructor;
  }
  return Dep
}

var fallback; // fallback lang
var missingHandler = null; // missing handler
var i18nFormatter = null; // custom formatter

var Config = function (Vue, langVM, lang) {
  var ref = Vue.util;
  var bind = ref.bind;
  var Watcher = getWatcher(langVM);
  var Dep = getDep(langVM);

  function makeComputedGetter (getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });

    return function computedGetter () {
      watcher.dirty && watcher.evaluate();
      Dep && Dep.target && watcher.depend();
      return watcher.value
    }
  }

  // define Vue.config.lang configration
  Object.defineProperty(Vue.config, 'lang', {
    enumerable: true,
    configurable: true,
    get: makeComputedGetter(function () { return langVM.lang }, langVM),
    set: bind(function (val) { langVM.lang = val; }, langVM)
  });

  // define Vue.config.fallbackLang configration
  fallback = lang;
  Object.defineProperty(Vue.config, 'fallbackLang', {
    enumerable: true,
    configurable: true,
    get: function () { return fallback },
    set: function (val) { fallback = val; }
  });

  // define Vue.config.missingHandler configration
  Object.defineProperty(Vue.config, 'missingHandler', {
    enumerable: true,
    configurable: true,
    get: function () { return missingHandler },
    set: function (val) { missingHandler = val; }
  });

  // define Vue.config.i18Formatter configration
  Object.defineProperty(Vue.config, 'i18nFormatter', {
    enumerable: true,
    configurable: true,
    get: function () { return i18nFormatter },
    set: function (val) { i18nFormatter = val; }
  });
};

/**
 * utilites
 */

/**
 * isNil
 *
 * @param {*} val
 * @return Boolean
 */
function isNil (val) {
  return val === null || val === undefined
}

/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;


var Format = function (Vue) {
  var ref = Vue.util;
  var hasOwn = ref.hasOwn;

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template (string) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0];
    } else {
      args = {};
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result;

      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : match;
        if (isNil(result)) {
          return ''
        }

        return result
      }
    })
  }

  return template
};

/**
 *  Path paerser
 *  - Inspired:
 *    Vue.js Path parser
 */

// cache
var pathCache = Object.create(null);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType (ch) {
  if (ch === undefined) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) { return 'number' }

  return 'else'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath (path) {
  var hit = pathCache[path];
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache[path] = hit;
    }
  }
  return hit
}

var Path = function (Vue) {
  var ref = Vue.util;
  var isObject = ref.isObject;
  var isPlainObject = ref.isPlainObject;
  var hasOwn = ref.hasOwn;

  function empty (target) {
    if (target === null || target === undefined) { return true }

    if (Array.isArray(target)) {
      if (target.length > 0) { return false }
      if (target.length === 0) { return true }
    } else if (isPlainObject(target)) {
      /* eslint-disable prefer-const */
      for (var key in target) {
        if (hasOwn(target, key)) { return false }
      }
      /* eslint-enable prefer-const */
    }

    return true
  }

  /**
   * Get value from path string
   *
   * @param {Object} obj
   * @param {String} path
   * @return value
   */

  function getValue (obj, path) {
    if (!isObject(obj)) { return null }

    var paths = parsePath(path);
    if (empty(paths)) { return null }

    var length = paths.length;
    var ret = null;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        last = null;
        break
      }
      last = value;
      i++;
    }

    ret = last;
    return ret
  }

  return getValue
};

/**
 * extend
 *
 * @param {Vue} Vue
 * @return {Vue}
 */

var Extend = function (Vue) {
  var ref = Vue.util;
  var isObject = ref.isObject;
  var bind = ref.bind;
  var format = Format(Vue);
  var getValue = Path(Vue);

  function parseArgs () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var lang = Vue.config.lang;
    var fallback = Vue.config.fallbackLang;

    if (args.length === 1) {
      if (isObject(args[0]) || Array.isArray(args[0])) {
        args = args[0];
      } else if (typeof args[0] === 'string') {
        lang = args[0];
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        lang = args[0];
      }
      if (isObject(args[1]) || Array.isArray(args[1])) {
        args = args[1];
      }
    }

    return { lang: lang, fallback: fallback, params: args }
  }

  function exist (locale, key) {
    if (!locale || !key) { return false }
    return !isNil(getValue(locale, key))
  }

  function interpolate (locale, key, args) {
    if (!locale) { return null }

    var val = getValue(locale, key);
    if (Array.isArray(val)) { return val }
    if (isNil(val)) { val = locale[key]; }
    if (isNil(val)) { return null }
    if (typeof val !== 'string') { warn("Value of key '" + key + "' is not a string!"); return null }

    // Check for the existance of links within the translated string
    if (val.indexOf('@:') >= 0) {
      // Match all the links within the local
      // We are going to replace each of
      // them with its translation
      var matches = val.match(/(@:[\w|.]+)/g);
      for (var idx in matches) {
        var link = matches[idx];
        // Remove the leading @:
        var linkPlaceholder = link.substr(2);
        // Translate the link
        var translatedstring = interpolate(locale, linkPlaceholder, args);
        // Replace the link with the translated string
        val = val.replace(link, translatedstring);
      }
    }

    return !args
      ? val
      : Vue.config.i18nFormatter
        ? Vue.config.i18nFormatter.apply(null, [val].concat(args))
        : format(val, args)
  }

  function translate (getter, lang, fallback, key, params) {
    var res = null;
    res = interpolate(getter(lang), key, params);
    if (!isNil(res)) { return res }

    res = interpolate(getter(fallback), key, params);
    if (!isNil(res)) {
      if (process.env.NODE_ENV !== 'production') {
        warn('Fall back to translate the keypath "' + key + '" with "' +
          fallback + '" language.');
      }
      return res
    } else {
      return null
    }
  }


  function warnDefault (lang, key, vm, result) {
    if (!isNil(result)) { return result }
    if (Vue.config.missingHandler) {
      Vue.config.missingHandler.apply(null, [lang, key, vm]);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn('Cannot translate the value of keypath "' + key + '". ' +
          'Use the value of keypath as default');
      }
    }
    return key
  }

  function getAssetLocale (lang) {
    return Vue.locale(lang)
  }

  function getComponentLocale (lang) {
    return this.$options.locales[lang]
  }

  function getOldChoiceIndexFixed (choice) {
    return choice ? choice > 1 ? 1 : 0 : 1
  }

  function getChoiceIndex (choice, choicesLength) {
    choice = Math.abs(choice);

    if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

    return choice ? Math.min(choice, 2) : 0
  }

  function fetchChoice (locale, choice) {
    if (!locale && typeof locale !== 'string') { return null }
    var choices = locale.split('|');

    choice = getChoiceIndex(choice, choices.length);
    if (!choices[choice]) { return locale }
    return choices[choice].trim()
  }

  /**
   * Vue.t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    return warnDefault(lang, key, null, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * Vue.tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    return fetchChoice(Vue.t.apply(Vue, [ key ].concat( args )), choice)
  };

  /**
   * Vue.te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   */

  Vue.te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    return exist(getAssetLocale(lang), key)
  };

  /**
   * $t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    var res = null;
    if (this.$options.locales) {
      res = translate(
        bind(getComponentLocale, this), lang, fallback, key, params
      );
      if (res) { return res }
    }
    return warnDefault(lang, key, this, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * $tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    if (typeof choice !== 'number' && typeof choice !== 'undefined') {
      return key
    }
    return fetchChoice((ref = this).$t.apply(ref, [ key ].concat( args )), choice)
    var ref;
  };

  /**
   * $te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   *
   */

  Vue.prototype.$te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var found = false;
    if (this.$options.locales) { // exist component locale
      found = exist(bind(getComponentLocale)(lang), key);
    }
    if (!found) {
      found = exist(getAssetLocale(lang), key);
    }
    return found
  };

  Vue.mixin({
    computed: {
      $lang: function $lang () {
        return Vue.config.lang
      }
    }
  });

  return Vue
};

var langVM; // singleton


/**
 * plugin
 *
 * @param {Object} Vue
 * @param {Object} opts
 */

function plugin (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;

  if (process.env.NODE_ENV !== 'production' && plugin.installed) {
    warn('already installed.');
    return
  }

  if (process.env.NODE_ENV !== 'production' && version < 2) {
    warn(("vue-i18n (" + (plugin.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  var lang = 'en';
  setupLangVM(Vue, lang);

  Asset(Vue, langVM);
  Override(Vue, langVM);
  Config(Vue, langVM, lang);
  Extend(Vue);
}

function setupLangVM (Vue, lang) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  if (!langVM) {
    langVM = new Vue({ data: { lang: lang, locales: {} } });
  }
  Vue.config.silent = silent;
}

plugin.version = '__VERSION__';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "bgcolor": {
    "backgroundColor": "#eff2f8"
  },
  "color_w": {
    "backgroundColor": "#ffffff"
  },
  "mt10": {
    "marginBottom": 20
  },
  "p10": {
    "padding": 20
  },
  "v-time": {
    "padding": 20
  },
  "title": {
    "height": 60,
    "lineHeight": 60,
    "textAlign": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "borderTopWidth": 1,
    "borderBottomWidth": 1,
    "borderStyle": "solid",
    "borderColor": "#dadfea"
  },
  "item": {
    "WebkitBoxFlex": 1,
    "WebkitFlex": 1,
    "MsFlex": 1,
    "flex": 1,
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "borderWidth": 1,
    "borderColor": "#dadfea",
    "borderStyle": "solid",
    "marginLeft": -1,
    "marginTop": -1
  },
  "row": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row",
    "height": 80
  },
  "v-language": {
    "WebkitBoxPack": "end",
    "WebkitJustifyContent": "flex-end",
    "MsFlexPack": "end",
    "justifyContent": "flex-end",
    "WebkitBoxAlign": "end",
    "WebkitAlignItems": "flex-end",
    "MsFlexAlign": "end",
    "alignItems": "flex-end",
    "padding": 20
  },
  "center": {
    "textAlign": "center"
  },
  "bolder": {
    "fontWeight": "bold"
  },
  "webview": {
    "width": 750,
    "height": 700,
    "marginBottom": 20
  },
  "disH": {
    "height": 380
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["bgcolor"]
  }, [_c('div', {
    staticClass: ["v-time"]
  }, [_c('text', [_vm._v(_vm._s(_vm.$t("vtime")) + ": " + _vm._s(_vm._f("format_time")(_vm.now)))])]), _c('div', {
    staticClass: ["mt10", "color_w"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.hourly")))])]), _c('div', {
    staticClass: ["row"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.train")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.bus")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.ytj")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.total")))])])]), _vm._l((_vm.today_all), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["row"]
    }, [_c('div', {
      staticClass: ["item"]
    }, [(index == 0) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.actual")))]) : _vm._e(), (index == 1) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.connect")))]) : _vm._e(), (index == 2) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.active")))]) : _vm._e()]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.trainUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.busUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.ytjUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.trainUser + item.ytjUser + item.busUser))])])])
  })], 2), _c('web', {
    ref: "webview",
    class: ['webview', _vm.isBrowser ? 'disH' : ''],
    attrs: {
      "src": _vm.url
    }
  }), _c('div', {
    staticClass: ["mt10", "color_w"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.yesterday")))])]), _c('div', {
    staticClass: ["row"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.train")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.bus")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.ytj")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.total")))])])]), _vm._l((_vm.yesterday_all), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["row"]
    }, [_c('div', {
      staticClass: ["item"]
    }, [(index == 0) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.actual")))]) : _vm._e(), (index == 1) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.connect")))]) : _vm._e(), (index == 2) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("Portal.active")))]) : _vm._e()]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.trainUser)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.busUser)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.ytjUser)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")((item.trainUser + item.ytjUser + item.busUser))))])])])
  })], 2), _c('div', {
    staticClass: ["mt10", "color_w"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("equip.title")))])]), _c('div', {
    staticClass: ["row"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.train")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.bus")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.ytj")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("Portal.total")))])])]), _vm._l((_vm.device_all), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["row"]
    }, [_c('div', {
      staticClass: ["item"]
    }, [(index == 0) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("equip.active")))]) : _vm._e(), (index == 1) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("equip.online")))]) : _vm._e(), (index == 2) ? _c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(_vm.$t("equip.install")))]) : _vm._e()]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.trainUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.busUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.ytjUser))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(item.trainUser + item.ytjUser + item.busUser))])])])
  })], 2), _c('div', {
    staticClass: ["color_w"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["bolder"]
  }, [_vm._v(_vm._s(_vm.$t("wangfan.application")))])]), _c('div', {
    staticClass: ["row"]
  }, [_vm._m(3), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center", "bolder"]
  }, [_vm._v(_vm._s(_vm.$t("wangfan.newU")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center", "bolder"]
  }, [_vm._v(_vm._s(_vm.$t("wangfan.active")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center", "bolder"]
  }, [_vm._v(_vm._s(_vm.$t("wangfan.total")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center", "bolder"]
  }, [_vm._v(_vm._s(_vm.$t("wangfan.duration")))])])]), _vm._l((_vm.user_all), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["row"]
    }, [_c('div', {
      staticClass: ["item"]
    }, [_c('text', {
      staticClass: ["center"]
    }, [_vm._v(_vm._s(item.date))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.new)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.active)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("number")(item.total)))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', [_vm._v(_vm._s(_vm._f("minute")(item.duration)))])])])
  }), _c('div', {
    staticClass: ["row"]
  }, [_c('div', {
    staticClass: ["item"]
  }, [_c('text', [_vm._v(_vm._s(_vm.$t("wangfan.increase")))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', [_vm._v(_vm._s(_vm.newAmp))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', [_vm._v(_vm._s(_vm.activeAmp))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', [_vm._v(_vm._s(_vm.totalAmp))])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', [_vm._v(_vm._s(_vm.durationAmp))])])])], 2), _c('div', {
    staticClass: ["p10"]
  }, [_c('text', [_vm._v(_vm._s(_vm.$t("explain[0]")))]), _c('text', [_vm._v(_vm._s(_vm.$t("explain[1]")))]), _c('text', [_vm._v(_vm._s(_vm.$t("explain[2]")))]), _c('text', [_vm._v(_vm._s(_vm.$t("explain[3]")))]), _c('text', [_vm._v(_vm._s(_vm.$t("explain[4]")))]), _c('text', [_vm._v(_vm._s(_vm.$t("explain[5]")))])]), _c('div', {
    staticClass: ["v-language"],
    on: {
      "click": function($event) {
        _vm.lang()
      }
    }
  }, [_c('text', [_vm._v(_vm._s(_vm.$t("language")))])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text')])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);

__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.el = '#v-box';
/* harmony default export */ __webpack_exports__["default"] = new Vue(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);

/***/ })
/******/ ]);