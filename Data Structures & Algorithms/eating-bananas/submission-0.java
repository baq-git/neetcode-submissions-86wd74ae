class Solution {
  public int minEatingSpeed(int[] piles, int h) {
    int left = 1;
    int right = Arrays.stream(piles).max().getAsInt();
    int k = right;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (check(piles, h, mid)) {
        k = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }

    }

    return k;

  }

  public boolean check(int[] piles, int h, int k) {

    int totalHours = 0;

    for (int pile : piles) {
      totalHours += Math.ceil((double) pile / k);
    }

    if (totalHours <= h) {
      return true;
    } else {
      return false;
    }

  }
}
