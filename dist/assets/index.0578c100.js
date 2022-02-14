var ne=Object.defineProperty,oe=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var X=(a,c,o)=>c in a?ne(a,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[c]=o,N=(a,c)=>{for(var o in c||(c={}))ce.call(c,o)&&X(a,o,c[o]);if(Q)for(var o of Q(c))se.call(c,o)&&X(a,o,c[o]);return a},j=(a,c)=>oe(a,ae(c));import{j as Y,a as re,S as P,r as d,L as W,O as Z,G as ie,N as le,u as O,b as q,f as k,p as A,c as z,$ as w,I as R,s as L,V as de,R as G,d as me,e as S,B as ue,g as pe}from"./vendor.f43e9601.js";const he=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};he();const xe="_homeBoxWrapper_16g9p_1",_e="_contentHome_16g9p_12";var ee={homeBoxWrapper:xe,contentHome:_e};const e=Y.exports.jsx,n=Y.exports.jsxs,ge=()=>e("div",{className:ee.homeBoxWrapper,children:e("div",{className:ee.contentHome})}),De="_loginBoxWrapper_1czhg_1",ve="_loginContentBox_1czhg_12",Be="_contentImageBox_1czhg_20",fe="_contentTitle_1czhg_30",Ne="_contentButtonLogin_1czhg_41";var M={loginBoxWrapper:De,loginContentBox:ve,contentImageBox:Be,contentTitle:fe,contentButtonLogin:Ne},be="/assets/logo.97d8351a.svg";const ye="_containerLoading_1inio_1",Te="_contentLoading_1inio_14";var te={containerLoading:ye,contentLoading:Te};const $=()=>e("div",{className:te.containerLoading,children:e("div",{className:te.contentLoading,children:e("span",{className:"animate__animated animate__flash animate__infinite animate__slow",children:"Carregando..."})})}),b=re.create({baseURL:"https://tesourariabpeb.herokuapp.com/"});const H=a=>{if(a)return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a)},J=a=>{switch(a=a.replaceAll("-",""),a=a.replaceAll(".",""),a=a.replaceAll("/",""),a.length){case 14:return"00.000.000/0000-00";case 11:return"000.000.000-00";case 6:return"000000";default:return"Error!"}},V=a=>(a=a.replace(".",""),a=a.replace(",","."),a),I=a=>{P.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",P.stopTimer),o.addEventListener("mouseleave",P.resumeTimer)}}).fire({icon:"error",title:"Ops' algo deu errado",text:a.response.data.error,position:"top"}),console.log(a.response.data.error)},Ee=(a,c)=>a.reduce((o,s,t)=>{const l=Math.floor(t/c);return o[l]=[...o[l]||[],s],o},[]),U=d.exports.createContext({});function Le(a){const[c,o]=d.exports.useState(!1),[s,t]=d.exports.useState(null),[l,m]=d.exports.useState(0),h=localStorage.getItem("@financeiro:token");b.defaults.headers.common.Authorization=`Bearer ${h}`;const r=()=>{t(null),localStorage.removeItem("@financeiro:token")},x=()=>{m(l+1),console.log("atualizado")};async function D(B){console.log(B),o(!0);const{credential:i}=B;await b.post("/user",{credential:i}).then(p=>{const{token:_,user:u}=p.data;localStorage.setItem("@financeiro:token",_),b.defaults.headers.common.Authorization=`Bearer ${_}`,t(u),o(!1)}).catch(p=>{o(!1),I(p)})}return d.exports.useEffect(()=>{(async()=>{h&&await b.get("profile").then(i=>{const{data:p}=i;t(p),o(!1)}).catch(i=>{o(!1),I(i)})})()},[localStorage,l]),n(U.Provider,{value:{signIn:D,user:s,signOut:r,updateState:x},children:[c&&e($,{}),a.children]})}function Ie(a){const[c,o]=d.exports.useState(a?"loading":"idle");return d.exports.useEffect(()=>{if(!a){o("idle");return}let s=document.querySelector(`script[src="${a}"]`);if(s)o(s.getAttribute("data-status")||"idle");else{s=document.createElement("script"),s.src=a,s.async=!0,s.setAttribute("data-status","loading"),document.body.appendChild(s);const l=m=>{!!s&&s.setAttribute("data-status",m.type==="load"?"ready":"error")};s.addEventListener("load",l),s.addEventListener("error",l)}const t=l=>{o(l.type==="load"?"ready":"error")};return s.addEventListener("load",t),s.addEventListener("error",t),()=>{s&&(s.removeEventListener("load",t),s.removeEventListener("error",t))}},[a]),c}const Ce=()=>{const{VITE_GOOGLE_CLIENT_ID:a,VITE_GOOGLE_CLIENT_SCRIPT_URL:c,VITE_SCRIPT_FLAG:o}={VITE_GOOGLE_CLIENT_ID:"726684203979-1jbrnptg2rp5qn9t1elfej55r37egj23.apps.googleusercontent.com",VITE_GOOGLE_CLIENT_SCRIPT_URL:"https://accounts.google.com/gsi/client",VITE_SCRIPT_FLAG:"__GoogleOneTapScript__",VITE_API_URL:"https://tesourariabpeb.herokuapp.com/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},{signIn:s,user:t}=d.exports.useContext(U),l=c,m=o,h=Ie(l);console.log(a,c,o);const r=x=>typeof x=="object"&&x!==null;return d.exports.useEffect(()=>{(async()=>{!(window==null?void 0:window[m])&&window.google&&h==="ready"&&!r(t)&&(await window.google.accounts.id.initialize({client_id:a,callback:s}),window[m]=!0),(window==null?void 0:window[m])&&h==="ready"&&!r(t)&&(await window.google.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large",shape:"square"}),await window.google.accounts.id.prompt())})()},[h,window==null?void 0:window[m]]),e("div",{className:M.loginBoxWrapper,children:e("div",{className:M.loginContentBox,children:n("div",{className:M.contentImageBox,children:[e("img",{src:be,alt:"financeiro"}),n("div",{className:M.contentTitle,children:[e("span",{children:"Batalh\xE3o de Pol\xEDcia do Ex\xE9rcito de Bras\xEDlia"}),e("span",{children:"Sistema de G\xEArenciamento de Notas Fiscais e Faturas"})]}),e("div",{className:M.contentButtonLogin,children:r(t)?e(W,{to:"/financial/home",children:e("span",{children:`Seja bem vindo ${t==null?void 0:t.name}`})}):e("div",{id:"buttonDiv"})})]})})})},Fe="_documentBoxWrapper_1nlro_1";var Se={documentBoxWrapper:Fe};const ke=()=>e("div",{className:Se.documentBoxWrapper,children:e(Z,{})}),Ae="_topBarBoxWrapper_1m0sk_1",we="_contentTopBar_1m0sk_12",Re="_contentLogo_1m0sk_17",$e="_contentNavigate_1m0sk_45",Oe="_contentDropDown_1m0sk_51",Me="_contentTitleDropDown_1m0sk_58",Ue="_contentMenuDropDown_1m0sk_70",qe="_contentUserAvatar_1m0sk_97",Ve="_cicleAvatarUser_1m0sk_104",je="_contentMenuUserDropDown_1m0sk_117",Pe="_contentUserAvatarDropDown_1m0sk_131",We="_userNameText_1m0sk_153",ze="_contentAdminText_1m0sk_162",Ge="_contentMenuUser_1m0sk_117",He="_contentCloseButton_1m0sk_198";var f={topBarBoxWrapper:Ae,contentTopBar:we,contentLogo:Re,contentNavigate:$e,contentDropDown:Oe,contentTitleDropDown:Me,contentMenuDropDown:Ue,contentUserAvatar:qe,cicleAvatarUser:Ve,contentMenuUserDropDown:je,contentUserAvatarDropDown:Pe,userNameText:We,contentAdminText:ze,contentMenuUser:Ge,contentCloseButton:He};const Je=()=>{const[a,c]=d.exports.useState(!1),[o,s]=d.exports.useState(!1),{user:t,signOut:l}=d.exports.useContext(U);return e("div",{className:f.topBarBoxWrapper,children:n("div",{className:f.contentTopBar,children:[n("div",{className:`${f.contentLogo} animate__animated animate__fadeIn`,children:[(t==null?void 0:t.unity)?e("span",{children:t.unity.name}):e("strong",{className:"animate__animated  animate__flash animate__infinite",children:"carregando"}),e("span",{children:t==null?void 0:t.name})]}),e("div",{className:`${f.contentNavigate} animate__animated animate__fadeIn `,children:n("div",{className:f.contentDropDown,onClick:()=>c(!a),children:[e("div",{className:f.contentTitleDropDown,children:e("span",{children:"Documento"})}),a&&n("div",{className:f.contentMenuDropDown,onMouseLeave:()=>c(!1),children:[e(W,{to:"/financial/document/new",children:e("span",{children:"Incluir Documento"})}),e(W,{to:"/financial/document/list",children:e("span",{children:"Listar Documentos"})})]})]})}),(t==null?void 0:t.image_url)&&n("div",{className:f.contentUserAvatar,children:[o===!1&&e("div",{className:`${f.cicleAvatarUser} animate__animated animate__fadeIn`,onClick:()=>s(o===!1),children:e("img",{src:t==null?void 0:t.image_url,alt:t==null?void 0:t.name})}),o&&n("div",{className:`${f.contentMenuUserDropDown} animate__animated animate__bounceInDown`,children:[n("div",{className:f.contentUserAvatarDropDown,children:[e("div",{className:f.cicleAvatarUser,children:e("img",{src:t==null?void 0:t.image_url,alt:t==null?void 0:t.name})}),e("div",{className:f.userNameText,children:e("strong",{children:t.name})})]}),e("div",{className:f.contentAdminText,children:e("strong",{children:"Administrador"})}),e("div",{className:f.contentMenuUser,children:e("button",{type:"button",onClick:()=>l(),children:e("span",{children:"Sair"})})}),e("div",{className:f.contentCloseButton,children:e("button",{type:"button",onClick:()=>s(!1),children:e(ie,{size:18,color:"#312f51"})})})]})]})]})})},Ke="_privateOutlet_1671p_1";var Qe={privateOutlet:Ke};function Xe(){d.exports.useContext(U);const a=localStorage.getItem("@financeiro:token");return n("div",{className:Qe.privateOutlet,children:[e(Je,{}),a?e(Z,{}):e(le,{to:"/",replace:!0})]})}const Ye="_contentBoxListDocuments_1o46t_1",Ze="_contentTitleListDocuments_1o46t_11",et="_contentDateDocument_1o46t_47",tt="_contentFilterButtons_1o46t_57",nt="_contentListBox_1o46t_81",ot="_contentDocumentList_1o46t_88",at="_cardDocument_1o46t_96",ct="_documentRedirect_1o46t_127",st="_contentCreditor_1o46t_157",rt="_contentBarButtonForm_1o46t_174",it="_contentFormButtons_1o46t_189";var C={contentBoxListDocuments:Ye,contentTitleListDocuments:Ze,contentDateDocument:et,contentFilterButtons:tt,contentListBox:nt,contentDocumentList:ot,cardDocument:at,documentRedirect:ct,contentCreditor:st,contentBarButtonForm:rt,contentFormButtons:it};const lt=()=>{const[a,c]=d.exports.useState(!0),[o,s]=d.exports.useState(8),[t,l]=d.exports.useState([]),m=O(),{updateState:h}=d.exports.useContext(U),{handleSubmit:r,register:x,watch:D}=q({defaultValues:{id:[]}}),B=D();d.exports.useEffect(()=>{(async()=>{c(!0),await b.post("/documents",{take:o}).then(_=>{const{data:u}=_;l(u),h(),c(!1)}).catch(_=>{c(!1),I(_)})})()},[o]),d.exports.useEffect(()=>{B.id.length===0&&localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify([])),localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify(B.id))},[B.id]);const i=p=>{const{id:_}=p;localStorage.setItem("@financeiro:selectedDocuments",JSON.stringify(_)),m("/financial/document/extract/")};return n("div",{className:C.contentBoxListDocuments,children:[a&&e($,{}),n("div",{className:C.contentTitleListDocuments,children:[n("div",{className:C.contentDateDocument,children:[e("h2",{children:"Documentos"}),e("span",{children:"Aqui est\xE3o listados todos os documentos cadastrados em sua subunidade"})]}),n("div",{className:C.contentFilterButtons,children:[e("button",{type:"button",onClick:()=>m("/financial/home"),children:e("span",{children:"in\xEDcio"})}),e("button",{type:"button",onClick:()=>m("/financial/document/new"),children:e("span",{children:"novo documento"})}),e("div",{className:C.contentPaginationBox,children:e("button",{type:"button",onClick:()=>s(o+8),children:n("span",{children:["Mostrando ",t.length," resultados"]})})})]})]}),e("div",{className:C.contentListBox,children:e("div",{className:C.contentDocumentList,children:n("form",{onSubmit:r(i),autoComplete:"off",children:[t==null?void 0:t.map(p=>n("div",{className:C.cardDocument,children:[e("input",j(N({type:"checkbox"},x("id")),{value:p.id})),e("button",{type:"button",className:C.documentRedirect,onClick:()=>m(`/financial/document/success/${p.id}`),children:e("span",{children:p.number})}),n("div",{className:C.contentCreditor,children:[e("span",{children:p.creditor.code}),e("span",{children:p.creditor.name})]}),e("span",{children:k(A(p.emission),"dd/MM/yyyy")}),p.due_date?e("span",{children:k(A(p.due_date),"dd/MM/yyyy")}):e("span",{children:e("i",{children:"n\xE3o h\xE1"})}),e("span",{children:H(p.value)})]},p.id)),B.id.length>0&&n("div",{className:`${C.contentBarButtonForm} animate__animated  animate__fadeInUp`,children:[e("div",{className:C.contentFormButtons,children:e("button",{type:"submit",children:e("span",{children:"Extrato"})})}),e("button",{type:"button",children:e("span",{children:B.id.length})})]})]})})})]})},dt="_formsuccessNewDocumentBox_1ly2a_1",mt="_contentTitle_1ly2a_16",ut="_contentResponseData_1ly2a_35",pt="_contentBoxDataDobleText_1ly2a_43",ht="_contentTextBox_1ly2a_48",xt="_contentText_1ly2a_48",_t="_contentBoxButton_1ly2a_86",gt="_contentAuthorBox_1ly2a_114",Dt="_contentAuthorTextBox_1ly2a_125",vt="_contentAuthorText_1ly2a_125",Bt="_deleteButton_1ly2a_144";var g={formsuccessNewDocumentBox:dt,contentTitle:mt,contentResponseData:ut,contentBoxDataDobleText:pt,contentTextBox:ht,contentText:xt,contentBoxButton:_t,contentAuthorBox:gt,contentAuthorTextBox:Dt,contentAuthorText:vt,deleteButton:Bt};const ft=()=>{const[a,c]=d.exports.useState(!0),[o,s]=d.exports.useState(null),{id:t}=z(),l=O(),m=async()=>{c(!0),await b.post("/document/delete",{id:t}).then(h=>{console.log(h.data),l(-1)}).catch(h=>{c(!1),I(h)})};return d.exports.useEffect(()=>{(async()=>{await b.get(`/select_document/${t}`).then(r=>{let x=r.data;x.emission=k(A(x.emission),"dd/MM/yyyy"),x.due_date&&(x.due_date=k(A(x.due_date),"dd/MM/yyyy")),s(x),c(!1)}).catch(r=>{c(!1),I(r)})})()},[]),d.exports.useEffect(()=>{w("#code").mask(J)},[]),a?e($,{}):n("div",{className:g.formsuccessNewDocumentBox,children:[n("div",{className:g.contentTitle,children:[e("h2",{children:"Documento"}),n("span",{children:["Inclua impostos, altere os dados fornecidos, adicione documentos gerados no SIAFI como ",e("strong",{children:"(NS, NP, NE, OB, ...)"})]})]}),n("div",{className:g.contentResponseData,children:[n("div",{className:g.contentTextBox,children:[e("span",{children:"C\xF3digo Credor"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{id:"code",children:o==null?void 0:o.creditor.code})]})]}),n("div",{className:g.contentTextBox,children:[e("span",{children:"Raz\xE3o Credor"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.creditor.name})]})]}),n("div",{className:g.contentTextBox,children:[e("span",{children:"N\xFAmero Documento"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.number})]})]}),n("div",{className:g.contentBoxDataDobleText,children:[n("div",{className:g.contentTextBox,children:[e("span",{children:"Emiss\xE3o"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.emission})]})]}),(o==null?void 0:o.due_date)&&n("div",{className:g.contentTextBox,children:[e("span",{children:"Vencimento"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:o==null?void 0:o.due_date})]})]})]}),n("div",{className:g.contentTextBox,children:[e("span",{children:"Valor"}),n("div",{className:g.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:H(o==null?void 0:o.value)})]})]}),n("div",{className:g.contentBoxButton,children:[e("button",{type:"button",onClick:()=>l(-1),children:e("span",{children:"Voltar"})}),e("button",{type:"button",onClick:()=>l(`/financial/document/update/${t}`),children:e("span",{children:"Editar"})}),e("button",{type:"button",onClick:()=>l(`/financial/document/taxes/${t}`),children:e("span",{children:"Impostos"})}),e("button",{type:"button",children:e("span",{children:"DOC SIAFI"})})]})]}),e("div",{className:g.contentAuthorBox,children:e("div",{className:g.contentAuthorTextBox,children:e("div",{className:g.contentAuthorText,children:o==null?void 0:o.units.map(h=>n("span",{children:["Criado em ",e("strong",{children:k(A(h.included_in),"dd/MM/yyyy 'as' HH:mm:ss")})," por ",e("strong",{children:h.user.name})," (",e("strong",{children:h.user.email}),")"]},h.included_in))})})}),e("button",{type:"button",className:g.deleteButton,onClick:()=>m(),children:e("span",{children:"Excluir"})})]})},Nt="_formDocumentBox_1uurr_1",bt="_contentTitleForm_1uurr_15",yt="_contentTitleText_1uurr_21",Tt="_contentInputBox_1uurr_48",Et="_contentDoubleInputBox_1uurr_55",Lt="_contentBox_1uurr_62",It="_contentButton_1uurr_102";var F={formDocumentBox:Nt,contentTitleForm:bt,contentTitleText:yt,contentInputBox:Tt,contentDoubleInputBox:Et,contentBox:Lt,contentButton:It};const Ct=()=>{const[a,c]=d.exports.useState(!1),[o,s]=d.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:m},reset:h,setValue:r}=q(),x=O(),D=i=>{c(!0),i.value=V(i.value),i.due_date===""&&delete i.due_date,b.post("/document",i).then(p=>{const{id:_}=p.data;h(),c(!1),x(`/financial/document/success/${_}`)}).catch(p=>{c(!1),I(p)})};d.exports.useEffect(()=>{w(".value").mask("#.##0,00",{reverse:!0}),w(".date").mask("00/00/0000")},[]);const B=async i=>{c(!0),await b.post("/select_creditor",{code:i}).then(p=>{var u;const{name:_}=p.data;s(""),r("name",_),c(!1),(u=document.getElementById("number"))==null||u.focus()}).catch(p=>{var u;const{data:_}=p.response;s(_.error),r("name",""),c(!1),(u=document.getElementById("name"))==null||u.focus()})};return n("div",{className:F.formDocumentBox,children:[a&&e($,{}),e("div",{className:F.contentTitleForm,children:n("div",{className:F.contentTitleText,children:[e("h2",{children:"Cadastro de Documentos"}),e("span",{children:"[Nota Fiscal, Fatura]"})]})}),n("form",{onSubmit:l(D),autoComplete:"off",children:[n("div",{className:F.contentInputBox,children:[e("label",{children:"C\xF3digo Credor"}),e("input",j(N({onKeyPress:()=>s("")},t("code",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"},maxLength:{value:14,message:"m\xE1ximo 14 caracteres"},minLength:{value:6,message:"m\xEDnimo 6 caracteres"}})),{onBlur:i=>B(i.target.value)})),e(L,{errors:m,name:"code",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:F.contentInputBox,children:[n("label",{htmlFor:"name",children:["Raz\xE3o Credor ",e("i",{children:o})]}),e("input",N({id:"name"},t("name")))]}),n("div",{className:F.contentInputBox,children:[e("label",{htmlFor:"number",children:"N\xFAmero Documento"}),e("input",N({id:"number"},t("number",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"}}))),e(L,{errors:m,name:"number",render:({message:i})=>e("p",{children:i})})]}),e("div",{className:F.contentInputBox,children:n("div",{className:F.contentDoubleInputBox,children:[n("div",{className:F.contentBox,children:[e("label",{children:"Emiss\xE3o"}),e("input",N({className:"date"},t("emission",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:m,name:"emission",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:F.contentBox,children:[e("label",{children:"Vencimento"}),e("input",N({className:"date"},t("due_date",{maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:m,name:"due_date",render:({message:i})=>e("p",{children:i})})]})]})}),n("div",{className:F.contentInputBox,children:[e("label",{children:"Valor"}),e("input",N({className:"value"},t("value",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:m,name:"value",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:F.contentButton,children:[e("button",{type:"button",onClick:()=>x(-1),children:e("span",{children:"In\xEDcio"})}),e("button",{type:"submit",children:e("span",{children:"Cadastrar"})})]})]})]})},Ft="_formDocumentBox_ki8s5_1",St="_contentTitleForm_ki8s5_15",kt="_contentTextBox_ki8s5_42",At="_contentText_ki8s5_42",wt="_contentInputBox_ki8s5_79",Rt="_contentDoubleInputBox_ki8s5_86",$t="_contentBox_ki8s5_92",Ot="_contentBoxButton_ki8s5_150";var T={formDocumentBox:Ft,contentTitleForm:St,contentTextBox:kt,contentText:At,contentInputBox:wt,contentDoubleInputBox:Rt,contentBox:$t,contentBoxButton:Ot};const Mt=()=>{const{id:a}=z(),c=O(),[o,s]=d.exports.useState(!0),[t,l]=d.exports.useState(null),{register:m,handleSubmit:h,formState:{errors:r},reset:x,setValue:D}=q({defaultValues:{id:a}});d.exports.useEffect(()=>{(async()=>{await b.get(`/select_document/${a}`).then(p=>{let _=p.data;_.emission=k(A(_.emission),"dd/MM/yyyy"),_.due_date&&(_.due_date=k(A(_.due_date),"dd/MM/yyyy"),D("due_date",_.due_date)),l(_),D("number",_.number),D("emission",_.emission),D("value",Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(Number(_.value))),s(!1)}).catch(p=>{s(!1),I(p)})})()},[]);const B=async i=>{s(!0),i.value=V(i.value),i.due_date===""&&(i.due_date=null),await b.post("/document/update",i).then(()=>{x(),s(!1),c(-1)}).catch(p=>{s(!1),I(p)})};return d.exports.useEffect(()=>{w(".value").mask("#.##0,00",{reverse:!0}),w(".date").mask("00/00/0000"),w("#code").mask(J)}),n("div",{className:T.formDocumentBox,children:[o&&e($,{}),n("div",{className:T.contentTitleForm,children:[e("h2",{children:"Alterar Documento"}),e("span",{children:"Edi\xE7\xE3o de documento"})]}),n("form",{onSubmit:h(B),autoComplete:"off",children:[n("div",{className:T.contentTextBox,children:[e("span",{children:"C\xF3digo Credor"}),n("div",{className:T.contentText,children:[e(R,{color:"#4C5948"}),e("span",{id:"code",children:t==null?void 0:t.creditor.code})]})]}),n("div",{className:T.contentTextBox,children:[e("span",{children:"Raz\xE3o Credor"}),n("div",{className:T.contentText,children:[e(R,{color:"#4C5948"}),e("span",{children:t==null?void 0:t.creditor.name})]})]}),n("div",{className:T.contentInputBox,children:[e("label",{htmlFor:"number",children:"N\xFAmero Documento"}),e("input",N({id:"number"},m("number",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},pattern:{value:/^[0-9]+$/i,message:"somente n\xFAmeros"}}))),e(L,{errors:r,name:"number",render:({message:i})=>e("p",{children:i})})]}),e("div",{className:T.contentInputBox,children:n("div",{className:T.contentDoubleInputBox,children:[n("div",{className:T.contentBox,children:[e("label",{children:"Emiss\xE3o"}),e("input",N({className:"date"},m("emission",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:r,name:"emission",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:T.contentBox,children:[e("label",{children:"Vencimento"}),e("input",N({className:"date"},m("due_date",{maxLength:{value:10,message:"m\xE1ximo 10 caracteres"},minLength:{value:10,message:"m\xEDnimo 10 caracteres"}}))),e(L,{errors:r,name:"due_date",render:({message:i})=>e("p",{children:i})})]})]})}),n("div",{className:T.contentInputBox,children:[e("label",{children:"Valor"}),e("input",N({className:"value"},m("value",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:r,name:"value",render:({message:i})=>e("p",{children:i})})]}),n("div",{className:T.contentBoxButton,children:[e("button",{type:"submit",children:e("span",{children:"Confirmar"})}),e("button",{type:"button",onClick:()=>c(-1),children:e("span",{children:"Voltar"})})]})]})]})},Ut="_contentAlertExtractEmpty_goicl_1",qt="_contentPageExtract_goicl_37",Vt="_cardDocument_goicl_46",jt="_contentDataCreditorDocument_goicl_62",Pt="_textCreditorData_goicl_69",Wt="_contentDataDocument_goicl_96",zt="_textDocumentData_goicl_103",Gt="_tableTaxesOnDocument_goicl_120",Ht="_textLiq_goicl_130",Jt="_textTotal_goicl_133";var y={contentAlertExtractEmpty:Ut,contentPageExtract:qt,cardDocument:Vt,contentDataCreditorDocument:jt,textCreditorData:Pt,break:"_break_goicl_84",contentDataDocument:Wt,textDocumentData:zt,tableTaxesOnDocument:Gt,textLiq:Ht,textTotal:Jt};const Kt=()=>{const[a,c]=d.exports.useState(!0),[o,s]=d.exports.useState([]),t=JSON.parse(localStorage.getItem("@financeiro:selectedDocuments")),l=O();return d.exports.useEffect(()=>{(async()=>{await b.post("/documents/filter",{id_documents:t}).then(h=>{const{data:r}=h;s(r),c(!1)}).catch(h=>{c(!1),I(h)})})()},[]),d.exports.useEffect(()=>{w(".code").mask(J)},[o]),n("div",{children:[a&&e($,{}),t.length===0&&n("div",{className:y.contentAlertExtractEmpty,children:[e(de,{size:48,color:"#915ce6"}),e("h2",{children:"Aten\xE7\xE3o"}),e("h3",{children:"Selecione os documentos para impress\xE3o do extrato"}),e("button",{type:"button",onClick:()=>l("/financial/document/list"),children:e("span",{children:"Documentos"})})]}),Ee(o,8).map((m,h)=>e("div",{className:y.contentPageExtract,children:m.map(r=>n("div",{className:y.cardDocument,onClick:()=>l(`/financial/document/success/${r.id}`),children:[e("div",{className:y.contentDataCreditorDocument,children:n("div",{className:y.textCreditorData,children:[e("span",{children:r.creditor.name}),e("span",{className:"code",children:r.creditor.code})]})}),e("div",{className:y.break}),n("div",{className:y.contentDataDocument,children:[n("div",{className:y.textDocumentData,children:[e("span",{children:"N\xFAmero"}),e("span",{children:r.number})]}),n("div",{className:y.textDocumentData,children:[e("span",{children:"Emiss\xE3o"}),e("span",{children:k(A(r.emission),"dd/MM/yyyy")})]}),r.due_date&&n("div",{className:y.textDocumentData,children:[e("span",{children:"Vencimento"}),e("span",{children:k(A(r.due_date),"dd/MM/yyyy")})]}),n("div",{className:y.textDocumentData,children:[e("span",{children:"Valor"}),e("span",{children:H(r.value)})]})]}),r.taxes&&r.taxes.length>0&&n("table",{className:y.tableTaxesOnDocument,children:[e("thead",{children:n("tr",{children:[e("th",{className:"bold",children:"C\xF3d"}),e("th",{className:"bold",children:"%"}),e("th",{className:"bold",children:"Calc"}),e("th",{className:"bold",children:"Valor"})]})}),n("tbody",{children:[r.taxes.map(x=>n("tr",{children:[e("td",{children:x.code}),e("td",{children:Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:2}).format(x.p_a/100)}),n("td",{children:[" ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(x.calculation_basis)]}),e("td",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(x.amount)})]},x.amount)),n("tr",{className:y.textTotal,children:[e("td",{colSpan:2,children:"Total"}),e("td",{colSpan:2,children:(r==null?void 0:r.taxes)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r==null?void 0:r.taxes.reduce((x,D)=>x+=+D.amount,0))})]}),n("tr",{className:y.textLiq,children:[e("td",{colSpan:2,children:"L\xEDquido"}),e("td",{colSpan:2,children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r.value-(r==null?void 0:r.taxes.reduce((x,D)=>x+=+D.amount,0)))})]})]})]})]},r.id))},h))]})},Qt="_contentBoxTaxesOnDocument_jp2gq_1",Xt="_contentTitleForm_jp2gq_16",Yt="_contentTitle_jp2gq_16",Zt="_contentDataDocument_jp2gq_42",en="_boxCreditor_jp2gq_52",tn="_toBreak_jp2gq_57",nn="_boxDocument_jp2gq_63",on="_contentTaxesData_jp2gq_83",an="_contentBoxData_jp2gq_123",cn="_contentTotal_jp2gq_148",sn="_contentFormTaxes_jp2gq_163",rn="_contentTaxesBoxInputs_jp2gq_180",ln="_contentInputBox_jp2gq_186",dn="_contentBoxButton_jp2gq_246";var v={contentBoxTaxesOnDocument:Qt,contentTitleForm:Xt,contentTitle:Yt,contentDataDocument:Zt,boxCreditor:en,toBreak:tn,boxDocument:nn,contentTaxesData:on,contentBoxData:an,contentTotal:cn,contentFormTaxes:sn,contentTaxesBoxInputs:rn,contentInputBox:ln,contentBoxButton:dn};const mn=()=>{const{id:a}=z(),c=O(),[o,s]=d.exports.useState(!0),[t,l]=d.exports.useState(null),[m,h]=d.exports.useState(0),{register:r,handleSubmit:x,formState:{errors:D},reset:B,setValue:i}=q({defaultValues:{document_id:a}});d.exports.useEffect(()=>{s(!0),(async()=>{await b.get(`/select_document/${a}`).then(E=>{const{data:K}=E;l(K),i("calculation_basis",Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(K.value)),s(!1)}).catch(E=>{s(!1),I(E)})})()},[m]),d.exports.useEffect(()=>{w(".value").mask("#.##0,00",{reverse:!0})});const p=async u=>{s(!0),u.p_a=V(u.p_a),u.calculation_basis=V(u.calculation_basis),console.log(u.calculation_basis),await b.post("/taxes/document",u).then(()=>{B(),h(m+1),s(!1)}).catch(E=>{s(!1),h(m+1),I(E)})},_=async u=>{s(!0),await b.post("/taxe/remove/document",u).then(E=>{B(),h(m+1),s(!1)}).catch(E=>{s(!1),I(E)})};return n("div",{className:v.contentBoxTaxesOnDocument,children:[o&&e($,{}),e("div",{className:v.contentTitleForm,children:n("div",{className:v.contentTitle,children:[e("h2",{children:"Gerir Documento"}),e("span",{children:"Dedu\xE7\xF5es | Descontos | Acr\xE9scimos"})]})}),n("div",{className:v.contentDataDocument,children:[n("div",{className:v.boxCreditor,children:[e("p",{children:t==null?void 0:t.creditor.name}),e("p",{children:t==null?void 0:t.creditor.code})]}),e("div",{className:v.toBreak}),n("div",{className:v.boxDocument,children:[n("p",{children:[e("span",{children:"Documento"})," ",t==null?void 0:t.number]}),n("p",{children:[e("span",{children:"Valor"})," ",(t==null?void 0:t.value)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t==null?void 0:t.value)]}),e("p",{children:(t==null?void 0:t.taxes)&&t.taxes.length>0&&n(G.Fragment,{children:[e("span",{children:"L\xEDquido"}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.value-(t==null?void 0:t.taxes.reduce((u,E)=>u+=+E.amount,0)))})]})})]})]}),(t==null?void 0:t.taxes)&&t.taxes.length>0&&n("div",{className:v.contentTaxesData,children:[n("div",{className:v.contentTitle,children:[e("span",{children:"C\xF3digo"}),e("span",{children:"%"}),e("span",{children:"C\xE1lculo"}),e("span",{children:"Total"})]}),e("div",{className:v.contentBoxData,children:t==null?void 0:t.taxes.map(u=>n("div",{onClick:()=>_({document_id:u.document_id,taxe_id:u.taxe_id}),children:[e("span",{children:u.code}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:2}).format(u.p_a/100)}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(u.calculation_basis)}),e("span",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(u.amount)})]},u.amount))}),n("div",{className:v.contentTotal,children:[e("span",{children:"Total"}),e("span",{children:(t==null?void 0:t.taxes)&&Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t==null?void 0:t.taxes.reduce((u,E)=>u+=+E.amount,0))})]})]}),e("div",{className:v.contentFormTaxes,children:n("form",{onSubmit:x(p),autoComplete:"off",children:[n("div",{className:v.contentTaxesBoxInputs,children:[n("div",{className:v.contentInputBox,children:[e("label",{children:"C\xF3digo de Recolhimento DARF/DAR"}),e("input",N({},r("code",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},minLength:{value:4,message:"4 caracteres"},maxLength:{value:4,message:"4 caracteres"}}))),e(L,{errors:D,name:"code",render:({message:u})=>e("p",{children:u})})]}),n("div",{className:v.contentInputBox,children:[e("label",{children:"Percentual Aplicado"}),e("input",N({className:"value"},r("p_a",{required:{value:!0,message:"preenchimento obrigat\xF3rio"},maxLength:{value:6,message:"6 caracteres ex: 100,00%"}}))),e(L,{errors:D,name:"p_a",render:({message:u})=>e("p",{children:u})})]})]}),n("div",{className:v.contentInputBox,children:[e("label",{children:"Base de C\xE1lculo"}),e("input",N({className:"value"},r("calculation_basis",{required:{value:!0,message:"preenchimento obrigat\xF3rio"}}))),e(L,{errors:D,name:"calculation_basis",render:({message:u})=>e("p",{children:u})})]}),n("div",{className:v.contentBoxButton,children:[e("button",{type:"button",onClick:()=>c(-1),children:e("span",{children:"VOLTAR"})}),e("button",{type:"submit",children:e("span",{children:"CADASTRAR"})})]})]})})]})},un=()=>n(me,{children:[e(S,{path:"/",element:e(Ce,{})}),n(S,{path:"/financial",element:e(Xe,{}),children:[e(S,{path:"home",element:e(ge,{})}),n(S,{path:"document",element:e(ke,{}),children:[e(S,{path:"new",element:e(Ct,{})}),e(S,{path:"success/:id",element:e(ft,{})}),e(S,{path:"update/:id",element:e(Mt,{})}),e(S,{path:"list",element:e(lt,{})}),e(S,{path:"taxes/:id",element:e(mn,{})}),e(S,{path:"extract",element:e(Kt,{})})]})]})]}),pn=()=>e(G.Fragment,{children:e(ue,{children:e(un,{})})});pe.render(e(G.StrictMode,{children:e(Le,{children:e(pn,{})})}),document.getElementById("root"));
