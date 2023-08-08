import java.util.*;

public class Kata {
    public static int[] pipeFix(int[] numbers) {
        int[] arr = numbers;
        int first = arr[0];
        int last = arr[arr.length-1];
        List<Integer> result = new ArrayList<Integer>();
      for (int i = first; i <= last ;i++){
    result.add(i);     
      }
   return result.stream().mapToInt(Integer::intValue).toArray();
    }
}