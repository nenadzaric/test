// New functions

// TODO - provide these javascript fuctions via PHP and .htaccess rewrites, so that framework variables and defines can be used here

// Make sure console.log doesn't break IE9
if (typeof console == "undefined") {
   var console = { log: function() {} };
}

// The following block addes a new selector to jquery
// we can now select the data field as if it were an attribute
// if a DOM attribute exists with the same name as a data field
// the DOM attribute will be used for selection, not the data field
// example: $('form[track_enabled="1"]).stop_tracking();
(function($){
   var _dataFn = $.fn.data;
   $.fn.data = function(key, val)
   {
      if (typeof val !== 'undefined')
      {
         $.expr.attrHandle[key] = function(elem)
         {
            return $(elem).attr(key) || $(elem).data(key);
         };
      }
      return _dataFn.apply(this, arguments);
   };
})(jQuery);

// This is used in binding between java and js
// Java needs to call a user level function,
// so it can eval directly
function run_js(js_string)
{
   eval(js_string);
}

// This returns true if the variable is a number type, or if it can be directly convert to a number, eg: "3"
function isNumber(variable)
{
   // The uniary + operator causes a typeconversion to a number without making changes
   var number = (+variable);
   // At this point we either have a number or NaN
   return !isNaN(number);
}
// Write html content to our "message" div
function write_message(message, timeout)
{
   // prevent empty messages
   if(message != "")
   {
      // write our message
      $('#message').html(message);
      $('#message').fadeIn('slow');
      // for some reason 0 was trigging the not null check...  Make sure 0 isn't changed to the default 3000
      if((timeout == "" || timeout == null) && timeout != 0)
      {
         timeout = 5000; // 5 seconds
      }
      else
      {
         $('#message').attr('is_unlimited', "1");
      }
      $('#message').attr('is_loading', "0"); // clear any loading status

      if(timeout != 0)
      {
         setTimeout("$('#message').fadeOut('slow');", timeout);
      }
   }
}

function write_json_message(jsonData, timeout)
{
   var data = $.parseJSON(jsonData);
   var messageString = "";
   if(typeof(data.messages) != 'undefined')
   {
	   $.each(data.messages, function(i,message)
	   {
		  if(message.text != "")
		  {
			 messageString += '<span class="'+message.type+'">'+message.text+'</span><br />\n';
		  }
	   });
   }
   else if(typeof(data.message) != 'undefined')
   {
		messageString = data.message;
   }
   write_message(messageString, timeout);
}

function clear_message()
// this gets called as during switch_page() for ajax requests
// only clear the message if it is a loading message or unlimited duration message
// messages with the default 5s timeout should remain until they timeout or are overwritten
{
   if(($('#message').attr('is_loading') == 1) || ($('#message').attr('is_unlimited') == 1))
   {
      $('#message').fadeOut('slow');
      $('#message').html("");
      $('#message').attr('is_loading', "0");
      $('#message').attr('is_unlimited', "0");
   }
}

function show_loading_message(text)
{
   if(text == undefined)
   {
      text = "Loading";
   }
   var message = "<div class=\"notice\"><img class=\"notice_image\" src=\"/images/loading_ajax_transparent.gif\"><span class=\"loading_message_text\">"+text+"</span></div>";
   $('#message').html(message);
   $('#message').fadeIn('medium');
   $('#message').attr('is_loading', "1");
}

// UNUSED
function show_error_message(text)
{
   if(text == undefined)
   {
      text = "";
   }
   var message = "<div class=\"notice\"><img class=\"notice_image\" src=\"/images/loading_ajax_transparent.gif\"><span class=\"loading_message_text\">"+text+"</span></div>";
   $('#message').html(message);
   $('#message').fadeIn('medium');
}

// UNUSED
function show_alert_message(text)
{
   if(text == undefined)
   {
      text = "Loading";
   }
   var message = "<div class=\"notice\"><img class=\"notice_image\" src=\"/images/loading_ajax_transparent.gif\"><span class=\"loading_message_text\">"+text+"</span></div>";
   $('#message').html(message);
   $('#message').fadeIn('medium');
}

function process_ajax_error(data)
// Inspect the data object for each of the following error situations:
//    invalid_session - The auth session is invalid, redirect to login
//    server_error - There is a critical server error, redirect to maintenance
//    reason - An rpc response failed and set an error message
// If none of these cases are set, shown an Unknown Error message.
{
   if(data.invalid_session)
   {
      // Reload the page and trigger a login
      // Be sure to escape the closing script tag!
      var script = "<script type=\"text/javascript\">window.location.reload(false)\<\/script\>";
      write_message('<span class="failure">Session Error - Redirecting to login</span>'+script)
   }
   else if(data.server_error)
   {
      // Reload the page and trigger the maintenance page
      // Be sure to escape the closing script tag!
      var script = "<script type=\"text/javascript\">window.location.reload(false)\<\/script\>";
      write_message('<span class="failure">Server Error - Redirecting to maintenance</span>'+script);
   }
   else if(data.message)
   {
      write_message(data.message);
   }
   else if(data.reason)
   {
      write_message(data.reason);
   }
   // else
   // {
   //    write_message('<span class="failure">Unknown Error</span>');
   // }
}

// Don't call this directly, its a helper for the various dialog functions.
function setup_dialog(title, msg, ok, cancel)
{
   if($('#dialog').length == 0)
   {
      $("#dialog").remove();
      // append to the content div so that if we switch pages the div gets cleared
      $("body").append("<div id=\"dialog\"></div>");
   }

   var pos_y = $(window).scrollTop();
   $('#dialog').css('position', 'fixed');
   $('#dialog').autoCenter();

   var dialog = "<h1>"+title+"</h1><br />"+msg;
   dialog = dialog+"<br /><br /><button id=\"dialog_confirm\">"+ok+"</button>";
   if(typeof(cancel) != "undefined")
   {
      dialog = dialog+"<br /><br /><button id=\"dialog_cancel\">"+cancel+"</button>";
   }

    $('#dialog').html(dialog);
}

// Write html content to our "dialog" div
// The dialog is cleared before processing the callback.  This allows for easy nesting of dialog messages.
// As a result, form data should never be used with this dialog, use display_dialog_form instead.
function display_dialog(title, msg, ok, cancel, callback)
{
   setup_dialog(title, msg, ok, cancel);

   $('#dialog_confirm').click(function()
   {
      $('#dialog').remove();
      if( callback ) callback(true);
   });

   $('#dialog_cancel').click(function()
   {
      $('#dialog').remove();
      if( callback ) callback(false);
   });
}

// This dialog should be used if data needs to be read from the dialog div before it gets cleared.
// The caller must remove the #dialog element.
function display_dialog_form(title, msg, ok, cancel, callback)
{
   setup_dialog(title, msg, ok, cancel);

   $('#dialog_confirm').click(function()
   {
      if( callback ) callback(true);
   });

   $('#dialog_cancel').click(function()
   {
      if( callback ) callback(false);
   });
}

// Write html content to our "dialog" div
// TODO - should try and calculate the center of the browser? and display there?
// TODO - expand on this and have a structured Title, Message, OK_Button, and Cancel_Button ??
       // gets tricky since some dialog messages should be generated from the results of an AJAX request
function url_dialog(title, url)// callback)
{
       if($('#dialog').length == 0)
       {
               // append to the content div so that if we switch pages the div gets cleared
               $("#content").append("<div id=\"dialog\"></div>");
       }

       var pos_y = $(window).scrollTop();
       $('#dialog').css('top',pos_y+'px');
       $('#dialog').css("left","120px");

       var dialog = "<h1>"+title+"</h1><br />";
       //Set the dialog now, so we can have a title while it loads
       $('#dialog').html(dialog);
       //TODO - maybe added a loading image temporarily?
       $.get(url, function(data)
       {
               dialog = dialog + data;
               $('#dialog').html(dialog);
       });

       $('#dialog_close').die('click');
       $('#dialog_close').live('click',function()
       {
               $('#dialog').remove();
       });
}

// check for valid key character from list
function limit_keypress(e, limiters)
{
   key = e.which;

   // control keys
   //    ???            ???                           backspace      tab         return      escape
   if((key==63234) || (key==63235) || (key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
   {
      return true;
   }
   if(e.ctrlKey||e.metaKey)
   {
      // ctrl-x         ctrl-v      ctrl-c
      if((key==120) || (key==118) || (key==99))
      {
         return true;
      }
   }

   keychar = String.fromCharCode(key);
   keychar = keychar.toLowerCase();
   theKey = limiters.indexOf(keychar);
   if(theKey > -1)
   {
      return limiters[theKey];
   }
   else
   {
      return false;
   }
}

function update_history(go_url)
{
   // strip an existing #'s in the url and add one to the front
   p_here = '#'+go_url.replace(/^.*#/, '');

   if(!p_here)
   {
      // default to landing.php
      p_here ='#/landing.php';
   }

   // Are we using an IE version older than 9.0?
   if($.browser.msie && $.browser.version < 9.0)
   {
      // this is an IE hack Wilfried put together
      var ihistory = $("#p_history_iframe")[0];
      var iframe = ihistory.contentDocument || ihistory.contentWindow.document;
      iframe.open();
      iframe.close();
      iframe.location.hash = p_here;
   }

   // Set our new location
   window.location.hash = go_url.replace(/^.*#/, '');
}


// Used to switch the page inside the content div
function switch_page(go_url)
{
   $(hashTarget).update(go_url, updateOpts.history);
   return false;
}

// this will update a param from the url
function addCurrentParam(params, key)
{
   if(params[key] == undefined && _GET[key] != undefined)
   {
      params[key] = _GET[key];
   }
}

function updateUrl(url, urlVars)
{
   var query="";
   //urlVars is an associative array, so have to use the foreach style loop
   $.each(urlVars, function(index, value){
      query += index + "=" + value + "&";
   });
   //remove the trailing ampersand
   query=query.replace(/&$/, "");
   if(query != "")
   {
      query = "?" + query;
   }
   //remove any query on the url
   url=url.replace(/\?.*$/, "");
   // remove the hash
   url = url.replace(/^.*#/, "");
   url += query;
   return url;
}

// TODO - add ability to interrupt an update (if someone is clicking fast, allow a "cancel") - cegner

//bitflags used in $.fn.update()
var updateOpts =
{
   none: 0,
   history: 1, //Update history so we can use the back button
   ignoreChanges: 2 //Don't check for page changes - supresses form change notices that appear when leaving a page
};

// This is separated so we can have a simple ALL
var updateSaveOpts =
{
   none: 0,
   page: 1,
   //size: 2, // Deprecated. No longer using page size on the url
   keyword: 4,
   sort: 8,
   tag: 16,


   ALL: 0xFFFF
};

// jquery update plugin. Allows you to perform an ajax update with most of the
// standard logic we use throughout.
//
// Call like: $('#content').update('/tools'); Where #content is the what you want to fill
// with the response.
//
// Arguements:
// url - url to fill the target with
// optionBitfield - takes an updateOpts variable (updateOpts is like an enum) eg:
//     updateOpts.history | updateOpts.ignoreChanges
// updateSaveVars - get parameters to magically persist. Useful for instances where a variable
//     needs to be remembered on many requests (eg: paging info). Acts like an enum (see above)
// successCallback - Callback that gets executed upon successful completion of the update
//     Note: this callback doesn't currently receive the data.
$.fn.update = function(url, optionBitfield, updateSaveVars, successCallback)
{
   if(optionBitfield==undefined)
   {
      optionBitfield=updateOpts.history;
   }
   if(updateSaveVars==undefined)
   {
      //don't default to any, because many switch_page urls won't use this
      updateSaveVars=updateSaveOpts.none;
   }
   //$(this) doesn't track into the callbacks, but if
   //we localize it, it will
   var updateObj = $(this);
   in_click = 1;

   if((~optionBitfield&updateOpts.ignoreChanges))
   {
      if(!check_changes())
      {
         clear_message('');
         current_request = '';
         in_click=0;
         return false;
      }
      clearAllTracking();
   }

   var urlVars = getUrlVars(url);
   //search will return -1 if the '?' is not found
   if(updateSaveVars&updateSaveOpts.keyword)
   {
      addCurrentParam(urlVars, 'keyword');
   }
   if(updateSaveVars&updateSaveOpts.page)
   {
      addCurrentParam(urlVars, 'page');
   }
   //if(updateSaveVars&updateSaveOpts.size)
   //{
      //addCurrentParam(urlVars, 'size');
   //}
   if(updateSaveVars&updateSaveOpts.sort)
   {
      addCurrentParam(urlVars, 'sort');
   }
   if(updateSaveVars&updateSaveOpts.tag)
   {
      addCurrentParam(urlVars, 'tag');
   }

   // If these exist, we need to persist them.
   addCurrentParam(urlVars, 'display_mode');
   addCurrentParam(urlVars, 'sort_field');
   addCurrentParam(urlVars, 'sort_direction');
   url=updateUrl(url, urlVars);

   $.get(url, function(data)
   {
      if(redirected(data))
      {
         return;
      }

      _GET = getUrlVars(url);
      // Update the browser history
      if(optionBitfield & updateOpts.history)
      {
         update_history(url);
      }
      // Write our new data
      updateObj.html(data);
      // clear any messages after the page is loaded
      clear_message('');
      // sometimes the tooltip gets left behind during a page transition, clear it
      $('#tooltip').css('display', "none");

      if(successCallback != undefined)
      {
         successCallback();
      }
      // Reload the page status under the banner
      current_request = '';
      // done loading ajax data
      in_click = 0;
   });

   return false;
};

// Check the data for a login, and throw the user there if there is a login
// The return probably doesn't get evalutated, but just in case...
// We're pushing the user back to the current page. This keeps things consistent
// Forms can be posted after logging in, and some ajax calls get weird if we try
// to go to the url requested. In the end, consistency is great!
function redirected(data)
{
   // jQuery doesn't tolerate bad data 100%... So handle its exceptions
   try
   {
      if($("#login", data).size() > 0)
      {
         // if there's an id="login" then we've got a login page, redirect to it
         // We use the current page, not the target page. The target might be a partial update.
         //alert(location.pathname + "#" + getHashLocation());
         top.location.href = "/login.php?action="+encodeURIComponent(location.pathname + "#" + getHashLocation());
         return true;
      }


   }
   catch(err)
   {
      // We don't really care. If its not proper html... its not a login page :)
   }


   try
   {
      var result = $.parseJSON(data);
      if(result.server_error)
      {
         // __IF__ this is json and __IF__ server error is set to true, its most likely
         // that there's a maintenance message displayed. Simple solution: reload. This
         // will attempt to keep our location, while getting the message properly.
         top.location.reload();
      }
   }
   catch(err)
   {
   }

   return false;
}


// Submit a form and populate the content div
function submit_form(form)
{
   var theForm = '#'+form;
   // This block will be used to remove leading and trailing spaces.
   var formArr = $(theForm).serializeArray();
   jQuery.each(formArr, function(i, field)
   {
      formArr[i].value = $.trim(field.value);
   });
   form_post = $.param(formArr);

   var go_url = $(theForm).attr('action');

   // POST the data and write the result into our content div
   $.post(go_url, form_post, function(data, status)
   {
      if(redirected(data))
      {
         // We can't forward to the desired url... since it would require form data.
         return;
      }
      update_history(go_url);
      $('#content').html(data);
   });
   return false;
}

// Submit a form and populate the specified div
// fn is a series of JS statements to evaluate as a callback
// TODO - Add some form of success/error tracking and run callbacks based on the result
function submit_form_ajax(form, callback)
{
   var theForm = '#'+form;
   // This block will be used to remove leading and trailing spaces.
   var formArr = $(theForm).serializeArray();
   jQuery.each(formArr, function(i, field)
   {
      formArr[i].value = $.trim(field.value);
   });
   form_post = $.param(formArr);

   var go_url = $(theForm).attr('action');

   // POST the data and write the result into our content div
   $.post(go_url, form_post, function(data, status)
   {
      if(redirected(data))
      {
         return;
      }

      if(callback)
      {
         callback();
      }
      write_message(data);
   });
   return false;
}


function submit_form_json(form, callback)
// Submit a form and populate the specified div
// checks the user's session before submitting
// if no callback function specified, just prints any message data returned
{
   var theForm = '#'+form;
   // This block will be used to remove leading and trailing spaces.
   var formArr = $(theForm).serializeArray();
   jQuery.each(formArr, function(i, field)
   {
      formArr[i].value = $.trim(field.value);
   });
   form_post = $.param(formArr);

   var go_url = $(theForm).attr('action');

   // POST the data and write the result into our content div
   $.post(go_url, form_post, function(jsonData)
   {
      if(redirected(jsonData))
      {
         return;
      }

      // process JSON data via callback
      if(callback)
      {
         callback(jsonData);
      }
      // no callback, check for and display messages
      else
      {
         write_json_message(jsonData);
      }
   });
   return false;
}


// UNUSED
// fn is a series of JS statements to evaluate as a callback
// function handle_submit(formName, callback)
// {
//    if(validate_form(formName))
//    {
//       submit_form_ajax(formName, callback);
//    }
// }


// function to handle history
var check_history = function()
{
   if(in_click === 0)
   {
      var location_hash;
      // Are we using an IE version older than 9.0?
      if($.browser.msie && $.browser.version < 9.0)
      {
         var ihistory = $("#p_history_iframe")[0];
         if($.browser.version < 8.0)
         {
            var iframe = ihistory.contentDocument || ihistory.contentWindow.document;
         }
         else
         {
            var iframe = ihistory.document;
         }
         location_hash = iframe.location.hash;
      }
      else
      {
         // Use the location.href because firefox decodes the location.hash, where other browsers don't
         location_hash = "#" + getHashLocation();
      }

      if(location_hash != p_here)
      {
         // load the status page, when the browser history sends us back to an index i.e. "/admin"
         if(hashEnabled)
         {
            if(location_hash == '#' || location_hash == '')
            {
               if(hashLocation == "")
               {
                  $(hashTarget).html('');
                  p_here = "#";
               }
               else
               {
                  $(hashTarget).update(hashLocation);
               }
            }
            else
            {
               $(hashTarget).update(location_hash.replace(/^.*#/, ''), updateOpts.history);
            }
         }
      }
   }
   setTimeout(check_history, 200);
}




////////////////////////////////////////////

// The hashLocation is the part of the address after the hash. EG: http:/server/page.php?query=1#red
// would return "red"
function getHashLocation()
{
   // Use the location.href because firefox decodes the location.hash, where other browsers don't
   return (location.href.split("#")[1] || "");
}


function confirmNavigationChange()
{
   var title = "Alert";
   // Consider carefully before changing this message. It should probably match the message displayed by check_changes_dom
   var msg = "Are you sure you want to navigate away from this page?\n\nAny unsaved changes you have made will be lost.\n\nPress OK to continue, or Cancel to stay on the current page.";
   if(!confirm(msg))
   {
      return false;
   }
   return true;
}





$.ajaxSetup(
{
   cache: false
});


hasTrackingChanged = function()
{
   var trackedObjects = $('form:[track_enabled=1]');
   for(var i=0; i < trackedObjects.length; i++)
   {
      // .eq grabs the object as a jquery object
      if(trackedObjects.eq(i).hasTrackChanged())
      {
         return true;
      }
   }

   return false;
}

resetAllTracking = function()
{
   $('form:[track_enabled=1]').each(function()
   {
      $(this).resetTracking();
   });
}

clearAllTracking = function()
{
   $('form:[track_enabled=1]').each(function()
   {
      $(this).stopTracking();
   });
}


check_changes = function()
{
   if(hasTrackingChanged())
   {
      if(!confirmNavigationChange())
      {
         return false;
      }
   }
   return true;
};

check_changes_dom = function()
{
   if(hasTrackingChanged())
   {
      return "Any unsaved changes you have made will be lost.";
   }
   // Default no return causes the user to not be inhibitted by obnxious messages.
};



// REMOVE
// Don't use this, since jquery has its own parseJSON function now
// function parseJSON(json)
// {
//    try
//    {
//       if(/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(json))
//       {
//          var j = eval('(' + json + ')');
//          return j;
//       }
//    }
//    catch(e)
//    {
//       return false;
//    }
// }


// reverse an array
$.fn.reverse = [].reverse;

$.fn.disable = function()
{
   return this.attr('disabled', true);
};

$.fn.enable = function()
{
   return this.attr('disabled', false);
};

$.fn.check = function()
{
   return this.attr('checked', true);
};

$.fn.uncheck = function()
{
   return this.attr('checked', false);
};

$.fn.ellipsis = function()
{
   return this.each(function()
   {
      var el = $(this);

      if(el.css("overflow") == "hidden"&&el.css("display") != "none")
      {
         var origText = el.html();
         var text = origText;
         var multiline = el.hasClass('multiline');
         var t = $(this.cloneNode(true))
         .hide()
         .css('position', 'absolute')
         .css('overflow', 'visible')
         .width(multiline ? el.width() : 'auto')
         .height(multiline ? 'auto' : el.height());

         el.append(t);

         function height() { return t.height() > el.height(); };
         function width() { return t.width() > el.width(); };
         function smallheight() { return t.height() < el.height(); };
         function smallwidth() { return t.width() < el.width(); };

         var tooLarge = multiline ? height : width;
         var tooSmall = multiline ? smallheight : smallwidth;

         var max = text.length;
         var cur = text.length;
         var min = 0;

         while (text.length > 0)
         {
            if(max - min <= 1)
            {
               break;
            }
            else if(tooLarge())
            {
               max = cur;
            }
            else if(tooSmall())
            {
               min = cur;
            }
            else
            {
               break;
            }
            cur = Math.floor((min + max)/2);

            text = origText.substr(0, cur);
            t.html(text + "...");
         }
         if(cur!=origText.length)
         {
            el.html(t.html());
            el.attr('ellipsis', origText);
         }
         t.remove();
      }
   });
};

$.fn.ShiftClick = function()
{
   var lastClick = null;
   var items = this;
   items.unbind('click');
   items.bind('click', function(e)
   {
      if((lastClick != null) && (e.shiftKey))
      {
         // figure out how to order the 2 clicks
         var min = Math.min(items.index(lastClick), items.index(e.target));
         var max = Math.max(items.index(lastClick), items.index(e.target)) + 1;
         items.slice(min,max).attr({checked: e.target.checked ? "checked" : ""});

      }
      // save the last click
      lastClick = e.target;
   });
};

$.fn.unique = function()
{
   var objs = this.get();
   objs = $.unique(objs);
   return $(objs);
};

$.fn.center = function()
{
   this.css("position", "fixed");
   this.css("top", ($(window).height()/2) - (this.height()/2) + "px");
   this.css("left", ($(window).width()/2) - (this.width()/2) + "px");
   return this;
}

$.fn.autoCenter = function()
{
   var target = this;
   this.center();
   $(window).resize(function()
   {
      target.center();
   });
   return this;
}

/*$.fn.wait = function( time )
{
   var $self = this;
   setTimeout(function()
   {
      $self.dequeue('delay');
   }, time );
   return $self.activeQueue('delay').queue('delay',function(){});
};*/

$.fn.wait = function(time, type)
{
   time = time || 1000;
   type = type || "fx";
   return this.queue(type, function()
   {
      var self = this;
      setTimeout(function()
      {
         $(self).dequeue();
      }, time);
   });
};

$.fn.delay = function(time, callback)
{
    // Empty function:
    jQuery.fx.step.delay = function(){};
    // Return meaningless animation, (will be added to queue)
    return this.animate({delay:1}, time, callback);
};

$.fn.outerHTML = function(that)
{
   var newElement = document.createElement(this[0].nodeName);
   newElement.innerHTML = (typeof that === 'string') ? that : (that.jQuery) ? that[0].innerHTML :  '';

   if(!that)
   {
      return document.createElement('BODY').appendChild(this[0].cloneNode(true)).parentNode.innerHTML;
   }
   else
   {
      this[0].parentNode.replaceChild(newElement, this[0]);

      return document.createElement('BODY').appendChild(newElement.cloneNode(true)).parentNode.innerHTML;
   }
};

// Only call this on forms. No other sets will be tracked.
$.fn.startTracking = function()
{
   var serializedContents = jQuery(':not(.track_ignore)', $(this)).serialize();
   $(this).data('track_initial_data', serializedContents); //set/reset

   if($(this).data('track_enabled')==undefined||$(this).data('track_enabled')=='0')
   {
      $(this).data('track_enabled', '1');
   }
};

$.fn.stopTracking = function()
{
      $(this).data('track_enabled', '0');
}

$.fn.resetTracking = function()
{
   var serializedContents = jQuery(':not(.track_ignore)', $(this)).serialize();
   $(this).data('track_initial_data', serializedContents); //set/reset
}

$.fn.hasTrackChanged = function()
{
   var serializedContents = jQuery(':not(.track_ignore)', $(this)).serialize();
   var initialContents = $(this).data('track_initial_data');
   if (serializedContents==initialContents)
   {
      return false;
   }
   return true;
}
/* spriteButton enables 'sprite map' style background images automatically. The image should be vertically aligned. Top image is the normal. second is down. third is clicked. */
$('.spriteButton').die('mouseover');
$('.spriteButton').live('mouseover', function()
{
   $(this).css('background-position', '0px -'+ ($(this).height()*2+$(this).css('padding-top').replace('px', '')*2) +'px');
   $(this).data('hover', '1');
});
$('.spriteButton').die('mouseleave');
$('.spriteButton').live('mouseleave', function()
{
   $(this).css('background-position', '0px 0px');
   $(this).data('hover', '0');
});
$('.spriteButton').die('mousedown');
$('.spriteButton').live('mousedown', function()
{
   $(this).css('background-position', '0px -'+ (parseInt($(this).height())+parseInt($(this).css('padding-top').replace('px', ''))) +'px');
});
$('.spriteButton').die('mouseup');
$('.spriteButton').live('mouseup', function()
{
   if($(this).data('hover') === '1')
   {
   $(this).css('background-position', '0px -'+ ($(this).height()*2+$(this).css('padding-top').replace('px', '')*2) +'px');
   }
   else
   {
      $(this).css('background-position', '0px 0px');
   }
});


// this expects to find certain divs to modify, only used in UserAdminstration right now
function check_password(passOne, passTwo)
{
   var match=false;
   $.post('/ajax/check_pass.php?do=check_password',{pass1: passOne, pass2: passTwo}, function(jsonData)
   {
      var result = $.parseJSON(jsonData);
      if(result.reason.length > 0)
      {
         $('#strength').html('Error: '+result.reason);
      }
      else
      {
         $('#strength').html('');
      }

      $('#submit_btn').data('on',result.result);

      var percentage = parseInt(result.strength)
      var max = $('#password_bar').width();
      var width = Math.round(percentage / 100 * max);

      $('#pos_bar').width(width);
      $('#neg_bar').width(max - width);

      if(percentage > 75)
      {
         $('#pos_bar').css('backgroundColor','#00FF00');
      }
      else if(percentage > 50)
      {
         $('#pos_bar').css('backgroundColor','#FFFF00');
      }
      else if(percentage > 25)
      {
         $('#pos_bar').css('backgroundColor','#FF6600');
      }
      else
      {
         $('#pos_bar').css('backgroundColor','#FF0000');
      }

      /* Do the passwords match */
      if(result.mismatch.length > 0)
      {
         $('#mismatch').html('Error: '+result.mismatch);
         match=false;
      }
      else
      {
         $('#mismatch').html('');
         match=true;
      }
   });
   return match;
}

function display_notice(url, width, height)
{
   var contents = '', width_str = '', height_str = '', data, pos_y, w_height, w_scroll;

   if(width)
   {
      width_str = "width:"+width+"px;";
   }
   if(height)
   {
      height_str = "height:"+height+"px;";
   }

   if($('#base_overlay').length <= 0)
   {
      $('body').append('<div id="base_alert" style="'+width_str+height_str+'" ></div>');
      $('body').append('<div id="base_overlay" style="height:'+$(document).height()+'px;"></div>');
   }

   if(url)
   {
      data = $.ajax(
      {
         url: url,
         async: false
      }).responseText;

      $('#base_alert').html(data);
   }

   w_height = $(window).height();
   w_scroll = $(window).scrollTop();

   pos_y = (w_height / 2) - (parent.$('#base_alert').height() / 2) + w_scroll;

   $('#base_alert').css('top',pos_y+'px');
   $('#base_overlay').css('opacity',0.8);
   $('#base_overlay,#base_alert').hide().fadeIn('normal', function()
   {
      bindone = function(e)
      {
         if(e.button != 0)
         {
            return false;
         }

         $('#base_overlay,#base_alert').fadeOut('normal', function()
         {
            $('#base_overlay,#base_alert').remove();
         });

         $(document).unbind('click.overlay', arguments.callee);
      };

      $(document).bind('click.overlay', bindone);
   });
}

function display_notice_text(data, width, height)
{
   var contents = '', width_str = '', height_str = '', pos_y, w_height, w_scroll;

   if(width)
   {
      width_str = "width:"+width+"px;";
   }
   if(height)
   {
      height_str = "height:"+height+"px;";
   }

   if($('#base_overlay').length <= 0)
   {
      $('body').append('<div id="base_alert" style="'+width_str+height_str+'" ></div>');
      $('body').append('<div id="base_overlay" style="height:'+$(document).height()+'px;"></div>');
   }

   $('#base_alert').html(data);

   w_height = $(window).height();
   w_scroll = $(window).scrollTop();

   pos_y = (w_height / 2) - (parent.$('#base_alert').height() / 2) + w_scroll;

   $('#base_alert').css('top',pos_y+'px');
   $('#base_overlay').css('opacity',0.8);
   $('#base_overlay,#base_alert').hide().fadeIn('normal', function()
   {
      bindone = function(e)
      {
         if(e.button != 0)
         {
            return false;
         }

         $('#base_overlay,#base_alert').fadeOut('normal', function()
         {
            $('#base_overlay,#base_alert').remove();
         });

         $(document).unbind('click.overlay');
      };

      $(document).bind('click.overlay', bindone);
   });
}

function  getUrlVars(url)
{
   if(url==undefined)
   {
      url=window.location.href;
   }
   //get the $_GET vars out of the location and into js!!
   var vars = {};
   var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value)
   {
      if(vars[key] ===  undefined)
      {
         vars[key] = [];
      }
      vars[key].push(value);
   });
   return vars;
}

// TODO(sdempsey): I'm not sure this is needed.
// The actions that check this all call BuildApplet() which enforces login already
function is_login_needed(data)
{
   // TODO handle when login screen is returned and user needs to login again.
   if(data.indexOf("loginForm") != -1)
   {
      document.location = "/login.php?action=/index.php";
      return true;
   }
   return false;
}

/**
 * Generate a random string with the given length
 * @param {Integer} length
 * @return {String} The random string
 */
function generate_random_string(length)
{
  var randomString = "";
  var charSet = "abcdefghijklmnopqrstuvwxyz";
  for(var i = 0; i < length; i++)
  {
    randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return randomString;
}

/**
 * Launch InStream via a Java applet
 * @param appletUrl {String} The url to fetch the applet from
 * @param divId {String} a <div> id to write the applet into
 */
function launch_instream_from_applet(appletUrl, divId)
{
   console.log("Loading client applet");
   $.get(appletUrl, function(data) {
      if(!is_login_needed(data)) {
         $('#' + divId).append(data);
      }
   });
}

/**
 * @param url {String} The url to get CLA string from
 * @param callback {Function} function(err, cla)
 */
function get_instream_cla(url, callback)
{
   $.get(url, function(data) {
      if(!is_login_needed(data)) {
         var str = String(data)
         if(str.search('<script type="text/javascript">') < 0) {
            // we did not find javascript, return the raw CLA
            callback(null, data);
         } else {
            // trigger an error so the caller can use the new JS selector
            callback("Found Multiple CLAs", data);
         }
      } else {
        callback("error", "");
      }
   }).fail(function() {
     callback("error", "");
   });
}

/**
 * Launch InStream using the Haivision Helper application
 *
 * Will attempt to contact the helper using a basePort and will try alternative ports up to maxPort
 * When Haivison Helper starts it tries to open port 17210 for listening and if it can't be opened
 * will try each subsequent port up to 10(?) times until a connection can be opened, or it gives up.
 *
 * @param url {String} The base url (https://foobar.local.haivision.com)
 * @param basePort {Integer} The initial port to connect on (17210)
 * @param maxPort {Integer} The highest port to try connecting on. (17220)
 * @param path {String} The API path to call (/launch)
 * @param params {String} URL parameters for the API call (?application=...&propertyUrl=...&cla=...)
 *
 * @return {Promise} A jQuery Promise object that can be chained with .done() and .fail()
 */
function launch_instream_from_helper(baseUrl, basePort, maxPort, path, params)
{
   // Setup a deferred object so that we can resolve a promise after either connecting or giving up
   var deferred = $.Deferred();
   var urlToUse = baseUrl + ":" + basePort + path + params;

   var xhr = new XMLHttpRequest();
   if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open("GET", urlToUse, true);
   } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open("GET", urlToUse);
   } else {
      // CORS not supported.
      xhr = null;
   }
   if(!xhr) {
      console.log("CORS not supported");
      deferred.reject();
      return deferred.promise();
   }


   xhr.onload = function() {
      console.log("Loading client app from helper");
      // We have connected, resolve the deferred object so we can process .done
      deferred.resolve();
   };

   xhr.onerror = function() {
     // if(xhr.status == 0) // There was a connection error and no http response
     if(xhr.status > 0) {
       // TODO(sdempsey): Verify this is a response from Haivision Helper
       try {
         var body = JSON.parse(xhr.responseText);
         write_message('<span class="failure">' + body.data.msg + '</span>', 3000);
       } catch (e) {
         write_message('<span class="failure">Error launching app</span>', 3000);
       }
     }

      if(basePort < maxPort) {
         basePort++;
         // recursive call, promise resolution should bubble up
         $.when(launch_instream_from_helper(baseUrl, basePort, maxPort, path, params))
            .done(function() {
               deferred.resolve();
            })
            .fail(function() {
               deferred.reject();
            });
      } else {
         // We are giving up
         deferred.reject();
      }
   };

   xhr.send();
   return deferred.promise();
};

/**
 * Launch InStream or other native client app
 *
 * Will try to contact a running Haivison Helper process, if that fails will try launching
 * a Haivison Helper process.  As a last resort will fallback to an applet based launch.
 *
 * @param app {String} The app name to launch
 * @param cla {String} Command line arguments to pass to the application
 * @param appletDivId {String} A <div> id to write the applet into
 */
 var launchingInstream = false;
 var instreamTimeout = null;
function launch_instream(app, cla, appletUrl, appletDivId)
{
   if(launchingInstream) {
      console.log(app + " already launching");
      return;
   }

   launchingInstream = true;
   instreamTimeout = window.setTimeout(function() {
      launchingInstream = false;
   }, 60000);

   var resolveLock = function() {
      launchingInstream = false;
      if(instreamTimeout) {
       window.clearTimeout(instreamTimeout);
       instreamTimeout = null;
      }
   };

   show_loading_message("Launching " + (app.indexOf("instream") === 0 ? "InStream" : app));
   var helperUrl = "https://" + generate_random_string(10) + ".apps-local.haivision.com";
   var helperPort = 17210;
   var maxPort = helperPort + 10;

   var helperPath = "/api/v1/launch"
   // NOTE: window.location.host includes the port
   var helperParams = "?app=" + app + "&url=" + window.location.protocol + "//" + window.location.host + "/vfportal-clients.manifest";
   if(cla) {
     helperParams += "&cla=" + cla;
   }

   // Define our success and failure callbacks for the deferred object
   $.when(launch_instream_from_helper(helperUrl, helperPort, maxPort, helperPath, helperParams))
    .fail(function() {
      // A running helper isn't responding, try to start one via custom protocol
      var appUrl = "haivision-helper://" + app;
      var iframe = "<iframe id='helper_launcher' width='1' height='1' style='display: none' src='" + appUrl + "'/>";
      $("#" + appletDivId).after(iframe);

      // Wait for 5 seconds after launching the helper. If it isn't responding then fallback to a Java applet
      setTimeout(function() {
         // Try to launch via helper again (will try all fallback ports)
         // TODO(sdempsey): Figure out why InStream isn't launched by the haivision-helper url
         //   Seems to require LaunchServices support on OSX
         //   https://developer.apple.com/library/mac/documentation/Carbon/Reference/LaunchServicesReference/Reference/reference.html
         // This worked on Windows when originally demoed using Registry settings, need to retest

         $.when(launch_instream_from_helper(helperUrl, helperPort, maxPort, helperPath, helperParams))
         .fail(function() {
           // This time on failure, fallback to Java
           launch_instream_from_applet(appletUrl, appletDivId);
           resolveLock();
           clear_message();
         })
         .done(function() {
           resolveLock();
           clear_message();
         });
      }, 5000);
  })
  .done(function() {
    resolveLock();
    clear_message();
  });
}



var _GET = getUrlVars();
$(function() //global binds go here. avoid livequery or rebinding (wilfried)
{        // I'm a fan of livequery, avoids the need to monitor every page click and then traverse the dom looking for a matching element (sean)
         // TODO - switch this to livequery?

   // Setup to detect changes
   window.onbeforeunload = check_changes_dom;

   var ellipseTimer;
   $('.ellipsis').not('.noEllipsisExpand').die('mouseenter');
   $('.ellipsis').not('.noEllipsisExpand').live('mouseenter', function()
   {
      if(ellipseTimer)
      {
         clearTimeout(ellipseTimer);
         ellipseTimer=null;
      }
         $('#ellipsis_tooltip').fadeOut(200,function()
         {
            $('*').remove('#ellipsis_tooltip');
         });

      if($(this).attr('ellipsis') != undefined)
      {
         var obj=$(this);
         ellipseTimer = setTimeout(function()
         {
            obj.after('<div id="ellipsis_tooltip">'+obj.attr('ellipsis')+'</div>');
            var position = obj.position();
            $('#ellipsis_tooltip').css('display','none');
            $('#ellipsis_tooltip').css('left',position.left);
            $('#ellipsis_tooltip').css('top',position.top);
            $('#ellipsis_tooltip').fadeIn(200);
         }, 1000);
      }
   });
   $('.ellipsis').die('mouseleave');
   $('.ellipsis').live('mouseleave', function()
   {
      if(ellipseTimer)
      {
         clearTimeout(ellipseTimer);
         ellipseTimer=null;
      }
   });

   $('#ellipsis_tooltip').die('mouseleave');
   $('#ellipsis_tooltip').live('mouseleave', function()
   {
      if(ellipseTimer)
      {
         clearTimeout(ellipseTimer);
         ellipseTimer=null;
      }
         $('#ellipsis_tooltip').stop().fadeOut(200,function()
         {
            $('*').remove('#ellipsis_tooltip');
         });
   });

   $(document).click(function(e)
   {
      if(e.button == 0)
      {
         var splitv, widthv, heightv;

         if($(e.target).parent().andSelf().is("a[rel^='popup']")) //syntax: rel="popupWxH" ie rel="popup320x240"
         {
            splitv = $(e.target).attr('rel').replace(/popup/,'').split('x',2);
            window.open($(e.target).attr('href'),'_blank','status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=1,scrollbars=1,width='+splitv[0]+',height='+splitv[1]);
            return false;
         }
         else if($(e.target).parent().andSelf().is("a[rel='external']"))
         {
            window.open($(e.target).attr('href'));
            return false;
         }
         else if($(e.target).parent().andSelf().is("a[rel^='overlay']")) //syntax: rel="overlayWxH" ie rel="overlay320x240"
         {
            splitv = $(e.target).attr('rel').replace(/overlay/,'').split('x',2);
            widthv = splitv[0];
            heightv = splitv[1];

            display_notice($(e.target).attr('data-help-link'),widthv);
            return false;
         }
      }
   });

   $('.to_portal').die('click');
   $('.to_portal').live('click', function()
   {
      window.location = '/';
   });

   // this is unused, there currently are no _r and _n images being used, though they may be used again in the future??
   $('.lhover').hover(
      function(e)
      {
         new_src = $(e.target).attr('src').replace(/_n./,'_r.');
         $(e.target).attr('src',new_src);
      },
      function(e)
      {
         new_src = $(e.target).attr('src').replace(/_r./,'_n.');
         $(e.target).attr('src',new_src);
      }
   );

});

