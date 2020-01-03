import java.io.*;

public class Goorm49094 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        long num = Integer.parseInt(br.readLine());
        long sum = (num * (num + 1) / 2) % 1000000007L;
        long answer = sum * sum % 1000000007L;

        System.out.println(answer);
    }
}