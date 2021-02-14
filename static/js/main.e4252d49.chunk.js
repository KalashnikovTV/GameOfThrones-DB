(this["webpackJsonpgot-app"]=this["webpackJsonpgot-app"]||[]).push([[0],{26:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),c=s(19),a=s.n(c),i=s(46),o=s(44),l=s(45),d=(s(26),s(11)),h=s(0);var j=()=>Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h3",{className:"header-title",children:Object(h.jsx)(d.b,{to:"/",children:"Game of Thrones DB"})}),Object(h.jsxs)("ul",{className:"header-list",children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/characters/",children:"Characters"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/houses/",children:"Houses"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/books/",children:"Books"})})]})]}),u=(s(33),s(5)),b=s.n(u),m=s(12);class p{constructor(){var e=this;this.getResource=function(){var t=Object(m.a)(b.a.mark((function t(s){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e._apiBase).concat(s));case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Could not fetch ".concat(s)+", received ".concat(r.status));case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getAllBooks=Object(m.a)(b.a.mark((function t(){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/books/");case 2:return s=t.sent,t.abrupt("return",s.map(e._transformBook));case 4:case"end":return t.stop()}}),t)}))),this.getBook=function(){var t=Object(m.a)(b.a.mark((function t(s){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/books/".concat(s,"/"));case 2:return r=t.sent,t.abrupt("return",e._transformBook(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getAllCharacters=Object(m.a)(b.a.mark((function t(){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/characters?page=5&pageSize=10");case 2:return s=t.sent,t.abrupt("return",s.map(e._transformCharacter));case 4:case"end":return t.stop()}}),t)}))),this.getCharacter=function(){var t=Object(m.a)(b.a.mark((function t(s){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/characters/".concat(s));case 2:return r=t.sent,t.abrupt("return",e._transformCharacter(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getAllHouses=Object(m.a)(b.a.mark((function t(){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/houses/");case 2:return s=t.sent,t.abrupt("return",s.map(e._transformHouse));case 4:case"end":return t.stop()}}),t)}))),this.getHouse=function(){var t=Object(m.a)(b.a.mark((function t(s){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("/houses/".concat(s,"/"));case 2:return r=t.sent,t.abrupt("return",e._transformHouse(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this._extractId=e=>e.url.match(/\/([0-9]*)$/)[1],this._transformCharacter=e=>({id:this._extractId(e),name:this.isSet(e.name),gender:this.isSet(e.gender),born:this.isSet(e.born),died:this.isSet(e.died),culture:this.isSet(e.culture),aliases:this.isSet(e.aliases)}),this._transformHouse=e=>({id:this._extractId(e),name:this.isSet(e.name),region:this.isSet(e.region),words:this.isSet(e.words),titles:this.isSet(e.titles),founded:this.isSet(e.founded),diedOut:this.isSet(e.diedOut),ancestralWeapons:this.isSet(e.ancestralWeapons),coatOfArms:this.isSet(e.coatOfArms)}),this._transformBook=e=>({id:this._extractId(e),name:this.isSet(e.name),numberOfPages:this.isSet(e.numberOfPages),publisher:this.isSet(e.publisher),released:this.isSet(e.released),authors:this.isSet(e.authors),country:this.isSet(e.country),mediaType:this.isSet(e.mediaType)}),this._apiBase="https://www.anapioficeandfire.com/api"}isSet(e){return e&&""!==e[0]?e:"no data :("}}s(35);var x=()=>Object(h.jsx)("div",{className:"lds-css ng-scope",children:Object(h.jsxs)("div",{className:"lds-spin",children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{})})]})}),O=(s(36),s.p+"static/media/error.4a53f279.jpg");var f=()=>Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:O,alt:"error"}),Object(h.jsx)("span",{children:"Something goes wrong"})]});class g extends r.Component{constructor(...e){super(...e),this.gotService=new p,this.state={char:{},loading:!0,error:!1},this.onCharLoaded=e=>{this.setState({char:e,loading:!1})},this.onError=e=>{this.setState({error:!0,loading:!1})},this.updateChar=()=>{const e=Math.floor(140*Math.random()+25);this.gotService.getCharacter(e).then(this.onCharLoaded).catch(this.onError)}}componentDidMount(){const e=this.props.interval;this.updateChar(),this.timerId=setInterval(this.updateChar,e)}componentWillUnmount(){clearInterval(this.timerId)}render(){const e=this.state,t=e.char,s=e.loading,r=e.error,n=r?Object(h.jsx)(f,{}):null,c=s?Object(h.jsx)(x,{}):null,a=s||r?null:Object(h.jsx)(v,{char:t});return Object(h.jsxs)("div",{className:"random-block rounded",children:[n,c,a]})}}g.defaultProps={interval:5e3};const v=({char:e})=>{const t=e.name,s=e.gender,r=e.born,n=e.died,c=e.culture;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h4",{children:["Random Character: ",t]}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"term",children:"Gender "}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"term",children:"Born "}),Object(h.jsx)("span",{children:r})]}),Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"term",children:"Died "}),Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"term",children:"Culture "}),Object(h.jsx)("span",{children:c})]})]})]})};var S=g;s(37);class C extends r.Component{constructor(...e){super(...e),this.state={itemList:null}}componentDidMount(){(0,this.props.getData)().then((e=>{this.setState({itemList:e})}))}renderItems(e){return e.map((e=>{const t=e.id,s=this.props.renderItem(e);return Object(h.jsx)("li",{className:"list-group-item",onClick:()=>this.props.onItemSelected(t),children:s},t)}))}render(){const e=this.state.itemList;if(!e)return Object(h.jsx)(x,{});const t=this.renderItems(e);return Object(h.jsx)("ul",{className:"item-list list-group",children:t})}}C.defaultProps={onItemSelected:()=>{}};var w=C;s(38);const I=({item:e,field:t,label:s})=>Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"term",children:s}),Object(h.jsx)("span",{className:"text-right",children:e[t]})]});class k extends r.Component{constructor(...e){super(...e),this.state={item:null}}componentDidMount(){this.updateItem()}componentDidUpdate(e){this.props.itemId!==e.itemId&&this.updateItem()}updateItem(){const e=this.props,t=e.itemId,s=e.getData;t&&s(t).then((e=>{this.setState({item:e})}))}render(){if(!this.state.item)return Object(h.jsx)("span",{className:"select-error",children:"Please select item in the list"});const e=this.state.item,t=e.name;return Object(h.jsxs)("div",{className:"char-details rounded",children:[Object(h.jsx)("h4",{children:t}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:n.a.Children.map(this.props.children,(t=>n.a.cloneElement(t,{item:e})))})]})}}var N=k;var D=({left:e,right:t})=>Object(h.jsxs)(o.a,{children:[Object(h.jsx)(l.a,{md:"6",children:e}),Object(h.jsx)(l.a,{md:"6",children:t})]});class y extends r.Component{constructor(...e){super(...e),this.gotService=new p,this.state={selectedChar:null,error:!1},this.onItemSelected=e=>{this.setState({selectedChar:e})}}componentDidCatch(){this.setState({error:!0})}render(){if(this.state.error)return Object(h.jsx)(f,{});const e=Object(h.jsx)(w,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:({name:e,gender:t})=>"".concat(e," (").concat(t,")")}),t=Object(h.jsxs)(N,{itemId:this.state.selectedChar,getData:this.gotService.getCharacter,children:[Object(h.jsx)(I,{field:"gender",label:"Gender"}),Object(h.jsx)(I,{field:"born",label:"Born"}),Object(h.jsx)(I,{field:"died",label:"Died"}),Object(h.jsx)(I,{field:"culture",label:"Culture"}),Object(h.jsx)(I,{field:"aliases",label:"Aliases"})]});return Object(h.jsx)(D,{left:e,right:t})}}class R extends r.Component{constructor(...e){super(...e),this.gotService=new p,this.state={selectedHouse:null,error:!1},this.onItemSelected=e=>{this.setState({selectedHouse:e})}}componentDidCatch(){this.setState({error:!0})}render(){if(this.state.error)return Object(h.jsx)(f,{});const e=Object(h.jsx)(w,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:({name:e})=>e}),t=Object(h.jsxs)(N,{itemId:this.state.selectedHouse,getData:this.gotService.getHouse,children:[Object(h.jsx)(I,{field:"name",label:"Name of this house"}),Object(h.jsx)(I,{field:"region",label:"Region"}),Object(h.jsx)(I,{field:"words",label:"Words"}),Object(h.jsx)(I,{field:"titles",label:"Titles"}),Object(h.jsx)(I,{field:"founded",label:"Founded"}),Object(h.jsx)(I,{field:"diedOut",label:"Died out"}),Object(h.jsx)(I,{field:"ancestralWeapons",label:"Ancestral weapons"}),Object(h.jsx)(I,{field:"coatOfArms",label:"Coat of arms"})]});return Object(h.jsx)(D,{left:e,right:t})}}var B=s(4);class _ extends r.Component{constructor(...e){super(...e),this.gotService=new p,this.state={selectedBook:null,error:!1},this.onItemSelected=e=>{this.setState({selectedBook:e})}}componentDidCatch(){this.setState({error:!0})}render(){return this.state.error?Object(h.jsx)(f,{}):Object(h.jsx)(w,{onItemSelected:e=>{this.props.history.push(e)},getData:this.gotService.getAllBooks,renderItem:({name:e})=>e})}}var A=Object(B.f)(_);class H extends r.Component{constructor(...e){super(...e),this.gotService=new p}render(){return Object(h.jsxs)(N,{itemId:this.props.bookId,getData:this.gotService.getBook,children:[Object(h.jsx)(I,{field:"name",label:"Name of this book"}),Object(h.jsx)(I,{field:"numberOfPages",label:"Number of pages"}),Object(h.jsx)(I,{field:"authors",label:"Authors"}),Object(h.jsx)(I,{field:"publisher",label:"Publisher"}),Object(h.jsx)(I,{field:"country",label:"Country"}),Object(h.jsx)(I,{field:"released",label:"Released"}),Object(h.jsx)(I,{field:"mediaType",label:"Type of media"})]})}}s(39);class P extends r.Component{render(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"error-url",children:"Page Not Found (Error 404)"}),Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("button",{className:"error-btn mt-3",children:"Return to main page"})})]})}}var T=P;s(40);class E extends r.Component{constructor(...e){super(...e),this.gotService=new p,this.state={showRandomChar:!0,error:!1,selectedHouse:20},this.toggleRandomChar=()=>{this.setState((e=>({showRandomChar:!e.showRandomChar})))}}componentDidCatch(){console.log("error"),this.setState({error:!0})}render(){const e=this.state.showRandomChar?Object(h.jsx)(S,{}):null;return this.state.error?Object(h.jsx)(f,{}):Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(j,{})}),Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.a,{lg:{size:5,offset:0},children:[e,Object(h.jsx)("button",{className:"toggle-btn",onClick:this.toggleRandomChar,children:"Toggle random character"})]})}),Object(h.jsxs)(B.c,{children:[Object(h.jsx)(B.a,{path:"/",component:()=>Object(h.jsx)("h1",{children:"Welcome to Game of Thrones Database"}),exact:!0}),Object(h.jsx)(B.a,{path:"/characters",component:y}),Object(h.jsx)(B.a,{path:"/houses",component:R}),Object(h.jsx)(B.a,{path:"/books",component:A,exact:!0}),Object(h.jsx)(B.a,{path:"/books/:id",render:({match:e})=>{const t=e.params.id;return Object(h.jsx)(H,{bookId:t})}}),Object(h.jsx)(B.a,{component:T})]})]})]})})}}var W=E;s(41),s(42);a.a.render(Object(h.jsx)(W,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e4252d49.chunk.js.map