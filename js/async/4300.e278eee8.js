"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4300],{81294:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(73114),r={class:"mdc-text-field-character-counter"};var a={name:"MdcTextfieldCounter",render:function(t,e,n,a,o,l){return(0,i.openBlock)(),(0,i.createElementBlock)("div",r)}},o=a},41315:function(t,e,n){n.d(e,{Z:function(){return Y}});var i=n(19623),r=n(78580),a=n.n(r),o=n(70655),l=n(48315),s=n(75857),u=n(51624),d=n(68602),c=n(15398),p=n(91786),h=n(43800),f=n(74507),g=n(85099),y={ROOT:"mdc-text-field-character-counter"},I={ROOT_SELECTOR:"."+y.ROOT},b=function(t){function e(n){return t.call(this,(0,o.pi)((0,o.pi)({},e.defaultAdapter),n))||this}return(0,o.ZT)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter.setContent(t+" / "+e)},e}(g.K),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new b({setContent:function(e){t.root.textContent=e}})},e}(l.B),E={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},T={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},x={LABEL_SCALE:.75},C=["pattern","min","max","required","step","minlength","maxlength"],v=["color","date","datetime-local","month","range","time","week"],L=["mousedown","touchstart"],O=["click","keydown"],A=function(t){function e(n,i){void 0===i&&(i={});var r=t.call(this,(0,o.pi)((0,o.pi)({},e.defaultAdapter),n))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=i.helperText,r.characterCounter=i.characterCounter,r.leadingIcon=i.leadingIcon,r.trailingIcon=i.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(t){r.setTransformOrigin(t)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(t){r.handleValidationAttributeChange(t)},r}return(0,o.ZT)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return T},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return v.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e,n,i;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var r=(0,o.XA)(L),a=r.next();!a.done;a=r.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}try{for(var s=(0,o.XA)(O),u=s.next();!u.done;u=s.next()){l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,e,n,i;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var r=(0,o.XA)(L),a=r.next();!a.done;a=r.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}try{for(var s=(0,o.XA)(O),u=s.next();!u.done;u=s.next()){l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return C.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*x.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),r=n.clientX-i.left;this.adapter.setLineRippleTransformOrigin(r)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var i=this.helperText.isVisible(),r=this.helperText.getId();i&&r?this.adapter.setInputAttr(E.ARIA_DESCRIBEDBY,r):this.adapter.removeInputAttr(E.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(g.K),N={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},_={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+N.ROOT},F=function(t){function e(n){return t.call(this,(0,o.pi)((0,o.pi)({},e.defaultAdapter),n))||this}return(0,o.ZT)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(_.ARIA_HIDDEN)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(N.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(N.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(N.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(N.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(N.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(N.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(_.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter.hasClass(N.HELPER_TEXT_PERSISTENT),n=this.adapter.hasClass(N.HELPER_TEXT_VALIDATION_MSG)&&!t;n?(this.showToScreenReader(),"alert"===this.adapter.getAttr(_.ROLE)?this.refreshAlertRole():this.adapter.setAttr(_.ROLE,"alert")):this.adapter.removeAttr(_.ROLE),e||n||this.hide()},e.prototype.hide=function(){this.adapter.setAttr(_.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(_.ROLE),requestAnimationFrame((function(){t.adapter.setAttr(_.ROLE,"alert")}))},e}(g.K),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new F({addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},getAttr:function(e){return t.root.getAttribute(e)},setAttr:function(e,n){return t.root.setAttribute(e,n)},removeAttr:function(e){return t.root.removeAttribute(e)},setContent:function(e){t.root.textContent=e}})},e}(l.B),V={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},S={ROOT:"mdc-text-field__icon"},P=["click","keydown"],B=function(t){function e(n){var i=t.call(this,(0,o.pi)((0,o.pi)({},e.defaultAdapter),n))||this;return i.savedTabIndex=null,i.interactionHandler=function(t){i.handleInteraction(t)},i}return(0,o.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=(0,o.XA)(P),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.registerInteractionHandler(r,this.interactionHandler)}}catch(a){t={error:a}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,e;try{for(var n=(0,o.XA)(P),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.deregisterInteractionHandler(r,this.interactionHandler)}}catch(a){t={error:a}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",V.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(g.K),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new B({getAttr:function(e){return t.root.getAttribute(e)},setAttr:function(e,n){return t.root.setAttribute(e,n)},removeAttr:function(e){return t.root.removeAttribute(e)},setContent:function(e){t.root.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(B.strings.ICON_EVENT,{},!0)}})},e}(l.B),H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,i,r,a,o){void 0===t&&(t=function(t,e){return new h.F(t,e)}),void 0===e&&(e=function(t){return new c.k(t)}),void 0===n&&(n=function(t){return new R(t)}),void 0===i&&(i=function(t){return new m(t)}),void 0===r&&(r=function(t){return new w(t)}),void 0===a&&(a=function(t){return new d.g(t)}),void 0===o&&(o=function(t){return new p.A(t)}),this.input=this.root.querySelector(E.INPUT_SELECTOR);var l=this.root.querySelector(E.LABEL_SELECTOR);this.label=l?a(l):null;var s=this.root.querySelector(E.LINE_RIPPLE_SELECTOR);this.lineRipple=s?e(s):null;var u=this.root.querySelector(E.OUTLINE_SELECTOR);this.outline=u?o(u):null;var f=F.strings,g=this.root.nextElementSibling,y=g&&g.classList.contains(T.HELPER_LINE),I=y&&g&&g.querySelector(f.ROOT_SELECTOR);this.helperText=I?n(I):null;var x=b.strings,C=this.root.querySelector(x.ROOT_SELECTOR);!C&&y&&g&&(C=g.querySelector(x.ROOT_SELECTOR)),this.characterCounter=C?i(C):null;var v=this.root.querySelector(E.LEADING_ICON_SELECTOR);this.leadingIcon=v?r(v):null;var L=this.root.querySelector(E.TRAILING_ICON_SELECTOR);this.trailingIcon=L?r(L):null,this.prefix=this.root.querySelector(E.PREFIX_SELECTOR),this.suffix=this.root.querySelector(E.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),t.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=(0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new A(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},registerTextFieldInteractionHandler:function(e,n){t.listen(e,n)},deregisterTextFieldInteractionHandler:function(e,n){t.unlisten(e,n)},registerValidationAttributeChangeHandler:function(e){var n=new MutationObserver((function(t){return e(function(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))}(t))}));return n.observe(t.input,{attributes:!0}),n},deregisterValidationAttributeChangeHandler:function(t){t.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(e,n){t.input.setAttribute(e,n)},removeInputAttr:function(e){t.input.removeAttribute(e)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(e,n){t.input.addEventListener(e,n,(0,s.K)())},deregisterInputInteractionHandler:function(e,n){t.input.removeEventListener(e,n,(0,s.K)())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(e){t.label&&t.label.float(e)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return Boolean(t.label)},shakeLabel:function(e){t.label&&t.label.shake(e)},setLabelRequired:function(e){t.label&&t.label.setRequired(e)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(e){t.lineRipple&&t.lineRipple.setRippleCenter(e)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return Boolean(t.outline)},notchOutline:function(e){t.outline&&t.outline.notch(e)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var e=this,n=this.root.classList.contains(T.TEXTAREA),i=this.root.classList.contains(T.OUTLINED);if(n||i)return null;var r=(0,o.pi)((0,o.pi)({},h.F.createAdapter(this)),{isSurfaceActive:function(){return u.wB(e.input,":active")},registerInteractionHandler:function(t,n){e.input.addEventListener(t,n,(0,s.K)())},deregisterInteractionHandler:function(t,n){e.input.removeEventListener(t,n,(0,s.K)())}});return t(this.root,new f.l(r))},e}(l.B),D=n(92513),k=n(4563),U=n(62071),j=n(81294),$=n(83757),X=n(56865),K=n(36671),M=n(37704),q=n(53839),Z=n(15746),G={TYPES:{filled:0,outlined:1},EVENT:{CLICK:"click",FOCUS:"focus",KEYDOWN:"keydown",INPUT:"update:modelValue",KEYUP:"keyup",CHANGE:"change",ENTER:"enter",BLUR:"blur"},PLUS_COMPONENTS:["UiAutocomplete","UiDatepicker"]},Y={name:"UiTextfield",components:{MdcFloatingLabel:D.Z,MdcLineRipple:k.Z,MdcNotchedOutline:U.Z,MdcTextfieldCounter:j.Z},mixins:[$.Z,X.Z,K.Z,M.Z,q.rf],props:{type:{type:[String,Number],default:0},outlined:{type:Boolean,default:!1},modelValue:{type:[String,Number,Array],default:""},minlength:{type:[String,Number,null],default:null},maxlength:{type:[String,Number,null],default:null},inputType:{type:String,default:"text"},pattern:{type:[String,null],default:null},min:{type:[String,Number,null],default:null},max:{type:[String,Number,null],default:null},step:{type:[String,Number,null],default:null},rows:{type:[Number,String],default:1},cols:{type:[Number,String],default:20},prefixText:{type:String,default:""},suffixText:{type:String,default:""},withCounter:{type:Boolean,default:!1},plus:{type:Boolean,default:!1}},emits:[G.EVENT.CLICK,G.EVENT.FOCUS,G.EVENT.KEYDOWN,G.EVENT.INPUT,G.EVENT.KEYUP,G.EVENT.CHANGE,G.EVENT.ENTER,G.EVENT.BLUR],data:function(){return{UI_TEXTFIELD:G,UI_TEXTFIELD_ICON:Z.F,$textField:null,inputValue:this.modelValue}},computed:{isOutlined:function(){return this.checkType(G.TYPES,"outlined")},isTextarea:function(){return"textarea"===this.inputType},hasLeadingIcon:function(){return!!(this.materialIcon||this.withLeadingIcon||this.hasBeforeSlot())},hasTrailingIcon:function(){return!(!this.withTrailingIcon&&!this.hasAfterSlot())},noLabel:function(){var t=this.label||this.$slots.default;return!(!this.placeholder&&t)},className:function(){return{outer:{"mdc-text-field":!0,"mdc-text-field--filled":!this.isOutlined,"mdc-text-field--outlined":this.isOutlined,"mdc-text-field--fullwidth":this.fullwidth,"mdc-text-field--textarea":this.isTextarea,"mdc-text-field--disabled":this.disabled,"mdc-text-field--with-leading-icon":this.hasLeadingIcon,"mdc-text-field--with-trailing-icon":this.hasTrailingIcon,"mdc-text-field--no-label":this.noLabel,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":this.withCounter},input:"mdc-text-field__input"}}},watch:{modelValue:function(t,e){var n=this;if(this.inputValue=t,this.$textField&&(!e&&t&&(this.$textField.value=t),e&&!t)){try{this.maxlength&&this.$textField.characterCounter_.foundation.setCounterValue(0,this.maxlength)}catch(i){}setTimeout((function(){n.$textField.foundation.deactivateFocus()}),1)}},disabled:function(t){this.$textField&&(this.$textField.disabled=t)}},mounted:function(){this.$textField=new H(this.el),this.helperTextId&&q.CQ.set("".concat(this.helperTextId,"-previous"),this.$textField)},methods:{hasBeforeSlot:function(){var t;return this.$parent&&"object"===(0,i.Z)(this.$parent.$.type)&&a()(t=G.PLUS_COMPONENTS).call(t,this.$parent.$.type.name)?this.$parent.hasLeadingIcon:this.$slots.before},hasAfterSlot:function(){var t;return this.$parent&&"object"===(0,i.Z)(this.$parent.$.type)&&a()(t=G.PLUS_COMPONENTS).call(t,this.$parent.$.type.name)?this.$parent.hasTrailingIcon:this.$slots.after},handleFocus:function(t){this.$emit(G.EVENT.FOCUS,t)},handleKeydown:function(t){this.$emit(G.EVENT.KEYDOWN,t)},handleInput:function(t){this.$emit(G.EVENT.INPUT,t.target.value)},handleKeyup:function(t){this.$emit(G.EVENT.KEYUP,t)},handleChange:function(t){this.$emit(G.EVENT.CHANGE,t)},handleEnter:function(t){this.$emit(G.EVENT.ENTER,t.target.value)},handleBlur:function(t){if(q.CQ.get("".concat(this.helperTextId,"-next"))){var e=q.CQ.get("".concat(this.helperTextId,"-next"));!0!==e.validMsg&&e.$emit(q.Bp.EVENT.CHANGE,!1)}this.$emit(G.EVENT.BLUR,t)}}}},22586:function(t,e,n){n.d(e,{s:function(){return f}});var i=n(77766),r=n.n(i),a=n(73114),o={key:0,class:"mdc-text-field__ripple"},l=["textContent"],s={key:1,class:"mdc-text-field__resizer"},u=["id","placeholder","disabled","required","minlength","maxlength","rows","cols","aria-controls","aria-describedby"],d=["textContent"],c=["id","type","placeholder","disabled","required","pattern","minlength","maxlength","min","max","step","aria-controls","aria-describedby"],p=["textContent"],h={key:6,class:"mdc-text-field__plus"};function f(t,e,n,i,f,g){var y,I,b=(0,a.resolveComponent)("mdc-textfield-counter"),m=(0,a.resolveComponent)("mdc-floating-label"),E=(0,a.resolveComponent)("mdc-notched-outline"),T=(0,a.resolveComponent)("mdc-line-ripple");return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:(0,a.normalizeClass)(g.className.outer),onClick:e[16]||(e[16]=function(e){return t.$emit(f.UI_TEXTFIELD.EVENT.CLICK,e)})},[g.isOutlined?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("div",o)),(0,a.renderSlot)(t.$slots,"before",{iconClass:r()(y="".concat(f.UI_TEXTFIELD_ICON.cssClasses.icon," ")).call(y,f.UI_TEXTFIELD_ICON.cssClasses.leadingIcon)},(function(){return[t.materialIcon?((0,a.openBlock)(),(0,a.createElementBlock)("i",{key:0,class:(0,a.normalizeClass)(t.getIconClassName([f.UI_TEXTFIELD_ICON.cssClasses.icon,f.UI_TEXTFIELD_ICON.cssClasses.leadingIcon])),textContent:(0,a.toDisplayString)(t.materialIcon)},null,10,l)):(0,a.createCommentVNode)("",!0)]})),g.isTextarea?((0,a.openBlock)(),(0,a.createElementBlock)("span",s,[(0,a.withDirectives)((0,a.createElementVNode)("textarea",(0,a.mergeProps)({id:t.inputId,"onUpdate:modelValue":e[0]||(e[0]=function(t){return f.inputValue=t}),class:g.className.input,placeholder:t.placeholder,disabled:t.disabled,required:t.required,minlength:n.minlength,maxlength:n.maxlength,rows:n.rows,cols:n.cols,"aria-controls":t.helperTextId,"aria-describedby":t.helperTextId},t.attrs,{onFocus:e[1]||(e[1]=function(){return g.handleFocus&&g.handleFocus.apply(g,arguments)}),onKeydown:e[2]||(e[2]=function(){return g.handleKeydown&&g.handleKeydown.apply(g,arguments)}),onInput:e[3]||(e[3]=function(){return g.handleInput&&g.handleInput.apply(g,arguments)}),onKeyup:[e[4]||(e[4]=function(){return g.handleKeyup&&g.handleKeyup.apply(g,arguments)}),e[6]||(e[6]=(0,a.withKeys)((function(){return g.handleEnter&&g.handleEnter.apply(g,arguments)}),["enter"]))],onChange:e[5]||(e[5]=function(){return g.handleChange&&g.handleChange.apply(g,arguments)}),onBlur:e[7]||(e[7]=function(){return g.handleBlur&&g.handleBlur.apply(g,arguments)})}),null,16,u),[[a.vModelText,f.inputValue]]),n.withCounter?((0,a.openBlock)(),(0,a.createBlock)(b,{key:0})):(0,a.createCommentVNode)("",!0)])):((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:2},[n.prefixText?((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:0,class:"mdc-text-field__affix mdc-text-field__affix--prefix",textContent:(0,a.toDisplayString)(n.prefixText)},null,8,d)):(0,a.createCommentVNode)("",!0),(0,a.withDirectives)((0,a.createElementVNode)("input",(0,a.mergeProps)({id:t.inputId,"onUpdate:modelValue":e[8]||(e[8]=function(t){return f.inputValue=t}),type:n.inputType,class:g.className.input,placeholder:t.placeholder,disabled:t.disabled,required:t.required,pattern:n.pattern,minlength:n.minlength,maxlength:n.maxlength,min:n.min,max:n.max,step:n.step,"aria-controls":t.helperTextId,"aria-describedby":t.helperTextId},t.attrs,{onFocus:e[9]||(e[9]=function(){return g.handleFocus&&g.handleFocus.apply(g,arguments)}),onKeydown:e[10]||(e[10]=function(){return g.handleKeydown&&g.handleKeydown.apply(g,arguments)}),onInput:e[11]||(e[11]=function(){return g.handleInput&&g.handleInput.apply(g,arguments)}),onKeyup:[e[12]||(e[12]=function(){return g.handleKeyup&&g.handleKeyup.apply(g,arguments)}),e[14]||(e[14]=(0,a.withKeys)((function(){return g.handleEnter&&g.handleEnter.apply(g,arguments)}),["enter"]))],onChange:e[13]||(e[13]=function(){return g.handleChange&&g.handleChange.apply(g,arguments)}),onBlur:e[15]||(e[15]=function(){return g.handleBlur&&g.handleBlur.apply(g,arguments)})}),null,16,c),[[a.vModelDynamic,f.inputValue]]),n.suffixText?((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:1,class:"mdc-text-field__affix mdc-text-field__affix--suffix",textContent:(0,a.toDisplayString)(n.suffixText)},null,8,p)):(0,a.createCommentVNode)("",!0),n.withCounter?((0,a.openBlock)(),(0,a.createBlock)(b,{key:2})):(0,a.createCommentVNode)("",!0)],64)),(0,a.renderSlot)(t.$slots,"after",{iconClass:r()(I="".concat(f.UI_TEXTFIELD_ICON.cssClasses.icon," ")).call(I,f.UI_TEXTFIELD_ICON.cssClasses.trailingIcon)}),g.noLabel||g.isOutlined?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)(m,{key:3,for:t.inputId},{default:(0,a.withCtx)((function(){return[(0,a.renderSlot)(t.$slots,"default",{},(function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(t.label),1)]}))]})),_:3},8,["for"])),g.isOutlined?((0,a.openBlock)(),(0,a.createBlock)(E,{key:4,"has-label":!g.noLabel},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(m,{for:t.inputId},{default:(0,a.withCtx)((function(){return[(0,a.renderSlot)(t.$slots,"default",{},(function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(t.label),1)]}))]})),_:3},8,["for"])]})),_:3},8,["has-label"])):((0,a.openBlock)(),(0,a.createBlock)(T,{key:5})),n.plus?((0,a.openBlock)(),(0,a.createElementBlock)("div",h,[(0,a.renderSlot)(t.$slots,"plus")])):(0,a.createCommentVNode)("",!0)],2)}},15746:function(t,e,n){n.d(e,{F:function(){return i}});var i={cssClasses:{icon:"mdc-text-field__icon",leadingIcon:"mdc-text-field__icon--leading",trailingIcon:"mdc-text-field__icon--trailing"},EVENT:{CLICK:"click"}}},37704:function(t,e){e.Z={props:{inputId:{type:[String,null],default:null},attrs:{type:Object,default:function(){return{}}}}}},56865:function(t,e,n){var i=n(18788);e.Z={mixins:[i.Z],props:{label:{type:String,default:""},placeholder:{type:[String,null],default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},fullwidth:{type:Boolean,default:!1},endAligned:{type:Boolean,default:!1},withLeadingIcon:{type:Boolean,default:!1},withTrailingIcon:{type:Boolean,default:!1}}}}}]);