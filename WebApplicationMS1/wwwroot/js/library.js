"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chart = void 0;
var orgchart1_1 = require("orgchart1");
exports.chart = new orgchart1_1.default(document.getElementById("orgchart"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" }
    ]
});
//# sourceMappingURL=library.js.map