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
!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.ui=i():(e.bitmovin=e.bitmovin||{},e.bitmovin.player=e.bitmovin.player||{},e.bitmovin.player.ui=i())}(this,function(){return webpackJsonpbitmovin_player__name_([32],{262:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t(27),o=t(104),u=t(13),r=function(){function e(i){var t=this;this.isDestroyed=!1,this.uiInstance=null;var u=i.getConfig(!0);u.ui!==!1&&(u.ui&&(this.uiConfig=i.getConfig().ui),o.FileLoader.getInstance().loadCSS(u.location.ui_css),e.isUIAvailable()?this.createUI(i):o.FileLoader.getInstance().loadScript(u.location.ui,!0).then(function(e){e?n.Environment.modules.playerui=e:n.Environment.modules.playerui=window.bitmovin.playerui,t.createUI(i)})["catch"](function(e){console.warn("Could not load UI",e),t.uiInstance=null}))}return e.prototype.createUI=function(e){this.isDestroyed||(this.uiInstance=n.Environment.modules.playerui.UIFactory.buildDefaultUI(e,this.uiConfig))},e.isUIAvailable=function(){if(!n.Environment.modules.playerui||!n.Environment.modules.playerui.UIFactory)return!1;var e=n.Environment.modules.playerui.UIFactory;return e&&u.Util.isFunction(e.buildDefaultUI)},e.prototype.dispose=function(){this.isDestroyed=!0,this.uiInstance&&this.uiInstance.release()},e}();i.UiControls=r},523:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t(1),o=t(0),u=t(262);i.UIModuleDefinition={name:o.ModuleName.UI,module:{},hooks:{setup:function(e,i){var t=new u.UiControls(i);i.on(n.PlayerEvent.Destroy,function(){t&&t.dispose()})}}},i["default"]=i.UIModuleDefinition}},[523])});
})();
