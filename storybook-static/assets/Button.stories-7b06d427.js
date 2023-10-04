import{r as R}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var E={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=R,j=Symbol.for("react.element"),P=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,w=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function O(o,e,n){var r,a={},t=null,d=null;n!==void 0&&(t=""+n),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)q.call(e,r)&&!z.hasOwnProperty(r)&&(a[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:j,type:o,key:t,ref:d,props:a,_owner:w.current}}i.Fragment=P;i.jsx=O;i.jsxs=O;E.exports=i;var N=E.exports;const m=({primary:o=!1,size:e="medium",backgroundColor:n,label:r,...a})=>{const t=o?"storybook-button--primary":"storybook-button--secondary";return N.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,t].join(" "),style:{backgroundColor:`${n}`},...a,children:r})};try{m.displayName="Button",m.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const V={title:"Example/Button",component:m,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},s={args:{primary:!0,label:"Button",backgroundColor:"red"}},l={args:{label:"Button",backgroundColor:"white"}},u={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var p,y,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: 'red'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,f,_;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    backgroundColor: 'white'
  }
}`,...(_=(f=l.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,v,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,S,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const T=["Primary","Secondary","Large","Small"];export{u as Large,s as Primary,l as Secondary,c as Small,T as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories-7b06d427.js.map
