const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dental_Charts-C0Q8g50w.js","assets/index-DZgzmXta.js","assets/index-5D6HASuf.css","assets/Pie_Dental_Charts-BCDLxtwi.js","assets/DashboardTable-DGeBszOu.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,bk as i,bl as o,bm as x,bn as j,bo as m,bp as b,bq as v,br as S,bs as _,bt as u,bu as n,H as p,b5 as l}from"./index-DZgzmXta.js";const D="/dental_software/assets/Banner_Full-BXsnDZUW.svg",g=()=>{var[a,t]=s.useState(new Date);return s.useEffect(()=>{var h=setInterval(()=>t(new Date),1e3);return function(){clearInterval(h)}}),e.jsx("p",{children:a.toLocaleDateString()})},r=s.lazy(()=>i(()=>import("./Dental_Charts-C0Q8g50w.js"),__vite__mapDeps([0,1,2]))),c=s.lazy(()=>i(()=>import("./Pie_Dental_Charts-BCDLxtwi.js"),__vite__mapDeps([3,1,2]))),d=s.lazy(()=>i(()=>import("./DashboardTable-DGeBszOu.js"),__vite__mapDeps([4,1,2]))),w=()=>e.jsxs("div",{className:"dashboard auto-sizing",children:[e.jsxs("div",{className:"initals f-center",children:[e.jsx(L,{}),e.jsxs("div",{className:"numerical_data",children:[e.jsx(T,{}),e.jsx(y,{}),e.jsx(f,{})]})]}),e.jsx("div",{className:"statistic_charts",children:e.jsxs(s.Suspense,{fallback:e.jsx("div",{children:"Loading Charts..."}),children:[e.jsxs("div",{className:"line_charts f-center",children:[e.jsx(r,{chartLabel:"CSDP Program Trends",chartType:"area",series:o,xLabels:x}),e.jsx(r,{chartLabel:"Oral Health Status (%) Summary",chartType:"bar",series:j,xLabels:m}),e.jsx(r,{chartLabel:"% Of Children Receiving The Following Service",chartType:"bar",series:b,xLabels:v,stacked:!0})]}),e.jsxs("div",{className:"pie_charts f-center",children:[e.jsx(c,{chartLabel:"Grade",series:S}),e.jsx(c,{chartLabel:"Age",series:_}),e.jsx(c,{chartLabel:"Race",series:u})]})]})}),e.jsxs("div",{className:"tables",children:[e.jsxs(s.Suspense,{fallback:e.jsx("div",{children:"Loading Table..."}),children:[e.jsx("h1",{children:"CSDP's Statistics By School"}),e.jsx("br",{}),e.jsx(d,{tableTitle:"CSDP's Statistics By School",data:n})]}),e.jsxs(s.Suspense,{fallback:e.jsx("div",{children:"Loading Table..."}),children:[e.jsx("h1",{children:"CSDP's Statistics By School"}),e.jsx("br",{}),e.jsx(d,{tableTitle:"CSDP's Statistics By Facilities",data:n})]})]})]}),L=()=>e.jsx("div",{className:"welcome_block shadow ",children:p.map((a,t)=>e.jsxs("div",{className:"dotted-bg",children:[e.jsx("img",{src:D,alt:""}),e.jsxs("div",{className:"greetings",children:[e.jsx(g,{}),e.jsx("h1",{children:"Welcome Back!"}),e.jsx("h2",{children:a.username})]})]},t))}),T=l.memo(()=>e.jsxs("div",{className:"active_schools active_data shadow",children:[e.jsx("h2",{children:"Active Schools"}),e.jsx("h1",{children:"190"})]})),y=l.memo(()=>e.jsxs("div",{className:"active_students active_data shadow",children:[e.jsx("h2",{children:"Active Students"}),e.jsx("h1",{children:"190"})]})),f=l.memo(()=>e.jsxs("div",{className:"total_screened active_data shadow",children:[e.jsx("h2",{children:"Total Screened"}),e.jsx("h1",{children:"190"})]}));export{w as default};
