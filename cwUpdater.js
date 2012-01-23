(function (source) {
	source = '(' + source + ')();'
	var script = document.createElement('script');
	script.setAttribute("type", "application/javascript");
	script.textContent = source;
	document.body.appendChild(script);
	document.body.removeChild(script);
})(function () {
	if (!window.cwVer) {
	/*
	 * MD5 hashing function
	 */
		var md5=function(){function a(a,b){var g=a[0],h=a[1],i=a[2],j=a[3];g=c(g,h,i,j,b[0],7,-680876936),j=c(j,g,h,i,b[1],12,-389564586),i=c(i,j,g,h,b[2],17,606105819),h=c(h,i,j,g,b[3],22,-1044525330),g=c(g,h,i,j,b[4],7,-176418897),j=c(j,g,h,i,b[5],12,1200080426),i=c(i,j,g,h,b[6],17,-1473231341),h=c(h,i,j,g,b[7],22,-45705983),g=c(g,h,i,j,b[8],7,1770035416),j=c(j,g,h,i,b[9],12,-1958414417),i=c(i,j,g,h,b[10],17,-42063),h=c(h,i,j,g,b[11],22,-1990404162),g=c(g,h,i,j,b[12],7,1804603682),j=c(j,g,h,i,b[13],12,-40341101),i=c(i,j,g,h,b[14],17,-1502002290),h=c(h,i,j,g,b[15],22,1236535329),g=d(g,h,i,j,b[1],5,-165796510),j=d(j,g,h,i,b[6],9,-1069501632),i=d(i,j,g,h,b[11],14,643717713),h=d(h,i,j,g,b[0],20,-373897302),g=d(g,h,i,j,b[5],5,-701558691),j=d(j,g,h,i,b[10],9,38016083),i=d(i,j,g,h,b[15],14,-660478335),h=d(h,i,j,g,b[4],20,-405537848),g=d(g,h,i,j,b[9],5,568446438),j=d(j,g,h,i,b[14],9,-1019803690),i=d(i,j,g,h,b[3],14,-187363961),h=d(h,i,j,g,b[8],20,1163531501),g=d(g,h,i,j,b[13],5,-1444681467),j=d(j,g,h,i,b[2],9,-51403784),i=d(i,j,g,h,b[7],14,1735328473),h=d(h,i,j,g,b[12],20,-1926607734),g=e(g,h,i,j,b[5],4,-378558),j=e(j,g,h,i,b[8],11,-2022574463),i=e(i,j,g,h,b[11],16,1839030562),h=e(h,i,j,g,b[14],23,-35309556),g=e(g,h,i,j,b[1],4,-1530992060),j=e(j,g,h,i,b[4],11,1272893353),i=e(i,j,g,h,b[7],16,-155497632),h=e(h,i,j,g,b[10],23,-1094730640),g=e(g,h,i,j,b[13],4,681279174),j=e(j,g,h,i,b[0],11,-358537222),i=e(i,j,g,h,b[3],16,-722521979),h=e(h,i,j,g,b[6],23,76029189),g=e(g,h,i,j,b[9],4,-640364487),j=e(j,g,h,i,b[12],11,-421815835),i=e(i,j,g,h,b[15],16,530742520),h=e(h,i,j,g,b[2],23,-995338651),g=f(g,h,i,j,b[0],6,-198630844),j=f(j,g,h,i,b[7],10,1126891415),i=f(i,j,g,h,b[14],15,-1416354905),h=f(h,i,j,g,b[5],21,-57434055),g=f(g,h,i,j,b[12],6,1700485571),j=f(j,g,h,i,b[3],10,-1894986606),i=f(i,j,g,h,b[10],15,-1051523),h=f(h,i,j,g,b[1],21,-2054922799),g=f(g,h,i,j,b[8],6,1873313359),j=f(j,g,h,i,b[15],10,-30611744),i=f(i,j,g,h,b[6],15,-1560198380),h=f(h,i,j,g,b[13],21,1309151649),g=f(g,h,i,j,b[4],6,-145523070),j=f(j,g,h,i,b[11],10,-1120210379),i=f(i,j,g,h,b[2],15,718787259),h=f(h,i,j,g,b[9],21,-343485551),a[0]=m(g,a[0]),a[1]=m(h,a[1]),a[2]=m(i,a[2]),a[3]=m(j,a[3])}function b(a,b,c,d,e,f){return b=m(m(b,a),m(d,f)),m(b<<e|b>>>32-e,c)}function c(a,c,d,e,f,g,h){return b(c&d|~c&e,a,c,f,g,h)}function d(a,c,d,e,f,g,h){return b(c&e|d&~e,a,c,f,g,h)}function e(a,c,d,e,f,g,h){return b(c^d^e,a,c,f,g,h)}function f(a,c,d,e,f,g,h){return b(d^(c|~e),a,c,f,g,h)}function g(b){/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b))),txt="";var c=b.length,d=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=b.length;e+=64)a(d,h(b.substring(e-64,e)));b=b.substring(e-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b.length;e++)f[e>>2]|=b.charCodeAt(e)<<(e%4<<3);f[e>>2]|=128<<(e%4<<3);if(e>55){a(d,f);for(e=0;e<16;e++)f[e]=0}return f[14]=c*8,a(d,f),d}function h(a){var b=[],c;for(c=0;c<64;c+=4)b[c>>2]=a.charCodeAt(c)+(a.charCodeAt(c+1)<<8)+(a.charCodeAt(c+2)<<16)+(a.charCodeAt(c+3)<<24);return b}function j(a){var b="",c=0;for(;c<4;c++)b+=i[a>>c*8+4&15]+i[a>>c*8&15];return b}function k(a){for(var b=0;b<a.length;b++)a[b]=j(a[b]);return a.join("")}function m(a,b){return a+b&4294967295}var i="0123456789abcdef".split(""),l=function(a){return k(g(a))};if(l("hello")!="5d41402abc4b2a76b9719d911017c592")function m(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}return l}();
		/*
		 * node-semver, by Isaac Schluter
		 */
		(function(a){function h(a){var b=a;return[b[1]||"",b[2]||"",b[3]||""].join(".")+(b[4]||"")+(b[5]||"")}function i(b){return b=a.parse(b),b?h(b):b}function j(b){return typeof b!="string"?null:a.parse(b)&&b.trim().replace(/^[v=]+/,"")}function k(a){return typeof a!="string"?null:a.match(g.parsePackage)&&a.trim()}function p(b){var c=(b||"").trim().replace(g.parseRange,a.rangeReplace).replace(n,o).split(/\s+/).join(" ").split("||").map(function(a){return a.split(" ").map(r).map(t).map(q).join(" ").trim()}).map(function(a){return a.trim().split(/\s+/).filter(function(a){return a.match(g.validComparator)})}).filter(function(a){return a.length});return c}function q(a){return a.trim().replace(l,m)}function r(a){return a.split(/\s+/).map(s).join(" ")}function s(a){return a.trim().replace(g.parseXRange,function(a,b,c,d,e,f){var g=!c||c.toLowerCase()==="x"||c==="*"||!d||d.toLowerCase()==="x"||d==="*"||!e||e.toLowerCase()==="x"||e==="*",h=a;if(b&&g)(!c||c==="*"||c.toLowerCase()==="x")&&(c=0),(!d||d==="*"||d.toLowerCase()==="x")&&(d=0),(!e||e==="*"||e.toLowerCase()==="x")&&(e=0),h=b+c+"."+d+"."+e+"-";else if(!c||c==="*"||c.toLowerCase()==="x")h="*";else if(!d||d==="*"||d.toLowerCase()==="x")h=">="+c+".0.0- <"+(+c+1)+".0.0-";else if(!e||e==="*"||e.toLowerCase()==="x")h=">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-";return h})}function t(a){return a.trim().replace(g.parseSpermy,function(a,b,c,d,e,f){if(b)throw new Error("Using '"+b+"' with ~ makes no sense. Don't do it.");return!c||c.toLowerCase()==="x"?"":!d||d.toLowerCase()==="x"?">="+c+".0.0- <"+(+c+1)+".0.0-":!e||e.toLowerCase()==="x"?">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-":(f=f||"-",">="+c+"."+d+"."+e+f+" <"+c+"."+(+d+1)+".0-")})}function u(a){a=q(a);var b=p(a);return b.length===0?null:b.map(function(a){return a.join(" ")}).join("||")}function v(a,b){return a.filter(function(a){return w(a,b)}).sort(x).pop()}function w(a,b){a=j(a);if(!a)return!1;b=p(b);for(var c=0,d=b.length;c<d;c++){var e=!1;for(var f=0,g=b[c].length;f<g;f++){var h=b[c][f],i=h.charAt(0)===">"?G:h.charAt(0)==="<"?z:!1,k=h.charAt(!!i)==="=",l=!!k+!!i;i||(k=!0),h=h.substr(l),h=h===""?h:j(h),e=h===""||k&&h===a||i&&i(a,h);if(!e)break}if(e)return!0}return!1}function x(a,b){var c=G(a,b);return c===null?0:c?1:-1}function y(a,b){return x(b,a)}function z(a,b){return G(b,a)}function A(a,b){return!z(a,b)}function B(a,b){return!G(a,b)}function C(a,b){return G(a,b)===null}function D(a,b){return G(a,b)!==null}function E(a,b,c){switch(b){case">":return G(a,c);case"<":return z(a,c);case">=":return A(a,c);case"<=":return B(a,c);case"==":return C(a,c);case"!=":return D(a,c);case"===":return a===c;case"!==":return a!==c;default:throw new Error("Y U NO USE VALID COMPARATOR!? "+b)}}function F(a){return a===undefined?-1:parseInt((a||"0").replace(/[^0-9]+/g,""),10)}function G(b,c){b=a.parse(b),c=a.parse(c);if(!b||!c)return!1;for(var d=1;d<5;d++){b[d]=F(b[d]),c[d]=F(c[d]);if(b[d]>c[d])return!0;if(b[d]!==c[d])return!1}var e=b[5]||"",f=c[5]||"";return e===f?null:e?f?e>f:!1:!0}function H(b,c){b=a.parse(b);if(!b)return null;var d={major:1,minor:2,patch:3,build:4},e=d[c];if(e===undefined)return null;var f=F(b[e]);b[e]=f===-1?1:f+1;for(var g=e+1;g<5;g++)F(b[g])!==-1&&(b[g]="0");return b[4]&&(b[4]="-"+b[4]),b[5]="",h(b)}var b="\\s*[v=]*\\s*([0-9]+)\\.([0-9]+)\\.([0-9]+)(-[0-9]+-?)?([a-zA-Z-][a-zA-Z0-9-.:]*)?",c="^((<|>)?=?)s*("+b+")$|^$",d="[v=]*([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)([a-zA-Z-][a-zA-Z0-9-.:]*)?)?)?",e="((?:<|>)?=?)?\\s*"+d,f="(?:~>?)"+e,g=a.expressions={parse:new RegExp("^\\s*"+b+"\\s*$"),parsePackage:new RegExp("^\\s*([^/]+)[-@]("+b+")\\s*$"),parseRange:new RegExp("^\\s*("+b+")\\s+-\\s+("+b+")\\s*$"),validComparator:new RegExp("^"+c+"$"),parseXRange:new RegExp("^"+e+"$"),parseSpermy:new RegExp("^"+f+"$")};Object.getOwnPropertyNames(g).forEach(function(b){a[b]=function(a){return(""+(a||"")).match(g[b])}}),a.rangeReplace=">=$1 <=$7",a.clean=i,a.compare=x,a.rcompare=y,a.satisfies=w,a.gt=G,a.gte=A,a.lt=z,a.lte=B,a.eq=C,a.neq=D,a.cmp=E,a.inc=H,a.valid=j,a.validPackage=k,a.validRange=u,a.maxSatisfying=v,a.replaceStars=q,a.toComparators=p;var l=/(<|>)?=?\s*\*/g,m="",n=new RegExp("((<|>)?=?)\\s*("+b+"|"+d+")","g"),o="$1$3"})(typeof exports=="object"?exports:semver={});

		/*
		 * Browser Detect
		 * Yes, I know it's naughty.
		 */

		var detectBrowser=function(){var a=function(a){for(var b=0,c=a.length;b<c;b++){var d=a[b].string,e=a[b].prop;if(d){if(d.indexOf(a[b].subString)!=-1)return a[b].identity}else if(e)return a[b].identity}},b=[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.vendor,subString:"Apple",identity:"safari"},{prop:window.opera,identity:"opera"},{string:navigator.vendor,subString:"KDE",identity:"konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.vendor,subString:"Camino",identity:"camino"},{string:navigator.userAgent,subString:"Gecko",identity:"mozilla"}];return a(b)||"An unknown browser"};

		/*
		 * Parse.js
		 */
		var Parse=function(){var a=/\{([a-zA-Z\.0-9]*)\}/mg,b=function(a,b){var c=b.split(".");for(var d=0,e=c.length;d<e;++d){if(!a[c[d]]||a[c[d]]===null)return null;a=a[c[d]]}return a};return function(c,d){if(arguments.length===1)return c;if(arguments.length===2){if(arguments[1]==null)return c;if(typeof arguments[1]=="object")var d=arguments[1];else if(typeof arguments[1]=="Array")var d=arguments[1];else var d=[arguments[1]]}else{if(!(arguments.length>1))return c;var d=Array.slice.call(arguments,1)}return c.replace(a,function(a,c){return b(d,c)||a})}}();



		/*
		 * And now, the MEAT of the script!
		 */


		var install = function install (url) {
			var iframe = jQuery('<iframe>');

			iframe.attr('src', url).hide();
			jQuery('body').append(iframe);
		};

		window.cwVer = function (url, version) {
			if (!semver.valid(version)) throw new Error('Invalid version');

			this.url = url;
			this.version = version;

			this.load(function (data) {
				if (semver.gt(data.version, version)) {
					cwVer.addItem(data);
				}
			});
		};

		cwVer.prototype.load = function (cb) {
			// hash the url
			var code = md5(this.url);

			var script = document.createElement('script');
			script.setAttribute('type', 'application/javascript');
			script.setAttribute('src', this.url);

			// Create the callback
			cwVer.callbacks[code] = function (data) {
				cb(data);

				// Clean up after ourselves
				delete cwVer.callbacks[code];
				document.body.removeChild(script);
			};

			document.body.appendChild(script);
		};

		cwVer.menu = jQuery('<td class="oh-hasmenu oh-hashover oh-keep oh-hasbutton" id="cwv-menu"><div class="oh-menuctrl"><div class="oh-menu"><div class="oh-hr"></div><a class="mi" id="cwv-updateAll" style="cursor:pointer"><i class="i13"></i><b>Update All</b></a></div></div><a href="#" class="oh-l" style="color:#C0D0CA !important;"><i class="icon h-icon i0" style="background-image: url(http://i39.tinypic.com/10prqbo.png) !important;"></i> Updates</a></td>');
		jQuery('.oh-gap').after(cwVer.menu.hide());

		jQuery('#cwv-updateAll', cwVer.menu).unbind('click').click(function () {
			for (var i = 0, l = cwVer.updates.length; i < l; i++) {
				install(cwVer.updates[i].url);
			}
			return false;
		})

		cwVer.itemTemplate = '<a class="mi" href="{url}"><i class="i0" style="background-image: url({icon});"></i><span style="float: right; margin-right: 5px; color: #afc81c; background: transparent;" class="cwv-newversion">{version}</span>{name}</a>';

		cwVer.menuList = jQuery('.oh-menu', cwVer.menu);

		cwVer.browser = detectBrowser();

		cwVer.addItem = function (obj) {
			console.log(obj);
			if (cwVer.updates.length === 0) {
				cwVer.menu.show();
			}
			if (!obj.icon) {
				obj.icon = 'http://i42.tinypic.com/25k6kc8.png';
			}
			obj.url = obj.downloads[cwVer.browser];
			if (obj.url) {
				cwVer.updates.push(obj);
				var item = $(Parse(cwVer.itemTemplate, obj));
				cwVer.menuList.prepend(item);
			}
		};

		cwVer.callbacks = {};
		cwVer.updates = [];
	};
});