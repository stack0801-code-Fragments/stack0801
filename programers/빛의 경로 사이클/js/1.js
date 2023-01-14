function solution(grid) {
    const answer = [];
    const visited = [];
    const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    let length;

    for(let i in grid) {
        visited[i] = []
        for(let j in grid[i])
            visited[i][j] = [0, 0, 0, 0];
    }

    const path = (x, y, r) => {
        while(!visited[y][x][r]) {
            visited[y][x][r] = 1;
            length++;

            x = (x + dir[r][0] + grid[0].length) % grid[0].length;
            y = (y + dir[r][1] + grid.length) % grid.length;

            if(grid[y][x] == 'L')
                r = (r - 1 + 4) % 4;
            else if(grid[y][x] == 'R')
                r = (r + 1) % 4;
        }
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            for(let r = 0; r < 4; r++) {
                length = 0;
                path(j, i, r);
                if(length)
                    answer.push(length)
            }
        }
    }

    return answer.sort((a, b) => a - b);
}

console.log(solution(["SL", "LR"]))