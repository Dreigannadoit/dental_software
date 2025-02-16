import{j as e,b5 as f,bh as K,aA as R,bu as S,bz as u,r as j,bw as y,bx as D,by as B}from"./index-CpieBdCD.js";import{u as L}from"./useExportCsv-DKMZF7j0.js";const z=({data:c})=>{const i=()=>e.jsx("div",{children:e.jsx(R,{fullWidth:!0,id:"outlined-basic",variant:"outlined",size:"small",sx:{"& .MuiOutlinedInput-root":{padding:"1px 2px"}}})}),n=(t,l,o)=>{const s=t[l];return e.jsxs(f.Fragment,{children:[e.jsx("tr",{children:e.jsxs("td",{colSpan:"9",className:"section-header",children:[t.year," - ",o]})}),s.length>0?s.map((r,x)=>e.jsxs("tr",{className:"editable_content",children:[e.jsx("td",{children:r.name}),e.jsx("td",{children:i()}),e.jsx("td",{children:e.jsx(K,{})}),e.jsx("td",{children:i()}),e.jsx("td",{children:i()}),e.jsx("td",{children:i()}),e.jsx("td",{children:i()}),e.jsx("td",{children:i()}),e.jsx("td",{children:e.jsx("div",{children:e.jsx("button",{className:"main_btn_style",children:"save"})})})]},x)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"9",children:["No records for ",o]})})]},l)};return e.jsx("div",{className:"table",children:e.jsxs("table",{children:[e.jsx("thead",{className:"shadow fixed-header",children:e.jsxs("tr",{children:[e.jsx("th",{children:"School Name"}),e.jsx("th",{children:"Enrolled"}),e.jsx("th",{children:"Distr."}),e.jsx("th",{children:"Number of Classrooms"}),e.jsx("th",{children:"Number of Consent Packer"}),e.jsx("th",{children:"Total Number of Forms Distr."}),e.jsx("th",{children:"Consents"}),e.jsx("th",{children:"Nurse / Contact Person"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:c.map((t,l)=>e.jsxs(f.Fragment,{children:[n(t,"preK","Pre K"),n(t,"k5","K-5"),n(t,"m6_8","Middle 6-8"),n(t,"high9_12","High 9-12")]},l))})]})})},A=(c,i)=>{const n=s=>s?s.toString().toLowerCase():"",t=n(i.search||""),l=i.year;return c.filter(s=>!l||s.year===l).map(s=>({...s,preK:s.preK.filter(r=>n(r.name).includes(t)),k5:s.k5.filter(r=>n(r.name).includes(t)),m6_8:s.m6_8.filter(r=>n(r.name).includes(t)),high9_12:s.high9_12.filter(r=>n(r.name).includes(t))})).filter(s=>s.preK.length||s.k5.length||s.m6_8.length||s.high9_12.length)},I=()=>{const{filters:c,rowsPerPage:i,currentPage:n,currentPageData:t,totalPages:l,handleFilterChange:o,handleRowsPerPageChange:s,handlePageChange:r,loading:x}=S(u,{search:"",year:"Csdp Program Sy 2020 - 2021"},A),g=L(),m=j.useRef(null);j.useRef(!1);const p=()=>{const h=(N=>{const b=[];return N.forEach(_=>{const{year:C,preK:P,k5:k,m6_8:E,high9_12:v}=_;[P,k,E,v].forEach((F,w)=>{const T=["preK","k5","m6_8","high9_12"][w];F.forEach(a=>{b.push({year:C,group:T,name:a.name,enrolled:a.enrolled,distribution:a.distribution,classroomNum:a.classroomNum,consentPackerNum:a.consentPackerNum,totalFormsDisNum:a.totalFormsDisNum,consents:a.consents,nurse_contact_person:a.nurse_contact_person})})})}),b})(u);g(h,"Eligibility.csv")};return j.useEffect(()=>{const d=m.current,h=()=>{};return d&&d.addEventListener("scroll",h),()=>{d&&d.removeEventListener("scroll",h)}},[]),e.jsxs("div",{className:"distribution auto-sizing",children:[e.jsx(y,{filters:c,onFilterChange:o,data:u,hasYearFilter:!0}),e.jsxs("div",{className:"table_controls",children:[e.jsx("button",{className:"Export_BTN shadow",onClick:p,children:"Export"}),e.jsx(D,{rowsPerPage:i,handleRowsPerPageChange:s})]}),e.jsx("div",{className:"table_area",ref:m,children:x?e.jsx(B,{}):e.jsx("div",{className:"container",children:e.jsx(z,{data:t})})}),l>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"shadow",onClick:()=>r(n-1),disabled:n===1,children:"Back"}),e.jsxs("span",{children:["Page ",n," of ",l]}),e.jsx("button",{className:"shadow",onClick:()=>r(n+1),disabled:n===l,children:"Next"})]})]})};export{I as default};
