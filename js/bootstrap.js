if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")}!function(a){var b=jQuery.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}}(),function(a){a.fn.emulateTransitionEnd=function(c){var b=!1,d=this;return a(this).one("bsTransitionEnd",function(){b=!0}),setTimeout(function(){b||a(d).trigger(a.support.transition.end)},c),this},a(function(){a.support.transition=function(){var c=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var b in d){if(void 0!==c.style[b]){return{end:d[b]}}}return !1}(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(b){var c='[data-dismiss="alert"]',a=function(e){b(e).on("click",c,this.close)};a.VERSION="3.3.5",a.TRANSITION_DURATION=150,a.prototype.close=function(h){function i(){f.detach().trigger("closed.bs.alert").remove()}var j=b(this),g=j.attr("data-target");g||(g=(g=j.attr("href"))&&g.replace(/.*(?=#[^\s]*$)/,""));var f=b(g);h&&h.preventDefault(),f.length||(f=j.closest(".alert")),f.trigger(h=b.Event("close.bs.alert")),h.isDefaultPrevented()||(f.removeClass("in"),b.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",i).emulateTransitionEnd(a.TRANSITION_DURATION):i())};var d=b.fn.alert;b.fn.alert=function(f){return this.each(function(){var e=b(this),g=e.data("bs.alert");g||e.data("bs.alert",g=new a(this)),"string"==typeof f&&g[f].call(e)})},b.fn.alert.Constructor=a,b.fn.alert.noConflict=function(){return b.fn.alert=d,this},b(document).on("click.bs.alert.data-api",c,a.prototype.close)}(jQuery),function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.button"),e="object"==typeof f&&f;h||g.data("bs.button",h=new a(this,e)),"toggle"==f?h.toggle():f&&h.setState(f)})}var a=function(f,g){this.$element=b(f),this.options=b.extend({},a.DEFAULTS,g),this.isLoading=!1};a.VERSION="3.3.5",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(h){var f="disabled",j=this.$element,k=j.is("input")?"val":"html",g=j.data();h+="Text",null==g.resetText&&j.data("resetText",j[k]()),setTimeout(b.proxy(function(){j[k](null==g[h]?this.options[h]:g[h]),"loadingText"==h?(this.isLoading=!0,j.addClass(f).attr(f,f)):this.isLoading&&(this.isLoading=!1,j.removeClass(f).removeAttr(f))},this),0)},a.prototype.toggle=function(){var g=!0,h=this.$element.closest('[data-toggle="buttons"]');if(h.length){var f=this.$element.find("input");"radio"==f.prop("type")?(f.prop("checked")&&(g=!1),h.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==f.prop("type")&&(f.prop("checked")!==this.$element.hasClass("active")&&(g=!1),this.$element.toggleClass("active")),f.prop("checked",this.$element.hasClass("active")),g&&f.trigger("change")}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}};var d=b.fn.button;b.fn.button=c,b.fn.button.Constructor=a,b.fn.button.noConflict=function(){return b.fn.button=d,this},b(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var f=b(e.target);f.hasClass("btn")||(f=f.closest(".btn")),c.call(f,"toggle"),b(e.target).is('input[type="radio"]')||b(e.target).is('input[type="checkbox"]')||e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){b(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))})}(jQuery),function(b){function c(g){return this.each(function(){var i=b(this),j=i.data("bs.carousel"),h=b.extend({},a.DEFAULTS,i.data(),"object"==typeof g&&g),e="string"==typeof g?g:h.slide;j||i.data("bs.carousel",j=new a(this,h)),"number"==typeof g?j.to(g):e?j[e]():h.interval&&j.pause().cycle()})}var a=function(h,g){this.$element=b(h),this.$indicators=this.$element.find(".carousel-indicators"),this.options=g,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))};a.VERSION="3.3.5",a.TRANSITION_DURATION=600,a.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},a.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},a.prototype.cycle=function(g){return g||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval)),this},a.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},a.prototype.getItemForDirection=function(h,j){var g=this.getItemIndex(j);if(("prev"==h&&0===g||"next"==h&&g==this.$items.length-1)&&!this.options.wrap){return j}var k=(g+("prev"==h?-1:1))%this.$items.length;return this.$items.eq(k)},a.prototype.to=function(h){var j=this,g=this.getItemIndex(this.$active=this.$element.find(".item.active"));return h>this.$items.length-1||0>h?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){j.to(h)}):g==h?this.pause().cycle():this.slide(h>g?"next":"prev",this.$items.eq(h))},a.prototype.pause=function(g){return g||(this.paused=!0),this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},a.prototype.next=function(){return this.sliding?void 0:this.slide("next")},a.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},a.prototype.slide=function(t,j){var k=this.$element.find(".item.active"),x=j||this.getItemForDirection(t,k),w=this.interval,g="next"==t?"left":"right",m=this;if(x.hasClass("active")){return this.sliding=!1}var q=x[0],u=b.Event("slide.bs.carousel",{relatedTarget:q,direction:g});if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,w&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var i=b(this.$indicators.children()[this.getItemIndex(x)]);i&&i.addClass("active")}var v=b.Event("slid.bs.carousel",{relatedTarget:q,direction:g});return b.support.transition&&this.$element.hasClass("slide")?(x.addClass(t),x[0].offsetWidth,k.addClass(g),x.addClass(g),k.one("bsTransitionEnd",function(){x.removeClass([t,g].join(" ")).addClass("active"),k.removeClass(["active",g].join(" ")),m.sliding=!1,setTimeout(function(){m.$element.trigger(v)},0)}).emulateTransitionEnd(a.TRANSITION_DURATION)):(k.removeClass("active"),x.addClass("active"),this.sliding=!1,this.$element.trigger(v)),w&&this.cycle(),this}};var d=b.fn.carousel;b.fn.carousel=c,b.fn.carousel.Constructor=a,b.fn.carousel.noConflict=function(){return b.fn.carousel=d,this};var f=function(g){var k,l=b(this),h=b(l.attr("data-target")||(k=l.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,""));if(h.hasClass("carousel")){var e=b.extend({},h.data(),l.data()),j=l.attr("data-slide-to");j&&(e.interval=!1),c.call(h,e),j&&h.data("bs.carousel").to(j),g.preventDefault()}};b(document).on("click.bs.carousel.data-api","[data-slide]",f).on("click.bs.carousel.data-api","[data-slide-to]",f),b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var e=b(this);c.call(e,e.data())})})}(jQuery),function(b){function c(h){var g,j=h.attr("data-target")||(g=h.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");return b(j)}function a(g){return this.each(function(){var e=b(this),j=e.data("bs.collapse"),h=b.extend({},d.DEFAULTS,e.data(),"object"==typeof g&&g);!j&&h.toggle&&/show|hide/.test(g)&&(h.toggle=!1),j||e.data("bs.collapse",j=new d(this,h)),"string"==typeof g&&j[g]()})}var d=function(h,g){this.$element=b(h),this.options=b.extend({},d.DEFAULTS,g),this.$trigger=b('[data-toggle="collapse"][href="#'+h.id+'"],[data-toggle="collapse"][data-target="#'+h.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var k,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(m&&m.length&&(k=m.data("bs.collapse"),k&&k.transitioning))){var i=b.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){m&&m.length&&(a.call(m,"hide"),k||m.data("bs.collapse",null));var h=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[h](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var j=function(){this.$element.removeClass("collapsing").addClass("collapse in")[h](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!b.support.transition){return j.call(this)}var g=b.camelCase(["scroll",h].join("-"));this.$element.one("bsTransitionEnd",b.proxy(j,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[h](this.$element[0][g])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var h=b.Event("hide.bs.collapse");if(this.$element.trigger(h),!h.isDefaultPrevented()){var g=this.dimension();this.$element[g](this.$element[g]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var j=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return b.support.transition?void this.$element[g](0).one("bsTransitionEnd",b.proxy(j,this)).emulateTransitionEnd(d.TRANSITION_DURATION):j.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return b(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(b.proxy(function(e,g){var h=b(g);this.addAriaAndCollapsedClass(c(h),h)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(h,j){var g=h.hasClass("in");h.attr("aria-expanded",g),j.toggleClass("collapsed",!g).attr("aria-expanded",g)};var f=b.fn.collapse;b.fn.collapse=a,b.fn.collapse.Constructor=d,b.fn.collapse.noConflict=function(){return b.fn.collapse=f,this},b(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(h){var i=b(this);i.attr("data-target")||h.preventDefault();var g=c(i),e=g.data("bs.collapse")?"toggle":i.data();a.call(g,e)})}(jQuery),function(d){function g(k){var a=k.attr("data-target");a||(a=(a=k.attr("href"))&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));var l=a&&d(a);return l&&l.length?l:k.parent()}function c(a){a&&3===a.which||(d(h).remove(),d(j).each(function(){var i=d(this),k=g(i),e={relatedTarget:this};k.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&d.contains(k[0],a.target)||(k.trigger(a=d.Event("hide.bs.dropdown",e)),a.isDefaultPrevented()||(i.attr("aria-expanded","false"),k.removeClass("open").trigger("hidden.bs.dropdown",e))))}))}var h=".dropdown-backdrop",j='[data-toggle="dropdown"]',f=function(a){d(a).on("click.bs.dropdown",this.toggle)};f.VERSION="3.3.5",f.prototype.toggle=function(l){var m=d(this);if(!m.is(".disabled, :disabled")){var i=g(m),e=i.hasClass("open");if(c(),!e){"ontouchstart" in document.documentElement&&!i.closest(".navbar-nav").length&&d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click",c);var k={relatedTarget:this};if(i.trigger(l=d.Event("show.bs.dropdown",k)),l.isDefaultPrevented()){return}m.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger("shown.bs.dropdown",k)}return !1}},f.prototype.keydown=function(m){if(/(38|40|27|32)/.test(m.which)&&!/input|textarea/i.test(m.target.tagName)){var q=d(this);if(m.preventDefault(),m.stopPropagation(),!q.is(".disabled, :disabled")){var n=g(q),k=n.hasClass("open");if(!k&&27!=m.which||k&&27==m.which){return 27==m.which&&n.find(j).trigger("focus"),q.trigger("click")}var p=n.find(".dropdown-menu li:not(.disabled):visible a");if(p.length){var e=p.index(m.target);38==m.which&&e>0&&e--,40==m.which&&e<p.length-1&&e++,~e||(e=0),p.eq(e).trigger("focus")}}}};var b=d.fn.dropdown;d.fn.dropdown=function(a){return this.each(function(){var e=d(this),k=e.data("bs.dropdown");k||e.data("bs.dropdown",k=new f(this)),"string"==typeof a&&k[a].call(e)})},d.fn.dropdown.Constructor=f,d.fn.dropdown.noConflict=function(){return d.fn.dropdown=b,this},d(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",j,f.prototype.toggle).on("keydown.bs.dropdown.data-api",j,f.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",f.prototype.keydown)}(jQuery),function(b){function c(f,g){return this.each(function(){var i=b(this),h=i.data("bs.modal"),e=b.extend({},a.DEFAULTS,i.data(),"object"==typeof f&&f);h||i.data("bs.modal",h=new a(this,e)),"string"==typeof f?h[f](g):e.show&&h.show(g)})}var a=function(g,f){this.options=f,this.$body=b(document.body),this.$element=b(g),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,b.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.VERSION="3.3.5",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},a.prototype.show=function(f){var g=this,h=b.Event("show.bs.modal",{relatedTarget:f});this.$element.trigger(h),this.isShown||h.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){g.$element.one("mouseup.dismiss.bs.modal",function(i){b(i.target).is(g.$element)&&(g.ignoreBackdropClick=!0)})}),this.backdrop(function(){var i=b.support.transition&&g.$element.hasClass("fade");g.$element.parent().length||g.$element.appendTo(g.$body),g.$element.show().scrollTop(0),g.adjustDialog(),i&&g.$element[0].offsetWidth,g.$element.addClass("in"),g.enforceFocus();var e=b.Event("shown.bs.modal",{relatedTarget:f});i?g.$dialog.one("bsTransitionEnd",function(){g.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(a.TRANSITION_DURATION):g.$element.trigger("focus").trigger(e)}))},a.prototype.hide=function(f){f&&f.preventDefault(),f=b.Event("hide.bs.modal"),this.$element.trigger(f),this.isShown&&!f.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?b(window).on("resize.bs.modal",b.proxy(this.handleUpdate,this)):b(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(h){var i=this,j=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var g=b.support.transition&&j;if(this.$backdrop=b(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",b.proxy(function(e){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),g&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!h){return}g?this.$backdrop.one("bsTransitionEnd",h).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):h()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){i.removeBackdrop(),h&&h()};b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):f()}else{h&&h()}}},a.prototype.handleUpdate=function(){this.adjustDialog()},a.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){var f=window.innerWidth;if(!f){var g=document.documentElement.getBoundingClientRect();f=g.right-Math.abs(g.left)}this.bodyIsOverflowing=document.body.clientWidth<f,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},a.prototype.measureScrollbar=function(){var f=document.createElement("div");f.className="modal-scrollbar-measure",this.$body.append(f);var g=f.offsetWidth-f.clientWidth;return this.$body[0].removeChild(f),g};var d=b.fn.modal;b.fn.modal=c,b.fn.modal.Constructor=a,b.fn.modal.noConflict=function(){return b.fn.modal=d,this},b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(f){var h=b(this),j=h.attr("href"),g=b(h.attr("data-target")||j&&j.replace(/.*(?=#[^\s]+$)/,"")),e=g.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(j)&&j},g.data(),h.data());h.is("a")&&f.preventDefault(),g.one("show.bs.modal",function(i){i.isDefaultPrevented()||g.one("hidden.bs.modal",function(){h.is(":visible")&&h.trigger("focus")})}),c.call(g,e,this)})}(jQuery),function(b){var c=function(d,f){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,f)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(k,g,m){if(this.enabled=!0,this.type=k,this.$element=b(g),this.options=this.getOptions(m),this.$viewport=this.options.viewport&&b(b.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")}for(var p=this.options.trigger.split(" "),h=p.length;h--;){var f=p[h];if("click"==f){this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this))}else{if("manual"!=f){var j="hover"==f?"mouseenter":"focusin",d="hover"==f?"mouseleave":"focusout";this.$element.on(j+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(d+"."+this.type,this.options.selector,b.proxy(this.leave,this))}}}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(d){return(d=b.extend({},this.getDefaults(),this.$element.data(),d)).delay&&"number"==typeof d.delay&&(d.delay={show:d.delay,hide:d.delay}),d},c.prototype.getDelegateOptions=function(){var f={},d=this.getDefaults();return this._options&&b.each(this._options,function(e,g){d[e]!=g&&(f[e]=g)}),f},c.prototype.enter=function(f){var d=f instanceof this.constructor?f:b(f.currentTarget).data("bs."+this.type);return d||(d=new this.constructor(f.currentTarget,this.getDelegateOptions()),b(f.currentTarget).data("bs."+this.type,d)),f instanceof b.Event&&(d.inState["focusin"==f.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()},d.options.delay.show)):d.show())},c.prototype.isInStateTrue=function(){for(var d in this.inState){if(this.inState[d]){return !0}}return !1},c.prototype.leave=function(f){var d=f instanceof this.constructor?f:b(f.currentTarget).data("bs."+this.type);return d||(d=new this.constructor(f.currentTarget,this.getDelegateOptions()),b(f.currentTarget).data("bs."+this.type,d)),f instanceof b.Event&&(d.inState["focusout"==f.type?"focus":"hover"]=!1),d.isInStateTrue()?void 0:(clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()},d.options.delay.hide)):d.hide())},c.prototype.show=function(){var w=b.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(w);var k=b.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(w.isDefaultPrevented()||!k){return}var q=this,E=this.tip(),C=this.getUID(this.type);this.setContent(),E.attr("id",C),this.$element.attr("aria-describedby",C),this.options.animation&&E.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,E[0],this.$element[0]):this.options.placement,v=/\s?auto?\s?/i,x=v.test(e);x&&(e=e.replace(v,"")||"top"),E.detach().css({top:0,left:0,display:"block"}).addClass(e).data("bs."+this.type,this),this.options.container?E.appendTo(this.options.container):E.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var A=this.getPosition(),j=E[0].offsetWidth,B=E[0].offsetHeight;if(x){var z=e,D=this.getPosition(this.$viewport);e="bottom"==e&&A.bottom+B>D.bottom?"top":"top"==e&&A.top-B<D.top?"bottom":"right"==e&&A.right+j>D.width?"left":"left"==e&&A.left-j<D.left?"right":e,E.removeClass(z).addClass(e)}var y=this.getCalculatedOffset(e,A,j,B);this.applyPlacement(y,e);var t=function(){var d=q.hoverState;q.$element.trigger("shown.bs."+q.type),q.hoverState=null,"out"==d&&q.leave(q)};b.support.transition&&this.$tip.hasClass("fade")?E.one("bsTransitionEnd",t).emulateTransitionEnd(c.TRANSITION_DURATION):t()}},c.prototype.applyPlacement=function(w,t){var k=this.tip(),m=k[0].offsetWidth,A=k[0].offsetHeight,z=parseInt(k.css("margin-top"),10),g=parseInt(k.css("margin-left"),10);isNaN(z)&&(z=0),isNaN(g)&&(g=0),w.top+=z,w.left+=g,b.offset.setOffset(k[0],b.extend({using:function(d){k.css({top:Math.round(d.top),left:Math.round(d.left)})}},w),0),k.addClass("in");var q=k[0].offsetWidth,u=k[0].offsetHeight;"top"==t&&u!=A&&(w.top=w.top+A-u);var x=this.getViewportAdjustedDelta(t,w,q,u);x.left?w.left+=x.left:w.top+=x.top;var j=/top|bottom/.test(t),y=j?2*x.left-m+q:2*x.top-A+u,v=j?"offsetWidth":"offsetHeight";k.offset(w),this.replaceArrow(y,k[0][v],j)},c.prototype.replaceArrow=function(f,g,d){this.arrow().css(d?"left":"top",50*(1-f/g)+"%").css(d?"top":"left","")},c.prototype.setContent=function(){var d=this.tip(),f=this.getTitle();d.find(".tooltip-inner")[this.options.html?"html":"text"](f),d.removeClass("fade in top bottom left right")},c.prototype.hide=function(e){function g(){"in"!=h.hoverState&&f.detach(),h.$element.removeAttr("aria-describedby").trigger("hidden.bs."+h.type),e&&e()}var h=this,f=b(this.$tip),d=b.Event("hide.bs."+this.type);return this.$element.trigger(d),d.isDefaultPrevented()?void 0:(f.removeClass("in"),b.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var d=this.$element;(d.attr("title")||"string"!=typeof d.attr("data-original-title"))&&d.attr("data-original-title",d.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(j){var f=(j=j||this.$element)[0],k="BODY"==f.tagName,l=f.getBoundingClientRect();null==l.width&&(l=b.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));var g=k?{top:0,left:0}:j.offset(),d={scroll:k?document.documentElement.scrollTop||document.body.scrollTop:j.scrollTop()},h=k?{width:b(window).width(),height:b(window).height()}:null;return b.extend({},l,d,h,g)},c.prototype.getCalculatedOffset=function(f,g,d,h){return"bottom"==f?{top:g.top+g.height,left:g.left+g.width/2-d/2}:"top"==f?{top:g.top-h,left:g.left+g.width/2-d/2}:"left"==f?{top:g.top+g.height/2-h/2,left:g.left-d}:{top:g.top+g.height/2-h/2,left:g.left+g.width}},c.prototype.getViewportAdjustedDelta=function(w,q,m,g){var j={top:0,left:0};if(!this.$viewport){return j}var x=this.options.viewport&&this.options.viewport.padding||0,v=this.getPosition(this.$viewport);if(/right|left/.test(w)){var f=q.top-x-v.scroll,k=q.top+x-v.scroll+g;f<v.top?j.top=v.top-f:k>v.top+v.height&&(j.top=v.top+v.height-k)}else{var p=q.left-x,u=q.left+x+m;p<v.left?j.left=v.left-p:u>v.right&&(j.left=v.left+v.width-u)}return j},c.prototype.getTitle=function(){var d=this.$element,f=this.options;return d.attr("data-original-title")||("function"==typeof f.title?f.title.call(d[0]):f.title)},c.prototype.getUID=function(d){do{d+=~~(1000000*Math.random())}while(document.getElementById(d));return d},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=b(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")}return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(f){var d=this;f&&((d=b(f.currentTarget).data("bs."+this.type))||(d=new this.constructor(f.currentTarget,this.getDelegateOptions()),b(f.currentTarget).data("bs."+this.type,d))),f?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)},c.prototype.destroy=function(){var d=this;clearTimeout(this.timeout),this.hide(function(){d.$element.off("."+d.type).removeData("bs."+d.type),d.$tip&&d.$tip.detach(),d.$tip=null,d.$arrow=null,d.$viewport=null})};var a=b.fn.tooltip;b.fn.tooltip=function(d){return this.each(function(){var f=b(this),g=f.data("bs.tooltip"),e="object"==typeof d&&d;(g||!/destroy|hide/.test(d))&&(g||f.data("bs.tooltip",g=new c(this,e)),"string"==typeof d&&g[d]())})},b.fn.tooltip.Constructor=c,b.fn.tooltip.noConflict=function(){return b.fn.tooltip=a,this}}(jQuery),function(b){var c=function(d,f){this.init("popover",d,f)};if(!b.fn.tooltip){throw new Error("Popover requires tooltip.js")}c.VERSION="3.3.5",c.DEFAULTS=b.extend({},b.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),(c.prototype=b.extend({},b.fn.tooltip.Constructor.prototype)).constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var f=this.tip(),g=this.getTitle(),d=this.getContent();f.find(".popover-title")[this.options.html?"html":"text"](g),f.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof d?"html":"append":"text"](d),f.removeClass("fade top bottom left right in"),f.find(".popover-title").html()||f.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var d=this.$element,f=this.options;return d.attr("data-content")||("function"==typeof f.content?f.content.call(d[0]):f.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var a=b.fn.popover;b.fn.popover=function(d){return this.each(function(){var f=b(this),g=f.data("bs.popover"),e="object"==typeof d&&d;(g||!/destroy|hide/.test(d))&&(g||f.data("bs.popover",g=new c(this,e)),"string"==typeof d&&g[d]())})},b.fn.popover.Constructor=c,b.fn.popover.noConflict=function(){return b.fn.popover=a,this}}(jQuery),function(b){function c(e,f){this.$body=b(document.body),this.$scrollElement=b(b(e).is(document.body)?window:e),this.options=b.extend({},c.DEFAULTS,f),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this)),this.refresh(),this.process()}function a(e){return this.each(function(){var g=b(this),h=g.data("bs.scrollspy"),f="object"==typeof e&&e;h||g.data("bs.scrollspy",h=new c(this,f)),"string"==typeof e&&h[e]()})}c.VERSION="3.3.5",c.DEFAULTS={offset:10},c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},c.prototype.refresh=function(){var g=this,f="offset",h=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),b.isWindow(this.$scrollElement[0])||(f="position",h=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var j=b(this),k=j.data("target")||j.attr("href"),i=/^#./.test(k)&&b(k);return i&&i.length&&i.is(":visible")&&[[i[f]().top+h,k]]||null}).sort(function(i,j){return i[0]-j[0]}).each(function(){g.offsets.push(this[0]),g.targets.push(this[1])})},c.prototype.process=function(){var h,k=this.$scrollElement.scrollTop()+this.options.offset,g=this.getScrollHeight(),l=this.options.offset+g-this.$scrollElement.height(),m=this.offsets,j=this.targets,f=this.activeTarget;if(this.scrollHeight!=g&&this.refresh(),k>=l){return f!=(h=j[j.length-1])&&this.activate(h)}if(f&&k<m[0]){return this.activeTarget=null,this.clear()}for(h=m.length;h--;){f!=j[h]&&k>=m[h]&&(void 0===m[h+1]||k<m[h+1])&&this.activate(j[h])}},c.prototype.activate=function(g){this.activeTarget=g,this.clear();var f=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]',h=b(f).parents("li").addClass("active");h.parent(".dropdown-menu").length&&(h=h.closest("li.dropdown").addClass("active")),h.trigger("activate.bs.scrollspy")},c.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=b.fn.scrollspy;b.fn.scrollspy=a,b.fn.scrollspy.Constructor=c,b.fn.scrollspy.noConflict=function(){return b.fn.scrollspy=d,this},b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var f=b(this);a.call(f,f.data())})})}(jQuery),function(b){function c(g){return this.each(function(){var e=b(this),h=e.data("bs.tab");h||e.data("bs.tab",h=new a(this)),"string"==typeof g&&h[g]()})}var a=function(g){this.element=b(g)};a.VERSION="3.3.5",a.TRANSITION_DURATION=150,a.prototype.show=function(){var l=this.element,h=l.closest("ul:not(.dropdown-menu)"),m=l.data("target");if(m||(m=(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]*$)/,"")),!l.parent("li").hasClass("active")){var p=h.find(".active:last a"),j=b.Event("hide.bs.tab",{relatedTarget:l[0]}),g=b.Event("show.bs.tab",{relatedTarget:p[0]});if(p.trigger(j),l.trigger(g),!g.isDefaultPrevented()&&!j.isDefaultPrevented()){var k=b(m);this.activate(l.closest("li"),h),this.activate(k,k.parent(),function(){p.trigger({type:"hidden.bs.tab",relatedTarget:l[0]}),l.trigger({type:"shown.bs.tab",relatedTarget:p[0]})})}}},a.prototype.activate=function(j,k,l){function h(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),j.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),i?(j[0].offsetWidth,j.addClass("in")):j.removeClass("fade"),j.parent(".dropdown-menu").length&&j.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),l&&l()}var g=k.find("> .active"),i=l&&b.support.transition&&(g.length&&g.hasClass("fade")||!!k.find("> .fade").length);g.length&&i?g.one("bsTransitionEnd",h).emulateTransitionEnd(a.TRANSITION_DURATION):h(),g.removeClass("in")};var d=b.fn.tab;b.fn.tab=c,b.fn.tab.Constructor=a,b.fn.tab.noConflict=function(){return b.fn.tab=d,this};var f=function(e){e.preventDefault(),c.call(b(this),"show")};b(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',f).on("click.bs.tab.data-api",'[data-toggle="pill"]',f)}(jQuery),function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.affix"),e="object"==typeof f&&f;h||g.data("bs.affix",h=new a(this,e)),"string"==typeof f&&h[f]()})}var a=function(f,g){this.options=b.extend({},a.DEFAULTS,g),this.$target=b(this.options.target).on("scroll.bs.affix.data-api",b.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",b.proxy(this.checkPositionWithEventLoop,this)),this.$element=b(f),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};a.VERSION="3.3.5",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(q,m,k,g){var h=this.$target.scrollTop(),u=this.$element.offset(),p=this.$target.height();if(null!=k&&"top"==this.affixed){return k>h&&"top"}if("bottom"==this.affixed){return null!=k?!(h+this.unpin<=u.top)&&"bottom":!(q-g>=h+p)&&"bottom"}var f=null==this.affixed,j=f?h:u.top;return null!=k&&k>=h?"top":null!=g&&j+(f?p:m)>=q-g&&"bottom"},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(a.RESET).addClass("affix");var f=this.$target.scrollTop(),g=this.$element.offset();return this.pinnedOffset=g.top-f},a.prototype.checkPositionWithEventLoop=function(){setTimeout(b.proxy(this.checkPosition,this),1)},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var m=this.$element.height(),p=this.options.offset,q=p.top,j=p.bottom,g=Math.max(b(document).height(),b(document.body).height());"object"!=typeof p&&(j=q=p),"function"==typeof q&&(q=p.top(this.$element)),"function"==typeof j&&(j=p.bottom(this.$element));var k=this.getState(g,m,q,j);if(this.affixed!=k){null!=this.unpin&&this.$element.css("top","");var f="affix"+(k?"-"+k:""),i=b.Event(f+".bs.affix");if(this.$element.trigger(i),i.isDefaultPrevented()){return}this.affixed=k,this.unpin="bottom"==k?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")}"bottom"==k&&this.$element.offset({top:g-m-j})}};var d=b.fn.affix;b.fn.affix=c,b.fn.affix.Constructor=a,b.fn.affix.noConflict=function(){return b.fn.affix=d,this},b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var e=b(this),f=e.data();f.offset=f.offset||{},null!=f.offsetBottom&&(f.offset.bottom=f.offsetBottom),null!=f.offsetTop&&(f.offset.top=f.offsetTop),c.call(e,f)})})}(jQuery);