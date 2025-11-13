package q1;

import java.util.Scanner;

public class MagicalWavesCalculator {
  public static void main(String[] args) {
    int numberOfCases = 0;

    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the number of test cases: ");
    numberOfCases = scanner.nextInt();

    if (numberOfCases < 1 || numberOfCases > 100) {
      System.out.println("Error! Number of test cases must be between 1 and 100.");
      return;
    }

    for (int i = 0; i < numberOfCases; i++) {
      int numOfWaves = 0;
      int waveEnergy = 0;

      int totalEnergy = 0;

      System.out.print("Enter the number and energy of waves: ");
      waveEnergy = scanner.nextInt();
      numOfWaves = scanner.nextInt();

      if (waveEnergy < 1 )
      {
        System.out.println("Error! Wave energy must be at least 1.");
        return;
      }

      if (numOfWaves < 1 || numOfWaves > 10) {
        System.out.println("Error! Number of waves must be between 1 and 10.");
        return;
      }

      for (int j = 0; j < numOfWaves; j++) {
        if (j % 2 == 0) {
          totalEnergy = totalEnergy + waveEnergy;
        } else {
          totalEnergy = totalEnergy + (waveEnergy * -1);
        }
      }

      System.out.println("Total Magical Energy: " + totalEnergy);
    }

    scanner.close();
  }
}