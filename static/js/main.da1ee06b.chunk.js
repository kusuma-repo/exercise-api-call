(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(12),n(3)),l=n(4),u=n(5),i=n(6),m=(n(13),n(14),function(e){var t=e.name,n=e.cardId;return r.a.createElement("div",{className:"card-container"},r.a.createElement("h1",null,t),r.a.createElement("img",{src:"https://robohash.org/".concat(n),alt:""}))}),h=(n(15),function(e){var t=e.cards;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(m,{key:e.id,name:e.name,cardId:e.id})})))}),d=(n(16),function(e){var t=e.querySearch;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",onChange:t,type:"search",placeholder:"search monster..."}))}),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={monsters:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchfield,a=t.monsters.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{querySearch:function(t){return e.setState({searchfield:t.target.value})}}),r.a.createElement("hr",{style:{color:"white"}}),r.a.createElement(h,{cards:a}))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.da1ee06b.chunk.js.map