/*! 
######################################################

# ORA_BRONTO.JS

# Version: 1.06

# BUILD DATE: Wed Jul 01 2020 17:24:57 GMT-0700 (Pacific Daylight Time)

# COPYRIGHT ORACLE CORP 2020 [UNLESS STATED OTHERWISE]

######################################################
*/
var isTest=-1!=location.host.indexOf("-stage")||-1!=location.host.indexOf("dev-")||-1!=location.host.indexOf("-dev")||-1!=location.host.indexOf("-uat")||-1!=location.host.indexOf("staging")||-1!=location.host.indexOf("webstandards-us")||-1!=location.host.indexOf("localhost");try{oracle.truste.api.getConsentDecision().consentDecision;oracle.truste.api.getConsentDecision().source}catch(err){var oracle=oracle||{};oracle.truste={};oracle.truste.api={};(function(){var trusteStorageItemName="truste.eu.cookie.notice_preferences";this.getCookieName=function(){return"notice_preferences"};this.getStorageItemName=function(){return trusteStorageItemName}}).apply(oracle.truste);(function(){var trusteCommon=oracle.truste;function getCookie(cookieKey){for(var name=cookieKey+"=",cookieArray=document.cookie.split(";"),i=0;i<cookieArray.length;i++){for(var c=cookieArray[i];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(name))return c.substring(name.length,c.length)}return null}function getLocalStorageItem(storageKey){return"undefined"!=typeof Storage?localStorage.getItem(storageKey):null}function getTRUSTeLocalStorageValue(storageKey){var value=getLocalStorageItem(storageKey);if(null!=value){return JSON.parse(value).value}return null}this.getConsentCode=function(){var value=getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName())||getCookie(trusteCommon.getCookieName());return null==value?-1:parseInt(value)+1};this.getConsentDecision=function(){var value=this.getConsentCode();if(-1==value){var text='{"consentDecision": 0, "source": "implied"}';return JSON.parse(text)}var text='{"consentDecision": '+parseInt(value)+', "source": "asserted"}';return JSON.parse(text)}}).apply(oracle.truste.api)}var TRUSTeLevel=s_setConsentLevel(0);function s_setConsentLevel(cLevel){try{cLevel=truste.cma.callApi("getConsentDecision","oracle.com").consentDecision}catch(err){cLevel=s_getCookieData("notice_preferences").split(":")[0];cLevel=""==cLevel?0:++cLevel}return cLevel}function s_getCookieData(label){for(var labelLen=label.length,cLen=document.cookie.length,i=0,cEnd;i<cLen;){var j=i+labelLen;if(document.cookie.substring(i,j)==label){cEnd=document.cookie.indexOf(";",j);-1==cEnd&&(cEnd=document.cookie.length);j++;return decodeURIComponent(document.cookie.substring(j,cEnd).replace("+","%20"))}i++}return""}

/*! Script to check Do Not Track settings in the browser */
var enable_tracking=!0;-1==TRUSTeLevel||0==TRUSTeLevel?1!=navigator.doNotTrack&&1!=window.doNotTrack&&1!=navigator.msDoNotTrack||(enable_tracking=!1):1==TRUSTeLevel&&(enable_tracking=!1);var ora_root=isTest?"://www-portal-stage.oracle.com":"://www.oracle.com",host_type=-1!=window.location.protocol.toLowerCase().indexOf("https")?"https":"http";if(enable_tracking){var sc_script=document.createElement("script");sc_script.type="text/javascript";sc_script.onload=function(){window.sn=s_setAccount()[1];window.ln=s_setAccount()[2]};sc_script.src=host_type+ora_root+"/us/assets/metrics/ora_code.js";document.body.appendChild(sc_script)}

/*! ORA_CODE_BRONTO.JS - v1.04 */
if(enable_tracking){var siteID="",language="";

/*! REPORT SUITE SET UP */
function s_setAccount(){var sa=["oraclenewreportsuite2,oracleglobal","bronto","en-us"];if(-1!=location.host.indexOf("-stage")||-1!=location.host.indexOf("dev-")||-1!=location.host.indexOf("-dev")||-1!=location.host.indexOf("-uat")||-1!=location.host.indexOf("staging")||-1!=location.host.indexOf("webstandards-us")||-1!=location.host.indexOf("localhost"))var sa=["oracledevall","bronto","en-us"];else var sa=["oraclenewreportsuite2,oracleglobal","bronto","en-us"];siteID=sa[1];language=sa[2];"bronto.com"!=window.location.host&&-1===window.location.host.indexOf("staging")&&(siteID=siteID+":"+window.location.host.split(".")[0]);return sa}

/*! PrePlugins */
function s_prePlugins(s){s_oraVer(":"+siteID,":1.05");setPageName(s)}function setPageName(s){s.pageName=siteID+":"+window.location.pathname}

/*! PostPlugins */
function s_postPlugins(s){"undefined"!=typeof s_eVar24?s.eVar24=s_eVar24:s.eVar24="no value";oraSetInternalFilters()}

/*! Set the code version, oraVersion comes from ora_code.js */
function s_oraVer(_s,_v){_v=_s+_v;oraVersion=-1==oraVersion.indexOf(_s)?oraVersion+_v:oraVersion.substr(0,oraVersion.indexOf(_s))+_v}

/*! Set filter exit links */
function oraSetInternalFilters(){s.linkInternalFilters="javascript:,.oracle.,bronto.,brontocorp";-1===location.href.indexOf(":8888")&&-1===location.href.indexOf("webstandards-us")||(s.linkInternalFilters="javascript:,localhost,webstandards-us.oracle.com");if(s.linkObject&&-1==s.linkObject.href.indexOf("bronto.com")&&-1==s.linkObject.href.indexOf("brontocorp")&&-1==s.linkObject.href.indexOf("oracle.com")){s.linkType="e";s.linkTrackVars="pageName,prop8";s.prop8=s.pageName}}

/*! Test and Flag for jQuery */
function gotjQ(){try{var jq=!!jQuery}catch(err){var jq=!1}return jq}

/*! JQUERY FUNCTIONS */
gotjQ()&&jQuery(document).ready(function($){var trackas=[];$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){var type="opop"==$(this).attr("rel")?"popup":"lightbox";!$(this).attr("data-lbl")&&$(this).attr("title")?$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-")):!$(this).attr("data-lbl")&&$(this).text()?$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-")):$(this).attr("data-lbl")?$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open"):$(this).attr("data-lbl",type+"-open");$(this).attr("data-trackas")||$(this).attr("data-trackas",type)});for(var sn=s_setAccount()[1],ln=s_setAccount()[2],i=0;i<trackas.length;i++){!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]&&$(trackas[i][0]).attr("data-trackas",trackas[i][1]);trackas[i][2]&&"resetpage"==trackas[i][2]?$(trackas[i][0]).attr("data-pgreset","true"):trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")&&$(trackas[i][0]).attr("data-lbl",trackas[i][2])}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="",o=$(this);if("notrack"!=o.attr("data-lbl")){if(o.attr("data-lbl"))lbl=o.attr("data-lbl");else if(o.attr("name"))lbl=o.attr("name");else if(o.attr("title"))lbl=o.attr("title");else if(o.find("img")&&o.find("img").first().attr("title"))lbl=o.find("img").first().attr("title");else if(o.find("img")&&o.find("img").first().attr("alt"))lbl=o.find("img").first().attr("alt");else if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[lbl.split("/").length-1]}else lbl=o.text();var d=o.closest("[data-trackas]").attr("data-trackas");d="hnav"==d||"header"==d?":":"-";if(!o.attr("data-trackas"))for(;o.parent();){o=o.parent();o.attr("data-lbl")&&(lbl=o.attr("data-lbl")+d+lbl);if(o.attr("data-trackas"))break}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=o.attr("data-trackas")?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");-1!=location.href.indexOf(":8888")&&console.log(sn+":"+ln+":"+sec+":"+lbl);navTrack(sn,ln,sec,lbl);if("true"==o.attr("data-pgreset")){s.clearVars();if(0==o.attr("href").indexOf("#")&&s.pageName){if($("body").attr("data-pgname"))var pn=$("body").attr("data-pgname");else{$("body").attr("data-pgname",s.pageName);var pn=s.pageName}s.pageName=pn+"/"+o.attr("href").split("#")[1]}else s_orapageName(o.attr("href"));oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();s_code&&document.write(s_code);oraSetInternalFilters()}}})})}