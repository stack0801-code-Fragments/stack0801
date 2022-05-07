import java.util.PriorityQueue;

class Solution {
    public int solution(int[] scoville, int K) {
        
        PriorityQueue<Integer> queue = new PriorityQueue();     //힙
        for (int i : scoville) 
            queue.add(i);
        
        int count = 0;
        
        while(queue.peek() <= K) {
            if (queue.size() == 1)                              // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
                return -1;
            queue.add(queue.poll() + queue.poll() * 2);         // 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
            count++;
        }
        
        return count;
    }
}

public class a1 {
    public static void main(String[] args) {
        int[] scoville = {1, 2, 3, 9, 10, 12};
        int K = 7;
        int answer = new Solution().solution(scoville, K);
        System.out.println(answer);
    }
}
