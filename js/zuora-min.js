/*    Copyright (c) 2014 Zuora, Inc.
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of 
 *   this software and associated documentation files (the "Software"), to use copy, 
 *   modify, merge, publish the Software and to distribute, and sublicense copies of 
 *   the Software, provided no fee is charged for the Software.  In addition the
 *   rights specified above are conditioned upon the following:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   Zuora, Inc. or any other trademarks of Zuora, Inc.  may not be used to endorse
 *   or promote products derived from this Software without specific prior written
 *   permission from Zuora, Inc.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL
 *   ZUORA, INC. BE LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES
 *   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 *   ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __z_version="1.3.1";var ifrmId="z_hppm_iframe";var threedRedirected=false;if(!String.prototype.trim){(function(){var a=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(a,"")}})()}if(!Object.keys){Object.keys=(function(){var c=Object.prototype.hasOwnProperty,d=!({toString:null}).propertyIsEnumerable("toString"),b=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=b.length;return function(g){if(typeof g!=="object"&&(typeof g!=="function"||g===null)){throw new TypeError("Object.keys called on non-object")}var e=[],h,f;for(h in g){if(c.call(g,h)){e.push(h)}}if(d){for(f=0;f<a;f++){if(c.call(g,b[f])){e.push(b[f])}}}return e}}())}(function(){if(!Event.prototype.preventDefault){Event.prototype.preventDefault=function(){this.returnValue=false}}if(!Event.prototype.stopPropagation){Event.prototype.stopPropagation=function(){this.cancelBubble=true}}if(!Element.prototype.addEventListener){var c=[];var b=function(f,h){var d=this;var j=function(k){k.target=k.srcElement;k.currentTarget=d;if(h.handleEvent){h.handleEvent(k)}else{h.call(d,k)}};if(f=="DOMContentLoaded"){var g=function(k){if(document.readyState=="complete"){j(k)}};document.attachEvent("onreadystatechange",g);c.push({object:this,type:f,listener:h,wrapper:g});if(document.readyState=="complete"){var i=new Event();i.srcElement=window;g(i)}}else{if(this.attachEvent){this.attachEvent("on"+f,j)}c.push({object:this,type:f,listener:h,wrapper:j})}};var a=function(f,g){var d=0;while(d<c.length){var e=c[d];if(e.object==this&&e.type==f&&e.listener==g){if(f=="DOMContentLoaded"){this.detachEvent("onreadystatechange",e.wrapper)}else{this.detachEvent("on"+f,e.wrapper)}c.splice(d,1);break}++d}};Element.prototype.addEventListener=b;Element.prototype.removeEventListener=a;if(HTMLDocument){HTMLDocument.prototype.addEventListener=b;HTMLDocument.prototype.removeEventListener=a}if(Window&&Window.prototype){Window.prototype.addEventListener=b;Window.prototype.removeEventListener=a}}})();(function(a){a.requestAnimationFrame=(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b){return a.setTimeout(b,1000/60)
});a.cancelAnimationFrame=(a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||function(b){a.clearTimeout(b)})})(window);var ZLOG=(function(){var d="zlog_level";var h="error";var e="warn";var b="info";var a="debug";var c=e;var j=[h,e,b,a];function i(m){var l;for(l=0;l<j.length;l++){if(j[l]===m){return l}}return -1}function g(){var l=document.location.href;var m=l.indexOf("?");if(m<0){return c}var p=l.indexOf("#");if(p<0){p=l.length}var q=l.slice(m+1,p);if(!q){return c}var t=q.split("&");var o;for(o=0;o<t.length;o++){var n=t[o].split("=");var s=n[0];var r=n[1];if(s===d&&i(r)>=0){return r}}return e}function k(){return i(g())>=i(a)}function f(){return i(g())>=i(b)}return{getLevel:function(){return g()},debug:function(l){if(console&&console.log&&k()){console.log(l)}},info:function(l){if(console&&console.info&&f()){console.info(l)}},warn:function(l){if(console&&console.warn){console.warn(l)}},error:function(l){if(console&&console.error){console.error(l)}}}})();var ZXD=function(){var e,d,b=1,c,a=this;return{postMessage:function(f,h,g){if(!h){return}ZLOG.debug("Posting message[O]: target_url="+h+", payload="+f);g=g||parent;if(a.postMessage){g.postMessage(f,h.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(h){g.location=h.replace(/#.*$/,"")+"#"+(+new Date)+(b++)+"&"+f}}},receiveMessage:function(h,g,f){ZLOG.info("Registering callback[O]: source_origin="+g+", allowSubDomain="+f);if(a.postMessage){if(h){c=function(m){function j(r){var s=/^https:\/\/([a-z0-9]+(-[a-z0-9]+)*\.)*zuora\.com$/;if(!s.test(r.toLowerCase())){return false}return true}var l=/^https?:\/\/localhost(:\d{4,5})?$/;function p(r){return l.test(r)}ZLOG.debug("Received message[O]: origin="+m.origin);if(typeof m.origin==="string"&&!(j(m.origin)||p(m.origin))){ZLOG.info("Stopped processing none-zuora message.");return !1}if(Object.prototype.toString.call(g)==="[object Function]"&&g(m.origin)===!1){return !1}if(typeof g==="string"&&m.origin!==g){if(!f){return !1}else{if(f==="true"){try{if(typeof g==="string"){var q=m.origin.split(".");
if(q){var i=q.slice(-2).join(".");var k=g.split(".");var o=k.slice(-2).join(".");if(o.indexOf(i)<=-1){return !1}}}}catch(n){return !1}}else{return !1}}}h(m)}}if(a.addEventListener){a[h?"addEventListener":"removeEventListener"]("message",c,!1)}else{a[h?"attachEvent":"detachEvent"]("onmessage",c)}}else{e&&clearInterval(e);e=null;if(h){e=setInterval(function(){var j=document.location.hash,i=/^#?\d+&/;if(j!==d&&i.test(j)){d=j;h({data:j.replace(i,"")})}},100)}}}}}();var Z=function(){var i="#z-overlay {filter: alpha(opacity=50);opacity:0.5;display:inline-block;position:fixed;top:0;left:0;width:100%;height:100%;background-color: #000;z-index: 1001;}";var u="#z-container {border:1px;float:left; overflow: visible; position: absolute;padding: 0px; display: inline-block; top:5%; left:34%; margin: 0 auto;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius:5px;background-color: #FAFAFA; border:1px solid #FAFAFA;border-top-color:#EDEDED;behavior: url(js/PIE.htc);z-index: 1002;}";var h="#z-data {height: 100%; outline: 0px; width: 100%; overflow: visible;display: inline-block;border:1px; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius:5px;}";var t="#reset{*, *:before, *:after {display: inline-block;-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}}";var l="#z_hppm_iframe {background-color: #FAFAFA;vertical-align:bottom;z-index:9999;display:block;padding:0px;margin: 0px; border:0px solid #DDD;}";var e="requestPage";var d;var s;var c,o;var b;var n;var w=["tenantId","id","token","signature","key","style","submitEnabled","url"];var j=["creditCardNumber","cardSecurityCode","creditCardExpirationYear","creditCardExpirationMonth","bankAccountNumber","bankAccountName","ipAddress"];var r=false;var m={};var f=null;var v=null;function a(x){return x&&typeof x==="function"}function p(x){var y={};for(var z in x){if(x.hasOwnProperty(z)){y[z]=x[z]}}return y}function k(){if(s){s()}}function g(){s=null}function q(x){if(x.currentStyle){return x.currentStyle.display!="none"}else{if(document.defaultView&&document.defaultView.getComputedStyle){return document.defaultView.getComputedStyle(x,null).getPropertyValue("display")!="none"
}else{return true}}}ZXD.receiveMessage(function(y){try{var x=y.data;ZLOG.debug("Received message[O]: payload="+x);x=JSON.parse(x);if(x.success){if(a(m.init)){m.init(x)}}else{if(x.success==false){Z.deactivateOverlay("z-overlay");Z.deactivateOverlay("z-container");if(m.init){m.init(x)}}else{if(x.action=="close"){Z.deactivateOverlay("z-overlay");Z.deactivateOverlay("z-container")}else{if(x.action=="resize"){Z.receive(x)}else{if(x.action=="allowScroll"){Z.allowScroll(x)}}}}}if(x.action==="validate"&&a(m.validate)){m.validate(x)}else{if(x.action=="customizeErrorMessage"&&a(m.customizeErrorMessage)){m.customizeErrorMessage(x.key,x.code,x.message)}else{if(x.action&&a(m[x.action])){m[x.action](x)}}}}catch(z){return}});return{validateRequiredParams:function(z){var x=w.length;for(index=0;index<x;index++){if(!z.hasOwnProperty(w[index])){if(w[index]=="submitEnabled"&&z.style.toLowerCase()=="overlay"){continue}else{var y="Param with key ["+w[index]+"] is required.";alert(y);if(!Z.isIE()){console.log(y)}return false}}}return true},isIE:function(){var z=window.navigator.userAgent;var y=z.indexOf("MSIE ");var x=z.indexOf("Trident/");if(y>0){return true}if(x>0){var A=z.indexOf("rv:");return true}return false},validatePCIParams:function(A){var x=j.length;for(index=0;index<x;index++){var y="field_"+j[index];if(A.hasOwnProperty(y)){if(0<A[y].trim().length&&A[y].trim().length<300){var z="Field ["+y+"] for Credit Card payment method type should be encrypted for pre-population";alert(z);if(!Z.isIE()){console.log(z)}return false}}}return true},init:function(C,D){c="?method=requestPage&host="+encodeURIComponent(document.location.href)+"&";c=c+"fromHostedPage=true&";var B=Z.validateRequiredParams(C);if(!B){return false}B=Z.validatePCIParams(C);if(!B){return false}var A=JSON.stringify(C,function(F,G){if(F!=""){if("key"==F){b=G}else{if("url"==F){var E=/^https:\/\/([a-z0-9]+(-[a-z0-9]+)*\.)+zuora\.com\/.+$/;ZLOG.info("HPM integration[O]: url="+G);if(!E.test(G)){ZLOG.warn("HPM integration[O]: None-official zuora HPM integration url is detected: "+G)
}d=G}else{c=c+F+"="+encodeURIComponent(G)+"&"}}}return G});n=JSON.parse(A);m.init=D;var x=j.length;if(C){for(var z=0;z<x;z++){var y="field_"+j[z];if(C.hasOwnProperty(y)){C[y]=""}}}return true},prepopulate:function(z){if(threedRedirected){return}var A=Z.createIframeURL();if(A==document.getElementById(ifrmId).src||(document.getElementById(ifrmId).src.indexOf(A)>=0&&n.hasOwnProperty("customizeErrorRequired")&&n.customizeErrorRequired=="true")){var x=JSON.stringify(z,function(B,D){if(B!=""){var C="setField("+B+":"+D+")";Z.post(ifrmId,C)}return D});var y="setField(key:"+b+")";Z.post(ifrmId,y);Z.post(ifrmId,"setField(style:"+n.style+")");if(n.hasOwnProperty("customizeErrorRequired")&&n.customizeErrorRequired=="true"){Z.post(ifrmId,"customizeErrorRequired");n.customizeErrorRequired="false"}}},contains:function(x,z){for(var y=0;y<x.length;y++){if(x[y]===z){return true}}return false},renderWithErrorHandler:function(B,D,C,y,z,x,A){B.customizeErrorRequired="true";Z.render(B,D,C,z,x);Z.customizeErrorHandler(y);Z.removeCoverHandler(A)},runAfterRender:function(x){s=x},render:function(C,B,H,A,I){if(A!=null&&A!=undefined){f=A}if(I!=null&&I!=undefined){v=I}f=Number(f);v=Number(v);f=isNaN(f)?0:f;v=isNaN(v)?0:v;var F=j.length;threedRedirected=false;if(B&&B.creditCardCountry&&(B.creditCardCountry==="USA"||B.creditCardCountry==="CAN")){B.creditCardState=B.creditCardState||" "}if(B){for(index=0;index<F;index++){var D="field_"+j[index];if(B.hasOwnProperty(j[index])){C[D]=B[j[index]]}}}var J=Z.init(C,H);if(!J){return}if(B){var F=Object.keys(B).length;o=p(B);for(index=0;index<F;index++){var z=Object.keys(B)[index];if(Z.contains(j,z)){delete o[z]}}}else{o=null}var y=document.getElementById("zuora_payment");if(typeof y=="undefined"||!y){return{error:"invalid_request",error_description:"The container you specified does not exist"}}y.innerHTML="";Z.cleanUp(y,"z-overlay");Z.cleanUp(y,"z-container");if(n.style=="inline"){Z.addInlineStyles();Z.createIframe(y);return}if(n.style=="overlay"){Z.addOverlayStyles();var x=Z.generateDiv("z-overlay","z-overlay");
y.appendChild(x);var E=Z.generateDiv("z-container","z-container");y.appendChild(E);var G=Z.generateDiv("z-data","z-data");G.tabindex="-1";E.appendChild(G);Z.createIframe(document.getElementById("z-data"));Z.activateOverlay("z-overlay")}},cleanUp:function(y,x){var z=document.getElementById(x);if(z!=null){y.removeChild(z)}},activateOverlay:function(y){try{document.getElementById(y).style.display="inline"}catch(x){}},deactivateOverlay:function(y){try{document.getElementById(y).style.display="none"}catch(x){}},generateDiv:function(A,y,x){var z=document.createElement("div");z.id=A;z.className=y;z.border="0";if(z.addEventListener){z.addEventListener("click",x,false)}else{z.attachEvent("click",x)}return z},addOverlayStyles:function(){var B=document.createElement("style");B.type="text/css";var y=document.createTextNode(i);var C=document.createTextNode(u);var x=document.createTextNode(h);var A=document.createTextNode(l);var z=document.createTextNode(t);if(B.styleSheet){B.styleSheet.cssText=y.nodeValue+" "+C.nodeValue+" "+x.nodeValue+" "+z.nodeValue+" "+A.nodeValue}else{B.appendChild(y);B.appendChild(C);B.appendChild(x);B.appendChild(A);B.appendChild(z)}document.getElementsByTagName("head")[0].appendChild(B)},addInlineStyles:function(){var y=document.createElement("style");y.type="text/css";var x=document.createTextNode(l);if(y.styleSheet){y.styleSheet.cssText=x.nodeValue}else{y.appendChild(x)}document.getElementsByTagName("head")[0].appendChild(y)},createIframe:function(y){var A=Z.createIframeURL();var z=document.createElement("iframe");z.setAttribute("src",A);z.setAttribute("id",ifrmId);z.setAttribute("overflow","visible");z.setAttribute("scrolling","no");z.setAttribute("frameBorder","0");z.setAttribute("allowtransparency","true");z.setAttribute("class","z_hppm_iframe");z.setAttribute("width","100%");z.setAttribute("height","0");var x=false;z.addEventListener("load",function(){Z.prepopulate(o);k();g();function B(){if(q(y)){Z.post(ifrmId,"resize");if(a(m.onloadCallback)){m.onloadCallback()}}else{window.requestAnimationFrame(B)
}}if(!x){window.requestAnimationFrame(B);x=true}return false},false);if(typeof options!="undefined"){if(typeof options.vertical!="undefined"&&options.vertical){z.style.width="100%";z.style.height="100%"}}y.appendChild(z)},createIframeURL:function(){var x=d;return x.concat(c).concat("zlog_level="+ZLOG.getLevel())},post:function(A,z){var x=document.getElementById(A);var y=encodeURIComponent(document.location.href);var B=x.src;if(B.indexOf(y)<=-1){x.src=B+"#"+y}ZXD.postMessage(z,B,x.contentWindow);return false},allowScroll:function(y){if(ifrmId){var x=document.getElementById(ifrmId);if(x){x.setAttribute("scrolling","yes");threedRedirected=true}}},receive:function(x){ZFB.resizeCaller(ifrmId,x.action,x.height,x.width,f,v)},validate:function(z){if(z==null||z==undefined){Z.closeWindow();var y="Validate function required.";alert(y);if(!Z.isIE()){console.log(y)}return false}m.validate=z;var x="validate";Z.post(ifrmId,x)},customizeErrorHandler:function(y){if(y==null||y==undefined){Z.closeWindow();var x="Customized error message function required.";alert(x);if(!Z.isIE()){console.log(x)}return false}m.customizeErrorMessage=y},removeCoverHandler:function(x){if(x==null||x==undefined){return false}m.removeCover=x},sendErrorMessageToHpm:function(A,z){var y={action:"customizeErrorMessage",key:A,message:z};var x=JSON.stringify(y);Z.post(ifrmId,x)},closeWindow:function(){Z.deactivateOverlay("z-overlay");Z.deactivateOverlay("z-container")},submit:function(){var x=document.getElementById(ifrmId).src+"#"+encodeURIComponent(document.location.href);document.getElementById(ifrmId).src=x;ZXD.postMessage("postPage",x,document.getElementById(ifrmId).contentWindow);return true},responseHandler:function(x){var y=x.redirectUrl;if(x.success){var z=y+"?refId="+x.refId+"&success="+x.success+"&signature="+x.signature+"&token="+x.token;window.location.replace(z)}else{var z=y+"?errorCode="+x.errorCode+"&errorMessage="+x.errorMessage+"&success="+x.success+"&signature="+x.signature+"&token="+x.token;window.location.replace(z)}},setEventHandler:function(x,y){if(x&&y){m[x]=y
}},setAgreement:function(A,B,z,y){if(!Z.validateAgreement(A,B,z)){return false}var x="mitConsentAgreementSrc";Z.setFieldValue(x,A);x="mitCredentialProfileType";Z.setFieldValue(x,B);x="agreementSupportedBrands";Z.setFieldValue(x,z);x="mitConsentAgreementRef";Z.setFieldValue(x,y);return true},setFieldValue:function(x,z){var y="setField("+x+":"+z+")";Z.post(ifrmId,y)},validateAgreement:function(y,z,x){if(Z.isEmpty(y)&&Z.isEmpty(z)&&Z.isEmpty(x)){return true}if(Z.isEmpty(y)){Z.alertRequired("mitConsentAgreementSrc");return false}if(Z.isEmpty(z)){Z.alertRequired("mitProfileType");return false}if(Z.isEmpty(x)){Z.alertRequired("agreementSupportedBrands");return false}if(y!="External"){Z.alertIllegal("mitConsentAgreementSrc");return false}if(z!="Recurring"){Z.alertIllegal("mitProfileType");return false}return true},isEmpty:function(x){return(!x||0===x.length)},alertRequired:function(y){var x="Param mitConsentAgreementSrc, mitProfileType and agreementSupportedBrands for Z.setAgreement should be all empty or not empty. Param "+y+" is empty.";alert(x)},alertIllegal:function(y){var x="Param "+y+" for Z.setAgreement is illegal.";alert(x)}}}();var ZFB=function(){var b="yes";var c=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1];var a=parseFloat(c)>=0.1?20:0;return{resizeCaller:function(j,i,d,h,g,e){ZFB.resizeIframe(j,i,d,h,g,e);if((document.all||document.getElementById)&&b=="no"){var f=document.all?document.all[j]:document.getElementById(j);f.style.display="block"}},resizeIframe:function(g,j,e,i,h,f){var d=document.getElementById(g);if(d){d.style.display="block";d.width=h>0?h:Number(i);d.height=f>0?f:Number(e)}}}}();