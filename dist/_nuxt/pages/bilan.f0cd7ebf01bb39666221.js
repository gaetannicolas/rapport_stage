webpackJsonp([5],{"1jT6":function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("main-layout",{attrs:{title:"Introduction",prev:"sommaire",next:"contexte"}},[n("div",{attrs:{slot:"content"},slot:"content"},[this._v("\n    c'est l'intro boy\n    262E50\n  ")])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};n.a=s},"6x98":function(t,n,e){var i=e("BXZU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("4d9908bc",i,!1,{sourceMap:!1})},AIm1:function(t,n,e){"use strict";var i=e("gb+8"),s=e("tVdz"),a=!1;var o=function(t){a||e("6x98")},r=e("VU/8")(i.a,s.a,!1,o,null,null);r.options.__file="components/PageNavigation.vue",n.a=r.exports},BXZU:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:50px 25px;max-width:800px;margin:0 auto}.pagination__link{color:#262e50;font-family:Raleway,sans-serif;text-decoration:none;position:relative;font-size:16px;padding:10px 0}.pagination__link:after{content:"";position:absolute;bottom:2px;left:0;width:100%;height:2px;background-color:#262e50;-webkit-transition:.5s ease;transition:.5s ease}.pagination__link--prev:after{-webkit-transform-origin:0;transform-origin:0}.pagination__link--next:after{-webkit-transform-origin:100%;transform-origin:100%}.pagination__link:hover:after{-webkit-transform:scaleX(0);transform:scaleX(0)}@media screen and (min-width:1024px){.pagination__link{font-size:20px}.pagination{padding:50px 0}}',""])},CUpb:function(t,n,e){var i=e("c3T0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("d8b5aff6",i,!1,{sourceMap:!1})},Dh3W:function(t,n,e){var i=e("WM6E");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("a6af56bc",i,!1,{sourceMap:!1})},GwV0:function(t,n,e){"use strict";var i=e("fXfE"),s=e("AIm1"),a=e("smZX");n.a={props:{title:{type:String,required:!0},prev:{type:String,required:!0},next:{type:String,required:!0}},components:{AppMenu:i.a,PageNavigation:s.a,AppFooter:a.a}}},KovH:function(t,n,e){"use strict";n.a={props:{title:{type:String,required:!0}},data:function(){return{menuActive:!1}},methods:{toggleMenu:function(){this.menuActive=!this.menuActive,this.menuActive?window.document.body.classList.add("has-open"):window.document.body.classList.remove("has-open")}}}},NbQo:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"body.has-open{overflow:hidden}.btn-menu-mobile{width:50px;height:50px;background-color:#262e50;border-radius:50%;border:0;position:fixed;bottom:30px;right:30px;z-index:9999}.btn-menu-mobile__block{display:inline-block;vertical-align:middle;margin:0 auto}.btn-menu-mobile__line{display:block;height:5px;width:5px;border-radius:50%;background-color:#eee;margin-bottom:6px;-webkit-transition:all .5s ease;transition:all .5s ease}.btn-menu-mobile.active .btn-menu-mobile__block{width:23px}.btn-menu-mobile.active .btn-menu-mobile__line:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left;width:31px;border-radius:15px}.btn-menu-mobile.active .btn-menu-mobile__line:nth-child(2){opacity:0}.btn-menu-mobile.active .btn-menu-mobile__line:last-child{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:left;transform-origin:left;width:31px;border-radius:15px}.btn-menu-mobile__line:last-child{margin-bottom:0}.btn-menu-mobile:focus{outline:0}.side-bar{display:none;position:fixed;height:100vh;min-height:100vh;top:0;left:0;width:80px;max-width:80px;background-color:#eee}.side-bar__wrapper-title{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-top:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.side-bar__title{font-family:Dosis,sans-serif;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;text-orientation:mixed;font-size:25.6px;font-size:1.6rem;font-weight:300}.btn-menu-desktop{width:80px;height:80px;background-color:#262e50;border:0}.btn-menu-desktop__block{display:inline-block;vertical-align:middle;margin:0 auto}.btn-menu-desktop__line{display:block;height:5px;width:5px;border-radius:50%;background-color:#eee;margin-bottom:6px;-webkit-transition:all .5s ease;transition:all .5s ease}.btn-menu-desktop.active .btn-menu-desktop__block{width:23px}.btn-menu-desktop.active .btn-menu-desktop__line:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left;width:30px;border-radius:15px}.btn-menu-desktop.active .btn-menu-desktop__line:nth-child(2){opacity:0}.btn-menu-desktop.active .btn-menu-desktop__line:last-child{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:left;transform-origin:left;width:30px;border-radius:15px}.btn-menu-desktop__line:last-child{margin-bottom:0}.btn-menu-desktop:focus{outline:none}.menu{position:fixed;top:0;left:0;width:100%;min-width:100%;height:100vh;min-height:100vh;overflow-y:scroll;background-color:#262e50;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:.5s ease;transition:.5s ease;text-align:center;padding-top:10px;padding-bottom:40px;z-index:999}.menu__link{text-decoration:none;color:#eee;display:block;font-family:Dosis,sans-serif}.menu__link--main{margin-top:30px;margin-bottom:10px;font-size:24px;font-size:1.5rem;font-weight:500}.menu__link--secondary{font-size:17.6px;font-size:1.1rem;font-weight:300}.menu.active{-webkit-transform:translateX(0);transform:translateX(0)}.menu__button-bg{display:none;position:fixed;top:0;right:0;width:calc(100% - 80px);min-width:calc(100% - 80px);min-height:100vh;-webkit-transform:translateX(100%);transform:translateX(100%);background-color:transparent;border:0;z-index:99}.menu__button-bg.active{-webkit-transform:translateX(0);transform:translateX(0)}.menu__button-bg:focus{outline:none}@media screen and (min-width:768px){.btn-menu-mobile{display:none}.side-bar{display:block}.menu{width:50%;min-width:50%}.menu.active{left:80px}.menu__button-bg{display:block}}",""])},"O+Hr":function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__container"},[n("div",{staticClass:"footer__block"},[this._m(0),n("div",{staticClass:"footer__item"},[n("p",{staticClass:"footer__text footer__text--center"},[n("nuxt-link",{staticClass:"footer__link",attrs:{to:"https://licence-websensoriel.unilim.fr/"}},[this._v("\n            Licence professionnelle de webdesign sensorielle et stratégie de création en ligne\n          ")])],1)]),n("div",{staticClass:"footer__item footer__item--right"},[n("p",{staticClass:"footer__text"},[this._v("Gaétan NICOLAS")]),n("p",{staticClass:"footer__text"},[n("nuxt-link",{staticClass:"footer__link",attrs:{to:"index"}},[this._v("Home")])],1)])])])])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer__item"},[n("p",{staticClass:"footer__text"},[this._v("Rapport de stage")]),n("p",{staticClass:"footer__text"},[this._v("2017/2018")])])}]};n.a=s},SlDe:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("aIZ+"),s=e("1jT6"),a=!1;var o=function(t){a||e("CUpb")},r=e("VU/8")(i.a,s.a,!1,o,null,null);r.options.__file="pages/bilan.vue",n.default=r.exports},UHd0:function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"pos-r minh-100"},[n("app-menu",{attrs:{title:this.title}}),n("div",{staticClass:"content__container"},[this._t("content"),n("page-navigation",{attrs:{prev:this.prev,next:this.next}}),n("app-footer")],2)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};n.a=s},WM6E:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".footer{background-color:#eee;padding:20px 30px 30px}.footer__container{max-width:800px;margin:0 auto}.footer__link{font-family:Raleway,sans-serif;font-size:16px;color:#262e50;position:relative;margin-top:20px}.footer__link:hover{text-decoration:none}.footer__block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.footer__text{font-family:Raleway,sans-serif;font-size:16px;color:#262e50;margin-top:20px}.footer__text--center{text-align:center}.footer__item{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.footer__item--right{text-align:right}",""])},XTN5:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("button",{staticClass:"btn-menu-mobile",class:t.menuActive?"active":"",on:{click:t.toggleMenu}},[t._m(0)]),e("div",{staticClass:"side-bar"},[e("button",{staticClass:"btn-menu-desktop",class:t.menuActive?"active":"",on:{click:t.toggleMenu}},[t._m(1)]),e("div",{staticClass:"side-bar__wrapper-title"},[e("h1",{staticClass:"side-bar__title"},[t._v("\n        "+t._s(t.title)+"\n      ")])])]),e("div",{staticClass:"menu",class:t.menuActive?"active":""},[e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"sommaire"}},[t._v("\n      Sommaire\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"introduction"}},[t._v("\n      Introduction\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"xprime"}},[t._v("\n      1- Le contexte\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"xprime"}},[t._v("\n      X-Prime\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"appstud"}},[t._v("\n      Appstud\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"projet"}},[t._v("\n      2- Un projet de grande envergure\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"globale"}},[t._v("\n      Présentation globale\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"contraintes"}},[t._v("\n      Les contraintes techniques et humaines\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"web"}},[t._v("\n      Organisation coté web\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"place"}},[t._v("\n      3- Ma place dans le projet\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"missions"}},[t._v("\n      Mes missions\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"difficultes"}},[t._v("\n      Les difficultés rencontrées\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"adaptation"}},[t._v("\n      L'adaptation au projet\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"bilan"}},[t._v("\n      Mon bilan\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"apporter"}},[t._v("\n      Ce que j'ai essayé d'apporter\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"formation"}},[t._v("\n      Les apports de la formation\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--secondary",attrs:{to:"evolution"}},[t._v("\n      Mon évolution personnelle et professionnel\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"remerciements"}},[t._v("\n      Remerciements\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"lexique"}},[t._v("\n      Lexique\n    ")]),e("nuxt-link",{staticClass:"menu__link menu__link--main",attrs:{to:"annexes"}},[t._v("\n      Annexes\n    ")])],1),e("button",{staticClass:"menu__button-bg",class:t.menuActive?"active":"",on:{click:t.toggleMenu}})])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"btn-menu-mobile__block"},[n("span",{staticClass:"btn-menu-mobile__line"}),n("span",{staticClass:"btn-menu-mobile__line"}),n("span",{staticClass:"btn-menu-mobile__line"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"btn-menu-desktop__block"},[n("span",{staticClass:"btn-menu-desktop__line"}),n("span",{staticClass:"btn-menu-desktop__line"}),n("span",{staticClass:"btn-menu-desktop__line"})])}]};n.a=s},Xnlj:function(t,n,e){"use strict";var i=e("GwV0"),s=e("UHd0"),a=!1;var o=function(t){a||e("u++6")},r=e("VU/8")(i.a,s.a,!1,o,null,null);r.options.__file="components/MainLayout.vue",n.a=r.exports},"aIZ+":function(t,n,e){"use strict";var i=e("Xnlj");n.a={components:{MainLayout:i.a}}},ac4R:function(t,n,e){var i=e("NbQo");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("424014aa",i,!1,{sourceMap:!1})},c3T0:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},fXfE:function(t,n,e){"use strict";var i=e("KovH"),s=e("XTN5"),a=!1;var o=function(t){a||e("ac4R")},r=e("VU/8")(i.a,s.a,!1,o,null,null);r.options.__file="components/AppMenu.vue",n.a=r.exports},fyhW:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".pos-r{position:relative}.minh-100{min-height:100vh}@media screen and (min-width:768px){.content__container{margin-left:80px}}",""])},"gb+8":function(t,n,e){"use strict";n.a={props:{prev:{type:String,required:!0},next:{type:String,required:!0}}}},nQgS:function(t,n,e){"use strict";n.a={}},smZX:function(t,n,e){"use strict";var i=e("nQgS"),s=e("O+Hr"),a=!1;var o=function(t){a||e("Dh3W")},r=e("VU/8")(i.a,s.a,!1,o,null,null);r.options.__file="components/AppFooter.vue",n.a=r.exports},tVdz:function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"pagination"},[n("nuxt-link",{staticClass:"pagination__link pagination__link--prev",attrs:{to:this.prev}},[this._v("\n    Page Précédente\n  ")]),n("nuxt-link",{staticClass:"pagination__link pagination__link--next",attrs:{to:this.next}},[this._v("\n    Page Suivante\n  ")])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};n.a=s},"u++6":function(t,n,e){var i=e("fyhW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("2cb599ba",i,!1,{sourceMap:!1})}});