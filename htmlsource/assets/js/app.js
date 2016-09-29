//Declare Common code (I)
var gaWrapper = {};
var googleAnalyticsTrackingId = 'UA-3507894-29';
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
var focusMode = false;

//End Common code (I)
if (!isNativeApplication) {
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', googleAnalyticsTrackingId, 'auto');
    ga('send', 'pageview');
    gaWrapper = function(send, event, category, action, label) {
        ga(send, event, category, action, label);
    }
} else {
    //if mobile device detected
    //Load cordova.js dynamically
    var cordovaScript = document.createElement('script');
    cordovaScript.setAttribute('src', 'cordova.js');
    document.head.appendChild(cordovaScript);
    //device ready callback funciton
    var deviceReadyCallBack = function() {
        //GA init
        window.analytics.startTrackerWithId(googleAnalyticsTrackingId);
        window.analytics.trackView("pageview");
        $(window).on("scroll", remakeStickyKeyboard);
        var isiOS = navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1;
           setTimeout(function() {
                navigator.splashscreen.hide();
                $('.panzoom-element img').trigger("unveil");
            }, 1000);
        var remakeStickyKeyboard = function(data, event) {
            if (Keyboard.isVisible) {
                sticky.destroy()
                sticky = new Waypoint.Sticky({
                    element: $('.sticky-holder')[0]
                });
            }
        };
    }
    //device ready event
    document.addEventListener('deviceready', deviceReadyCallBack, false);
    gaWrapper = function(send, event, category, action, label) {
        window.analytics.trackEvent(category, action, label);
    }
}
ko.bindingHandlers["ui-accordion"] = {
    init: function(element, valueAccessor, binding, viewModel) {
        //var config = ko.utils.unwrapObservable(valueAccessor());
        $(element).addClass("accordion");
        var children = $(element).children();
        var bodies = $.map(children, function(child) {
            return $(child).children()[1];
        });
        var headers = $.map(children, function(child) {
            return $(child).children()[0];
        })
        $.each(children, function(childIndex, child) {
            var child = $(child);
            var header = $((child).children()[0]);
            header.addClass("toggle");
            var body = $((child).children()[1]);
            header.click(function() {
                $.each(headers, function(headerIndex, otherHeader) {
                    if (headerIndex !== otherHeader) {
                        $(otherHeader).parent().removeClass('selected');
                    }
                });
                $(this).parent().addClass('selected');
                // show this body
                body.slideDown();
                // hide all other bodies
                $.each(bodies, function(bodyIndex, otherBody) {
                    if (bodyIndex !== childIndex) {
                        $(otherBody).slideUp();
                    }
                });
            });
        });
        $.each(bodies, function(i, body) {
            if (i !== 0) {
                $(body).hide();
            }
        });
        $.each(children, function(i, child) {
            if (i == 0) {
                $(child).addClass('selected');
            }
        });
    },
    update: function(element, valueAccessor) {}
};
ko.bindingHandlers.toggle = {
    'after': ['value', 'attr'],
    'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This updates the model selection array when the DOM element is clicked
        function updateModel() {
            //supporting both binding to boolean property and arrays
            if (isValueArray) {
                var index = ko.utils.arrayIndexOf(underlyingValue, viewModel);
                if (index > -1) {
                    underlyingValue.splice(index, 1);
                } else {
                    underlyingValue.push(viewModel);
                }
                if (isObservable) {
                    modelProperty.valueHasMutated();
                }
            } else {
                if (isObservable && isWritable) {
                    //flip the true/false value of an observable
                    modelProperty(!modelProperty());
                } else {
                    //flip the true/false value of a property
                    viewModel[modelProperty] = !viewModel[modelProperty];
                }
            }
        };
        var modelProperty = valueAccessor();
        var underlyingValue = ko.utils.unwrapObservable(modelProperty);
        var isValueArray = underlyingValue instanceof Array;
        var isObservable = ko.isObservable(modelProperty);
        var isWritable = ko.isWriteableObservable(modelProperty);
        // Set up a computed to update the binding:
        ko.utils.registerEventHandler(element, "click", updateModel);
    }
};

var tabchange = function(data, event) {
    $('.tabs-primary li').removeClass('selected');
    if( data.page.currentId != ""){
        string = '.' + data.page.currentId + '-Tab';}
    else{
        string = '.' + data.page.route[data.page.route.length -2] + '-Tab';
        }
    console.log(" tab change - " + string);
    $(string).addClass('selected');
}
var subtabchange = function(data, event) {
    $('.tabs:not(.tabs-primary) li').removeClass('selected');
     var string = '';
    if( data.page.currentId != ""){
        string = '.' + data.page.currentId + '-Tab';}
    else{
        string = '.' + data.page.route[data.page.route.length -2] + '-Tab';
        }
    console.log(" sub tab change - " + string);    
    $(string).addClass('selected');
}
var loadTopofPage = function(data, event) {
    $("html, body").animate({
        scrollTop: 0
    });
}
var goBack = function() {
    window.history.back()
}
var panelScrollTop = function(data, event) {
    var offset = $(event.currentTarget).parent().parent().offset().top - 50;
    var winOffset = $(window).scrollTop();
    var newScroll = (offset <= winOffset) ? offset : 0;
    $(window).scrollTop(newScroll);
};
var pageScrollTop = function(data, event) {
    $(window).scrollTop(0);
}
var panelVisibleToggle = function(data, event) {
    var target = data + ' .collapsable-panel'
    $(target).toggle();
};
var panelHide = function(data, event) {
    $(event.currentTarget).parents('.collapsable-panel').hide();
    $(event.currentTarget).parents('.selected').removeClass('selected');
};
var panelShow = function(data, event) {
    var target = data + ' .collapsable-panel'
    $(target).show();
};
var listchange = function(data, event) {
    var hash = location.hash;
    $('.nav-list li').each(function() {
        var that = $(this);
        that[$('a', this).attr('href') === hash ? 'addClass' : 'removeClass']('selected');
    });
};
var sticky = new Waypoint.Sticky({
    element: $('.sticky-holder')[0]
});
var waypoint = new Waypoint({
    element: $(".shrink-waypoint"),
    handler: function(direction) {
        if (direction == "down") {
            $(".sticky-holder").addClass("shrink");
        } else {
            $(".sticky-holder").removeClass("shrink");
        };
        console.log(direction);
    }
});
var remakeSticky = function(data, event) {
    sticky.destroy()
    sticky = new Waypoint.Sticky({
        element: $('.sticky-holder')[0]
    });
};



var panzoom = function(data, event) {
    var $windowheight = $(window).height() - 50;
    var $scaleZoom = $('.parent.panzoom').width() / $('.panzoom-element img').width();
    var resultZoom = "'scale(" + $scaleZoom + ")'";
    var $panHolder = $(".panzoom-element");
    var $panButtons = $(".panzoom-buttons");
    $(".parent.panzoom").height($windowheight);
    $panHolder.panzoom({
        $zoomIn: $panButtons.find(".zoom-in"),
        $zoomOut: $panButtons.find(".zoom-out"),
        $reset: $panButtons.find(".reset"),
        contain: 'invert',
    });
};

var allSelectElements = document.getElementsByTagName('select');
for (var i=0; i < allSelectElements.length; i++) {
    allSelectElements[i].addEventListener('touchstart', function(e){
        //This is the important line
        e.stopPropagation(); 
    }, false);
}
$(function () {
 $('input').keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if ((code===13) || (code===10)){
      $(this).blur();
      return false;
      }
  }); 
});

// Android fix for the soft keyboard problem
$(window).on("resize", remakeSticky);
//Ios fix for the soft keyboard problem
// events that help hide and show the score bar when the soft keyboard is open to remove the fixed scroll problem. 
window.addEventListener('keyboardDidShow', function () {
    $( "#scorebar" ).slideUp();
});
window.addEventListener('keyboardDidHide', function () {
    $( "#scorebar" ).slideDown();
});