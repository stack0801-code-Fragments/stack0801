function solution(places) {
    let place;
    const answer = [];

    const dfs = (x, y) => {
        const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const stack = [[x, y, x, y, 0]];

        while(stack.length > 0) {
            let [px, py, bx, by, range] = stack.pop();
            if(place[px][py] === 'P' && !(px == x && py == y))
                return false;
            if(range >= 2)
                continue;
            for([dx, dy] of direction) {
                const pdx = px + dx;
                const pdy = py + dy;
                if(!(pdx < 0 || pdx > 4 || pdy < 0 || pdy > 4 || pdx == bx && pdy == by || place[pdx][pdy] === 'X'))
                    stack.push([pdx, pdy, px, py, range + 1]);
            }
        }
        return true;
    }
    const search = () => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if(place[i][j] === 'P' && !dfs(i, j))
                    return false;
            }
        }
        return true;
    }

    for(place of places)
        search() ? answer.push(1) : answer.push(0);
    return answer;
}

let places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log(solution(places))