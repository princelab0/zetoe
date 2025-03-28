"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3276],{13276:(e,t,a)=>{a.d(t,{SettingsModal:()=>eC});var s=a(74494),r=a(79790),l=a(54834),n=a(12261),i=a(603),o=a(61644),d=a.n(o),c=a(73585),u=a(57884),m=a(16983),f=a(71221);let x=(0,m.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(u.b,{ref:t,className:(0,f.cn)(x(),a),...r})});p.displayName=u.b.displayName;let h=r.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,f.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});h.displayName="Input";var j=a(55878),g=a(25082);let v=0,w=new Map,y=e=>{if(w.has(e))return;let t=setTimeout(()=>{w.delete(e),S({type:"REMOVE_TOAST",toastId:e})},1e6);w.set(e,t)},N=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?y(a):e.toasts.forEach(e=>{y(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},b=[],k={toasts:[]};function S(e){k=N(k,e),b.forEach(e=>{e(k)})}function _(e){let{...t}=e,a=(v=(v+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>S({type:"DISMISS_TOAST",toastId:a});return S({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||s()}}}),{id:a,dismiss:s,update:e=>S({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function C(){let[e,t]=r.useState(k);return r.useEffect(()=>(b.push(t),()=>{let e=b.indexOf(t);e>-1&&b.splice(e,1)}),[e]),{...e,toast:_,dismiss:e=>S({type:"DISMISS_TOAST",toastId:e})}}var E=a(527),A=a(21136),L=a(91800);function T(e){var t;let{profileData:a,setProfileData:l}=e,n=(0,L.useTranslations)("avatar"),i=(0,g.U)(),{toast:o}=C(),[d,u]=(0,r.useState)((null==a?void 0:a.avatar_url)||null),[m,f]=(0,r.useState)(!1),[x,v]=(0,r.useState)(""),[w,y]=(0,r.useState)(!1),[N,b]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(async()=>{y(!0);let{data:{user:e},error:t}=await i.auth.getUser();if(t||!e)console.error("Error fetching user:",null==t?void 0:t.message),b(!0);else{var a;let t=(null===(a=e.user_metadata)||void 0===a?void 0:a.avatar_url)||null;u(t),l(e=>({...e,avatar_url:t})),b(!1)}y(!1)})();let{data:e}=i.auth.onAuthStateChange((e,t)=>{if("USER_UPDATED"===e||"SIGNED_IN"===e){var a;let e=(null==t?void 0:null===(a=t.user.user_metadata)||void 0===a?void 0:a.avatar_url)||null;u(e),l(t=>({...t,avatar_url:e})),b(!1)}});return()=>{e.subscription.unsubscribe()}},[i,l]);let k=async e=>{var t;let s=null===(t=e.target.files)||void 0===t?void 0:t[0];if(s&&(null==a?void 0:a.id)){if(s.size>4194304){v(n("upload_error"));return}v(""),f(!0),y(!0);try{let e=s.name.split(".").pop(),t="".concat(a.id,"-avatar.").concat(e),r="avatars/".concat(t),{error:d}=await i.storage.from("avatars").upload(r,s,{cacheControl:"3600",upsert:!0});if(d)throw d;let{data:c}=i.storage.from("avatars").getPublicUrl(r),m="".concat(c.publicUrl,"?t=").concat(Date.now()),{error:f}=await i.auth.updateUser({data:{avatar_url:m}});if(f)throw f;u(m),l(e=>({...e,avatar_url:m})),b(!1),o({title:"Success",description:n("success_avatar_updated")})}catch(e){console.error("Error uploading avatar:",e.message),b(!0),o({title:"Error",description:n("error_avatar_update"),variant:"destructive"})}finally{f(!1),y(!1)}}},S=async()=>{if(null==a?void 0:a.id){f(!0);try{let{error:e}=await i.auth.updateUser({data:{avatar_url:null}});if(e)throw e;u(null),l(e=>({...e,avatar_url:null})),o({title:"Success",description:n("success_avatar_removed")})}catch(e){console.error("Error removing avatar:",e.message),o({title:"Error",description:n("error_avatar_remove"),variant:"destructive"})}finally{f(!1)}}};return(0,s.jsxs)("div",{className:"flex items-center gap-8 !w-full bg-transparent",children:[(0,s.jsx)("div",{className:"relative h-20 w-20",children:w?(0,s.jsx)("div",{className:"h-20 w-20 flex items-center justify-center bg-gray-200 rounded-full",children:(0,s.jsx)(E.A,{className:"h-6 w-6 animate-spin text-gray-500"})}):d&&!N?(0,s.jsx)(c.eu,{className:"h-20 w-20",children:(0,s.jsx)(c.BK,{src:d,alt:"Profile picture",onLoad:()=>{y(!1),b(!1)},onError:()=>{y(!1),b(!0)}})}):(0,s.jsx)("div",{className:"h-20 w-20 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-xl",children:(null==a?void 0:null===(t=a.full_name)||void 0===t?void 0:t.slice(0,2).toUpperCase())||"EJ"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 flex-wrap",children:[(0,s.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2",children:[(0,s.jsx)(j.$,{variant:"outline",size:"sm",asChild:!0,children:(0,s.jsxs)(p,{htmlFor:"avatar-upload",className:"cursor-pointer",children:[m?n("uploading"):n("upload_picture"),(0,s.jsx)(h,{id:"avatar-upload",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:k,disabled:m})]})}),(0,s.jsx)(j.$,{variant:"destructive",size:"sm",onClick:S,disabled:m||!(null==a?void 0:a.avatar_url),className:"".concat((null==a?void 0:a.avatar_url)?"":"cursor-not-allowed"," flex"),children:n("remove_picture")})]}),x?(0,s.jsxs)("p",{className:"text-[12px] text-red-500 mt-1 break-words flex items-center",children:[(0,s.jsx)("span",{className:"mr-1",children:(0,s.jsx)(A.A,{size:12})}),x]}):(0,s.jsx)("p",{className:"text-[12px] text-gray-500 mt-1 break-words",children:n("pick_photo_info")})]})]})}var M=a(73395),U=a(75220);let z=U.Op,D=r.createContext({}),I=e=>{let{...t}=e;return(0,s.jsx)(D.Provider,{value:{name:t.name},children:(0,s.jsx)(U.xI,{...t})})},R=()=>{let e=r.useContext(D),t=r.useContext(P),{getFieldState:a,formState:s}=(0,U.xW)(),l=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...l}},P=r.createContext({}),O=r.forwardRef((e,t)=>{let{className:a,...l}=e,n=r.useId();return(0,s.jsx)(P.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:t,className:(0,f.cn)("space-y-2",a),...l})})});O.displayName="FormItem";let F=r.forwardRef((e,t)=>{let{className:a,...r}=e,{error:l,formItemId:n}=R();return(0,s.jsx)(p,{ref:t,className:(0,f.cn)(l&&"text-destructive",a),htmlFor:n,...r})});F.displayName="FormLabel";let W=r.forwardRef((e,t)=>{let{...a}=e,{error:r,formItemId:l,formDescriptionId:n,formMessageId:i}=R();return(0,s.jsx)(M.DX,{ref:t,id:l,"aria-describedby":r?"".concat(n," ").concat(i):"".concat(n),"aria-invalid":!!r,...a})});W.displayName="FormControl",r.forwardRef((e,t)=>{let{className:a,...r}=e,{formDescriptionId:l}=R();return(0,s.jsx)("p",{ref:t,id:l,className:(0,f.cn)("text-[0.8rem] text-muted-foreground",a),...r})}).displayName="FormDescription";let V=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e,{error:n,formMessageId:i}=R(),o=n?String(null==n?void 0:n.message):r;return o?(0,s.jsx)("p",{ref:t,id:i,className:(0,f.cn)("text-[0.8rem] font-medium text-destructive",a),...l,children:o}):null});V.displayName="FormMessage";var $=a(41209),Y=a(98911),B=a(33384),G=a(26556),Z=a(92360),H=a(96056),J=a(90056),K=a(84503),q=a(22949);let X=$.Ik({fullName:$.Yj().optional(),email:$.Yj().optional().or($.eu("")).refine(e=>!e||$.Yj().email().safeParse(e).success,{message:"Invalid email format"}),password:$.KC([$.Yj().length(0),$.Yj().min(6,"Password must be at least 6 characters")]).optional()});function Q(e){let{profileData:t,setProfileData:a}=e,l=(0,g.U)(),[n,i]=(0,r.useState)(!1),[o,d]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null),[m,f]=(0,r.useState)(!1),{toast:x}=C(),p=(0,L.useTranslations)("editProfile"),v=()=>{i(!0),setTimeout(()=>{i(!1)},1500)},w=(0,U.mN)({resolver:(0,Y.u)(X),defaultValues:{fullName:(null==t?void 0:t.full_name)||"",email:(null==t?void 0:t.email)||"",password:""}});if((0,r.useEffect)(()=>{t&&w.reset({fullName:t.full_name||"",email:t.email||""})},[t,w]),(0,r.useEffect)(()=>{(async()=>{let{data:{user:e},error:t}=await l.auth.getUser();if(e){var a;u((null===(a=e.app_metadata)||void 0===a?void 0:a.provider)||"")}f(!0)})()},[]),!m)return(0,s.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,s.jsx)(q.A,{})});if("google"===c)return null;let y=async e=>{d(!0);try{if(!t)throw Error("Profile data is not available");let s={};if(e.fullName&&(s.full_name=e.fullName),e.email&&(s.email=e.email),Object.keys(s).length>0){let{error:e}=await l.from("users").update(s).eq("id",t.id);if(e)throw e;a(e=>({...e,...s}))}if(e.password){let{error:t}=await l.auth.updateUser({password:e.password});if(t)throw t}x({title:p("profileUpdated"),description:Object.keys(s).length>0&&e.password?p("profileAndPasswordUpdated"):Object.keys(s).length>0?p("profileUpdated"):p("passwordUpdated")})}catch(e){console.error("Error updating profile:",e),x({title:"Error",description:p("updateError"),variant:"destructive"})}finally{d(!1)}};return(0,s.jsx)("div",{className:"".concat("google"===c?"hidden":"w-full pl-8 "),children:(0,s.jsx)(z,{...w,children:(0,s.jsxs)("form",{onSubmit:"google"===c?void 0:w.handleSubmit(y),className:"space-y-6 w-[80%] max-w-[600px] min-w-[300px] mb-4",children:[(0,s.jsx)(I,{control:w.control,name:"fullName",render:e=>{let{field:t}=e;return(0,s.jsxs)(O,{children:[(0,s.jsx)(F,{children:p("form.name")}),(0,s.jsx)(W,{children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(B.A,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",size:18}),(0,s.jsx)(h,{...t,className:"pl-10"})]})}),(0,s.jsx)(V,{})]})}}),(0,s.jsx)(I,{control:w.control,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(O,{children:[(0,s.jsx)(F,{children:p("form.email")}),(0,s.jsx)(W,{children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(G.A,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",size:18}),(0,s.jsx)(h,{...t,type:"email",className:"pl-10"})]})}),(0,s.jsx)(V,{})]})}}),(0,s.jsx)(I,{control:w.control,name:"password",render:e=>{let{field:t}=e;return(0,s.jsxs)(O,{children:[(0,s.jsx)(F,{children:p("form.changePassword")}),(0,s.jsx)(W,{children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(Z.A,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",size:18}),(0,s.jsx)(h,{placeholder:"*******",...t,type:n?"text":"password",className:"pl-10"}),(0,s.jsx)("button",{type:"button",onClick:v,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500",children:n?(0,s.jsx)(H.A,{size:14}):(0,s.jsx)(J.A,{size:14})})]})}),(0,s.jsx)(V,{})]})}}),(0,s.jsxs)(j.$,{type:"submit",className:"flex justify-center w-auto",children:[o?(0,s.jsx)(q.A,{}):p("form.updateProfile"),(0,s.jsx)(K.A,{className:" h-4 w-4"})]})]})})})}function ee(){return(0,s.jsxs)("div",{className:"w-screen h-screen flex flex-col items-center justify-center bg-transparent",children:[(0,s.jsx)(q.A,{}),(0,s.jsx)("p",{className:"mt-4 text-gray-600 dark:text-gray-400 text-lg font-medium  animate-pulse",children:"Loading..."})]})}function et(){let[e,t]=(0,r.useState)(null),[a,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{let{data:{user:a},error:s}=await (0,g.U)().auth.getUser();if(s){console.error("Error fetching user:",s),_({title:"Error",description:"Failed to fetch user data. Please try again.",variant:"destructive"});return}!a||(null==e?void 0:e.id)||t(e=>({...e,id:a.id}));try{let{data:e,error:a}=await (0,g.U)().from("users").select("*").single();if(a)throw a;t(e)}catch(e){console.error("Error fetching profile data:",e)}finally{l(!1)}})()},[(0,g.U)().auth,t,null==e?void 0:e.id,_]),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(ee,{}),children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"w-full p-2",children:(0,s.jsx)(T,{profileData:e,setProfileData:t})}),(0,s.jsx)("div",{className:"md:w-2/3 pt-8",children:(0,s.jsx)(Q,{profileData:e,setProfileData:t})})]})})}var ea=a(63058),es=a(58283),er=a(1287),el=a(36514),en=a(93963),ei=a(33077);function eo(){let{setTheme:e,theme:t}=(0,ea.D)(),[a,l]=r.useState(t||"system");r.useEffect(()=>{l(t||"system")},[t]);let n=t=>{e(t),l(t)},i=(0,L.useTranslations)("settingsModal");return(0,s.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[(0,s.jsx)("label",{className:"text-base font-medium leading-none",children:i("general.theme")}),(0,s.jsxs)(es.rI,{children:[(0,s.jsx)(es.ty,{asChild:!0,className:"w-[160px]",children:(0,s.jsxs)(j.$,{variant:"outline",size:"lg",className:"flex  justify-between items-center px-3 py-2 gap-2 text-gray-800 dark:text-[hsl(60,4%,91%)]",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["light"===a&&(0,s.jsx)(er.A,{strokeWidth:2,className:"h-5 w-5"}),"dark"===a&&(0,s.jsx)(el.A,{strokeWidth:2,className:"h-5 w-5"}),"system"===a&&(0,s.jsx)(en.A,{strokeWidth:2,className:"h-5 w-5"}),(0,s.jsx)("span",{className:"capitalize",children:a})]}),(0,s.jsx)(ei.A,{strokeWidth:2,className:"h-5 w-5 ml-2"})]})}),(0,s.jsx)(es.SQ,{align:"end",children:["light","dark","system"].map(e=>(0,s.jsxs)(es._2,{onClick:()=>n(e),className:"flex gap-3 items-center",children:["light"===e&&(0,s.jsx)(er.A,{strokeWidth:2,size:16}),"dark"===e&&(0,s.jsx)(el.A,{strokeWidth:2,size:16}),"system"===e&&(0,s.jsx)(en.A,{strokeWidth:2,size:16}),e.charAt(0).toUpperCase()+e.slice(1)]},e))})]})]})}var ed=a(64274),ec=a(54445),eu=a(9537),em=a(51491);let ef=(0,em.createServerReference)("4084552e6bdfc0b6822047ffb804273742135ce0a7",em.callServer,void 0,em.findSourceMapURL,"createStripePortal");var ex=a(43448),ep=a(64684);function eh(e){var t,a,l,n,i;let o;let{subscription:d}=e,c=(0,L.useTranslations)("customerPortal.card"),u=(0,eu.useRouter)(),m=(0,eu.usePathname)(),[f,x]=(0,r.useState)(!1),p=d?c("descriptionSubscribed",{planName:null===(a=d.prices)||void 0===a?void 0:null===(t=a.products)||void 0===t?void 0:t.name}):c("descriptionNotSubscribed"),h=d&&new Intl.NumberFormat("en-US",{style:"currency",currency:null==d?void 0:null===(l=d.prices)||void 0===l?void 0:l.currency,minimumFractionDigits:0}).format(((null==d?void 0:null===(n=d.prices)||void 0===n?void 0:n.unit_amount)||0)/100),g=async()=>{x(!0);let e=await ef(m);return x(!1),u.push(e)};return(0,s.jsxs)(ep.Zp,{children:[(0,s.jsxs)(ep.aR,{children:[(0,s.jsx)(ep.ZB,{children:c("title")}),(0,s.jsx)(ep.BT,{children:p})]}),(0,s.jsx)(ep.Wu,{children:(0,s.jsx)("div",{className:"",children:d?(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"text-xl font-semibold",children:"".concat(h,"/").concat(null==d?void 0:null===(i=d.prices)||void 0===i?void 0:i.interval)}),(0,s.jsxs)(ep.BT,{className:"text-sm mt-1",children:[(0,s.jsx)("span",{className:"font-semibold text-neutral-600 dark:text-neutral-400",children:"Expire on:"}),(o=d.current_period_end,(0,ex.GP)(new Date(o),"MMM dd, yyyy 'at' hh:mm:ss a"))]})]}):(0,s.jsx)(j.$,{variant:"outline",onClick:()=>{window.location.href="/subscriptions"},children:c("choosePlan")})})}),(0,s.jsx)(ep.wL,{children:(0,s.jsx)("div",{className:"flex flex-col items-start justify-between sm:flex-row sm:items-center",children:d&&(0,s.jsx)(j.$,{variant:"default",disabled:f,onClick:g,children:c("manageSubscription")})})})]})}var ej=a(27375);let eg=(0,em.createServerReference)("4083467d242aeff4847b182036363309dceed58a07",em.callServer,void 0,em.findSourceMapURL,"default");var ev=a(62256),ew=a(39274);function ey(){let e=(0,L.useTranslations)("settingsModal"),[t,a]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{let e=await (0,ev.getCookie)("language");e&&a(e)})()},[]);let l=async e=>{a(e),await eg(e)};return(0,s.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[(0,s.jsx)("label",{className:"text-base font-medium leading-none",children:e("general.language")}),(0,s.jsxs)(ew.l6,{onValueChange:e=>l(e),value:t,children:[(0,s.jsx)(ew.bq,{className:"w-[160px] h-10 ",children:(0,s.jsx)(ew.yv,{placeholder:e("general.selectLanguage")})}),(0,s.jsxs)(ew.gC,{children:[(0,s.jsx)(ew.eb,{value:"en",children:e("general.selectOptions.english")}),(0,s.jsx)(ew.eb,{value:"np",children:e("general.selectOptions.nepali")})]})]})]})}var eN=a(96231);let eb=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(eN.bL,{className:(0,f.cn)("peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full  shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input",a),...r,ref:t,children:(0,s.jsx)(eN.zi,{className:(0,f.cn)("pointer-events-none block h-4 w-4 rounded-full shadow-lg transition-transform","data-[state=checked]:translate-x-6 data-[state=checked]:bg-blue-400 data-[state=checked]:ring-2 data-[state=checked]:ring-blue-400","data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-gray-300 data-[state=unchecked]:ring-2 data-[state=unchecked]:ring-gray-300")})})});eb.displayName=eN.bL.displayName;var ek=a(56545);function eS(){let e=(0,L.useTranslations)("settingsModal"),{isWidgetVisible:t,toggleWidgetVisibility:a}=(0,ek.ZS)();return(0,s.jsxs)("div",{className:"flex items-center  justify-between",children:[(0,s.jsx)(p,{htmlFor:"widget-toggle",className:"text-base font-medium leading-none",children:e("general.widgets")}),(0,s.jsx)("div",{className:"w-[10rem] px-2 py-3",children:(0,s.jsx)(eb,{id:"widget-toggle",checked:t,onCheckedChange:a})})]})}function e_(e){let{currentView:t,setCurrentView:a}=e,r=(0,L.useTranslations)("settingsModal"),l=(e,t)=>{e.preventDefault(),window.location.hash=t,a("#setting/profile"===t?"profile":"#setting/general"===t?"general":"subscriptions")};return(0,s.jsx)("div",{className:"md:w-[200px] flex-shrink-0 overflow-x-hidden",children:(0,s.jsxs)("div",{className:"flex md:flex-col space-x-2 md:space-x-0 md:space-y-1 p-2 md:p-0",children:[(0,s.jsx)(j.$,{variant:"".concat("general"===t?"secondary":"ghost"),className:"justify-start px-2",size:"lg",onClick:e=>l(e,"#setting/general"),children:r("tabs.general")}),(0,s.jsx)(j.$,{variant:"".concat("profile"===t?"secondary":"ghost"),className:"justify-start px-2",size:"lg",onClick:e=>l(e,"#setting/profile"),children:r("tabs.profile")}),(0,s.jsx)(j.$,{variant:"".concat("subscriptions"===t?"secondary":"ghost"),className:"justify-start px-2",size:"lg",onClick:e=>l(e,"#setting/subscriptions"),children:r("tabs.subscriptions")})]})})}let eC=(0,r.forwardRef)(function(e,t){let a=(0,L.useTranslations)("settingsModal"),[o,c]=(0,r.useState)("general"),[u,m]=(0,r.useState)(!1),[f,x]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{let e=(0,g.U)(),[t]=await Promise.all([(0,ej.uV)(e)]);x(t)})()},[]),(0,r.useEffect)(()=>(u?window.history.pushState(null,"","#settings"):window.history.pushState(null,"","/"),()=>{"#settings"===window.location.hash&&window.history.pushState(null,"","/")}),[u]),(0,s.jsxs)(l.lG,{open:u,onOpenChange:m,children:[(0,s.jsx)(l.zM,{asChild:!0,children:(0,s.jsxs)(d(),{href:"#settings",className:"w-full flex justify-start px-2 py-3  items-center gap-2  relative text-gray-600 dark:text-[hsl(60,4%,91%)]  hover:cursor-pointer transition-all hover:bg-neutral-100  dark:hover:bg-neutral-800",children:[(0,s.jsx)(ed.A,{className:"w-5 h-5 text-inherit dark:text-[hsl(60,4%,91%)]"}),(0,s.jsx)("span",{children:a("link")})]})}),(0,s.jsxs)(l.Cf,{className:"lg:max-w-[75%]  max-w-[90%] h-[90vh] flex flex-col rounded-2xl",children:[(0,s.jsxs)(l.c7,{className:"flex flex-row justify-between items-center",children:[(0,s.jsx)(l.L3,{children:a("dialogTitle")}),(0,s.jsx)(ec.rr,{children:" "})]}),(0,s.jsx)(i.w,{orientation:"horizontal",className:""}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row flex-1 gap-4 overflow-hidden",children:[(0,s.jsx)(e_,{currentView:o,setCurrentView:c}),(0,s.jsx)(i.w,{orientation:"vertical",className:"hidden md:block"}),(0,s.jsx)(n.F,{className:"flex-1",children:(0,s.jsxs)("div",{className:"space-y-6",children:["general"===o&&(0,s.jsxs)("div",{className:" p-2 space-y-6 w-[90%]",children:[(0,s.jsx)(eo,{}),(0,s.jsx)(ey,{}),(0,s.jsx)(eS,{})]}),"profile"===o&&(0,s.jsx)(et,{}),"subscriptions"===o&&(0,s.jsx)(eh,{subscription:f})]})})]})]})]})})},22949:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(74494);function r(){return(0,s.jsxs)("svg",{className:"h-8 w-8 animate-spin text-gray-900 dark:text-gray-50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M12 4.75V6.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17.1475 6.8525L16.0625 7.9375",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M19.25 12H17.75",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17.1475 17.1475L16.0625 16.0625",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17.75V19.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.8525 17.1475L7.9375 16.0625",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4.75 12H6.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.8525 6.8525L7.9375 7.9375",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}},54834:(e,t,a)=>{a.d(t,{Cf:()=>m,L3:()=>x,c7:()=>f,lG:()=>o,rr:()=>p,zM:()=>d});var s=a(74494),r=a(79790),l=a(54445),n=a(80129),i=a(71221);let o=l.bL,d=l.l9,c=l.ZL;l.bm;let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hJ,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});u.displayName=l.hJ.displayName;let m=r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(l.UC,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:[r,(0,s.jsxs)(l.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(n.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=l.UC.displayName;let f=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};f.displayName="DialogHeader";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hE,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});x.displayName=l.hE.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.VY,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});p.displayName=l.VY.displayName},12261:(e,t,a)=>{a.d(t,{F:()=>i});var s=a(74494),r=a(79790),l=a(19076),n=a(71221);let i=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(l.bL,{ref:t,className:(0,n.cn)("relative overflow-hidden",a),...i,children:[(0,s.jsx)(l.LM,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(o,{}),(0,s.jsx)(l.OK,{})]})});i.displayName=l.bL.displayName;let o=r.forwardRef((e,t)=>{let{className:a,orientation:r="vertical",...i}=e;return(0,s.jsx)(l.VM,{ref:t,orientation:r,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...i,children:(0,s.jsx)(l.lr,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.VM.displayName}}]);