function solution(rows, columns, queries) {
    const answer = [];
    let min, pivot, y1, x1, y2, x2;             // 이때는 변수를 외부에서 선언하는게 좋다고 생각했음
    
    const arr = []                              // 맵 생선, 초기화
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++)
            arr[i][j] = i * columns + j + 1;
    }
    
    const get_min = (i) => { min = i < min ? i : min }      // 최솟값 얻는 함수
    
    const rotate = (count, x, y, dx, dy) => {               // 라인을 미는 함수
        for(let i = 0; i < count; i++) {
            arr[y + dy * i][x + dx * i] = arr[y + dy * (i + 1)][x + dx * (i + 1)];
            get_min(arr[y + dy * (i + 1)][x + dx * (i + 1)]);
        }
    }
    
    for(let query of queries) {                             // 설정범위에 맞게 상자를 돌림
        [y1, x1, y2, x2] = query.map(x => x - 1);
        min = arr[y2][x2];
        pivot = arr[y1][x1];
        rotate(y2 - y1, x1, y1, 0, 1);
        rotate(x2 - x1, x1, y2, 1, 0);
        rotate(y2 - y1, x2, y2, 0, -1);
        rotate(x2 - x1 - 1, x2, y1, -1, 0);
        arr[y1][x1 + 1] = pivot;
        get_min(pivot);
        answer.push(min);
    }
    
    return answer
}