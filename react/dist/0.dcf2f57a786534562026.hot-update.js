webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js!./react/dist/assets/styles.css":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/css-loader!./react/dist/assets/styles.css ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol, ul {\\n  list-style: none;\\n}\\nblockquote, q {\\n  quotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n/*\\n  ========================================\\n  Site-wide design\\n  ========================================\\n*/\\n\\nbody {\\n  background: white;\\n  font: 300 16px/22px \\\"Open Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  height:100%;\\n}\\n\\n.group {\\n   min-height:100%;\\n   position:relative;\\n}\\n\\n\\n/*\\n  ========================================\\n  Navigation\\n  ========================================\\n*/\\n\\n.group:before,\\n.group:after {\\n  content: \\\"\\\";\\n  display: table;\\n}\\n.group:after {\\n  clear: both;\\n}\\n.group {\\n  clear: both;\\n  *zoom: 1;\\n}\\n\\n.floatLeft {\\n  float: left;\\n  margin-left: 3%;\\n}\\n\\n.floatRight {\\n  float: right;\\n  margin-right: 3%;\\n}\\n\\n.logo {\\n  padding: 40px 0 10px 10px;\\n  float: left;\\n  width: 300px;\\n}\\n\\n.username {\\n  padding: 25px 30px 10px 20px;\\n  font-size: 20px;\\n  text-align: left;\\n  color: orange;\\n}\\n\\n.navButton {\\n  height: 45px;\\n  float: right;\\n}\\n\\n.icon {\\n  padding-top: 60px;\\n  width: 65px;\\n  float: right;\\n  text-align: center;\\n}\\n\\n.icon span {\\n  display: none;\\n}\\n\\n.icon:hover span {\\n  text-decoration: none;\\n  display: inline-block;\\n  text-align: center;\\n  float: right;\\n  color: #ee6000;\\n  text-decoration: underline;\\n}\\n\\n.icon:hover img {\\n  display: none;\\n}\\n\\n.loginFacebook {\\n  color: #ee6000;\\n}\\n\\n/*\\n  ========================================\\n  Home\\n  ========================================\\n*/\\n.searchImage {\\n  width: 850px;\\n}\\n\\n.search {\\n  position: relative;\\n  top: 40px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  vertical-align: middle;\\n  text-align: center;\\n  width: 850px;\\n}\\n\\n.searchText {\\n  position: relative;\\n  top: -195px;\\n  text-align: center;\\n  width: 100%;\\n  color: black;\\n  font-weight: 400;\\n  /*color: white;*/\\n  text-shadow: 0 2px 5px #000, 0 0 10px #000;\\n  text-decoration-style: bold;\\n}\\n\\n.results {\\n  padding: 20px;\\n  top: -50px;\\n}\\n\\n.searchName, .searchIngredients, .searchDirections {\\n  color: orange;\\n}\\n\\n.searchName {\\n  font-size: 20px;\\n}\\n\\n.searchName:hover {\\n  text-decoration: underline;\\n}\\n\\n.searchIngredient {\\n  font-size: 16px;\\n}\\n\\ninput[type=\\\"text\\\"].form-control {\\n  width: 40%;\\n  margin: 2% auto;\\n}\\n\\n.searchText button {\\n  margin-top: 0;\\n  margin-left: 20px;\\n\\n}\\n\\n/*\\n  ========================================\\n  Add Recipe\\n  ========================================\\n*/\\n\\n.createRecipe {\\n  position: absolute;\\n  padding: 20px;\\n}\\n\\n.recipeImage {\\n  position: relative;\\n  max-width: 850px;\\n  z-index: -1;\\n}\\n\\n.recipeHeader {\\n  color: white;\\n  font-size: 24px;\\n  position: absolute;\\n  top: 200px;\\n  z-index: 1;\\n  text-shadow: 0 2px 5px #000, 0 0 10px #000;\\n  text-decoration-style: bold;\\n  font-size: 90px;\\n  left: 135px;\\n}\\n\\n.recipeName {\\n  color: orange;\\n  font-size: 18px;\\n  padding-top: 20px;\\n}\\n\\n.createRecipe .title {\\n  color: orange;\\n  font-size: 18px;\\n}\\n\\n/*\\n  ========================================\\n  View Fork\\n  ========================================\\n*/\\n\\n.viewFork {\\n  padding: 20px;\\n}\\n\\n.viewFork .recipeName {\\n  color: orange;\\n  font-size: 22px;\\n  padding-top: 20px;\\n}\\n\\n.viewFork .title {\\n  color: orange;\\n  font-size: 16px;\\n}\\n\\n/*\\n  ========================================\\n  My Recipes\\n  ========================================\\n*/\\n\\n.myRecipeImage {\\n  position: relative;\\n  max-width: 850px;\\n  z-index: -1;\\n  padding: 20px;\\n  top: 20px;\\n}\\n\\n.myRecipesTitle {\\n  color: white;\\n  font-size: 24px;\\n  position: absolute;\\n  top: 275px;\\n  left: 60px;\\n  z-index: 1;\\n  text-shadow: 0 2px 5px #000, 0 0 10px #000;\\n  text-decoration-style: bold;\\n  font-size: 50px;\\n}\\n\\n.loadingText{\\n  color: black;\\n  padding: 20px;\\n}\\n\\n.recipesArrays{\\n  position: absolute;\\n  top: 310px;\\n  left: 50px;\\n}\\n\\n.recipesArray{\\n  padding: 20px;\\n}\\n\\n.recipeSingle{\\n  font-size: 20px;\\n  color: orange;\\n}\\n\\n.recipeSingle:hover {\\n  text-decoration: underline;\\n}\\n\\n\\n/*\\n  ========================================\\n  Footer\\n  ========================================\\n*/\\n\\nfooter {\\n   position:fixed;\\n   bottom:0;\\n   width:100%;\\n   height:70px;   /* Height of the footer */\\n   background:#ee6000;\\n}\\n\\nsmall {\\n  color: black;\\n  padding: 20px;\\n}\\n\\n.group {\\n   height:100%;\\n}\\n\\nsmall a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\nsmall a:hover {\\n  text-decoration: underline;\\n}\\n\\n/*\\n  ===========================\\n  Other\\n  ===========================\\n*/\\n\\n#recipe-from-search-img {\\n  height: 300px;\\n  width: 300px;\\n}\\n\\n#myinput {\\n  width: 100%;\\n  padding-right: 20px;\\n  font-size: 16px;\\n  font-weight: 400;\\n  margin-top: 35px;\\n}\\n\\n.search-title {\\n  color: white;\\n  font-size: 60px;\\n  margin-top: 0px;\\n}\\n\\n.recipe-img {\\n  width: 200px;\\n  height: 200px;\\n}\\n\\n.navbar-text-color {\\n  color: #ee6000;\\n  font-weight: 475;\\n}\\n\\n.section {\\n  float: left;\\n  margin: 0 1.5%;\\n  width: 30%;\\n}\\n\\n.aside {\\n  float: right;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlYWN0L2Rpc3QvYXNzZXRzL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9kaXN0L2Fzc2V0cy9zdHlsZXMuY3NzP2M1N2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIFNpdGUtd2lkZSBkZXNpZ25cXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBmb250OiAzMDAgMTZweC8yMnB4IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OjEwMCU7XFxufVxcblxcbi5ncm91cCB7XFxuICAgbWluLWhlaWdodDoxMDAlO1xcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG5cXG4vKlxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgTmF2aWdhdGlvblxcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLmdyb3VwOmJlZm9yZSxcXG4uZ3JvdXA6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uZ3JvdXAge1xcbiAgY2xlYXI6IGJvdGg7XFxuICAqem9vbTogMTtcXG59XFxuXFxuLmZsb2F0TGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG59XFxuXFxuLmZsb2F0UmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgcGFkZGluZzogNDBweCAwIDEwcHggMTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4udXNlcm5hbWUge1xcbiAgcGFkZGluZzogMjVweCAzMHB4IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmljb24ge1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB3aWR0aDogNjVweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24gc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWNvbjpob3ZlciBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjZWU2MDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5pY29uOmhvdmVyIGltZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9naW5GYWNlYm9vayB7XFxuICBjb2xvcjogI2VlNjAwMDtcXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEhvbWVcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcbi5zZWFyY2hJbWFnZSB7XFxuICB3aWR0aDogODUwcHg7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDg1MHB4O1xcbn1cXG5cXG4uc2VhcmNoVGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xOTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIC8qY29sb3I6IHdoaXRlOyovXFxuICB0ZXh0LXNoYWRvdzogMCAycHggNXB4ICMwMDAsIDAgMCAxMHB4ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGJvbGQ7XFxufVxcblxcbi5yZXN1bHRzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0b3A6IC01MHB4O1xcbn1cXG5cXG4uc2VhcmNoTmFtZSwgLnNlYXJjaEluZ3JlZGllbnRzLCAuc2VhcmNoRGlyZWN0aW9ucyB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uc2VhcmNoTmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hOYW1lOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2VhcmNoSW5ncmVkaWVudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5mb3JtLWNvbnRyb2wge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMiUgYXV0bztcXG59XFxuXFxuLnNlYXJjaFRleHQgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG5cXG59XFxuXFxuLypcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIEFkZCBSZWNpcGVcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi5jcmVhdGVSZWNpcGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnJlY2lwZUltYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogODUwcHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnJlY2lwZUhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtc2hhZG93OiAwIDJweCA1cHggIzAwMCwgMCAwIDEwcHggIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogYm9sZDtcXG4gIGZvbnQtc2l6ZTogOTBweDtcXG4gIGxlZnQ6IDEzNXB4O1xcbn1cXG5cXG4ucmVjaXBlTmFtZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVSZWNpcGUgLnRpdGxlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBWaWV3IEZvcmtcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi52aWV3Rm9yayB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udmlld0ZvcmsgLnJlY2lwZU5hbWUge1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4udmlld0ZvcmsgLnRpdGxlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBNeSBSZWNpcGVzXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4ubXlSZWNpcGVJbWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDg1MHB4O1xcbiAgei1pbmRleDogLTE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG4ubXlSZWNpcGVzVGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNzVweDtcXG4gIGxlZnQ6IDYwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCAjMDAwLCAwIDAgMTBweCAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBib2xkO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4ubG9hZGluZ1RleHR7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucmVjaXBlc0FycmF5c3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzEwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucmVjaXBlc0FycmF5e1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnJlY2lwZVNpbmdsZXtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5yZWNpcGVTaW5nbGU6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICBGb290ZXJcXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbmZvb3RlciB7XFxuICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgYm90dG9tOjA7XFxuICAgd2lkdGg6MTAwJTtcXG4gICBoZWlnaHQ6NzBweDsgICAvKiBIZWlnaHQgb2YgdGhlIGZvb3RlciAqL1xcbiAgIGJhY2tncm91bmQ6I2VlNjAwMDtcXG59XFxuXFxuc21hbGwge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmdyb3VwIHtcXG4gICBoZWlnaHQ6MTAwJTtcXG59XFxuXFxuc21hbGwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnNtYWxsIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gIE90aGVyXFxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbiNyZWNpcGUtZnJvbS1zZWFyY2gtaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNteWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbn1cXG5cXG4uc2VhcmNoLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLnJlY2lwZS1pbWcge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm5hdmJhci10ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjZWU2MDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQ3NTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDAgMS41JTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5hc2lkZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vcmVhY3QvZGlzdC9hc3NldHMvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlYWN0L2Rpc3QvYXNzZXRzL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})