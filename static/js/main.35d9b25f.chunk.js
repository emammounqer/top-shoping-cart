(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(t,e,c){},27:function(t,e,c){},28:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(17),r=c.n(a),s=c(9),d=c(20),j=c(7),o=c(2),h=(c(25),c(0));function l(t){var e=t.cartItem,c=t.cartItem.product;return Object(h.jsxs)("tr",{className:"cart-item",children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:c.imgSrc,alt:"icon"})}),Object(h.jsx)("td",{children:c.name}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",value:e.quantity,onChange:function(e){t.handleQuantityChange(c,e.target.value)}})}),Object(h.jsx)("td",{children:c.price}),Object(h.jsx)("td",{children:c.price*e.quantity})]})}c(27);function b(t){var e=t.cartItems,c=e.reduce((function(t,e){return t+e.quantity*e.product.price}),0),n=[];return e.forEach((function(e){n.push(Object(h.jsx)(l,{cartItem:e,cartItems:t.cartItems,handleQuantityChange:t.handleQuantityChange},e.itemId))})),Object(h.jsxs)("div",{className:"cart-body",children:[Object(h.jsxs)("table",{className:"cart-table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"product"}),Object(h.jsx)("th",{children:"quantity"}),Object(h.jsx)("th",{children:"Item price"}),Object(h.jsx)("th",{children:"Price"})]})}),Object(h.jsx)("tbody",{children:n}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{colSpan:"3",children:" "}),Object(h.jsx)("th",{children:"Total Price: "}),Object(h.jsxs)("th",{children:[" ",c," "]})]})})]}),Object(h.jsx)("button",{className:"checkout-button",children:"CHECKOUT"})]})}var u=c.p+"static/media/place.fd8047ce.PNG";c(28);function m(){return Object(h.jsxs)("div",{className:"home-body",children:[Object(h.jsxs)("div",{className:"overview",children:[Object(h.jsx)("h1",{children:"Welcome to Tornado"}),Object(h.jsx)(j.b,{to:"/top-shoping-cart/shop",children:"Shop"})]}),Object(h.jsx)("img",{src:u,alt:"restaurant img"})]})}c(34);function p(t){var e=t.cartItems.length;return Object(h.jsxs)("nav",{children:[Object(h.jsx)(j.b,{to:"/top-shoping-cart/",children:"Home"}),Object(h.jsx)(j.b,{to:"/top-shoping-cart/shop",children:"Shop"}),Object(h.jsxs)(j.b,{to:"/top-shoping-cart/cart",children:["Cart ",Object(h.jsx)("div",{className:"number-cart-items",children:e})]})]})}c(35);function O(t){var e=t.item;return Object(h.jsxs)("div",{className:"product-card",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:e.imgSrc,alt:e.name})}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:e.name}),Object(h.jsx)("p",{children:e.category}),Object(h.jsx)("p",{children:e.price}),Object(h.jsx)("button",{onClick:function(){t.handleAddCartItems(e)},children:"+"})]})]})}c(36);var x=[{id:1,category:"Cocktail",price:"3.00",stocked:!0,name:"Marsh Cocktail",imgSrc:c.p+"static/media/001.097f47ac.PNG"},{id:2,category:"Juice",price:"2.50",stocked:!0,name:"strawberry juice",imgSrc:c.p+"static/media/002.32914d75.PNG"},{id:3,category:"Juice",price:"2.50",stocked:!1,name:"pineapple juice",imgSrc:c.p+"static/media/003.ea946e22.PNG"}];function f(t){return Object(h.jsx)("div",{className:"shop-body",children:x.map((function(e){return Object(h.jsx)(O,{item:e,handleAddCartItems:t.handleAddCartItems},e.name)}))})}function g(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],i=e[1],a=function(t){var e=c.findIndex((function(e){return e.itemId===t.id}));i(e>=0?[].concat(Object(s.a)(c.slice(0,e)),[{itemId:t.id,product:t,quantity:c[e].quantity+1}],Object(s.a)(c.slice(e+1))):[].concat(Object(s.a)(c),[{itemId:t.id,product:t,quantity:1}]))};return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(p,{cartItems:c,handleAddCartItems:a}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/top-shoping-cart",component:m}),Object(h.jsx)(o.a,{path:"/top-shoping-cart/shop",children:Object(h.jsx)(f,{cartItems:c,handleAddCartItems:a})}),Object(h.jsx)(o.a,{path:"/top-shoping-cart/cart",children:Object(h.jsx)(b,{cartItems:c,handleQuantityChange:function(t,e){if(!(e<0)){var n=c.findIndex((function(e){return e.itemId===t.id}));i(n>=0?[].concat(Object(s.a)(c.slice(0,n)),[{itemId:t.id,product:t,quantity:e}],Object(s.a)(c.slice(n+1))):[].concat(Object(s.a)(c),[{itemId:t.id,product:t,quantity:e}]))}}})})]})]})}c(37);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.35d9b25f.chunk.js.map