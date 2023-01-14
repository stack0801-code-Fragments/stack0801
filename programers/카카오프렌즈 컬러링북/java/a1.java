import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int[] solution(int m, int n, int[][] picture) {

        int[][] arr = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                arr[i][j] = picture[i][j];
        }

        int[][] direction = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int numberOfArea = 0, 
            maxSizeOfOneArea = 0;

        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(arr[i][j] == 0)
                    continue;
                Queue<int[]> queue = new LinkedList<int[]>();
                int color = arr[i][j],
                    count = 0;
                queue.add(new int[] {i, j});
                arr[i][j] = 0;
                while(queue.size() != 0) {
                    int[] buff = queue.poll();
                    count++;
                    for (int[] d : direction) {
                        int di = buff[0] + d[0],
                            dj = buff[1] + d[1];
                        if(di < 0 || dj < 0 || di >= m || dj >= n || color != arr[di][dj])
                            continue;
                        queue.add(new int[] {di, dj});
                        arr[di][dj] = 0;
                    }
                }
                numberOfArea++;
                if(count > maxSizeOfOneArea)
                    maxSizeOfOneArea = count;
            }
        }
        return new int[] {numberOfArea, maxSizeOfOneArea};
    }
}

public class a1 {
    public static void main(String[] args) {
        int m = 13, n= 16;
        int[][] picture = {{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0}, {0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0}, {0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0}, {0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0}, {0, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 0}, {0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0}, {0, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0}, {0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 0}, {0, 0, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0}, {0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0}, {0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0}};
        int[] answer = new Solution().solution(m, n, picture);
        System.out.println(answer[0] + "/" + answer[1]);
    }
}