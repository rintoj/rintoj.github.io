webpackJsonp([1,2],{

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(628)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(592)();
// imports


// module
exports.push([module.i, "/* styles */\nbody {\n  margin: 0;\n  font-family: 'Noto Sans';\n  font-size: 16px;\n  color: #586f82; }\n\nh2 {\n  font-weight: normal;\n  margin-top: 2rem; }\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(242, 242, 246, 0.98);\n  color: #586f82;\n  z-index: 1; }\n  header a {\n    text-decoration: none;\n    color: #586f82; }\n  header ul {\n    margin: 0;\n    padding: 0; }\n  header li {\n    list-style: none;\n    cursor: pointer;\n    display: inline-block;\n    margin: 0; }\n    header li:hover {\n      background: #46BCBE; }\n      header li:hover.selected a,\n      header li:hover a {\n        color: #f2f2f2; }\n    header li a {\n      display: block;\n      padding: 10px;\n      width: 100%;\n      height: 100%; }\n    header li.selected {\n      border-bottom: 3px solid #46BCBE; }\n      header li.selected a {\n        color: #46BCBE; }\n  header li:nth-child(1) {\n    font-size: 1.15em;\n    font-weight: bold; }\n  @media (max-width: 600px) {\n    header li {\n      display: block;\n      max-height: 0;\n      overflow: hidden;\n      opacity: 0;\n      transition: opacity .5s ease-out, max-height .2s ease-out; }\n      header li.selected {\n        max-height: 50px;\n        border-bottom: 0;\n        opacity: 1; }\n    header ul.open li {\n      max-height: 50px;\n      opacity: 1; } }\n\nsection {\n  display: block;\n  width: 100%;\n  min-height: 10vh;\n  overflow: hidden;\n  position: relative; }\n\n.header {\n  min-height: 350px;\n  height: 50vh;\n  background: #46BCBE;\n  color: #015601;\n  text-align: center;\n  background: url(" + __webpack_require__(629) + ");\n  background-size: cover;\n  background-attachment: fixed; }\n  .header h1 {\n    animation: slideup-header .5s ease-out;\n    margin: 0 auto;\n    width: 50%;\n    min-width: 75px; }\n    .header h1::after {\n      content: ' ';\n      background: #015601;\n      position: relative;\n      display: block;\n      height: 2px;\n      bottom: 0px;\n      margin: 0 auto;\n      animation: animate-underline 2s ease-out; }\n  .header p {\n    animation: slideup-header 1s ease-out; }\n  .header .content {\n    max-width: 100%; }\n  .header code {\n    width: 35%;\n    min-width: 336px;\n    margin: 0 auto; }\n  .header .author {\n    font-size: .8em;\n    color: #586f82; }\n    .header .author > div {\n      font-weight: bold;\n      padding: 10px 0;\n      animation: slideup-header 2s ease-out; }\n    .header .author > span {\n      display: block;\n      animation: slideup-header 2.5s ease-out; }\n\n.content {\n  width: calc(100% - 4rem);\n  padding: 1rem 2rem;\n  max-width: 1024px;\n  margin: 0 auto; }\n\n.content-bottom {\n  bottom: 1rem;\n  position: absolute; }\n\n.col-10-12 {\n  padding: 2rem; }\n\n.menu-selector {\n  background: #46BCBE;\n  width: 3px;\n  height: 15px;\n  margin-top: 8px;\n  position: absolute;\n  transition: transform .2s ease-out; }\n\n@keyframes slideup-header {\n  from {\n    transform: translateY(4rem);\n    opacity: 0; }\n  80% {\n    opacity: 1; }\n  to {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes animate-underline {\n  from {\n    width: 0%; }\n  to {\n    width: 100%; } }\n\nvideo {\n  width: 100%; }\n", ""]);

// exports


/***/ },

/***/ 592:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 628:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1dd27ab4d82381de2215cbda10d5aa73.jpg";

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }

},[632]);
//# sourceMappingURL=styles.map