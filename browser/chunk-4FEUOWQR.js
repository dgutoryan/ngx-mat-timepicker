import{$a as Z,$c as O,Da as p,Dd as rt,Ea as l,Ed as ct,Fa as C,Fd as at,G as Re,Ga as Ie,Gd as lt,H as Ve,Ha as Te,Hd as st,I as Qe,Ia as R,Ib as pe,Ja as Q,Jb as de,K as H,Kb as ue,Kd as Ht,M as Be,Ma as _,Md as pt,Nd as J,Oa as s,Od as dt,Pa as re,Pd as ut,Q as D,Qa as ce,R as m,Ra as k,Rd as gt,Sa as j,T as V,Ta as ae,U as Ae,Ua as Ue,Uc as Et,Va as I,Vc as Je,Vd as ve,W as w,Wa as f,Wd as mt,X as M,Xa as Le,Xc as Ye,Ya as qe,Yd as ye,Zc as A,_a as W,_d as ft,ac as Ze,ad as U,ae as te,bc as Ge,c as Oe,db as le,dc as ge,ea as ne,eb as y,ed as he,fa as we,fb as F,g as S,ga as ie,gb as z,gd as et,h as L,hb as b,hc as G,hd as tt,i as Y,ib as N,id as ot,jc as K,jd as nt,ka as u,kc as Ke,kd as _e,la as Me,m as ke,nc as $,oc as v,od as P,pa as je,pb as We,pc as $e,pd as E,q as Pe,qa as h,qb as T,qc as B,qd as it,r as Ee,rc as me,s as He,sa as ze,sc as ee,sd as X,ta as a,tc as fe,td as De,ub as se,uc as Ce,vc as Xe,xa as q,ya as d}from"./chunk-GVW67AKS.js";import{a as Se,b as Fe,f as oe}from"./chunk-RS6LHQUM.js";Y();Y();var be=(()=>{class t extends v{constructor(){super()}registerControl(){}unregisterControl(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","diControlSilencer",""]],standalone:!0,features:[I([B(t)]),h]})}return t})();var xe=class{};var Ct=(()=>{let e=class e{keyboardEvent(n){this.dropdown&&(n.key==="ArrowDown"&&!this.dropdown.isOpened&&(n.preventDefault(),this.dropdown.open()),n.key==="Escape"&&this.dropdown.isOpened&&(n.preventDefault(),this.dropdown.close()))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=V({type:e,selectors:[["","ngDocDropdownHandler",""]],hostBindings:function(o,i){o&1&&_("keydown",function(g){return i.keyboardEvent(g)})},inputs:{dropdown:["ngDocDropdownHandler","dropdown"]},standalone:!0});let t=e;return t})();var Rt=["origin"],Vt=["*"],ht=(()=>{var e;let t=(e=class extends v{constructor(){super({host:me({skipSelf:!0,optional:!0}),onChildControlChange:n=>{n instanceof $e&&this.dropdown?.close()}}),this.compareFn=Ze,this.displayValueFn=String,this.positions=["bottom-center","top-center"],this.ngZone=D(je)}ngAfterContentInit(){this.inputControl?.changes.pipe(He(()=>!!this.inputControl?.isFocused),U(this),Ye(this.ngZone)).subscribe(()=>this.dropdown?.open())}get listHostOrigin(){return this.inputControl?.elementRef}get searchText(){return this.hasValue?"":this.inputControl?.value||""}get width(){return this.origin?.nativeElement.offsetWidth||0}get panelClass(){return"ng-doc-combobox-host-overlay"}clickEvent(){this.disabled||this.dropdown?.open()}},e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-combobox-host"]],contentQueries:function(o,i,c){if(o&1&&(z(c,_e,5),z(c,ee,5)),o&2){let g;y(g=b())&&(i.dropdown=g.first),y(g=b())&&(i.inputControl=g.first)}},viewQuery:function(o,i){if(o&1&&F(Rt,7,ie),o&2){let c;y(c=b())&&(i.origin=c.first)}},inputs:{compareFn:"compareFn",displayValueFn:"displayValueFn"},standalone:!0,features:[I([B(H(()=>e)),Ge(H(()=>e)),{provide:Xe,useExisting:H(()=>e)},{provide:fe,useExisting:H(()=>e)},{provide:xe,useExisting:H(()=>e)},{provide:Ce,useExisting:H(()=>e)}]),h,f],ngContentSelectors:Vt,decls:3,vars:1,consts:[["ngDocFocusCatcher","",1,"ng-doc-dropdown-host",3,"ngDocDropdownHandler","click"],["origin",""]],template:function(o,i){o&1&&(re(),p(0,"label",0,1),_("click",function(){return i.clickEvent()}),ce(2),l()),o&2&&a("ngDocDropdownHandler",i.dropdown)},dependencies:[he,Ct],styles:["[_nghost-%COMP%]{position:relative;display:block;width:100%}  .ng-doc-combobox-host-overlay .ng-doc-overlay-content{display:block;max-height:300px;overflow:auto}"],changeDetection:0}),e);return t=S([O(),L("design:paramtypes",[])],t),t})();Y();function Qt(t,e){if(t&1){let r=Q();p(0,"button",1),_("click",function(){w(r);let o=s();return M(o.clear())})("focusout",function(){w(r);let o=s();return M(o.touch())}),C(1,"ng-doc-icon",2),l()}if(t&2){let r=s();a("ngDocFocusable",!1)("disabled",r.disabled)("rounded",!1)}}var _t=(()=>{var e;let t=(e=class extends v{constructor(){super({host:me()}),this.inputHost=D(fe,{optional:!0})}ngAfterContentInit(){this.inputHost?.inputControl&&this.inputHost.inputControl.changes.pipe(U(this)).subscribe(()=>this.changeDetectorRef.detectChanges())}get isVisible(){return this.inputHost?.inputControl?.hasValue||this.hasValue}clear(){this.inputHost?.inputControl?.writeValueFromHost(null),this.updateModel(null)}},e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-clear-control"]],standalone:!0,features:[h,f],decls:1,vars:1,consts:[["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(o,i){o&1&&d(0,Qt,2,3,"button",0),o&2&&a("ngIf",i.isVisible)},dependencies:[T,E,A,P],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),e);return t=S([O(),L("design:paramtypes",[])],t),t})();var Ne=(()=>{let e=class e{constructor(n,o){this.template=n,this.viewContainerRef=o}};e.\u0275fac=function(o){return new(o||e)(Me(le),Me(q))},e.\u0275dir=V({type:e,selectors:[["","ngDocData",""]],standalone:!0});let t=e;return t})();function Bt(t,e){t&1&&R(0)}function At(t,e){t&1&&C(0,"ng-doc-clear-control")}function jt(t,e){if(t&1&&d(0,Bt,1,0,"ng-container",5)(1,At,1,0,"ng-doc-clear-control",6),t&2){let r=s();a("polymorpheusOutlet",r.rightContent),u(1),a("ngIf",r.clearButton)}}function zt(t,e){t&1&&R(0)}function Ut(t,e){if(t&1&&d(0,zt,1,0,"ng-container",7),t&2){let r=s();a("ngTemplateOutlet",r.data)}}var Dt=(()=>{let e=class e extends v{constructor(){super(),this.readonly=!1,this.placeholder="Chose the value",this.clearButton=!0,this.rightContent="",this.valueContent="",this.data=null}get listHostOrigin(){return this.elementRef.nativeElement}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-combobox"]],contentQueries:function(o,i,c){if(o&1&&z(c,Ne,5,le),o&2){let g;y(g=b())&&(i.data=g.first)}},inputs:{readonly:"readonly",placeholder:"placeholder",clearButton:"clearButton",rightContent:"rightContent",valueContent:"valueContent"},standalone:!0,features:[I([B(e),{provide:Ce,useExisting:e}]),h,f],decls:8,vars:7,consts:[["ngDocFocusCatcher","",3,"rightContent","blurContent","blurContext"],["ngDocInputString","",3,"readonly","placeholder"],["inputRightContent",""],[3,"content","closeIfInnerClick"],["dropdownContent",""],[4,"polymorpheusOutlet"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(o,i){if(o&1&&(p(0,"ng-doc-combobox-host")(1,"ng-doc-input-wrapper",0),C(2,"input",1),d(3,jt,2,2,"ng-template",null,2,N),p(5,"ng-doc-dropdown",3),d(6,Ut,1,1,"ng-template",null,4,N),l()()()),o&2){let c=k(4),g=k(7);u(1),a("rightContent",c)("blurContent",i.hasValue?i.valueContent:"")("blurContext",i.model()),u(1),a("readonly",i.readonly)("placeholder",i.placeholder),u(3),a("content",g)("closeIfInnerClick",!0)}},dependencies:[ht,X,he,De,tt,et,T,_t,_e,se],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();Y();var vt=oe(pt(),1);var yt=(()=>{let e=class e{constructor(){this.overlayService=D(nt)}open(n,o){return this.overlayService.open(n,Fe(Se({overlayContainer:ot,positionStrategy:this.overlayService.globalPositionStrategy().centerHorizontally().centerVertically(),scrollStrategy:this.overlayService.scrollStrategy().block()},o),{panelClass:["ng-doc-dialog",...(0,vt.asArray)(o?.panelClass)]}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=Be({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Lt=["outletContent"];function qt(t,e){t&1&&ce(0)}var Wt=["*"],bt=(()=>{var e;let t=(e=class{constructor(){this.router=D(ue),this.route=D(pe),this.dialogService=D(yt)}ngAfterContentInit(){if(this.routerOutlet){let n=new Oe;n.pipe(Ve(o=>o.beforeClose().pipe(Qe(this.routerOutlet?.deactivateEvents??Ee))),U(this)).subscribe(()=>{let o=this.route.pathFromRoot.map(i=>i.snapshot.url).filter(i=>!!i[0]).map(([i])=>i.path).join("/");this.router.navigateByUrl(o)}),Pe(this.routerOutlet.activateEvents.pipe(ke(()=>!0)),this.routerOutlet.deactivateEvents.pipe(ke(()=>!1))).pipe(Re(this.routerOutlet.isActivated),U(this)).subscribe(o=>{o?(this.dialogRef=this.dialogService.open(this.outletContent,this.config),n.next(this.dialogRef)):this.dialogRef?.close()})}}},e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-dialog-outlet"]],contentQueries:function(o,i,c){if(o&1&&z(c,de,5),o&2){let g;y(g=b())&&(i.routerOutlet=g.first)}},viewQuery:function(o,i){if(o&1&&F(Lt,7),o&2){let c;y(c=b())&&(i.outletContent=c.first)}},inputs:{config:"config"},standalone:!0,features:[f],ngContentSelectors:Wt,decls:2,vars:0,consts:[["outletContent",""]],template:function(o,i){o&1&&(re(),d(0,qt,1,0,"ng-template",null,0,N))},encapsulation:2,changeDetection:0}),e);return t=S([O()],t),t})();Y();var xt=oe(Et(),1);var Nt=(()=>{var e;let t=(e=class extends ee{constructor(){super({onIncomingUpdate:n=>{Je(this.elementRef).value=(0,xt.isPresent)(n)?String(Number(n)):""}})}blurEvent(){this.touch()}inputEvent(){this.updateModel(Number(this.elementRef.nativeElement.value))}},e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=V({type:e,selectors:[["input","ngDocInputNumber",""]],hostBindings:function(o,i){o&1&&_("blur",function(){return i.blurEvent()})("input",function(){return i.inputEvent()})},standalone:!0,features:[I([{provide:ee,useExisting:H(()=>e)}]),h]}),e);return t=S([O(),L("design:paramtypes",[])],t),t})();var kt=oe(Ht(),1),wt=(()=>{let e=class e{transform(n){return(0,kt.extractValue)(n)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=Ae({name:"ngDocExtractValue",type:e,pure:!0,standalone:!0});let t=e;return t})();function Zt(t,e){if(t&1&&(C(0,"div",2),W(1,"ngDocSanitizeHtml")),t&2){let r=s();a("innerHTML",Z(1,1,r.description),ne)}}var Mt=(()=>{let e=class e extends v{constructor(){super(),this.name="",this.description=""}get defaultValue(){return Object.prototype.hasOwnProperty.call(this,"default")?this.default:!1}updateModel(n){super.updateModel(n||(this.defaultValue?!1:this.defaultValue))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-boolean-control"]],standalone:!0,features:[I([B(e)]),h,f],decls:4,vars:3,consts:[[3,"ngDocTooltip","canOpen"],["tooltipTemplate",""],[3,"innerHTML"]],template:function(o,i){if(o&1&&(p(0,"ng-doc-checkbox",0),j(1),d(2,Zt,2,3,"ng-template",null,1,N),l()),o&2){let c=k(3);a("ngDocTooltip",c)("canOpen",!!i.description),u(1),Ue(" ",i.name," ")}},dependencies:[it,J,ve],styles:["[_nghost-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0});let t=e;return t})();function Gt(t,e){if(t&1){let r=Q();p(0,"button",4),_("click",function(){w(r);let o=s(2),i;return M(o.updateModel((i=o.default)!==null&&i!==void 0?i:null))})("focusout",function(){w(r);let o=s(2);return M(o.touch())}),C(1,"ng-doc-icon",5),l()}if(t&2){let r=s(2);a("ngDocFocusable",!1)("disabled",r.disabled)("rounded",!1)}}function Kt(t,e){if(t&1&&d(0,Gt,2,3,"button",3),t&2){let r=s();a("ngIf",r.model()&&r.model()!==r.default)}}var Tt=(()=>{let e=class e extends v{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-number-control"]],inputs:{default:"default"},standalone:!0,features:[h,f],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputNumber","","type","number",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(o,i){if(o&1&&(p(0,"ng-doc-input-wrapper",0)(1,"input",1),_("ngModelChange",function(g){return i.changeModel(g)}),l(),d(2,Kt,1,1,"ng-template",null,2,N),l()),o&2){let c=k(3);a("rightContent",c),u(1),a("ngModel",i.model)}},dependencies:[X,be,Nt,$,ge,Ke,G,K,T,E,A,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function $t(t,e){if(t&1){let r=Q();p(0,"button",4),_("click",function(){w(r);let o=s(2),i;return M(o.updateModel((i=o.default)!==null&&i!==void 0?i:null))})("focusout",function(){w(r);let o=s(2);return M(o.touch())}),C(1,"ng-doc-icon",5),l()}if(t&2){let r=s(2);a("ngDocFocusable",!1)("disabled",r.disabled)("rounded",!1)}}function Xt(t,e){if(t&1&&d(0,$t,2,3,"button",3),t&2){let r=s();a("ngIf",r.model()&&r.model()!==r.default)}}var St=(()=>{let e=class e extends v{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}writeValue(n){super.writeValue(n)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-string-control"]],inputs:{default:"default"},standalone:!0,features:[h,f],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputString","",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(o,i){if(o&1&&(p(0,"ng-doc-input-wrapper",0)(1,"input",1),_("ngModelChange",function(g){return i.changeModel(g)}),l(),d(2,Xt,1,1,"ng-template",null,2,N),l()),o&2){let c=k(3);a("rightContent",c),u(1),a("ngModel",i.model())}},dependencies:[$,ge,G,K,X,De,T,E,A,P,be],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();var Ft=(()=>{let e=class e{constructor(){this.kind="",this.type="declaration"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-kind-icon"]],hostVars:2,hostBindings:function(o,i){o&2&&ze("data-ng-doc-kind",i.kind)("data-ng-doc-type",i.type)},inputs:{kind:"kind",type:"type"},standalone:!0,features:[f],decls:1,vars:1,template:function(o,i){o&1&&j(0),o&2&&ae(i.kind[0])},styles:["[_nghost-%COMP%]{display:inline-block;width:calc(var(--ng-doc-base-gutter) * 2);height:calc(var(--ng-doc-base-gutter) * 2);border-radius:calc(var(--ng-doc-base-gutter) / 4);font-size:13px;text-align:center;line-height:calc(var(--ng-doc-base-gutter) * 2);text-transform:uppercase;flex-shrink:0;font-weight:700}[data-ng-doc-type=declaration][data-ng-doc-kind=Class][_nghost-%COMP%]{background-color:var(--ng-doc-class-background);color:var(--ng-doc-class-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Interface][_nghost-%COMP%]{background-color:var(--ng-doc-interface-background);color:var(--ng-doc-interface-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Enum][_nghost-%COMP%]{background-color:var(--ng-doc-enum-background);color:var(--ng-doc-enum-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Variable][_nghost-%COMP%]{background-color:var(--ng-doc-variable-background);color:var(--ng-doc-variable-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Function][_nghost-%COMP%]{background-color:var(--ng-doc-function-background);color:var(--ng-doc-function-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=TypeAlias][_nghost-%COMP%]{background-color:var(--ng-doc-type-alias-background);color:var(--ng-doc-type-alias-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Component][_nghost-%COMP%]{background-color:var(--ng-doc-component-decorator-background);color:var(--ng-doc-component-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Directive][_nghost-%COMP%]{background-color:var(--ng-doc-directive-decorator-background);color:var(--ng-doc-directive-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Injectable][_nghost-%COMP%]{background-color:var(--ng-doc-injectable-decorator-background);color:var(--ng-doc-injectable-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=Pipe][_nghost-%COMP%]{background-color:var(--ng-doc-pipe-decorator-background);color:var(--ng-doc-pipe-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=NgModule][_nghost-%COMP%]{background-color:var(--ng-doc-ng-module-decorator-background);color:var(--ng-doc-ng-module-decorator-color)}[data-ng-doc-type=declaration][data-ng-doc-kind=ng-doc-tag-selector][_nghost-%COMP%]{background-color:var(--ng-doc-selector-background);color:var(--ng-doc-selector-color)}[data-ng-doc-type=type][data-ng-doc-kind=string][_nghost-%COMP%]{background-color:var(--ng-doc-string-background);color:var(--ng-doc-string-color)}[data-ng-doc-type=type][data-ng-doc-kind=number][_nghost-%COMP%]{background-color:var(--ng-doc-number-background);color:var(--ng-doc-number-color)}[data-ng-doc-type=type][data-ng-doc-kind=boolean][_nghost-%COMP%]{background-color:var(--ng-doc-boolean-background);color:var(--ng-doc-boolean-color)}[data-ng-doc-type=type][data-ng-doc-kind=null][_nghost-%COMP%]{background-color:var(--ng-doc-null-background);color:var(--ng-doc-null-color)}[data-ng-doc-type=type][data-ng-doc-kind=undefined][_nghost-%COMP%]{background-color:var(--ng-doc-undefined-background);color:var(--ng-doc-undefined-color)}[data-ng-doc-type=type][data-ng-doc-kind=object][_nghost-%COMP%]{background-color:var(--ng-doc-object-background);color:var(--ng-doc-object-color)}"],changeDetection:0});let t=e;return t})();function Jt(t,e){t&1&&R(0)}var Yt=t=>({$implicit:t});function eo(t,e){if(t&1&&(Ie(0),p(1,"ng-doc-option",6),d(2,Jt,1,0,"ng-container",7),l(),Te()),t&2){let r=e.ngIf;s(3);let n=k(3);u(1),a("value",r),u(1),a("ngTemplateOutlet",n)("ngTemplateOutletContext",qe(3,Yt,r))}}function to(t,e){if(t&1&&(Ie(0),d(1,eo,3,5,"ng-container",5),W(2,"ngDocExtractValue"),Te()),t&2){let r=e.$implicit;u(1),a("ngIf",Z(2,1,r))}}function oo(t,e){if(t&1&&(p(0,"ng-doc-list"),d(1,to,3,3,"ng-container",4),l()),t&2){let r=s();u(1),a("ngForOf",r.options)}}function no(t,e){t&1&&(p(0,"span",11),j(1,"[default]"),l())}function io(t,e){if(t&1&&(p(0,"div",8),C(1,"ng-doc-kind-icon",9),p(2,"div"),j(3),l(),d(4,no,2,0,"span",10),l()),t&2){let r=e.$implicit,n=s();u(1),a("kind",n.typeOf(r))("type","type")("ngDocTooltip",n.typeOf(r)),u(2),ae(r),u(1),a("ngIf",r===n.default)}}function ro(t,e){if(t&1){let r=Q();p(0,"button",13),_("click",function(){w(r);let o=s(2),i;return M(o.updateModel((i=o.default)!==null&&i!==void 0?i:null))})("focusout",function(){w(r);let o=s(2);return M(o.touch())}),C(1,"ng-doc-icon",14),l()}if(t&2){let r=s(2);a("ngDocFocusable",!1)("disabled",r.disabled)("rounded",!1)}}function co(t,e){if(t&1&&d(0,ro,2,3,"button",12),t&2){let r=s();a("ngIf",r.model()&&r.model()!==r.default)}}var Ot=(()=>{let e=class e extends v{constructor(){super()}typeOf(n){return typeof n}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-type-alias-control"]],inputs:{default:"default"},standalone:!0,features:[h,f],decls:6,vars:5,consts:[[3,"ngModel","readonly","valueContent","clearButton","rightContent","ngModelChange"],[4,"ngDocData"],["valueTemplate",""],["rightContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ng-doc-text",""],["positions","left-center","ngDocTextLeft","",3,"kind","type","ngDocTooltip"],["ng-doc-text","","color","muted","size","small","ngDocTextRight","",4,"ngIf"],["ng-doc-text","","color","muted","size","small","ngDocTextRight",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(o,i){if(o&1&&(p(0,"ng-doc-combobox",0),_("ngModelChange",function(g){return i.changeModel(g)}),d(1,oo,2,1,"ng-doc-list",1)(2,io,5,5,"ng-template",null,2,N)(4,co,1,1,"ng-template",null,3,N),l()),o&2){let c=k(3),g=k(5);a("ngModel",i.model())("readonly",!0)("valueContent",c)("clearButton",!1)("rightContent",g)}},dependencies:[Dt,$,G,K,Ne,rt,We,T,ct,se,st,Ft,at,J,lt,E,A,P,wt],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();var Pt=oe(pt(),1);var ao=["pageContainer"],lo=["pageBreadcrumbs"],so=["pageNavigation"],po=["pageToc"],uo=["childOutlet"];function go(t,e){if(t&1&&(p(0,"a",9),C(1,"ng-doc-icon",10),l()),t&2){let r=s();a("href",r.rootPage.editSourceFileUrl,we)}}function mo(t,e){if(t&1&&(p(0,"a",11),C(1,"ng-doc-icon",12),l()),t&2){let r=s();a("href",r.rootPage.viewSourceFileUrl,we)}}var fo=()=>({width:"100vw",height:"100vh"});function Co(t,e){t&1&&(p(0,"ng-doc-dialog-outlet",13)(1,"div",14),C(2,"router-outlet"),l()()),t&2&&a("config",Le(1,fo))}var Pi=(()=>{var e;let t=(e=class{constructor(){this.rootPage=D(dt),this.skeleton=D(gt),this.context=D(ut),this.router=D(ue),this.breadcrumbs=D(pe).pathFromRoot.filter(n=>!n.snapshot.url.length).map(n=>n.snapshot.title).filter(Pt.isPresent)}ngAfterViewInit(){this.rootPage.pageType==="guide"&&(this.skeleton.breadcrumbs&&ye(this.pageBreadcrumbs,this.skeleton.breadcrumbs,{breadcrumbs:this.breadcrumbs}),this.skeleton.navigation&&ye(this.pageNavigation,this.skeleton.navigation,this.navigationInputs())),Promise.resolve().then(()=>{this.pageToc&&this.skeleton.toc&&ye(this.pageToc,this.skeleton.toc,{tableOfContent:ft(this.pageContainer.nativeElement)??[]})})}navigationInputs(){let n=i=>i.map(c=>[c.children?.length?n(c.children):c]).flat(2),o=n(this.context.navigation);return{prevPage:o[o.findIndex(i=>this.url===i.route)-1],nextPage:o[o.findIndex(i=>this.url===i.route)+1]}}get url(){let n=this.router.parseUrl(this.router.url);return n.queryParams={},n.fragment=null,n.toString()}},e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-doc-page"]],viewQuery:function(o,i){if(o&1&&(F(ao,7,ie),F(lo,7,q),F(so,7,q),F(po,5,q),F(uo,5)),o&2){let c;y(c=b())&&(i.pageContainer=c.first),y(c=b())&&(i.pageBreadcrumbs=c.first),y(c=b())&&(i.pageNavigation=c.first),y(c=b())&&(i.pageToc=c.first),y(c=b())&&(i.childOutlet=c.first)}},standalone:!0,features:[I([te("NgDocTypeAlias",Ot,{order:10}),te("string",St,{order:20}),te("number",Tt,{order:30}),te("boolean",Mt,{hideLabel:!0,order:40})]),f],decls:14,vars:6,consts:[["pageBreadcrumbs",""],[1,"ng-doc-page-controls"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href",4,"ngIf"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href",4,"ngIf"],["ngDocPageProcessor","",1,"ng-doc-page-wrapper",3,"innerHTML"],["pageContainer",""],["pageNavigation",""],[3,"config",4,"ngIf"],["pageToc",""],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href"],["icon","edit-2"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href"],["icon","code"],[3,"config"],[1,"ng-doc-fullscreen-wrapper"]],template:function(o,i){o&1&&(p(0,"article"),R(1,null,0),p(3,"div",1),d(4,go,2,1,"a",2)(5,mo,2,1,"a",3),l(),C(6,"div",4,5),W(8,"ngDocSanitizeHtml"),R(9,null,6),l(),d(11,Co,3,2,"ng-doc-dialog-outlet",7),R(12,null,8)),o&2&&(u(4),a("ngIf",i.rootPage.editSourceFileUrl),u(1),a("ngIf",i.rootPage.viewSourceFileUrl),u(1),a("innerHTML",Z(8,4,i.rootPage.pageContent),ne),u(5),a("ngIf",!(i.rootPage.page!=null&&i.rootPage.page.disableFullscreenRoutes)))},dependencies:[T,E,J,P,ve,mt,de,bt],styles:["[_nghost-%COMP%]{display:flex;--ng-doc-toc-margin: calc(var(--ng-doc-base-gutter) * 5)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-article-width, 100%);margin-left:auto;margin-right:auto;overflow:hidden}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   .ng-doc-page-controls[_ngcontent-%COMP%]{position:absolute;display:flex;grid-gap:var(--ng-doc-base-gutter);top:0;right:0}.ng-doc-fullscreen-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}"],changeDetection:0}),e);return t=S([O()],t),t})();export{Pi as a};
