"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[7790],{1721:function(e,t,n){n.d(t,{Fn:function(){return i},ku:function(){return C},tI:function(){return _}});var i={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},s=new Set;s.add(i.BACKSPACE),s.add(i.ENTER),s.add(i.SPACEBAR),s.add(i.PAGE_UP),s.add(i.PAGE_DOWN),s.add(i.END),s.add(i.HOME),s.add(i.ARROW_LEFT),s.add(i.ARROW_UP),s.add(i.ARROW_RIGHT),s.add(i.ARROW_DOWN),s.add(i.DELETE),s.add(i.ESCAPE),s.add(i.TAB);var r=8,o=13,a=32,d=33,u=34,c=35,I=36,l=37,h=38,E=39,f=40,A=46,S=27,p=9,x=new Map;x.set(r,i.BACKSPACE),x.set(o,i.ENTER),x.set(a,i.SPACEBAR),x.set(d,i.PAGE_UP),x.set(u,i.PAGE_DOWN),x.set(c,i.END),x.set(I,i.HOME),x.set(l,i.ARROW_LEFT),x.set(h,i.ARROW_UP),x.set(E,i.ARROW_RIGHT),x.set(f,i.ARROW_DOWN),x.set(A,i.DELETE),x.set(S,i.ESCAPE),x.set(p,i.TAB);var T=new Set;function C(e){var t=e.key;if(s.has(t))return t;var n=x.get(e.keyCode);return n||i.UNKNOWN}function _(e){return T.has(C(e))}T.add(i.PAGE_UP),T.add(i.PAGE_DOWN),T.add(i.END),T.add(i.HOME),T.add(i.ARROW_LEFT),T.add(i.ARROW_UP),T.add(i.ARROW_RIGHT),T.add(i.ARROW_DOWN)},97790:function(e,t,n){n.d(t,{e:function(){return d}});var i=n(70655),s=n(48315),r=n(51624),o=n(98473),a=n(62184),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,i.ZT)(t,e),Object.defineProperty(t.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[o.UX.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),t.attachTo=function(e){return new t(e)},t.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=o._f in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=o.Vg:(0,r.wB)(this.root,o.j2.DEPRECATED_SELECTOR)?this.classNameMap=o.rD:this.classNameMap=Object.values(o.UX).reduce((function(e,t){return e[t]=t,e}),{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},t.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},t.prototype.layout=function(){var e=this.root.getAttribute(o.j2.ARIA_ORIENTATION);this.vertical=e!==o.j2.ARIA_ORIENTATION_HORIZONTAL;var t="."+this.classNameMap[o.UX.LIST_ITEM_CLASS]+":not([tabindex])",n=o.j2.FOCUSABLE_CHILD_ELEMENTS,i=this.root.querySelectorAll(t);i.length&&Array.prototype.forEach.call(i,(function(e){e.setAttribute("tabindex","-1")}));var s=this.root.querySelectorAll(n);s.length&&Array.prototype.forEach.call(s,(function(e){e.setAttribute("tabindex","-1")})),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},t.prototype.getPrimaryText=function(e){var t,n=e.querySelector("."+this.classNameMap[o.UX.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return null!==(t=null===n||void 0===n?void 0:n.textContent)&&void 0!==t?t:"";var i=e.querySelector("."+this.classNameMap[o.UX.LIST_ITEM_TEXT_CLASS]);return i&&i.textContent||""},t.prototype.initializeListType=function(){var e=this;if(this.isInteractive=(0,r.wB)(this.root,o.j2.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(o.j2.SELECTED_ITEM_SELECTOR),(function(t){return e.listElements.indexOf(t)}));(0,r.wB)(this.root,o.j2.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0])}else{var n=this.root.querySelectorAll(o.j2.ARIA_ROLE_CHECKBOX_SELECTOR),i=this.root.querySelector(o.j2.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var s=this.root.querySelectorAll(o.j2.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,(function(t){return e.listElements.indexOf(t)}))}else i&&(this.selectedIndex=this.listElements.indexOf(i))}},t.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},t.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},t.prototype.getDefaultFoundation=function(){var e=this,t={addClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.add(e.classNameMap[n])},focusItemAtIndex:function(t){var n=e.listElements[t];n&&n.focus()},getAttributeForElementIndex:function(t,n){return e.listElements[t].getAttribute(n)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(t){return e.getPrimaryText(e.listElements[t])},hasCheckboxAtIndex:function(t){return!!e.listElements[t].querySelector(o.j2.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){return!!e.listElements[t].querySelector(o.j2.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){return e.listElements[t].querySelector(o.j2.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(t,n){return e.listElements[t].classList.contains(e.classNameMap[n])},notifyAction:function(t){e.emit(o.j2.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.remove(e.classNameMap[n])},setAttributeForElementIndex:function(t,n,i){var s=e.listElements[t];s&&s.setAttribute(n,i)},setCheckedCheckboxOrRadioAtIndex:function(t,n){var i=e.listElements[t].querySelector(o.j2.CHECKBOX_RADIO_SELECTOR);i.checked=n;var s=document.createEvent("Event");s.initEvent("change",!0,!0),i.dispatchEvent(s)},setTabIndexForListItemChildren:function(t,n){var i=e.listElements[t],s=o.j2.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(i.querySelectorAll(s),(function(e){e.setAttribute("tabindex",n)}))}};return new a.I(t)},t.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[o.UX.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();-1!==e&&(this.listElements[e].tabIndex=0)}},t.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"===typeof this.selectedIndex&&this.selectedIndex!==o.KT.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[o.UX.LIST_ITEM_CLASS]+":not(."+this.classNameMap[o.UX.LIST_ITEM_DISABLED_CLASS]+")");return null===e?-1:this.getListItemIndex(e)},t.prototype.getListItemIndex=function(e){var t=(0,r.oq)(e,"."+this.classNameMap[o.UX.LIST_ITEM_CLASS]+", ."+this.classNameMap[o.UX.ROOT]);return t&&(0,r.wB)(t,"."+this.classNameMap[o.UX.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},t.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},t.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},t.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target;this.foundation.handleKeydown(e,n.classList.contains(this.classNameMap[o.UX.LIST_ITEM_CLASS]),t)},t.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target,i=!(0,r.wB)(n,o.j2.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,i)},t}(s.B)},98473:function(e,t,n){var i,s;n.d(t,{j2:function(){return d},UX:function(){return r},KT:function(){return u},rD:function(){return a},_f:function(){return c},Vg:function(){return o}});var r={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},o=((i={})[""+r.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",i[""+r.LIST_ITEM_CLASS]="mdc-list-item",i[""+r.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",i[""+r.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",i[""+r.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",i[""+r.ROOT]="mdc-list",i),a=((s={})[""+r.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",s[""+r.LIST_ITEM_CLASS]="mdc-deprecated-list-item",s[""+r.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",s[""+r.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",s[""+r.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",s[""+r.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",s[""+r.ROOT]="mdc-deprecated-list",s),d={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+r.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+r.LIST_ITEM_CLASS+" a,\n    ."+a[r.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[r.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+r.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+r.LIST_ITEM_CLASS+" a,\n    ."+r.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+r.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+a[r.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[r.LIST_ITEM_CLASS]+" a,\n    ."+a[r.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+a[r.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},u={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},c="evolution"},62184:function(e,t,n){n.d(t,{I:function(){return h}});var i=n(70655),s=n(85099),r=n(1721),o=n(98473),a=["input","button","textarea","select"],d=function(e){var t=e.target;if(t){var n=(""+t.tagName).toLowerCase();-1===a.indexOf(n)&&e.preventDefault()}};function u(e,t){var n,i=e.nextChar,s=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,a=e.focusedItemIndex,d=e.skipFocus,u=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout((function(){I(t)}),o.KT.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+i,-1===(n=1===t.typeaheadBuffer.length?function(e,t,n,i){var s=i.typeaheadBuffer[0],r=e.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===t){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a,d=-1;for(a=0;a<r.length;a++)if(!n(r[a].index)){d=a;break}for(;a<r.length;a++)if(r[a].index>t&&!n(r[a].index)){d=a;break}if(-1!==d)return i.sortedIndexCursor=d,r[i.sortedIndexCursor].index;return-1}(r,a,u,t):function(e,t,n){var i=n.typeaheadBuffer[0],s=e.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(0===r.text.lastIndexOf(n.typeaheadBuffer,0)&&!t(r.index))return r.index;var o=(n.sortedIndexCursor+1)%s.length,a=-1;for(;o!==n.sortedIndexCursor;){var d=s[o],u=0===d.text.lastIndexOf(n.typeaheadBuffer,0),c=!t(d.index);if(u&&c){a=o;break}o=(o+1)%s.length}if(-1!==a)return n.sortedIndexCursor=a,s[n.sortedIndexCursor].index;return-1}(r,u,t))||d||s(n),n}function c(e){return e.typeaheadBuffer.length>0}function I(e){e.typeaheadBuffer=""}function l(e,t){var n=e.event,i=e.isTargetListItem,s=e.focusedItemIndex,o=e.focusItemAtIndex,a=e.sortedIndexByFirstChar,I=e.isItemAtIndexDisabled,l="ArrowLeft"===(0,r.ku)(n),h="ArrowUp"===(0,r.ku)(n),E="ArrowRight"===(0,r.ku)(n),f="ArrowDown"===(0,r.ku)(n),A="Home"===(0,r.ku)(n),S="End"===(0,r.ku)(n),p="Enter"===(0,r.ku)(n),x="Spacebar"===(0,r.ku)(n);return n.ctrlKey||n.metaKey||l||h||E||f||A||S||p?-1:x||1!==n.key.length?x?(i&&d(n),i&&c(t)?u({focusItemAtIndex:o,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:I},t):-1):-1:(d(n),u({focusItemAtIndex:o,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:I},t))}var h=function(e){function t(n){var s=e.call(this,(0,i.pi)((0,i.pi)({},t.defaultAdapter),n))||this;return s.wrapFocus=!1,s.isVertical=!0,s.isSingleSelectionList=!1,s.selectedIndex=o.KT.UNSET_INDEX,s.focusedItemIndex=o.KT.UNSET_INDEX,s.useActivatedClass=!1,s.useSelectedAttr=!1,s.ariaCurrentAttrValue=null,s.isCheckboxList=!1,s.isRadioList=!1,s.hasTypeahead=!1,s.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},s.sortedIndexByFirstChar=new Map,s}return(0,i.ZT)(t,e),Object.defineProperty(t,"strings",{get:function(){return o.j2},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return o.UX},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return o.KT},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),t.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},t.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},t.prototype.setWrapFocus=function(e){this.wrapFocus=e},t.prototype.setVerticalOrientation=function(e){this.isVertical=e},t.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},t.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();e!==o.KT.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,o.UX.LIST_ITEM_ACTIVATED_CLASS)&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e)},t.prototype.getSelectedIndexFromDOM=function(){for(var e=o.KT.UNSET_INDEX,t=this.adapter.getListItemCount(),n=0;n<t;n++){var i=this.adapter.listItemAtIndexHasClass(n,o.UX.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,o.UX.LIST_ITEM_ACTIVATED_CLASS);if(i||s){e=n;break}}return e},t.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},t.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&c(this.typeaheadState)},t.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},t.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e,t){var n=(void 0===t?{}:t).forceUpdate;this.isIndexValid(e)&&(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:n}))},t.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},t.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout((function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()}),0)},t.prototype.handleKeydown=function(e,t,n){var i=this,s="ArrowLeft"===(0,r.ku)(e),a="ArrowUp"===(0,r.ku)(e),u="ArrowRight"===(0,r.ku)(e),c="ArrowDown"===(0,r.ku)(e),I="Home"===(0,r.ku)(e),h="End"===(0,r.ku)(e),E="Enter"===(0,r.ku)(e),f="Spacebar"===(0,r.ku)(e),A="A"===e.key||"a"===e.key;if(this.adapter.isRootFocused()){a||h?(e.preventDefault(),this.focusLastElement()):(c||I)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead&&l({event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,o.UX.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}else{var S=this.adapter.getFocusedElementIndex();if(!(-1===S&&(S=n)<0)){if(this.isVertical&&c||!this.isVertical&&u)d(e),this.focusNextElement(S);else if(this.isVertical&&a||!this.isVertical&&s)d(e),this.focusPrevElement(S);else if(I)d(e),this.focusFirstElement();else if(h)d(e),this.focusLastElement();else if(A&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===o.KT.UNSET_INDEX?[]:this.selectedIndex);else if((E||f)&&t){var p=e.target;if(p&&"A"===p.tagName&&E)return;if(d(e),this.adapter.listItemAtIndexHasClass(S,o.UX.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(S),this.adapter.notifyAction(S))}if(this.hasTypeahead)l({event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,o.UX.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}}},t.prototype.handleClick=function(e,t){e!==o.KT.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,o.UX.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},t.prototype.focusNextElement=function(e){var t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus)return e;t=0}return this.focusItemAtIndex(t),t},t.prototype.focusPrevElement=function(e){var t=e-1;if(t<0){if(!this.wrapFocus)return e;t=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(t),t},t.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},t.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},t.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},t.prototype.setEnabled=function(e,t){this.isIndexValid(e)&&(t?(this.adapter.removeClassForElementIndex(e,o.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,o.j2.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,o.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,o.j2.ARIA_DISABLED,"true")))},t.prototype.setSingleSelectionAtIndex=function(e,t){var n=(void 0===t?{}:t).forceUpdate;if(this.selectedIndex!==e||n){var i=o.UX.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=o.UX.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==o.KT.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==o.KT.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,i),this.selectedIndex=e}},t.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===o.KT.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,o.j2.ARIA_CURRENT));var t=null!==this.ariaCurrentAttrValue,n=t?o.j2.ARIA_CURRENT:o.j2.ARIA_SELECTED;if(this.selectedIndex!==o.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),e!==o.KT.UNSET_INDEX){var i=t?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(e,n,i)}},t.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?o.j2.ARIA_SELECTED:o.j2.ARIA_CHECKED},t.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==o.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},t.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;e.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,t,i?"true":"false")}this.selectedIndex=e},t.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===o.KT.UNSET_INDEX&&0!==e?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex instanceof Array||this.selectedIndex===e||this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==o.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},t.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},t.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},t.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?"number"===typeof this.selectedIndex&&this.selectedIndex!==o.KT.UNSET_INDEX?this.selectedIndex:this.selectedIndex instanceof Array&&this.selectedIndex.length>0?this.selectedIndex.reduce((function(e,t){return Math.min(e,t)})):0:Math.max(this.focusedItemIndex,0)},t.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===e.length||e.some((function(e){return t.isIndexInRange(e)}))}if("number"===typeof e){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===o.KT.UNSET_INDEX}return!1},t.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},t.prototype.setSelectedIndexOnAction=function(e,t){void 0===t&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},t.prototype.toggleCheckboxAtIndex=function(e,t){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(e);t&&(i=!i,this.adapter.setCheckedCheckboxOrRadioAtIndex(e,i)),this.adapter.setAttributeForElementIndex(e,n,i?"true":"false");var s=this.selectedIndex===o.KT.UNSET_INDEX?[]:this.selectedIndex.slice();i?s.push(e):s=s.filter((function(t){return t!==e})),this.selectedIndex=s},t.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},t.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var n=[],i=0;i<t;i++)(!this.adapter.listItemAtIndexHasClass(i,o.UX.LIST_ITEM_DISABLED_CLASS)||e.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex(n)}},t.prototype.typeaheadMatchItem=function(e,t,n){var i=this;return void 0===n&&(n=!1),u({focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,o.UX.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)},t.prototype.typeaheadInitSortedIndex=function(){return function(e,t){for(var n=new Map,i=0;i<e;i++){var s=t(i).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach((function(e){e.sort((function(e,t){return e.index-t.index}))})),n}(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},t.prototype.clearTypeaheadBuffer=function(){I(this.typeaheadState)},t}(s.K)}}]);