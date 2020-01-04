import java.io.*;

public class Goorm49088 {
    private static int jinu;
    private static int sunu;
    private static int day;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] brothers = br.readLine().split(" ");
        jinu = Integer.parseInt(brothers[0]);
        sunu = Integer.parseInt(brothers[1]);
        day = Integer.parseInt(br.readLine());

        distribute(true, jinu);

        for (int i = 0; i < day - 1; i++) {
            boolean oddDay = i % 2 == 1;
            int sender = oddDay ? jinu : sunu;
            distribute(oddDay, sender);
        }

        System.out.println(jinu + " " + sunu);
    }

    private static void distribute(boolean oddDay, int total) {
        int temp = total % 2 == 0 ? total / 2 : total / 2 + 1;
        jinu = oddDay ? jinu - temp : jinu + temp;
        sunu = oddDay ? sunu + temp : sunu - temp;
    }
}
