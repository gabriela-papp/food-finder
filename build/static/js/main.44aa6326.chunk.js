(this["webpackJsonpfood-finder"]=this["webpackJsonpfood-finder"]||[]).push([[0],{28:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t.n(n),i=t(7),l=t.n(i),a=(t(28),t(6)),j=t(8),r=t.n(j),o=t(1),d=s.a.createContext(),O=function(e){var c=e.children,t=Object(n.useState)([]),s=Object(a.a)(t,2),i=s[0],l=s[1],j=Object(n.useState)(""),O=Object(a.a)(j,2),b=O[0],u=O[1],h=Object(n.useState)({lat:null,lng:null}),x=Object(a.a)(h,2),m=x[0],v=x[1],p=Object(n.useState)(!1),f=Object(a.a)(p,2),g=f[0],N=f[1],E=Object(n.useState)(!1),L=Object(a.a)(E,2),M=L[0],S=L[1],T=Object(n.useState)([]),C=Object(a.a)(T,2),P=C[0],A=C[1],J=Object(n.useState)([]),I=Object(a.a)(J,2),U=I[0],V=I[1],y=Object(n.useState)([]),F=Object(a.a)(y,2),Q=F[0],R=F[1];Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){v({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]),Object(n.useEffect)((function(){r.a.get("https://api.foursquare.com/v2/venues/explore?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=".concat(m.lat,",").concat(m.lng,"&query=food&v=20189988&limit=9")).then((function(e){var c=e.data.response.groups;A(c)})).catch((function(e){console.log(e)}))}),[m.lat,m.lng]);return Object(o.jsx)(d.Provider,{value:{venues:i,setVenues:l,location:m,onTextSubmit:function(e){e.preventDefault(),r.a.get("https://api.foursquare.com/v2/venues/search?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=".concat(m.lat,",").concat(m.lng,"&query=").concat(b,"&v=20189988&limit=9")).then((function(e){var c=e.data.response.venues;l(c),u("")})).catch((function(e){console.log(e)}))},input:b,setInput:u,openModal:function(){N(!0)},closeModal:function(){N(!1)},openCatModal:function(){S(!0)},closeCatModal:function(){S(!1)},isCatModalOpen:M,isModalOpen:g,recommendedVenues:P,getVenueId:function(e){V(e),alert(U)},handleCategory:function(e){r.a.get("https://api.foursquare.com/v2/venues/similar?".concat(e,"&client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G")).then((function(e){var c=e.data.response;R(c),console.log(Q)})).catch((function(e){console.log(e)}))}},children:c})},b=function(){return Object(n.useContext)(d)},u=t(4),h=t(10),x=t(21),m=t(20),v=function(){var e=b(),c=e.input,t=e.setInput,s=e.onTextSubmit,i=e.openModal,l=e.closeModal,j=e.openCatModal,d=e.closeCatModal,O=e.isCatModalOpen,v=e.isModalOpen,p=e.handleCategory,f=Object(n.useState)([]),g=Object(a.a)(f,2),N=g[0],E=g[1];Object(n.useEffect)((function(){r.a.get("https://api.foursquare.com/v2/venues/categories?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&v=20189988").then((function(e){var c=e.data.response.categories;E(c)})).catch((function(e){console.log(e)}))}),[]);var L=N.map((function(e){return Object(o.jsx)("li",{style:{listStyle:"none"},onClick:function(){return p(e.id)},children:e.name},e.id)}));return Object(o.jsxs)("div",{children:[v?Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("form",{className:"modal-container",onSubmit:function(e){return s(e)},children:[Object(o.jsx)("h3",{children:"WHAT ARE YOU LOOKING FOR?"}),Object(o.jsx)("input",{id:"standard-basic",value:c,placeholder:"Search places...",onChange:function(e){return t(e.target.value)}}),Object(o.jsx)("button",{className:"close-modal-btn",type:"button",onClick:l,children:Object(o.jsx)(m.a,{})}),console.log(c)]})}):null,Object(o.jsxs)("div",{className:"small-nav",children:[Object(o.jsx)("div",{className:"small-nav-left",children:Object(o.jsx)("h3",{children:"PLACE FINDER | An Official Place Finder App"})}),Object(o.jsx)("div",{className:"small-nav-right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(u.b,{})}),Object(o.jsx)("li",{children:Object(o.jsx)(u.c,{})}),Object(o.jsx)("li",{children:Object(o.jsx)(u.e,{})})]})})]}),Object(o.jsxs)("div",{className:"medium-nav",children:[Object(o.jsx)("div",{className:"medium-nav-left",children:Object(o.jsx)("button",{children:"PLACE FINDER"})}),Object(o.jsx)("div",{className:"medium-nav-right",children:Object(o.jsx)("p",{children:Object(o.jsx)(h.a,{})})})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)("div",{className:"nav-left",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HOME"}),Object(o.jsxs)("li",{onMouseEnter:j,children:[" BY CATEGORY ",Object(o.jsx)("span",{children:Object(o.jsx)(u.a,{})})]})]})}),Object(o.jsx)("div",{className:"nav-right",onClick:i,children:Object(o.jsxs)("li",{children:["SEARCH ",Object(o.jsx)("span",{children:Object(o.jsx)(x.a,{})})]})})]}),O?Object(o.jsx)("div",{className:"cat-modal",onMouseLeave:d,children:Object(o.jsxs)("div",{className:"cat-modal-container",children:[Object(o.jsx)("h3",{children:"CATEGORIES"}),Object(o.jsx)("ul",{className:"categories-list",children:L})]})}):null]})]})};var p=function(){var e=b().venues;return Object(o.jsx)("div",{className:"restaurant-wrapper",children:Object(o.jsx)("div",{className:"restaurant-inner",children:e.map((function(e,c){return Object(o.jsxs)("div",{className:"restaurant-item",children:[Object(o.jsx)("h1",{children:e.name},c),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("i",{children:Object(o.jsx)(u.d,{})})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:e.location.address}),Object(o.jsx)("p",{children:e.location.postalCode}),Object(o.jsx)("p",{children:e.location.cc})]})]})]})}))})})},f=t(23),g=t(9),N={width:"100%",height:"400px"};var E=function(e){var c=e.center,t=b(),n=t.venues,s=(t.recommendedVenueId,n.map((function(e,c){var t={position:{lat:e.location.lat,lng:e.location.lng},animation:{animation:!0}};return Object(o.jsx)(g.c,Object(f.a)({},t),e.id)})));return Object(o.jsx)(g.b,{googleMapsApiKey:"",children:Object(o.jsx)(g.a,{mapContainerStyle:N,center:c,zoom:11,children:Object(o.jsx)("div",{children:s})})})};var L=function(){var e=b(),c=e.recommendedVenues,t=e.getVenueId;return Object(o.jsxs)("div",{className:"recommened-wrapper",children:[Object(o.jsx)("h1",{children:"Recommended Venues"}),c.map((function(e){return Object(o.jsx)("div",{className:"recommended-inner",children:e.items.map((function(e){return Object(o.jsxs)("div",{className:"recommended-item",children:[Object(o.jsx)("h1",{children:e.venue.name}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:function(){t(e.venue.id)},children:Object(o.jsx)("i",{children:Object(o.jsx)(u.d,{})})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:e.venue.location.address}),Object(o.jsx)("p",{children:e.venue.location.postalCode}),Object(o.jsx)("p",{children:e.venue.location.city})]})]})]})}))})}))]})},M=t(22);var S=function(){var e=b(),c=e.location,t=e.venues;return Object(o.jsxs)("div",{children:[Object(o.jsx)(E,{center:c,markers:t}),Object(o.jsxs)("div",{className:"info-suggest",children:[Object(o.jsx)("div",{className:"empty-section"}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"info-section",children:[Object(o.jsx)("i",{children:Object(o.jsx)(u.f,{})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Share. "}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius."]})]}),Object(o.jsxs)("div",{className:"info-section",children:[Object(o.jsx)("i",{children:Object(o.jsx)(h.a,{})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Can't decide? "}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corrupti."]})]}),Object(o.jsxs)("div",{className:"info-section",children:[Object(o.jsx)("i",{children:Object(o.jsx)(M.a,{})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Save your favorite places. "}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tempore."]})]})]}),Object(o.jsx)("div",{className:"suggest"})]}),Object(o.jsx)(p,{venues:t}),Object(o.jsx)(L,{})]})};var T=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"footer-section",children:[Object(o.jsx)("h1",{children:"ABOUT US"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"History of Place Finder"}),Object(o.jsx)("li",{children:"Privacy Policy"}),Object(o.jsx)("li",{children:"FAQ"})]})]}),Object(o.jsxs)("div",{className:"footer-section",children:[Object(o.jsx)("h1",{children:"USEFUL LINKS"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Blog"}),Object(o.jsx)("li",{})]})]}),Object(o.jsxs)("div",{className:"footer-section",children:[Object(o.jsx)("h1",{children:"HERE TO HELP"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolore."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet."})]}),Object(o.jsxs)("div",{className:"footer-section",children:[Object(o.jsx)("h1",{children:"FOLLOW US"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"follow-info",children:[Object(o.jsx)("i",{children:Object(o.jsx)(u.b,{})}),Object(o.jsx)("p",{children:" Facebook"})]}),Object(o.jsxs)("div",{className:"follow-info",children:[Object(o.jsx)("i",{children:Object(o.jsx)(u.c,{})}),Object(o.jsx)("p",{children:" Instagram"})]}),Object(o.jsxs)("div",{className:"follow-info",children:[Object(o.jsx)("i",{children:Object(o.jsx)(u.e,{})}),Object(o.jsx)("p",{children:" Pinterest"})]})]})]}),Object(o.jsx)("div",{className:"copyright",children:Object(o.jsxs)("p",{children:["Copyright \xa9 2021",Object(o.jsx)("span",{children:" PLACE FINDER."})]})})]})};t(48);var C=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(v,{}),Object(o.jsx)(S,{}),Object(o.jsx)(T,{})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,l=c.getTTFB;t(e),n(e),s(e),i(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{children:Object(o.jsx)(C,{})})}),document.getElementById("root")),P()}},[[49,1,2]]]);
//# sourceMappingURL=main.44aa6326.chunk.js.map