"use strict";
self["webpackHotUpdateprojekt"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
  className: "months"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "sty"
}, "Stycze\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "lut"
}, "Luty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "mar"
}, "Marzec"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "kwi"
}, "Kwiecie\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "maj"
}, "Maj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "cze"
}, "Czerwiec"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "lip"
}, "Lipiec"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "sie"
}, "Sierpie\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "wrz"
}, "Wrzesie\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "paz"
}, "Pa\u017Adziernik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "lis"
}, "Listopad"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
  id: "gru"
}, "Grudzie\u0144")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  onClick: selectMonth,
  id: "butt"
}, "ZATWIERD\u0179")));
/*root.render(<div class="icons">
                <div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div>
                <div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div>
                <div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div>
                <div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div>
            </div>);*/

/*root.render(<div className="data">
    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
</div>)*/

var butt = document.getElementById("butt");
var sty = document.getElementById("sty");
var lut = document.getElementById("lut");
var mar = document.getElementById("mar");
var kwi = document.getElementById("kwi");
var maj = document.getElementById("maj");
var cze = document.getElementById("cze");
var sie = document.getElementById("sie");
var wrz = document.getElementById("wrz");
var paz = document.getElementById("paz");
var lis = document.getElementById("lis");
var gru = document.getElementById("gru");

function selectMonth() {
  if (sty === true) {
    return root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "icons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "tekst"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "./css/oko.png",
      "class": "print"
    })), "WZROK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "tekst"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "./css/lornetka.png",
      "class": "print"
    })), "LORNETKA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "tekst"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "./css/maly.png",
      "class": "print"
    })), "MA\u0141Y TELESKOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "tekst"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "class": "icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "./css/duzy.png",
      "class": "print"
    })), "DU\u017BY TELESKOP")));
  }
}

;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5ace7f7a578504fe4462")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTBCLFNBQU07SUFBaEMsRUFBbEIsQ0FBbkIsdUJBSG1CLGVBSW5CO01BQUssU0FBTTtJQUFYLGdCQUFtQjtNQUFLLFNBQU07SUFBWCxnQkFBa0I7TUFBSyxHQUFHLEVBQUMsZ0JBQVQ7TUFBMEIsU0FBTTtJQUFoQyxFQUFsQixDQUFuQix1QkFKbUIsQ0FBWixDQUFQO0VBTUg7QUFDSjs7QUFBQTs7Ozs7Ozs7VUN4REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWt0Ly4vbWFpbnNpdGUvanMvYXBwLmpzIiwid2VicGFjazovL3Byb2pla3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbiBcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJtb250aHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwic3R5XCI+U3R5Y3plxYQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwibHV0XCI+THV0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJtYXJcIj5NYXJ6ZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwia3dpXCI+S3dpZWNpZcWEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cIm1halwiPk1hajwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJjemVcIj5DemVyd2llYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJsaXBcIj5MaXBpZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwic2llXCI+U2llcnBpZcWEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cIndyelwiPldyemVzaWXFhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJwYXpcIj5QYcW6ZHppZXJuaWs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwibGlzXCI+TGlzdG9wYWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwiZ3J1XCI+R3J1ZHppZcWEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VsZWN0TW9udGh9IGlkPVwiYnV0dFwiPlpBVFdJRVJExbk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+KTsgXHJcbi8qcm9vdC5yZW5kZXIoPGRpdiBjbGFzcz1cImljb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVrc3RcIj48ZGl2IGNsYXNzPVwiaWNvblwiPjxpbWcgc3JjPVwiLi9jc3Mvb2tvLnBuZ1wiIGNsYXNzPVwicHJpbnRcIj48L2ltZz48L2Rpdj5XWlJPSzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRla3N0XCI+PGRpdiBjbGFzcz1cImljb25cIj48aW1nIHNyYz1cIi4vY3NzL2xvcm5ldGthLnBuZ1wiIGNsYXNzPVwicHJpbnRcIj48L2ltZz48L2Rpdj5MT1JORVRLQTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRla3N0XCI+PGRpdiBjbGFzcz1cImljb25cIj48aW1nIHNyYz1cIi4vY3NzL21hbHkucG5nXCIgY2xhc3M9XCJwcmludFwiPjwvaW1nPjwvZGl2Pk1BxYFZIFRFTEVTS09QPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVrc3RcIj48ZGl2IGNsYXNzPVwiaWNvblwiPjxpbWcgc3JjPVwiLi9jc3MvZHV6eS5wbmdcIiBjbGFzcz1cInByaW50XCI+PC9pbWc+PC9kaXY+RFXFu1kgVEVMRVNLT1A8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+KTsqL1xyXG5cclxuLypyb290LnJlbmRlcig8ZGl2IGNsYXNzTmFtZT1cImRhdGFcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVcIj48aW1nIHNyYz1cIi4vY3NzL2FuZHJvbWVkYS5qcGdcIiBjbGFzc05hbWU9XCJqcGdcIj48L2ltZz48aDQ+QW5kcm9tZWRhPC9oND5nYWxha3R5a2Egc3BpcmFsbmEsIGxlxbzEhWNhIG9rb8WCbyAyLDUyIG1pbGlvbmEgbGF0IMWbd2lldGxueWNoIG9kIFppZW1pIHcgZ3dpYXpkb3piaW9yemUgQW5kcm9tZWR5LjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZVwiPjxpbWcgc3JjPVwiLi9jc3Mvam93aXN6LnBuZ1wiIGNsYXNzTmFtZT1cImpwZ1wiPjwvaW1nPjxoND5Kb3dpc3o8L2g0PiBNYXNhIEpvd2lzemEgamVzdCBtbmllanN6YSBuacW8IGplZG5hIHR5c2nEmWN6bmEgbWFzeSBTxYJvxYRjYSwgYWxlIGR3YSBpIHDDs8WCIHJhenkgd2nEmWtzemEgbmnFvCDFgsSFY3puYSBtYXNhIHJlc3p0eSBwbGFuZXQgdyBVa8WCYWR6aWUgU8WCb25lY3pueW0uPC9kaXY+XHJcbjwvZGl2PikqL1xyXG5cclxuY29uc3QgYnV0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dFwiKTtcclxuY29uc3Qgc3R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHlcIik7XHJcbmNvbnN0IGx1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibHV0XCIpO1xyXG5jb25zdCBtYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hclwiKTtcclxuY29uc3Qga3dpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrd2lcIik7XHJcbmNvbnN0IG1haiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFqXCIpO1xyXG5jb25zdCBjemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN6ZVwiKTtcclxuY29uc3Qgc2llID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWVcIik7XHJcbmNvbnN0IHdyeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3J6XCIpO1xyXG5jb25zdCBwYXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhelwiKTtcclxuY29uc3QgbGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXNcIik7XHJcbmNvbnN0IGdydSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3J1XCIpO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0TW9udGgoKXtcclxuICAgIGlmKHN0eSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QucmVuZGVyKDxkaXYgY2xhc3M9XCJpY29uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWtzdFwiPjxkaXYgY2xhc3M9XCJpY29uXCI+PGltZyBzcmM9XCIuL2Nzcy9va28ucG5nXCIgY2xhc3M9XCJwcmludFwiPjwvaW1nPjwvZGl2PldaUk9LPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRla3N0XCI+PGRpdiBjbGFzcz1cImljb25cIj48aW1nIHNyYz1cIi4vY3NzL2xvcm5ldGthLnBuZ1wiIGNsYXNzPVwicHJpbnRcIj48L2ltZz48L2Rpdj5MT1JORVRLQTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWtzdFwiPjxkaXYgY2xhc3M9XCJpY29uXCI+PGltZyBzcmM9XCIuL2Nzcy9tYWx5LnBuZ1wiIGNsYXNzPVwicHJpbnRcIj48L2ltZz48L2Rpdj5NQcWBWSBURUxFU0tPUDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWtzdFwiPjxkaXYgY2xhc3M9XCJpY29uXCI+PGltZyBzcmM9XCIuL2Nzcy9kdXp5LnBuZ1wiIGNsYXNzPVwicHJpbnRcIj48L2ltZz48L2Rpdj5EVcW7WSBURUxFU0tPUDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxuICAgIH1cclxufTtcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhY2U3ZjdhNTc4NTA0ZmU0NDYyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwic2VsZWN0TW9udGgiLCJidXR0Iiwic3R5IiwibHV0IiwibWFyIiwia3dpIiwibWFqIiwiY3plIiwic2llIiwid3J6IiwicGF6IiwibGlzIiwiZ3J1Il0sInNvdXJjZVJvb3QiOiIifQ==