(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),o=n(18),l=n(8),u=n(55),s=(n(75),n(23)),m=n(7),p=(n(76),n(21)),d=Object(m.a)([function(e){return e.directoryReducer}],function(e){return e.sections}),f=(n(77),n(78),Object(s.g)(function(e){var t=e.title,n=e.imageUrl,a=e.linkUrl,c=e.size,i=e.match,o=e.history;return r.a.createElement("div",{className:"".concat(c," menu-item"),onClick:function(){return o.push("".concat(i.url).concat(a))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),b=Object(m.b)({sections:d}),E=Object(l.b)(b)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(p.a)(e,["id"]);return r.a.createElement(f,Object.assign({key:t},n))}))}),O=n(12),v=n(13);function h(){var e=Object(O.a)(["\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 20px 80px;\n"]);return h=function(){return e},e}var S=v.b.div(h()),g=function(){return r.a.createElement(S,null,r.a.createElement(E,null))},_={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},I=n(2),N=n.n(I),y=n(9),C=n(26),w=n(29),j=n.n(w),x=(n(81),n(84),function(){var e=Object(C.a)(N.a.mark(function e(t,n){var a,r,c,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=T.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(y.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.error("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}());j.a.initializeApp({apiKey:"AIzaSyAq4ZL36hdFTCeIz0gZwHwMg2jDJfzr2tk",authDomain:"crwn-app-83a83.firebaseapp.com",databaseURL:"https://crwn-app-83a83.firebaseio.com",projectId:"crwn-app-83a83",storageBucket:"",messagingSenderId:"573893737141",appId:"1:573893737141:web:d7e7310714d560b1"});var k=j.a.auth(),T=j.a.firestore(),U=function(e){return e.docs.map(function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{})},R=function(){return new Promise(function(e,t){var n=k.onAuthStateChanged(function(t){n(),e(t)},t)})},L=new j.a.auth.GoogleAuthProvider;L.setCustomParameters({prompt:"select_account"});j.a;var A=function(e){return{type:_.FETCH_COLLECTIONS_SUCCESS,payload:e}},G=function(e){return{type:_.FETCH_COLLECTIONS_FAILURE,payload:e}},F=n(11),P=function(e){return e.shopReducer},M=Object(m.a)([P],function(e){return e.collections}),H=Object(m.a)([M],function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),D=Object(m.a)([P],function(e){return e.isFetching}),q=Object(m.a)([P],function(e){return!!e.collections});function z(){var e=Object(O.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return z=function(){return e},e}function V(){var e=Object(O.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return V=function(){return e},e}var W=v.b.div(V()),B=v.b.div(z()),K=function(e){return function(t){var n=t.isLoading,a=Object(p.a)(t,["isLoading"]);return n?r.a.createElement(W,null,r.a.createElement(B,null)):r.a.createElement(e,a)}},J=(n(86),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}),$=function(){return{type:J.TOGGLE_CART_HIDDEN}},Y=function(e){return{type:J.ADD_ITEM,payload:e}},Z=function(){return{type:J.CLEAR_CART}};function Q(){var e=Object(O.a)(['\n  min-width: 165px;\n  width: auto;\n  border: none;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  ',"\n"]);return Q=function(){return e},e}function X(){var e=Object(O.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return X=function(){return e},e}function ee(){var e=Object(O.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(O.a)(["\n  background-color: black;\n  color: white;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return te=function(){return e},e}var ne=Object(v.a)(te()),ae=Object(v.a)(ee()),re=Object(v.a)(X()),ce=v.b.button(Q(),function(e){return e.isGoogleSignIn?re:e.inverted?ae:ne}),ie=function(e){return r.a.createElement(ce,e,e.children)},oe=Object(l.b)(null,function(e){return{addItem:function(t){return e(Y(t))}}})(function(e){var t=e.item,n=e.addItem,a=t.imageUrl,c=t.name,i=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i)),r.a.createElement(ie,{onClick:function(){return n(t)},inverted:!0},"Add to Cart"))}),le=(n(87),Object(l.b)(function(e,t){return{collection:(n=t.match.params.collectionId,Object(m.a)([M],function(e){return e?e[n]:null}))(e)};var n})(function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map(function(e){return r.a.createElement(oe,{key:e.id,item:e})})))})),ue=Object(m.b)({isLoading:function(e){return!q(e)}}),se=Object(F.d)(Object(l.b)(ue),K)(le),me=(n(88),n(89),Object(s.g)(function(e){var t=e.title,n=e.items,a=e.match;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement(o.b,{to:"".concat(a.path,"/").concat(t.toLowerCase())},r.a.createElement("h1",{className:"title"},t.toUpperCase())),r.a.createElement("div",{className:"preview"},n.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(oe,{key:e.id,item:e})})))})),pe=Object(m.b)({collections:H}),de=Object(l.b)(pe)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(p.a)(e,["id"]);return r.a.createElement(me,Object.assign({key:t},n))}))}),fe=Object(m.b)({isLoading:D}),be=Object(F.d)(Object(l.b)(fe),K)(de),Ee=Object(l.b)(null,function(e){return{fetchCollectionsStart:function(){return e({type:_.FETCH_COLLECTIONS_START})}}})(function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(a.useEffect)(function(){t()},[t]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(s.b,{exact:!0,path:"".concat(n.path),component:be}),r.a.createElement(s.b,{path:"".concat(n.path,"/:collectionId"),component:se}))}),Oe=function(e){return e.cartReducer},ve=Object(m.a)([Oe],function(e){return e.cartItems}),he=Object(m.a)([ve],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),Se=Object(m.a)([ve],function(e){return e.reduce(function(e,t){return e+t.price*t.quantity},0)}),ge=Object(m.a)([Oe],function(e){return e.hidden}),_e=(n(90),Object(l.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:J.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Y(t))},removeItem:function(t){return e(function(e){return{type:J.REMOVE_ITEM,payload:e}}(t))}}})(function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.imageUrl,o=t.name,l=t.quantity,u=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:""})),r.a.createElement("span",{className:"name"},o),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},u),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))})),Ie=n(59),Ne=n.n(Ie),ye=n(60),Ce=n.n(ye),we=function(e){var t=e.price,n=100*t;return r.a.createElement(Ne.a,{label:"Pay now",name:"CRWN Clouthing LTd",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay now",token:function(e){Ce()({url:"payment",method:"POST",data:{amount:n,token:e}}).then(function(e){console.log(e),alert("Payment successful")}).catch(function(e){console.error("Payment error",JSON.parse(e)),alert("There was an issue with your payment")})},stripeKey:"pk_test_hltUtgYF7bKGHRZjmxIULL6V00q93AFyvh"})},je=(n(107),Object(m.b)({cartItems:ve,total:Se})),xe=Object(l.b)(je)(function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(_e,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test Credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - cvv: 123"),r.a.createElement(we,{price:n}))});function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ue=r.a.createElement("title",null,"Group"),Re=r.a.createElement("desc",null,"Created with Sketch."),Le=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ae=function(e){var t=e.svgRef,n=Te(e,["svgRef"]);return r.a.createElement("svg",ke({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),Ue,Re,Le)},Ge=r.a.forwardRef(function(e,t){return r.a.createElement(Ae,ke({svgRef:t},e))});n.p;function Fe(){var e=Object(O.a)(["\n  padding: 10px 15px;\n  text-transform: uppercase;\n  color: black;\n  cursor: pointer;\n"]);return Fe=function(){return e},e}function Pe(){var e=Object(O.a)(["\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n"]);return Pe=function(){return e},e}function Me(){var e=Object(O.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Me=function(){return e},e}function He(){var e=Object(O.a)(["\n  height: 70px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return He=function(){return e},e}var De=v.b.div(He()),qe=Object(v.b)(o.b)(Me()),ze=v.b.div(Pe()),Ve=Object(v.b)(o.b)(Fe());n(108);function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ke=r.a.createElement("g",null),Je=r.a.createElement("g",null),$e=r.a.createElement("g",null),Ye=r.a.createElement("g",null),Ze=r.a.createElement("g",null),Qe=r.a.createElement("g",null),Xe=r.a.createElement("g",null),et=r.a.createElement("g",null),tt=r.a.createElement("g",null),nt=r.a.createElement("g",null),at=r.a.createElement("g",null),rt=r.a.createElement("g",null),ct=r.a.createElement("g",null),it=r.a.createElement("g",null),ot=r.a.createElement("g",null),lt=function(e){var t=e.svgRef,n=Be(e,["svgRef"]);return r.a.createElement("svg",We({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ke,Je,$e,Ye,Ze,Qe,Xe,et,tt,nt,at,rt,ct,it,ot)},ut=r.a.forwardRef(function(e,t){return r.a.createElement(lt,We({svgRef:t},e))}),st=(n.p,Object(m.b)({itemsCount:he})),mt=Object(l.b)(st,function(e){return{toggleCartHidden:function(){return e($())}}})(function(e){var t=e.toggleCartHidden,n=e.itemsCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ut,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}),pt=(n(109),n(110),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," X $",a)))}),dt=Object(m.b)({cartItems:ve}),ft=Object(s.g)(Object(l.b)(dt)(function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(pt,{item:e,key:e.id})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(ie,{onClick:function(){n.push("/checkout"),a($())}},"Go To CheckOut"))})),bt={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",GOOGLE_SIGN_IN_SUCCESS:"GOOGLE_SIGN_IN_SUCCESS",GOOGLE_SIGN_IN_FAILURE:"GOOGLE_SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",EMAIL_SIGN_IN_SUCCESS:"EMAIL_SIGN_IN_SUCCESS",EMAIL_SIGN_IN_FAILURE:"EMAIL_SIGN_IN_FAILURE",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},Et=function(e){return{type:bt.SIGN_IN_SUCCESS,payload:e}},Ot=function(e){return{type:bt.SIGN_IN_FAILURE,payload:e}},vt=function(){return{type:bt.SIGN_OUT_SUCCESS}},ht=function(e){return{type:bt.SIGN_OUT_FAILURE,payload:e}},St=function(e){var t=e.user,n=e.additionalData;return{type:bt.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},gt=function(e){return{type:bt.SIGN_UP_FAILURE,payload:e}},_t=Object(m.a)([function(e){return e.userReducer}],function(e){return e.currentUser}),It=Object(m.b)({currentUser:_t,hidden:ge}),Nt=Object(l.b)(It,function(e){return{signOutStart:function(){return e({type:bt.SIGN_OUT_START})}}})(function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement(De,null,r.a.createElement(qe,{to:"/"},r.a.createElement(Ge,{className:"logo"})),r.a.createElement(ze,null,r.a.createElement(Ve,{className:"option",to:"/shop"},"Shop"),r.a.createElement(Ve,{className:"option",to:"/contact"},"Contact"),t?r.a.createElement(Ve,{as:"div",onClick:a},"SignOut"):r.a.createElement(Ve,{to:"/signin"},"SignIn"),r.a.createElement(mt,null)),!n&&r.a.createElement(ft,null))}),yt=(n(111),n(27)),Ct=n(34),wt=(n(112),function(e){var t=e.handleChange,n=e.label,a=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({type:"text",className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink form-input-label ":"")},n):null)}),jt=(n(113),Object(l.b)(null,function(e){return{googleSignInStart:function(){return e({type:bt.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e((a={email:t,password:n},{type:bt.EMAIL_SIGN_IN_START,payload:a}));var a}}})(function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(a.useState)({email:"",password:""}),i=Object(Ct.a)(c,2),o=i[0],l=i[1],u=o.email,s=o.password,m=function(){var e=Object(C.a)(N.a.mark(function e(n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(u,s);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)({},o,Object(yt.a)({},n,a)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:m},r.a.createElement(wt,{type:"email",name:"email",value:u,handleChange:p,required:!0,label:"Email"}),r.a.createElement(wt,{type:"password",name:"password",value:s,handleChange:p,required:!0,label:"Password"}),r.a.createElement("div",{className:"buttons"},r.a.createElement(ie,{type:"submit"},"Sign In"),r.a.createElement(ie,{type:"button",onClick:n,isGoogleSignIn:!0},"Sign In with Google"))))})),xt=(n(114),Object(l.b)(null,function(e){return{signUpStart:function(t){return e(function(e){return{type:bt.SIGN_UP_START,payload:e}}(t))}}})(function(e){var t=e.signUpStart,n=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(Ct.a)(n,2),i=c[0],o=c[1],l=function(){var e=Object(C.a)(N.a.mark(function e(n){var a,r,c,o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=i.displayName,r=i.email,c=i.password,o=i.confirmPassword,c===o){e.next=5;break}return alert("Passwords dont match"),e.abrupt("return");case 5:t({email:r,password:c,displayName:a});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,a=t.value;o(Object(y.a)({},i,Object(yt.a)({},n,a)))},s=i.displayName,m=i.email,p=i.password,d=i.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and passowrd"),r.a.createElement("form",{className:"sign-up-form",onSubmit:l},r.a.createElement(wt,{type:"text",name:"displayName",value:s,handleChange:u,label:"Display Name",required:!0}),r.a.createElement(wt,{type:"email",name:"email",value:m,handleChange:u,label:"Email",required:!0}),r.a.createElement(wt,{type:"password",name:"password",value:p,handleChange:u,label:"Password",required:!0}),r.a.createElement(wt,{type:"password",name:"confirmPassword",value:d,handleChange:u,label:"Confirm Password",required:!0}),r.a.createElement(ie,{type:"submit"},"Sign Up")))})),kt=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(jt,null),r.a.createElement(xt,null))},Tt=Object(m.b)({currentUser:_t}),Ut=Object(l.b)(Tt,function(e){return{checkUserSession:function(){return e({type:bt.CHECK_USER_SESSION})}}})(function(e){var t=e.checkUserSession,n=e.currentUser;return Object(a.useEffect)(function(){t()},[t]),r.a.createElement("div",null,r.a.createElement(Nt,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{path:"/shop",component:Ee}),r.a.createElement(s.b,{exact:!0,path:"/checkout",component:xe}),r.a.createElement(s.b,{exact:!0,path:"/signin",render:function(){return n?r.a.createElement(s.a,{to:"/"}):r.a.createElement(kt,null)}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Rt=n(33),Lt=(n(115),n(62)),At=n(61),Gt=n.n(At),Ft={currentUser:null,error:null},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt.EMAIL_SIGN_IN_SUCCESS:case bt.GOOGLE_SIGN_IN_SUCCESS:case bt.SIGN_IN_SUCCESS:return Object(y.a)({},e,{currentUser:t.payload,error:null});case bt.SIGN_OUT_SUCCESS:return Object(y.a)({},e,{currentUser:null,error:null});case bt.EMAIL_SIGN_IN_FAILURE:case bt.GOOGLE_SIGN_IN_FAILURE:case bt.SIGN_IN_FAILURE:case bt.SIGN_OUT_FAILURE:case bt.SIGN_UP_FAILURE:return Object(y.a)({},e,{error:t.payload});default:return e}},Mt=n(63),Ht=function(e,t){return e.filter(function(e){return e.id!==t.id})},Dt=function(e,t){var n=e.find(function(e){return e.id===t.id});return 1===n.quantity?e.filter(function(e){return e.id!==n.id}):e.map(function(e){return e.id===t.id?Object(y.a)({},e,{quantity:e.quantity-1}):e})},qt={hidden:!0,cartItems:[]},zt=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case J.TOGGLE_CART_HIDDEN:return Object(y.a)({},n,{hidden:!n.hidden});case J.ADD_ITEM:return Object(y.a)({},n,{cartItems:(e=n.cartItems,t=a.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(y.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(Mt.a)(e),[Object(y.a)({},t,{quantity:1})]))});case J.CLEAR_ITEM_FROM_CART:return Object(y.a)({},n,{cartItems:Ht(n.cartItems,a.payload)});case J.REMOVE_ITEM:return Object(y.a)({},n,{cartItems:Dt(n.cartItems,a.payload)});case J.CLEAR_CART:return Object(y.a)({},n,{cartItems:[]});default:return n}},Vt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;return(arguments.length>1?arguments[1]:void 0).type,e},Bt={collections:null,isFetching:!1,errorMessage:void 0},Kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.FETCH_COLLECTIONS_START:return Object(y.a)({},e,{isFetching:!0});case _.FETCH_COLLECTIONS_SUCCESS:return Object(y.a)({},e,{collections:t.payload,isFetching:!1});case _.FETCH_COLLECTIONS_FAILURE:return Object(y.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},Jt={key:"root",storage:Gt.a,whitelist:["cartReducer"]},$t=Object(F.c)({userReducer:Pt,cartReducer:zt,directoryReducer:Wt,shopReducer:Kt}),Yt=Object(Rt.a)(Jt,$t),Zt=n(4),Qt=N.a.mark(tn),Xt=N.a.mark(nn),en=N.a.mark(an);function tn(){var e,t,n;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=T.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(Zt.b)(U,t);case 7:return n=a.sent,a.next=10,Object(Zt.c)(A(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(Zt.c)(G(a.t0.message));case 16:case"end":return a.stop()}},Qt,null,[[0,12]])}function nn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(_.FETCH_COLLECTIONS_START,tn);case 2:case"end":return e.stop()}},Xt)}function an(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.a)([Object(Zt.b)(nn)]);case 2:case"end":return e.stop()}},en)}var rn=N.a.mark(hn),cn=N.a.mark(Sn),on=N.a.mark(gn),ln=N.a.mark(_n),un=N.a.mark(In),sn=N.a.mark(Nn),mn=N.a.mark(yn),pn=N.a.mark(Cn),dn=N.a.mark(wn),fn=N.a.mark(jn),bn=N.a.mark(xn),En=N.a.mark(kn),On=N.a.mark(Tn),vn=N.a.mark(Un);function hn(e,t){var n,a;return N.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Zt.b)(x,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(Zt.c)(Et(Object(y.a)({id:a.id},a.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(Zt.c)(Ot(r.t0));case 15:case"end":return r.stop()}},rn,null,[[0,11]])}function Sn(){var e,t;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.signInWithPopup(L);case 3:return e=n.sent,t=e.user,n.next=7,hn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Zt.c)(Ot(n.t0));case 13:case"end":return n.stop()}},cn,null,[[0,9]])}function gn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.GOOGLE_SIGN_IN_START,Sn);case 2:case"end":return e.stop()}},on)}function _n(e){var t,n,a,r,c;return N.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,k.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,hn(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Zt.c)(Ot(i.t0));case 14:case"end":return i.stop()}},ln,null,[[1,10]])}function In(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.EMAIL_SIGN_IN_START,_n);case 2:case"end":return e.stop()}},un)}function Nn(){var e;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,hn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Zt.c)(Ot(t.t0));case 14:case"end":return t.stop()}},sn,null,[[0,10]])}function yn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.CHECK_USER_SESSION,Nn);case 2:case"end":return e.stop()}},mn)}function Cn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.signOut();case 3:return e.next=5,Object(Zt.c)(vt());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Zt.c)(ht(e.t0));case 11:case"end":return e.stop()}},pn,null,[[0,7]])}function wn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.SIGN_OUT_START,Cn);case 2:case"end":return e.stop()}},dn)}function jn(e){var t,n,a,r,c,i;return N.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,o.prev=1,o.next=4,k.createUserWithEmailAndPassword(n,a);case 4:return c=o.sent,i=c.user,o.next=8,Object(Zt.c)(St({user:i,additionalData:{displayName:r}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(Zt.c)(gt(o.t0));case 14:case"end":return o.stop()}},fn,null,[[1,10]])}function xn(e){var t,n,a;return N.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,hn(n,a);case 3:case"end":return r.stop()}},bn)}function kn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.SIGN_UP_SUCCESS,xn);case 2:case"end":return e.stop()}},En)}function Tn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.SIGN_UP_START,jn);case 2:case"end":return e.stop()}},On)}function Un(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.a)([Object(Zt.b)(gn),Object(Zt.b)(In),Object(Zt.b)(yn),Object(Zt.b)(wn),Object(Zt.b)(Tn),Object(Zt.b)(kn)]);case 2:case"end":return e.stop()}},vn)}var Rn=N.a.mark(Gn),Ln=N.a.mark(Fn),An=N.a.mark(Pn);function Gn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.c)(Z());case 2:case"end":return e.stop()}},Rn)}function Fn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(bt.SIGN_OUT_SUCCESS,Gn);case 2:case"end":return e.stop()}},Ln)}function Pn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.a)([Object(Zt.b)(Fn)]);case 2:case"end":return e.stop()}},An)}var Mn=N.a.mark(Hn);function Hn(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.a)([Object(Zt.b)(an),Object(Zt.b)(Un),Object(Zt.b)(Pn)]);case 2:case"end":return e.stop()}},Mn)}var Dn=Object(Lt.a)(),qn=[Dn];var zn=Object(F.e)(Yt,F.a.apply(void 0,qn));Dn.run(Hn);var Vn=Object(Rt.b)(zn);i.a.render(r.a.createElement(l.a,{store:zn},r.a.createElement(o.a,null,r.a.createElement(u.a,{persistor:Vn},r.a.createElement(Ut,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(118)},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.484e8428.chunk.js.map