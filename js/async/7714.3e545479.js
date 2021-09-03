(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[7714],{97714:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var l=a(73114),M={class:"hero-demo"},o={class:"demo-wrapper"},i={class:"demo"},n={class:"toggle-example"},c=(0,l.createElementVNode)("div",null,"Material Icons",-1),N={class:"example"},u={class:"toggle-example"},I=(0,l.createElementVNode)("div",null,"SVG Icon",-1),L={class:"example"},d={class:"toggle-example"},j=(0,l.createElementVNode)("div",null,"Disabled Buttons",-1),s={class:"example"},g={class:"demo-wrapper"},m={class:"demo"},r={class:"toggle-example"},y=(0,l.createElementVNode)("div",null,"Using Material Icons",-1),D={class:"example"},x=(0,l.createTextVNode)(" Favorited? "),E={id:"favorited-status"},S={class:"toggle-example"},A=(0,l.createElementVNode)("div",null,"Using Font Awesome",-1),v={class:"example"},z={class:"toggle-example"},C=(0,l.createElementVNode)("div",null,"Using SVG Icons",-1),T={class:"example"},V=[(0,l.createElementVNode)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"},null,-1)],w=[(0,l.createElementVNode)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},null,-1)],O={class:"toggle-example"},p=(0,l.createElementVNode)("div",null,"Using Image Icons",-1),Y={class:"example"},f=["src"],h=["src"],Q={class:"toggle-example"},k=(0,l.createElementVNode)("div",null,"Disabled Icons",-1),G={class:"example"};var B=a(98121),P=a.n(B),Z=a(96376),U=a.n(Z),b={on:"favorite",off:"favorite_border"},R={on:"fa fa-star",off:"fa fa-star-o"},H=((0,l.reactive)({value:!1,value1:!1,value2:!0}),{metaInfo:{titleTemplate:"%s - Icon Button"},data:function(){return{imageOn:P(),imageOff:U(),mdcIcon:b,faIcon:R,value:!1,value1:!1,value2:!0}},mounted:function(){var e=this;setTimeout((function(){e.value=!0}),1e3)},render:function(e,t,a,B,P,Z){var U=(0,l.resolveComponent)("ui-icon-button"),b=(0,l.resolveComponent)("svg-logo"),R=(0,l.resolveComponent)("ui-snippet"),H=(0,l.resolveComponent)("docs-page");return(0,l.openBlock)(),(0,l.createBlock)(H,{name:"icon-button","demo-count":"2"},{hero:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",M,[(0,l.createVNode)(U,{modelValue:P.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return P.value=e}),toggle:P.mdcIcon},null,8,["modelValue","toggle"])])]})),default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("section",o,[(0,l.createElementVNode)("h6",{class:(0,l.normalizeClass)(e.$tt("headline6"))},"1.1 Buttons",2),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",n,[c,(0,l.createElementVNode)("div",N,[(0,l.createVNode)(U,{icon:"favorite"}),(0,l.createVNode)(U,{icon:"airplanemode_active"})])]),(0,l.createElementVNode)("div",u,[I,(0,l.createElementVNode)("div",L,[(0,l.createVNode)(U,null,{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(b)]})),_:1})])]),(0,l.createElementVNode)("div",d,[j,(0,l.createElementVNode)("div",s,[(0,l.createVNode)(U,{icon:"airplanemode_active",disabled:""}),(0,l.createVNode)(U,{disabled:""},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(b)]})),_:1})])])]),(0,l.createVNode)(R,{code:e.$store.demos[1]},null,8,["code"])]),(0,l.createElementVNode)("section",g,[(0,l.createElementVNode)("h6",{class:(0,l.normalizeClass)(e.$tt("headline6"))},"1.2 Button Toggles",2),(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("div",r,[y,(0,l.createElementVNode)("div",D,[(0,l.createVNode)(U,{modelValue:P.value1,"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.value1=e}),toggle:P.mdcIcon},null,8,["modelValue","toggle"])]),(0,l.createElementVNode)("p",null,[x,(0,l.createElementVNode)("span",E,(0,l.toDisplayString)(P.value1),1)])]),(0,l.createElementVNode)("div",S,[A,(0,l.createElementVNode)("div",v,[(0,l.createVNode)(U,{modelValue:P.value2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return P.value2=e})},{default:(0,l.withCtx)((function(e){var t=e.onClass,a=e.offClass;return[(0,l.createElementVNode)("i",{class:(0,l.normalizeClass)([t,P.faIcon.on])},null,2),(0,l.createElementVNode)("i",{class:(0,l.normalizeClass)([a,P.faIcon.off])},null,2)]})),_:1},8,["modelValue"])]),(0,l.createElementVNode)("p",null,"Result: "+(0,l.toDisplayString)(P.value2),1)]),(0,l.createElementVNode)("div",z,[C,(0,l.createElementVNode)("div",T,[(0,l.createVNode)(U,null,{default:(0,l.withCtx)((function(e){var t=e.onClass,a=e.offClass;return[((0,l.openBlock)(),(0,l.createElementBlock)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",class:(0,l.normalizeClass)(t)},V,2)),((0,l.openBlock)(),(0,l.createElementBlock)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",class:(0,l.normalizeClass)(a)},w,2))]})),_:1})])]),(0,l.createElementVNode)("div",O,[p,(0,l.createElementVNode)("div",Y,[(0,l.createVNode)(U,null,{default:(0,l.withCtx)((function(e){var t=e.onClass,a=e.offClass;return[(0,l.createElementVNode)("img",{src:P.imageOn,class:(0,l.normalizeClass)(t)},null,10,f),(0,l.createElementVNode)("img",{src:P.imageOff,class:(0,l.normalizeClass)(a)},null,10,h)]})),_:1})])]),(0,l.createElementVNode)("div",Q,[k,(0,l.createElementVNode)("div",G,[(0,l.createVNode)(U,{toggle:P.mdcIcon,disabled:""},null,8,["toggle"])])])]),(0,l.createVNode)(R,{code:e.$store.demos[2]},null,8,["code"])])]})),_:1})}}),W=H},98121:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0tMjQwLjM0LTE3LjE3Yy0xOC4yMiAwLTMzIDE1LjE1LTMzIDMzLjg0IDAgMTQuOTUgOS40NSAyNy42MyAyMi41NyAzMi4xMSAxLjY1LjMxIDIuMjUtLjc0IDIuMjUtMS42MyAwLS44LS4wMy0yLjkzLS4wNC01Ljc1LTkuMTggMi4wNC0xMS4xMi00LjU0LTExLjEyLTQuNTQtMS41LTMuOTEtMy42Ni00Ljk1LTMuNjYtNC45NS0zLTIuMS4yMy0yLjA2LjIzLTIuMDYgMy4zMS4yNCA1LjA1IDMuNDkgNS4wNSAzLjQ5IDIuOTQgNS4xNyA3LjcyIDMuNjggOS42IDIuODEuMy0yLjE5IDEuMTUtMy42OCAyLjA5LTQuNTItNy4zMy0uODUtMTUuMDMtMy43Ni0xNS4wMy0xNi43MiAwLTMuNjkgMS4yOS02LjcxIDMuNC05LjA4LS4zNC0uODYtMS40Ny00LjMuMzItOC45NSAwIDAgMi43Ny0uOTEgOS4wOCAzLjQ3IDIuNjMtLjc1IDUuNDYtMS4xMyA4LjI2LTEuMTQgMi44LjAxIDUuNjMuMzkgOC4yNiAxLjE0IDYuMy00LjM4IDkuMDctMy40NyA5LjA3LTMuNDcgMS44IDQuNjYuNjcgOC4xLjMzIDguOTUgMi4xMSAyLjM3IDMuMzkgNS4zOSAzLjM5IDkuMDggMCAxMy03LjcyIDE1Ljg2LTE1LjA3IDE2LjcgMS4xOSAxLjA0IDIuMjQgMy4xMSAyLjI0IDYuMjcgMCA0LjUyLS4wNCA4LjE3LS4wNCA5LjI4IDAgLjkxLjU5IDEuOTYgMi4yNyAxLjYzIDEzLjEtNC40OCAyMi41NS0xNy4xNiAyMi41NS0zMi4xLjAxLTE4LjcxLTE0Ljc3LTMzLjg2LTMzLTMzLjg2Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNiKSI+PGRlZnM+PHBhdGggaWQ9ImMiIGQ9Ik0tMTEyMS4zMy0yNDcxLjE3aDE2ODB2MzM2OWgtMTY4MHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJkIj48dXNlIHhsaW5rOmhyZWY9IiNjIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2QpIiBkPSJNLTI3OC4zMy0yMi4xN2g3NnY3NmgtNzZ6Ii8+PC9nPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48cGF0aCBkPSJNMTMgN2gtMnY0SDd2Mmg0djRoMnYtNGg0di0yaC00eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz4="},96376:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0tMjQwLjM0LTYxLjE3Yy0xOC4yMiAwLTMzIDE1LjE1LTMzIDMzLjg0IDAgMTQuOTUgOS40NSAyNy42MyAyMi41NyAzMi4xMSAxLjY1LjMxIDIuMjUtLjc0IDIuMjUtMS42MyAwLS44LS4wMy0yLjkzLS4wNC01Ljc1LTkuMTggMi4wNC0xMS4xMi00LjU0LTExLjEyLTQuNTQtMS41LTMuOTEtMy42Ni00Ljk1LTMuNjYtNC45NS0zLTIuMS4yMy0yLjA2LjIzLTIuMDYgMy4zMS4yNCA1LjA1IDMuNDkgNS4wNSAzLjQ5IDIuOTQgNS4xNyA3LjcyIDMuNjggOS42IDIuODEuMy0yLjE5IDEuMTUtMy42OCAyLjA5LTQuNTItNy4zMy0uODUtMTUuMDMtMy43Ni0xNS4wMy0xNi43MiAwLTMuNjkgMS4yOS02LjcxIDMuNC05LjA4LS4zNC0uODYtMS40Ny00LjMuMzItOC45NSAwIDAgMi43Ny0uOTEgOS4wOCAzLjQ3IDIuNjMtLjc1IDUuNDYtMS4xMyA4LjI2LTEuMTQgMi44LjAxIDUuNjMuMzkgOC4yNiAxLjE0IDYuMy00LjM4IDkuMDctMy40NyA5LjA3LTMuNDcgMS44IDQuNjYuNjcgOC4xLjMzIDguOTUgMi4xMSAyLjM3IDMuMzkgNS4zOSAzLjM5IDkuMDggMCAxMy03LjcyIDE1Ljg2LTE1LjA3IDE2LjcgMS4xOSAxLjA0IDIuMjQgMy4xMSAyLjI0IDYuMjcgMCA0LjUyLS4wNCA4LjE3LS4wNCA5LjI4IDAgLjkxLjU5IDEuOTYgMi4yNyAxLjYzIDEzLjEtNC40OCAyMi41NS0xNy4xNiAyMi41NS0zMi4xLjAxLTE4LjcxLTE0Ljc3LTMzLjg2LTMzLTMzLjg2Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNiKSI+PGRlZnM+PHBhdGggaWQ9ImMiIGQ9Ik0tMTEyMS4zMy0yNTE1LjE3aDE2ODB2MzM2OWgtMTY4MHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJkIj48dXNlIHhsaW5rOmhyZWY9IiNjIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2QpIiBkPSJNLTI3OC4zMy02Ni4xN2g3NnY3NmgtNzZ6Ii8+PC9nPjxwYXRoIGQ9Ik0yMCA0djE2SDRWNGgxNm0yLTJIMnYyMGgyMFYyeiIvPjxwYXRoIGQ9Ik01IDEyLjU0aDYuNDZWMTlINXptNy41NCAwSDE5VjE5aC02LjQ2ek01IDVoNi40NnY2LjQ2SDV6bTcuNTQgMEgxOXY2LjQ2aC02LjQ2eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz4="}}]);