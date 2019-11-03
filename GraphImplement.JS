class Graph {
    constructor() {
        this.numberofNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        // used to add a vertex in the graph.

        this.adjacentList[node] = [];
        this.numberofNodes++;

    }

    addEdge(node1, node2) {
        // used to add edges between vertices.
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1); //since this is undirected graph both ways push is required.
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}