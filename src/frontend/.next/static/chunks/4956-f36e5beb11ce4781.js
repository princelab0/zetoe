(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4956],{88691:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(94428).A)("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]])},13121:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(94428).A)("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},69371:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(94428).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},16505:(e,t,r)=>{"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{default:()=>s});var i=r(79790),a=r(10485);function s(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return i.createElement(a.IntlProvider,n({locale:t},r))}},91780:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var n=r(92475),i=r.n(n)},92475:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return o}});let n=r(9812),i=r(54269),a=r(47757),s=n._(r(9399));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=a.Image},15075:e=>{e.exports={style:{fontFamily:"'JetBrains Mono', 'JetBrains Mono Fallback'",fontStyle:"normal"},className:"__className_3c557b",variable:"__variable_3c557b"}},81120:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_3a0388",variable:"__variable_3a0388"}},26186:(e,t,r)=>{"use strict";r.d(t,{Kq:()=>X,LM:()=>Y,VY:()=>ee,bL:()=>J,bm:()=>er,hE:()=>$,rc:()=>et});var n=r(79790),i=r(66891),a=r(50174),s=r(53262),o=r(9645),u=r(22466),l=r(43108),c=r(79374),d=r(85347),h=r(17353),p=r(86347),f=r(89083),v=r(53417),y=r(50868),m=r(74494),g="ToastProvider",[w,b,x]=(0,o.N)("Toast"),[C,E]=(0,u.A)("Toast",[x]),[P,T]=C(g),O=e=>{let{__scopeToast:t,label:r="Notification",duration:i=5e3,swipeDirection:a="right",swipeThreshold:s=50,children:o}=e,[u,l]=n.useState(null),[c,d]=n.useState(0),h=n.useRef(!1),p=n.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(g,"`. Expected non-empty `string`.")),(0,m.jsx)(w.Provider,{scope:t,children:(0,m.jsx)(P,{scope:t,label:r,duration:i,swipeDirection:a,swipeThreshold:s,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:n.useCallback(()=>d(e=>e+1),[]),onToastRemove:n.useCallback(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:o})})};O.displayName=g;var j="ToastViewport",k=["F8"],R="toast.viewportPause",D="toast.viewportResume",S=n.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:i=k,label:a="Notifications ({hotkey})",...o}=e,u=T(j,r),c=b(r),d=n.useRef(null),p=n.useRef(null),f=n.useRef(null),v=n.useRef(null),y=(0,s.s)(t,v,u.onViewportChange),g=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=u.toastCount>0;n.useEffect(()=>{let e=e=>{var t;0!==i.length&&i.every(t=>e[t]||e.code===t)&&(null===(t=v.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),n.useEffect(()=>{let e=d.current,t=v.current;if(x&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(R);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(D);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[x,u.isClosePausedRef]);let C=n.useCallback(e=>{let{tabbingDirection:t}=e,r=c().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[c]);return n.useEffect(()=>{let e=v.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,i,a;let r=document.activeElement,s=t.shiftKey;if(t.target===e&&s){null===(n=p.current)||void 0===n||n.focus();return}let o=C({tabbingDirection:s?"backwards":"forwards"}),u=o.findIndex(e=>e===r);W(o.slice(u+1))?t.preventDefault():s?null===(i=p.current)||void 0===i||i.focus():null===(a=f.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,C]),(0,m.jsxs)(l.lg,{ref:d,role:"region","aria-label":a.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&(0,m.jsx)(M,{ref:p,onFocusFromOutsideViewport:()=>{W(C({tabbingDirection:"forwards"}))}}),(0,m.jsx)(w.Slot,{scope:r,children:(0,m.jsx)(h.sG.ol,{tabIndex:-1,...o,ref:y})}),x&&(0,m.jsx)(M,{ref:f,onFocusFromOutsideViewport:()=>{W(C({tabbingDirection:"backwards"}))}})]})});S.displayName=j;var A="ToastFocusProxy",M=n.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,a=T(A,r);return(0,m.jsx)(y.s,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=a.viewport)||void 0===t?void 0:t.contains(r))||n()}})});M.displayName=A;var q="Toast",L=n.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:i,onOpenChange:s,...o}=e,[u=!0,l]=(0,f.i)({prop:n,defaultProp:i,onChange:s});return(0,m.jsx)(d.C,{present:r||u,children:(0,m.jsx)(Q,{open:u,...o,ref:t,onClose:()=>l(!1),onPause:(0,p.c)(e.onPause),onResume:(0,p.c)(e.onResume),onSwipeStart:(0,a.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,a.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),l(!1)})})})});L.displayName=q;var[N,F]=C(q,{onClose(){}}),Q=n.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:u,open:c,onClose:d,onEscapeKeyDown:f,onPause:v,onResume:y,onSwipeStart:g,onSwipeMove:b,onSwipeCancel:x,onSwipeEnd:C,...E}=e,P=T(q,r),[O,j]=n.useState(null),k=(0,s.s)(t,e=>j(e)),S=n.useRef(null),A=n.useRef(null),M=u||P.duration,L=n.useRef(0),F=n.useRef(M),Q=n.useRef(0),{onToastAdd:_,onToastRemove:K}=P,H=(0,p.c)(()=>{var e;(null==O?void 0:O.contains(document.activeElement))&&(null===(e=P.viewport)||void 0===e||e.focus()),d()}),B=n.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(Q.current),L.current=new Date().getTime(),Q.current=window.setTimeout(H,e))},[H]);n.useEffect(()=>{let e=P.viewport;if(e){let t=()=>{B(F.current),null==y||y()},r=()=>{let e=new Date().getTime()-L.current;F.current=F.current-e,window.clearTimeout(Q.current),null==v||v()};return e.addEventListener(R,r),e.addEventListener(D,t),()=>{e.removeEventListener(R,r),e.removeEventListener(D,t)}}},[P.viewport,M,v,y,B]),n.useEffect(()=>{c&&!P.isClosePausedRef.current&&B(M)},[c,M,P.isClosePausedRef,B]),n.useEffect(()=>(_(),()=>K()),[_,K]);let G=n.useMemo(()=>O?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(O):null,[O]);return P.viewport?(0,m.jsxs)(m.Fragment,{children:[G&&(0,m.jsx)(I,{__scopeToast:r,role:"status","aria-live":"foreground"===o?"assertive":"polite","aria-atomic":!0,children:G}),(0,m.jsx)(N,{scope:r,onClose:H,children:i.createPortal((0,m.jsx)(w.ItemSlot,{scope:r,children:(0,m.jsx)(l.bL,{asChild:!0,onEscapeKeyDown:(0,a.m)(f,()=>{P.isFocusedToastEscapeKeyDownRef.current||H(),P.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,m.jsx)(h.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":P.swipeDirection,...E,ref:k,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.m)(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(P.isFocusedToastEscapeKeyDownRef.current=!0,H()))}),onPointerDown:(0,a.m)(e.onPointerDown,e=>{0===e.button&&(S.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.m)(e.onPointerMove,e=>{if(!S.current)return;let t=e.clientX-S.current.x,r=e.clientY-S.current.y,n=!!A.current,i=["left","right"].includes(P.swipeDirection),a=["left","up"].includes(P.swipeDirection)?Math.min:Math.max,s=i?a(0,t):0,o=i?0:a(0,r),u="touch"===e.pointerType?10:2,l={x:s,y:o},c={originalEvent:e,delta:l};n?(A.current=l,Z("toast.swipeMove",b,c,{discrete:!1})):U(l,P.swipeDirection,u)?(A.current=l,Z("toast.swipeStart",g,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(S.current=null)}),onPointerUp:(0,a.m)(e.onPointerUp,e=>{let t=A.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),A.current=null,S.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};U(t,P.swipeDirection,P.swipeThreshold)?Z("toast.swipeEnd",C,n,{discrete:!0}):Z("toast.swipeCancel",x,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),P.viewport)})]}):null}),I=e=>{let{__scopeToast:t,children:r,...i}=e,a=T(q,t),[s,o]=n.useState(!1),[u,l]=n.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,p.c)(e);(0,v.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),n.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,m.jsx)(c.Z,{asChild:!0,children:(0,m.jsx)(y.s,{...i,children:s&&(0,m.jsxs)(m.Fragment,{children:[a.label," ",r]})})})},_=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,m.jsx)(h.sG.div,{...n,ref:t})});_.displayName="ToastTitle";var K=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,m.jsx)(h.sG.div,{...n,ref:t})});K.displayName="ToastDescription";var H="ToastAction",B=n.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,m.jsx)(z,{altText:r,asChild:!0,children:(0,m.jsx)(V,{...n,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(H,"`. Expected non-empty `string`.")),null)});B.displayName=H;var G="ToastClose",V=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,i=F(G,r);return(0,m.jsx)(z,{asChild:!0,children:(0,m.jsx)(h.sG.button,{type:"button",...n,ref:t,onClick:(0,a.m)(e.onClick,i.onClose)})})});V.displayName=G;var z=n.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...i}=e;return(0,m.jsx)(h.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function Z(e,t,r,n){let{discrete:i}=n,a=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),i?(0,h.hO)(a,s):a.dispatchEvent(s)}var U=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),i=Math.abs(e.y),a=n>i;return"left"===t||"right"===t?a&&n>r:!a&&i>r};function W(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var X=O,Y=S,J=L,$=_,ee=K,et=B,er=V},3424:(e,t,r)=>{"use strict";r.d(t,{Kq:()=>H,UC:()=>z,ZL:()=>V,bL:()=>B,l9:()=>G});var n=r(79790),i=r(50174),a=r(53262),s=r(22466),o=r(43108),u=r(62743),l=r(79397),c=r(79374),d=r(85347),h=r(17353),p=r(73395),f=r(89083),v=r(50868),y=r(74494),[m,g]=(0,s.A)("Tooltip",[l.Bk]),w=(0,l.Bk)(),b="TooltipProvider",x="tooltip.open",[C,E]=m(b),P=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:i=300,disableHoverableContent:a=!1,children:s}=e,[o,u]=n.useState(!0),l=n.useRef(!1),c=n.useRef(0);return n.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,y.jsx)(C,{scope:t,isOpenDelayed:o,delayDuration:r,onOpen:n.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),i)},[i]),isPointerInTransitRef:l,onPointerInTransitChange:n.useCallback(e=>{l.current=e},[]),disableHoverableContent:a,children:s})};P.displayName=b;var T="Tooltip",[O,j]=m(T),k=e=>{let{__scopeTooltip:t,children:r,open:i,defaultOpen:a=!1,onOpenChange:s,disableHoverableContent:o,delayDuration:c}=e,d=E(T,e.__scopeTooltip),h=w(t),[p,v]=n.useState(null),m=(0,u.B)(),g=n.useRef(0),b=null!=o?o:d.disableHoverableContent,C=null!=c?c:d.delayDuration,P=n.useRef(!1),[j=!1,k]=(0,f.i)({prop:i,defaultProp:a,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(x))):d.onClose(),null==s||s(e)}}),R=n.useMemo(()=>j?P.current?"delayed-open":"instant-open":"closed",[j]),D=n.useCallback(()=>{window.clearTimeout(g.current),g.current=0,P.current=!1,k(!0)},[k]),S=n.useCallback(()=>{window.clearTimeout(g.current),g.current=0,k(!1)},[k]),A=n.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>{P.current=!0,k(!0),g.current=0},C)},[C,k]);return n.useEffect(()=>()=>{g.current&&(window.clearTimeout(g.current),g.current=0)},[]),(0,y.jsx)(l.bL,{...h,children:(0,y.jsx)(O,{scope:t,contentId:m,open:j,stateAttribute:R,trigger:p,onTriggerChange:v,onTriggerEnter:n.useCallback(()=>{d.isOpenDelayed?A():D()},[d.isOpenDelayed,A,D]),onTriggerLeave:n.useCallback(()=>{b?S():(window.clearTimeout(g.current),g.current=0)},[S,b]),onOpen:D,onClose:S,disableHoverableContent:b,children:r})})};k.displayName=T;var R="TooltipTrigger",D=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...s}=e,o=j(R,r),u=E(R,r),c=w(r),d=n.useRef(null),p=(0,a.s)(t,d,o.onTriggerChange),f=n.useRef(!1),v=n.useRef(!1),m=n.useCallback(()=>f.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),(0,y.jsx)(l.Mz,{asChild:!0,...c,children:(0,y.jsx)(h.sG.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...s,ref:p,onPointerMove:(0,i.m)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||u.isPointerInTransitRef.current||(o.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,i.m)(e.onPointerLeave,()=>{o.onTriggerLeave(),v.current=!1}),onPointerDown:(0,i.m)(e.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:(0,i.m)(e.onFocus,()=>{f.current||o.onOpen()}),onBlur:(0,i.m)(e.onBlur,o.onClose),onClick:(0,i.m)(e.onClick,o.onClose)})})});D.displayName=R;var S="TooltipPortal",[A,M]=m(S,{forceMount:void 0}),q=e=>{let{__scopeTooltip:t,forceMount:r,children:n,container:i}=e,a=j(S,t);return(0,y.jsx)(A,{scope:t,forceMount:r,children:(0,y.jsx)(d.C,{present:r||a.open,children:(0,y.jsx)(c.Z,{asChild:!0,container:i,children:n})})})};q.displayName=S;var L="TooltipContent",N=n.forwardRef((e,t)=>{let r=M(L,e.__scopeTooltip),{forceMount:n=r.forceMount,side:i="top",...a}=e,s=j(L,e.__scopeTooltip);return(0,y.jsx)(d.C,{present:n||s.open,children:s.disableHoverableContent?(0,y.jsx)(_,{side:i,...a,ref:t}):(0,y.jsx)(F,{side:i,...a,ref:t})})}),F=n.forwardRef((e,t)=>{let r=j(L,e.__scopeTooltip),i=E(L,e.__scopeTooltip),s=n.useRef(null),o=(0,a.s)(t,s),[u,l]=n.useState(null),{trigger:c,onClose:d}=r,h=s.current,{onPointerInTransitChange:p}=i,f=n.useCallback(()=>{l(null),p(!1)},[p]),v=n.useCallback((e,t)=>{let r=e.currentTarget,n={x:e.clientX,y:e.clientY},i=function(e,t){let r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(r,n,i,a)){case a:return"left";case i:return"right";case r:return"top";case n:return"bottom";default:throw Error("unreachable")}}(n,r.getBoundingClientRect());l(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x))t.pop();else break}t.push(n)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let n=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(n.y-t.y)>=(e.y-t.y)*(n.x-t.x))r.pop();else break}r.push(n)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return n}(n,i),...function(e){let{top:t,right:r,bottom:n,left:i}=e;return[{x:i,y:t},{x:r,y:t},{x:r,y:n},{x:i,y:n}]}(t.getBoundingClientRect())])),p(!0)},[p]);return n.useEffect(()=>()=>f(),[f]),n.useEffect(()=>{if(c&&h){let e=e=>v(e,h),t=e=>v(e,c);return c.addEventListener("pointerleave",e),h.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),h.removeEventListener("pointerleave",t)}}},[c,h,v,f]),n.useEffect(()=>{if(u){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},n=(null==c?void 0:c.contains(t))||(null==h?void 0:h.contains(t)),i=!function(e,t){let{x:r,y:n}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let s=t[e].x,o=t[e].y,u=t[a].x,l=t[a].y;o>n!=l>n&&r<(u-s)*(n-o)/(l-o)+s&&(i=!i)}return i}(r,u);n?f():i&&(f(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,h,u,d,f]),(0,y.jsx)(_,{...e,ref:o})}),[Q,I]=m(T,{isInside:!1}),_=n.forwardRef((e,t)=>{let{__scopeTooltip:r,children:i,"aria-label":a,onEscapeKeyDown:s,onPointerDownOutside:u,...c}=e,d=j(L,r),h=w(r),{onClose:f}=d;return n.useEffect(()=>(document.addEventListener(x,f),()=>document.removeEventListener(x,f)),[f]),n.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&f()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,f]),(0,y.jsx)(o.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:f,children:(0,y.jsxs)(l.UC,{"data-state":d.stateAttribute,...h,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,y.jsx)(p.xV,{children:i}),(0,y.jsx)(Q,{scope:r,isInside:!0,children:(0,y.jsx)(v.b,{id:d.contentId,role:"tooltip",children:a||i})})]})})});N.displayName=L;var K="TooltipArrow";n.forwardRef((e,t)=>{let{__scopeTooltip:r,...n}=e,i=w(r);return I(K,r).isInside?null:(0,y.jsx)(l.i3,{...i,...n,ref:t})}).displayName=K;var H=P,B=k,G=D,V=q,z=N},23585:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,s:()=>s});var n=r(27738),i=r(50131),a=r(51043),s=class extends i.k{#e;#t;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||o(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#t.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){this.#r=(0,a.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#n({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});let t="pending"===this.state.status,r=!this.#r.canStart();try{if(!t){this.#n({type:"pending",variables:e,isPaused:r}),await this.#t.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#n({type:"pending",context:t,variables:e,isPaused:r})}let n=await this.#r.start();return await this.#t.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#t.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#n({type:"success",data:n}),n}catch(t){try{throw await this.#t.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#t.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#n({type:"error",error:t})}}finally{this.#t.runNext(this)}}#n(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.j.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},60918:(e,t,r)=>{"use strict";r.d(t,{E:()=>v});var n=r(45515),i=r(56318),a=r(27738),s=r(60867),o=class extends s.Q{constructor(e={}){super(),this.config=e,this.#i=new Map}#i;build(e,t,r){let a=t.queryKey,s=t.queryHash??(0,n.F$)(a,t),o=this.get(s);return o||(o=new i.X({client:e,queryKey:a,queryHash:s,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(a)}),this.add(o)),o}add(e){this.#i.has(e.queryHash)||(this.#i.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#i.get(e.queryHash);t&&(e.destroy(),t===e&&this.#i.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){a.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#i.get(e)}getAll(){return[...this.#i.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n.MK)(e,t)):t}notify(e){a.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){a.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){a.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(23585),l=class extends s.Q{constructor(e={}){super(),this.config=e,this.#a=new Set,this.#s=new Map,this.#o=0}#a;#s;#o;build(e,t,r){let n=new u.s({mutationCache:this,mutationId:++this.#o,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#a.add(e);let t=c(e);if("string"==typeof t){let r=this.#s.get(t);r?r.push(e):this.#s.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#a.delete(e)){let t=c(e);if("string"==typeof t){let r=this.#s.get(t);if(r){if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#s.delete(t)}}}this.notify({type:"removed",mutation:e})}canRun(e){let t=c(e);if("string"!=typeof t)return!0;{let r=this.#s.get(t),n=r?.find(e=>"pending"===e.state.status);return!n||n===e}}runNext(e){let t=c(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#s.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){a.j.batch(()=>{this.#a.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#a.clear(),this.#s.clear()})}getAll(){return Array.from(this.#a)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.nJ)(e,t))}notify(e){a.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return a.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.lQ))))}};function c(e){return e.options.scope?.id}var d=r(34009),h=r(88976);function p(e){return{onFetch:(t,r)=>{let i=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,s=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,c=async()=>{let r=!1,c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?r=!0:t.signal.addEventListener("abort",()=>{r=!0}),t.signal)})},d=(0,n.ZM)(t.options,t.fetchOptions),h=async(e,i,a)=>{if(r)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let s={client:t.client,queryKey:t.queryKey,pageParam:i,direction:a?"backward":"forward",meta:t.options.meta};c(s);let o=await d(s),{maxPages:u}=t.options,l=a?n.ZZ:n.y9;return{pages:l(e.pages,o,u),pageParams:l(e.pageParams,i,u)}};if(a&&s.length){let e="backward"===a,t={pages:s,pageParams:o},r=(e?function(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}:f)(i,t);u=await h(t,r,e)}else{let t=e??s.length;do{let e=0===l?o[0]??i.initialPageParam:f(i,u);if(l>0&&null==e)break;u=await h(u,e),l++}while(l<t)}return u};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=c}}}function f(e,{pages:t,pageParams:r}){let n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}var v=class{#u;#t;#l;#c;#d;#h;#p;#f;constructor(e={}){this.#u=e.queryCache||new o,this.#t=e.mutationCache||new l,this.#l=e.defaultOptions||{},this.#c=new Map,this.#d=new Map,this.#h=0}mount(){this.#h++,1===this.#h&&(this.#p=d.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#u.onFocus())}),this.#f=h.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#u.onOnline())}))}unmount(){this.#h--,0===this.#h&&(this.#p?.(),this.#p=void 0,this.#f?.(),this.#f=void 0)}isFetching(e){return this.#u.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#u.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#u.build(this,t),i=r.state.data;return void 0===i?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,n.d2)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return this.#u.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),a=this.#u.get(i.queryHash),s=a?.state.data,o=(0,n.Zw)(t,s);if(void 0!==o)return this.#u.build(this,i).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return a.j.batch(()=>this.#u.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#u.get(t.queryHash)?.state}removeQueries(e){let t=this.#u;a.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#u,n={type:"active",...e};return a.j.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(a.j.batch(()=>this.#u.findAll(e).map(e=>e.cancel(r)))).then(n.lQ).catch(n.lQ)}invalidateQueries(e,t={}){return a.j.batch(()=>{if(this.#u.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let r={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(a.j.batch(()=>this.#u.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#u.build(this,t);return r.isStaleByTime((0,n.d2)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.lQ).catch(n.lQ)}fetchInfiniteQuery(e){return e.behavior=p(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ)}ensureInfiniteQueryData(e){return e.behavior=p(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return h.t.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#u}getMutationCache(){return this.#t}getDefaultOptions(){return this.#l}setDefaultOptions(e){this.#l=e}setQueryDefaults(e,t){this.#c.set((0,n.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.Cp)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#d.set((0,n.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#d.values()],r={};return t.forEach(t=>{(0,n.Cp)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#l.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===n.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#l.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#u.clear(),this.#t.clear()}}},39165:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var n=function(){return null}},53194:(e,t,r)=>{"use strict";r.d(t,{Analytics:()=>l});var n=r(79790),i=r(5183),a=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.vaq=window.vaq||[]).push(t)})};function s(){return"undefined"!=typeof window}function o(){return"production"}function u(){return"development"===((s()?window.vam:o())||"production")}function l(e){return(0,n.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,n.useEffect)(()=>{var t;!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!s())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=o();return}window.vam=e})(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let r=t.scriptSrc?t.scriptSrc:u()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?"".concat(t.basePath,"/insights/script.js"):"/_vercel/insights/script.js";if(document.head.querySelector('script[src*="'.concat(r,'"]')))return;let n=document.createElement("script");n.src=r,n.defer=!0,n.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),n.dataset.sdkv="1.5.0",t.disableAutoTrack&&(n.dataset.disableAutoTrack="1"),t.endpoint?n.dataset.endpoint=t.endpoint:t.basePath&&(n.dataset.endpoint="".concat(t.basePath,"/insights")),t.dsn&&(n.dataset.dsn=t.dsn),n.onerror=()=>{let e=u()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(r,". ").concat(e))},u()&&!1===t.debug&&(n.dataset.debug="false"),document.head.appendChild(n)}({framework:e.framework||"react",basePath:null!==(t=e.basePath)&&void 0!==t?t:function(){if(void 0!==i&&void 0!==i.env)return i.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,n.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:r,path:n}=e;null==(t=window.va)||t.call(window,"pageview",{route:r,path:n})}({route:e.route,path:e.path})},[e.route,e.path]),null}},45104:(e,t,r)=>{"use strict";r.d(t,{k5:()=>c});var n=r(79790),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),s=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,o({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:i,size:a,title:u}=e,c=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(i)}}}]);