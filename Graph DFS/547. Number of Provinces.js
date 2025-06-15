/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = {};
    const stack = [];
    let result = 0;
    for(let i = 0; i < isConnected.length; i++){
        if(visited[i]!==true) {
            result++;
            visited[i] = true;
            for(let j = 0; j < isConnected[i].length; j++){
                if(isConnected[i][j]===1&&visited[j]!==true) stack.push(j)
            }
        }
        while(stack.length>0){
            const cur = stack.pop();
            visited[cur] = true;
            for(let j = 0; j < isConnected[cur].length; j++){
                if(isConnected[cur][j]===1&&visited[j]!==true) stack.push(j)
            }
        }
    }
    return result
};