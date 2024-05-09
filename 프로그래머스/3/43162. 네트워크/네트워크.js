function solution(n, computers) {
    let answer = 0;
    const visitedNode = [];
    
    for (let i = 0; i < n; i++) {
        if (visitedNode[i] !== true) {
            answer++;
            bfs(i);
        }
    }    
    
    return answer;

    function bfs(node) {
        visitedNode[node] = true;
        const q = [node];
        while(q.length !== 0) {
            const currentNode = q.shift();
            computers[currentNode].forEach((isConnected, nextNodeIndex) => {
                if (!isConnected || visitedNode[nextNodeIndex]) return;
                visitedNode[nextNodeIndex] = true;
                q.push(nextNodeIndex);
            })    
        }
    }
}