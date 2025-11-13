package q2;

import java.util.Scanner;

public class CargoCraftFleet {
    public static void main(String[] args) {
        final int TYPE_A_PROPPULSION_UNITS = 4;
        final int TYPE_B_PROPPULSION_UNITS = 6;

        int numOfCases = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of test cases: ");
        numOfCases = scanner.nextInt();

        if (numOfCases < 1 || numOfCases > 1000) {
            System.out.println("Error! Number of test cases must be between 1 and 1000.");
            return;
        }

        for (int i = 0; i < numOfCases; i++) {
            long totalPropulsion = 0;

            System.out.print("Enter the total of propulsion units: ");
            totalPropulsion = scanner.nextLong();

            if (totalPropulsion < 1 || totalPropulsion > Math.pow(10, 18)) {
                System.out.println("Error! Total propulsion units must be between 1 and 10^18.");
                return;
            }

            if ((totalPropulsion % TYPE_A_PROPPULSION_UNITS != 0 && totalPropulsion % TYPE_B_PROPPULSION_UNITS != 0) || totalPropulsion < 4) {
                System.out.printf("Maximum and minimum cargo craft fleet can be assembled: %d\n", -1);
            } else {
                long maxFleet = 0;
                long minFleet = 0;

                maxFleet = totalPropulsion / TYPE_A_PROPPULSION_UNITS;

                minFleet = totalPropulsion / TYPE_B_PROPPULSION_UNITS;

                if (totalPropulsion % TYPE_B_PROPPULSION_UNITS >= 4) {
                    minFleet = minFleet + 1;
                }

                System.out.printf("Maximum and minimum cargo craft fleet can be assembled: %d %d\n", minFleet, maxFleet);
            }
        }
    }
}