"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4913],{13818:function(t,e,i){i.d(e,{Z:function(){return T}});var n=i(70655),s=i(48315),r=i(82947),o=i(97790),a=i(85099),c={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},u={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},l=function(t){function e(i){var s=t.call(this,(0,n.pi)((0,n.pi)({},e.defaultAdapter),i))||this;return s.animationFrame=0,s.animationTimer=0,s}return(0,n.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(c.OPEN),this.adapter.addClass(c.ANIMATE),this.runNextAnimationFrame((function(){t.adapter.addClass(c.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(c.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(c.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(c.OPENING)||this.adapter.hasClass(c.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(c.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=c.OPENING,i=c.CLOSING,n=c.OPEN,s=c.ANIMATE,r=c.ROOT;this.isElement(t.target)&&this.adapter.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter.removeClass(n),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(e),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(a.K),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ZT)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(l);var h=l.cssClasses,m=l.strings,p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new r.i(t)}),void 0===e&&(e=function(t){return new o.e(t)});var i=this.root.querySelector(m.LIST_SELECTOR);i&&(this.innerList=e(i),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t,e=this,i=h.MODAL,n=m.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(n),this.scrim&&this.root.classList.contains(i)&&(this.handleScrimClick=function(){return e.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=(t=this.root,(0,this.focusTrapFactory)(t,{skipInitialFocus:!0}))),this.handleKeydown=function(t){e.foundation.handleKeydown(t)},this.handleTransitionEnd=function(t){e.foundation.handleTransitionEnd(t)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=h.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var e=t.previousFocus;e&&e.focus&&t.root.contains(document.activeElement)&&e.focus()},focusActiveNavigationItem:function(){var e=t.root.querySelector(m.LIST_ITEM_ACTIVATED_SELECTOR);e&&e.focus()},notifyClose:function(){t.emit(m.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(m.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},i=h.DISMISSIBLE,n=h.MODAL;if(this.root.classList.contains(i))return new l(e);if(this.root.classList.contains(n))return new d(e);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+i+" and "+n+".")},e}(s.B),f=i(83757),E=i(36671),C={permanent:0,dismissible:1,modal:2},y={root:"mdc-drawer-root",scrim:"mdc-drawer-scrim"},v={NAV:"nav",CHANGE:"update:modelValue"},T={name:"UiDrawer",mixins:[f.Z,E.Z],props:{navId:{type:[String,null],default:null},modelValue:{type:Boolean,default:!1},type:{type:[String,Number],default:0},viewportHeight:{type:Boolean,default:!1}},emits:[v.NAV,v.CHANGE],data:function(){return{$drawer:null,scrimEl:null}},computed:{isPermanent:function(){return this.checkType(C,"permanent")},isDismissible:function(){return this.checkType(C,"dismissible")},isModal:function(){return this.checkType(C,"modal")},className:function(){return{"mdc-drawer":!0,"mdc-drawer--dismissible":this.isDismissible,"mdc-drawer--modal":this.isModal}}},watch:{modelValue:function(t){this.$drawer&&(this.$drawer.open=t)},type:function(){var t=this;this.$nextTick((function(){t.isModal&&(t.createScrim(),t.$drawer||t.init())}))}},mounted:function(){this.viewportHeight&&this.el.parentNode.classList.add(y.root),(this.isDismissible||this.isModal)&&(this.createScrim(),this.init())},methods:{createScrim:function(){this.isModal&&!this.scrimEl&&(this.scrimEl=document.createElement("div"),this.scrimEl.className=y.scrim,this.scrimEl.addEventListener("click",this.handleClose),this.el.parentNode.insertBefore(this.scrimEl,this.el.nextSibling))},checkNav:function(){var t=!0;return this.$drawer.list&&this.$drawer.list.listElements.length||(t=!1,console.warn("[UiDrawer]","<ui-nav> or <ui-list> is required for <ui-drawer-content> in the drawer")),t},init:function(){var t=this;this.$drawer=new p(this.el),this.$drawer.listen(u.OPEN_EVENT,(function(){t.$emit(v.NAV,!0)})),this.$drawer.listen(u.CLOSE_EVENT,this.handleClose),this.navId&&document.getElementById(this.navId)&&(this.checkNav(),document.getElementById(this.navId).addEventListener("click",(function(){t.checkNav()&&(t.$drawer.open=!t.$drawer.open)})),this.$drawer.open=this.modelValue)},handleClose:function(){this.$emit(v.NAV,!1),this.$emit(v.CHANGE,!1)}}}},85487:function(t,e,i){i.d(e,{s:function(){return s}});var n=i(73114);function s(t,e,i,s,r,o){return(0,n.openBlock)(),(0,n.createElementBlock)("aside",{class:(0,n.normalizeClass)(o.className)},[(0,n.renderSlot)(t.$slots,"default")],2)}}}]);