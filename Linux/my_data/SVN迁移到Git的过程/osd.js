(function(){var k=!0,o=null,p=!1,q=this,aa=function(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},s=function(a,b,c){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return s.apply(o,arguments)},ea=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var t=document,u=window;var v=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};var w=function(a,b){this.width=a;this.height=b};w.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var z,A,B,D,E,fa=function(){return q.navigator?q.navigator.userAgent:o};E=D=B=A=z=p;var F;if(F=fa()){var ga=q.navigator;z=0==F.indexOf("Opera");A=!z&&-1!=F.indexOf("MSIE");D=(B=!z&&-1!=F.indexOf("WebKit"))&&-1!=F.indexOf("Mobile");E=!z&&!B&&"Gecko"==ga.product}var G=z,H=A,I=E,J=B,ha=D,K;
a:{var L="",M;if(G&&q.opera)var ia=q.opera.version,L="function"==typeof ia?ia():ia;else if(I?M=/rv\:([^\);]+)(\)|;)/:H?M=/MSIE\s+([^\);]+)(\)|;)/:J&&(M=/WebKit\/(\S+)/),M)var ja=M.exec(fa()),L=ja?ja[1]:"";if(H){var ka,la=q.document;ka=la?la.documentMode:void 0;if(ka>parseFloat(L)){K=""+ka;break a}}K=L}
var ma=K,na={},oa=function(a){var b;if(!(b=na[a])){b=0;for(var c=(""+ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),i=RegExp("(\\d*)(\\D*)","g");do{var j=n.exec(g)||["","",""],h=i.exec(l)||["","",""];if(0==j[0].length&&0==h[0].length)break;b=((0==j[1].length?0:parseInt(j[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==j[1].length?
0:parseInt(j[1],10))>(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==j[2].length)<(0==h[2].length)?-1:(0==j[2].length)>(0==h[2].length)?1:0)||(j[2]<h[2]?-1:j[2]>h[2]?1:0)}while(0==b)}b=na[a]=0<=b}return b},pa={},N=function(a){return pa[a]||(pa[a]=H&&document.documentMode&&document.documentMode>=a)};var qa;!H||N(9);!I&&!H||H&&N(9)||I&&oa("1.9.1");H&&oa("9");var P=function(a){return a?new ra(O(a)):qa||(qa=new ra)},O=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},ra=function(a){this.d=a||q.document||document};ra.prototype.createElement=function(a){return this.d.createElement(a)};var sa=function(a){var b=a.d,a=!J&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new v(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};function Q(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}
var ta=function(a,b,c){a.addEventListener?a.addEventListener(b,c,p):a.attachEvent&&a.attachEvent("on"+b,c)},ua=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)},va=function(a){var b=u;if(a&&b.top!=b)b=b.top;try{var c;if(b.document&&!b.document.body)c=new w(-1,-1);else{var a=b||window,d=a.document;if(J&&!oa("500")&&!ha){"undefined"==typeof a.innerHeight&&(a=window);var e=a.innerHeight,f=a.document.documentElement.scrollHeight;
a==a.top&&f<e&&(e-=15);c=new w(a.innerWidth,e)}else{var g="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new w(g.clientWidth,g.clientHeight)}}return c}catch(l){return new w(-12245933,-12245933)}},wa=function(){var a=R;try{return!!a.document}catch(b){return p}};aa("google_protectAndRun",function(a,b,c){a=s(b,q,a);b=window.onerror;window.onerror=a;try{c()}catch(d){var c=d.toString(),e="";d.fileName&&(e=d.fileName);var f=-1;if(d.lineNumber)f=d.lineNumber;if(!a(c,e,f))throw d;}window.onerror=b});
aa("google_handleError",function(a,b,c,d){0.01>Math.random()&&(a=["http://","pagead2.googlesyndication.com","/pagead/gen_204","?id=jserror","&jscb=",0,"&jscd=",0,"&context=",Q(a),"&msg=",Q(b),"&file=",Q(c),"&line=",Q(d.toString()),"&url=",Q(t.URL.substring(0,512)),"&ref=",Q(t.referrer.substring(0,512))],a.push(["&client=",Q(u.google_ad_client),"&format=",Q(u.google_ad_format),"&slotname=",Q(u.google_ad_slot),"&output=",Q(u.google_ad_output),"&ad_type=",Q(u.google_ad_type)].join("")),ua(u,a.join("")));
return k});var xa=!!window.google_async_iframe_id,R=xa&&window.parent||window,S=function(){if(xa&&!wa()){for(var a="."+t.domain;2<a.split(".").length&&!wa();)t.domain=a=a.substr(a.indexOf(".")+1),R=window.parent;wa()||(R=window)}return R};var T=function(a){var b;a:{b=O(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,o))){b=b.position||b.getPropertyValue("position");break a}b=""}return b||(a.currentStyle?a.currentStyle.position:o)||a.style&&a.style.position},ya=function(a){var b=a.getBoundingClientRect();if(H)a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop;return b},za=function(a){if(H&&!N(8))return a.offsetParent;for(var b=
O(a),c=T(a),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=T(a),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return o},Aa=function(a){var b,c=O(a),d=T(a),e=I&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new v(0,0),g;b=c?9==c.nodeType?c:O(c):document;if(g=H)if(g=!N(9))g="CSS1Compat"!=P(b).d.compatMode;
g=g?b.body:b.documentElement;if(a==g)return f;if(a.getBoundingClientRect)b=ya(a),a=sa(P(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{e=a;do{f.x+=e.offsetLeft;f.y+=e.offsetTop;e!=a&&(f.x+=e.clientLeft||0,f.y+=e.clientTop||0);if(J&&"fixed"==T(e)){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}e=e.offsetParent}while(e&&e!=a);if(G||J&&"absolute"==d)f.y-=c.body.offsetTop;for(e=a;(e=
za(e))&&e!=c.body&&e!=g;)if(f.x-=e.scrollLeft,!G||"TR"!=e.tagName)f.y-=e.scrollTop}return f};var V,Ba=function(a,b){var c=S();ta(c,a,b)},Ga=function(a){var b=W;var c=S();c.removeEventListener?c.removeEventListener(a,b,p):c.detachEvent&&c.detachEvent("on"+a,b)},Ha=function(){for(var a=X,b=0;b<a.length;b++)if(a[b].b)return k;return p},Pa=function(){try{S();var a=Y();Ia=a;if(Ja())if("function"!=typeof V.getBlocks)Z("d");else{Ka=V.numBlocks();var b=[];La=0;V.getBlocks(function(c,d,e){La++;var n=c.getBoundingClientRect(),i={x:0,y:0};try{var j=window.top,h=new v(0,0),y=O(c)?O(c).parentWindow||
O(c).defaultView:window,r=c;do{var C;if(y==j)C=Aa(r);else{var m=r,x=new v;if(1==m.nodeType)if(m.getBoundingClientRect){var Ca=ya(m);x.x=Ca.left;x.y=Ca.top}else{var Da=sa(P(m)),Ea=Aa(m);x.x=Ea.x-Da.x;x.y=Ea.y-Da.y}else{var Va="function"==ba(m.j),U=m;m.targetTouches?U=m.targetTouches[0]:Va&&m.j().targetTouches&&(U=m.j().targetTouches[0]);x.x=U.clientX;x.y=U.clientY}C=x}m=C;h.x+=m.x;h.y+=m.y}while(y&&y!=j&&(r=y.frameElement)&&(y=y.parent));var i=h,Wa=new $(Math.round(i.y),Math.round(i.x),Math.round(n.bottom-
n.top+i.y),Math.round(n.right-n.left+i.x)),Fa=new Ma(Wa,d,a,e);Fa.b=c;b.push(Fa)}catch(cb){b.push(new Ma(Na,d,a,e))}});X=b;var c=V.getOsdMode();if(1==c)Z("p");else{var d=0==c||3==c&&Ha();d&&W();Ba("unload",function(){Z("u")});d&&(Ba("scroll",W),Ba("resize",W));window.setTimeout(function(){Z("t")},36E5)}Oa=Y()-a}else Z("c")}catch(e){X=[],Z("x")}},W=function(){if(!Qa){var a=va(k);if(!(-1==a.width||-1==a.height||-12245933==a.width||-12245933==a.height)){var b=o;try{b=sa(P((window.top||q||window).document))}catch(c){return}for(var a=
new $(b.y,b.x,b.y+a.height,b.x+a.width),b=X,d=Y(),e=0;e<b.length;e++)b[e].update(d,a);Ra+=Y()-d;Sa++}}},Z=function(a){var b=S(),c=b.document;if(!Qa){if(3!=V.getOsdMode()){var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];try{var e=0<Ia?Y()-Ia:-1,f=X;if(0<f.length){W();for(c=0;c<f.length;c++)if(0<f[c].g){var g=f[c],l=g.e,n=["p:",l.top,l.left,l.bottom,l.right];n.push("tos:",g.a.join(","));n.push("rs:",g.l);n.push("zoom:",g.zoom.join(","));0<=g.c&&n.push("tfs:",
g.c,"tls:",g.f);n.push("fp:",g.k);d.push("adk"+f[c].g+"="+Q(n.join(",")))}var g=k,i=va(g);d.push("bs="+i.width+","+i.height);var j;i=u;if(g&&i.top!=i)i=i.top;try{var h=i.document;j=!i.scrollY&&"CSS1Compat"!=h.compatMode?new $(0,0,h.body.scrollHeight,h.body.scrollWidth):new $(0,0,h.body.offsetHeight,h.body.offsetWidth)}catch(y){j=new $(0,0,-12245933,-12245933)}d.push("ps="+j.right+","+j.bottom);var r=Ta(Ua,f[0].url);if(r&&("&"==r.charAt(0)||"?"==r.charAt(0)))r=r.slice(1);d.push("fp="+Q(r))}else d.push("url="+
Q(b.location.href)),c.referrer&&d.push("referrer="+Q(c.referrer)),V&&(d.push("correlator="+V.getCorrelator()),d.push("eid="+V.getEid()),d.push("oid="+V.getOseId()));d.push("tt="+e);d.push("deb="+Q([1,Ka,La,Ra,Sa,Oa].join("-")));d.push("r="+a);if(b.top!=b){d.push("iframe_loc="+Q(b.location.href));var C=va(p);d.push("is="+C.width+","+C.height)}}catch(m){d.push("error")}try{ua(b,d.join("&"))}catch(x){}}Qa=k}},Xa=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,Ua=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,
Ta=function(a,b){var c=b.match(a);return c?c.join(""):""},X=[],Qa=p,Ya=(new Date).getTime(),Ia=-1,Y=function(){return(new Date).getTime()-Ya},Ka=0,La=0,Ra=0,Sa=0,Oa=0,Ja=function(){var a=S().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return p;V=Goog_AdSense_getAdAdapterInstance();return k},Ma=function(a,b,c,d){this.e=a;this.h=(a.bottom-a.top)*(a.right-a.left);this.f=this.c=-1;this.a=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.k=Ta(Xa,b);this.b=
o;this.i=c;this.url=b;this.g=(a=b.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0;this.l=d},Za=function(a,b){if(b){a(b);var c=b.frames;if(c){var d=c.length,e;for(e=0;e<d;++e)Za(a,c[e])}}},$a=function(a,b){try{b.postMessage(a,"*")}catch(c){}};
Ma.prototype.update=function(a,b){S();var c=this.e,d=a-this.i||1;this.i=a;var e=Math.max(c.top,b.top),f=Math.min(c.bottom,b.bottom);if(e<=f){var g=Math.max(c.left,b.left),c=Math.min(c.right,b.right);if(g<=c){var l=(f-e)*(c-g)/this.h;if(3==V.getOsdMode()&&0.8<=l){if(this.b)Za(ea($a,"{osi:1,c:"+l+",l:"+g+",r:"+c+",t:"+e+",b:"+f+"}"),this.b.contentWindow),this.b=o,Ha()||(Ga("scroll"),Ga("resize"))}else{1<=l?this.a[0]+=d:0.75<=l?this.a[1]+=d:0.5<=l?this.a[2]+=d:0.25<=l?this.a[3]+=d:this.a[4]+=d;if(0>
this.c)this.c=a;this.f=a;0.5<=l&&(e=100*this.h/((b.bottom-b.top)*(b.right-b.left)),20<=e?this.zoom[0]+=d:10<=e?this.zoom[1]+=d:5<=e?this.zoom[2]+=d:2.5<=e?this.zoom[3]+=d:this.zoom[4]+=d)}}}};var $=function(a,b,c,d){this.top=a;this.bottom=c;this.left=b;this.right=d},Na=new $(0,0,0,0);var ab=S();if("complete"==ab.document.readyState||ab.google_onload_fired)Pa();else{var bb=S();ta(bb,"load",function(){window.setTimeout(Pa,100)})};})();
