import{j as e,aA as g,aM as K,a3 as R,b1 as D,b6 as j,r as m,b3 as L,b4 as y,b5 as B}from"./index-Ftr6g6ZS.js";import{u as A}from"./useExportCsv-Ba-bnacN.js";const M=({data:o})=>{const a=()=>e.jsx("div",{children:e.jsx(R,{fullWidth:!0,id:"outlined-basic",variant:"outlined"})}),t=(n,l,d)=>{const s=n[l];return e.jsxs(g.Fragment,{children:[e.jsx("tr",{children:e.jsxs("td",{colSpan:"9",className:"section-header",children:[n.year," - ",d]})}),s.length>0?s.map((r,x)=>e.jsxs("tr",{className:"editable_content",children:[e.jsx("td",{children:r.name}),e.jsx("td",{children:a()}),e.jsx("td",{children:e.jsx(K,{})}),e.jsx("td",{children:a()}),e.jsx("td",{children:a()}),e.jsx("td",{children:a()}),e.jsx("td",{children:a()}),e.jsx("td",{children:a()}),e.jsx("td",{children:e.jsx("button",{className:"main_btn_style",children:"save"})})]},x)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"9",children:["No records for ",d]})})]},l)};return e.jsx("div",{className:"table",children:e.jsxs("table",{children:[e.jsx("thead",{className:"shadow fixed-header",children:e.jsxs("tr",{children:[e.jsx("th",{children:"School Name"}),e.jsx("th",{children:"Enrolled"}),e.jsx("th",{children:"Distr."}),e.jsx("th",{children:"Number of Classrooms"}),e.jsx("th",{children:"Number of Consent Packer"}),e.jsx("th",{children:"Total Number of Forms Distr."}),e.jsx("th",{children:"Consents"}),e.jsx("th",{children:"Nurse / Contact Person"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:o.map((n,l)=>e.jsxs(g.Fragment,{children:[t(n,"preK","Pre K"),t(n,"k5","K-5"),t(n,"m6_8","Middle 6-8"),t(n,"high9_12","High 9-12")]},l))})]})})},q=(o,a)=>{const t=s=>s?s.toString().toLowerCase():"",n=t(a.search||""),l=a.year;return o.filter(s=>!l||s.year===l).map(s=>({...s,preK:s.preK.filter(r=>t(r.name).includes(n)),k5:s.k5.filter(r=>t(r.name).includes(n)),m6_8:s.m6_8.filter(r=>t(r.name).includes(n)),high9_12:s.high9_12.filter(r=>t(r.name).includes(n))})).filter(s=>s.preK.length||s.k5.length||s.m6_8.length||s.high9_12.length)},Q=()=>{const{filters:o,rowsPerPage:a,currentPage:t,currentPageData:n,totalPages:l,handleFilterChange:d,handleRowsPerPageChange:s,handlePageChange:r,loading:x}=D(j,{search:"",year:"Csdp Program Sy 2020 - 2021"},q),N=A(),f=m.useRef(null),u=m.useRef(!1),p=()=>{const h=(_=>{const b=[];return _.forEach(C=>{const{year:P,preK:k,k5:E,m6_8:F,high9_12:v}=C;[k,E,F,v].forEach((w,S)=>{const T=["preK","k5","m6_8","high9_12"][S];w.forEach(i=>{b.push({year:P,group:T,name:i.name,enrolled:i.enrolled,distribution:i.distribution,classroomNum:i.classroomNum,consentPackerNum:i.consentPackerNum,totalFormsDisNum:i.totalFormsDisNum,consents:i.consents,nurse_contact_person:i.nurse_contact_person})})})}),b})(j);N(h,"Eligibility.csv")};return m.useEffect(()=>{const c=f.current,h=()=>{c&&!u.current&&(u.current=!0,requestAnimationFrame(()=>{c.scrollLeft+=1,u.current=!1}))};return c&&c.addEventListener("scroll",h),()=>{c&&c.removeEventListener("scroll",h)}},[]),e.jsxs("div",{className:"distribution auto-sizing",children:[e.jsx(L,{filters:o,onFilterChange:d,data:j,hasYearFilter:!0}),e.jsxs("div",{className:"table_controls",children:[e.jsx("button",{className:"Export_BTN shadow",onClick:p,children:"Export"}),e.jsx(y,{rowsPerPage:a,handleRowsPerPageChange:s})]}),e.jsx("div",{className:"table_area",ref:f,children:x?e.jsx(B,{}):e.jsx("div",{className:"container",children:e.jsx(M,{data:n})})}),l>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"shadow",onClick:()=>r(t-1),disabled:t===1,children:"Back"}),e.jsxs("span",{children:["Page ",t," of ",l]}),e.jsx("button",{className:"shadow",onClick:()=>r(t+1),disabled:t===l,children:"Next"})]})]})};export{Q as default};
