(()=>{var e={};e.id=470,e.ids=[470],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},53815:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>v,routeModule:()=>p,serverHooks:()=>l,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{GET:()=>c});var i=t(52721),u=t(91790),o=t(2149),n=t(71182),a=t(8090);async function c(e){let{searchParams:r}=new URL(e.url),t=r.get("token_hash"),s=r.get("type"),i=r.get("next")??"/signin";if(t&&s){let e=await (0,n.U)(),{error:r}=await e.auth.verifyOtp({type:s,token_hash:t});r||(0,a.redirect)(i)}(0,a.redirect)("/error")}let p=new i.AppRouteRouteModule({definition:{kind:u.RouteKind.APP_ROUTE,page:"/auth/confirm/route",pathname:"/auth/confirm",filename:"route",bundlePath:"app/auth/confirm/route"},resolvedPagePath:"/Users/prince/Documents/Github/zetoe/src/frontend/src/app/auth/confirm/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:x,serverHooks:l}=p;function v(){return(0,o.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:x})}},91106:()=>{},25610:()=>{},52721:(e,r,t)=>{"use strict";e.exports=t(44870)},71182:(e,r,t)=>{"use strict";t.d(r,{U:()=>u});var s=t(52126),i=t(13981);let u=async()=>{let e=await (0,i.UL)();return(0,s.createServerClient)(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{get:r=>e.get(r)?.value,set(r,t,s){try{e.set({name:r,value:t,...s})}catch(e){}},remove(r,t){try{e.set({name:r,value:"",...t})}catch(e){}}}})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[149,318,300,90],()=>t(53815));module.exports=s})();