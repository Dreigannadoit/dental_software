import{r as g,j as e,A as b,bn as p,b1 as C,bj as N,b3 as P,ba as v,b4 as w,b5 as y}from"./index-BjlVeyjO.js";import{u as S}from"./useExportCsv-CVxbNf03.js";const _=({data:t})=>{const[a,n]=g.useState(null),s=r=>{n(a===r?null:r)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"dropdown_table",children:[e.jsx("div",{className:"thead",children:e.jsxs("div",{children:[e.jsx("p",{children:"Name"}),e.jsx("p",{children:"Gender"}),e.jsx("p",{children:"Insurance"}),e.jsx("p",{children:"Parent/ Guardian"}),e.jsx("p",{children:"Decay"}),e.jsx("p",{children:"Dentist Name"}),e.jsx("p",{})]})}),e.jsx("div",{className:"tbody",children:t.map((r,c)=>e.jsxs(g.Fragment,{children:[e.jsxs("div",{className:"main",children:[e.jsx("p",{children:r.name}),e.jsx("p",{children:r.gender==="Male"?"M":"F"}),e.jsx("p",{children:r.insurance}),e.jsx("p",{children:r.parent_gauridian}),e.jsx("p",{children:r.decayList.map((l,d)=>e.jsxs("span",{children:[l,d<r.decayList.length-1&&", "]},d))}),e.jsx("p",{children:r.dentistName}),e.jsx("div",{className:"action_button",children:e.jsx(b,{type:"button",classLabel:"edit_patient",label:"Details",icon:p,backgroundColor:"#FE9C8F",method:()=>s(c)})})]}),e.jsx("div",{className:`${a===c?"expanded-row":"collapsed-row"} more_info`,children:e.jsx("div",{className:"patient-details",children:e.jsxs("div",{className:"table",children:[e.jsx("h3",{children:"Patient Communication"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["Referral ",e.jsx("br",{})," Complete"]}),e.jsx("th",{children:"School Year"}),e.jsxs("th",{children:["Current ",e.jsx("br",{})," Dentist"]}),e.jsx("th",{children:"Date Called"}),e.jsxs("th",{children:["Teeth ",e.jsx("br",{})," Issue"]}),e.jsx("th",{children:"Notes"}),e.jsx("th",{children:"Created by"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"shadow",children:[e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Csdp Program Sy 2023 - 2024"}),e.jsx("td",{children:"Brockton Pediatrics & Ortho"}),e.jsx("td",{children:"2024-02-01"}),e.jsx("td",{children:"B, S"}),e.jsx("td",{children:"mother has been bringing child to appts"}),e.jsx("td",{children:"Super Admin"})]})})]})]})})})]},c))})]})})},D=(t,a)=>{const n=s=>s?s.toString().toLowerCase():"";return t.filter(s=>{var x,j,m;const r=n(a.search||""),c=!a.search||[s.name,(x=s.id)==null?void 0:x.toString(),s.gender,(j=s.age)==null?void 0:j.toString(),s.teacher,s.school,s.year,s.status,s.birthdate,s.insurance].some(u=>n(u).includes(r)),l=!a.school||s.school===a.school,d=!a.grade||((m=s.grade)==null?void 0:m.toString())===a.grade,o=!a.year||s.year===a.year,h=!a.status||s.status===a.status,i=!a.teacher||s.teacher===a.teacher;return c&&l&&d&&o&&h&&i})},k=()=>{const{filters:t,rowsPerPage:a,currentPage:n,currentPageData:s,totalPages:r,handleFilterChange:c,handleRowsPerPageChange:l,handlePageChange:d,loading:o}=C(N,{search:""},D),h=S(),i=()=>{h(s,"Case Management.csv")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"case_management auto-sizing",children:[e.jsx(P,{filters:t,onFilterChange:c,data:v}),e.jsxs("div",{className:"table_controls",children:[e.jsx("button",{className:"Export_BTN shadow",onClick:i,children:"Export"}),e.jsx(w,{rowsPerPage:a,handleRowsPerPageChange:l})]}),e.jsxs("div",{className:"table_area",children:[o&&e.jsx(y,{}),e.jsx(_,{data:s})]}),r>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"shadow",onClick:()=>d(n-1),disabled:n===1,children:"Back"}),e.jsxs("span",{children:["Page ",n," of ",r]}),e.jsx("button",{className:"shadow",onClick:()=>d(n+1),disabled:n===r,children:"Next"})]})]})})};export{k as default};
