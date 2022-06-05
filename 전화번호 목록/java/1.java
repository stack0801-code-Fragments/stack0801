import java.util.Arrays;

class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);

        for(int i = 0; i < phone_book.length - 1; i++) {
            boolean check = true;
            for(int j = 0; j < phone_book[i].length(); j++) {
                if(phone_book[i].charAt(j) != phone_book[i + 1].charAt(j)){
                    check = false;
                    break;
                }
            }
            if(check)
                return false;
        }
        return true;
    }
}