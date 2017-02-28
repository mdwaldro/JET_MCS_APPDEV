/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,g){function b(a,b,e,f,g,k,l){this.pd=a;this.$Aa=b;this.xy=e;this.oI=f;g&&(g.CKa&&(this.sBa=g.CKa),g.oKa&&(this.LAa=g.oKa),g.pja&&(this.tBa=g.pja),g.Xia&&(this.MAa=g.Xia),g.oja&&(this.rBa=g.oja),g.Wia&&(this.KAa=g.Wia));k&&(k.Nja&&(this.Hca=k.Nja),k.GHa&&(this.aT=k.GHa),k.FGa&&(this.dv=k.FGa),k.$k&&(this.fI=k.$k),k.xm&&(this.gL=k.xm),k.iF&&(this.Uh=k.iF),k.rG&&(this.jg=k.rG),k.Bha&&(this.gK=k.Bha),k.Qfa&&(this.RS=k.Qfa));l&&(l.gja&&(this.dba=
l.gja),l.sfa&&(this.G5=l.sfa),l.Zha&&(this.Rv=l.Zha),l.Eha&&(this.dz=l.Eha));this.mI=!0;this.Ny=0;a=navigator.userAgent.toLowerCase();if(-1!==a.indexOf("gecko/"))this.lqa=!0;else if(-1!==a.indexOf("opera"))this.mqa=!0;else if(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari"))this.nqa=!0}b.prototype.Yn=function(a){var d=this;if(a){this.Yra();this.psa(this.sBa,this.tBa,this.rBa);this.bsa(this.LAa,this.MAa,this.KAa);var e=this.Yj;this.K4=e.offsetWidth;this.J4=e.offsetHeight;this.lK();this.jK();
this.aE=function(a){d.Nxa(a)};b.Th(this.pd,"mousewheel",this.aE);b.Th(this.pd,"wheel",this.aE);this.jX=function(a){d.LU(a)};b.Th(this.Ng,"touchstart",this.jX);this.hX=function(a){d.KU(a)};b.Th(this.Ng,"touchmove",this.hX);this.WE=function(a){d.IU(a)};b.Th(this.Ng,"touchend",this.WE);b.Th(this.Ng,"touchcancel",this.WE);this.NV=0}else this.Wba();this.XR();this.i4(a);this.Lg(!0);a&&this.fI&&(this.Sj=function(){d.Lg(!1)},this.fI.call(this.dv,this.pd,this.Sj),this.fI.call(this.dv,this.Ll,this.Sj))};b.prototype.destroy=
function(){var a=this.pd;b.ig(a,"mousewheel",this.aE);b.ig(a,"wheel",this.aE);b.ig(this.Ng,"touchstart",this.jX);b.ig(this.Ng,"touchmove",this.hX);b.ig(this.Ng,"touchend",this.WE);b.ig(this.Ng,"touchcancel",this.WE);this.WE=this.hX=this.jX=this.aE=null;this.gL&&this.Sj&&(this.gL.call(this.dv,a,this.Sj),this.gL.call(this.dv,this.Ll,this.Sj));this.Sj=null;this.QCa(this.Ll,a);a.removeChild(this.Ng);a.removeChild(this.Yj);a.removeChild(this.xd);this.Ll=this.Ng=this.xd=this.Yj=null;this.XR();this.xy=this.dv=
this.RS=this.gK=this.jg=this.Uh=this.gL=this.fI=this.aT=this.Hca=this.pd=null};b.prototype.CF=function(){this.Lg(!1)};b.prototype.ALa=function(a){this.lw(a,!0)};b.prototype.kIa=function(){return this.Zi()};b.prototype.RCa=function(a,b){for(var e=a.childNodes;0<e.length;){var f=e[0];b.appendChild(f);1===f.nodeType&&this.Rv&&this.Uh(f,this.Rv)}};b.prototype.QCa=function(a,b){if(a)for(var e=a.childNodes;0<e.length;){var f=e[0];b.appendChild(f);1===f.nodeType&&this.Rv&&this.jg(f,this.Rv)}};b.hD=function(a){var b=
a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};b.Rua=function(a){a=b.hD(a);return b.Yi(a.width)};b.Qua=function(a){a=b.hD(a);return b.Yi(a.height)};b.Yi=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};b.Th=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};b.ig=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};b.cwa=
function(a){var b=0;return b=null!=a.wheelDelta?a.wheelDelta:null!=a.deltaY?-a.deltaY:-a.detail};b.OMa=function(){var a=document.createElement("div");a.style.display="table";return a};b.PMa=function(){var a=document.createElement("div");a.style.display="table-row";return a};b.NMa=function(){var a=document.createElement("div");a.style.display="table-cell";return a};b.zNa=function(a,b,e,f){var g=document.createElement("div"),k=g.style;k.display="inline-block";g.appendChild(a);b.appendChild(g);e&&(k.maxWidth=
g.offsetWidth+"px");f&&(k.maxHeight=g.offsetHeight+"px");return g};b.prototype.wd=function(){return"horizontal"===this.$Aa};b.prototype.rza=function(){return!this.E7().hasChildNodes()};b.prototype.Wba=function(){this.NV=this.Zi();this.HW(0);this.lK();this.jK()};b.prototype.XR=function(){this.BL=this.Pf=null};b.prototype.Lg=function(a){a||this.Wba();this.XR();this.Pf&&this.BL||(this.Pf=this.Baa());a||this.i4(!1);this.Spa()};b.prototype.Spa=function(){var a=this.Yj.style,b=this.xd.style,e=this.Ll,f=
this.Pf;this.wd()?(e=.5*(f.ik-e.offsetHeight),a.top=e+"px",b.top=e+"px"):(e=.5*(f.Ei-e.offsetWidth),this.oI&&(e=-e),a.left=e+"px",b.left=e+"px")};b.prototype.i4=function(a){var d=this.Ll,e=this.wd(),f=e?b.Rua(this.pd):b.Qua(this.pd);this.ZD=0;this.XD=e?d.offsetWidth-f+this.K4:d.offsetHeight-f+this.J4;0>this.XD&&(this.XD=0);this.lK();this.jK();this.lw(a?this.ZD:this.NV,!0);this.NV=0};b.prototype.Yra=function(){var a=this,d=this.pd,e=document.createElement("div");this.Ng=e;this.dba&&this.Uh(e,this.dba);
var f=document.createElement("div");this.Ll=f;this.G5&&this.Uh(f,this.G5);this.RCa(d,f);d.appendChild(e);e.appendChild(f);b.Th(e,"scroll",function(){a.Zxa()})};b.prototype.Eua=function(){for(var a=[],b=this.xy?this.xy:this.Ll,e=b.children,f=e.length,g=0;g<f;g++){var k=e[g];1===k.nodeType&&a.push(k)}this.RS&&(g=this.RS,a=g(a));if(b===this.Ll&&this.Rv)for(g=0;g<a.length;g++)b=a[g],this.gK(b,this.Rv)||this.Uh(b,this.Rv);return a};b.prototype.psa=function(a,d,e){var f=this,g=document.createElement("div");
this.xd=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden","true");b.Th(g,"click",function(){f.Jca()});e&&g.appendChild(e);this.pd.insertBefore(g,this.Ng)};b.prototype.bsa=function(a,d,e){var f=this,g=document.createElement("div");this.Yj=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden","true");b.Th(g,"click",function(){f.Ica()});e&&g.appendChild(e);this.pd.appendChild(g)};b.prototype.E7=function(){var a=this.xy;a||(a=this.Ll);return a};
b.prototype.Baa=function(){var a=this.E7(),b=this.Eua(),e={Ei:0,ik:0},f=[];if(a.hasChildNodes()&&b&&0<b.length)for(var a=this.wd(),g=0,g=this.Ll.offsetWidth,k=0,l=null,m=0;m<b.length;m++){var r=b[m];if(1===r.nodeType){var t=r.offsetWidth,s=r.offsetHeight,q={Ei:t,ik:s,id:r.id};if(a){var p=r.offsetLeft;this.xy||0!==p||(r=r.parentNode,p=r.offsetLeft);q.start=this.oI?g-(p+t):p;0===m&&(k=q.start);q.start-=k;e.Ei=q.start+t;e.ik=Math.max(e.ik,s);q.end=e.Ei-1}else p=r.offsetTop,this.xy||0!==p||(r=r.parentNode,
p=r.offsetTop),q.start=p,e.Ei=Math.max(e.Ei,t),e.ik=q.start+s,q.end=e.ik-1;l&&l.end>=q.start&&(t=l.end-(q.start-1),l.end-=t,a?l.Ei-=t:l.ik-=t);f.push(q);l=q}}this.BL=f;return e};b.prototype.az=function(){if(!this.BL){var a=this.Baa();this.Pf||(this.Pf=a)}return this.BL};b.prototype.FEa=function(){this.jg(this.Yj,this.dz)};b.prototype.GEa=function(){this.jg(this.xd,this.dz)};b.prototype.jK=function(){this.Uh(this.Yj,this.dz)};b.prototype.lK=function(){this.Uh(this.xd,this.dz)};b.prototype.mz=function(){return!this.gK(this.Yj,
this.dz)};b.prototype.QD=function(){return!this.gK(this.xd,this.dz)};b.prototype.dT=function(){return this.wd()?this.K4:this.J4};b.prototype.AFa=function(a){var b=this.dT(),e=this.Zi(),f=this.MK();a<=this.ZD?(this.QD()&&(e-=b),this.lK()):f&&(this.QD()||(e+=b),this.GEa());a>=this.XD?(this.mz(),this.jK()):f&&(this.mz(),this.FEa());this.HW(e)};b.prototype.HW=function(a){var b=this.Ng;this.wd()?b.scrollLeft=this.fS(a):b.scrollTop=a};b.prototype.jD=function(){var a=this.Ng;return this.wd()?a.offsetWidth:
a.offsetHeight};b.prototype.lw=function(a,b){this.ts||(this.mI=!1,this.Wca(a,b))};b.prototype.Wca=function(a,d){if(!this.rza()){this.ts=!0;a=this.Ara(a);this.AFa(a);var e=this.Hca;if(d||!e||a===this.Zi())this.Xaa(this.mI?this.Zi():a);else{var f=this;e.call(this.dv,this.Ng,this.fS(a),Math.abs(this.Zi()-a)/b.qoa,function(){f.Xaa(a)})}}};b.prototype.Zi=function(){var a=this.Ng;return this.wd()?this.Hra(a.scrollLeft):a.scrollTop};b.prototype.MK=function(){var a=this.Ll,b=this.Ng;return this.wd()?a.offsetWidth>
b.offsetWidth:a.offsetHeight>b.offsetHeight};b.prototype.Ara=function(a){!this.MK()||a<this.ZD?a=this.ZD:a>this.XD&&(a=this.XD);return a};b.prototype.Nxa=function(a){var d=this.ts;if(this.MK()&&!this.ts){var e=b.cwa(a);0>e&&this.mz()?(d=!0,this.Ica()):0<e&&this.QD()&&(d=!0,this.Jca())}d&&(a.preventDefault(),a.stopPropagation())};b.prototype.LU=function(a){a=a.touches;this.MK()&&!this.ts&&1===a.length&&(this.Kl=!0,a=a[0],this.IL=this.wd()?a.pageX:a.pageY,this.kX=this.Zi(),this.nFa=this.S4(),this.oFa=
this.T4(),this.pea=this.mz(),this.qea=this.QD())};b.prototype.KU=function(a){var d=this.wd(),e=a.touches[0],e=(d?e.pageX:e.pageY)-this.IL,f=d&&this.oI?0<e:0>e,g=f&&this.pea||!f&&this.qea;if(this.Kl&&g){g=this.Ng;if(Math.abs(e)<b.Hoa*(d?g.offsetWidth:g.offsetHeight)){if(this.lw(this.kX-e,!0),this.pea&&!this.mz()||this.qea&&!this.QD())this.Kl=!1}else this.lw(f?this.nFa:this.oFa,!1),this.Kl=!1;this.kw=!0}this.kw&&(a.preventDefault(),a.stopPropagation())};b.prototype.IU=function(){this.Kl&&this.lw(this.kX,
!1);this.kw=this.Kl=!1};b.prototype.Zxa=function(){this.mI&&!this.ts&&this.Wca(this.Zi(),!0)};b.prototype.Xaa=function(a){this.HW(a);this.mI=!0;this.ts=!1;if(this.aT){this.Ny=this.Q4();a=this.R4();var b=this.az(),e=b[this.Ny];this.Ny!==a&&this.Zi()>e.start&&this.Ny<b.length-2&&(this.Ny++,e=b[this.Ny]);this.aua=e.id;this.aT.call(this.dv,this.aua)}};b.prototype.Ica=function(){this.ts||this.lw(this.S4(),!1)};b.prototype.Jca=function(){this.ts||this.lw(this.T4(),!1)};b.prototype.S4=function(){var a=this.Jqa(),
b=0;return b=a===this.Q4()?this.Zi()+this.jD():this.Lqa(a)};b.prototype.T4=function(){var a=this.Kqa(),b=0,b=a===this.R4()?this.Zi()-this.jD():this.Iqa(a);this.mz()||(b+=this.dT());b<this.dT()&&(b=this.ZD);return b};b.prototype.Lqa=function(a){return this.az()[a].start};b.prototype.Iqa=function(a){return this.az()[a].end-this.jD()+1};b.prototype.Q4=function(){var a=this.sI(this.Zi());return 0>a?0:a};b.prototype.R4=function(){var a=this.sI(this.Zi()+this.jD()-1),b=this.az();return 0>a?b.length-1:a};
b.prototype.Kqa=function(){var a=this.sI(this.Zi()-1);return 0>a?0:a};b.prototype.Jqa=function(){var a=this.sI(this.Zi()+this.jD()),b=this.az();return 0>a?b.length-1:a};b.prototype.sI=function(a){for(var b=this.az(),e=0;e<b.length;e++)if(a<=b[e].end)return e;return-1};b.prototype.fS=function(a){var b=a;if(this.oI&&this.wd())if(this.lqa)b=-a;else if(this.nqa||this.mqa)b=this.Ll.offsetWidth-this.Ng.offsetWidth-a;return b};b.prototype.Hra=function(a){return this.fS(a)};b.qoa=1.1;b.Hoa=.33;(function(){a.Ra("oj.ojConveyorBelt",
g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-conveyorbelt oj-component");this.options.disabled&&a.t.warn(c);this.ab(!0)},refresh:function(){this._super();var a=this.vs.kIa();this.yS();this.ab(!0);this.vs.ALa(a)},hq:function(){this._super();this.Le?this.ab(this.Le[0]):this.vs&&this.vs.CF()},gq:function(){this._super();this.Le&&this.ab(this.Le[0])},ab:function(c){var e=
this,f=this.element,h=this.options,k=h.orientation;"vertical"===k?f.addClass("oj-conveyorbelt-vertical"):f.removeClass("oj-conveyorbelt-vertical");if(this.zC()){this.Le=null;this.Ui="rtl"===this.nd();if(c&&!this.vs){var l=null,m=null,r=null,t=null,s=null;"vertical"!==k?(l="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",m="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",r=this.DI("oj-conveyorbelt-overflow-icon oj-start"),t=this.DI("oj-conveyorbelt-overflow-icon oj-end"),
s=this.Wpa):(l="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",m="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",r=this.DI("oj-conveyorbelt-overflow-icon oj-top"),t=this.DI("oj-conveyorbelt-overflow-icon oj-bottom"),s=this.Xpa);var q={};q.pja=l;q.Xia=m;q.oja=r;q.Wia=t;l={};l.$k=a.D.$k;l.xm=a.D.xm;l.iF=this.Fpa;l.rG=this.DCa;l.Bha=this.NU;l.Qfa=function(a){return e.Uta(a)};"enabled"!==a.fa.EY()&&(l.Nja=s);s=null;h.contentParent&&(s=g(h.contentParent)[0]);this.vs=
new b(f[0],k,s,this.Ui,q,l,{gja:"oj-conveyorbelt-overflow-container",sfa:"oj-conveyorbelt-content-container",Zha:"oj-conveyorbelt-item",Eha:"oj-helper-hidden"})}this.vs.Yn(c);if(c)for(c=f.find(".oj-conveyorbelt-overflow-indicator"),f=0;f<c.length;f++)this.pEa(g(c[f]))}else f=!1,this.Le&&(f=this.Le[0]),this.Le=[c||f]},_destroy:function(){this.yS();this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical");this._super()},_setOption:function(b,e,f){var g=!1,k=this.options;switch(b){case "containerParent":case "orientation":g=
k.orientation!=e;break;case "disabled":a.t.warn(c)}g&&this.yS();this._super(b,e,f);g&&this.ab(!0)},yS:function(){var a=this.vs;a&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),a.destroy());this.vs=null},zC:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b["-webkit-flex"]="0 0 auto";b.flex="0 0 auto";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(g){}b.removeChild(a);return c},pEa:function(a){this.We({element:a,
afterToggle:function(b){"mouseenter"===b?a.removeClass("oj-default"):"mouseleave"===b&&a.addClass("oj-default")}});this.Gk({element:a,afterToggle:function(b){"mousedown"===b||"touchstart"===b?a.removeClass("oj-default"):"mouseup"!==b&&"touchend"!==b&&"touchcancel"!==b||a.addClass("oj-default")}})},DI:function(a){var b=document.createElement("span");b.setAttribute("class","oj-component-icon "+a);return b},Wpa:function(a,b,c,h){var k={};k.scrollLeft=b;g(a).animate(k,c,"swing",h)},Xpa:function(a,b,c,
h){var k={};k.scrollTop=b;g(a).animate(k,c,"swing",h)},Fpa:function(a,b){g(a).addClass(b)},DCa:function(a,b){g(a).removeClass(b)},NU:function(a,b){return g(a).hasClass(b)},Uta:function(a){for(var b=[],c=0;c<a.length;c++){var g=a[c];this.NU(g,"oj-helper-detect-expansion")||this.NU(g,"oj-helper-detect-contraction")||b.push(g)}return b},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-conveyorbelt-start-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:
"oj-conveyorbelt-end-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),c=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),
g=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),k=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),l=this.element[0];a&&a!=l;){if(a===b)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(a===c)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(a===g)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(a===k)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};a=a.parentElement}return null}});var c="JET ConveyorBelt: 'disabled' option not supported"})();
a.Components.Xa("ojConveyorBelt","baseComponent",{properties:{contentParent:{type:"string"},disabled:{type:"boolean"},orientation:{type:"string"}},methods:{refresh:{}},extension:{_widgetName:"ojConveyorBelt"}});a.Components.register("oj-conveyor-belt",a.Components.getMetadata("ojConveyorBelt"))});