class Solution {
    public int solution(int[][] triangle) {
        int answer = 0;
        
        int[][] sum = new int[triangle.length][];
        for(int i = 0; i < triangle.length; i++)
            sum[i] = new int[i + 1];
        
        for(int i = 0; i < sum.length; i++) {
            for(int j = 0; j < sum[i].length; j++) {
                int left = 0;
                int right = 0;
                
                if(j != 0)
                    left = sum[i - 1][j - 1];
                if(i != j)
                    right += sum[i - 1][j];
                
                sum[i][j] = triangle[i][j];
                if(left > right)
                    sum[i][j] += left;
                else
                    sum[i][j] += right;
            }
        }
        
        for(int i = 0; i < sum.length; i++) {
            if(answer < sum[sum.length - 1][i])
                answer = sum[sum.length - 1][i];
        }
        
        return answer;
    }
}