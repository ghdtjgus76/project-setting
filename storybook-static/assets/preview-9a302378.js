const{useMemo:g,useEffect:b}=__STORYBOOK_MODULE_PREVIEW_API__;var r="paddings",s="0",h=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=e=>{var a;return!e||e.disable||!((a=e.values)!=null&&a.length)?[]:e.values.map(n=>{let{name:d,value:t}=n,l=e.default===d;return{name:d,value:t,default:l}})},E=(e,a)=>{var n;return a===s||e.find(({value:d})=>d===a)?a:((n=e.find(d=>d.default))==null?void 0:n.value)??s},_=(e,a)=>{let n=document.getElementById(e);if(n)n.innerHTML!==a&&(n.innerHTML=a);else{let d=document.createElement("style");d.setAttribute("id",e),d.innerHTML=a,document.head.appendChild(d)}},$=(e,a)=>{var c;let{id:n,globals:d,parameters:t,viewMode:l}=a,u=(c=d[r])==null?void 0:c.value,m=t[r],o=l==="docs",i=o?`#anchor--${a.id} .sb-story`:"#storybook-root",p=g(()=>E(M(m),u)??s,[m,u]),v=g(()=>`
      ${i} {
        margin: 0;
        padding: ${p} !important;
        ${h()?"":"transition: padding .3s;"}
      }

      ${i} .innerZoomElementWrapper > div {
        border-width: 0 !important;
      }
    `,[i,p]);return b(()=>{let f=o?`addon-paddings-docs-${n}`:"addon-paddings";_(f,v)},[n,o,v]),e()},x={decorators:[$],globals:{[r]:!1},parameters:{[r]:{values:[{name:"Small",value:"16px"},{name:"Medium",value:"32px"},{name:"Large",value:"64px"}]}}},y=x;export{y as default};
//# sourceMappingURL=preview-9a302378.js.map
