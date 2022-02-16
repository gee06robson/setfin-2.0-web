var ne=Object.defineProperty,oe=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var X=(a,s,o)=>s in a?ne(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,b=(a,s)=>{for(var o in s||(s={}))ce.call(s,o)&&X(a,o,s[o]);if(Q)for(var o of Q(s))se.call(s,o)&&X(a,o,s[o]);return a},P=(a,s)=>oe(a,ae(s));import{j as Y,u as R,a as re,S as z,r as d,O as Z,L as ee,G as ie,N as le,b as V,V as de,f as A,p as w,c as W,$ as k,I as $,s as L,d as ue,R as G,e as me,g as S,B as pe,h as he}from"./vendor.1680411a.js";const xe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};xe();const _e="_homeBoxWrapper_rtr3q_1",ge="_contentHome_rtr3q_11",ve="_contentCard_rtr3q_18",De="_card_rtr3q_25",Be="_contentButton_rtr3q_61";var q={homeBoxWrapper:_e,contentHome:ge,contentCard:ve,card:De,contentButton:Be};const e=Y.exports.jsx,n=Y.exports.jsxs,fe=()=>{const a=R();return e("div",{className:q.homeBoxWrapper,children:e("div",{className:q.contentHome,children:e("div",{className:q.contentCard,children:n("div",{className:q.card,children:[e("h1",{children:"Documento"}),n("div",{className:q.contentButton,children:[e("button",{type:"button",onClick:()=>a("/financial/document/new"),children:e("span",{children:"Cadastrar"})}),e("button",{type:"button",onClick:()=>a("/financial/document/list"),children:e("span",{children:"Listar"})})]})]})})})})},be="_loginBoxWrapper_rxcbp_1",Ne="_loginContentBox_rxcbp_12",ye="_contentImageBox_rxcbp_20",Te="_contentTitle_rxcbp_30",Ee="_textMobile_rxcbp_42",Le="_contentButtonLogin_rxcbp_52",Ce="_textWeb_rxcbp_68";var O={loginBoxWrapper:be,loginContentBox:Ne,contentImageBox:ye,contentTitle:Te,textMobile:Ee,contentButtonLogin:Le,textWeb:Ce},Ie="/assets/logo.97d8351a.svg";const Fe="_containerLoading_1rxej_1",Se="_contentLoading_1rxej_14";var te={containerLoading:Fe,contentLoading:Se};const M=()=>e("div",{className:te.containerLoading,children:e("div",{className:te.contentLoading,children:e("span",{className:"animate__animated animate__flash animate__infinite animate__slow",children:"Carregando..."})})}),N=re.create({baseURL:"https://tesourariabpeb.herokuapp.com/"});const H=a=>{if(a)return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a)},J=a=>{switch(a=a.replaceAll("-",""),a=a.replaceAll(".",""),a=a.replaceAll("/",""),a.length){case 14:return"00.000.000/0000-00";case 11:return"000.000.000-00";case 6:return"000000";default:return"Error!"}},j=a=>(a=a.replace(".",""),a=a.replace(",","."),a),C=a=>{z.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",z.stopTimer),o.addEventListener("mouseleave",z.resumeTimer)}}).fire({icon:"error",title:"Ops' algo deu errado",text:a.response.data.error,position:"top"}),console.log(a.response.data.error)},Ae=(a,s)=>a.reduce((o,c,t)=>{const l=Math.floor(t/s);return o[l]=[...o[l]||[],c],o},[]),U=d.exports.createContext({});function we(a){const[s,o]=d.exports.useState(!1),[c,t]=d.exports.useState(null),[l,u]=d.exports.useState(0),x=localStorage.getItem("@financeiro:token");N.defaults.headers.common.Authorization=`Bearer ${x}`;const r=()=>{t(null),localStorage.removeItem("@financeiro:token")},h=()=>{u(l+1)};async function g(f){o(!0);const{credential:i}=f;await N.post("/user",{credential:i}).then(p=>{const{token:_,user:m}=p.data;localStorage.setItem("@financeiro:token",_),N.defaults.headers.common.Authorization=`Bearer ${_}`,t(m),o(!1)}).catch(p=>{o(!1),C(p)})}return d.exports.useEffect(()=>{(async()=>{x&&await N.get("profile").then(i=>{const{data:p}=i;t(p),o(!1)}).catch(i=>{o(!1),C(i)})})()},[localStorage,l]),n(U.Provider,{value:{signIn:g,user:c,signOut:r,updateState:h},children:[s&&e(M,{}),a.children]})}function Re(a){const[s,o]=d.exports.useState(a?"loading":"idle");return d.exports.useEffect(()=>{if(!a){o("idle");return}let c=document.querySelector(`script[src="${a}"]`);if(c)o(c.getAttribute("data-status")||"idle");else{c=document.createElement("script"),c.src=a,c.async=!0,c.setAttribute("data-status","loading"),document.body.appendChild(c);const l=u=>{!!c&&c.setAttribute("data-status",u.type==="load"?"ready":"error")};c.addEventListener("load",l),c.addEventListener("error",l)}const t=l=>{o(l.type==="load"?"ready":"error")};return c.addEventListener("load",t),c.addEventListener("error",t),()=>{c&&(c.removeEventListener("load",t),c.removeEventListener("error",t))}},[a]),s}const ke=()=>{const{VITE_GOOGLE_CLIENT_ID:a,VITE_GOOGLE_CLIENT_SCRIPT_URL:s,VITE_SCRIPT_FLAG:o}={VITE_GOOGLE_CLIENT_ID:"726684203979-1jbrnptg2rp5qn9t1elfej55r37egj23.apps.googleusercontent.com",VITE_GOOGLE_CLIENT_SCRIPT_URL:"https://accounts.google.com/gsi/client",VITE_SCRIPT_FLAG:"__GoogleOneTapScript__",VITE_API_URL:"https://tesourariabpeb.herokuapp.com/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},{signIn:c,user:t}=d.exports.useContext(U),l=s,u=o,x=Re(l),r=R(),h=g=>typeof g=="object"&&g!==null;return d.exports.useEffect(()=>{(async()=>{!(window==null?void 0:window[u])&&window.google&&x==="ready"&&!h(t)&&(await window.google.accounts.id.initialize({client_id:a,callback:c}),window[u]=!0),(window==null?void 0:window[u])&&x==="ready"&&!h(t)&&(await window.google.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large",shape:"square"}),h(t)===!1&&await window.google.accounts.id.prompt())})()},[x,window==null?void 0:window[u]]),d.exports.useEffect(()=>{h(t)===!0&&r("/financial/home")},[h(t)]),e("div",{className:O.loginBoxWrapper,children:e("div",{className:O.loginContentBox,children:n("div",{className:O.contentImageBox,children:[e("img",{src:Ie,alt:"financeiro"}),n("div",{className:O.contentTitle,children:[e("span",{children:"Batalh\xE3o de Pol\xEDcia do Ex\xE9rcito de Bras\xEDlia"}),e("span",{className:O.textWeb,children:"Sistema de G\xEArenciamento de Notas Fiscais e Faturas"}),e("span",{className:O.textMobile,children:"Setor Financeiro"})]}),e("div",{className:O.contentButtonLogin,children:h(t)===!1&&e("div",{id:"buttonDiv"})})]})})})},$e="_documentBoxWrapper_1nlro_1";var Oe={documentBoxWrapper:$e};const Me=()=>e("div",{className:Oe.documentBoxWrapper,children:e(Z,{})}),qe="_topBarBoxWrapper_aavu6_1",Ue="_contentTopBar_aavu6_12",Ve="_contentLogo_aavu6_17",je="_contentNavigate_aavu6_45",Pe="_contentDropDown_aavu6_51",ze="_contentTitleDropDown_aavu6_58",We="_contentMenuDropDown_aavu6_70",Ge="_contentUserAvatar_aavu6_97",He="_cicleAvatarUser_aavu6_104",Je="_contentMenuUserDropDown_aavu6_117",Ke="_contentUserAvatarDropDown_aavu6_131",Qe="_userNameText_aavu6_153",Xe="_contentAdminText_aavu6_162",Ye="_contentMenuUser_aavu6_117",Ze="_contentCloseButton_aavu6_198";var B={topBarBoxWrapper:qe,contentTopBar:Ue,contentLogo:Ve,contentNavigate:je,contentDropDown:Pe,contentTitleDropDown:ze,contentMenuDropDown:We,contentUserAvatar:Ge,cicleAvatarUser:He,contentMenuUserDropDown:Je,contentUserAvatarDropDown:Ke,userNameText:Qe,contentAdminText:Xe,contentMenuUser:Ye,contentCloseButton:Ze};const et=()=>{const[a,s]=d.exports.useState(!1),[o,c]=d.exports.useState(!1),{user:t,signOut:l}=d.exports.useContext(U);return e("div",{className:B.topBarBoxWrapper,children:n("div",{className:B.contentTopBar,children:[n("div",{className:`${B.contentLogo} animate__animated animate__fadeIn`,children:[(t==null?void 0:t.unity)?e("span",{children:t.unity.name}):e("strong",{className:"animate__animated  animate__flash animate__infinite",children:"carregando"}),e("span",{children:t==null?void 0:t.name})]}),e("div",{className:`${B.contentNavigate} animate__animated animate__fadeIn `,children:n("div",{className:B.contentDropDown,onClick:()=>s(!a),children:[e("div",{className:B.contentTitleDropDown,children:e("span",{children:"Documento"})}),a&&n("div",{className:B.contentMenuDropDown,onMouseLeave:()=>s(!1),children:[e(ee,{to:"/financial/document/new",children:e("span",{children:"Incluir Documento"})}),e(ee,{to:"/financial/document/list",children:e("span",{children:"Listar Documentos"})})]})]})}),(t==null?void 0:t.image_url)&&n("div",{className:B.contentUserAvatar,children:[o===!1&&e("div",{className:`${B.cicleAvatarUser} animate__animated animate__fadeIn`,onClick:()=>c(o===!1),children:e("img",{src:t==null?void 0:t.image_url,alt:t==null?void 0:t.name})}),o&&n("div",{className:`${B.contentMenuUserDropDown} animate__animated animate__bounceInDown`,children:[n("div",{className:B.contentUserAvatarDropDown,children:[e("div",{className:B.cicleAvatarUser,children:e("img",{src:t==null?void 0:t.image_url,alt:t==null?void 0:t.name})}),e("div",{className:B.userNameText,children:e("strong",{children:t.name})})]}),e("div",{className:B.contentAdminText,children:e("strong",{children:"Administrador"})}),e("div",{className:B.contentMenuUser,children:e("button",{type:"button",onClick:()=>l(),children:e("span",{children:"Sair"})})}),e("div",{className:B.contentCloseButton,children:e("button",{type:"button",onClick:()=>c(!1),children:e(ie,{size:18,color:"#312f51"})})})]})]})]})})},tt="_privateOutlet_1671p_1";var nt={privateOutlet:tt};function ot(){d.exports.useContext(U);const a=localStorage.getItem("@financeiro:token");return n("div",{className:nt.privateOutlet,children:[e(et,{}),a?e(Z,{}):e(le,{to:"/",replace:!0})]})}const at="_contentBoxListDocuments_1gio6_1",ct="_contentTitleListDocuments_1gio6_12",st="_contentDateDocument_1gio6_48",rt="_contentFilterButtons_1gio6_64",it="_contentListBox_1gio6_105",lt="_contentDocumentList_1gio6_112",dt="_cardDocument_1gio6_120",ut="_documentRedirect_1gio6_154",mt="_contentCreditor_1gio6_182",pt="_contentBarButtonForm_1gio6_199",ht="_contentFormButtons_1gio6_214";var F={contentBoxListDocuments:at,contentTitleListDocuments:ct,contentDateDocument:st,contentFilterButtons:rt,contentListBox:it,contentDocumentList:lt,cardDocument:dt,documentRedirect:ut,contentCreditor:mt,contentBarButtonForm:pt,contentFormButtons:ht};const xt=()=>{const[a,s]=d.exports.useState(!0),[o,c]=d.exports.useState(8),[t,l]=d.exports.useState([]),u=R(),{updateState:x}=d.exports.useContext(U),{handleSubmit:r,register:h,watch:g}=V({defaultValues:{id:[]}}),f=g();d.exports.useEffect(()=>{(async()=>{s(!0),await N.post("/documents",{take:o}).then(_=>{const{data:m}=_;l(m),x(),s(!1)}).catch(_=>{s(!1),C(_)})})()},[o]),d.exports.useEffect(()=>{f.id.length===0&&localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify([])),localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify(f.id))},[f.id]);const i=p=>{const{id:_}=p;localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify(_)),u("/financial/document/extract/")};return d.exports.useEffect(()=>{console.log("teste")},[]),n("div",{className:F.contentBoxListDocuments,children:[a&&e(M,{}),n("div",{className:F.contentTitleListDocuments,children:[n("div",{className:F.contentDateDocument,children:[e("h2",{children:"Documentos"}),e("span",{children:"Aqui est\xE3o listados todos os documentos cadastrados em sua subunidade"})]}),n("div",{className:F.contentFilterButtons,children:[e("button",{type:"button",onClick:()=>u("/financial/home"),children:e("span",{children:"in\xEDcio"})}),e("button",{type:"button",onClick:()=>u("/financial/document/new"),children:e("span",{children:"novo documento"})}),n("button",{type:"button",children:[e("span",{children:"Mostrando"}),n("strong",{children:[t.length," "]}),e("span",{children:"resultados"})]}),n("button",{type:"button",onClick:()=>c(o+8),children:[e(de,{size:20}),e("span",{children:"Mostrar mais"})]})]})]}),e("div",{className:F.contentListBox,children:e("div",{className:F.contentDocumentList,children:n("form",{onSubmit:r(i),autoComplete:"off",children:[t==null?void 0:t.map(p=>n("div",{className:F.cardDocument,children:[e("input",P(b({type:"checkbox"},h("id")),{value:p.id})),e("button",{type:"button",className:F.documentRedirect,onClick:()=>u(`/financial/document/success/${p.id}`),children:e("span",{children:p.number})}),n("div",{className:F.contentCreditor,children:[e("span",{children:p.creditor.code}),e("span",{children:p.creditor.name})]}),n("span",{children:[e("strong",{children:"Emiss\xE3o "}),A(w(p.emission),"dd/MM/yyyy")]}),p.due_date?n("span",{children:[e("strong",{children:"Vencimento "}),A(w(p.due_date),"dd/MM/yyyy")]}):n("span",{children:[e("strong",{children:"Vencimento "}),e("i",{children:"n\xE3o h\xE1"})]}),n("span",{children:[e("strong",{children:"Valor "}),H(p.value)]})]},p.id)),f.id.length>0&&n("div",{className:`${F.contentBarButtonForm} animate__animated  animate__fadeInUp`,children:[e("div",{className:F.contentFormButtons,children:e("button",{type:"submit",children:e("span",{children:"Extrato"})})}),e("button",{type:"button",children:e("span",{children:f.id.length})})]})]})})})]})},_t="_formsuccessNewDocumentBox_1ly2a_1",gt="_contentTitle_1ly2a_16",vt="_contentResponseData_1ly2a_35",Dt="_contentBoxDataDobleText_1ly2a_43",Bt="_contentTextBox_1ly2a_48",ft="_contentText_1ly2a_48",bt="_contentBoxButton_1ly2a_86",Nt="_contentAuthorBox_1ly2a_114",yt="_contentAuthorTextBox_1ly2a_125",Tt="_contentAuthorText_1ly2a_125",Et="_deleteButton_1ly2a_144";var v={formsuccessNewDocumentBox:_t,contentTitle:gt,contentResponseData:vt,contentBoxDataDobleText:Dt,contentTextBox:Bt,contentText:ft,contentBoxButton:bt,contentAuthorBox:Nt,contentAuthorTextBox:yt,contentAuthorText:Tt,deleteButton:Et};const Lt=()=>{const[a,s]=d.exports.useState(!0),[o,c]=d.exports.useState(null),{id:t}=W(),l=R(),u=async()=>{s(!0),await N.post("/document/delete",{id:t}).then(x=>{console.log(x.data),l(-1)}).catch(x=>{s(!1),C(x)})};return d.exports.useEffect(()=>{(async()=>{await N.get(`/select_document/${t}`).then(r=>{let h=r.data;h.emission=A(w(h.emission),"dd/MM/yyyy"),h.due_date&&(h.due_date=A(w(h.due_date),"dd/MM/yyyy")),c(h),s(!1)}).catch(r=>{s(!1),C(r)})})()},[]),d.exports.useEffect(()=>{k("#code").mask(J)},[]),a?e(M,{}):n("div",{className:v.formsuccessNewDocumentBox,children:[n("div",{className:v.contentTitle,children:[e("h2",{children:"Documento"}),n("span",{children:["Inclua impostos, altere os dados fornecidos, adicione documentos gerados no SIAFI como ",e("strong",{children:"(NS, NP, NE, OB, ...)"})]})]}),n("div",{className:v.contentResponseData,children:[n("div",{className:v.contentTextBox,children:[e("span",{children:"C\xF3digo Credor"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{id:"code",children:o==null?void 0:o.creditor.code})]})]}),n("div",{className:v.contentTextBox,children:[e("span",{children:"Raz\xE3o Credor"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.creditor.name})]})]}),n("div",{className:v.contentTextBox,children:[e("span",{children:"N\xFAmero Documento"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.number})]})]}),n("div",{className:v.contentBoxDataDobleText,children:[n("div",{className:v.contentTextBox,children:[e("span",{children:"Emiss\xE3o"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.emission})]})]}),(o==null?void 0:o.due_date)&&n("div",{className:v.contentTextBox,children:[e("span",{children:"Vencimento"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.due_date})]})]})]}),n("div",{className:v.contentTextBox,children:[e("span",{children:"Valor"}),n("div",{className:v.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:H(o==null?void 0:o.value)})]})]}),n("div",{className:v.contentBoxButton,children:[e("button",{type:"button",onClick:()=>l(-1),children:e("span",{children:"Voltar"})}),e("button",{type:"button",onClick:()=>l(`/financial/document/update/${t}`),children:e("span",{children:"Editar"})}),e("button",{type:"button",onClick:()=>l(`/financial/document/taxes/${t}`),children:e("span",{children:"Impostos"})}),e("button",{type:"button",children:e("span",{children:"DOC SIAFI"})})]})]}),e("div",{className:v.contentAuthorBox,children:e("div",{className:v.contentAuthorTextBox,children:e("div",{className:v.contentAuthorText,children:o==null?void 0:o.units.map(x=>n("span",{children:["Criado em ",e("strong",{children:A(w(x.included_in),"dd/MM/yyyy 'as' HH:mm:ss")})," por ",e("strong",{children:x.user.name})," (",e("strong",{children:x.user.email}),")"]},x.included_in))})})}),e("button",{type:"button",className:v.deleteButton,onClick:()=>u(),children:e("span",{children:"Excluir"})})]})},Ct="_formDocumentBox_1uurr_1",It="_contentTitleForm_1uurr_15",Ft="_contentTitleText_1uurr_21",St="_contentInputBox_1uurr_48",At="_contentDoubleInputBox_1uurr_55",wt="_contentBox_1uurr_62",Rt="_contentButton_1uurr_102";var I={formDocumentBox:Ct,contentTitleForm:It,contentTitleText:Ft,contentInputBox:St,contentDoubleInputBox:At,contentBox:wt,contentButton:Rt};const kt=()=>{const[a,s]=d.exports.useState(!1),[o,c]=d.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:u},reset:x,setValue:r}=V(),h=R(),g=i=>{s(!0),i.value=j(i.value),i.due_date===""&&delete i.due_date,N.post("/document",i).then(p=>{const{id:_}=p.data;x(),s(!1),h(`/financial/document/success/${_}`)}).catch(p=>{s(!1),C(p)})};d.exports.useEffect(()=>{k(".value").mask("#.##0,00",{reverse:!0}),k(".date").mask("00/00/0000")},[]);const f=async i=>{s(!0),await N.post("/select_creditor",{code:i}).then(p=>{var m;const{name:_}=p.data;c(""),r("name",_),s(!1),(m=document.getElementById("number"))==null||m.focus()}).catch(p=>{var m;const{data:_}=p.response;c(_.error),r("name",""),s(!1),(m=document.getElementById("name"))==null||m.focus()})};return n("div",{className:I.formDocumentBox,children:[a&&e(M,{}),e("div",{className:I.contentTitleForm,children:n("div",{className:I.contentTitleText,children:[e("h2",{children:"Cadastro de Documentos"}),e("span",{children:"[Nota Fiscal, Fatura]"})]})}),n("form",{onSubmit:l(g),autoComplete:"off",children:[n("div",{className:I.contentInputBox,children:[e("label",{children:"C\xF3digo Credor"}),e("input",P(b({onKeyPress:()=>c("")},t("code",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"},maxLength:{value:14,message:"m\xE1ximo 14 caracteres"},minLength:{value:6,message:"m\xEDnimo 6 caracteres"}})),{onBlur:i=>f(i.target.value)})),e(L,{errors:u,name:"code",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:I.contentInputBox,children:[n("label",{htmlFor:"name",children:["Raz\xE3o Credor ",e("i",{children:o})]}),e("input",b({id:"name"},t("name")))]}),n("div",{className:I.contentInputBox,children:[e("label",{htmlFor:"number",children:"N\xFAmero Documento"}),e("input",b({id:"number"},t("number",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"}}))),e(L,{errors:u,name:"number",render:({message:i})=>e("p",{children:i})})]}),e("div",{className:I.contentInputBox,children:n("div",{className:I.contentDoubleInputBox,children:[n("div",{className:I.contentBox,children:[e("label",{children:"Emiss\xE3o"}),e("input",b({className:"date"},t("emission",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:u,name:"emission",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:I.contentBox,children:[e("label",{children:"Vencimento"}),e("input",b({className:"date"},t("due_date",{maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:u,name:"due_date",render:({message:i})=>e("p",{children:i})})]})]})}),n("div",{className:I.contentInputBox,children:[e("label",{children:"Valor"}),e("input",b({className:"value"},t("value",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:u,name:"value",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:I.contentButton,children:[e("button",{type:"button",onClick:()=>h(-1),children:e("span",{children:"Voltar"})}),e("button",{type:"submit",children:e("span",{children:"Cadastrar"})})]})]})]})},$t="_formDocumentBox_ki8s5_1",Ot="_contentTitleForm_ki8s5_15",Mt="_contentTextBox_ki8s5_42",qt="_contentText_ki8s5_42",Ut="_contentInputBox_ki8s5_79",Vt="_contentDoubleInputBox_ki8s5_86",jt="_contentBox_ki8s5_92",Pt="_contentBoxButton_ki8s5_150";var T={formDocumentBox:$t,contentTitleForm:Ot,contentTextBox:Mt,contentText:qt,contentInputBox:Ut,contentDoubleInputBox:Vt,contentBox:jt,contentBoxButton:Pt};const zt=()=>{const{id:a}=W(),s=R(),[o,c]=d.exports.useState(!0),[t,l]=d.exports.useState(null),{register:u,handleSubmit:x,formState:{errors:r},reset:h,setValue:g}=V({defaultValues:{id:a}});d.exports.useEffect(()=>{(async()=>{await N.get(`/select_document/${a}`).then(p=>{let _=p.data;_.emission=A(w(_.emission),"dd/MM/yyyy"),_.due_date&&(_.due_date=A(w(_.due_date),"dd/MM/yyyy"),g("due_date",_.due_date)),l(_),g("number",_.number),g("emission",_.emission),g("value",Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(Number(_.value))),c(!1)}).catch(p=>{c(!1),C(p)})})()},[]);const f=async i=>{c(!0),i.value=j(i.value),i.due_date===""&&(i.due_date=null),await N.post("/document/update",i).then(()=>{h(),c(!1),s(-1)}).catch(p=>{c(!1),C(p)})};return d.exports.useEffect(()=>{k(".value").mask("#.##0,00",{reverse:!0}),k(".date").mask("00/00/0000"),k("#code").mask(J)}),n("div",{className:T.formDocumentBox,children:[o&&e(M,{}),n("div",{className:T.contentTitleForm,children:[e("h2",{children:"Alterar Documento"}),e("span",{children:"Edi\xE7\xE3o de documento"})]}),n("form",{onSubmit:x(f),autoComplete:"off",children:[n("div",{className:T.contentTextBox,children:[e("span",{children:"C\xF3digo Credor"}),n("div",{className:T.contentText,children:[e($,{color:"#4C5948"}),e("span",{id:"code",children:t==null?void 0:t.creditor.code})]})]}),n("div",{className:T.contentTextBox,children:[e("span",{children:"Raz\xE3o Credor"}),n("div",{className:T.contentText,children:[e($,{color:"#4C5948"}),e("span",{children:t==null?void 0:t.creditor.name})]})]}),n("div",{className:T.contentInputBox,children:[e("label",{htmlFor:"number",children:"N\xFAmero Documento"}),e("input",b({id:"number"},u("number",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"}}))),e(L,{errors:r,name:"number",render:({message:i})=>e("p",{children:i})})]}),e("div",{className:T.contentInputBox,children:n("div",{className:T.contentDoubleInputBox,children:[n("div",{className:T.contentBox,children:[e("label",{children:"Emiss\xE3o"}),e("input",b({className:"date"},u("emission",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:r,name:"emission",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:T.contentBox,children:[e("label",{children:"Vencimento"}),e("input",b({className:"date"},u("due_date",{maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:r,name:"due_date",render:({message:i})=>e("p",{children:i})})]})]})}),n("div",{className:T.contentInputBox,children:[e("label",{children:"Valor"}),e("input",b({className:"value"},u("value",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:r,name:"value",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:T.contentBoxButton,children:[e("button",{type:"submit",children:e("span",{children:"Confirmar"})}),e("button",{type:"button",onClick:()=>s(-1),children:e("span",{children:"Voltar"})})]})]})]})},Wt="_contentAlertExtractEmpty_azabu_1",Gt="_contentPageExtract_azabu_66",Ht="_cardDocument_azabu_75",Jt="_contentDataCreditorDocument_azabu_91",Kt="_textCreditorData_azabu_98",Qt="_contentDataDocument_azabu_125",Xt="_textDocumentData_azabu_132",Yt="_tableTaxesOnDocument_azabu_149",Zt="_textLiq_azabu_159",en="_textTotal_azabu_162";var y={contentAlertExtractEmpty:Wt,contentPageExtract:Gt,cardDocument:Ht,contentDataCreditorDocument:Jt,textCreditorData:Kt,break:"_break_azabu_113",contentDataDocument:Qt,textDocumentData:Xt,tableTaxesOnDocument:Yt,textLiq:Zt,textTotal:en};const tn=()=>{const[a,s]=d.exports.useState(!0),[o,c]=d.exports.useState([]),t=JSON.parse(localStorage.getItem("@financeiro:selectedDocuments")),l=R();return d.exports.useEffect(()=>{(async()=>{await N.post("/documents/filter",{id_documents:t}).then(x=>{const{data:r}=x;c(r),s(!1)}).catch(x=>{s(!1),C(x)})})()},[]),d.exports.useEffect(()=>{k(".code").mask(J)},[o]),n("div",{children:[a&&e(M,{}),t.length===0&&n("div",{className:y.contentAlertExtractEmpty,children:[e(ue,{size:48,color:"#915ce6"}),e("h2",{children:"Aten\xE7\xE3o"}),e("h3",{children:"Selecione os documentos para impress\xE3o do extrato"}),e("button",{type:"button",onClick:()=>l("/financial/document/list"),children:e("span",{children:"Documentos"})})]}),Ae(o,8).map((u,x)=>e("div",{className:y.contentPageExtract,children:u.map(r=>n("div",{className:y.cardDocument,onClick:()=>l(`/financial/document/success/${r.id}`),children:[e("div",{className:y.contentDataCreditorDocument,children:n("div",{className:y.textCreditorData,children:[e("span",{children:r.creditor.name}),e("span",{className:"code",children:r.creditor.code})]})}),e("div",{className:y.break}),n("div",{className:y.contentDataDocument,children:[n("div",{className:y.textDocumentData,children:[e("span",{children:"N\xFAmero"}),e("span",{children:r.number})]}),n("div",{className:y.textDocumentData,children:[e("span",{children:"Emiss\xE3o"}),e("span",{children:A(w(r.emission),"dd/MM/yyyy")})]}),r.due_date&&n("div",{className:y.textDocumentData,children:[e("span",{children:"Vencimento"}),e("span",{children:A(w(r.due_date),"dd/MM/yyyy")})]}),n("div",{className:y.textDocumentData,children:[e("span",{children:"Valor"}),e("span",{children:H(r.value)})]})]}),r.taxes&&r.taxes.length>0&&n("table",{className:y.tableTaxesOnDocument,children:[e("thead",{children:n("tr",{children:[e("th",{className:"bold",children:"C\xF3d"}),e("th",{className:"bold",children:"%"}),e("th",{className:"bold",children:"Calc"}),e("th",{className:"bold",children:"Valor"})]})}),n("tbody",{children:[r.taxes.map(h=>n("tr",{children:[e("td",{children:h.code}),e("td",{children:Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:2}).format(h.p_a/100)}),n("td",{children:[" ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(h.calculation_basis)]}),e("td",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(h.amount)})]},h.amount)),n("tr",{className:y.textTotal,children:[e("td",{colSpan:2,children:"Total"}),e("td",{colSpan:2,children:(r==null?void 0:r.taxes)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r==null?void 0:r.taxes.reduce((h,g)=>h+=+g.amount,0))})]}),n("tr",{className:y.textLiq,children:[e("td",{colSpan:2,children:"L\xEDquido"}),e("td",{colSpan:2,children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r.value-(r==null?void 0:r.taxes.reduce((h,g)=>h+=+g.amount,0)))})]})]})]})]},r.id))},x))]})},nn="_contentBoxTaxesOnDocument_jp2gq_1",on="_contentTitleForm_jp2gq_16",an="_contentTitle_jp2gq_16",cn="_contentDataDocument_jp2gq_42",sn="_boxCreditor_jp2gq_52",rn="_toBreak_jp2gq_57",ln="_boxDocument_jp2gq_63",dn="_contentTaxesData_jp2gq_83",un="_contentBoxData_jp2gq_123",mn="_contentTotal_jp2gq_148",pn="_contentFormTaxes_jp2gq_163",hn="_contentTaxesBoxInputs_jp2gq_180",xn="_contentInputBox_jp2gq_186",_n="_contentBoxButton_jp2gq_246";var D={contentBoxTaxesOnDocument:nn,contentTitleForm:on,contentTitle:an,contentDataDocument:cn,boxCreditor:sn,toBreak:rn,boxDocument:ln,contentTaxesData:dn,contentBoxData:un,contentTotal:mn,contentFormTaxes:pn,contentTaxesBoxInputs:hn,contentInputBox:xn,contentBoxButton:_n};const gn=()=>{const{id:a}=W(),s=R(),[o,c]=d.exports.useState(!0),[t,l]=d.exports.useState(null),[u,x]=d.exports.useState(0),{register:r,handleSubmit:h,formState:{errors:g},reset:f,setValue:i}=V({defaultValues:{document_id:a}});d.exports.useEffect(()=>{c(!0),(async()=>{await N.get(`/select_document/${a}`).then(E=>{const{data:K}=E;l(K),i("calculation_basis",Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(K.value)),c(!1)}).catch(E=>{c(!1),C(E)})})()},[u]),d.exports.useEffect(()=>{k(".value").mask("#.##0,00",{reverse:!0})});const p=async m=>{c(!0),m.p_a=j(m.p_a),m.calculation_basis=j(m.calculation_basis),console.log(m.calculation_basis),await N.post("/taxes/document",m).then(()=>{f(),x(u+1),c(!1)}).catch(E=>{c(!1),x(u+1),C(E)})},_=async m=>{c(!0),await N.post("/taxe/remove/document",m).then(E=>{f(),x(u+1),c(!1)}).catch(E=>{c(!1),C(E)})};return n("div",{className:D.contentBoxTaxesOnDocument,children:[o&&e(M,{}),e("div",{className:D.contentTitleForm,children:n("div",{className:D.contentTitle,children:[e("h2",{children:"Gerir Documento"}),e("span",{children:"Dedu\xE7\xF5es | Descontos | Acr\xE9scimos"})]})}),n("div",{className:D.contentDataDocument,children:[n("div",{className:D.boxCreditor,children:[e("p",{children:t==null?void 0:t.creditor.name}),e("p",{children:t==null?void 0:t.creditor.code})]}),e("div",{className:D.toBreak}),n("div",{className:D.boxDocument,children:[n("p",{children:[e("span",{children:"Documento"})," ",t==null?void 0:t.number]}),n("p",{children:[e("span",{children:"Valor"})," ",(t==null?void 0:t.value)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t==null?void 0:t.value)]}),e("p",{children:(t==null?void 0:t.taxes)&&t.taxes.length>0&&n(G.Fragment,{children:[e("span",{children:"L\xEDquido"}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.value-(t==null?void 0:t.taxes.reduce((m,E)=>m+=+E.amount,0)))})]})})]})]}),(t==null?void 0:t.taxes)&&t.taxes.length>0&&n("div",{className:D.contentTaxesData,children:[n("div",{className:D.contentTitle,children:[e("span",{children:"C\xF3digo"}),e("span",{children:"%"}),e("span",{children:"C\xE1lculo"}),e("span",{children:"Total"})]}),e("div",{className:D.contentBoxData,children:t==null?void 0:t.taxes.map(m=>n("div",{onClick:()=>_({document_id:m.document_id,taxe_id:m.taxe_id}),children:[e("span",{children:m.code}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:2}).format(m.p_a/100)}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(m.calculation_basis)}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(m.amount)})]},m.amount))}),n("div",{className:D.contentTotal,children:[e("span",{children:"Total"}),e("span",{children:(t==null?void 0:t.taxes)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t==null?void 0:t.taxes.reduce((m,E)=>m+=+E.amount,0))})]})]}),e("div",{className:D.contentFormTaxes,children:n("form",{onSubmit:h(p),autoComplete:"off",children:[n("div",{className:D.contentTaxesBoxInputs,children:[n("div",{className:D.contentInputBox,children:[e("label",{children:"C\xF3digo de Recolhimento DARF/DAR"}),e("input",b({},r("code",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},minLength:{value:4,message:"4 caracteres"},maxLength:{value:4,message:"4 caracteres"}}))),e(L,{errors:g,name:"code",render:({message:m})=>e("p",{children:m})})]}),n("div",{className:D.contentInputBox,children:[e("label",{children:"Percentual Aplicado"}),e("input",b({className:"value"},r("p_a",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:6,message:"6 caracteres ex: 100,00%"}}))),e(L,{errors:g,name:"p_a",render:({message:m})=>e("p",{children:m})})]})]}),n("div",{className:D.contentInputBox,children:[e("label",{children:"Base de C\xE1lculo"}),e("input",b({className:"value"},r("calculation_basis",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:g,name:"calculation_basis",render:({message:m})=>e("p",{children:m})})]}),n("div",{className:D.contentBoxButton,children:[e("button",{type:"button",onClick:()=>s(-1),children:e("span",{children:"VOLTAR"})}),e("button",{type:"submit",children:e("span",{children:"CADASTRAR"})})]})]})})]})},vn=()=>n(me,{children:[e(S,{path:"/",element:e(ke,{})}),n(S,{path:"/financial",element:e(ot,{}),children:[e(S,{path:"home",element:e(fe,{})}),n(S,{path:"document",element:e(Me,{}),children:[e(S,{path:"new",element:e(kt,{})}),e(S,{path:"success/:id",element:e(Lt,{})}),e(S,{path:"update/:id",element:e(zt,{})}),e(S,{path:"list",element:e(xt,{})}),e(S,{path:"taxes/:id",element:e(gn,{})}),e(S,{path:"extract",element:e(tn,{})})]})]})]}),Dn=()=>e(G.Fragment,{children:e(pe,{children:e(vn,{})})});he.render(e(G.StrictMode,{children:e(we,{children:e(Dn,{})})}),document.getElementById("root"));
