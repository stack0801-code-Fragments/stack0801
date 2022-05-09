class Solution {
    static char[] frinds = {'A', 'C', 'F', 'J', 'M', 'N', 'R', 'T'};    // 전역변수
    static String[] g_data;
    static int answer;

    public int solution(int n, String[] data) {
        g_data = data;
        answer = 0;
        tree(0, new char[8], frinds);
        return answer;
    }

    public void tree(int floor, char[] position, char[] remain) {       // 경우의 수를 찾는 재귀함수
        if(floor == frinds.length && require(position)){                // 8자리의 경우에 조건에 맞는지 검사
            answer++;
            return;
        }
        for (int i = 0; i < remain.length; i++) {                       // 아직 자리가 없는 애들을 하나씩 넣어서 tree 를 만듬
            char[] next_position = new char[position.length];
            char[] next_remain = new char[remain.length - 1];
            System.arraycopy(position, 0, next_position, 0, next_position.length);
            System.arraycopy(remain, 0, next_remain, 0, i);
            System.arraycopy(remain, i + 1, next_remain, i, next_remain.length - i);
            next_position[floor] = remain[i];
            tree(floor + 1, next_position, next_remain);
        }
    }

    public boolean require(char[] position){                            // 조건검사
        char a, b, condition;
        int ai, bi, value;

        for (String d : g_data) {
            a = d.charAt(0);
            b = d.charAt(2);
            condition = d.charAt(3);
            value = d.charAt(4) - '0' + 1;
            ai = -1;
            bi = -1;

            for(int i = 0; i < 8; i++) {
                if(position[i] == a)
                    ai = i;
                if(position[i] == b)
                    bi = i;
            }
            
            if(condition == '=' && Math.abs(ai - bi) != value)
                return false;
            else if(condition == '<' && Math.abs(ai - bi) >= value)
                return false;
            else if(condition == '>' && Math.abs(ai - bi) <= value)
                return false;
        }
        return true;
    }
}