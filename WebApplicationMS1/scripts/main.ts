import OrgChart from "orgchart1";

export var chart = new OrgChart(document.getElementById("orgchart"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" }
    ]
});

document.getElementById("helloworld").innerText = "Hello world from script";