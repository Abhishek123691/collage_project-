const problems = [
  // ---------- HIMANSHU ----------
  {
    member: "Himanshu",
    title: "Binary Search",
    link: "https://leetcode.com/problems/binary-search/",
    code: `class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
}`
  },
  {
    member: "Himanshu",
    title: "Search Insert Position",
    link: "https://leetcode.com/problems/search-insert-position/",
    code: `class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return l;
    }
}`
  },
  {
    member: "Himanshu",
    title: "Find First and Last Position of Element in Sorted Array",
    link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    code: `class Solution {
    public int[] searchRange(int[] nums, int target) {
        return new int[]{first(nums, target), last(nums, target)};
    }
    int first(int[] a, int t){
        int l=0, r=a.length-1, ans=-1;
        while(l<=r){
            int m=l+(r-l)/2;
            if(a[m]>=t){r=m-1;}
            else l=m+1;
            if(a[m]==t) ans=m;
        }
        return ans;
    }
    int last(int[] a, int t){
        int l=0, r=a.length-1, ans=-1;
        while(l<=r){
            int m=l+(r-l)/2;
            if(a[m]<=t){l=m+1;}
            else r=m-1;
            if(a[m]==t) ans=m;
        }
        return ans;
    }
}`
  },

  // ---------- RAUNAK ----------
  {
    member: "Raunak",
    title: "Find Peak Element",
    link: "https://leetcode.com/problems/find-peak-element/",
    code: `class Solution {
    public int findPeakElement(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] > nums[mid + 1]) r = mid;
            else l = mid + 1;
        }
        return l;
    }
}`
  },
  {
    member: "Raunak",
    title: "Sqrt(x)",
    link: "https://leetcode.com/problems/sqrtx/",
    code: `class Solution {
    public int mySqrt(int x) {
        if (x == 0) return 0;
        int l = 1, r = x, ans = 0;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if ((long)mid * mid <= x) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}`
  },
  {
    member: "Raunak",
    title: "Guess Number Higher or Lower",
    link: "https://leetcode.com/problems/guess-number-higher-or-lower/",
    code: `public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int l = 1, r = n;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int g = guess(mid);
            if (g == 0) return mid;
            else if (g < 0) r = mid - 1;
            else l = mid + 1;
        }
        return -1;
    }
}`
  },

  // ---------- ANUSHKA ----------
  {
    member: "Anushka",
    title: "Find Smallest Letter Greater Than Target",
    link: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
    code: `class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int l = 0, r = letters.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (letters[mid] <= target) l = mid + 1;
            else r = mid - 1;
        }
        return letters[l % letters.length];
    }
}`
  },
  {
    member: "Anushka",
    title: "Koko Eating Bananas",
    link: "https://leetcode.com/problems/koko-eating-bananas/",
    code: `class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int l = 1, r = Arrays.stream(piles).max().getAsInt(), ans = r;
        while (l <= r) {
            int mid = (l + r) / 2;
            int hours = 0;
            for (int p : piles) hours += Math.ceil((double)p / mid);
            if (hours <= h) { ans = mid; r = mid - 1; }
            else l = mid + 1;
        }
        return ans;
    }
}`
  },
  {
    member: "Anushka",
    title: "Capacity To Ship Packages Within D Days",
    link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    code: `class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int l = Arrays.stream(weights).max().getAsInt();
        int r = Arrays.stream(weights).sum();
        while (l < r) {
            int mid = (l + r) / 2, need = 1, cur = 0;
            for (int w : weights) {
                if (cur + w > mid) { need++; cur = 0; }
                cur += w;
            }
            if (need > days) l = mid + 1;
            else r = mid;
        }
        return l;
    }
}`
  },

  // ---------- ABHISHEK ----------
  {
    member: "Abhishek",
    title: "Find Minimum in Rotated Sorted Array",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    code: `class Solution {
    public int findMin(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = (l + r) / 2;
            if (nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }
        return nums[l];
    }
}`
  },
  {
    member: "Abhishek",
    title: "Search in Rotated Sorted Array",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    code: `class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (nums[mid] == target) return mid;
            if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) r = mid - 1;
                else l = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[r]) l = mid + 1;
                else r = mid - 1;
            }
        }
        return -1;
    }
}`
  },
  {
    member: "Abhishek",
    title: "Find Kth Missing Positive Number",
    link: "https://leetcode.com/problems/kth-missing-positive-number/",
    code: `class Solution {
    public int findKthPositive(int[] arr, int k) {
        int l = 0, r = arr.length;
        while (l < r) {
            int mid = (l + r) / 2;
            if (arr[mid] - mid - 1 < k) l = mid + 1;
            else r = mid;
        }
        return l + k;
    }
}`
  }
];

// ---------- DISPLAY ALL PROBLEMS ----------
if (document.getElementById("allProblems")) {
  const container = document.getElementById("allProblems");
  container.innerHTML = problems
    .map(
      (p) => `
    <div class="problem">
      <h3>${p.title}</h3>
      <p><b>Member:</b> ${p.member}</p>
      <p><a href="${p.link}" target="_blank">LeetCode Link</a></p>
      <pre>${p.code}</pre>
    </div>`
    )
    .join("");
}

// ---------- DISPLAY MEMBER PROBLEMS ----------
if (typeof memberName !== "undefined") {
  const container = document.getElementById("memberProblems");
  const memberProblems = problems.filter((p) => p.member === memberName);

  if (memberProblems.length === 0) {
    container.innerHTML = `<p>No problems solved by ${memberName} yet.</p>`;
  } else {
    container.innerHTML = memberProblems
      .map(
        (p) => `
      <div class="problem">
        <h3>${p.title}</h3>
        <p><a href="${p.link}" target="_blank">LeetCode Link</a></p>
        <pre>${p.code}</pre>
      </div>`
      )
      .join("");
  }
}
