"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[3817],{53817:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var o=l(73114),n={for:"hero-switch"},a={class:"demo-wrapper"},r={class:"demo"},c={for:"basic-switch"},u=(0,o.createElementVNode)("br",null,null,-1),i={class:"demo"},d={for:"basic-switch-custom"},s={class:"demo-wrapper"},m={class:"demo"},g=(0,o.createElementVNode)("label",{for:"basic-switch--disabled"},"off/on",-1);var f=l(65597),h={metaInfo:{titleTemplate:"%s - Switch"},setup:function(){return{balmUI:(0,f.zX)()}},data:function(){return{toggle:!1,toggle1:!1,toggle1Label:0,toggle2:!0,toggle2Label:"on"}},mounted:function(){var e=this;setTimeout((function(){e.toggle=!0}),1e3)},render:function(e,t,l,f,h,V){var b=(0,o.resolveComponent)("ui-switch"),p=(0,o.resolveComponent)("ui-form-field"),w=(0,o.resolveComponent)("ui-snippet"),N=(0,o.resolveComponent)("docs-page");return(0,o.openBlock)(),(0,o.createBlock)(N,{name:"switch","demo-count":"1"},{hero:(0,o.withCtx)((function(){return[(0,o.createVNode)(p,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{id:"hero-switch",modelValue:h.toggle,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.toggle=e})},null,8,["modelValue"]),(0,o.createElementVNode)("label",n,(0,o.toDisplayString)(h.toggle),1)]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("section",a,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Enabled",2),(0,o.createElementVNode)("div",r,[(0,o.createVNode)(p,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{id:"basic-switch",modelValue:h.toggle1,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.toggle1=e}),"true-value":1,"false-value":0,onSelected:t[2]||(t[2]=function(e){return f.balmUI.onChange("toggle1Label",e)})},null,8,["modelValue"]),(0,o.createElementVNode)("label",c,(0,o.toDisplayString)(h.toggle1Label),1)]})),_:1})]),u,(0,o.createElementVNode)("div",i,[(0,o.createVNode)(p,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{id:"basic-switch-custom",modelValue:h.toggle2,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.toggle2=e}),class:"demo-switch--custom","true-value":"on","false-value":"off",onSelected:t[4]||(t[4]=function(e){return f.balmUI.onChange("toggle2Label",e)})},null,8,["modelValue"]),(0,o.createElementVNode)("label",d,(0,o.toDisplayString)(h.toggle2Label)+" (custom color) ",1)]})),_:1})]),(0,o.createVNode)(w,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",s,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Disabled",2),(0,o.createElementVNode)("div",m,[(0,o.createVNode)(p,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{id:"basic-switch--disabled",disabled:""}),g]})),_:1})])])]})),_:1})}},V=h}}]);