import{r as x,u as D,j as e,P as v,J as A,A as j,L as N,M as P,bd as S,be as w,aA as E,bi as _,by as k,bz as g,bA as F,bB as y,bC as T}from"./index-BZNs44lt.js";import{u as L,C as R}from"./useUpdateStatus-DE3CP_P4.js";const B=({data:l,onEditDentalCode:n})=>{const[t,a]=x.useState(!0),{updateStatus:i,setChangeStatusRef:m}=L(),{isVisible:o,isExiting:d,popupData:r,openPopup:b,closePopup:u}=D(),p=()=>{r&&console.log("Request to delete patient with ID:",r.id),u()},h=[...l].sort((s,c)=>t?s.id-c.id:c.id-s.id);return e.jsxs(e.Fragment,{children:[o&&e.jsx(v,{type:"Inform",title:"Are You Sure?",message:`You are about to delete ${r==null?void 0:r.code}. This action cannot be undone.`,icon:A,onConfirm:p,onCancel:u,confirmLabel:"Yes, Delete it!",cancelLabel:"Cancel",isExiting:d,customClass:"delete-popup"}),e.jsx(R,{ref:s=>m(s)}),e.jsx("div",{className:"table",children:e.jsxs("table",{children:[e.jsx("thead",{className:"shadow",children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{children:["#",e.jsx("button",{onClick:()=>a(!t),className:`${t?"Ascending":"Descending"}`,children:"➤"})]})}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:h.length>0?h.map((s,c)=>e.jsxs("tr",{className:"shadow",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.code}),e.jsx("td",{children:s.description}),e.jsx("td",{className:`${s.status==="Active"||s.status==="active"||s.status===!0?"active":"inactive "}`,children:e.jsx("span",{children:e.jsx("button",{onClick:()=>i(s),children:s.status==="Active"||s.status==="active"||s.status===!0?"Active":"Inactive"})})}),e.jsxs("td",{className:"crud_controlls",children:[e.jsx(j,{type:"button",classLabel:"edit_patient",label:"Edit",icon:N,backgroundColor:"#1E8631",method:()=>n(s)}),e.jsx(j,{type:"button",classLabel:"delete_patient",label:"Delete",icon:P,backgroundColor:"#FF1A1A",method:()=>b(s)})]})]},c)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",children:"No matching records found"})})})]})})]})},I=({exitUser:l,dentalCode:n,isEdit:t})=>{const[a,i]=x.useState(""),[m,o]=x.useState(""),{isVisible:d,isInitialized:r,triggerEnter:b,triggerExit:u}=S(500);x.useEffect(()=>{b()},[b]),x.useEffect(()=>{n?(i(n.code||""),o(n.description||"")):(i(""),o(""))},[n]);const p=s=>{s.preventDefault();const c={code:a,description:m};console.log(t?"Editing dental code:":"Adding dental code:",c),l()},h=()=>{u(()=>{l&&l()})};return w.createPortal(e.jsxs("div",{className:`form_container dentalCode_form_container glassmorphism shadow ${r?d?"enter-animation":"exit-animation":""}`,children:[e.jsx("button",{className:"form_background",onClick:h}),e.jsx("div",{className:"form dentalCode_form glassmorphism shadow",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("h1",{children:t?"Edit Dental Code":"Add Dental Code"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"name full",children:[e.jsx("label",{htmlFor:"codeName",children:"Code"}),e.jsx(E,{fullWidth:!0,value:a,onChange:s=>i(s.target.value),id:"outlined-basic",variant:"outlined"})]}),e.jsxs("div",{className:"description full",children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx(_,{value:m,onChange:s=>o(s.target.value),size:"lg",variant:"outlined",sx:{borderColor:"rgb(158, 158, 158)",borderWidth:"1px",borderRadius:"5px",background:"transparent",width:"100%"}})]})]}),e.jsxs("div",{className:"form-buttons",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit"}),e.jsx("button",{type:"button",className:"cancel-btn",onClick:h,children:"Cancel"})]})]})})]}),document.body)},z=(l,n)=>{const t=a=>a?a.toString().toLowerCase():"";return l.filter(a=>{var o;const i=t(n.search||"");return!n.search||[(o=a.id)==null?void 0:o.toString(),a.code,a.description,a.status].some(d=>t(d).includes(i))})},M=()=>{const{filters:l,rowsPerPage:n,currentPage:t,currentPageData:a,totalPages:i,handleFilterChange:m,handleRowsPerPageChange:o,handlePageChange:d,loading:r}=k(g,{search:""},z),[b,u]=x.useState(!1),[p,h]=x.useState(null),s=()=>u(!0),c=()=>{u(!1),h(null)},C=f=>{h(f),u(!0)};return e.jsxs(e.Fragment,{children:[b&&e.jsx(I,{exitUser:c,dentalCode:p,isEdit:!!p}),e.jsxs("div",{className:"dental_code auto-sizing",children:[e.jsx(F,{filters:l,onFilterChange:m,data:g,hasAddToTableButton:!0,method:s}),e.jsx("div",{className:"table_controls",children:e.jsx(y,{rowsPerPage:n,handleRowsPerPageChange:o})}),e.jsxs("div",{className:"table_area",children:[r&&e.jsx(T,{}),e.jsx(B,{data:a,onEditDentalCode:C})]}),i>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"shadow",onClick:()=>d(t-1),disabled:t===1,children:"Back"}),e.jsxs("span",{children:["Page ",t," of ",i]}),e.jsx("button",{className:"shadow",onClick:()=>d(t+1),disabled:t===i,children:"Next"})]})]})]})};export{M as default};
