/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-es6array-setclasses !*/
 !function(e,n,o){function s(e,n){return typeof e===n}function a(){var e,n,o,a,t,f,l;for(var p in i)if(i.hasOwnProperty(p)){if(e=[],n=i[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=s(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)f=e[t],l=f.split("."),1===l.length?Modernizr[l[0]]=a:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=a),r.push((a?"":"no-")+l.join("-"))}}function t(e){var n=l.className,o=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),p?l.className.baseVal=n:l.className=n)}var r=[],i=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){i.push({name:e,fn:n,options:o})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of));var l=n.documentElement,p="svg"===l.nodeName.toLowerCase();a(),t(r),delete f.addTest,delete f.addAsyncTest;for(var c=0;c<Modernizr._q.length;c++)Modernizr._q[c]();e.Modernizr=Modernizr}(window,document);