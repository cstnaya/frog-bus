(this["webpackJsonpfrog-bus"]=this["webpackJsonpfrog-bus"]||[]).push([[0],{100:function(t,e,n){},107:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(43),i=n.n(c),o=n(46),s=n(3),u=n.p+"static/media/logo.6bae1ae4.svg",l=(n(54),n(0)),h=function(){return Object(l.jsxs)("main",{children:[Object(l.jsxs)("h1",{id:"home-heading",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{children:"\u86d9\u86d9\u642d\u8eca GO"}),Object(l.jsx)("span",{className:"subtitle",children:"Where can I take this bus?"})]}),Object(l.jsx)("img",{src:u,width:"140",alt:"\u86d9\u86d9\u642d\u8ecaGo logo"})]}),Object(l.jsxs)("ul",{className:"home-tab",children:[Object(l.jsx)("li",{children:Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/routes"),children:"\u627e\u8def\u7dda"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/stops"),children:"\u627e\u7ad9\u724c"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/nearby"),children:"\u9644\u8fd1\u8eca\u7ad9"})})})]})]})},d=n(12),j=n(25),f=n(2),b=n.n(f),p=n(6),m=(n(57),n.p+"static/media/logo_line.acdb01dd.svg"),O=function(){var t=window.location.href.split("#/")[1],e=function(e){return t===e?"active":""};return Object(l.jsxs)("header",{children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:e("routes"),children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/routes"),children:"\u627e\u8def\u7dda"})}),Object(l.jsx)("li",{className:e("stops"),children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/stops"),children:"\u627e\u7ad9\u724c"})}),Object(l.jsx)("li",{className:e("nearby"),children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/nearby"),children:"\u9644\u8fd1\u8eca\u7ad9"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"".concat("/frog-bus","/#/"),children:"\u56de\u9996\u9801"})})]})}),Object(l.jsx)("h1",{className:"h1-logo",children:Object(l.jsxs)("a",{href:"".concat("/frog-bus","/#/"),children:[Object(l.jsx)("img",{src:m,width:"100"}),Object(l.jsx)("span",{children:"\u86d9\u86d9\u642d\u8eca Go"})]})})]})},x=n(5),S={"\u81fa\u5317\u5e02":"Taipei","\u65b0\u5317\u5e02":"NewTaipei","\u6843\u5712\u5e02":"Taoyuan","\u81fa\u4e2d\u5e02":"Taichung","\u81fa\u5357\u5e02":"Tainan","\u9ad8\u96c4\u5e02":"Kaohsiung","\u65b0\u7af9\u5e02":"Hsinchu","\u65b0\u7af9\u7e23":"HsinchuCounty","\u82d7\u6817\u7e23":"MiaoliCounty","\u5f70\u5316\u7e23":"ChanghuaCounty","\u5357\u6295\u7e23":"NantouCounty","\u96f2\u6797\u7e23":"YunlinCounty","\u5609\u7fa9\u7e23":"ChiayiCounty","\u5609\u7fa9\u5e02":"Chiayi","\u5c4f\u6771\u7e23":"PingtungCounty","\u5b9c\u862d\u7e23":"YilanCounty","\u82b1\u84ee\u7e23":"HualienCounty","\u81fa\u6771\u7e23":"TaitungCounty","\u91d1\u9580\u7e23":"KinmenCounty","\u6f8e\u6e56\u7e23":"PenghuCounty"},g=["Hsinchu","HsinchuCounty","MiaoliCounty","ChanghuaCounty","NantouCounty","YunlinCounty","ChiayiCounty","Chiayi","PingtungCounty","YilanCounty","HualienCounty","TaitungCounty","PenghuCounty"];var v="\u8acb\u8f38\u5165\u6b32\u67e5\u8a62\u516c\u8eca",y="\u8acb\u8f38\u5165\u6b32\u67e5\u8a62\u7ad9\u724c\u540d",N="\u7e23\u5e02",w={E:"\u6771\u884c",W:"\u897f\u884c",S:"\u5357\u884c",N:"\u5317\u884c",SE:"\u6771\u5357\u884c",NE:"\u6771\u5317\u884c",SW:"\u897f\u5357\u884c",NW:"\u897f\u5317\u884c"},P=function(t,e){var n=(new Date-Date.parse(e))/1e3;return Math.round((t-n)/60)},C=(n(58),function(t){var e=t.Placeholder,n=t.handleFetchList,r=t.handleOptionLists,c=t.handleSubmitToQuery,i=t.handleCheckTermInBus,o=Object.keys(S).map((function(t){return Object(l.jsx)("option",{value:S[t],children:t},S[t])})),s=Object(a.useState)(""),u=Object(x.a)(s,2),h=u[0],d=u[1],j=Object(a.useState)(""),f=Object(x.a)(j,2),m=f[0],O=f[1],g=Object(a.useState)([]),v=Object(x.a)(g,2),y=v[0],N=v[1],w=function(){var t=Object(p.a)(b.a.mark((function t(e,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=[],""===a||null===a){t.next=5;break}return t.next=4,n(e,a);case 4:r=t.sent;case 5:N(r);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),P=Object(a.useCallback)(function(t){var e,n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];clearTimeout(e),e=setTimeout((function(){t.apply(n,c)}),a)}}((function(t,e){return w(t,e)})),[]);return Object(l.jsxs)("form",{method:"get",onSubmit:function(t){var e=document.querySelector("#form"),n=i(y,m);!1!==n&&(c(e,n),e.submit()),t.preventDefault()},id:"form",children:[Object(l.jsxs)("select",{value:h,onChange:function(t){d(t.target.value),O(""),N([])},required:!0,name:"City",children:[Object(l.jsx)("option",{disabled:!0,value:"",children:e.select}),o]}),Object(l.jsx)("input",{list:"list-buses",autoComplete:"off",placeholder:e.input,value:m,onChange:function(t){var e=t.target.value;O(e),i(y,e)||P(h,e)},hidden:!h,required:!0}),Object(l.jsx)("datalist",{id:"list-buses",children:r(y)}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})]})}),T=n.p+"static/media/noresult.c4e17f58.svg",k=(n(59),function(){return Object(l.jsxs)("div",{className:"noresult",children:[Object(l.jsx)("img",{src:T,width:"300",alt:"no result."}),Object(l.jsx)("p",{children:"\u6c92\u6709\u7d50\u679c\u3002"}),Object(l.jsx)("small",{children:"\u90e8\u5206\u7e23\u5e02\u7121\u6cd5\u63d0\u4f9b\u7d50\u679c\uff0c\u8acb\u5148\u78ba\u8a8d\u60a8\u641c\u7d22\u7684\u7e23\u5e02\u662f\u5426\u5728\u6307\u5b9a\u7bc4\u570d\u5167\u3002"})]})}),I=n(11),D=n.n(I);D.a.accessToken="pk.eyJ1IjoidG4tbyIsImEiOiJja3dlamdvNWIwNWRpMnBwbWp1NjZkMXF1In0.9i3LPXD6PKWxAtigyf0elA";var R=t=>{let{results:e,destination:n,positions:c,routes:i}=t;const[o,s]=Object(a.useState)(0),[u,h]=Object(a.useState)(!0),d=new URLSearchParams(window.location.search).get("City"),j=r.a.createRef(),f=r.a.createRef(),b=(t,e,n)=>{const a=document.createElement("div");a.className=t,f.current&&new D.a.Marker(a).setLngLat(e).setPopup(new D.a.Popup({offset:20}).setHTML(n)).addTo(f.current)};Object(a.useEffect)((()=>{let t=u;var n;(i[0].length>0||i[1].length>0)&&(t=!1,h(t)),!t&&e[0].length>0&&e[1].length>0&&(n=i[0][0],f.current||(f.current=new D.a.Map({container:j.current,style:"mapbox://styles/tn-o/ckweg9qi6094515mv8bt3mdil",center:[n.StopPosition.lon,n.StopPosition.lat],sprite:"mapbox://sprites/mapbox/streets-v9",zoom:13})),(()=>{const t=document.querySelector("#routepath");t&&t.remove();const e=i[o].map((t=>[t.StopPosition.lon,t.StopPosition.lat])),n={type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:e}}},a={id:"routepath",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#77B441","line-width":7}};f.current.on("load",(()=>{f.current.addSource("route",n),f.current.addLayer(a),f.current.fitBounds([e[0],e[e.length-1]])}))})(),(()=>{document.querySelectorAll(".busMarker").forEach((t=>t.remove()));for(const t of c[o]){const e=[t.BusPosition.lon,t.BusPosition.lat],n="".concat(t.PlateNumb);b("busMarker",e,n)}})())}),[c,o]);const p=t=>{document.querySelectorAll(".btn-direction").forEach((t=>{t.classList.remove("btn-dir-active")})),document.querySelector(".btn-dir-".concat(t)).classList.add("btn-dir-active"),s(t)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"result-container",children:[Object(l.jsxs)("div",{className:"btns-list",children:[e[0].length>0&&Object(l.jsxs)("button",{onClick:t=>p(0),className:"btn-direction btn-dir-0 btn-dir-active",children:["\u5f80 ",n[0]]}),e[1].length>0&&Object(l.jsxs)("button",{onClick:t=>p(1),className:"btn-direction btn-dir-1",children:["\u5f80 ",n[1]]})]}),Object(l.jsx)("ol",{className:"result-list routes-list",children:e[o].map(((t,e)=>Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:t.EstimateTime}),Object(l.jsx)("span",{children:t.StopName.Zh_tw})]},e)))}),e[0].length>0&&e[1].length>0?Object(l.jsx)("div",{ref:j,style:{height:"350px"},className:"mapContainer"}):null]}),d&&0===e[0].length&&0===e[1].length?Object(l.jsx)("section",{style:{padding:"0 5vh"},children:Object(l.jsx)(k,{})}):null]})},L=function(t){var e=t.Placeholder,n=t.handleFetchList,r=t.handleFetchResult,c=t.handleOptionLists,i=t.handleSubmitToQuery,o=t.handleCheckTermInBus,s=t.handleFetchMapPositions,u=t.handleFetchRouteStops,h=Object(a.useState)([[],[]]),d=Object(x.a)(h,2),j=d[0],f=d[1],b=Object(a.useState)(["",""]),p=Object(x.a)(b,2),m=p[0],O=p[1],S=Object(a.useState)([[],[]]),g=Object(x.a)(S,2),v=g[0],y=g[1],N=Object(a.useState)([[],[]]),w=Object(x.a)(N,2),P=w[0],T=w[1],k=function(t,e){r(t,e).then((function(t){f(t.results),O(t.destination)})),u(t,e).then((function(t){T(t)})),s(t,e).then((function(t){y(t)}))};return Object(a.useEffect)((function(){var t=new URLSearchParams(window.location.search),e=t.get("RouteID"),n=t.get("City");k(n,e);var a=setInterval((function(){k(n,e)}),3e4);return function(){return clearInterval(a)}}),[]),Object(l.jsxs)("section",{className:"routes",children:[Object(l.jsx)(C,{Placeholder:e,handleFetchList:n,handleSubmitToQuery:i,handleOptionLists:c,handleCheckTermInBus:o}),Object(l.jsx)(R,{results:j,destination:m,positions:v,routes:P})]})},E=n(49),M=n(44);var B=n.n(M).a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bus/",timeout:1e3,headers:function(){var t=(new Date).toGMTString(),e=new E.a("SHA-1","TEXT");return e.setHMACKey("_3jmUj5akAbQ6LwJQZtr3RRvfhA","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="7e5d3aeb4325469ea7f380755b665109", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}()}),F=(n(95),function(){var t=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i,o,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=[[],[]],!(g.indexOf(e)>-1)){t.next=12;break}return r="RealTimeByFrequency/Streaming/City/".concat(e,"?$filter=RouteID eq '").concat(n,"'&$top=10&$format=JSON"),t.next=5,B.get(r);case 5:if((c=t.sent).data){t.next=8;break}return t.abrupt("return",a);case 8:i=c.data.map((function(t){return{PlateNumb:t.PlateNumb,Direction:t.Direction,BusPosition:{lon:t.BusPosition.PositionLon,lat:t.BusPosition.PositionLat}}})),o=i.filter((function(t){return 0===t.Direction})),s=i.filter((function(t){return 1===t.Direction})),a=[o,s];case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i,o,s,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=[[],[]],!(g.indexOf(e)>-1)){t.next=14;break}return r="StopOfRoute/City/".concat(e,"?$filter=RouteID eq '").concat(n,"'&$format=JSON"),t.next=5,B.get(r);case 5:if((c=t.sent).data){t.next=8;break}return t.abrupt("return",a);case 8:i=c.data.filter((function(t){return 0===t.Direction}))[0],o=c.data.filter((function(t){return 1===t.Direction}))[0],s=[],u=[],i&&(s=i.Stops.map((function(t){return{StopName:t.StopName.Zh_tw,StopPosition:{lon:t.StopPosition.PositionLon,lat:t.StopPosition.PositionLat}}}))),o&&(u=o.Stops.map((function(t){return{StopName:t.StopName.Zh_tw,StopPosition:{lon:t.StopPosition.PositionLon,lat:t.StopPosition.PositionLat}}}))),a=[s,u];case 14:return t.abrupt("return",a);case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),n=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i,o,s,u,l,h;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=[[],[]],r=["",""],!(g.indexOf(e)>-1)){t.next=19;break}return c="EstimatedTimeOfArrival/Streaming/City/".concat(e,"?$filter=RouteID eq '").concat(n,"'&$orderby=StopSequence&$top=200&$format=JSON"),t.next=6,B.get(c);case 6:a=t.sent,i=function(t){return t.forEach((function(e,n){t[(n+1)%t.length].id===e.id&&t.splice(n+1,1)})),t},o=function(t){var e=function(t){if(!t.EstimateTime)return"\u5c1a\u672a\u767c\u8eca";var e=P(t.EstimateTime,t.SrcTransTime);return e<=2?"\u5373\u5c07\u5230\u7ad9":"".concat(e," mins")};return t.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{EstimateTime:e(t)})}))},s=Object(d.a)(a.data).filter((function(t){return 0===t.Direction})),s=i(s),s=o(s),u=Object(d.a)(a.data).filter((function(t){return 1===t.Direction})),u=i(u),u=o(u),a=[s,u],l=s.length>0?s[s.length-1].StopName.Zh_tw:"",h=u.length>0?u[u.length-1].StopName.Zh_tw:"",r=[l,h];case 19:return t.abrupt("return",{results:a,destination:r});case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),a=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="StopOfRoute/City/".concat(e,"/").concat(n,"?$top=20&$format=JSON"),t.next=3,B.get(a);case 3:return r=t.sent,c=new Set(r.data.map((function(t){return JSON.stringify({RouteID:t.RouteID,RouteName:t.RouteName.Zh_tw})}))),i=Object(d.a)(c).map((function(t){return JSON.parse(t)})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(L,{Placeholder:{select:N,input:v},handleFetchList:a,handleOptionLists:function(t){return t.map((function(t,e){return Object(l.jsx)("option",{value:t.RouteName,"data-routeid":t.RouteID},e)}))},handleCheckTermInBus:function(t,e){var n=t.filter((function(t){return t.RouteName===e}));return n.length>0&&n[0].RouteID},handleSubmitToQuery:function(t,e){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","RouteID"),n.setAttribute("value",e),t.appendChild(n)},handleFetchResult:n,handleFetchMapPositions:t,handleFetchRouteStops:e})]})});var A=t=>{let{results:e}=t;const n=new URLSearchParams(window.location.search).get("City");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"result-container",children:Object(l.jsx)("ul",{className:"result-list stop-list",children:e.map(((t,e)=>Object(l.jsxs)("li",{children:[Object(l.jsxs)("span",{children:[t.RouteName," "]}),Object(l.jsxs)("span",{children:[" - ",t.EstimateTime," "]})]},e)))})}),n&&0===e.length?Object(l.jsx)(k,{}):null]})},q=function(t){return t.EstimateTime?t.EstimateTime<2?"\u5373\u5c07\u9032\u7ad9":"\u9084\u6709 ".concat(P(t.EstimateTime,t.SrcTransTime)," \u5206\u9418\u9032\u7ad9"):"\u5c1a\u672a\u767c\u8eca"},J=function(t){var e=t.Placeholder,n=t.handleFetchList,r=t.handleOptionLists,c=t.handleCheckTermInBus,i=t.handleSubmitToQuery,o=t.handleFetchResult,s=Object(a.useState)([]),u=Object(x.a)(s,2),h=u[0],d=u[1],j=function(t,e){o(t,e).then((function(t){var e=t.data;if(e.length>0){var n=e.map((function(t){return{RouteName:t.RouteName.Zh_tw,EstimateTime:q(t)}}));d(n)}else d([])}))};return Object(a.useEffect)((function(){var t=new URLSearchParams(window.location.search),e=t.get("City"),n=t.get("StationID");j(e,n);var a=setInterval((function(){j(e,n)}),3e4);return function(){return clearInterval(a)}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,{Placeholder:e,handleFetchList:n,handleOptionLists:r,handleCheckTermInBus:c,handleSubmitToQuery:i}),Object(l.jsx)(A,{results:h})]})},$=(n(96),function(){var t=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="Station/City/".concat(e,"?$filter=contains(StationName/Zh_tw, '").concat(n,"')&$top=20&$format=JSON"),t.next=3,B.get(a);case 3:return r=t.sent,c=new Set(r.data.map((function(t){return JSON.stringify({StationID:t.StationID,StationName:t.StationName.Zh_tw,Bearing:w[t.Bearing],StationAddress:t.StationAddress})}))),i=Object(d.a)(c).map((function(t){return JSON.parse(t)})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e=function(){var t=Object(p.a)(b.a.mark((function t(e,n){var a,r,c,i,o,s,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(g.indexOf(e)>-1)){t.next=18;break}return a="Station/City/".concat(e,"?$filter=StationID eq '").concat(n,"'&$format=JSON"),t.next=4,B.get(a);case 4:if((r=t.sent).data){t.next=7;break}return t.abrupt("return",{data:[]});case 7:return c=r.data[0].Stops,i=new Set(c.map((function(t){return JSON.stringify({StopID:t.StopID,RouteID:t.RouteID})}))),o=Object(d.a)(i).map((function(t){return JSON.parse(t)})),s="EstimatedTimeOfArrival/Streaming/City/".concat(e,"?$format=JSON"),o.forEach((function(t,e){var n=t.RouteID,a=t.StopID;s+=e>0?"or (RouteID eq '".concat(n,"' and StopID eq '").concat(a,"') "):"&$filter=(RouteID eq '".concat(n,"' and StopID eq '").concat(a,"') ")})),t.next=14,B.get(s);case 14:return u=t.sent,t.abrupt("return",u);case 18:return t.abrupt("return",{data:[]});case 19:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)("section",{className:"stop",children:Object(l.jsx)(J,{Placeholder:{select:N,input:y},handleFetchList:t,handleOptionLists:function(t){return t.map((function(t,e){return t.Bearing?Object(l.jsx)("option",{value:"".concat(t.StationName," [\u5f80 ").concat(t.Bearing,"]"),"data-routeid":t.StationID},e):Object(l.jsx)("option",{value:"".concat(t.StationName," [").concat(t.StationAddress,"]"),"data-routeid":t.StationID},e)}))},handleCheckTermInBus:function(t,e){var n=e.split("[")[0].trim(),a=t.filter((function(t){return t.StationName===n}));return a.length>0&&a[0].StationID},handleSubmitToQuery:function(t,e){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","StationID"),n.setAttribute("value",e),t.appendChild(n)},handleFetchResult:e})})]})}),Z=n(45);n(97);D.a.accessToken="pk.eyJ1IjoidG4tbyIsImEiOiJja3dlamdvNWIwNWRpMnBwbWp1NjZkMXF1In0.9i3LPXD6PKWxAtigyf0elA";var W=function(t,e){var n=t.lat,a=e.PositionLat,r=t.lon,c=e.PositionLon,i=function(t){return t*(Math.PI/180)},o=i(a-n),s=i(c-r),u=Math.sin(o/2)*Math.sin(o/2)+Math.cos(i(n))*Math.cos(i(a))*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u));return Math.round(6371*l*1e3)},_=function(){var t=Object(a.useRef)(null),e=Object(a.useRef)(null),n=Object(a.useState)({lat:null,lon:null}),r=Object(x.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([]),s=Object(x.a)(o,2),u=s[0],h=s[1],j=Object(a.useState)(!1),f=Object(x.a)(j,2),m=f[0],S=f[1],g=function(t,n,a){var r=document.createElement("div");r.className=t,e.current&&new D.a.Marker(r).setLngLat(n).setPopup(new D.a.Popup({offset:20}).setHTML(a)).addTo(e.current)},v=function(){var n=Object(p.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.current){n.next=2;break}return n.abrupt("return");case 2:e.current=new D.a.Map({container:t.current,style:"mapbox://styles/tn-o/ckweg9qi6094515mv8bt3mdil",center:[c.lon,c.lat],sprite:"mapbox://sprites/mapbox/streets-v9",zoom:15});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var t=document.querySelector(".nowPosition");t&&t.remove(),g("nowPosition",[c.lon,c.lat],"\u73fe\u5728\u4f4d\u7f6e")},N=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,a,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.lat,a=e.lon,r="Station/NearBy/?$spatialFilter=nearby(".concat(n,", ").concat(a,", ").concat(500,")&$format=JSON"),t.next=4,B.get(r);case 4:return c=t.sent,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){null!==c.lat&&null!==c.lon&&(m?y():(S(!0),v().then((function(){return y()})).then((function(){return N(c)})).then((function(t){var e=t.data.map((function(t){return{StationName:t.StationName.Zh_tw,Bearing:w[t.Bearing],StationPosition:t.StationPosition,Distance:W(c,t.StationPosition)}})),n=new Set(e.map((function(t){return JSON.stringify(t)}))),a=Object(d.a)(n).map((function(t){return JSON.parse(t)}));a.sort((function(t,e){return t.Distance-e.Distance}));var r=a.splice(0,10);h(r)}))))}),[c]),Object(a.useEffect)((function(){if(!(u.length<=0)){document.querySelectorAll(".marker").forEach((function(t){return t.remove()}));var t,e=Object(Z.a)(u);try{for(e.s();!(t=e.n()).done;){var n=t.value,a=[n.StationPosition.PositionLon,n.StationPosition.PositionLat],r="".concat(n.StationName," ").concat(n.Bearing);g("marker",a,r)}}catch(c){e.e(c)}finally{e.f()}}}),[u]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsxs)("section",{className:"nearby",children:[Object(l.jsx)("button",{className:"btn-getlocation",onClick:function(t){return function(t){var e=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.coords;case 2:n=t.sent,a=n.latitude,r=n.longitude,i({lat:a,lon:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();t.target.style.display="none",navigator.geolocation&&navigator.geolocation.watchPosition(e,(function(t){console.log("error!")}))}(t)},title:"\u9ede\u6211\u7372\u53d6\u5ea7\u6a19",children:Object(l.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"})}),null!==c.lon&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{ref:t,style:{height:"350px"}}),Object(l.jsxs)("section",{children:[Object(l.jsx)("ul",{className:"result-list nearby-list",children:u.map((function(t,e){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("span",{children:[t.StationName," [",t.Bearing,"] "]}),Object(l.jsxs)("span",{children:["\u8ddd\u96e2 ",t.Distance," \u516c\u5c3a "]})]},e)}))}),Object(l.jsx)("small",{children:"\u8ddd\u96e2\u50c5\u4f9b\u4f30\u7b97\uff0c\u975e\u5be6\u969b\u8ddd\u96e2\u3002"})]})]}),null!==c.lon&&0===u.length?Object(l.jsx)(k,{}):null]})]})},H=(n(98),n(99),n(100),function(){return Object(l.jsx)(o.a,{basename:"".concat("/frog-bus"),children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/routes",component:F}),Object(l.jsx)(s.a,{path:"/stops",component:$}),Object(l.jsx)(s.a,{path:"/nearby",component:_}),Object(l.jsx)(s.a,{exact:!0,path:"/",component:h})]})})});n(106);i.a.render(Object(l.jsx)(H,{}),document.querySelector("#root"))},54:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){},99:function(t,e,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.4f218f67.chunk.js.map