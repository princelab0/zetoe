"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit-parents/lib/color.node.js":
/*!*****************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/color.node.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color: () => (/* binding */ color)\n/* harmony export */ });\n/**\n * @param {string} d\n * @returns {string}\n */\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9jb2xvci5ub2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbGliL2NvbG9yLm5vZGUuanM/NGZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/lib/color.node.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unist-util-visit-parents/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* binding */ CONTINUE),\n/* harmony export */   EXIT: () => (/* binding */ EXIT),\n/* harmony export */   SKIP: () => (/* binding */ SKIP),\n/* harmony export */   visitParents: () => (/* binding */ visitParents)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/* harmony import */ var unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit-parents/do-not-use-color */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/color.node.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n */\n\n/**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */\n\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */\n\n/**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */\n\n/**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */\n\n/**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */\n\n/**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */\n\n/**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {'skip' | boolean} Action\n *   Union of the action types.\n *\n * @typedef {number} Index\n *   Move to the sibling at `index` next (after node itself is completely\n *   traversed).\n *\n *   Useful if mutating the tree, such as removing the node the visitor is\n *   currently on, or any of its previous siblings.\n *   Results less than 0 or greater than or equal to `children.length` stop\n *   traversing the parent.\n *\n * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple\n *   List with one or two values, the first an action, the second an index.\n *\n * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult\n *   Any value that can be returned from a visitor.\n */\n\n/**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform the parent of node (the last of `ancestors`).\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of an ancestor still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Array<VisitedParents>} ancestors\n *   Ancestors of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [VisitedParents=UnistParent]\n *   Ancestor type.\n */\n\n/**\n * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parents`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Tree type.\n * @template {Test} [Check=Test]\n *   Test type.\n */\n\n\n\n\n/** @type {Readonly<ActionTuple>} */\nconst empty = []\n\n/**\n * Continue traversing as normal.\n */\nconst CONTINUE = true\n\n/**\n * Stop traversing immediately.\n */\nconst EXIT = false\n\n/**\n * Do not traverse this node’s children.\n */\nconst SKIP = 'skip'\n\n/**\n * Visit nodes, with ancestral information.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} test\n *   `unist-util-is`-compatible test\n * @param {Visitor | boolean | null | undefined} [visitor]\n *   Handle each node.\n * @param {boolean | null | undefined} [reverse]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */\nfunction visitParents(tree, test, visitor, reverse) {\n  /** @type {Test} */\n  let check\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    // @ts-expect-error no visitor given, so `visitor` is test.\n    visitor = test\n  } else {\n    // @ts-expect-error visitor given, so `test` isn’t a visitor.\n    check = test\n  }\n\n  const is = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(check)\n  const step = reverse ? -1 : 1\n\n  factory(tree, undefined, [])()\n\n  /**\n   * @param {UnistNode} node\n   * @param {number | undefined} index\n   * @param {Array<UnistParent>} parents\n   */\n  function factory(node, index, parents) {\n    const value = /** @type {Record<string, unknown>} */ (\n      node && typeof node === 'object' ? node : {}\n    )\n\n    if (typeof value.type === 'string') {\n      const name =\n        // `hast`\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : // `xast`\n          typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      Object.defineProperty(visit, 'name', {\n        value:\n          'node (' + (0,unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__.color)(node.type + (name ? '<' + name + '>' : '')) + ')'\n      })\n    }\n\n    return visit\n\n    function visit() {\n      /** @type {Readonly<ActionTuple>} */\n      let result = empty\n      /** @type {Readonly<ActionTuple>} */\n      let subresult\n      /** @type {number} */\n      let offset\n      /** @type {Array<UnistParent>} */\n      let grandparents\n\n      if (!test || is(node, index, parents[parents.length - 1] || undefined)) {\n        // @ts-expect-error: `visitor` is now a visitor.\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if ('children' in node && node.children) {\n        const nodeAsParent = /** @type {UnistParent} */ (node)\n\n        if (nodeAsParent.children && result[0] !== SKIP) {\n          offset = (reverse ? nodeAsParent.children.length : -1) + step\n          grandparents = parents.concat(nodeAsParent)\n\n          while (offset > -1 && offset < nodeAsParent.children.length) {\n            const child = nodeAsParent.children[offset]\n\n            subresult = factory(child, offset, grandparents)()\n\n            if (subresult[0] === EXIT) {\n              return subresult\n            }\n\n            offset =\n              typeof subresult[1] === 'number' ? subresult[1] : offset + step\n          }\n        }\n      }\n\n      return result\n    }\n  }\n}\n\n/**\n * Turn a return value into a clean result.\n *\n * @param {VisitorResult} value\n *   Valid return values from visitors.\n * @returns {Readonly<ActionTuple>}\n *   Clean result.\n */\nfunction toResult(value) {\n  if (Array.isArray(value)) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return value === null || value === undefined ? empty : [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0EsYUFBYSw4REFBOEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYSw0Q0FBNEM7QUFDekQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYSxzS0FBc0s7QUFDbkw7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9EO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsTUFBTTtBQUNwQixVQUFVO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbGliL2luZGV4LmpzPzNhYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IFVuaXN0Tm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFVuaXN0UGFyZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RXhjbHVkZTxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0LCB1bmRlZmluZWQ+IHwgdW5kZWZpbmVkfSBUZXN0XG4gKiAgIFRlc3QgZnJvbSBgdW5pc3QtdXRpbC1pc2AuXG4gKlxuICogICBOb3RlOiB3ZSBoYXZlIHJlbW92ZSBhbmQgYWRkIGB1bmRlZmluZWRgLCBiZWNhdXNlIG90aGVyd2lzZSB3aGVuIGdlbmVyYXRpbmdcbiAqICAgYXV0b21hdGljIGAuZC50c2AgZmlsZXMsIFRTIHRyaWVzIHRvIGZsYXR0ZW4gcGF0aHMgZnJvbSBhIGxvY2FsIHBlcnNwZWN0aXZlLFxuICogICB3aGljaCBkb2VzbuKAmXQgd29yayB3aGVuIHB1Ymxpc2hpbmcgb24gbnBtLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgRm4gZXh0ZW5kcyAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgaW5mZXIgVGhpbmdcbiAqICAgPyBUaGluZ1xuICogICA6IEZhbGxiYWNrXG4gKiApfSBQcmVkaWNhdGVcbiAqICAgR2V0IHRoZSB2YWx1ZSBvZiBhIHR5cGUgZ3VhcmQgYEZuYC5cbiAqIEB0ZW1wbGF0ZSBGblxuICogICBWYWx1ZTsgdHlwaWNhbGx5IGZ1bmN0aW9uIHRoYXQgaXMgYSB0eXBlIGd1YXJkIChzdWNoIGFzIGAoeCk6IHggaXMgWWApLlxuICogQHRlbXBsYXRlIEZhbGxiYWNrXG4gKiAgIFZhbHVlIHRvIHlpZWxkIGlmIGBGbmAgaXMgbm90IGEgdHlwZSBndWFyZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgbnVsbCB8IHVuZGVmaW5lZCAvLyBObyB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogVmFsdWUgZXh0ZW5kcyB7dHlwZTogQ2hlY2t9IC8vIFN0cmluZyAodHlwZSkgdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IFZhbHVlIGV4dGVuZHMgQ2hlY2sgLy8gUGFydGlhbCB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogQ2hlY2sgZXh0ZW5kcyBGdW5jdGlvbiAvLyBGdW5jdGlvbiB0ZXN0LlxuICogICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+IGV4dGVuZHMgVmFsdWVcbiAqICAgICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+XG4gKiAgICAgOiBuZXZlclxuICogICA6IG5ldmVyIC8vIFNvbWUgb3RoZXIgdGVzdD9cbiAqICl9IE1hdGNoZXNPbmVcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIHByaW1pdGl2ZSBjaGVjayBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUgVmFsdWVcbiAqICAgVmFsdWU7IHR5cGljYWxseSB1bmlzdCBgTm9kZWAuXG4gKiBAdGVtcGxhdGUgQ2hlY2tcbiAqICAgVmFsdWU7IHR5cGljYWxseSBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LCBidXQgbm90IGFycmF5cy5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgQXJyYXk8YW55PlxuICogICA/IE1hdGNoZXNPbmU8VmFsdWUsIENoZWNrW2tleW9mIENoZWNrXT5cbiAqICAgOiBNYXRjaGVzT25lPFZhbHVlLCBDaGVjaz5cbiAqICl9IE1hdGNoZXNcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIGNoZWNrIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSBWYWx1ZVxuICogICBWYWx1ZTsgdHlwaWNhbGx5IHVuaXN0IGBOb2RlYC5cbiAqIEB0ZW1wbGF0ZSBDaGVja1xuICogICBWYWx1ZTsgdHlwaWNhbGx5IGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7MCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwfSBVaW50XG4gKiAgIE51bWJlcjsgY2FwcGVkIHJlYXNvbmFibHkuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SSBleHRlbmRzIDAgPyAxIDogSSBleHRlbmRzIDEgPyAyIDogSSBleHRlbmRzIDIgPyAzIDogSSBleHRlbmRzIDMgPyA0IDogSSBleHRlbmRzIDQgPyA1IDogSSBleHRlbmRzIDUgPyA2IDogSSBleHRlbmRzIDYgPyA3IDogSSBleHRlbmRzIDcgPyA4IDogSSBleHRlbmRzIDggPyA5IDogMTB9IEluY3JlbWVudFxuICogICBJbmNyZW1lbnQgYSBudW1iZXIgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIHtVaW50fSBbST0wXVxuICogICBJbmRleC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIE5vZGUgZXh0ZW5kcyBVbmlzdFBhcmVudFxuICogICA/IE5vZGUgZXh0ZW5kcyB7Y2hpbGRyZW46IEFycmF5PGluZmVyIENoaWxkcmVuPn1cbiAqICAgICA/IENoaWxkIGV4dGVuZHMgQ2hpbGRyZW4gPyBOb2RlIDogbmV2ZXJcbiAqICAgICA6IG5ldmVyXG4gKiAgIDogbmV2ZXJcbiAqICl9IEludGVybmFsUGFyZW50XG4gKiAgIENvbGxlY3Qgbm9kZXMgdGhhdCBjYW4gYmUgcGFyZW50cyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IE5vZGVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnRlcm5hbFBhcmVudDxJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LCBDaGlsZD59IFBhcmVudFxuICogICBDb2xsZWN0IG5vZGVzIGluIGBUcmVlYCB0aGF0IGNhbiBiZSBwYXJlbnRzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgRGVwdGggZXh0ZW5kcyBNYXhcbiAqICAgPyBuZXZlclxuICogICA6XG4gKiAgICAgfCBJbnRlcm5hbFBhcmVudDxOb2RlLCBDaGlsZD5cbiAqICAgICB8IEludGVybmFsQW5jZXN0b3I8Tm9kZSwgSW50ZXJuYWxQYXJlbnQ8Tm9kZSwgQ2hpbGQ+LCBNYXgsIEluY3JlbWVudDxEZXB0aD4+XG4gKiApfSBJbnRlcm5hbEFuY2VzdG9yXG4gKiAgIENvbGxlY3Qgbm9kZXMgaW4gYFRyZWVgIHRoYXQgY2FuIGJlIGFuY2VzdG9ycyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IE5vZGVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW01heD0xMF1cbiAqICAgTWF4OyBzZWFyY2hlcyB1cCB0byB0aGlzIGRlcHRoLlxuICogQHRlbXBsYXRlIHtVaW50fSBbRGVwdGg9MF1cbiAqICAgQ3VycmVudCBkZXB0aC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnRlcm5hbEFuY2VzdG9yPEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sIENoaWxkPn0gQW5jZXN0b3JcbiAqICAgQ29sbGVjdCBub2RlcyBpbiBgVHJlZWAgdGhhdCBjYW4gYmUgYW5jZXN0b3JzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgVHJlZSBleHRlbmRzIFVuaXN0UGFyZW50XG4gKiAgICAgPyBEZXB0aCBleHRlbmRzIE1heFxuICogICAgICAgPyBUcmVlXG4gKiAgICAgICA6IFRyZWUgfCBJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWVbJ2NoaWxkcmVuJ11bbnVtYmVyXSwgTWF4LCBJbmNyZW1lbnQ8RGVwdGg+PlxuICogICAgIDogVHJlZVxuICogKX0gSW5jbHVzaXZlRGVzY2VuZGFudFxuICogICBDb2xsZWN0IGFsbCAoaW5jbHVzaXZlKSBkZXNjZW5kYW50cyBvZiBgVHJlZWAuXG4gKlxuICogICA+IPCfkYkgKipOb3RlKio6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBmYXN0ZXN0IHdheSB0b1xuICogICA+IHJlY3Vyc2Ugd2l0aG91dCBhY3R1YWxseSBydW5uaW5nIGludG8gYW4gaW5maW5pdGUgbG9vcCwgd2hpY2ggdGhlXG4gKiAgID4gcHJldmlvdXMgdmVyc2lvbiBkaWQuXG4gKiAgID5cbiAqICAgPiBQcmFjdGljYWxseSwgYSBtYXggb2YgYDJgIGlzIHR5cGljYWxseSBlbm91Z2ggYXNzdW1pbmcgYSBgUm9vdGAgaXNcbiAqICAgPiBwYXNzZWQsIGJ1dCBpdCBkb2VzbuKAmXQgaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAqICAgPiBJdCBnZXRzIGhpZ2hlciB3aXRoIGBMaXN0ID4gTGlzdEl0ZW0gPiBUYWJsZSA+IFRhYmxlUm93ID4gVGFibGVDZWxsYC5cbiAqICAgPiBVc2luZyB1cCB0byBgMTBgIGRvZXNu4oCZdCBodXJ0IG9yIGhlbHAgZWl0aGVyLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgVHJlZSB0eXBlLlxuICogQHRlbXBsYXRlIHtVaW50fSBbTWF4PTEwXVxuICogICBNYXg7IHNlYXJjaGVzIHVwIHRvIHRoaXMgZGVwdGguXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtEZXB0aD0wXVxuICogICBDdXJyZW50IGRlcHRoLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeydza2lwJyB8IGJvb2xlYW59IEFjdGlvblxuICogICBVbmlvbiBvZiB0aGUgYWN0aW9uIHR5cGVzLlxuICpcbiAqIEB0eXBlZGVmIHtudW1iZXJ9IEluZGV4XG4gKiAgIE1vdmUgdG8gdGhlIHNpYmxpbmcgYXQgYGluZGV4YCBuZXh0IChhZnRlciBub2RlIGl0c2VsZiBpcyBjb21wbGV0ZWx5XG4gKiAgIHRyYXZlcnNlZCkuXG4gKlxuICogICBVc2VmdWwgaWYgbXV0YXRpbmcgdGhlIHRyZWUsIHN1Y2ggYXMgcmVtb3ZpbmcgdGhlIG5vZGUgdGhlIHZpc2l0b3IgaXNcbiAqICAgY3VycmVudGx5IG9uLCBvciBhbnkgb2YgaXRzIHByZXZpb3VzIHNpYmxpbmdzLlxuICogICBSZXN1bHRzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgY2hpbGRyZW4ubGVuZ3RoYCBzdG9wXG4gKiAgIHRyYXZlcnNpbmcgdGhlIHBhcmVudC5cbiAqXG4gKiBAdHlwZWRlZiB7WyhBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkIHwgdm9pZCk/LCAoSW5kZXggfCBudWxsIHwgdW5kZWZpbmVkKT9dfSBBY3Rpb25UdXBsZVxuICogICBMaXN0IHdpdGggb25lIG9yIHR3byB2YWx1ZXMsIHRoZSBmaXJzdCBhbiBhY3Rpb24sIHRoZSBzZWNvbmQgYW4gaW5kZXguXG4gKlxuICogQHR5cGVkZWYge0FjdGlvbiB8IEFjdGlvblR1cGxlIHwgSW5kZXggfCBudWxsIHwgdW5kZWZpbmVkIHwgdm9pZH0gVmlzaXRvclJlc3VsdFxuICogICBBbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBhIHZpc2l0b3IuXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgVmlzaXRvclxuICogICBIYW5kbGUgYSBub2RlIChtYXRjaGluZyBgdGVzdGAsIGlmIGdpdmVuKS5cbiAqXG4gKiAgIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBgbm9kZWAuXG4gKiAgIFRoZXkgY2FuIGFsc28gdHJhbnNmb3JtIHRoZSBwYXJlbnQgb2Ygbm9kZSAodGhlIGxhc3Qgb2YgYGFuY2VzdG9yc2ApLlxuICpcbiAqICAgUmVwbGFjaW5nIGBub2RlYCBpdHNlbGYsIGlmIGBTS0lQYCBpcyBub3QgcmV0dXJuZWQsIHN0aWxsIGNhdXNlcyBpdHNcbiAqICAgZGVzY2VuZGFudHMgdG8gYmUgd2Fsa2VkICh3aGljaCBpcyBhIGJ1ZykuXG4gKlxuICogICBXaGVuIGFkZGluZyBvciByZW1vdmluZyBwcmV2aW91cyBzaWJsaW5ncyBvZiBgbm9kZWAgKG9yIG5leHQgc2libGluZ3MsIGluXG4gKiAgIGNhc2Ugb2YgcmV2ZXJzZSksIHRoZSBgVmlzaXRvcmAgc2hvdWxkIHJldHVybiBhIG5ldyBgSW5kZXhgIHRvIHNwZWNpZnkgdGhlXG4gKiAgIHNpYmxpbmcgdG8gdHJhdmVyc2UgYWZ0ZXIgYG5vZGVgIGlzIHRyYXZlcnNlZC5cbiAqICAgQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2YgYG5vZGVgIChvciBwcmV2aW91cyBzaWJsaW5ncywgaW4gY2FzZVxuICogICBvZiByZXZlcnNlKSBpcyBoYW5kbGVkIGFzIGV4cGVjdGVkIHdpdGhvdXQgbmVlZGluZyB0byByZXR1cm4gYSBuZXcgYEluZGV4YC5cbiAqXG4gKiAgIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBhbiBhbmNlc3RvciBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmdcbiAqICAgdHJhdmVyc2VkLlxuICogQHBhcmFtIHtWaXNpdGVkfSBub2RlXG4gKiAgIEZvdW5kIG5vZGUuXG4gKiBAcGFyYW0ge0FycmF5PFZpc2l0ZWRQYXJlbnRzPn0gYW5jZXN0b3JzXG4gKiAgIEFuY2VzdG9ycyBvZiBgbm9kZWAuXG4gKiBAcmV0dXJucyB7VmlzaXRvclJlc3VsdH1cbiAqICAgV2hhdCB0byBkbyBuZXh0LlxuICpcbiAqICAgQW4gYEluZGV4YCBpcyB0cmVhdGVkIGFzIGEgdHVwbGUgb2YgYFtDT05USU5VRSwgSW5kZXhdYC5cbiAqICAgQW4gYEFjdGlvbmAgaXMgdHJlYXRlZCBhcyBhIHR1cGxlIG9mIGBbQWN0aW9uXWAuXG4gKlxuICogICBQYXNzaW5nIGEgdHVwbGUgYmFjayBvbmx5IG1ha2VzIHNlbnNlIGlmIHRoZSBgQWN0aW9uYCBpcyBgU0tJUGAuXG4gKiAgIFdoZW4gdGhlIGBBY3Rpb25gIGlzIGBFWElUYCwgdGhhdCBhY3Rpb24gY2FuIGJlIHJldHVybmVkLlxuICogICBXaGVuIHRoZSBgQWN0aW9uYCBpcyBgQ09OVElOVUVgLCBgSW5kZXhgIGNhbiBiZSByZXR1cm5lZC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBbVmlzaXRlZD1VbmlzdE5vZGVdXG4gKiAgIFZpc2l0ZWQgbm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtVbmlzdFBhcmVudH0gW1Zpc2l0ZWRQYXJlbnRzPVVuaXN0UGFyZW50XVxuICogICBBbmNlc3RvciB0eXBlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1Zpc2l0b3I8TWF0Y2hlczxJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LCBDaGVjaz4sIEFuY2VzdG9yPFRyZWUsIE1hdGNoZXM8SW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPiwgQ2hlY2s+Pj59IEJ1aWxkVmlzaXRvclxuICogICBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgdHJlZSBhbmQgYSB0ZXN0LlxuICpcbiAqICAgSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRzYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBbVHJlZT1VbmlzdE5vZGVdXG4gKiAgIFRyZWUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VGVzdH0gW0NoZWNrPVRlc3RdXG4gKiAgIFRlc3QgdHlwZS5cbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5pbXBvcnQge2NvbG9yfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvZG8tbm90LXVzZS1jb2xvcidcblxuLyoqIEB0eXBlIHtSZWFkb25seTxBY3Rpb25UdXBsZT59ICovXG5jb25zdCBlbXB0eSA9IFtdXG5cbi8qKlxuICogQ29udGludWUgdHJhdmVyc2luZyBhcyBub3JtYWwuXG4gKi9cbmV4cG9ydCBjb25zdCBDT05USU5VRSA9IHRydWVcblxuLyoqXG4gKiBTdG9wIHRyYXZlcnNpbmcgaW1tZWRpYXRlbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBFWElUID0gZmFsc2VcblxuLyoqXG4gKiBEbyBub3QgdHJhdmVyc2UgdGhpcyBub2Rl4oCZcyBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IFNLSVAgPSAnc2tpcCdcblxuLyoqXG4gKiBWaXNpdCBub2Rlcywgd2l0aCBhbmNlc3RyYWwgaW5mb3JtYXRpb24uXG4gKlxuICogVGhpcyBhbGdvcml0aG0gcGVyZm9ybXMgKmRlcHRoLWZpcnN0KiAqdHJlZSB0cmF2ZXJzYWwqIGluICpwcmVvcmRlcipcbiAqICgqKk5MUioqKSBvciBpZiBgcmV2ZXJzZWAgaXMgZ2l2ZW4sIGluICpyZXZlcnNlIHByZW9yZGVyKiAoKipOUkwqKikuXG4gKlxuICogWW91IGNhbiBjaG9vc2UgZm9yIHdoaWNoIG5vZGVzIGB2aXNpdG9yYCBpcyBjYWxsZWQgYnkgcGFzc2luZyBhIGB0ZXN0YC5cbiAqIEZvciBjb21wbGV4IHRlc3RzLCB5b3Ugc2hvdWxkIHRlc3QgeW91cnNlbGYgaW4gYHZpc2l0b3JgLCBhcyBpdCB3aWxsIGJlXG4gKiBmYXN0ZXIgYW5kIHdpbGwgaGF2ZSBpbXByb3ZlZCB0eXBlIGluZm9ybWF0aW9uLlxuICpcbiAqIFdhbGtpbmcgdGhlIHRyZWUgaXMgYW4gaW50ZW5zaXZlIHRhc2suXG4gKiBNYWtlIHVzZSBvZiB0aGUgcmV0dXJuIHZhbHVlcyBvZiB0aGUgdmlzaXRvciB3aGVuIHBvc3NpYmxlLlxuICogSW5zdGVhZCBvZiB3YWxraW5nIGEgdHJlZSBtdWx0aXBsZSB0aW1lcywgd2FsayBpdCBvbmNlLCB1c2UgYHVuaXN0LXV0aWwtaXNgXG4gKiB0byBjaGVjayBpZiBhIG5vZGUgbWF0Y2hlcywgYW5kIHRoZW4gcGVyZm9ybSBkaWZmZXJlbnQgb3BlcmF0aW9ucy5cbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgdHJlZS5cbiAqIFNlZSBgVmlzaXRvcmAgZm9yIG1vcmUgaW5mby5cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7VHJlZX0gdHJlZVxuICogQHBhcmFtIHtDaGVja30gY2hlY2tcbiAqIEBwYXJhbSB7QnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPn0gdmlzaXRvclxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gKiBAcGFyYW0ge0J1aWxkVmlzaXRvcjxUcmVlPn0gdmlzaXRvclxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICpcbiAqIEBwYXJhbSB7VW5pc3ROb2RlfSB0cmVlXG4gKiAgIFRyZWUgdG8gdHJhdmVyc2UuXG4gKiBAcGFyYW0ge1Zpc2l0b3IgfCBUZXN0fSB0ZXN0XG4gKiAgIGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3RcbiAqIEBwYXJhbSB7VmlzaXRvciB8IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdmlzaXRvcl1cbiAqICAgSGFuZGxlIGVhY2ggbm9kZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZXZlcnNlXVxuICogICBUcmF2ZXJzZSBpbiByZXZlcnNlIHByZW9yZGVyIChOUkwpIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgcHJlb3JkZXIgKE5MUikuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICogICBOb3RoaW5nLlxuICpcbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VGVzdH0gQ2hlY2tcbiAqICAgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIC8qKiBAdHlwZSB7VGVzdH0gKi9cbiAgbGV0IGNoZWNrXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIG5vIHZpc2l0b3IgZ2l2ZW4sIHNvIGB2aXNpdG9yYCBpcyB0ZXN0LlxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gIH0gZWxzZSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB2aXNpdG9yIGdpdmVuLCBzbyBgdGVzdGAgaXNu4oCZdCBhIHZpc2l0b3IuXG4gICAgY2hlY2sgPSB0ZXN0XG4gIH1cblxuICBjb25zdCBpcyA9IGNvbnZlcnQoY2hlY2spXG4gIGNvbnN0IHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgZmFjdG9yeSh0cmVlLCB1bmRlZmluZWQsIFtdKSgpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VW5pc3ROb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBpbmRleFxuICAgKiBAcGFyYW0ge0FycmF5PFVuaXN0UGFyZW50Pn0gcGFyZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIGNvbnN0IHZhbHVlID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi8gKFxuICAgICAgbm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgPyBub2RlIDoge31cbiAgICApXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBuYW1lID1cbiAgICAgICAgLy8gYGhhc3RgXG4gICAgICAgIHR5cGVvZiB2YWx1ZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUudGFnTmFtZVxuICAgICAgICAgIDogLy8gYHhhc3RgXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS5uYW1lXG4gICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZpc2l0LCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgJ25vZGUgKCcgKyBjb2xvcihub2RlLnR5cGUgKyAobmFtZSA/ICc8JyArIG5hbWUgKyAnPicgOiAnJykpICsgJyknXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB2aXNpdFxuXG4gICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICAvKiogQHR5cGUge1JlYWRvbmx5PEFjdGlvblR1cGxlPn0gKi9cbiAgICAgIGxldCByZXN1bHQgPSBlbXB0eVxuICAgICAgLyoqIEB0eXBlIHtSZWFkb25seTxBY3Rpb25UdXBsZT59ICovXG4gICAgICBsZXQgc3VicmVzdWx0XG4gICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgIGxldCBvZmZzZXRcbiAgICAgIC8qKiBAdHlwZSB7QXJyYXk8VW5pc3RQYXJlbnQ+fSAqL1xuICAgICAgbGV0IGdyYW5kcGFyZW50c1xuXG4gICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCB1bmRlZmluZWQpKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGB2aXNpdG9yYCBpcyBub3cgYSB2aXNpdG9yLlxuICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCdjaGlsZHJlbicgaW4gbm9kZSAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IG5vZGVBc1BhcmVudCA9IC8qKiBAdHlwZSB7VW5pc3RQYXJlbnR9ICovIChub2RlKVxuXG4gICAgICAgIGlmIChub2RlQXNQYXJlbnQuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gKHJldmVyc2UgPyBub2RlQXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuICAgICAgICAgIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGVBc1BhcmVudClcblxuICAgICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlQXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGVBc1BhcmVudC5jaGlsZHJlbltvZmZzZXRdXG5cbiAgICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3RvcnkoY2hpbGQsIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICAgIGlmIChzdWJyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSByZXR1cm4gdmFsdWUgaW50byBhIGNsZWFuIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge1Zpc2l0b3JSZXN1bHR9IHZhbHVlXG4gKiAgIFZhbGlkIHJldHVybiB2YWx1ZXMgZnJvbSB2aXNpdG9ycy5cbiAqIEByZXR1cm5zIHtSZWFkb25seTxBY3Rpb25UdXBsZT59XG4gKiAgIENsZWFuIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eSA6IFt2YWx1ZV1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\n");

/***/ })

};
;