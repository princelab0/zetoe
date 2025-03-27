"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-markdown";
exports.ids = ["vendor-chunks/react-markdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown),\n/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ \"(ssr)/./node_modules/hast-util-to-jsx-runtime/lib/index.js\");\n/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ \"(ssr)/./node_modules/html-url-attributes/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ \"(ssr)/./node_modules/remark-parse/lib/index.js\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ \"(ssr)/./node_modules/remark-rehype/lib/index.js\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"(ssr)/./node_modules/unified/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ \"(ssr)/./node_modules/vfile/lib/index.js\");\n/**\n * @import {Element, ElementContent, Nodes, Parents, Root} from 'hast'\n * @import {ComponentProps, ElementType, ReactElement} from 'react'\n * @import {Options as RemarkRehypeOptions} from 'remark-rehype'\n * @import {BuildVisitor} from 'unist-util-visit'\n * @import {PluggableList} from 'unified'\n */\n\n/**\n * @callback AllowElement\n *   Filter elements.\n * @param {Readonly<Element>} element\n *   Element to check.\n * @param {number} index\n *   Index of `element` in `parent`.\n * @param {Readonly<Parents> | undefined} parent\n *   Parent of `element`.\n * @returns {boolean | null | undefined}\n *   Whether to allow `element` (default: `false`).\n */\n\n/**\n * @typedef ExtraProps\n *   Extra fields we pass.\n * @property {Element | undefined} [node]\n *   passed when `passNode` is on.\n */\n\n/**\n * @typedef {{\n *   [Key in Extract<ElementType, string>]?: ElementType<ComponentProps<Key> & ExtraProps>\n * }} Components\n *   Map tag names to components.\n */\n\n/**\n * @typedef Deprecation\n *   Deprecation.\n * @property {string} from\n *   Old field.\n * @property {string} id\n *   ID in readme.\n * @property {keyof Options} [to]\n *   New field.\n */\n\n/**\n * @typedef Options\n *   Configuration.\n * @property {AllowElement | null | undefined} [allowElement]\n *   Filter elements (optional);\n *   `allowedElements` / `disallowedElements` is used first.\n * @property {ReadonlyArray<string> | null | undefined} [allowedElements]\n *   Tag names to allow (default: all tag names);\n *   cannot combine w/ `disallowedElements`.\n * @property {string | null | undefined} [children]\n *   Markdown.\n * @property {string | null | undefined} [className]\n *   Wrap in a `div` with this class name.\n * @property {Components | null | undefined} [components]\n *   Map tag names to components.\n * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]\n *   Tag names to disallow (default: `[]`);\n *   cannot combine w/ `allowedElements`.\n * @property {PluggableList | null | undefined} [rehypePlugins]\n *   List of rehype plugins to use.\n * @property {PluggableList | null | undefined} [remarkPlugins]\n *   List of remark plugins to use.\n * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]\n *   Options to pass through to `remark-rehype`.\n * @property {boolean | null | undefined} [skipHtml=false]\n *   Ignore HTML in markdown completely (default: `false`).\n * @property {boolean | null | undefined} [unwrapDisallowed=false]\n *   Extract (unwrap) what’s in disallowed elements (default: `false`);\n *   normally when say `strong` is not allowed, it and it’s children are dropped,\n *   with `unwrapDisallowed` the element itself is replaced by its children.\n * @property {UrlTransform | null | undefined} [urlTransform]\n *   Change URLs (default: `defaultUrlTransform`)\n */\n\n/**\n * @callback UrlTransform\n *   Transform all URLs.\n * @param {string} url\n *   URL.\n * @param {string} key\n *   Property name (example: `'href'`).\n * @param {Readonly<Element>} node\n *   Node.\n * @returns {string | null | undefined}\n *   Transformed URL (optional).\n */\n\n\n\n\n\n\n\n\n\n\n\nconst changelog =\n  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md'\n\n/** @type {PluggableList} */\nconst emptyPlugins = []\n/** @type {Readonly<RemarkRehypeOptions>} */\nconst emptyRemarkRehypeOptions = {allowDangerousHtml: true}\nconst safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i\n\n// Mutable because we `delete` any time it’s used and a message is sent.\n/** @type {ReadonlyArray<Readonly<Deprecation>>} */\nconst deprecations = [\n  {from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser'},\n  {from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser'},\n  {\n    from: 'allowNode',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'allowElement'\n  },\n  {\n    from: 'allowedTypes',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'allowedElements'\n  },\n  {\n    from: 'disallowedTypes',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'disallowedElements'\n  },\n  {from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser'},\n  {from: 'includeElementIndex', id: '#remove-includeelementindex'},\n  {\n    from: 'includeNodeIndex',\n    id: 'change-includenodeindex-to-includeelementindex'\n  },\n  {from: 'linkTarget', id: 'remove-linktarget'},\n  {from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins'},\n  {from: 'rawSourcePos', id: '#remove-rawsourcepos'},\n  {from: 'renderers', id: 'change-renderers-to-components', to: 'components'},\n  {from: 'source', id: 'change-source-to-children', to: 'children'},\n  {from: 'sourcePos', id: '#remove-sourcepos'},\n  {from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform'},\n  {from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform'}\n]\n\n/**\n * Component to render markdown.\n *\n * @param {Readonly<Options>} options\n *   Props.\n * @returns {ReactElement}\n *   React element.\n */\nfunction Markdown(options) {\n  const allowedElements = options.allowedElements\n  const allowElement = options.allowElement\n  const children = options.children || ''\n  const className = options.className\n  const components = options.components\n  const disallowedElements = options.disallowedElements\n  const rehypePlugins = options.rehypePlugins || emptyPlugins\n  const remarkPlugins = options.remarkPlugins || emptyPlugins\n  const remarkRehypeOptions = options.remarkRehypeOptions\n    ? {...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions}\n    : emptyRemarkRehypeOptions\n  const skipHtml = options.skipHtml\n  const unwrapDisallowed = options.unwrapDisallowed\n  const urlTransform = options.urlTransform || defaultUrlTransform\n\n  const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()\n    .use(remark_parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    .use(remarkPlugins)\n    .use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__[\"default\"], remarkRehypeOptions)\n    .use(rehypePlugins)\n\n  const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile()\n\n  if (typeof children === 'string') {\n    file.value = children\n  } else {\n    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n      'Unexpected value `' +\n        children +\n        '` for `children` prop, expected `string`'\n    )\n  }\n\n  if (allowedElements && disallowedElements) {\n    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n      'Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other'\n    )\n  }\n\n  for (const deprecation of deprecations) {\n    if (Object.hasOwn(options, deprecation.from)) {\n      (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n        'Unexpected `' +\n          deprecation.from +\n          '` prop, ' +\n          (deprecation.to\n            ? 'use `' + deprecation.to + '` instead'\n            : 'remove it') +\n          ' (see <' +\n          changelog +\n          '#' +\n          deprecation.id +\n          '> for more info)'\n      )\n    }\n  }\n\n  const mdastTree = processor.parse(file)\n  /** @type {Nodes} */\n  let hastTree = processor.runSync(mdastTree, file)\n\n  // Wrap in `div` if there’s a class name.\n  if (className) {\n    hastTree = {\n      type: 'element',\n      tagName: 'div',\n      properties: {className},\n      // Assume no doctypes.\n      children: /** @type {Array<ElementContent>} */ (\n        hastTree.type === 'root' ? hastTree.children : [hastTree]\n      )\n    }\n  }\n\n  (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform)\n\n  return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {\n    Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n    // @ts-expect-error\n    // React components are allowed to return numbers,\n    // but not according to the types in hast-util-to-jsx-runtime\n    components,\n    ignoreInvalidStyle: true,\n    jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,\n    jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,\n    passKeys: true,\n    passNode: true\n  })\n\n  /** @type {BuildVisitor<Root>} */\n  function transform(node, index, parent) {\n    if (node.type === 'raw' && parent && typeof index === 'number') {\n      if (skipHtml) {\n        parent.children.splice(index, 1)\n      } else {\n        parent.children[index] = {type: 'text', value: node.value}\n      }\n\n      return index\n    }\n\n    if (node.type === 'element') {\n      /** @type {string} */\n      let key\n\n      for (key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes) {\n        if (\n          Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) &&\n          Object.hasOwn(node.properties, key)\n        ) {\n          const value = node.properties[key]\n          const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key]\n          if (test === null || test.includes(node.tagName)) {\n            node.properties[key] = urlTransform(String(value || ''), key, node)\n          }\n        }\n      }\n    }\n\n    if (node.type === 'element') {\n      let remove = allowedElements\n        ? !allowedElements.includes(node.tagName)\n        : disallowedElements\n          ? disallowedElements.includes(node.tagName)\n          : false\n\n      if (!remove && allowElement && typeof index === 'number') {\n        remove = !allowElement(node, index, parent)\n      }\n\n      if (remove && parent && typeof index === 'number') {\n        if (unwrapDisallowed && node.children) {\n          parent.children.splice(index, 1, ...node.children)\n        } else {\n          parent.children.splice(index, 1)\n        }\n\n        return index\n      }\n    }\n  }\n}\n\n/**\n * Make a URL safe.\n *\n * @satisfies {UrlTransform}\n * @param {string} value\n *   URL.\n * @returns {string}\n *   Safe URL.\n */\nfunction defaultUrlTransform(value) {\n  // Same as:\n  // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>\n  // But without the `encode` part.\n  const colon = value.indexOf(':')\n  const questionMark = value.indexOf('?')\n  const numberSign = value.indexOf('#')\n  const slash = value.indexOf('/')\n\n  if (\n    // If there is no protocol, it’s relative.\n    colon === -1 ||\n    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    (slash !== -1 && colon > slash) ||\n    (questionMark !== -1 && colon > questionMark) ||\n    (numberSign !== -1 && colon > numberSign) ||\n    // It is a protocol, it should be allowed.\n    safeProtocol.test(value.slice(0, colon))\n  ) {\n    return value\n  }\n\n  return ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLCtDQUErQztBQUMzRCxZQUFZLDJDQUEyQztBQUN2RCxZQUFZLGdDQUFnQztBQUM1QyxZQUFZLGNBQWM7QUFDMUIsWUFBWSxlQUFlO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUM7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDBDQUEwQztBQUN4RDtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekM7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLGNBQWMsK0JBQStCO0FBQzdDO0FBQ0EsY0FBYywwQ0FBMEM7QUFDeEQ7QUFDQTtBQUNBLGNBQWMsa0NBQWtDO0FBQ2hEO0FBQ0EsY0FBYyxrQ0FBa0M7QUFDaEQ7QUFDQSxjQUFjLGtEQUFrRDtBQUNoRTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQ0FBaUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVrQztBQUNtQjtBQUNKO0FBQ0k7QUFDZjtBQUNFO0FBQ1Q7QUFDTztBQUNYOztBQUUzQjtBQUNBOztBQUVBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLFdBQVcsK0JBQStCO0FBQzFDLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEUsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsR0FBRywrREFBK0Q7QUFDbEUsR0FBRywrREFBK0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUcsNENBQTRDO0FBQy9DLEdBQUcsNEVBQTRFO0FBQy9FLEdBQUcsaURBQWlEO0FBQ3BELEdBQUcsMEVBQTBFO0FBQzdFLEdBQUcsZ0VBQWdFO0FBQ25FLEdBQUcsMkNBQTJDO0FBQzlDLEdBQUcsdUVBQXVFO0FBQzFFLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdEQUFPO0FBQzNCLFNBQVMsb0RBQVc7QUFDcEI7QUFDQSxTQUFTLHFEQUFZO0FBQ3JCOztBQUVBLG1CQUFtQix3Q0FBSzs7QUFFeEI7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLG1EQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sbURBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdURBQUs7O0FBRVAsU0FBUyxzRUFBWTtBQUNyQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxRQUFRO0FBQ1I7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQSxrQkFBa0IsOERBQWE7QUFDL0I7QUFDQSx3QkFBd0IsOERBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9pbmRleC5qcz8xMzVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7RWxlbWVudCwgRWxlbWVudENvbnRlbnQsIE5vZGVzLCBQYXJlbnRzLCBSb290fSBmcm9tICdoYXN0J1xuICogQGltcG9ydCB7Q29tcG9uZW50UHJvcHMsIEVsZW1lbnRUeXBlLCBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0J1xuICogQGltcG9ydCB7T3B0aW9ucyBhcyBSZW1hcmtSZWh5cGVPcHRpb25zfSBmcm9tICdyZW1hcmstcmVoeXBlJ1xuICogQGltcG9ydCB7QnVpbGRWaXNpdG9yfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuICogQGltcG9ydCB7UGx1Z2dhYmxlTGlzdH0gZnJvbSAndW5pZmllZCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBbGxvd0VsZW1lbnRcbiAqICAgRmlsdGVyIGVsZW1lbnRzLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gZWxlbWVudFxuICogICBFbGVtZW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiAgIEluZGV4IG9mIGBlbGVtZW50YCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8UGFyZW50cz4gfCB1bmRlZmluZWR9IHBhcmVudFxuICogICBQYXJlbnQgb2YgYGVsZW1lbnRgLlxuICogQHJldHVybnMge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfVxuICogICBXaGV0aGVyIHRvIGFsbG93IGBlbGVtZW50YCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBFeHRyYVByb3BzXG4gKiAgIEV4dHJhIGZpZWxkcyB3ZSBwYXNzLlxuICogQHByb3BlcnR5IHtFbGVtZW50IHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAqICAgcGFzc2VkIHdoZW4gYHBhc3NOb2RlYCBpcyBvbi5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIFtLZXkgaW4gRXh0cmFjdDxFbGVtZW50VHlwZSwgc3RyaW5nPl0/OiBFbGVtZW50VHlwZTxDb21wb25lbnRQcm9wczxLZXk+ICYgRXh0cmFQcm9wcz5cbiAqIH19IENvbXBvbmVudHNcbiAqICAgTWFwIHRhZyBuYW1lcyB0byBjb21wb25lbnRzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgRGVwcmVjYXRpb25cbiAqICAgRGVwcmVjYXRpb24uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJvbVxuICogICBPbGQgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRcbiAqICAgSUQgaW4gcmVhZG1lLlxuICogQHByb3BlcnR5IHtrZXlvZiBPcHRpb25zfSBbdG9dXG4gKiAgIE5ldyBmaWVsZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QWxsb3dFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93RWxlbWVudF1cbiAqICAgRmlsdGVyIGVsZW1lbnRzIChvcHRpb25hbCk7XG4gKiAgIGBhbGxvd2VkRWxlbWVudHNgIC8gYGRpc2FsbG93ZWRFbGVtZW50c2AgaXMgdXNlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHlBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93ZWRFbGVtZW50c11cbiAqICAgVGFnIG5hbWVzIHRvIGFsbG93IChkZWZhdWx0OiBhbGwgdGFnIG5hbWVzKTtcbiAqICAgY2Fubm90IGNvbWJpbmUgdy8gYGRpc2FsbG93ZWRFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgTWFya2Rvd24uXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjbGFzc05hbWVdXG4gKiAgIFdyYXAgaW4gYSBgZGl2YCB3aXRoIHRoaXMgY2xhc3MgbmFtZS5cbiAqIEBwcm9wZXJ0eSB7Q29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBNYXAgdGFnIG5hbWVzIHRvIGNvbXBvbmVudHMuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhbGxvd2VkRWxlbWVudHNdXG4gKiAgIFRhZyBuYW1lcyB0byBkaXNhbGxvdyAoZGVmYXVsdDogYFtdYCk7XG4gKiAgIGNhbm5vdCBjb21iaW5lIHcvIGBhbGxvd2VkRWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlaHlwZVBsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVoeXBlIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlbWFya1BsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVtYXJrIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZW1hcmtSZWh5cGVPcHRpb25zXVxuICogICBPcHRpb25zIHRvIHBhc3MgdGhyb3VnaCB0byBgcmVtYXJrLXJlaHlwZWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbc2tpcEh0bWw9ZmFsc2VdXG4gKiAgIElnbm9yZSBIVE1MIGluIG1hcmtkb3duIGNvbXBsZXRlbHkgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Vud3JhcERpc2FsbG93ZWQ9ZmFsc2VdXG4gKiAgIEV4dHJhY3QgKHVud3JhcCkgd2hhdOKAmXMgaW4gZGlzYWxsb3dlZCBlbGVtZW50cyAoZGVmYXVsdDogYGZhbHNlYCk7XG4gKiAgIG5vcm1hbGx5IHdoZW4gc2F5IGBzdHJvbmdgIGlzIG5vdCBhbGxvd2VkLCBpdCBhbmQgaXTigJlzIGNoaWxkcmVuIGFyZSBkcm9wcGVkLFxuICogICB3aXRoIGB1bndyYXBEaXNhbGxvd2VkYCB0aGUgZWxlbWVudCBpdHNlbGYgaXMgcmVwbGFjZWQgYnkgaXRzIGNoaWxkcmVuLlxuICogQHByb3BlcnR5IHtVcmxUcmFuc2Zvcm0gfCBudWxsIHwgdW5kZWZpbmVkfSBbdXJsVHJhbnNmb3JtXVxuICogICBDaGFuZ2UgVVJMcyAoZGVmYXVsdDogYGRlZmF1bHRVcmxUcmFuc2Zvcm1gKVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFVybFRyYW5zZm9ybVxuICogICBUcmFuc2Zvcm0gYWxsIFVSTHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiAgIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgUHJvcGVydHkgbmFtZSAoZXhhbXBsZTogYCdocmVmJ2ApLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9XG4gKiAgIFRyYW5zZm9ybWVkIFVSTCAob3B0aW9uYWwpLlxuICovXG5cbmltcG9ydCB7dW5yZWFjaGFibGV9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7dG9Kc3hSdW50aW1lfSBmcm9tICdoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWUnXG5pbXBvcnQge3VybEF0dHJpYnV0ZXN9IGZyb20gJ2h0bWwtdXJsLWF0dHJpYnV0ZXMnXG5pbXBvcnQge0ZyYWdtZW50LCBqc3gsIGpzeHN9IGZyb20gJ3JlYWN0L2pzeC1ydW50aW1lJ1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSdcbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSAncmVtYXJrLXJlaHlwZSdcbmltcG9ydCB7dW5pZmllZH0gZnJvbSAndW5pZmllZCdcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5pbXBvcnQge1ZGaWxlfSBmcm9tICd2ZmlsZSdcblxuY29uc3QgY2hhbmdlbG9nID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZW1hcmtqcy9yZWFjdC1tYXJrZG93bi9ibG9iL21haW4vY2hhbmdlbG9nLm1kJ1xuXG4vKiogQHR5cGUge1BsdWdnYWJsZUxpc3R9ICovXG5jb25zdCBlbXB0eVBsdWdpbnMgPSBbXVxuLyoqIEB0eXBlIHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPn0gKi9cbmNvbnN0IGVtcHR5UmVtYXJrUmVoeXBlT3B0aW9ucyA9IHthbGxvd0Rhbmdlcm91c0h0bWw6IHRydWV9XG5jb25zdCBzYWZlUHJvdG9jb2wgPSAvXihodHRwcz98aXJjcz98bWFpbHRvfHhtcHApJC9pXG5cbi8vIE11dGFibGUgYmVjYXVzZSB3ZSBgZGVsZXRlYCBhbnkgdGltZSBpdOKAmXMgdXNlZCBhbmQgYSBtZXNzYWdlIGlzIHNlbnQuXG4vKiogQHR5cGUge1JlYWRvbmx5QXJyYXk8UmVhZG9ubHk8RGVwcmVjYXRpb24+Pn0gKi9cbmNvbnN0IGRlcHJlY2F0aW9ucyA9IFtcbiAge2Zyb206ICdhc3RQbHVnaW5zJywgaWQ6ICdyZW1vdmUtYnVnZ3ktaHRtbC1pbi1tYXJrZG93bi1wYXJzZXInfSxcbiAge2Zyb206ICdhbGxvd0Rhbmdlcm91c0h0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7XG4gICAgZnJvbTogJ2FsbG93Tm9kZScsXG4gICAgaWQ6ICdyZXBsYWNlLWFsbG93bm9kZS1hbGxvd2VkdHlwZXMtYW5kLWRpc2FsbG93ZWR0eXBlcycsXG4gICAgdG86ICdhbGxvd0VsZW1lbnQnXG4gIH0sXG4gIHtcbiAgICBmcm9tOiAnYWxsb3dlZFR5cGVzJyxcbiAgICBpZDogJ3JlcGxhY2UtYWxsb3dub2RlLWFsbG93ZWR0eXBlcy1hbmQtZGlzYWxsb3dlZHR5cGVzJyxcbiAgICB0bzogJ2FsbG93ZWRFbGVtZW50cydcbiAgfSxcbiAge1xuICAgIGZyb206ICdkaXNhbGxvd2VkVHlwZXMnLFxuICAgIGlkOiAncmVwbGFjZS1hbGxvd25vZGUtYWxsb3dlZHR5cGVzLWFuZC1kaXNhbGxvd2VkdHlwZXMnLFxuICAgIHRvOiAnZGlzYWxsb3dlZEVsZW1lbnRzJ1xuICB9LFxuICB7ZnJvbTogJ2VzY2FwZUh0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7ZnJvbTogJ2luY2x1ZGVFbGVtZW50SW5kZXgnLCBpZDogJyNyZW1vdmUtaW5jbHVkZWVsZW1lbnRpbmRleCd9LFxuICB7XG4gICAgZnJvbTogJ2luY2x1ZGVOb2RlSW5kZXgnLFxuICAgIGlkOiAnY2hhbmdlLWluY2x1ZGVub2RlaW5kZXgtdG8taW5jbHVkZWVsZW1lbnRpbmRleCdcbiAgfSxcbiAge2Zyb206ICdsaW5rVGFyZ2V0JywgaWQ6ICdyZW1vdmUtbGlua3RhcmdldCd9LFxuICB7ZnJvbTogJ3BsdWdpbnMnLCBpZDogJ2NoYW5nZS1wbHVnaW5zLXRvLXJlbWFya3BsdWdpbnMnLCB0bzogJ3JlbWFya1BsdWdpbnMnfSxcbiAge2Zyb206ICdyYXdTb3VyY2VQb3MnLCBpZDogJyNyZW1vdmUtcmF3c291cmNlcG9zJ30sXG4gIHtmcm9tOiAncmVuZGVyZXJzJywgaWQ6ICdjaGFuZ2UtcmVuZGVyZXJzLXRvLWNvbXBvbmVudHMnLCB0bzogJ2NvbXBvbmVudHMnfSxcbiAge2Zyb206ICdzb3VyY2UnLCBpZDogJ2NoYW5nZS1zb3VyY2UtdG8tY2hpbGRyZW4nLCB0bzogJ2NoaWxkcmVuJ30sXG4gIHtmcm9tOiAnc291cmNlUG9zJywgaWQ6ICcjcmVtb3ZlLXNvdXJjZXBvcyd9LFxuICB7ZnJvbTogJ3RyYW5zZm9ybUltYWdlVXJpJywgaWQ6ICcjYWRkLXVybHRyYW5zZm9ybScsIHRvOiAndXJsVHJhbnNmb3JtJ30sXG4gIHtmcm9tOiAndHJhbnNmb3JtTGlua1VyaScsIGlkOiAnI2FkZC11cmx0cmFuc2Zvcm0nLCB0bzogJ3VybFRyYW5zZm9ybSd9XG5dXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHJlbmRlciBtYXJrZG93bi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+fSBvcHRpb25zXG4gKiAgIFByb3BzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgUmVhY3QgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3QgYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgYWxsb3dFbGVtZW50ID0gb3B0aW9ucy5hbGxvd0VsZW1lbnRcbiAgY29uc3QgY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuIHx8ICcnXG4gIGNvbnN0IGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBvcHRpb25zLmNvbXBvbmVudHNcbiAgY29uc3QgZGlzYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5kaXNhbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgcmVoeXBlUGx1Z2lucyA9IG9wdGlvbnMucmVoeXBlUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUGx1Z2lucyA9IG9wdGlvbnMucmVtYXJrUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUmVoeXBlT3B0aW9ucyA9IG9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9uc1xuICAgID8gey4uLm9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9ucywgLi4uZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zfVxuICAgIDogZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zXG4gIGNvbnN0IHNraXBIdG1sID0gb3B0aW9ucy5za2lwSHRtbFxuICBjb25zdCB1bndyYXBEaXNhbGxvd2VkID0gb3B0aW9ucy51bndyYXBEaXNhbGxvd2VkXG4gIGNvbnN0IHVybFRyYW5zZm9ybSA9IG9wdGlvbnMudXJsVHJhbnNmb3JtIHx8IGRlZmF1bHRVcmxUcmFuc2Zvcm1cblxuICBjb25zdCBwcm9jZXNzb3IgPSB1bmlmaWVkKClcbiAgICAudXNlKHJlbWFya1BhcnNlKVxuICAgIC51c2UocmVtYXJrUGx1Z2lucylcbiAgICAudXNlKHJlbWFya1JlaHlwZSwgcmVtYXJrUmVoeXBlT3B0aW9ucylcbiAgICAudXNlKHJlaHlwZVBsdWdpbnMpXG5cbiAgY29uc3QgZmlsZSA9IG5ldyBWRmlsZSgpXG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBmaWxlLnZhbHVlID0gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICB1bnJlYWNoYWJsZShcbiAgICAgICdVbmV4cGVjdGVkIHZhbHVlIGAnICtcbiAgICAgICAgY2hpbGRyZW4gK1xuICAgICAgICAnYCBmb3IgYGNoaWxkcmVuYCBwcm9wLCBleHBlY3RlZCBgc3RyaW5nYCdcbiAgICApXG4gIH1cblxuICBpZiAoYWxsb3dlZEVsZW1lbnRzICYmIGRpc2FsbG93ZWRFbGVtZW50cykge1xuICAgIHVucmVhY2hhYmxlKFxuICAgICAgJ1VuZXhwZWN0ZWQgY29tYmluZWQgYGFsbG93ZWRFbGVtZW50c2AgYW5kIGBkaXNhbGxvd2VkRWxlbWVudHNgLCBleHBlY3RlZCBvbmUgb3IgdGhlIG90aGVyJ1xuICAgIClcbiAgfVxuXG4gIGZvciAoY29uc3QgZGVwcmVjYXRpb24gb2YgZGVwcmVjYXRpb25zKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd24ob3B0aW9ucywgZGVwcmVjYXRpb24uZnJvbSkpIHtcbiAgICAgIHVucmVhY2hhYmxlKFxuICAgICAgICAnVW5leHBlY3RlZCBgJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uZnJvbSArXG4gICAgICAgICAgJ2AgcHJvcCwgJyArXG4gICAgICAgICAgKGRlcHJlY2F0aW9uLnRvXG4gICAgICAgICAgICA/ICd1c2UgYCcgKyBkZXByZWNhdGlvbi50byArICdgIGluc3RlYWQnXG4gICAgICAgICAgICA6ICdyZW1vdmUgaXQnKSArXG4gICAgICAgICAgJyAoc2VlIDwnICtcbiAgICAgICAgICBjaGFuZ2Vsb2cgK1xuICAgICAgICAgICcjJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uaWQgK1xuICAgICAgICAgICc+IGZvciBtb3JlIGluZm8pJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1kYXN0VHJlZSA9IHByb2Nlc3Nvci5wYXJzZShmaWxlKVxuICAvKiogQHR5cGUge05vZGVzfSAqL1xuICBsZXQgaGFzdFRyZWUgPSBwcm9jZXNzb3IucnVuU3luYyhtZGFzdFRyZWUsIGZpbGUpXG5cbiAgLy8gV3JhcCBpbiBgZGl2YCBpZiB0aGVyZeKAmXMgYSBjbGFzcyBuYW1lLlxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgaGFzdFRyZWUgPSB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWV9LFxuICAgICAgLy8gQXNzdW1lIG5vIGRvY3R5cGVzLlxuICAgICAgY2hpbGRyZW46IC8qKiBAdHlwZSB7QXJyYXk8RWxlbWVudENvbnRlbnQ+fSAqLyAoXG4gICAgICAgIGhhc3RUcmVlLnR5cGUgPT09ICdyb290JyA/IGhhc3RUcmVlLmNoaWxkcmVuIDogW2hhc3RUcmVlXVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0KGhhc3RUcmVlLCB0cmFuc2Zvcm0pXG5cbiAgcmV0dXJuIHRvSnN4UnVudGltZShoYXN0VHJlZSwge1xuICAgIEZyYWdtZW50LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAvLyBSZWFjdCBjb21wb25lbnRzIGFyZSBhbGxvd2VkIHRvIHJldHVybiBudW1iZXJzLFxuICAgIC8vIGJ1dCBub3QgYWNjb3JkaW5nIHRvIHRoZSB0eXBlcyBpbiBoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWVcbiAgICBjb21wb25lbnRzLFxuICAgIGlnbm9yZUludmFsaWRTdHlsZTogdHJ1ZSxcbiAgICBqc3gsXG4gICAganN4cyxcbiAgICBwYXNzS2V5czogdHJ1ZSxcbiAgICBwYXNzTm9kZTogdHJ1ZVxuICB9KVxuXG4gIC8qKiBAdHlwZSB7QnVpbGRWaXNpdG9yPFJvb3Q+fSAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm0obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdyYXcnICYmIHBhcmVudCAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoc2tpcEh0bWwpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZX1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgIGxldCBrZXlcblxuICAgICAgZm9yIChrZXkgaW4gdXJsQXR0cmlidXRlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0Lmhhc093bih1cmxBdHRyaWJ1dGVzLCBrZXkpICYmXG4gICAgICAgICAgT2JqZWN0Lmhhc093bihub2RlLnByb3BlcnRpZXMsIGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgIGNvbnN0IHRlc3QgPSB1cmxBdHRyaWJ1dGVzW2tleV1cbiAgICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0LmluY2x1ZGVzKG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgIG5vZGUucHJvcGVydGllc1trZXldID0gdXJsVHJhbnNmb3JtKFN0cmluZyh2YWx1ZSB8fCAnJyksIGtleSwgbm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGxldCByZW1vdmUgPSBhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgPyAhYWxsb3dlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUudGFnTmFtZSlcbiAgICAgICAgOiBkaXNhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgICA/IGRpc2FsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlLnRhZ05hbWUpXG4gICAgICAgICAgOiBmYWxzZVxuXG4gICAgICBpZiAoIXJlbW92ZSAmJiBhbGxvd0VsZW1lbnQgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZW1vdmUgPSAhYWxsb3dFbGVtZW50KG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmUgJiYgcGFyZW50ICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHVud3JhcERpc2FsbG93ZWQgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGUuY2hpbGRyZW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBVUkwgc2FmZS5cbiAqXG4gKiBAc2F0aXNmaWVzIHtVcmxUcmFuc2Zvcm19XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVVJMLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2FmZSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VXJsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIC8vIFNhbWUgYXM6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXJrL21pY3JvbWFyay9ibG9iLzkyOTI3NWUvcGFja2FnZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyNMMzQ+XG4gIC8vIEJ1dCB3aXRob3V0IHRoZSBgZW5jb2RlYCBwYXJ0LlxuICBjb25zdCBjb2xvbiA9IHZhbHVlLmluZGV4T2YoJzonKVxuICBjb25zdCBxdWVzdGlvbk1hcmsgPSB2YWx1ZS5pbmRleE9mKCc/JylcbiAgY29uc3QgbnVtYmVyU2lnbiA9IHZhbHVlLmluZGV4T2YoJyMnKVxuICBjb25zdCBzbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKVxuXG4gIGlmIChcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBwcm90b2NvbCwgaXTigJlzIHJlbGF0aXZlLlxuICAgIGNvbG9uID09PSAtMSB8fFxuICAgIC8vIElmIHRoZSBmaXJzdCBjb2xvbiBpcyBhZnRlciBhIGA/YCwgYCNgLCBvciBgL2AsIGl04oCZcyBub3QgYSBwcm90b2NvbC5cbiAgICAoc2xhc2ggIT09IC0xICYmIGNvbG9uID4gc2xhc2gpIHx8XG4gICAgKHF1ZXN0aW9uTWFyayAhPT0gLTEgJiYgY29sb24gPiBxdWVzdGlvbk1hcmspIHx8XG4gICAgKG51bWJlclNpZ24gIT09IC0xICYmIGNvbG9uID4gbnVtYmVyU2lnbikgfHxcbiAgICAvLyBJdCBpcyBhIHByb3RvY29sLCBpdCBzaG91bGQgYmUgYWxsb3dlZC5cbiAgICBzYWZlUHJvdG9jb2wudGVzdCh2YWx1ZS5zbGljZSgwLCBjb2xvbikpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-markdown/lib/index.js\n");

/***/ })

};
;