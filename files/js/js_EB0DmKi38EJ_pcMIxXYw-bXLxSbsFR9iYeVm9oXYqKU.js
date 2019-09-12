!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?exports["AMUI"]=b(require("jquery")):a["AMUI"]=b(a["jQuery"])}(this,function(a){return function(a){function c(d){if(b[d]){return b[d].exports}var e=b[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}var b={};return c.m=a,c.c=b,c.p="",c(0)}([function(a,b,c){var d=c(1),e=c(2);c(3),c(4),c(5),c(6),c(7),c(8),c(9),c(10),c(11),a.exports=d.AMUI=e},function(b){b.exports=a},function(a,b,c){var e,f,g,h,d=c(1);if("undefined"==typeof d){throw new Error("Amaze UI 2.x requires jQuery :-(\n爱上一匹野马，可你的家里没有草原…")}e=d.AMUI||{},f=d(window),g=window.document,h=d("html"),e.VERSION="2.5.2",e.support={},e.support.transition=function(){var a=function(){var c,a=g.body||g.documentElement,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(c in b){if(void 0!==a.style[c]){return b[c]}}}();return a&&{end:a}}(),e.support.animation=function(){var a=function(){var c,a=g.body||g.documentElement,b={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(c in b){if(void 0!==a.style[c]){return b[c]}}}();return a&&{end:a}}(),e.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator["msPointerEnabled"]&&window.navigator["msMaxTouchPoints"]>0||window.navigator["pointerEnabled"]&&window.navigator["maxTouchPoints"]>0||!1,e.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,e.support.formValidation="function"==typeof document.createElement("form").checkValidity,e.utils={},e.utils.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},e.utils.isInView=function(a,b){var g,h,i,j,k,c=d(a),e=!(!c.width()&&!c.height())&&"none"!==c.css("display");return e?(g=f.scrollLeft(),h=f.scrollTop(),i=c.offset(),j=i.left,k=i.top,b=d.extend({topOffset:0,leftOffset:0},b),k+c.height()>=h&&k-b.topOffset<=h+f.height()&&j+c.width()>=g&&j-b.leftOffset<=g+f.width()):!1},e.utils.parseOptions=e.utils.options=function(a){var b,c;if(d.isPlainObject(a)){return a}if(b=a?a.indexOf("{"):-1,c={},-1!=b){try{c=new Function("","var json = "+a.substr(b)+"; return JSON.parse(JSON.stringify(json));")()}catch(e){}}return c},e.utils.generateGUID=function(a){var b=a+"-"||"am-";do{b+=Math.random().toString(36).substring(2,7)}while(document.getElementById(b));return b},e.utils.getAbsoluteUrl=function(){var a;return function(b){return a||(a=document.createElement("a")),a.href=b,a.href}}(),e.plugin=function(a,b,c){var f=d.fn[a];c=c||{},d.fn[a]=function(f){var i,g=Array.prototype.slice.call(arguments,0),h=g.slice(1),j=this.each(function(){var j=d(this),k="amui."+a,l=c.dataOptions||"data-am-"+a,m=j.data(k),n=d.extend({},e.utils.parseOptions(j.attr(l)),"object"==typeof f&&f);(m||"destroy"!==f)&&(m||j.data(k,m=new b(this,n)),c.methodCall?c.methodCall.call(j,g,m):(c.before&&c.before.call(j,g,m),"string"==typeof f&&(i="function"==typeof m[f]?m[f].apply(m,h):m[f]),c.after&&c.after.call(j,g,m)))});return void 0===i?j:i},d.fn[a].Constructor=b,d.fn[a].noConflict=function(){return d.fn[a]=f,this},e[a]=b},d.fn.emulateTransitionEnd=function(a){var f,b=!1,c=this;return d(this).one(e.support.transition.end,function(){b=!0}),f=function(){b||d(c).trigger(e.support.transition.end),c.transitionEndTimmer=void 0},this.transitionEndTimmer=setTimeout(f,a),this},d.fn.redraw=function(){return this.each(function(){this.offsetHeight})},d.fn.transitionEnd=function(a){function d(e){a.call(this,e),b&&c.off(b,d)}var b=e.support.transition.end,c=this;return a&&b&&c.on(b,d),this},d.fn.removeClassRegEx=function(){return this.each(function(a){var c,e,f,b=d(this).attr("class");if(!b||!a){return!1}for(c=[],b=b.split(" "),e=0,f=b.length;f>e;e++){b[e].match(a)||c.push(b[e])}d(this).attr("class",c.join(" "))})},d.fn.alterClass=function(a,b){var e,c=this;return-1===a.indexOf("*")?(c.removeClass(a),b?c.addClass(b):c):(e=new RegExp("\\s"+a.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g"),c.each(function(a,b){for(var c=" "+b.className+" ";e.test(c);){c=c.replace(e," ")}b.className=d.trim(c)}),b?c.addClass(b):c)},e.utils.rAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return window.setTimeout(a,1000/60)}}(),e.utils.cancelAF=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(a){window.clearTimeout(a)}}(),e.utils.measureScrollbar=function(){var a,b;return document.body.clientWidth>=window.innerWidth?0:(a=d('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>'),d(document.body).append(a),b=a[0].offsetWidth-a[0].clientWidth,a.remove(),b)},e.utils.imageLoader=function(a,b){function c(){b(a[0])}function d(){var a,b;this.one("load",c),/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&(a=this.attr("src"),b=a.match(/\?/)?"&":"?",b+="random="+(new Date).getTime(),this.attr("src",a+b))}return a.attr("src")?(a[0].complete||4===a[0].readyState?c():d.call(a),void 0):(c(),void 0)},e.template=function(a,b){var c=e.template;return c.cache[a]||(c.cache[a]=function(){var b=a,d=/^[\w\-]+$/.test(a)?c.get(a):(b="template(string)",a),e=1,f=("try { "+(c.variable?"var "+c.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+d.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n/g,function(){return"';\nthis.line = "+ ++e+"; this.ret += '\\n"}).replace(/\x11-(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(c.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+b+"' + ' line ' + this.line + ')'; } //@ sourceURL="+b+"\n").replace(/this\.ret \+= '';/g,""),g=new Function(f),h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},i=function(a){return(""+a).replace(/[&<>\'\"]/g,function(a){return h[a]})};return function(a){return g.call(c.context={escapeHTML:i,line:1,ret:"",stash:a})}}()),b?c.cache[a](b):c.cache[a]},e.template.cache={},e.template.get=function(a){if(a){var b=document.getElementById(a);return b&&b.innerHTML||""}},e.DOMWatchers=[],e.DOMReady=!1,e.ready=function(a){e.DOMWatchers.push(a),e.DOMReady&&a(document)},e.DOMObserve=function(a,b,c){var f=e.support.mutationobserver;f&&(b=d.isPlainObject(b)?b:{childList:!0,subtree:!0},c="function"==typeof c&&c||function(){},d(a).each(function(){var h,a=this,g=d(a);if(!g.data("am.observer")){try{h=new f(e.utils.debounce(function(b,d){c.call(a,b,d),g.trigger("changed.dom.amui")},50)),h.observe(a,b),g.data("am.observer",h)}catch(i){}}}))},d.fn.DOMObserve=function(a,b){return this.each(function(){e.DOMObserve(this,a,b)})},e.support.touch&&h.addClass("am-touch"),d(document).on("changed.dom.amui",function(a){var b=a.target;d.each(e.DOMWatchers,function(a,c){c(b)})}),d(function(){var b,a=d("body");e.DOMReady=!0,d.each(e.DOMWatchers,function(a,b){b(document)}),e.DOMObserve("[data-am-observe]"),h.removeClass("no-js").addClass("js"),e.support.animation&&h.addClass("cssanimations"),window.navigator.standalone&&h.addClass("am-standalone"),d(".am-topbar-fixed-top").length&&a.addClass("am-with-topbar-fixed-top"),d(".am-topbar-fixed-bottom").length&&a.addClass("am-with-topbar-fixed-bottom"),b=d(".am-layout"),b.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"),b.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"),d("[data-am-widget]").each(function(){var a=d(this);0===a.parents(".am-layout").length&&a.addClass("am-no-layout")})}),a.exports=e},function(a,b,c){function l(a,b,c){return setTimeout(r(a,c),b)}function m(a,b,c){return Array.isArray(a)?(n(a,c[b],c),!0):!1}function n(a,b,c){var d;if(a){if(a.forEach){a.forEach(b,c)}else{if(void 0!==a.length){for(d=0;d<a.length;){b.call(c,a[d],d,a),d++}}else{for(d in a){a.hasOwnProperty(d)&&b.call(c,a[d],d,a)}}}}}function o(a,b,c){for(var d=Object.keys(b),e=0;e<d.length;){(!c||c&&void 0===a[d[e]])&&(a[d[e]]=b[d[e]]),e++}return a}function p(a,b){return o(a,b,!0)}function q(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&o(e,c)}function r(a,b){return function(){return a.apply(b,arguments)}}function s(a,b){return typeof a==h?a.apply(b?b[0]||void 0:void 0,b):a}function t(a,b){return void 0===a?b:a}function u(a,b,c){n(y(b),function(b){a.addEventListener(b,c,!1)})}function v(a,b,c){n(y(b),function(b){a.removeEventListener(b,c,!1)})}function w(a,b){for(;a;){if(a==b){return!0}a=a.parentNode}return!1}function x(a,b){return a.indexOf(b)>-1}function y(a){return a.trim().split(/\s+/g)}function z(a,b,c){if(a.indexOf&&!c){return a.indexOf(b)}for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b){return d}d++}return-1}function A(a){return Array.prototype.slice.call(a,0)}function B(a,b,c){for(var g,d=[],e=[],f=0;f<a.length;){g=b?a[f][b]:a[f],z(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function C(a,b){for(var c,d,e=b[0].toUpperCase()+b.slice(1),g=0;g<f.length;){if(c=f[g],d=c?c+e:b,d in a){return d}g++}return void 0}function E(){return D++}function F(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function bb(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){s(a.options.enable,[a])&&c.handler(b)},this.init()}function cb(a){var b,c=a.options.inputClass;return b=c?c:I?xb:J?Fb:H?Hb:sb,new b(a,db)}function db(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&P&&0===d-e,g=b&(R|S)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,eb(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function eb(a,b){var f,g,h,i,j,c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=hb(b)),e>1&&!c.firstMultiple?c.firstMultiple=hb(b):1===e&&(c.firstMultiple=!1),f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=ib(d),b.timeStamp=k(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=mb(h,i),b.distance=lb(h,i),fb(c,b),b.offsetDirection=kb(b.deltaX,b.deltaY),b.scale=g?ob(g.pointers,d):1,b.rotation=g?nb(g.pointers,d):0,gb(c,b),j=a.element,w(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function fb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===P||f.eventType===R)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function gb(a,b){var e,f,g,h,i,k,l,c=a.lastInterval||b,d=b.timeStamp-c.timeStamp;b.eventType!=S&&(d>O||void 0===c.velocity)?(i=c.deltaX-b.deltaX,k=c.deltaY-b.deltaY,l=jb(d,i,k),f=l.x,g=l.y,e=j(l.x)>j(l.y)?l.x:l.y,h=kb(i,k),a.lastInterval=b):(e=c.velocity,f=c.velocityX,g=c.velocityY,h=c.direction),b.velocity=e,b.velocityX=f,b.velocityY=g,b.direction=h}function hb(a){for(var b=[],c=0;c<a.pointers.length;){b[c]={clientX:i(a.pointers[c].clientX),clientY:i(a.pointers[c].clientY)},c++}return{timeStamp:k(),pointers:b,center:ib(b),deltaX:a.deltaX,deltaY:a.deltaY}}function ib(a){var c,d,e,b=a.length;if(1===b){return{x:i(a[0].clientX),y:i(a[0].clientY)}}for(c=0,d=0,e=0;b>e;){c+=a[e].clientX,d+=a[e].clientY,e++}return{x:i(c/b),y:i(d/b)}}function jb(a,b,c){return{x:b/a||0,y:c/a||0}}function kb(a,b){return a===b?T:j(a)>=j(b)?a>0?U:V:b>0?W:X}function lb(a,b,c){c||(c=_);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function mb(a,b,c){c||(c=_);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function nb(a,b){return mb(b[1],b[0],ab)-mb(a[1],a[0],ab)}function ob(a,b){return lb(b[0],b[1],ab)/lb(a[0],a[1],ab)}function sb(){this.evEl=qb,this.evWin=rb,this.allow=!0,this.pressed=!1,bb.apply(this,arguments)}function xb(){this.evEl=vb,this.evWin=wb,bb.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Bb(){this.evTarget=zb,this.evWin=Ab,this.started=!1,bb.apply(this,arguments)}function Cb(a,b){var c=A(a.touches),d=A(a.changedTouches);return b&(R|S)&&(c=B(c.concat(d),"identifier",!0)),[c,d]}function Fb(){this.evTarget=Eb,this.targetIds={},bb.apply(this,arguments)}function Gb(a,b){var e,f,g,h,i,c=A(a.touches),d=this.targetIds;if(b&(P|Q)&&1===c.length){return d[c[0].identifier]=!0,[c,c]}if(g=A(a.changedTouches),h=[],i=this.target,f=c.filter(function(a){return w(a.target,i)}),b===P){for(e=0;e<f.length;){d[f[e].identifier]=!0,e++}}for(e=0;e<g.length;){d[g[e].identifier]&&h.push(g[e]),b&(R|S)&&delete d[g[e].identifier],e++}return h.length?[B(f.concat(h),"identifier",!0),h]:void 0}function Hb(){bb.apply(this,arguments);var a=r(this.handler,this);this.touch=new Fb(this.manager,a),this.mouse=new sb(this.manager,a)}function Qb(a,b){this.manager=a,this.set(b)}function Rb(a){var b,c;return x(a,Nb)?Nb:(b=x(a,Ob),c=x(a,Pb),b&&c?Ob+" "+Pb:b||c?b?Ob:Pb:x(a,Mb)?Mb:Lb)}function Zb(a){this.id=E(),this.manager=null,this.options=p(a||{},this.defaults),this.options.enable=t(this.options.enable,!0),this.state=Sb,this.simultaneous={},this.requireFail=[]}function $b(a){return a&Xb?"cancel":a&Vb?"end":a&Ub?"move":a&Tb?"start":""}function _b(a){return a==X?"down":a==W?"up":a==U?"left":a==V?"right":""}function ac(a,b){var c=b.manager;return c?c.get(a):a}function bc(){Zb.apply(this,arguments)}function cc(){bc.apply(this,arguments),this.pX=null,this.pY=null}function dc(){bc.apply(this,arguments)}function ec(){Zb.apply(this,arguments),this._timer=null,this._input=null}function fc(){bc.apply(this,arguments)}function gc(){bc.apply(this,arguments)}function hc(){Zb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ic(a,b){return b=b||{},b.recognizers=t(b.recognizers,ic.defaults.preset),new lc(a,b)}function lc(a,b){b=b||{},this.options=p(b,ic.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=cb(this),this.touchAction=new Qb(this,this.options.touchAction),mc(this,!0),n(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function mc(a,b){var c=a.element;n(a.options.cssProps,function(a,d){c.style[C(c.style,d)]=b?a:""})}function nc(a,b){var c=document.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b,b.target.dispatchEvent(c)}var pb,qb,rb,tb,ub,vb,wb,yb,zb,Ab,Db,Eb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,jc,kc,d=c(1),e=c(2),f=["","webkit","moz","MS","ms","o"],g=document.createElement("div"),h="function",i=Math.round,j=Math.abs,k=Date.now,D=1,G=/mobile|tablet|ip(ad|hone|od)|android/i,H="ontouchstart"in window,I=void 0!==C(window,"PointerEvent"),J=H&&G.test(navigator.userAgent),K="touch",L="pen",M="mouse",N="kinect",O=25,P=1,Q=2,R=4,S=8,T=1,U=2,V=4,W=8,X=16,Y=U|V,Z=W|X,$=Y|Z,_=["x","y"],ab=["clientX","clientY"];bb.prototype={handler:function(){},init:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(F(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(F(this.element),this.evWin,this.domHandler)}},pb={mousedown:P,mousemove:Q,mouseup:R},qb="mousedown",rb="mousemove mouseup",q(sb,bb,{handler:function(a){var b=pb[a.type];b&P&&0===a.button&&(this.pressed=!0),b&Q&&1!==a.which&&(b=R),this.pressed&&this.allow&&(b&R&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:M,srcEvent:a}))}}),tb={pointerdown:P,pointermove:Q,pointerup:R,pointercancel:S,pointerout:S},ub={2:K,3:L,4:M,5:N},vb="pointerdown",wb="pointermove pointerup pointercancel",window.MSPointerEvent&&(vb="MSPointerDown",wb="MSPointerMove MSPointerUp MSPointerCancel"),q(xb,bb,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=tb[d],f=ub[a.pointerType]||a.pointerType,g=f==K,h=z(b,a.pointerId,"pointerId");e&P&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(R|S)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}}),yb={touchstart:P,touchmove:Q,touchend:R,touchcancel:S},zb="touchstart",Ab="touchstart touchmove touchend touchcancel",q(Bb,bb,{handler:function(a){var c,b=yb[a.type];b===P&&(this.started=!0),this.started&&(c=Cb.call(this,a,b),b&(R|S)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:K,srcEvent:a}))}}),Db={touchstart:P,touchmove:Q,touchend:R,touchcancel:S},Eb="touchstart touchmove touchend touchcancel",q(Fb,bb,{handler:function(a){var b=Db[a.type],c=Gb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:K,srcEvent:a})}}),q(Hb,bb,{handler:function(a,b,c){var d=c.pointerType==K,e=c.pointerType==M;if(d){this.mouse.allow=!1}else{if(e&&!this.mouse.allow){return}}b&(R|S)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}}),Ib=C(g.style,"touchAction"),Jb=void 0!==Ib,Kb="compute",Lb="auto",Mb="manipulation",Nb="none",Ob="pan-x",Pb="pan-y",Qb.prototype={set:function(a){a==Kb&&(a=this.compute()),Jb&&(this.manager.element.style[Ib]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return n(this.manager.recognizers,function(b){s(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Rb(a.join(" "))},preventDefaults:function(a){var b,c,d,e,f,g;if(!Jb){return b=a.srcEvent,c=a.offsetDirection,this.manager.session.prevented?(b.preventDefault(),void 0):(d=this.actions,e=x(d,Nb),f=x(d,Pb),g=x(d,Ob),e||f&&c&Y||g&&c&Z?this.preventSrc(b):void 0)}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}},Sb=1,Tb=2,Ub=4,Vb=8,Wb=Vb,Xb=16,Yb=32,Zb.prototype={defaults:{},set:function(a){return o(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(m(a,"recognizeWith",this)){return this}var b=this.simultaneous;return a=ac(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return m(a,"dropRecognizeWith",this)?this:(a=ac(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(m(a,"requireFailure",this)){return this}var b=this.requireFail;return a=ac(a,this),-1===z(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(m(a,"dropRequireFailure",this)){return this}a=ac(a,this);var b=z(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?$b(c):""),a)}var b=this,c=this.state;Vb>c&&d(!0),d(),c>=Vb&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Yb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Yb|Sb))){return!1}a++}return!0},recognize:function(a){var b=o({},a);return s(this.options.enable,[this,b])?(this.state&(Wb|Xb|Yb)&&(this.state=Sb),this.state=this.process(b),this.state&(Tb|Ub|Vb|Xb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Yb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},q(bc,Zb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Tb|Ub),e=this.attrTest(a);return d&&(c&S||!e)?b|Xb:d||e?c&R?b|Vb:b&Tb?b|Ub:Tb:Yb}}),q(cc,bc,{defaults:{event:"pan",threshold:10,pointers:1,direction:$},getTouchAction:function(){var a=this.options.direction,b=[];return a&Y&&b.push(Pb),a&Z&&b.push(Ob),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Y?(e=0===f?T:0>f?U:V,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?T:0>g?W:X,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return bc.prototype.attrTest.call(this,a)&&(this.state&Tb||!(this.state&Tb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=_b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),q(dc,bc,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Nb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Tb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),q(ec,Zb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(R|S)&&!e){this.reset()}else{if(a.eventType&P){this.reset(),this._timer=l(function(){this.state=Wb,this.tryEmit()},b.time,this)}else{if(a.eventType&R){return Wb}}}return Yb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Wb&&(a&&a.eventType&R?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=k(),this.manager.emit(this.options.event,this._input)))}}),q(fc,bc,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Nb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Tb)}}),q(gc,bc,{defaults:{event:"swipe",threshold:10,velocity:0.65,direction:Y|Z,pointers:1},getTouchAction:function(){return cc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(Y|Z)?c=a.velocity:b&Y?c=a.velocityX:b&Z&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&j(c)>this.options.velocity&&a.eventType&R},emit:function(a){var b=_b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),q(hc,Zb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Mb]},process:function(a){var f,g,h,b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&P&&0===this.count){return this.failTimeout()}if(d&&e&&c){if(a.eventType!=R){return this.failTimeout()}if(f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||lb(this.pCenter,a.center)<b.posThreshold,this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a,h=this.count%b.taps,0===h){return this.hasRequireFailures()?(this._timer=l(function(){this.state=Wb,this.tryEmit()},b.interval,this),Tb):Wb}}return Yb},failTimeout:function(){return this._timer=l(function(){this.state=Yb},this.options.interval,this),Yb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Wb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ic.VERSION="2.0.4",ic.defaults={domEvents:!1,touchAction:Kb,enable:!0,inputTarget:null,inputClass:null,preset:[[fc,{enable:!1}],[dc,{enable:!1},["rotate"]],[gc,{direction:Y}],[cc,{direction:Y},["swipe"]],[hc],[hc,{event:"doubletap",taps:2},["tap"]],[ec]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},jc=1,kc=2,lc.prototype={set:function(a){return o(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?kc:jc},recognize:function(a){var c,d,e,f,b=this.session;if(!b.stopped){for(this.touchAction.preventDefaults(a),d=this.recognizers,e=b.curRecognizer,(!e||e&&e.state&Wb)&&(e=b.curRecognizer=null),f=0;f<d.length;){c=d[f],b.stopped===kc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Tb|Ub|Vb)&&(e=b.curRecognizer=c),f++}}},get:function(a){var b,c;if(a instanceof Zb){return a}for(b=this.recognizers,c=0;c<b.length;c++){if(b[c].options.event==a){return b[c]}}return null},add:function(a){if(m(a,"add",this)){return this}var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(m(a,"remove",this)){return this}var b=this.recognizers;return a=this.get(a),b.splice(z(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return n(y(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return n(y(a),function(a){b?c[a].splice(z(c[a],b),1):delete c[a]}),this},emit:function(a,b){var c,d;if(this.options.domEvents&&nc(a,b),c=this.handlers[a]&&this.handlers[a].slice(),c&&c.length){for(b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()},d=0;d<c.length;){c[d](b),d++}}},destroy:function(){this.element&&mc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},o(ic,{INPUT_START:P,INPUT_MOVE:Q,INPUT_END:R,INPUT_CANCEL:S,STATE_POSSIBLE:Sb,STATE_BEGAN:Tb,STATE_CHANGED:Ub,STATE_ENDED:Vb,STATE_RECOGNIZED:Wb,STATE_CANCELLED:Xb,STATE_FAILED:Yb,DIRECTION_NONE:T,DIRECTION_LEFT:U,DIRECTION_RIGHT:V,DIRECTION_UP:W,DIRECTION_DOWN:X,DIRECTION_HORIZONTAL:Y,DIRECTION_VERTICAL:Z,DIRECTION_ALL:$,Manager:lc,Input:bb,TouchAction:Qb,TouchInput:Fb,MouseInput:sb,PointerEventInput:xb,TouchMouseInput:Hb,SingleTouchInput:Bb,Recognizer:Zb,AttrRecognizer:bc,Tap:hc,Pan:cc,Swipe:gc,Pinch:dc,Rotate:fc,Press:ec,on:u,off:v,each:n,merge:p,extend:o,inherit:q,bindFn:r,prefixed:C}),function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}(d,ic),a.exports=e.Hammer=ic},function(a,b,c){function g(){window.removeEventListener("load",g,!1),f=!0}function k(a){return j=j||new k.Class(a)}function p(a,b){for(var c in b){a[c]=b[c]}return a}function q(){"#ath"==document.location.hash&&history.replaceState("",window.document.title,document.location.href.split("#")[0]),h.test(document.location.href)&&history.replaceState("",window.document.title,document.location.href.replace(h,"$1")),i.test(document.location.search)&&history.replaceState("",window.document.title,document.location.href.replace(i,"$2"))}var h,i,j,l,m,n,o,d=c(2),e="addEventListener"in window,f=!1;"complete"===document.readyState?f=!0:e&&window.addEventListener("load",g,!1),h=/\/ath(\/)?$/,i=/([\?&]ath=[^&]*$|&ath=[^&]*(&))/,k.intl={en_us:{ios:"To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_cn:{ios:"如要把应用程式加至主屏幕,请点击%icon, 然后<strong>加至主屏幕</strong>",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_tw:{ios:"如要把應用程式加至主屏幕, 請點擊%icon, 然後<strong>加至主屏幕</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'}};for(l in k.intl){k.intl[l.substr(0,2)]=k.intl[l]}k.defaults={appID:"org.cubiq.addtohome",fontSize:15,debug:!1,logging:!1,modal:!1,mandatory:!1,autostart:!0,skipFirstVisit:!1,startDelay:1,lifespan:15,displayPace:1440,maxDisplayCount:0,icon:!0,message:"",validLocation:[],onInit:null,onShow:null,onRemove:null,onAdd:null,onPrivate:null,privateModeOverride:!1,detectHomescreen:!1},m=window.navigator.userAgent,n=window.navigator,p(k,{hasToken:"#ath"==document.location.hash||h.test(document.location.href)||i.test(document.location.search),isRetina:window.devicePixelRatio&&window.devicePixelRatio>1,isIDevice:/iphone|ipod|ipad/i.test(m),isMobileChrome:m.indexOf("Android")>-1&&/Chrome\/[.0-9]*/.test(m)&&-1==m.indexOf("Version"),isMobileIE:m.indexOf("Windows Phone")>-1,language:n.language&&n.language.toLowerCase().replace("-","_")||""}),k.language=k.language&&k.language in k.intl?k.language:"en_us",k.isMobileSafari=k.isIDevice&&m.indexOf("Safari")>-1&&m.indexOf("CriOS")<0,k.OS=k.isIDevice?"ios":k.isMobileChrome?"android":k.isMobileIE?"windows":"unsupported",k.OSVersion=m.match(/(OS|Android) (\d+[_\.]\d+)/),k.OSVersion=k.OSVersion&&k.OSVersion[2]?+k.OSVersion[2].replace("_","."):0,k.isStandalone="standalone"in window.navigator&&window.navigator.standalone,k.isTablet=k.isMobileSafari&&m.indexOf("iPad")>-1||k.isMobileChrome&&m.indexOf("Mobile")<0,k.isCompatible=k.isMobileSafari&&k.OSVersion>=6||k.isMobileChrome,o={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedout:!1,added:!1},k.removeSession=function(a){try{if(!localStorage){throw new Error("localStorage is not defined")}localStorage.removeItem(a||k.defaults.appID)}catch(b){}},k.doLog=function(a){this.options.logging&&console.log(a)},k.Class=function(a){var c,d;if(this.doLog=k.doLog,this.options=p({},k.defaults),p(this.options,a),this.options.debug&&(this.options.logging=!0),e){if(this.options.mandatory=this.options.mandatory&&("standalone"in window.navigator||this.options.debug),this.options.modal=this.options.modal||this.options.mandatory,this.options.mandatory&&(this.options.startDelay=-0.5),this.options.detectHomescreen=this.options.detectHomescreen===!0?"hash":this.options.detectHomescreen,this.options.debug&&(k.isCompatible=!0,k.OS="string"==typeof this.options.debug?this.options.debug:"unsupported"==k.OS?"android":k.OS,k.OSVersion="ios"==k.OS?"8":"4"),this.container=document.documentElement,this.session=this.getItem(this.options.appID),this.session=this.session?JSON.parse(this.session):void 0,!k.hasToken||k.isCompatible&&this.session||(k.hasToken=!1,q()),!k.isCompatible){return this.doLog("Add to homescreen: not displaying callout because device not supported"),void 0}this.session=this.session||o;try{if(!localStorage){throw new Error("localStorage is not defined")}localStorage.setItem(this.options.appID,JSON.stringify(this.session)),k.hasLocalStorage=!0}catch(b){k.hasLocalStorage=!1,this.options.onPrivate&&this.options.onPrivate.call(this)}for(c=!this.options.validLocation.length,d=this.options.validLocation.length;d--;){if(this.options.validLocation[d].test(document.location.href)){c=!0;break}}if(this.getItem("addToHome")&&this.optOut(),this.session.optedout){return this.doLog("Add to homescreen: not displaying callout because user opted out"),void 0}if(this.session.added){return this.doLog("Add to homescreen: not displaying callout because already added to the homescreen"),void 0}if(!c){return this.doLog("Add to homescreen: not displaying callout because not a valid location"),void 0}if(k.isStandalone){return this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&k.hasLocalStorage&&this.options.onAdd.call(this)),this.doLog("Add to homescreen: not displaying callout because in standalone mode"),void 0}if(this.options.detectHomescreen){if(k.hasToken){return q(),this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&k.hasLocalStorage&&this.options.onAdd.call(this)),this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen"),void 0}"hash"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href+"#ath"):"smartURL"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href.replace(/(\/)?$/,"/ath$1")):history.replaceState("",window.document.title,document.location.href+(document.location.search?"&":"?")+"ath=")}if(!this.session.returningVisitor&&(this.session.returningVisitor=!0,this.updateSession(),this.options.skipFirstVisit)){return this.doLog("Add to homescreen: not displaying callout because skipping first visit"),void 0}if(!this.options.privateModeOverride&&!k.hasLocalStorage){return this.doLog("Add to homescreen: not displaying callout because browser is in private mode"),void 0}this.ready=!0,this.options.onInit&&this.options.onInit.call(this),this.options.autostart&&(this.doLog("Add to homescreen: autostart displaying callout"),this.show())}},k.Class.prototype={events:{load:"_delayedShow",error:"_delayedShow",orientationchange:"resize",resize:"resize",scroll:"resize",click:"remove",touchmove:"_preventDefault",transitionend:"_removeElements",webkitTransitionEnd:"_removeElements",MSTransitionEnd:"_removeElements"},handleEvent:function(a){var b=this.events[a.type];b&&this[b](a)},show:function(a){var b,c,d;if(this.options.autostart&&!f){return setTimeout(this.show.bind(this),50),void 0}if(this.shown){return this.doLog("Add to homescreen: not displaying callout because already shown on screen"),void 0}if(b=Date.now(),c=this.session.lastDisplayTime,a!==!0){if(!this.ready){return this.doLog("Add to homescreen: not displaying callout because not ready"),void 0}if(b-c<60000*this.options.displayPace){return this.doLog("Add to homescreen: not displaying callout because displayed recently"),void 0}if(this.options.maxDisplayCount&&this.session.displayCount>=this.options.maxDisplayCount){return this.doLog("Add to homescreen: not displaying callout because displayed too many times already"),void 0}}this.shown=!0,this.session.lastDisplayTime=b,this.session.displayCount++,this.updateSession(),this.applicationIcon||(this.applicationIcon="ios"==k.OS?document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]'):document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]')),d="","object"==typeof this.options.message&&k.language in this.options.message?d=this.options.message[k.language][k.OS]:"object"==typeof this.options.message&&k.OS in this.options.message?d=this.options.message[k.OS]:this.options.message in k.intl?d=k.intl[this.options.message][k.OS]:""!==this.options.message?d=this.options.message:k.OS in k.intl[k.language]&&(d=k.intl[k.language][k.OS]),d="<p>"+d.replace("%icon",'<span class="ath-action-icon">icon</span>')+"</p>",this.viewport=document.createElement("div"),this.viewport.className="ath-viewport",this.options.modal&&(this.viewport.className+=" ath-modal"),this.options.mandatory&&(this.viewport.className+=" ath-mandatory"),this.viewport.style.position="absolute",this.element=document.createElement("div"),this.element.className="ath-container ath-"+k.OS+" ath-"+k.OS+(k.OSVersion+"").substr(0,1)+" ath-"+(k.isTablet?"tablet":"phone"),this.element.style.cssText="-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;",this.element.style.webkitTransform="translate3d(0,-"+window.innerHeight+"px,0)",this.element.style.transform="translate3d(0,-"+window.innerHeight+"px,0)",this.options.icon&&this.applicationIcon&&(this.element.className+=" ath-icon",this.img=document.createElement("img"),this.img.className="ath-application-icon",this.img.addEventListener("load",this,!1),this.img.addEventListener("error",this,!1),this.img.src=this.applicationIcon.href,this.element.appendChild(this.img)),this.element.innerHTML+=d,this.viewport.style.left="-99999em",this.viewport.appendChild(this.element),this.container.appendChild(this.viewport),this.img?this.doLog("Add to homescreen: not displaying callout because waiting for img to load"):this._delayedShow()},_delayedShow:function(){setTimeout(this._show.bind(this),1000*this.options.startDelay+500)},_show:function(){var a=this;this.updateViewport(),window.addEventListener("resize",this,!1),window.addEventListener("scroll",this,!1),window.addEventListener("orientationchange",this,!1),this.options.modal&&document.addEventListener("touchmove",this,!0),this.options.mandatory||setTimeout(function(){a.element.addEventListener("click",a,!0)},1000),setTimeout(function(){a.element.style.webkitTransitionDuration="1.2s",a.element.style.transitionDuration="1.2s",a.element.style.webkitTransform="translate3d(0,0,0)",a.element.style.transform="translate3d(0,0,0)"},0),this.options.lifespan&&(this.removeTimer=setTimeout(this.remove.bind(this),1000*this.options.lifespan)),this.options.onShow&&this.options.onShow.call(this)},remove:function(){clearTimeout(this.removeTimer),this.img&&(this.img.removeEventListener("load",this,!1),this.img.removeEventListener("error",this,!1)),window.removeEventListener("resize",this,!1),window.removeEventListener("scroll",this,!1),window.removeEventListener("orientationchange",this,!1),document.removeEventListener("touchmove",this,!0),this.element.removeEventListener("click",this,!0),this.element.addEventListener("transitionend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("MSTransitionEnd",this,!1),this.element.style.webkitTransitionDuration="0.3s",this.element.style.opacity="0"},_removeElements:function(){this.element.removeEventListener("transitionend",this,!1),this.element.removeEventListener("webkitTransitionEnd",this,!1),this.element.removeEventListener("MSTransitionEnd",this,!1),this.container.removeChild(this.viewport),this.shown=!1,this.options.onRemove&&this.options.onRemove.call(this)},updateViewport:function(){var a,b;this.shown&&(this.viewport.style.width=window.innerWidth+"px",this.viewport.style.height=window.innerHeight+"px",this.viewport.style.left=window.scrollX+"px",this.viewport.style.top=window.scrollY+"px",a=document.documentElement.clientWidth,this.orientation=a>document.documentElement.clientHeight?"landscape":"portrait",b="ios"==k.OS?"portrait"==this.orientation?screen.width:screen.height:screen.width,this.scale=screen.width>a?1:b/window.innerWidth,this.element.style.fontSize=this.options.fontSize/this.scale+"px")},resize:function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.updateViewport.bind(this),100)},updateSession:function(){k.hasLocalStorage!==!1&&localStorage&&localStorage.setItem(this.options.appID,JSON.stringify(this.session))},clearSession:function(){this.session=o,this.updateSession()},getItem:function(a){try{if(!localStorage){throw new Error("localStorage is not defined")}return localStorage.getItem(a)}catch(b){k.hasLocalStorage=!1}},optOut:function(){this.session.optedout=!0,this.updateSession()},optIn:function(){this.session.optedout=!1,this.updateSession()},clearDisplayCount:function(){this.session.displayCount=0,this.updateSession()},_preventDefault:function(a){a.preventDefault(),a.stopPropagation()}},k.VERSION="3.2.2",a.exports=d.addToHomescreen=k},function(a,b,c){var d=c(1),e=c(2),f=function(a,b){var c=this;this.options=d.extend({},f.DEFAULTS,b),this.$element=d(a),this.$element.addClass("am-fade am-in").on("click.alert.amui",".am-close",function(){c.close()})};f.DEFAULTS={removeElement:!0},f.prototype.close=function(){function b(){a.trigger("closed.alert.amui").remove()}var a=this.$element;a.trigger("close.alert.amui").removeClass("am-in"),e.support.transition&&a.hasClass("am-fade")?a.one(e.support.transition.end,b).emulateTransitionEnd(200):b()},e.plugin("alert",f),d(document).on("click.alert.amui.data-api","[data-am-alert]",function(a){var b=d(a.target);b.is(".am-close")&&d(this).alert("close")}),a.exports=f},function(a,b,c){var d=c(1),e=c(2),f=function(a,b){this.$element=d(a),this.options=d.extend({},f.DEFAULTS,b),this.isLoading=!1,this.hasSpinner=!1};f.DEFAULTS={loadingText:"loading...",disabledClassName:"am-disabled",spinner:void 0},f.prototype.setState=function(a,b){var c=this.$element,f="disabled",g=c.data(),h=this.options,i=c.is("input")?"val":"html",j="am-btn-"+a+" "+h.disabledClassName;a+="Text",h.resetText||(h.resetText=c[i]()),e.support.animation&&h.spinner&&"html"===i&&!this.hasSpinner&&(h.loadingText='<span class="am-icon-'+h.spinner+' am-icon-spin"></span>'+h.loadingText,this.hasSpinner=!0),b=b||(void 0===g[a]?h[a]:g[a]),c[i](b),setTimeout(d.proxy(function(){"loadingText"===a?(c.addClass(j).attr(f,f),this.isLoading=!0):this.isLoading&&(c.removeClass(j).removeAttr(f),this.isLoading=!1)},this),0)},f.prototype.toggle=function(){var d,a=!0,b=this.$element,c=this.$element.parent('[class*="am-btn-group"]');c.length&&(d=this.$element.find("input"),"radio"==d.prop("type")&&(d.prop("checked")&&b.hasClass("am-active")?a=!1:c.find(".am-active").removeClass("am-active")),a&&d.prop("checked",!b.hasClass("am-active")).trigger("change")),a&&(b.toggleClass("am-active"),b.hasClass("am-active")||b.blur())},e.plugin("button",f,{dataOptions:"data-am-loading",methodCall:function(a,b){"toggle"===a[0]?b.toggle():"string"==typeof a[0]&&b.setState.apply(b,a)}}),d(document).on("click.button.amui.data-api","[data-am-button]",function(a){a.preventDefault();var b=d(a.target);b.hasClass("am-btn")||(b=b.closest(".am-btn")),b.button("toggle")}),e.ready(function(a){d("[data-am-loading]",a).button()}),a.exports=e.button=f},function(a,b,c){function g(a){return this.each(function(){var b=d(this),c=b.data("amui.collapse"),g=d.extend({},f.DEFAULTS,e.utils.options(b.attr("data-am-collapse")),"object"==typeof a&&a);!c&&g.toggle&&"open"===a&&(a=!a),c||b.data("amui.collapse",c=new f(this,g)),"string"==typeof a&&c[a]()})}var d=c(1),e=c(2),f=function(a,b){this.$element=d(a),this.options=d.extend({},f.DEFAULTS,b),this.transitioning=null,this.options.parent&&(this.$parent=d(this.options.parent)),this.options.toggle&&this.toggle()};f.DEFAULTS={toggle:!0},f.prototype.open=function(){var a,b,c,f,h;if(!this.transitioning&&!this.$element.hasClass("am-in")&&(a=d.Event("open.collapse.amui"),this.$element.trigger(a),!a.isDefaultPrevented())){if(b=this.$parent&&this.$parent.find("> .am-panel > .am-in"),b&&b.length){if(c=b.data("amui.collapse"),c&&c.transitioning){return}g.call(b,"close"),c||b.data("amui.collapse",null)}if(this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0),this.transitioning=1,f=function(){this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("").trigger("opened.collapse.amui"),this.transitioning=0},!e.support.transition){return f.call(this)}h=this.$element[0].scrollHeight,this.$element.one(e.support.transition.end,d.proxy(f,this)).emulateTransitionEnd(300).css({height:h})}},f.prototype.close=function(){var a,b;if(!this.transitioning&&this.$element.hasClass("am-in")&&(a=d.Event("close.collapse.amui"),this.$element.trigger(a),!a.isDefaultPrevented())){return this.$element.height(this.$element.height()).redraw(),this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"),this.transitioning=1,b=function(){this.transitioning=0,this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse")},e.support.transition?(this.$element.height(0).one(e.support.transition.end,d.proxy(b,this)).emulateTransitionEnd(300),void 0):b.call(this)}},f.prototype.toggle=function(){this[this.$element.hasClass("am-in")?"close":"open"]()},d.fn.collapse=g,d(document).on("click.collapse.amui.data-api","[data-am-collapse]",function(a){var b,c=d(this),f=e.utils.options(c.attr("data-am-collapse")),h=f.target||a.preventDefault()||(b=c.attr("href"))&&b.replace(/.*(?=#[^\s]+$)/,""),i=d(h),j=i.data("amui.collapse"),k=j?"toggle":f,l=f.parent,m=l&&d(l);j&&j.transitioning||(m&&m.find("[data-am-collapse]").not(c).addClass("am-collapsed"),c[i.hasClass("am-in")?"addClass":"removeClass"]("am-collapsed")),g.call(i,k)}),a.exports=e.collapse=f
!function(b){var d=c(1),e=c(2);d.flexslider=function(a,c){var k,f,g,h,i,j,l,m,n,o,p,q,r,e=d(a);e.vars=d.extend({},d.flexslider.defaults,c),f=e.vars.namespace,g=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,h=("ontouchstart"in window||g||window.DocumentTouch&&document instanceof DocumentTouch)&&e.vars.touch,i="click touchend MSPointerUp keyup",j="",l="vertical"===e.vars.direction,m=e.vars.reverse,n=e.vars.itemWidth>0,o="fade"===e.vars.animation,p=""!==e.vars.asNavFor,q={},r=!0,d.data(a,"flexslider",e),q={init:function(){e.animating=!1,e.currentSlide=parseInt(e.vars.startAt?e.vars.startAt:0,10),isNaN(e.currentSlide)&&(e.currentSlide=0),e.animatingTo=e.currentSlide,e.atEnd=0===e.currentSlide||e.currentSlide===e.last,e.containerSelector=e.vars.selector.substr(0,e.vars.selector.search(" ")),e.slides=d(e.vars.selector,e),e.container=d(e.containerSelector,e),e.count=e.slides.length,e.syncExists=d(e.vars.sync).length>0,"slide"===e.vars.animation&&(e.vars.animation="swing"),e.prop=l?"top":"marginLeft",e.args={},e.manualPause=!1,e.stopped=!1,e.started=!1,e.startTimeout=null,e.transitions=!e.vars.video&&!o&&e.vars.useCSS&&function(){var c,a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(c in b){if(void 0!==a.style[b[c]]){return e.pfx=b[c].replace("Perspective","").toLowerCase(),e.prop="-"+e.pfx+"-transform",!0}}return!1}(),e.ensureAnimationEnd="",""!==e.vars.controlsContainer&&(e.controlsContainer=d(e.vars.controlsContainer).length>0&&d(e.vars.controlsContainer)),""!==e.vars.manualControls&&(e.manualControls=d(e.vars.manualControls).length>0&&d(e.vars.manualControls)),e.vars.randomize&&(e.slides.sort(function(){return Math.round(Math.random())-0.5}),e.container.empty().append(e.slides)),e.doMath(),e.setup("init"),e.vars.controlNav&&q.controlNav.setup(),e.vars.directionNav&&q.directionNav.setup(),e.vars.keyboard&&(1===d(e.containerSelector).length||e.vars.multipleKeyboard)&&d(document).bind("keyup",function(a){var c,b=a.keyCode;e.animating||39!==b&&37!==b||(c=39===b?e.getTarget("next"):37===b?e.getTarget("prev"):!1,e.flexAnimate(c,e.vars.pauseOnAction))}),e.vars.mousewheel&&e.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?e.getTarget("next"):e.getTarget("prev");e.flexAnimate(f,e.vars.pauseOnAction)}),e.vars.pausePlay&&q.pausePlay.setup(),e.vars.slideshow&&e.vars.pauseInvisible&&q.pauseInvisible.init(),e.vars.slideshow&&(e.vars.pauseOnHover&&e.hover(function(){e.manualPlay||e.manualPause||e.pause()},function(){e.manualPause||e.manualPlay||e.stopped||e.play()}),e.vars.pauseInvisible&&q.pauseInvisible.isHidden()||(e.vars.initDelay>0?e.startTimeout=setTimeout(e.play,e.vars.initDelay):e.play())),p&&q.asNav.setup(),h&&e.vars.touch&&q.touch(),(!o||o&&e.vars.smoothHeight)&&d(window).bind("resize orientationchange focus",q.resize),e.find("li").attr("draggable","false"),setTimeout(function(){e.vars.start(e)},200)},asNav:{setup:function(){e.asNav=!0,e.animatingTo=Math.floor(e.currentSlide/e.move),e.currentItem=e.currentSlide,e.slides.removeClass(f+"active-slide").eq(e.currentItem).addClass(f+"active-slide"),g?(a._slider=e,e.slides.each(function(){var a=this;a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),a.addEventListener("MSGestureTap",function(a){a.preventDefault();var b=d(this),c=b.index();d(e.vars.asNavFor).data("flexslider").animating||b.hasClass("active")||(e.direction=e.currentItem<c?"next":"prev",e.flexAnimate(c,e.vars.pauseOnAction,!1,!0,!0))})})):e.slides.on(i,function(a){var b,c,g;a.preventDefault(),b=d(this),c=b.index(),g=b.offset().left-d(e).scrollLeft(),0>=g&&b.hasClass(f+"active-slide")?e.flexAnimate(e.getTarget("prev"),!0):d(e.vars.asNavFor).data("flexslider").animating||b.hasClass(f+"active-slide")||(e.direction=e.currentItem<c?"next":"prev",e.flexAnimate(c,e.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){e.manualControls?q.controlNav.setupManual():q.controlNav.setupPaging()},setupPaging:function(){var c,g,h,k,a="thumbnails"===e.vars.controlNav?"control-thumbs":"control-paging",b=1;if(e.controlNavScaffold=d('<ol class="'+f+"control-nav "+f+a+'"></ol>'),e.pagingCount>1){for(h=0;h<e.pagingCount;h++){g=e.slides.eq(h),c="thumbnails"===e.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+b+"</a>","thumbnails"===e.vars.controlNav&&!0===e.vars.thumbCaptions&&(k=g.attr("data-thumbcaption"),""!=k&&void 0!=k&&(c+='<span class="'+f+'caption">'+k+"</span>")),e.controlNavScaffold.append('<li class="jqthumb">'+c+"<i></i></li>"),b++}}e.controlsContainer?d(e.controlsContainer).append(e.controlNavScaffold):e.append(e.controlNavScaffold),q.controlNav.set(),q.controlNav.active(),e.controlNavScaffold.delegate("li",i,function(a){if(a.preventDefault(),""===j||j===a.type){var b=d(this),c=e.controlNavScaffold.find("li").index(b);b.hasClass(f+"active")||(e.direction=c>e.currentSlide?"next":"prev",e.flexAnimate(c,e.vars.pauseOnAction))}""===j&&(j=a.type),q.setToClearWatchedEvent()})},setupManual:function(){e.controlNav=e.manualControls,q.controlNav.active(),e.controlNav.bind(i,function(a){if(a.preventDefault(),""===j||j===a.type){var b=d(this),c=e.controlNavScaffold.find("li").index(b);b.hasClass(f+"active")||(e.direction=c>e.currentSlide?"next":"prev",e.flexAnimate(c,e.vars.pauseOnAction))}""===j&&(j=a.type),q.setToClearWatchedEvent()})},set:function(){"thumbnails"===e.vars.controlNav?"img":"a",e.controlNav=d("."+f+"control-nav li")},active:function(){e.controlNavScaffold.find("li").removeClass(f+"active").eq(e.animatingTo).addClass(f+"active")},update:function(a,b){e.pagingCount>1&&"add"===a?e.controlNavScaffold.append(d("<li><a>"+sp+"</a></li>")):1===e.pagingCount?e.controlNavScaffold.find("li").remove():e.controlNav.eq(b).closest("li").remove(),q.controlNav.set(),e.pagingCount>1&&e.pagingCount!==e.controlNav.length?e.update(b,a):q.controlNav.active()}},directionNav:{setup:function(){var a=d('<ul class="'+f+'direction-nav"><li class="'+f+'nav-prev"><a class="'+f+'prev" href="javascript:;"><span class="iconfont">&#xe607;</span></a></li><li class="'+f+'nav-next"><a class="'+f+'next" href="javascript:;"><span class="iconfont">&#xe604;</span>'+"</a></li></ul>");e.controlsContainer?(d(e.controlsContainer).append(a),e.directionNav=d("."+f+"direction-nav li a",e.controlsContainer)):(e.append(a),e.directionNav=d("."+f+"direction-nav li a",e)),q.directionNav.update(),e.directionNav.bind(i,function(a){a.preventDefault();var b;(""===j||j===a.type)&&(b=d(this).hasClass(f+"next")?e.getTarget("next"):e.getTarget("prev"),e.flexAnimate(b,e.vars.pauseOnAction)),""===j&&(j=a.type),q.setToClearWatchedEvent()})},update:function(){var a=f+"disabled";1===e.pagingCount?e.directionNav.addClass(a).attr("tabindex","-1"):e.vars.animationLoop?e.directionNav.removeClass(a).removeAttr("tabindex"):0===e.animatingTo?e.directionNav.removeClass(a).filter("."+f+"prev").addClass(a).attr("tabindex","-1"):e.animatingTo===e.last?e.directionNav.removeClass(a).filter("."+f+"next").addClass(a).attr("tabindex","-1"):e.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var a=d('<div class="'+f+'pauseplay"><a></a></div>');e.controlsContainer?(e.controlsContainer.append(a),e.pausePlay=d("."+f+"pauseplay a",e.controlsContainer)):(e.append(a),e.pausePlay=d("."+f+"pauseplay a",e)),q.pausePlay.update(e.vars.slideshow?f+"pause":f+"play"),e.pausePlay.bind(i,function(a){a.preventDefault(),(""===j||j===a.type)&&(d(this).hasClass(f+"pause")?(e.manualPause=!0,e.manualPlay=!1,e.pause()):(e.manualPause=!1,e.manualPlay=!0,e.play())),""===j&&(j=a.type),q.setToClearWatchedEvent()})},update:function(a){"play"===a?e.pausePlay.removeClass(f+"pause").addClass(f+"play").html(e.vars.playText):e.pausePlay.removeClass(f+"play").addClass(f+"pause").html(e.vars.pauseText)}},touch:function(){function s(b){e.animating?b.preventDefault():(window.navigator.msPointerEnabled||1===b.touches.length)&&(e.pause(),h=l?e.h:e.w,j=Number(new Date),p=b.touches[0].pageX,q=b.touches[0].pageY,f=n&&m&&e.animatingTo===e.last?0:n&&m?e.limit-(e.itemW+e.vars.itemMargin)*e.move*e.animatingTo:n&&e.currentSlide===e.last?e.limit:n?(e.itemW+e.vars.itemMargin)*e.move*e.currentSlide:m?(e.last-e.currentSlide+e.cloneOffset)*h:(e.currentSlide+e.cloneOffset)*h,c=l?q:p,d=l?p:q,a.addEventListener("touchmove",t,!1),a.addEventListener("touchend",u,!1))}function t(a){p=a.touches[0].pageX,q=a.touches[0].pageY,i=l?c-q:c-p,k=l?Math.abs(i)<Math.abs(p-d):Math.abs(i)<Math.abs(q-d);var b=500;(!k||Number(new Date)-j>b)&&(a.preventDefault(),!o&&e.transitions&&(e.vars.animationLoop||(i/=0===e.currentSlide&&0>i||e.currentSlide===e.last&&i>0?Math.abs(i)/h+2:1),e.setProps(f+i,"setTouch")))}function u(){if(a.removeEventListener("touchmove",t,!1),e.animatingTo===e.currentSlide&&!k&&null!==i){var g=m?-i:i,l=g>0?e.getTarget("next"):e.getTarget("prev");e.canAdvance(l)&&(Number(new Date)-j<550&&Math.abs(g)>50||Math.abs(g)>h/2)?e.flexAnimate(l,e.vars.pauseOnAction):o||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}a.removeEventListener("touchend",u,!1),c=null,d=null,i=null,f=null}function v(b){b.stopPropagation(),e.animating?b.preventDefault():(e.pause(),a._gesture.addPointer(b.pointerId),r=0,h=l?e.h:e.w,j=Number(new Date),f=n&&m&&e.animatingTo===e.last?0:n&&m?e.limit-(e.itemW+e.vars.itemMargin)*e.move*e.animatingTo:n&&e.currentSlide===e.last?e.limit:n?(e.itemW+e.vars.itemMargin)*e.move*e.currentSlide:m?(e.last-e.currentSlide+e.cloneOffset)*h:(e.currentSlide+e.cloneOffset)*h)}function w(c){var d,e,g;return c.stopPropagation(),(d=c.target._slider)?(e=-c.translationX,g=-c.translationY,r+=l?g:e,i=r,k=l?Math.abs(r)<Math.abs(-e):Math.abs(r)<Math.abs(-g),c.detail===c.MSGESTURE_FLAG_INERTIA?(b(function(){a._gesture.stop()}),void 0):((!k||Number(new Date)-j>500)&&(c.preventDefault(),!o&&d.transitions&&(d.vars.animationLoop||(i=r/(0===d.currentSlide&&0>r||d.currentSlide===d.last&&r>0?Math.abs(r)/h+2:1)),d.setProps(f+i,"setTouch"))),void 0)):void 0}function x(a){var b,e,g;a.stopPropagation(),b=a.target._slider,b&&(b.animatingTo!==b.currentSlide||k||null===i||(e=m?-i:i,g=e>0?b.getTarget("next"):b.getTarget("prev"),b.canAdvance(g)&&(Number(new Date)-j<550&&Math.abs(e)>50||Math.abs(e)>h/2)?b.flexAnimate(g,b.vars.pauseOnAction):o||b.flexAnimate(b.currentSlide,b.vars.pauseOnAction,!0)),c=null,d=null,i=null,f=null,r=0)}var c,d,f,h,i,j,k=!1,p=0,q=0,r=0;g?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",v,!1),a._slider=e,a.addEventListener("MSGestureChange",w,!1),a.addEventListener("MSGestureEnd",x,!1)):a.addEventListener("touchstart",s,!1)},resize:function(){!e.animating&&e.is(":visible")&&(n||e.doMath(),o?q.smoothHeight():n?(e.slides.width(e.computedW),e.update(e.pagingCount),e.setProps()):l?(e.viewport.height(e.h),e.setProps(e.h,"setTotal")):(e.vars.smoothHeight&&q.smoothHeight(),e.newSlides.width(e.computedW),e.setProps(e.computedW,"setTotal")))},smoothHeight:function(a){if(!l||o){var b=o?e:e.viewport;a?b.animate({height:e.slides.eq(e.animatingTo).height()},a):b.height(e.slides.eq(e.animatingTo).height())}},sync:function(a){var b=d(e.vars.sync).data("flexslider"),c=e.animatingTo;switch(a){case"animate":b.flexAnimate(c,e.vars.pauseOnAction,!1,!0);break;case"play":b.playing||b.asNav||b.play();break;case"pause":b.pause()}},uniqueID:function(a){return a.filter("[id]").add(a.find("[id]")).each(function(){var a=d(this);a.attr("id",a.attr("id")+"_clone")}),a},pauseInvisible:{visProp:null,init:function(){var b,a=q.pauseInvisible.getHiddenProp();a&&(b=a.replace(/[H|h]idden/,"")+"visibilitychange",document.addEventListener(b,function(){q.pauseInvisible.isHidden()?e.startTimeout?clearTimeout(e.startTimeout):e.pause():e.started?e.play():e.vars.initDelay>0?setTimeout(e.play,e.vars.initDelay):e.play()}))},isHidden:function(){var a=q.pauseInvisible.getHiddenProp();return a?document[a]:!1},getHiddenProp:function(){var b,a=["webkit","moz","ms","o"];if("hidden"in document){return"hidden"}for(b=0;b<a.length;b++){if(a[b]+"Hidden"in document){return a[b]+"Hidden"}}return null}},setToClearWatchedEvent:function(){clearTimeout(k),k=setTimeout(function(){j=""},3000)}},e.flexAnimate=function(a,b,c,g,i){var j,r,s,t,k;if(e.vars.animationLoop||a===e.currentSlide||(e.direction=a>e.currentSlide?"next":"prev"),p&&1===e.pagingCount&&(e.direction=e.currentItem<a?"next":"prev"),!e.animating&&(e.canAdvance(a,i)||c)&&e.is(":visible")){if(p&&g){if(j=d(e.vars.asNavFor).data("flexslider"),e.atEnd=0===a||a===e.count-1,j.flexAnimate(a,!0,!1,!0,i),e.direction=e.currentItem<a?"next":"prev",j.direction=e.direction,Math.ceil((a+1)/e.visible)-1===e.currentSlide||0===a){return e.currentItem=a,e.slides.removeClass(f+"active-slide").eq(a).addClass(f+"active-slide"),!1}e.currentItem=a,e.slides.removeClass(f+"active-slide").eq(a).addClass(f+"active-slide"),a=Math.floor(a/e.visible)}e.animating=!0,e.animatingTo=a,b&&e.pause(),e.vars.before(e),e.syncExists&&!i&&q.sync("animate"),e.vars.controlNav&&q.controlNav.active(),n||e.slides.removeClass(f+"active-slide").eq(a).addClass(f+"active-slide"),e.atEnd=0===a||a===e.last,e.vars.directionNav&&q.directionNav.update(),a===e.last&&(e.vars.end(e),e.vars.animationLoop||e.pause()),o?h?(e.slides.eq(e.currentSlide).css({opacity:0,zIndex:1}),e.slides.eq(a).css({opacity:1,zIndex:2}),e.wrapup(k)):(e.slides.eq(e.currentSlide).css({zIndex:1}).animate({opacity:0},e.vars.animationSpeed,e.vars.easing),e.slides.eq(a).css({zIndex:2}).animate({opacity:1},e.vars.animationSpeed,e.vars.easing,e.wrapup)):(k=l?e.slides.filter(":first").height():e.computedW,n?(r=e.vars.itemMargin,t=(e.itemW+r)*e.move*e.animatingTo,s=t>e.limit&&1!==e.visible?e.limit:t):s=0===e.currentSlide&&a===e.count-1&&e.vars.animationLoop&&"next"!==e.direction?m?(e.count+e.cloneOffset)*k:0:e.currentSlide===e.last&&0===a&&e.vars.animationLoop&&"prev"!==e.direction?m?0:(e.count+1)*k:m?(e.count-1-a+e.cloneOffset)*k:(a+e.cloneOffset)*k,e.setProps(s,"",e.vars.animationSpeed),e.transitions?(e.vars.animationLoop&&e.atEnd||(e.animating=!1,e.currentSlide=e.animatingTo),e.container.unbind("webkitTransitionEnd transitionend"),e.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(e.ensureAnimationEnd),e.wrapup(k)}),clearTimeout(e.ensureAnimationEnd),e.ensureAnimationEnd=setTimeout(function(){e.wrapup(k)},e.vars.animationSpeed+100)):e.container.animate(e.args,e.vars.animationSpeed,e.vars.easing,function(){e.wrapup(k)})),e.vars.smoothHeight&&q.smoothHeight(e.vars.animationSpeed)}},e.wrapup=function(a){o||n||(0===e.currentSlide&&e.animatingTo===e.last&&e.vars.animationLoop?e.setProps(a,"jumpEnd"):e.currentSlide===e.last&&0===e.animatingTo&&e.vars.animationLoop&&e.setProps(a,"jumpStart")),e.animating=!1,e.currentSlide=e.animatingTo,e.vars.after(e)},e.animateSlides=function(){!e.animating&&r&&e.flexAnimate(e.getTarget("next"))},e.pause=function(){clearInterval(e.animatedSlides),e.animatedSlides=null,e.playing=!1,e.vars.pausePlay&&q.pausePlay.update("play"),e.syncExists&&q.sync("pause")},e.play=function(){e.playing&&clearInterval(e.animatedSlides),e.animatedSlides=e.animatedSlides||setInterval(e.animateSlides,e.vars.slideshowSpeed),e.started=e.playing=!0,e.vars.pausePlay&&q.pausePlay.update("pause"),e.syncExists&&q.sync("play")},e.stop=function(){e.pause(),e.stopped=!0},e.canAdvance=function(a,b){var c=p?e.pagingCount-1:e.last;return b?!0:p&&e.currentItem===e.count-1&&0===a&&"prev"===e.direction?!0:p&&0===e.currentItem&&a===e.pagingCount-1&&"next"!==e.direction?!1:a!==e.currentSlide||p?e.vars.animationLoop?!0:e.atEnd&&0===e.currentSlide&&a===c&&"next"!==e.direction?!1:e.atEnd&&e.currentSlide===c&&0===a&&"next"===e.direction?!1:!0:!1},e.getTarget=function(a){return e.direction=a,"next"===a?e.currentSlide===e.last?0:e.currentSlide+1:0===e.currentSlide?e.last:e.currentSlide-1},e.setProps=function(a,b,c){var d=function(){var c=a?a:(e.itemW+e.vars.itemMargin)*e.move*e.animatingTo,d=function(){if(n){return"setTouch"===b?a:m&&e.animatingTo===e.last?0:m?e.limit-(e.itemW+e.vars.itemMargin)*e.move*e.animatingTo:e.animatingTo===e.last?e.limit:c}switch(b){case"setTotal":return m?(e.count-1-e.currentSlide+e.cloneOffset)*a:(e.currentSlide+e.cloneOffset)*a;case"setTouch":return m?a:a;case"jumpEnd":return m?a:e.count*a;case"jumpStart":return m?e.count*a:a;default:return a}}();return-1*d+"px"}();e.transitions&&(d=l?"translate3d(0,"+d+",0)":"translate3d("+d+",0,0)",c=void 0!==c?c/1000+"s":"0s",e.container.css("-"+e.pfx+"-transition-duration",c),e.container.css("transition-duration",c)),e.args[e.prop]=d,(e.transitions||void 0===c)&&e.container.css(e.args),e.container.css("transform",d)},e.setup=function(a){if(o){e.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===a&&(h?e.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+e.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(e.currentSlide).css({opacity:1,zIndex:2}):0==e.vars.fadeFirstSlide?e.slides.css({opacity:0,display:"block",zIndex:1}).eq(e.currentSlide).css({zIndex:2}).css({opacity:1}):e.slides.css({opacity:0,display:"block",zIndex:1}).eq(e.currentSlide).css({zIndex:2}).animate({opacity:1},e.vars.animationSpeed,e.vars.easing)),e.vars.smoothHeight&&q.smoothHeight()}else{var b,c;"init"===a&&(e.viewport=d('<div class="'+f+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(e).append(e.container),e.cloneCount=0,e.cloneOffset=0,m&&(c=d.makeArray(e.slides).reverse(),e.slides=d(c),e.container.empty().append(e.slides))),e.vars.animationLoop&&!n&&(e.cloneCount=2,e.cloneOffset=1,"init"!==a&&e.container.find(".clone").remove(),e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),e.newSlides=d(e.vars.selector,e),b=m?e.count-1-e.currentSlide+e.cloneOffset:e.currentSlide+e.cloneOffset,l&&!n?(e.container.height(200*(e.count+e.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){e.newSlides.css({display:"block"}),e.doMath(),e.viewport.height(e.h),e.setProps(b*e.h,"init")},"init"===a?100:0)):(e.container.width(200*(e.count+e.cloneCount)+"%"),e.setProps(b*e.computedW,"init"),setTimeout(function(){e.doMath(),e.newSlides.css({width:e.computedW,"float":"left",display:"block"}),e.vars.smoothHeight&&q.smoothHeight()},"init"===a?100:0))}n||e.slides.removeClass(f+"active-slide").eq(e.currentSlide).addClass(f+"active-slide"),e.vars.init(e)},e.doMath=function(){var a=e.slides.first(),b=e.vars.itemMargin,c=e.vars.minItems,d=e.vars.maxItems;e.w=void 0===e.viewport?e.width():e.viewport.width(),e.h=a.height(),e.boxPadding=a.outerWidth()-a.width(),n?(e.itemT=e.vars.itemWidth+b,e.minW=c?c*e.itemT:e.w,e.maxW=d?d*e.itemT-b:e.w,e.itemW=e.minW>e.w?(e.w-b*(c-1))/c:e.maxW<e.w?(e.w-b*(d-1))/d:e.vars.itemWidth>e.w?e.w:e.vars.itemWidth,e.visible=Math.floor(e.w/e.itemW),e.move=e.vars.move>0&&e.vars.move<e.visible?e.vars.move:e.visible,e.pagingCount=Math.ceil((e.count-e.visible)/e.move+1),e.last=e.pagingCount-1,e.limit=1===e.pagingCount?0:e.vars.itemWidth>e.w?e.itemW*(e.count-1)+b*(e.count-1):(e.itemW+b)*e.count-e.w-b):(e.itemW=e.w,e.pagingCount=e.count,e.last=e.count-1),e.computedW=e.itemW-e.boxPadding},e.update=function(a,b){e.doMath(),n||(a<e.currentSlide?e.currentSlide+=1:a<=e.currentSlide&&0!==a&&(e.currentSlide-=1),e.animatingTo=e.currentSlide),e.vars.controlNav&&!e.manualControls&&("add"===b&&!n||e.pagingCount>e.controlNav.length?q.controlNav.update("add"):("remove"===b&&!n||e.pagingCount<e.controlNav.length)&&(n&&e.currentSlide>e.last&&(e.currentSlide-=1,e.animatingTo-=1),q.controlNav.update("remove",e.last))),e.vars.directionNav&&q.directionNav.update()},e.addSlide=function(a,b){var c=d(a);e.count+=1,e.last=e.count-1,l&&m?void 0!==b?e.slides.eq(e.count-b).after(c):e.container.prepend(c):void 0!==b?e.slides.eq(b).before(c):e.container.append(c),e.update(b,"add"),e.slides=d(e.vars.selector+":not(.clone)",e),e.setup(),e.vars.added(e)},e.removeSlide=function(a){var b=isNaN(a)?e.slides.index(d(a)):a;e.count-=1,e.last=e.count-1,isNaN(a)?d(a,e.slides).remove():l&&m?e.slides.eq(e.last).remove():e.slides.eq(a).remove(),e.doMath(),e.update(b,"remove"),e.slides=d(e.vars.selector+":not(.clone)",e),e.setup(),e.vars.removed(e)},q.init()},d(window).blur(function(){focused=!1}).focus(function(){focused=!0}),d.flexslider.defaults={namespace:"am-",selector:".am-slides > li",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:5000,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:" ",nextText:" ",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},d.fn.flexslider=function(a){var c,e,b=Array.prototype.slice.call(arguments,1);if(void 0===a&&(a={}),"object"==typeof a){return this.each(function(){var b=d(this),c=a.selector?a.selector:".am-slides > li",e=b.find(c);1===e.length&&a.allowOneSlide===!0||0===e.length?(e.fadeIn(400),a.start&&a.start(b)):void 0===b.data("flexslider")&&new d.flexslider(this,a)})}switch(c=d(this).data("flexslider"),a){case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof a?c.flexAnimate(a,!0):"string"==typeof a&&(e="function"==typeof c[a]?c[a].apply(c,b):c[a])}return void 0===e?this:e},e.ready(function(a){d("[data-am-flexslider]",a).each(function(a,b){var c=d(b),f=e.utils.parseOptions(c.data("amFlexslider"));f.before=function(a){a._pausedTimer&&(window.clearTimeout(a._pausedTimer),a._pausedTimer=null)},f.after=function(a){var b=a.vars.playAfterPaused;!b||isNaN(b)||a.playing||a.manualPause||a.manualPlay||a.stopped||(a._pausedTimer=window.setTimeout(function(){a.play()},b))},c.flexslider(f)})}),a.exports=d.flexslider}.call(b,c(12).setImmediate)},function(a,b,c){!function(a,d){function j(a,b){this._id=a,this._clearFn=b}var e=c(13).nextTick,f=Function.prototype.apply,g=Array.prototype.slice,h={},i=0;b.setTimeout=function(){return new j(f.call(setTimeout,window,arguments),clearTimeout)},b.setInterval=function(){return new j(f.call(setInterval,window,arguments),clearInterval)},b.clearTimeout=b.clearInterval=function(a){a.close()},j.prototype.unref=j.prototype.ref=function(){},j.prototype.close=function(){this._clearFn.call(window,this._id)},b.enroll=function(a,b){clearTimeout(a._idleTimeoutId),a._idleTimeout=b},b.unenroll=function(a){clearTimeout(a._idleTimeoutId),a._idleTimeout=-1},b._unrefActive=b.active=function(a){clearTimeout(a._idleTimeoutId);var b=a._idleTimeout;b>=0&&(a._idleTimeoutId=setTimeout(function(){a._onTimeout&&a._onTimeout()},b))},b.setImmediate="function"==typeof a?a:function(a){var c=i++,d=arguments.length<2?!1:g.call(arguments,1);return h[c]=!0,e(function(){h[c]&&(d?a.apply(null,d):a.call(null),b.clearImmediate(c))}),c},b.clearImmediate="function"==typeof d?d:function(a){delete h[a]}}.call(b,c(12).setImmediate,c(12).clearImmediate)},function(a){function h(){e=!1,f.length?d=f.concat(d):g=-1,d.length&&i()}function i(){var a,b;if(!e){for(a=setTimeout(h),e=!0,b=d.length;b;){for(f=d,d=[];++g<b;){f&&f[g].run()}g=-1,b=d.length}f=null,e=!1,clearTimeout(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var f,c=a.exports={},d=[],e=!1,g=-1;c.nextTick=function(a){var c,b=new Array(arguments.length-1);if(arguments.length>1){for(c=1;c<arguments.length;c++){b[c-1]=arguments[c]}}d.push(new j(a,b)),1!==d.length||e||setTimeout(i,0)},j.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=k,c.addListener=k,c.once=k,c.off=k,c.removeListener=k,c.removeAllListeners=k,c.emit=k,c.binding=function(){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(a,b,c){function g(a,b){this.wrapper="string"==typeof a?document.querySelector(a):a,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var c in b){this.options[c]=b[c]}this.translateZ=this.options.HWCompositing&&f.hasPerspective?" translateZ(0)":"",this.options.useTransition=f.hasTransition&&this.options.useTransition,this.options.useTransform=f.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?f.ease[this.options.bounceEasing]||f.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var d=c(2),e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)},f=function(){function d(a){return c===!1?!1:""===c?a:c+a.charAt(0).toUpperCase()+a.substr(1)}var e,a={},b=document.createElement("div").style,c=function(){for(var c,a=["t","webkitT","MozT","msT","OT"],d=0,e=a.length;e>d;d++){if(c=a[d]+"ransform",c in b){return a[d].substr(0,a[d].length-1)}}return!1}();return a.getTime=Date.now||function(){return(new Date).getTime()},a.extend=function(a,b){for(var c in b){a[c]=b[c]}},a.addEvent=function(a,b,c,d){a.addEventListener(b,c,!!d)},a.removeEvent=function(a,b,c,d){a.removeEventListener(b,c,!!d)},a.prefixPointerEvent=function(a){return window.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a},a.momentum=function(a,b,c,d,e,f){var i,j,g=a-b,h=Math.abs(g)/c;return f=void 0===f?0.0006:f,i=a+h*h/(2*f)*(0>g?-1:1),j=h/f,d>i?(i=e?d-e/2.5*(h/8):d,g=Math.abs(i-a),j=g/h):i>0&&(i=e?e/2.5*(h/8):0,g=Math.abs(a)+i,j=g/h),{destination:Math.round(i),duration:j}},e=d("transform"),a.extend(a,{hasTransform:e!==!1,hasPerspective:d("perspective")in b,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:d("transition")in b}),a.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),a.extend(a.style={},{transform:e,transitionTimingFunction:d("transitionTimingFunction"),transitionDuration:d("transitionDuration"),transitionDelay:d("transitionDelay"),transformOrigin:d("transformOrigin")}),a.hasClass=function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)");return c.test(a.className)},a.addClass=function(b,c){if(!a.hasClass(b,c)){var d=b.className.split(" ");d.push(c),b.className=d.join(" ")}},a.removeClass=function(b,c){if(a.hasClass(b,c)){var d=new RegExp("(^|\\s)"+c+"(\\s|$)","g");b.className=b.className.replace(d," ")}},a.offset=function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;){b-=a.offsetLeft,c-=a.offsetTop}return{left:b,top:c}},a.preventDefaultException=function(a,b){for(var c in b){if(b[c].test(a[c])){return!0}}return!1},a.extend(a.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),a.extend(a.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return Math.sqrt(1- --a*a)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(a){var b=4;return(a-=1)*a*((b+1)*a+b)+1}},bounce:{style:"",fn:function(a){return(a/=1)<1/2.75?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375}},elastic:{style:"",fn:function(a){var b=0.22,c=0.4;return 0===a?0:1==a?1:c*Math.pow(2,-10*a)*Math.sin((a-b/4)*2*Math.PI/b)+1}}}),a.tap=function(a,b){var c=document.createEvent("Event");c.initEvent(b,!0,!0),c.pageX=a.pageX,c.pageY=a.pageY,a.target.dispatchEvent(c)},a.click=function(a){var c,b=a.target;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName)||(c=document.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,a.view,1,b.screenX,b.screenY,b.clientX,b.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),c._constructed=!0,b.dispatchEvent(c))},a}();g.prototype={version:"5.1.3",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(a){a.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(a){if(!(1!=f.eventType[a.type]&&0!==a.button||!this.enabled||this.initiated&&f.eventType[a.type]!==this.initiated)){!this.options.preventDefault||f.isBadAndroid||f.preventDefaultException(a.target,this.options.preventDefaultException)||a.preventDefault();var c,b=a.touches?a.touches[0]:a;this.initiated=f.eventType[a.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=f.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,c=this.getComputedPosition(),this._translate(Math.round(c.x),Math.round(c.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=b.pageX,this.pointY=b.pageY,this._execEvent("beforeScrollStart")}},_move:function(a){if(this.enabled&&f.eventType[a.type]===this.initiated){this.options.preventDefault&&a.preventDefault();var g,h,i,j,b=a.touches?a.touches[0]:a,c=b.pageX-this.pointX,d=b.pageY-this.pointY,e=f.getTime();if(this.pointX=b.pageX,this.pointY=b.pageY,this.distX+=c,this.distY+=d,i=Math.abs(this.distX),j=Math.abs(this.distY),!(e-this.endTime>300&&10>i&&10>j)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=i>j+this.options.directionLockThreshold?"h":j>=i+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough){a.preventDefault()}else{if("horizontal"==this.options.eventPassthrough){return this.initiated=!1,void 0}}d=0}else{if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough){a.preventDefault()}else{if("vertical"==this.options.eventPassthrough){return this.initiated=!1,void 0}}c=0}}c=this.hasHorizontalScroll?c:0,d=this.hasVerticalScroll?d:0,g=this.x+c,h=this.y+d,(g>0||g<this.maxScrollX)&&(g=this.options.bounce?this.x+c/3:g>0?0:this.maxScrollX),(h>0||h<this.maxScrollY)&&(h=this.options.bounce?this.y+d/3:h>0?0:this.maxScrollY),this.directionX=c>0?-1:0>c?1:0,this.directionY=d>0?-1:0>d?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(g,h),e-this.startTime>300&&(this.startTime=e,this.startX=this.x,this.startY=this.y)}}},_end:function(a){if(this.enabled&&f.eventType[a.type]===this.initiated){this.options.preventDefault&&!f.preventDefaultException(a.target,this.options.preventDefaultException)&&a.preventDefault();var c,d,e=(a.changedTouches?a.changedTouches[0]:a,f.getTime()-this.startTime),g=Math.round(this.x),h=Math.round(this.y),i=Math.abs(g-this.startX),j=Math.abs(h-this.startY),k=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=f.getTime(),!this.resetPosition(this.options.bounceTime)){return this.scrollTo(g,h),this.moved?this._events.flick&&200>e&&100>i&&100>j?(this._execEvent("flick"),void 0):(this.options.momentum&&300>e&&(c=this.hasHorizontalScroll?f.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:g,duration:0},d=this.hasVerticalScroll?f.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:h,duration:0},g=c.destination,h=d.destination,k=Math.max(c.duration,d.duration),this.isInTransition=1),g!=this.x||h!=this.y?((g>0||g<this.maxScrollX||h>0||h<this.maxScrollY)&&(l=f.ease.quadratic),this.scrollTo(g,h,k,l),void 0):(this._execEvent("scrollEnd"),void 0)):(this.options.tap&&f.tap(a,this.options.tap),this.options.click&&f.click(a),this._execEvent("scrollCancel"),void 0)}}},_resize:function(){var a=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){a.refresh()},this.options.resizePolling)},resetPosition:function(a){var b=this.x,c=this.y;return a=a||0,!this.hasHorizontalScroll||this.x>0?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX),!this.hasVerticalScroll||this.y>0?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY),b==this.x&&c==this.y?!1:(this.scrollTo(b,c,a,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=f.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(a,b){this._events[a]||(this._events[a]=[]),this._events[a].push(b)},off:function(a,b){if(this._events[a]){var c=this._events[a].indexOf(b);c>-1&&this._events[a].splice(c,1)}},_execEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c){for(;c>b;b++){this._events[a][b].apply(this,[].slice.call(arguments,1))}}}},scrollBy:function(a,b,c,d){a=this.x+a,b=this.y+b,c=c||0,this.scrollTo(a,b,c,d)},scrollTo:function(a,b,c,d){d=d||f.ease.circular,this.isInTransition=this.options.useTransition&&c>0,!c||this.options.useTransition&&d.style?(this._transitionTimingFunction(d.style),this._transitionTime(c),this._translate(a,b)):this._animate(a,b,c,d.fn)},scrollToElement:function(a,b,c,d,e){if(a=a.nodeType?a:this.scroller.querySelector(a)){var g=f.offset(a);g.left-=this.wrapperOffset.left,g.top-=this.wrapperOffset.top,c===!0&&(c=Math.round(a.offsetWidth/2-this.wrapper.offsetWidth/2)),d===!0&&(d=Math.round(a.offsetHeight/2-this.wrapper.offsetHeight/2)),g.left-=c||0,g.top-=d||0,g.left=g.left>0?0:g.left<this.maxScrollX?this.maxScrollX:g.left,g.top=g.top>0?0:g.top<this.maxScrollY?this.maxScrollY:g.top,b=void 0===b||null===b||"auto"===b?Math.max(Math.abs(this.x-g.left),Math.abs(this.y-g.top)):b,this.scrollTo(g.left,g.top,b,e)}},_transitionTime:function(a){a=a||0,this.scrollerStyle[f.style.transitionDuration]=a+"ms",!a&&f.isBadAndroid&&(this.scrollerStyle[f.style.transitionDuration]="0.001s")},_transitionTimingFunction:function(a){this.scrollerStyle[f.style.transitionTimingFunction]=a},_translate:function(a,b){this.options.useTransform?this.scrollerStyle[f.style.transform]="translate("+a+"px,"+b+"px)"+this.translateZ:(a=Math.round(a),b=Math.round(b),this.scrollerStyle.left=a+"px",this.scrollerStyle.top=b+"px"),this.x=a,this.y=b},_initEvents:function(a){var b=a?f.removeEvent:f.addEvent,c=this.options.bindToWrapper?this.wrapper:window;b(window,"orientationchange",this),b(window,"resize",this),this.options.click&&b(this.wrapper,"click",this,!0),this.options.disableMouse||(b(this.wrapper,"mousedown",this),b(c,"mousemove",this),b(c,"mousecancel",this),b(c,"mouseup",this)),f.hasPointer&&!this.options.disablePointer&&(b(this.wrapper,f.prefixPointerEvent("pointerdown"),this),b(c,f.prefixPointerEvent("pointermove"),this),b(c,f.prefixPointerEvent("pointercancel"),this),b(c,f.prefixPointerEvent("pointerup"),this)),f.hasTouch&&!this.options.disableTouch&&(b(this.wrapper,"touchstart",this),b(c,"touchmove",this),b(c,"touchcancel",this),b(c,"touchend",this)),b(this.scroller,"transitionend",this),b(this.scroller,"webkitTransitionEnd",this),b(this.scroller,"oTransitionEnd",this),b(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var b,c,a=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(a=a[f.style.transform].split(")")[0].split(", "),b=+(a[12]||a[4]),c=+(a[13]||a[5])):(b=+a.left.replace(/[^-\d.]/g,""),c=+a.top.replace(/[^-\d.]/g,"")),{x:b,y:c}},_animate:function(a,b,c,d){function l(){var n,o,p,m=f.getTime();return m>=k?(g.isAnimating=!1,g._translate(a,b),g.resetPosition(g.options.bounceTime)||g._execEvent("scrollEnd"),void 0):(m=(m-j)/c,p=d(m),n=(a-h)*p+h,o=(b-i)*p+i,g._translate(n,o),g.isAnimating&&e(l),void 0)}var g=this,h=this.x,i=this.y,j=f.getTime(),k=j+c;this.isAnimating=!0,l()},handleEvent:function(a){switch(a.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(a);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(a);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(a);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(a);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(a);break;case"keydown":this._key(a);break;case"click":a._constructed||(a.preventDefault(),a.stopPropagation())}}},g.utils=f,a.exports=d.iScroll=g},function(a,b,c){function j(a,b){return this.each(function(){var c=d(this),e=c.data("amui.modal"),f="object"==typeof a&&a;e||c.data("amui.modal",e=new i(this,f)),"string"==typeof a?e[a]&&e[a](b):e.toggle(a&&a.relatedTarget||void 0)})}var d=c(1),e=c(2),f=c(9),g=d(document),h=e.support.transition,i=function(a,b){this.options=d.extend({},i.DEFAULTS,b||{}),this.$element=d(a),this.$dialog=this.$element.find(".am-modal-dialog"),this.$element.attr("id")||this.$element.attr("id",e.utils.generateGUID("am-modal")),this.isPopup=this.$element.hasClass("am-popup"),this.isActions=this.$element.hasClass("am-modal-actions"),this.isPrompt=this.$element.hasClass("am-modal-prompt"),this.isLoading=this.$element.hasClass("am-modal-loading"),this.active=this.transitioning=this.relatedTarget=null,this.dimmer=this.options.dimmer?f:{open:function(){},close:function(){}},this.events()};i.DEFAULTS={className:{active:"am-modal-active",out:"am-modal-out"},selector:{modal:".am-modal",active:".am-modal-active"},closeViaDimmer:!0,cancelable:!0,onConfirm:function(){},onCancel:function(){},closeOnCancel:!0,closeOnConfirm:!0,dimmer:!0,height:void 0,width:void 0,duration:300,transitionEnd:h&&h.end+".modal.amui"},i.prototype.toggle=function(a){return this.active?this.close():this.open(a)},i.prototype.open=function(a){var j,b=this.$element,c=this.options,e=this.isPopup,f=c.width,g=c.height,i={};if(!this.active&&this.$element.length){return a&&(this.relatedTarget=a),this.transitioning&&(clearTimeout(b.transitionEndTimmer),b.transitionEndTimmer=null,b.trigger(c.transitionEnd).off(c.transitionEnd)),e&&this.$element.show(),this.active=!0,b.trigger(d.Event("open.modal.amui",{relatedTarget:a})),this.dimmer.open(b),b.show().redraw(),e||this.isActions||(f&&(f=parseInt(f,10),i.width=f+"px",i.marginLeft=-parseInt(f/2)+"px"),g?(g=parseInt(g,10),i.marginTop=-parseInt(g/2)+"px",this.$dialog.css({height:g+"px"})):i.marginTop=-parseInt(b.height()/2,10)+"px",b.css(i)),b.removeClass(c.className.out).addClass(c.className.active),this.transitioning=1,j=function(){b.trigger(d.Event("opened.modal.amui",{relatedTarget:a})),this.transitioning=0,this.isPrompt&&this.$dialog.find("input").eq(0).focus()},h?(b.one(c.transitionEnd,d.proxy(j,this)).emulateTransitionEnd(c.duration),void 0):j.call(this)}},i.prototype.close=function(a){var b,c,e,f;if(this.active){return b=this.$element,c=this.options,e=this.isPopup,this.transitioning&&(clearTimeout(b.transitionEndTimmer),b.transitionEndTimmer=null,b.trigger(c.transitionEnd).off(c.transitionEnd),this.dimmer.close(b,!0)),this.$element.trigger(d.Event("close.modal.amui",{relatedTarget:a})),this.transitioning=1,f=function(){b.trigger("closed.modal.amui"),e&&b.removeClass(c.className.out),b.hide(),this.transitioning=0,this.dimmer.close(b,!1),this.active=!1},b.removeClass(c.className.active).addClass(c.className.out),h?(b.one(c.transitionEnd,d.proxy(f,this)).emulateTransitionEnd(c.duration),void 0):f.call(this)}},i.prototype.events=function(){var a=this.options,b=this,c=this.$element,e=c.find(".am-modal-prompt-input"),f=c.find("[data-am-modal-confirm]"),g=c.find("[data-am-modal-cancel]"),h=function(){var a=[];return e.each(function(){a.push(d(this).val())}),0===a.length?void 0:1===a.length?a[0]:a};this.options.cancelable&&c.on("keyup.modal.amui",function(a){b.active&&27===a.which&&(c.trigger("cancel.modal.amui"),b.close())}),this.options.dimmer&&this.options.closeViaDimmer&&!this.isLoading&&this.dimmer.$element.on("click.dimmer.modal.amui",function(){b.close()}),c.on("click.close.modal.amui","[data-am-modal-close], .am-modal-btn",function(c){c.preventDefault();var e=d(this);e.is(f)?a.closeOnConfirm&&b.close():e.is(g)?a.closeOnCancel&&b.close():b.close()}),f.on("click.confirm.modal.amui",function(){c.trigger(d.Event("confirm.modal.amui",{trigger:this}))}),g.on("click.cancel.modal.amui",function(){c.trigger(d.Event("cancel.modal.amui",{trigger:this}))}),c.on("confirm.modal.amui",function(a){a.data=h(),b.options.onConfirm.call(b,a)}).on("cancel.modal.amui",function(a){a.data=h(),b.options.onCancel.call(b,a)})},d.fn.modal=j,g.on("click.modal.amui.data-api","[data-am-modal]",function(){var a=d(this),b=e.utils.parseOptions(a.attr("data-am-modal")),c=d(b.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),f=c.data("amui.modal")?"toggle":b;j.call(c,f,this)}),a.exports=e.modal=i},function(a,b,c){function j(a,b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=d(this),f=e.data("amui.offcanvas"),g=d.extend({},"object"==typeof a&&a);f||(e.data("amui.offcanvas",f=new i(this,g)),(!a||"object"==typeof a)&&f.open(b)),"string"==typeof a&&f[a]&&f[a].apply(f,c)})}var f,g,h,i,d=c(1),e=c(2);c(3),f=d(window),g=d(document),i=function(a,b){this.$element=d(a),this.options=d.extend({},i.DEFAULTS,b),this.active=null,this.bindEvents()},i.DEFAULTS={duration:300,effect:"overlay"},i.prototype.open=function(){var e,g,i,j,k,b=this,c=this.$element;c.length&&!c.hasClass("am-active")&&(e=this.options.effect,g=d("html"),i=d("body"),j=c.find(".am-offcanvas-bar").first(),k=j.hasClass("am-offcanvas-bar-flip")?-1:1,j.addClass("am-offcanvas-bar-"+e),h={x:window.scrollX,y:window.scrollY},c.addClass("am-active"),i.css({width:window.innerWidth,height:f.height()}).addClass("am-offcanvas-page"),"overlay"!==e&&i.css({"margin-left":j.outerWidth()*k}).width(),g.css("margin-top",-1*h.y),setTimeout(function(){j.addClass("am-offcanvas-bar-active").width()},0),c.trigger("open.offcanvas.amui"),this.active=1,c.on("click.offcanvas.amui",function(a){var c=d(a.target);c.hasClass("am-offcanvas-bar")||c.parents(".am-offcanvas-bar").first().length||(a.stopImmediatePropagation(),b.close())}),g.on("keydown.offcanvas.amui",function(a){27===a.keyCode&&b.close()}))},i.prototype.close=function(){function j(){f.removeClass("am-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),g.removeClass("am-active"),i.removeClass("am-offcanvas-bar-active"),c.css("margin-top",""),window.scrollTo(h.x,h.y),g.trigger("closed.offcanvas.amui"),b.active=0}var b=this,c=d("html"),f=d("body"),g=this.$element,i=g.find(".am-offcanvas-bar").first();g.length&&this.active&&g.hasClass("am-active")&&(g.trigger("close.offcanvas.amui"),e.support.transition?(setTimeout(function(){i.removeClass("am-offcanvas-bar-active")},0),f.css("margin-left","").one(e.support.transition.end,function(){j()}).emulateTransitionEnd(this.options.duration)):j(),g.off("click.offcanvas.amui"),c.off(".offcanvas.amui"))},i.prototype.bindEvents=function(){var a=this;return g.on("click.offcanvas.amui",'[data-am-dismiss="offcanvas"]',function(b){b.preventDefault(),a.close()}),f.on("resize.offcanvas.amui orientationchange.offcanvas.amui",function(){a.active&&a.close()}),this.$element.hammer().on("swipeleft swipeleft",function(b){b.preventDefault(),a.close()}),this},d.fn.offCanvas=j,g.on("click.offcanvas.amui","[data-am-offcanvas]",function(a){var b,c,f,g;a.preventDefault(),b=d(this),c=e.utils.parseOptions(b.data("amOffcanvas")),f=d(c.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("amui.offcanvas")?"open":c,j.call(f,g,this)}),a.exports=e.offcanvas=i},function(a,b,c){var d=c(1),e=c(2),f=function(a){var e,b=function(b,c){this.el=a(b),this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.options=a.extend({},this.defaults,c),this.setupMarkup(),this.bindEvents(),this.update(),this.enable()},c=function(a,b){return a+b},d=function(a,b){return a>b-0.01&&b+0.01>a};return b.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,animationInterval:5,maxZoom:5,minZoom:0.5,lockDragAxis:!1,use2d:!1,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap"},handleDragStart:function(a){this.el.trigger(this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(a)},handleDrag:function(a){if(this.zoomFactor>1){var b=this.getTouches(a)[0];this.drag(b,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=b}},handleDragEnd:function(){this.el.trigger(this.options.dragEndEventName),this.end()},handleZoomStart:function(){this.el.trigger(this.options.zoomStartEventName),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(a,b){var c=this.getTouchCenter(this.getTouches(a)),d=b/this.lastScale;this.lastScale=b,this.nthZoom+=1,this.nthZoom>3&&(this.scale(d,c),this.drag(c,this.lastZoomCenter)),this.lastZoomCenter=c},handleZoomEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},handleDoubleTap:function(a){var b=this.getTouches(a)[0],c=this.zoomFactor>1?1:this.options.tapZoomFactor,d=this.zoomFactor,e=function(a){this.scaleTo(d+a*(c-d),b)}.bind(this);this.hasInteraction||(d>c&&(b=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,this.options.animationInterval,e,this.swing),this.el.trigger(this.options.doubleTapEventName))},sanitizeOffset:function(a){var b=(this.zoomFactor-1)*this.getContainerX(),c=(this.zoomFactor-1)*this.getContainerY(),d=Math.max(b,0),e=Math.max(c,0),f=Math.min(b,0),g=Math.min(c,0);return{x:Math.min(Math.max(a.x,f),d),y:Math.min(Math.max(a.y,g),e)}},scaleTo:function(a,b){this.scale(a/this.zoomFactor,b)},scale:function(a,b){a=this.scaleZoomFactor(a),this.addOffset({x:(a-1)*(b.x+this.offset.x),y:(a-1)*(b.y+this.offset.y)})},scaleZoomFactor:function(a){var b=this.zoomFactor;return this.zoomFactor*=a,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/b},drag:function(a,b){b&&(this.options.lockDragAxis?Math.abs(a.x-b.x)>Math.abs(a.y-b.y)?this.addOffset({x:-(a.x-b.x),y:0}):this.addOffset({y:-(a.y-b.y),x:0}):this.addOffset({y:-(a.y-b.y),x:-(a.x-b.x)}))},getTouchCenter:function(a){return this.getVectorAvg(a)},getVectorAvg:function(a){return{x:a.map(function(a){return a.x}).reduce(c)/a.length,y:a.map(function(a){return a.y}).reduce(c)/a.length}},addOffset:function(a){this.offset={x:this.offset.x+a.x,y:this.offset.y+a.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(a){var b=this.sanitizeOffset(a);return b.x!==a.x||b.y!==a.y},sanitizeOffsetAnimation:function(){var a=this.sanitizeOffset(this.offset),b={x:this.offset.x,y:this.offset.y},c=function(c){this.offset.x=b.x+c*(a.x-b.x),this.offset.y=b.y+c*(a.y-b.y),this.update()}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,c,this.swing)},zoomOutAnimation:function(){var a=this.zoomFactor,b=1,c=this.getCurrentZoomCenter(),d=function(d){this.scaleTo(a+d*(b-a),c)}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,d,this.swing)},updateAspectRatio:function(){this.setContainerY()},getInitialZoomFactor:function(){return this.container[0].offsetWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var a=this.container[0].offsetWidth*this.zoomFactor,b=this.offset.x,c=a-b-this.container[0].offsetWidth,d=b/c,e=d*this.container[0].offsetWidth/(d+1),f=this.container[0].offsetHeight*this.zoomFactor,g=this.offset.y,h=f-g-this.container[0].offsetHeight,i=g/h,j=i*this.container[0].offsetHeight/(i+1);return 0===c&&(e=this.container[0].offsetWidth),0===h&&(j=this.container[0].offsetHeight),{x:e,y:j}},canDrag:function(){return!d(this.zoomFactor,1)},getTouches:function(a){var b=this.container.offset();return Array.prototype.slice.call(a.touches).map(function(a){return{x:a.pageX-b.left,y:a.pageY-b.top}})},animate:function(a,b,c,d,e){var f=(new Date).getTime(),g=function(){if(this.inAnimation){var h=(new Date).getTime()-f,i=h/a;h>=a?(c(1),e&&e(),this.update(),this.stopAnimation(),this.update()):(d&&(i=d(i)),c(i),this.update(),setTimeout(g,b))}}.bind(this);this.inAnimation=!0,g()},stopAnimation:function(){this.inAnimation=!1},swing:function(a){return-Math.cos(a*Math.PI)/2+0.5},getContainerX:function(){return window.innerWidth},getContainerY:function(){return window.innerHeight},setContainerY:function(){var b=window.innerHeight;return this.el.css({height:b}),this.container.height(b)},setupMarkup:function(){this.container=a('<div class="pinch-zoom-container"></div>'),this.el.before(this.container),this.container.append(this.el),this.container.css({overflow:"hidden",position:"relative"}),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){e(this.container.get(0),this),a(window).on("resize",this.update.bind(this)),a(this.el).find("img").on("load",this.update.bind(this))},update:function(){this.updatePlaned||(this.updatePlaned=!0,setTimeout(function(){this.updatePlaned=!1,this.updateAspectRatio();var a=this.getInitialZoomFactor()*this.zoomFactor,b=-this.offset.x/a,c=-this.offset.y/a,d="scale3d("+a+", "+a+",1) translate3d("+b+"px,"+c+"px,0px)",e="scale("+a+", "+a+") translate("+b+"px,"+c+"px)",f=function(){this.clone&&(this.clone.remove(),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,f(),this.el.css({"-webkit-transform":d,"-o-transform":e,"-ms-transform":e,"-moz-transform":e,transform:d})):(this.is3d&&(this.clone=this.el.clone(),this.clone.css("pointer-events","none"),this.clone.appendTo(this.container),setTimeout(f,200)),this.el.css({"-webkit-transform":e,"-o-transform":e,"-ms-transform":e,"-moz-transform":e,transform:e}),this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}},e=function(a,b){var c=null,d=0,e=null,f=null,g=function(a,d){if(c!==a){if(c&&!a){switch(c){case"zoom":b.handleZoomEnd(d);break;case"drag":b.handleDragEnd(d)}}switch(a){case"zoom":b.handleZoomStart(d);break;case"drag":b.handleDragStart(d)}}c=a},h=function(a){2===d?g("zoom"):1===d&&b.canDrag()?g("drag",a):g(null,a)},i=function(a){return Array.prototype.slice.call(a).map(function(a){return{x:a.pageX,y:a.pageY}})},j=function(a,b){var c,d;return c=a.x-b.x,d=a.y-b.y,Math.sqrt(c*c+d*d)},k=function(a,b){var c=j(a[0],a[1]),d=j(b[0],b[1]);return d/c},l=function(a){a.stopPropagation(),a.preventDefault()},m=function(a){var f=(new Date).getTime();if(d>1&&(e=null),300>f-e){switch(l(a),b.handleDoubleTap(a),c){case"zoom":b.handleZoomEnd(a);break;case"drag":b.handleDragEnd(a)}}1===d&&(e=f)},n=!0;a.addEventListener("touchstart",function(a){b.enabled&&(n=!0,d=a.touches.length,m(a))}),a.addEventListener("touchmove",function(a){if(b.enabled){if(n){h(a),c&&l(a),f=i(a.touches)}else{switch(c){case"zoom":b.handleZoom(a,k(f,i(a.touches)));break;case"drag":b.handleDrag(a)}c&&(l(a),b.update())}n=!1}}),a.addEventListener("touchend",function(a){b.enabled&&(d=a.touches.length,h(a))})},b};a.exports=e.pichzoom=f(d)}])});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=window.Slick||{};b=function(){function c(c,d){var f,g,e=this;if(e.defaults={accessibility:!0,arrows:!0,autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button">'+(b+1)+"</button>"},dots:!1,draggable:!0,easing:"linear",fade:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,responsive:null,slide:"div",slideNext:">",slidePrev:"<",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},e.initials={animating:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.paused=!1,e.positionProp=null,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.windowWidth=0,e.windowTimer=null,e.options=a.extend({},e.defaults,d),e.originalSettings=e.options,f=e.options.responsive||null,f&&f.length>-1){for(g in f){f.hasOwnProperty(g)&&(e.breakpoints.push(f[g].breakpoint),e.breakpointSettings[f[g].breakpoint]=f[g].settings)}e.breakpoints.sort(function(a,b){return b-a})}e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.init()}var b=0;return c}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c){d=c,c=null}else{if(0>c||c>=e.slideCount){return!1}}e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).remove(),e.$slideTrack.append(e.$slides),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a('<a href="javascript:;" class="slick-prev"><span class="iconfont">'+b.options.slidePrev+"</span></a>").appendTo(b.$slider),b.$nextArrow=a('<a href="javascript:;" class="slick-next"><span class="iconfont">'+b.options.slideNext+"</span></a>").appendTo(b.$slider),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="slick-dots">',c=0;c<=b.getDotCount();c+=1){d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>"}d+="</ul>",b.$dots=a(d).appendTo(b.$slider),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list clearfix"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.infinite=!0,b.options.slidesToScroll=1,0===b.options.slidesToShow%2&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses(0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,b=this;if(b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints){b.breakpoints.hasOwnProperty(c)&&a(window).width()<b.breakpoints[c]&&(d=b.breakpoints[c])}null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,b.options=a.extend({},b.defaults,b.breakpointSettings[d]),b.refresh()):(b.activeBreakpoint=d,b.options=a.extend({},b.defaults,b.breakpointSettings[d]),b.refresh()):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=a.extend({},b.defaults,b.originalSettings),b.refresh())}},b.prototype.changeSlide=function(b){var c=this;switch(b.data.message){case"previous":c.slideHandler(c.currentSlide-c.options.slidesToScroll);break;case"next":c.slideHandler(c.currentSlide+c.options.slidesToScroll);break;case"index":c.slideHandler(a(b.target).parent().index()*c.options.slidesToScroll);break;default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1000}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1000}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).remove(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var e,a=this,b=0,c=0,d=0;for(e=a.options.infinite===!0?a.slideCount+a.options.slidesToShow-a.options.slidesToScroll:a.slideCount;e>b;){d++,c+=a.options.slidesToScroll,b=c+a.options.slidesToShow}return d},b.prototype.getLeft=function(a){var c,d,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideCount%b.options.slidesToShow*b.slideWidth,e=-1*b.slideCount%b.options.slidesToShow*d)):0!==b.slideCount%b.options.slidesToShow&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.options.slidesToShow*b.slideWidth-b.slideCount%b.options.slidesToShow*b.slideWidth,e=b.slideCount%b.options.slidesToShow*d),b.options.centerMode===!0&&(b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){var c,d,e,f,b=this;b.options.centerMode===!0?(e=b.options.slidesToShow+b.currentSlide-1,f=e+b.options.slidesToShow+2):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow),c=b.$slider.find(".slick-slide").slice(e,f),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}),b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),a("img[data-lazy]",d).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})})):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),a("img[data-lazy]",d).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]").not("[src]").length,c>0&&(d=a(a("img[data-lazy]",b.$slider).not("[src]").get(0)),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this;b.destroy(),a.extend(b,b.initials),b.init()},b.prototype.reinit=function(){var a=this;a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.setSlideClasses(0),a.setPosition(),null!==a.options.onReInit&&a.options.onReInit.call(this,a)},b.prototype.removeSlide=function(a,b){var c=this;return"boolean"==typeof a?(b=a,a=b===!0?0:c.slideCount-1):a=b===!0?--a:a,c.slideCount<1||0>a||a>c.slideCount-1?!1:(c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).remove(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,c.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};d="left"==b.positionProp?a+"px":"0px",e="top"==b.positionProp?a+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.centerMode===!0?a.$slideTrack.children(".slick-slide").width(a.slideWidth):a.$slideTrack.children(".slick-slide").width(a.slideWidth),a.options.vertical===!1?(a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length)),a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding})):(a.$list.height(a.$slides.first().outerHeight()*a.options.slidesToShow),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight()*a.$slideTrack.children(".slick-slide").length)),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"}))},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setPosition=function(){var a=this;a.setValues(),a.setDimensions(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType},b.prototype.setValues=function(){var a=this;a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.slideWidth=a.options.vertical===!1?Math.ceil(a.listWidth/a.options.slidesToShow):Math.ceil(a.listWidth)},b.prototype.setSlideClasses=function(a){var c,d,e,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center"),b.$slides.eq(a).addClass("slick-center")):a>0&&a<b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):(e=b.options.infinite===!0?b.options.slidesToShow+a:a,d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if((b.options.fade===!0||b.options.vertical===!0)&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1){d=c-1,a(b.$slides[d]).clone().attr("id","").prependTo(b.$slideTrack).addClass("slick-cloned")}for(c=0;e>c;c+=1){d=c,a(b.$slides[d]).clone().attr("id","").appendTo(b.$slideTrack).addClass("slick-cloned")}b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.slideHandler=function(a){var b,c,d,e,f=null,g=this;return g.animating===!0?!1:(b=a,f=g.getLeft(b),d=g.getLeft(g.currentSlide),e=0!==g.slideCount%g.options.slidesToScroll?g.options.slidesToScroll:0,g.currentLeft=null===g.swipeLeft?d:g.swipeLeft,g.options.infinite===!1&&(0>a||a>g.slideCount-g.options.slidesToShow+e)?(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)}),!1):(g.options.autoplay===!0&&clearInterval(g.autoPlayTimer),c=0>b?0!==g.slideCount%g.options.slidesToScroll?g.slideCount-g.slideCount%g.options.slidesToScroll:g.slideCount-g.options.slidesToScroll:b>g.slideCount-1?0:b,g.animating=!0,null!==g.options.onBeforeChange&&a!==g.currentSlide&&g.options.onBeforeChange.call(this,g,g.currentSlide,c),g.currentSlide=c,g.setSlideClasses(g.currentSlide),g.updateDots(),g.updateArrows(),g.options.fade===!0?(g.fadeSlide(c,function(){g.postSlide(c)}),!1):(g.animateSlide(f,function(){g.postSlide(c)}),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?"left":360>=d&&d>=315?"left":d>=135&&225>=d?"right":"vertical"},b.prototype.swipeEnd=function(b){var c=this;if(c.$list.removeClass("dragging"),void 0===c.touchObject.curX){return!1}if(c.touchObject.swipeLength>=c.touchObject.minSwipe){switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+c.options.slidesToScroll),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-c.options.slidesToScroll),c.touchObject={}}}else{c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),c.touchObject={})}},b.prototype.swipeHandler=function(a){var b=this;if("ontouchend"in document&&b.options.swipe===!1){return!1}if(b.options.draggable===!1&&!a.originalEvent.touches){return!1}switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var c,d,e,f,b=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,c=b.getLeft(b.currentSlide),!b.$list.hasClass("dragging")||f&&1!==f.length?!1:(b.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,b.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),d=b.swipeDirection(),"vertical"!==d?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),e=b.touchObject.curX>b.touchObject.startX?1:-1,b.swipeLeft=b.options.vertical===!1?c+b.touchObject.swipeLength*e:c+b.touchObject.swipeLength*(b.$list.height()/b.listWidth)*e,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.$list.addClass("dragging"),void 0)},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).remove(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},b.prototype.updateArrows=function(){var a=this;a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(a.currentSlide/a.options.slidesToScroll).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a){var b=this;return b.each(function(b,c){c.slick.slideHandler(a)})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick.destroy()})}});;
/*!
    jQThumb V1.9.3
    Copyright (c) 2013-2014
    Dual licensed under the MIT and GPL licenses.

    Author       : Pak Cheong
    Version      : 1.9.3
    Repo         : https://github.com/pakcheong/jqthumb
    Demo         : http://pakcheong.github.io/jqthumb/
    Last Updated : Thursday, July 10th, 2014, 4:32:44 PM
    Requirements : jQuery >=v1.3.0 or Zepto (with zepto-data plugin) >=v1.0.0
*/
!function(a,b,c){function d(b,c){this.element=b,this.settings=a.extend({},g,c),this.settings.width=this.settings.width.toString().replace(/px/g,""),this.settings.height=this.settings.height.toString().replace(/px/g,""),this.settings.position.top=this.settings.position.top.toString().replace(/px/g,""),this.settings.position.left=this.settings.position.left.toString().replace(/px/g,""),this._defaults=g,this._name=e,"string"==typeof c?"kill"==c.toLowerCase():this.init()}var e="jqthumb",f={outputElems:[],inputElems:[]},g={classname:"jqthumb",width:100,height:100,position:{top:"50%",left:"50%"},source:"src",showoncomplete:!0,before:function(){},after:function(){},done:function(){}};d.prototype={init:function(){this.support_css3_attr("backgroundSize")===!1?this.nonCss3Supported_method(this.element,this.settings):this.css3Supported_method(this.element,this.settings)},kill:function(b){if(a(b).data(e)){if(a(b).prev().data(e)!==e){return console.error("We could not find the element created by jqthumb. It is probably due to one or more element has been added right before the image element after the plugin initialization, or it was removed."),!1}var c=[];a.each(f.outputElems,function(d,e){a(e)[0]==a(b).prev()[0]||c.push(f.outputElems[d])}),f.outputElems=c,c=[],a.each(f.inputElems,function(d,e){a(e)[0]==a(b)[0]||c.push(f.inputElems[d])}),f.inputElems=c,a(b).prev().remove(),a(b).removeAttr("style"),"undefined"!=typeof a(b).data(e+"-original-styles")&&a(b).attr("style",a(b).data(e+"-original-styles")),"undefined"!=typeof a(b).data(e+"-original-styles")&&a(b).removeData(e+"-original-styles"),"undefined"!=typeof a(b).data(e)&&a(b).removeData(e)}},nonCss3Supported_method:function(b,c){c.before.call(b,b);var d=this,f=a(b);f.data(e+"-original-styles",f.attr("style")),f.hide();var g=a("<img/>");g.bind("load",function(){var h={obj:g,size:{width:this.width,height:this.height}},i=d.percentOrPixel(c.width),j=d.percentOrPixel(c.height),k=a("<div />"),l=0;a(k).insertBefore(f).append(a(h.obj)).css({position:"relative",overflow:"hidden",width:"%"==i?c.width:c.width+"px",height:"%"==j?c.height:c.height+"px"}).data(e,e),h.size.width>h.size.height?(a(h.obj).css({width:"auto","max-height":99999999,"min-height":0,"max-width":99999999,"min-width":0,height:a(h.obj).parent().height()+"px"}),l=a(h.obj).height()/a(h.obj).width(),a(h.obj).width()<a(h.obj).parent().width()&&a(h.obj).css({width:a(h.obj).parent().width(),height:parseFloat(a(h.obj).parent().width()*l)})):(a(h.obj).css({width:a(h.obj).parent().width()+"px","max-height":99999999,"min-height":0,"max-width":99999999,"min-width":0,height:"auto"}),l=a(h.obj).width()/a(h.obj).height(),a(h.obj).height()<a(h.obj).parent().height()&&a(h.obj).css({width:parseFloat(a(h.obj).parent().height()*l),height:a(h.obj).parent().height()})),posTop="%"==d.percentOrPixel(c.position.top)?c.position.top:c.position.top+"px",posLeft="%"==d.percentOrPixel(c.position.left)?c.position.left:c.position.left+"px",a(h.obj).css({position:"absolute",top:posTop,"margin-top":function(){return "%"==d.percentOrPixel(c.position.top)?"-"+parseFloat(a(h.obj).height()/100*c.position.top.slice(0,-1))+"px":void 0}(),left:posLeft,"margin-left":function(){return "%"==d.percentOrPixel(c.position.left)?"-"+parseFloat(a(h.obj).width()/100*c.position.left.slice(0,-1))+"px":void 0}()}),a(k).hide().addClass(c.classname),c.showoncomplete===!0&&a(k).show(),c.after.call(b,a(k)),d.updateGlobal(b,a(k),c)}).attr("src",f.attr(c.source))},css3Supported_method:function(b,c){c.before.call(b,b);var d=this,f=a(b),g=a("<img />").attr("src",f.attr(c.source));f.data(e+"-original-styles",f.attr("style")),f.hide(),a.each(g,function(g,h){var i=a(h);i.one("load",function(){var g=d.percentOrPixel(c.width),h=d.percentOrPixel(c.height),i=null,j=null;i=a("<div/>").css({width:"%"==g?c.width:c.width+"px",height:"%"==h?c.height:c.height+"px",display:"none"}).addClass(c.classname).data(e,e),j=a("<div/>").css({width:"100%",height:"100%","background-image":'url("'+f.attr(c.source)+'")',"background-repeat":"no-repeat","background-position":function(){var a="%"==d.percentOrPixel(c.position.top)?c.position.top:c.position.top+"px",b="%"==d.percentOrPixel(c.position.left)?c.position.left:c.position.left+"px";return a+" "+b}(),"background-size":"cover"}).appendTo(a(i)),a(i).insertBefore(a(b)),c.showoncomplete===!0&&a(i).show(),d.checkSrcAttrName(b,c),c.after.call(b,a(i)),d.updateGlobal(b,a(i),c)})})},updateGlobal:function(b,c,d){b.global.outputElems.push(a(c)[0]),b.global.elemCounter++,f.outputElems.push(a(c)[0]),b.global.elemCounter==b.global.inputElems.length&&d.done.call(b,b.global.outputElems)},checkSrcAttrName:function(b,c){"src"==c.source||"undefined"!=typeof a(b).attr("src")&&""!==a(b).attr("src")||a(b).attr("src",a(b).attr(c.source))},percentOrPixel:function(a){return a=a.toString(),a.match("px$")||a.match("PX$")||a.match("pX$")||a.match("Px$")?"px":a.match("%$")?"%":void 0},support_css3_attr:function(){{var a=c.createElement("div"),b="Khtml Ms O Moz Webkit".split(" ");b.length};return function(c){if(c in a.style){return!0}for(c=c.replace(/^[a-z]/,function(a){return a.toUpperCase()}),i=0;i<b.length;i+=1){if(b[i]+c in a.style){return!0}}return!1}}()},a.fn[e]=function(b){var c={elemCounter:0,outputElems:[],inputElems:function(b){for(var c=a(b),d=c.length,e=[],f=0;d>f;f+=1){e.push(c.get(f))}return e}(a(this))};return obj={},obj[e]=function(b){return "undefined"==typeof b?void console.error('Please specify an action like $.jqthumb("killall")'):(b=b.toLowerCase(),void("killall"==b&&a.each(f.inputElems,function(){new d(this,"kill")})))},a.extend(a,obj),this.each(function(){var g=a(this);this.global=c,f.inputElems.push(g),"string"==typeof b?new d(this,b):g.data(e)?(new d(this,"kill"),g.data(e,new d(this,b))):g.data(e,new d(this,b))})}}(window.jQuery||window.Zepto,window,document);;
/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}
		
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator); 
		
		if ( validator.settings.onsubmit ) {
		
			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});
			
			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				this.find("input, button").filter(":submit").click(function() {
					validator.submitButton = this;
				});
			}
		
			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();
					
				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}
					
				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}
		
		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}
		
		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);
		
		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}
		
		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 ) 
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {
	
	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;
				
			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.errorsFor(element).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode);
		},
		highlight: function( element, errorClass, validClass ) {
			$(element).addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function( element, errorClass, validClass ) {
			$(element).removeClass(errorClass).addClass(validClass);
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "不能为空!",
		remote: "Please fix this field!",
		email: "请输入正确的邮件地址!",
		url: "请输入正确的URL地址，如http://www.helloweba.com",
		date: "Please enter a valid date！",
		dateISO: "格式错误!",
		number: "请填写合适的数字！",
		digits: "只能输入数字！",
		creditcard: "Please enter a valid credit card number！",
		equalTo: "两次密码输入不一致！",
		accept: "文件格式不对！",
		maxlength: $.validator.format("您输入的字符数不能大于 {0} 位！"),
		minlength: $.validator.format("您输入的字符数不能小于 {0} 位！"),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long！"),
		range: $.validator.format("您输入的值的范围应该在 {0} 和 {1} 之间！"),
		max: $.validator.format("Please enter a value less than or equal to {0}！"),
		min: $.validator.format("Please enter a value greater than or equal to {0}！")
	},
	
	autoCreateRanges: false,
	
	prototype: {
		
		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();
			
			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});
			
			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0] );
			}
			$(this.currentForm)
				.validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate)
				.validateDelegate(":radio, :checkbox, select, option", "click", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},
		
		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid(); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},
		
		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},
		
		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},
		
		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},
		
		valid: function() {
			return this.size() == 0;
		},
		
		size: function() {
			return this.errorList.length;
		},
		
		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},
		
		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},
		
		elements: function() {
			var validator = this,
				rulesCache = {};
			
			// select all valid inputs inside the form (no submit or reset buttons)
			// workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
			return $([]).add(this.currentForm.elements)
			.filter(":input")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
			
				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;
				
				rulesCache[this.name] = true;
				return true;
			});
		},
		
		clean: function( selector ) {
			return $( selector )[0];
		},
		
		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},
		
		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},
		
		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},
		
		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},
	
		check: function( element ) {
			element = this.clean( element );
			
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name )[0];
			}
			
			var rules = $(element).rules();
			var dependencyMismatch = false;
			for( method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
					
					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;
					
					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}
					
					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},
		
		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;
			
			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();
			
			return meta && meta.messages && meta.messages[method];
		},
		
		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},
		
		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},
		
		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},
		
		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}			
			this.errorList.push({
				message: message,
				element: element
			});
			
			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},
		
		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},
		
		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},
		
		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},
		
		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},
		
		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );
			
				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},
		
		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name;
			});
		},
		
		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},
		
		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},
		
		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},
	
		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},
	
		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},
		
		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},
		
		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},
		
		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},
		
		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}
		
	},
	
	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},
	
	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},
	
	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},
	
	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);
		
		for (method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}
		
		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}
		
		return rules;
	},
	
	metadataRules: function(element) {
		if (!$.metadata) return {};
		
		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},
	
	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},
	
	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});
		
		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});
		
		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});
		
		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}
		
		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}
		
		return rules;
	},
	
	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},
	
	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			
			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;
			
			param = typeof param == "string" && {url:param} || param; 
			
			if ( previous.old !== value ) {
				previous.old = value;
				var validator = this;
				this.startRequest(element);
				var data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					//url: param.url,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					//data: param.data || data,
					success: function(response) {
						validator.settings.messages[element.name].remote = previous.originalMessage;
						var valid = response === true;
						if ( valid ) {
							var submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							validator.showErrors();
						} else {
							var errors = {};
							var message = (previous.message = response || validator.defaultMessage( element, "remote" ));
							errors[element.name] = $.isFunction(message) ? message(value) : message;
							validator.showErrors(errors);
						}
						previous.valid = valid;
						validator.stopRequest(element, valid);
					}
				}, param));
				return "pending";
			} else if( this.pending[element.name] ) {
				return "pending";
			}
			return previous.valid;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
	    
		// 验证身份证
		//dateISO: function(value, element) {
		//	return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		//},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},
        
		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}
		
	}
	
});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
	var ajax = $.ajax;
	var pendingRequests = {};
	$.ajax = function(settings) {
		// create settings for compatibility with ajaxSetup
		settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
		var port = settings.port;
		if (settings.mode == "abort") {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			return (pendingRequests[port] = ajax.apply(this, arguments));
		}
		return ajax.apply(this, arguments);
	};
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 
;(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'	
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					arguments[0] = $.event.fix(e);
					arguments[0].type = fix;
					return $.event.handle.apply(this, arguments);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	};
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
})(jQuery);
/*
 * jQuery validation 验证类型扩展
 *
 * 扩展的验证类型：用户名，邮政编码，大陆身份证号码，大陆手机号码,电话号码
 * 
 */
 // 邮政编码验证    
 	jQuery.validator.addMethod("isZipCode", function(value, element) {    
  var zip = /^[0-9]{6}$/;    
  return this.optional(element) || (zip.test(value));    
}, "请正确填写您的邮政编码!");        
// 身份证号码验证
jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
  var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
  return this.optional(element) || (idCard.test(value));    
}, "请输入正确的身份证号码!"); 

// 手机号码验证    
jQuery.validator.addMethod("isMobile", function(value, element) {    
  var length = value.length;    
  return this.optional(element) || (length == 11 && /^(((1[3-9][0-9]{1})|(15[0-9]{1}))+\d{8})$/.test(value));    
}, "请正确填写您的手机号码!");

// 电话号码验证    
jQuery.validator.addMethod("isPhone", function(value, element) {    
  var tel = /^(\d{3,4}-?)?\d{7,9}$/g;    
  return this.optional(element) || (tel.test(value));    
}, "请正确填写您的电话号码!")

// 用户名字符验证    
jQuery.validator.addMethod("userName", function(value, element) {    
  return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);    
}, "用户名只能包括中文字、英文字母、数字和下划线!");   

// 联系电话(手机/电话皆可)验证   
jQuery.validator.addMethod("isTel", function(value,element) {   
    var length = value.length;   
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;   
    var tel = /^\d{3,4}-?\d{7,9}$/;   
    return this.optional(element) || (tel.test(value) || mobile.test(value));   
}, "请正确填写您的联系电话!");  

// IP地址验证   
jQuery.validator.addMethod("ip", function(value, element) {    
  return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
}, "请填写正确的IP地址！");

//身份证号码的验证规则
function isIdCardNo(num){ 
　//　 if (isNaN(num)) {alert("输入的不是数字！"); return false;} 
　　 var len = num.length, re; 
　　 if (len == 15) 
　　 re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
　　 else if (len == 18) 
　　 re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
　　 else {alert("输入的数字位数不对！"); return false;} 
　　 var a = num.match(re); 
　　 if (a != null) 
　　 { 
　　 if (len==15) 
　　 { 
　　 var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 else 
　　 { 
　　 var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 if (!B) {alert("输入的身份证号 "+ a[0] +" 里出生日期不对！"); return false;} 
　　 } 
　　  if(!re.test(num)){alert("身份证最后一位只能是数字和字母!");return false;}
　　  
　　 return true; 
};
$ = jQuery;
$(document).ready(function(){
    $('.jqthumb > img').jqthumb({
        classname: 'jqthumb',
        width: "100%",
        height: "100%",
        showoncomplete : true
    });



    $('.news-brief-content .jqthumb > img').jqthumb({
        classname: 'jqthumb',
        width: "100%",
        height: "100%",
        showoncomplete : true,
        position: {
           x: 0,
           y: 0
        }
    });

    ;(function($,window,undefiend){
        "use strict"
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        function bannerHeight(a){
            var winH = $(window).height();
            a.each(function(){
                $(this).css('height',winH);
                $(this).find('.am-slides > li').css('height',winH);
            });
        }
        var addAnimate = function(){
            $('.hp-banner-box').find('.animation').addClass('active-animeta');
            $('.hp-banner-box .am-slides > li').each(function(){
                if(!$(this).hasClass("am-active-slide")){
                    $(this).find('.animation').removeClass('active-animeta');
                }
            });
        }
        var hpBannerSize = function() {
            $('#hpBanner').find('.am-slides').find('li').each(function(){

                var bg = $(this).attr('data-bg');
                var bgArr = bg.split('||');
                var winW = $(window).width();
                var setBg1 = bgArr[0],
                    setBg2 = bgArr[1] || bgArr[0];
                if(winW > 768) {
                    $(this).css('background', 'url(' + setBg1 + ') center center no-repeat');
                } else if (winW < 768) {
                    $(this).css('background', 'url(' + setBg2 + ') center center no-repeat');
                }
            });
        }
        hpBannerSize();
        window.addEventListener(resizeEvt,function(){
            hpBannerSize();
        }, false);
        $('.am-slider').each(function(){
            var id = $(this).attr('id'),
                liNum = $(this).find('.am-slides > li').size();
            if($(this).hasClass('full-slider-banner')){
                bannerHeight($(this));
                window.addEventListener(resizeEvt,function(){
                    bannerHeight($('.am-slider'));
                }, false);
            }
            var sliderLiTouch = function(){
                if(liNum < 2) {
                    return false;
                } else {
                    return true;
                }
            }
            $('#' + id).flexslider({
                reverse: false,
                pauseOnHover: true,
                video: false,
                touch: sliderLiTouch(),
                start: function(){
                    $('.slider-mask').css('display','none');
                    $(".am-slides").find('li').fadeIn(300);
                    hpBannerSize();
                    addAnimate();
                },
                after: function(){
                    addAnimate();
                }
            });
            if(liNum < 2) {
                $(this).find(".am-direction-nav").css('display','none');
            } else {
                $(this).find(".am-direction-nav").css('display','block');
            }
            $(this).find('.am-prev > .iconfont').html($(this).attr('data-parrow'));
            $(this).find('.am-next > .iconfont').html($(this).attr('data-larrow'));
        });
    }(jQuery,window,document));
    ;(function($,window,undefiend){
        "use strict";
        $(".case-list").slick({
            slidesToShow: 4,
            autoplay: false ,
            autoplaySpeed: 3000 ,
            speed: 300 ,
            slidesToScroll: 4,
            draggable: false,
            slidePrev: "&#xe64e;",
            slideNext: "&#xe75b;",
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidePrev: "&#xe64e;",
                    slideNext: "&#xe75b;",
                    slidesToShow: 4
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 1
                    }
                }]
        });
    }(jQuery,window,document));
    ;(function($,window,undefined){
        "use strict"
        var winH = $(window).height(),
            winW = $(window).width(),
            headH = $("#headerBox").height(),
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            headNav = $(".header-nav"),
            navList = $("#navList"),
            navLi = $("#navList > li"),
            pageBox = $(".page-box"),
            pageMask = $('.page-mask'),
            navBtn = $('#navBtn'),
            lineOne = $('#navBtn .one'),
            lineTwo = $('#navBtn .two'),
            linethree = $('#navBtn .three');
        navBtn.bind("click",function(e){
            if(!$(this).hasClass("open")){
                openMenu();
            } else {
                closeMenu();
            }
        });
        var navResize = function() {
            var winH = $(window).height();
            var winW = $(window).width();
            headH = $("#headerBox").height(),
                headNav.css('max-height',winH - headH + "px");
            if(winW > 992) {
                pageMask.css('display','none');
                if(navList.css('display') === 'none') {
                    navList.css('display','block');
                }
            } else {
                navList.css('display','none');
            }
        }
        navResize();
        window.addEventListener(resizeEvt, function(){
            navResize();
        }, false);
        function openMenu(){
            navList.slideDown(300);
            navBtn.addClass("open");
            navLi.addClass('active');
            pageMask.fadeIn(300);
            lineTwo.fadeOut(100);
            setTimeout(function(){
                lineOne.addClass('rotate30');
                linethree.addClass('rotate150');
                setTimeout(function(){
                    lineOne.addClass('rotate45');
                    linethree.addClass('rotate135');
                },100);
            },10);
        }
        function closeMenu(){
            navList.slideUp(300);
            navLi.removeClass('active');
            navBtn.removeClass("open");
            pageMask.fadeOut(300);
            lineTwo.fadeIn(150);
            lineOne.removeClass('rotate45').addClass('rotate30');
            linethree.removeClass('rotate135').addClass('rotate150');
            setTimeout(function(){
                lineOne.removeClass('rotate30');
                linethree.removeClass('rotate150');
            },50);
        }
    }(jQuery,window,document));

    ;(function($,window,undefined){
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var navdropdown = function(ele){
            var winW = $(window).width();
            if(winW > 992){
                ele.unbind('click');
                ele.bind({
                    mouseover:function(){
                        if(ele.children('.dropdown-menu').css('display') == 'none'){
                            ele.siblings('li').children('.dropdown-menu').slideUp(300);
                            ele.children('.dropdown-menu').slideDown(300);
                        }
                    },
                    mouseleave:function(){
                        ele.children('.dropdown-menu').slideUp(300);
                    }
                });
            } else {
                ele.unbind('mouseover mouseout');
                ele.bind('click',function(){
                    if(ele.children('.dropdown-menu').css('display') == 'none'){
                        ele.siblings('li').children('.dropdown-menu').slideUp();
                        ele.children('.dropdown-menu').slideDown();
                    } else {
                        ele.children('.dropdown-menu').slideUp();
                    }
                });
            }
        }
        $('#navList > li').each(function(){
            var	that = $(this);
            navdropdown(that);
        });
        window.addEventListener(resizeEvt, function(){
            $('#navList > li').each(function(){
                var	that = $(this);
                navdropdown(that);
            });
        }, false);
    }(jQuery,window,document));

    (function($,window,undefiend){
        "use strict"
        $('#common_menu').each(function(){
            var that = $(this),
                productClass = $('.list-sub-menu');
            that.find('.dorp-menu').each(function(){
                $(this).attr('href',"javascript:;");
                $(this).append('<span class="iconfont">&#xe75b;<span>')
            });
            that.children('li').each(function(){
                if($(this).hasClass('curr')){
                    $(this).find('.list-sub-menu').show();
                }
                $(this).on('click',function(){
                    if(event.target !== this){
                        if($(this).hasClass('curr')){
                            $(this).removeClass('curr');
                            $(this).children('.list-sub-menu').slideUp(300);
                        } else {
                            $(this).addClass('curr');
                            $(this).children('.list-sub-menu').slideDown(300);
                            $(this).siblings('li').removeClass('curr');
                            $(this).siblings('li').children('.list-sub-menu').slideUp(300);
                        }
                    }
                });
            });
        });
    }(jQuery,window,document));
    ;(function(){
        "use strict"
        $('.common-alter-box').each(function(){
            var alterBtn = $(this).find('.alter-btn'),
                colseBtn = $(this).find('.close-btn'),
                alterMask = $(this).find('.common-alter-mask'),
                alterVideo = $(this).find('video').get(0);
            alterBtn.click(function(){
                alterMask.fadeIn(200);
                if(alterVideo){
                    alterVideo.play();
                }
            });
            colseBtn.click(function(){
                alterMask.fadeOut(200);
                if(alterVideo){
                    alterVideo.pause();
                }
            });
            alterMask.click(function(){
                if(event.target === this){
                    alterMask.fadeOut(200);
                    if(alterVideo){
                        alterVideo.pause();
                    }
                }
            });
        });
    }());

    ;(function(){
        "use strict"
        $('.common-alter-box').each(function(){
            var alterBtn = $(this).find('.alter-btn');
            var	colseBtn = $('.common-alter-mask .close-btn'),
                alterMask = $(this).find('.common-alter-mask').length === 0 ? $('#altetMask') : $(this).find('.common-alter-mask');
            alterBtn.click(function(){
                alterMask.fadeIn(200);
            });
            colseBtn.click(function(){
                alterMask.fadeOut(200);
            });
            alterMask.click(function(){
                if(event.target === this){
                    alterMask.fadeOut(200);
                }
            });
        });
    }());
    ;(function(){
        "use strict"
        $('#scroll_up').click(function(){
            $('body,html').animate({
                scrollTop : 0
            },500);
        });
    }());
    ;(function($,window,undefiend) {
        "use strict";
        $('.tab-click').each(function(){
            tab($(this),'click');
        });
        $('.tab-hover').each(function(){
            tab($(this),'mouseover');
        });
        function tab(parent,fun) {
            if(parent.length != 0) {
                var tabContent = parent.find('.tab-content');
                var tabMenu = parent.find('.tab-menu').find('li');
                tabMenu.eq(0).addClass('curr');
                tabMenu.on(fun, function() {
                    var that = $(this);
                    var index = that.index();
                    that.siblings('li').removeClass('curr');
                    that.addClass('curr');
                    tabContent.eq(index).show();
                    tabContent.eq(index).siblings('.tab-content').hide();
                });
            }
        }
    }(jQuery,window,document));
    ;(function(){
        "use strict"
        $('.my-form').each(function(){
            var that = $(this),
                id = $(this).attr('id');
            var validate = $("#" + id).validate({
                rules:{
                    "info[name]":{
                        required:true
                    },
                    "info[tel]":{
                        required:true,
                        isMobile:true
                    }
                },
                messages:{
                    "info[name]": {
                        required:"鍚嶅瓧涓嶈兘涓虹┖锛�"
                    },
                    "info[tel]":{
                        required:"鎵嬫満鍙风爜涓嶈兘涓虹┖!",
                        isMobile:"璇疯緭鍏ユ纭墜鏈哄彿鐮�!"
                    }
                }
            });
        });
    }());
});;
