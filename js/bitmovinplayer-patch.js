/**************************************************************************** 
 * Copyright (C) 2020, Bitmovin, Inc., All Rights Reserved 
 * 
 * This source code and its use and distribution, is subject to the terms 
 * and conditions of the applicable license agreement. 
 * 
 * Bitmovin Player Version 8.34.0 
 * 
 ****************************************************************************/
(function() {
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.patch=t():(e.bitmovin=e.bitmovin||{},e.bitmovin.player=e.bitmovin.player||{},e.bitmovin.player.patch=t())}(this,function(){return webpackJsonpbitmovin_player__name_([31],{239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(466),i=function(){function e(){}return e.arrayReduce=function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,o=Object(this),i=o.length>>>0,r=0;if(void 0!==t)n=t;else{for(;r<i&&!(r in o);)r++;if(r>=i)throw new TypeError("Reduce of empty array with no initial value");n=o[r++]}for(;r<i;)r in o&&(n=e(n,o[r],r,o)),r++;return n},e.install=function(){o.DeviceDetector.isGoogleCast()&&window.navigator.userAgent.indexOf("CrKey/1.25.")>-1&&(Array.prototype.reduce=e.arrayReduce)},e}();t.Patches=i},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.isGoogleCast=function(){return window.navigator.userAgent.indexOf("Chrome")>-1&&window.navigator.userAgent.indexOf("CrKey")>-1},e}();t.DeviceDetector=o},467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(239);t.PatchModuleDefinition={name:o.ModuleName.Patch,module:{Patches:i.Patches},hooks:{add:function(e){e.Patches.install()}}},t["default"]=t.PatchModuleDefinition}},[467])});
})();
