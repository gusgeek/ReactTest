(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{62:function(e,c,t){},68:function(e,c,t){},69:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),n=t(31),l=t.n(n),i=(t(39),t(40),t(62),t(9)),r=t(4),o=t(33),d=t(7),j=s.a.createContext({}),b=t(1);function m(e){var c=e.original,t=void 0===c?[]:c,s=e.children,n=Object(a.useState)(t),l=Object(d.a)(n,2),i=l[0],r=l[1];function m(e){var c=e.id;return console.log(c),void 0===c?void 0:void 0!==function(e){return i.find((function(c){return c.id===e}))}(c)}return Object(b.jsx)(j.Provider,{value:{cache:i,addItem:function(e){console.log(e),m(e)?alert("Este Articulo ya esta en el Carrito"):(r([].concat(Object(o.a)(i),[e])),console.log("Articulo agregado!"))},isInCart:m,getCache:function(){return i},cleanCart:function(e){return r([]),!0},delItemCache:function(e){for(var c=0;c<i.length;c++){if(i[c].id===e){var t=function(e,c){return e.filter((function(e){return e!=c}))}(i,i[c]);r(t)}}return!0},cacheSize:i.length},children:s})}t(23);var x=function(){var e=Object(a.useContext)(j).cacheSize;return Object(b.jsx)(i.b,{to:"/cart",children:Object(b.jsxs)("i",{className:"bi-cart",style:{fontSize:20,color:"white"},children:[" ",e," "]})})},O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark","aria-label":"Ninth navbar example",children:Object(b.jsxs)("div",{className:"container-xl",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Tienda Computacion"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample07XL","aria-controls":"navbarsExample07XL","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExample07XL",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Inicio"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Ultimos Ingresos"})}),Object(b.jsxs)("li",{className:"nav-item dropdown",children:[Object(b.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown07XL","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categorias"}),Object(b.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdown07XL",children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/categorias/1",className:"dropdown-item","aria-current":"page",children:"Teclados"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/categorias/2",className:"dropdown-item","aria-current":"page",children:"Mouse"})})]})]})]}),Object(b.jsx)(x,{})]})]})})})},u=(t(68),function(){return Object(b.jsx)("section",{className:"py-5 text-center container",children:Object(b.jsx)("div",{className:"row py-lg-5",children:Object(b.jsx)("div",{className:"col-lg-6 col-md-8 mx-auto",children:Object(b.jsx)("h1",{className:"fw-light",children:"Tus articulos informaticos, a la orden"})})})})}),h=function(e){var c=Object(a.useContext)(j).addItem,t=Object(a.useState)(0),s=Object(d.a)(t,2),n=s[0],l=s[1],r=Object(a.useState)("block"),o=Object(d.a)(r,2),m=o[0],x=o[1],O=Object(a.useState)("none"),u=Object(d.a)(O,2),h=u[0],p=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{to:"/cart",style:{display:"".concat(h)},className:"btn btn-warning",type:"button","aria-current":"page",children:"Ir al Carrito"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{style:{display:"".concat(m)},children:Object(b.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("span",{className:"input-group-text btn btn-outline-secondary",onClick:function(){0==n||l(n-1)},children:"-"}),Object(b.jsx)("input",{type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)",name:e.productID,value:n,readOnly:!0}),Object(b.jsx)("span",{className:"input-group-text btn btn-outline-secondary",onClick:function(){e.cantidad!=n&&l(n+1)},children:"+"}),Object(b.jsx)("button",{className:"btn btn-success",type:"button",id:"button-addon2",onClick:function(){n>0?function(e,t,a,s){t>0&&(x("none"),p("block"),c({id:e,name:a,cant:t,precio:s}))}(e.productID,n,e.nombre,e.costo):alert("Seleccione la cantidad que desee")},children:"Agregar al Carrito"})]},e.productID)})})]})},p=(t(69),function(e){var c=e.item;return Object(b.jsx)("div",{className:"col d-flex align-items-stretch",children:Object(b.jsxs)("div",{className:"card shadow-sm",children:[Object(b.jsx)("img",{src:c.img,alt:"",className:"card-img-topv3",width:"",height:"90px;"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"card-text",children:Object(b.jsxs)("strong",{children:[c.nombre," - $",c.precio]})}),Object(b.jsx)(h,{cantidad:c.disponible,nombre:c.nombre,productID:c.id,costo:c.precio}),Object(b.jsx)("div",{className:"col-md-12 text-center",children:Object(b.jsx)(i.b,{to:"/articulo/".concat(c.id),className:"btn btn-warning",type:"button",children:"Ver Articulo"})})]})]})},c.id)}),f=function(e){return e.elementos.map((function(e){return Object(b.jsx)(p,{item:e})}))},v=t(27),g=(t(70),v.a.initializeApp({apiKey:"AIzaSyBQI6xF2UpcgvMJfmeuk5VaZdVDgWAZy10",authDomain:"react-tc-e1011.firebaseapp.com",projectId:"react-tc-e1011",storageBucket:"react-tc-e1011.appspot.com",messagingSenderId:"993616870491",appId:"1:993616870491:web:40e025073a3f7da797137e"}));function N(){return v.a.firestore(g)}var y=function(){var e=Object(a.useState)("block"),c=Object(d.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)([]),l=Object(d.a)(n,2),i=l[0],r=l[1];return Object(a.useEffect)((function(){N().collection("items").get().then((function(e){console.log(e),0===e.size?console.log("No hay resultados"):r(e.docs.map((function(e){var c=e.data();return Object.assign(c,{id:e.id})})))})).catch((function(e){return console.log(e)})).finally((function(){s("none")}))}),[]),Object(b.jsxs)("div",{className:"album py-5 bg-light",children:[Object(b.jsx)("div",{style:{display:"".concat(t)},children:Object(b.jsx)("div",{className:"loader",children:"Loading..."})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:Object(b.jsx)(f,{elementos:i})})})]})},w=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(y,{})]})},C=(t(72),function(){return Object(b.jsx)("section",{className:"py-5 text-center container",children:Object(b.jsx)("div",{className:"row py-lg-5",children:Object(b.jsx)("div",{className:"col-lg-6 col-md-8 mx-auto",children:Object(b.jsx)("h1",{className:"fw-light",children:"Articulos de la categoria"})})})})}),k=function(e){var c=e.elementos,t=Object(r.f)().id;return c.filter((function(e){return e.cat==t})).map((function(e){return Object(b.jsx)(p,{item:e})}))},S=function(){var e=Object(a.useState)("block"),c=Object(d.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)([]),l=Object(d.a)(n,2),i=l[0],r=l[1];return Object(a.useEffect)((function(){N().collection("items").get().then((function(e){console.log(e),0===e.size?console.log("No hay resultados"):r(e.docs.map((function(e){var c=e.data();return Object.assign(c,{id:e.id})})))})).catch((function(e){return console.log(e)})).finally((function(){s("none")}))}),[]),Object(b.jsxs)("div",{className:"album py-5 bg-light",children:[Object(b.jsx)("div",{style:{display:"".concat(t)},children:Object(b.jsx)("div",{className:"loader",children:"Loading..."})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:Object(b.jsx)(k,{elementos:i})})})]})},I=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)(C,{}),Object(b.jsx)(S,{})]})},A=t(34),D=(t(73),function(e){var c=e.elementos;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row ",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card shadow-sm",children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("strong",{children:c.nombre})})}),Object(b.jsx)("img",{src:c.img,alt:"",className:"card-img-topv2",width:""}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)(h,{cantidad:c.disponible,nombre:c.nombre,productID:c.id,costo:c.precio})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Precio"}),": $",c.precio," | ",Object(b.jsx)("strong",{children:"Stock Disponible"}),": ",c.disponible," | ",Object(b.jsx)("strong",{children:"Codigo"}),": ",c.id," "]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Descripcion del Articulo"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),c.detail]})]})]})})})})},c.id)}),E=function(){var e=Object(r.f)().id,c=Object(a.useState)("block"),t=Object(d.a)(c,2),s=t[0],n=t[1],l=Object(a.useState)("none"),i=Object(d.a)(l,2),o=i[0],j=i[1],m=Object(a.useState)([]),x=Object(d.a)(m,2),O=x[0],u=x[1];return Object(a.useEffect)((function(){N().collection("items").doc(e).get().then((function(e){e.exists?u(Object(A.a)({id:e.id},e.data())):console.log("itemNoDisponible")})).catch((function(e){return console.log(e)})).finally((function(){n("none"),j("block")}))}),[]),Object(b.jsxs)("div",{className:"album py-5 bg-light",children:[Object(b.jsx)("div",{style:{display:"".concat(s)},children:Object(b.jsx)("div",{className:"loader",children:"Loading..."})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",style:{display:"".concat(o)},children:Object(b.jsx)(D,{elementos:O})})})]})},L=function(e){var c=(new Date).toISOString(),t=N().collection("ventas"),s=Object(a.useState)(0),n=Object(d.a)(s,2),l=n[0],i=n[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"album py-5 bg-light",children:[Object(b.jsxs)("div",{className:"container",style:{display:"".concat(0===l?"block":"none")},children:[Object(b.jsx)("h1",{className:"fw-light",children:"Terminar mi Compra"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("form",{className:"row g-3",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputEmail4",className:"form-label",children:"Nombre"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"nom"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputPassword4",className:"form-label",children:"Apellido"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"dispo"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputPassword4",className:"form-label",children:"Email"}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"dispo"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputPassword4",className:"form-label",children:"Telefono"}),Object(b.jsx)("input",{type:"number",className:"form-control",id:"dispo"})]}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("button",{type:"submit",onClick:function(a){a.preventDefault();var s=0;e.cart.map((function(e){return s+=e.cant*e.precio}));var n={buyer:{nombre:a.target.form[0].value,apellido:a.target.form[1].value,email:a.target.form[2].value,telefono:a.target.form[3].value},items:e.cart,date:c,total:s};console.log(n),t.add(n).then((function(e){var c=e.id;return i(c)})).catch((function(e){return console.log(e)}))},className:"btn btn-primary",children:"Guardar"})})]})})})]}),Object(b.jsx)("div",{className:"container",style:{display:"".concat(0!==l?"block":"none")},children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("h2",{className:"fw-light",children:Object(b.jsxs)("center",{children:["Gracias por su Compra!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Su numero de orden es ",Object(b.jsx)("br",{})," ",Object(b.jsx)("strong",{children:l})]})})})})]})})},T=function(){var e=Object(a.useContext)(j),c=e.getCache,t=e.delItemCache,s=e.cleanCart,n=c();return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"py-5 text-center container",children:Object(b.jsx)("div",{className:"row py-lg-5",children:Object(b.jsx)("div",{className:"col-lg-6 col-md-8 mx-auto",children:Object(b.jsx)("h1",{className:"fw-light",children:"Tu lista de Compras"})})})}),Object(b.jsx)("div",{className:"album py-5 bg-light",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",style:{display:"".concat(0===n.length?"none":"block")},children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Articulo"}),Object(b.jsx)("th",{scope:"col",children:"Cantidad"}),Object(b.jsx)("th",{scope:"col",children:"Precio"}),Object(b.jsx)("th",{scope:"col",children:"Utilidad"})]})}),Object(b.jsx)("tbody",{children:n.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:Object(b.jsx)(i.b,{to:"/articulo/".concat(e.id),"aria-current":"page",children:e.name})}),Object(b.jsx)("td",{children:e.cant}),Object(b.jsxs)("td",{children:["$",e.cant*e.precio]}),Object(b.jsx)("td",{children:Object(b.jsx)("i",{className:"bi-trash",style:{fontSize:15,color:"black"},onClick:function(){t(e.id)}})})]})}))})]}),Object(b.jsx)("br",{}),Object(b.jsx)("center",{children:Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){s()},children:"Vaciar Carrito"})}),Object(b.jsx)("br",{}),Object(b.jsx)(L,{cart:n})]})}),Object(b.jsx)("div",{className:"row",style:{display:"".concat(0===n.length?"block":"none")},children:Object(b.jsx)("h4",{className:"fw-light",children:"Tu lista se encuentra vacia"})})]})})]})},z=function(){var e=N().collection("items");return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"py-5 text-center container",children:Object(b.jsx)("div",{className:"row py-lg-5",children:Object(b.jsx)("div",{className:"col-lg-6 col-md-8 mx-auto",children:Object(b.jsx)("h1",{className:"fw-light",children:"Insertador de Articulos"})})})}),Object(b.jsx)("div",{className:"album py-5 bg-light",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("form",{className:"row g-3",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputEmail4",className:"form-label",children:"Nombre"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"nom"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputPassword4",className:"form-label",children:"Disponible"}),Object(b.jsx)("input",{type:"number",className:"form-control",id:"dispo"})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("label",{for:"inputAddress",className:"form-label",children:"Imagen URL"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"img"})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("label",{for:"inputAddress",className:"form-label",children:"Detalle"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"detail"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputCity",className:"form-label",children:"Precio"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"price"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{for:"inputState",className:"form-label",children:"Categoria"}),Object(b.jsxs)("select",{id:"selectcat",className:"form-select",children:[Object(b.jsx)("option",{value:"1",children:"Teclados"}),Object(b.jsx)("option",{value:"2",children:"Mouse"})]})]}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault();var t={nombre:c.target.form[0].value,disponible:c.target.form[1].value,img:c.target.form[2].value,detail:c.target.form[3].value,precio:c.target.form[4].value,cat:c.target.form[5].value},a=e.add(t);return console.log(a),a},className:"btn btn-primary",children:"Guardar"})})]})})})})})]})};var P=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(m,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,children:Object(b.jsx)(w,{})}),Object(b.jsx)(r.a,{path:"/categorias/:id",children:Object(b.jsx)(I,{})}),Object(b.jsx)(r.a,{path:"/articulo/:id",children:Object(b.jsx)(E,{})}),Object(b.jsx)(r.a,{path:"/cart",children:Object(b.jsx)(T,{})}),Object(b.jsx)(r.a,{path:"/backend/insertItem",children:Object(b.jsx)(z,{})})]})]})})})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.e559599c.chunk.js.map