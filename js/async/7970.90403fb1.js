"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[7970],{37970:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var a=o(73114),n={class:"hero-demo"},r={class:"hero-options"},l={class:"hero-option hero-options"},s=(0,a.createTextVNode)(" State Type "),u=(0,a.createElementVNode)("label",{for:"state-outlined"},"Outlined State",-1),i=(0,a.createTextVNode)(" Alert Message "),c={class:"demo-wrapper"},d={class:"demo"},f=(0,a.createTextVNode)("Success Message"),m=(0,a.createTextVNode)("Info Message"),p=(0,a.createTextVNode)("Warning Message"),V=(0,a.createTextVNode)("Error Message");var N=[{label:"Success",value:"success"},{label:"Info",value:"info"},{label:"Warning",value:"warning"},{label:"Error",value:"error"},{label:"Help",value:"help"}],h={metaInfo:{titleTemplate:"%s - Alert"},data:function(){return{StateTypeOptions:N,state:"success",stateOutlined:!1,message:"Message"}},render:function(e,t,o,N,h,v){var x=(0,a.resolveComponent)("ui-alert"),C=(0,a.resolveComponent)("ui-select"),g=(0,a.resolveComponent)("ui-checkbox"),w=(0,a.resolveComponent)("ui-form-field"),b=(0,a.resolveComponent)("ui-textfield"),T=(0,a.resolveComponent)("ui-snippet"),_=(0,a.resolveComponent)("docs-page");return(0,a.openBlock)(),(0,a.createBlock)(_,{name:"alert","demo-count":"1","without-css":""},{hero:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",n,[(0,a.createVNode)(x,{state:h.state,"state-outlined":h.stateOutlined},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(h.message),1)]})),_:1},8,["state","state-outlined"])]),(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(C,{modelValue:h.state,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.state=e}),options:h.StateTypeOptions},{default:(0,a.withCtx)((function(){return[s]})),_:1},8,["modelValue","options"]),(0,a.createVNode)(w,null,{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(g,{modelValue:h.stateOutlined,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.stateOutlined=e}),"input-id":"state-outlined"},null,8,["modelValue"]),u]})),_:1})]),(0,a.createVNode)(b,{modelValue:h.message,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.message=e}),class:"hero-option"},{default:(0,a.withCtx)((function(){return[i]})),_:1},8,["modelValue"])])]})),default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("section",c,[(0,a.createElementVNode)("div",d,[(0,a.createVNode)(x,{state:"success"},{default:(0,a.withCtx)((function(){return[f]})),_:1}),(0,a.createVNode)(x,{state:"info"},{default:(0,a.withCtx)((function(){return[m]})),_:1}),(0,a.createVNode)(x,{state:"warning",closable:""},{default:(0,a.withCtx)((function(){return[p]})),_:1}),(0,a.createVNode)(x,{state:"error"},{default:(0,a.withCtx)((function(){return[V]})),_:1})]),(0,a.createVNode)(T,{code:e.$store.demos[1]},null,8,["code"])])]})),_:1})}},v=h}}]);