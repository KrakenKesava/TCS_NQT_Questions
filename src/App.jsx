import { useState, useMemo } from "react";

// ─── QUESTIONS DATA ───────────────────────────────────────────────────────────
const questions = [
  // ─── ARRAYS (GFG 2026 Array 01 Class Practice) ────────────────────────────
  {
    id: 1, name: "Sum of Array Elements",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/problems/sum-of-array2326/1",
    codechef: null, hackerrank: null,
    platform_ids: { gfg: "sum-of-array2326" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 2, name: "Largest Element in Array",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1",
    codechef: null, hackerrank: null,
    platform_ids: { gfg: "largest-element-in-array4009" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 3, name: "Mean of an Array",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/problems/mean0021/1",
    codechef: null, hackerrank: null,
    platform_ids: { gfg: "mean0021" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 4, name: "Reverse an Array",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/problems/reverse-an-array/1",
    codechef: "https://www.codechef.com/problems/REVARRAY",
    hackerrank: "https://www.hackerrank.com/challenges/arrays-ds/problem",
    platform_ids: { gfg: "reverse-an-array", codechef: "REVARRAY" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Manipulation",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 5, name: "Second Largest Element in Array",
    leetcode: "https://leetcode.com/problems/second-largest-digit-in-a-string/",
    gfg: "https://www.geeksforgeeks.org/problems/second-largest3735/1",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1796", gfg: "second-largest3735" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 6, name: "Remove Duplicates from Sorted Array",
    leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "26", gfg: "remove-duplicate-elements-from-sorted-array" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Two Pointer",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 7, name: "Check if Array is Sorted",
    leetcode: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
    gfg: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1752", gfg: "check-if-an-array-is-sorted0701" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 8, name: "Max Consecutive Ones",
    leetcode: "https://leetcode.com/problems/max-consecutive-ones/",
    gfg: "https://www.geeksforgeeks.org/problems/max-consecutive-one/1",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "485", gfg: "max-consecutive-one" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Sliding Window",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 9, name: "First and Second Smallest Element",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1",
    codechef: null, hackerrank: null,
    platform_ids: { gfg: "find-the-smallest-and-second-smallest-element-in-an-array3226" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
    source: "GFG 2026",
  },
  {
    id: 10, name: "Move Zeroes to End (Chocolate Factory)",
    leetcode: "https://leetcode.com/problems/move-zeroes/",
    gfg: "https://www.geeksforgeeks.org/move-zeroes-end-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "283" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Array Manipulation",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 11, name: "Find Duplicates in Array",
    leetcode: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    gfg: "https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "442" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Hashing",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 12, name: "Odd Occurring Element (XOR Trick)",
    leetcode: "https://leetcode.com/problems/single-number/",
    gfg: "https://www.geeksforgeeks.org/find-element-appears-odd-number-times/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "136" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Bit Manipulation",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 13, name: "Count Subsets with Given Sum",
    leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
    gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "416" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 14, name: "Smallest Missing Positive Integer",
    leetcode: "https://leetcode.com/problems/first-missing-positive/",
    gfg: "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "41" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Hard", Prime: "Hard" },
    type: "Array Manipulation",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 15, name: "Maximum Subarray Sum (Kadane's Algorithm)",
    leetcode: "https://leetcode.com/problems/maximum-subarray/",
    gfg: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    codechef: "https://www.codechef.com/problems/KADANE",
    hackerrank: null,
    platform_ids: { leetcode: "53", codechef: "KADANE" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Sliding Window / DP",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 16, name: "Two Sum",
    leetcode: "https://leetcode.com/problems/two-sum/",
    gfg: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Hashing / Two Pointer",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 17, name: "Cyclic Rotation of Array by K",
    leetcode: "https://leetcode.com/problems/rotate-array/",
    gfg: "https://www.geeksforgeeks.org/array-rotation/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem",
    platform_ids: { leetcode: "189" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Array Manipulation",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 18, name: "Sort Array of 0s, 1s, 2s (Dutch National Flag)",
    leetcode: "https://leetcode.com/problems/sort-colors/",
    gfg: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "75" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Two Pointer",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 19, name: "Missing Number in Array",
    leetcode: "https://leetcode.com/problems/missing-number/",
    gfg: "https://www.geeksforgeeks.org/find-the-missing-number/",
    codechef: "https://www.codechef.com/problems/MISSINGNO",
    hackerrank: null,
    platform_ids: { leetcode: "268", codechef: "MISSINGNO" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Arrays",
    source: "Previous Years",
  },
  {
    id: 20, name: "Row with Maximum 1s in Binary Matrix",
    leetcode: "https://leetcode.com/problems/row-with-maximum-ones/",
    gfg: "https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP2",
    hackerrank: null,
    platform_ids: { leetcode: "2643", codechef: "TCSNQTCP2" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Binary Search / 2D Array",
    category: "Arrays",
    source: "Previous Years",
  },
  // ─── STRINGS ──────────────────────────────────────────────────────────────
  {
    id: 21, name: "Backspace String Compare (Alice & Bob Typewriter)",
    leetcode: "https://leetcode.com/problems/backspace-string-compare/",
    gfg: "https://www.geeksforgeeks.org/backspace-string-compare/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "844" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Stack / String",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 22, name: "First Non-Repeating Character",
    leetcode: "https://leetcode.com/problems/first-unique-character-in-a-string/",
    gfg: "https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "387" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Hashing / String",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 23, name: "Valid Palindrome",
    leetcode: "https://leetcode.com/problems/valid-palindrome/",
    gfg: "https://www.geeksforgeeks.org/check-whether-the-given-string-is-palindrome/",
    codechef: "https://www.codechef.com/problems/PALIN",
    hackerrank: "https://www.hackerrank.com/challenges/palindrome-index/problem",
    platform_ids: { leetcode: "125", codechef: "PALIN" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Two Pointer / String",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 24, name: "Valid Anagram",
    leetcode: "https://leetcode.com/problems/valid-anagram/",
    gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
    codechef: "https://www.codechef.com/problems/ANA",
    hackerrank: null,
    platform_ids: { leetcode: "242", codechef: "ANA" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Hashing / String",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 25, name: "Remove One Letter to Make Equal Frequency",
    leetcode: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/",
    gfg: "https://www.geeksforgeeks.org/remove-one-character-from-string-to-make-all-character-frequencies-same/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1647" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Greedy / Hashing",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 26, name: "Longest Common Subsequence",
    leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
    codechef: "https://www.codechef.com/problems/LCS",
    hackerrank: null,
    platform_ids: { leetcode: "1143", codechef: "LCS" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Strings",
    source: "Previous Years",
  },
  {
    id: 27, name: "Count Character Occurrences / Frequency",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/frequency-of-each-character-in-a-string/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP3",
    hackerrank: null,
    platform_ids: { codechef: "TCSNQTCP3" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Hashing / String",
    category: "Strings",
    source: "Previous Years",
  },
  // ─── NUMBER SYSTEM ────────────────────────────────────────────────────────
  {
    id: 28, name: "Toggle Bits After MSB",
    leetcode: "https://leetcode.com/problems/complement-of-base-10-integer/",
    gfg: "https://www.geeksforgeeks.org/toggle-all-bits-after-msb/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1009" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Bit Manipulation / Number System",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 29, name: "Count Set Bits (Hamming Weight)",
    leetcode: "https://leetcode.com/problems/number-of-1-bits/",
    gfg: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
    codechef: "https://www.codechef.com/problems/SETBIT",
    hackerrank: null,
    platform_ids: { leetcode: "191", codechef: "SETBIT" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Bit Manipulation",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 30, name: "Check Armstrong Number",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/program-to-check-armstrong-number/",
    codechef: "https://www.codechef.com/problems/ARMNUMB",
    hackerrank: null,
    platform_ids: { codechef: "ARMNUMB" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 31, name: "Prime Number Check / Count Primes",
    leetcode: "https://leetcode.com/problems/count-primes/",
    gfg: "https://www.geeksforgeeks.org/prime-numbers/",
    codechef: "https://www.codechef.com/problems/PRB01",
    hackerrank: "https://www.hackerrank.com/challenges/sieve-of-eratosthenes/problem",
    platform_ids: { leetcode: "204", codechef: "PRB01" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Sieve",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 32, name: "Fibonacci Series / Nth Fibonacci",
    leetcode: "https://leetcode.com/problems/fibonacci-number/",
    gfg: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
    codechef: "https://www.codechef.com/problems/FIBO",
    hackerrank: null,
    platform_ids: { leetcode: "509", codechef: "FIBO" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Recursion / Math",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 33, name: "Factorial of a Number",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/",
    codechef: "https://www.codechef.com/problems/FAC",
    hackerrank: "https://www.hackerrank.com/challenges/extra-long-factorials/problem",
    platform_ids: { codechef: "FAC" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Recursion / Math",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 34, name: "LCM and HCF of Two Numbers",
    leetcode: "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    gfg: "https://www.geeksforgeeks.org/maths/hcf-and-lcm/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem",
    platform_ids: { leetcode: "1071" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Number System",
    source: "GFG 2026",
  },
  {
    id: 35, name: "Convert Number to Words",
    leetcode: "https://leetcode.com/problems/integer-to-english-words/",
    gfg: "https://www.geeksforgeeks.org/convert-number-to-words/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP4",
    hackerrank: null,
    platform_ids: { leetcode: "273", codechef: "TCSNQTCP4" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Medium", Digital: "Medium" },
    type: "Number System / String",
    category: "Number System",
    source: "Previous Years",
  },
  {
    id: 36, name: "Good Number (Divisibility Check)",
    leetcode: null,
    gfg: null,
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP1",
    hackerrank: null,
    platform_ids: { codechef: "TCSNQTCP1" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Number System",
    source: "Previous Years",
  },
  // ─── SERIES & APTITUDE ───────────────────────────────────────────────────
  {
    id: 37, name: "Nth Term of Mixed Numeric Series",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/find-nth-term-of-the-series-1-2-6-24-120/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Series / Pattern",
    category: "Series & Aptitude",
    source: "Previous Years",
  },
  {
    id: 38, name: "Circular Permutation (Seating Arrangement)",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/circular-permutation/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Math / Combinatorics",
    category: "Series & Aptitude",
    source: "Previous Years",
  },
  {
    id: 39, name: "Time & Work, Pipes & Cisterns Problems",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/ssc-banking/time-and-work/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Math / Aptitude",
    category: "Series & Aptitude",
    source: "GFG 2026",
  },
  {
    id: 40, name: "Permutation, Combination & Probability",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/aptitude/permutation-and-combination/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja"],
    difficulty: { Ninja: "Medium" },
    type: "Math / Combinatorics",
    category: "Series & Aptitude",
    source: "GFG 2026",
  },
  // ─── SEARCHING & SORTING ─────────────────────────────────────────────────
  {
    id: 41, name: "Search in Rotated Sorted Array",
    leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "33" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Binary Search",
    category: "Searching & Sorting",
    source: "Previous Years",
  },
  {
    id: 42, name: "Merge Two Sorted Arrays",
    leetcode: "https://leetcode.com/problems/merge-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/merge-two-sorted-arrays/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "88" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Two Pointer / Merge",
    category: "Searching & Sorting",
    source: "Previous Years",
  },
  {
    id: 43, name: "How Many Numbers Smaller Than Current",
    leetcode: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    gfg: "https://www.geeksforgeeks.org/count-of-smaller-elements-on-right-side/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1365" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Sorting / Counting",
    category: "Searching & Sorting",
    source: "Previous Years",
  },
  // ─── LINKED LIST ─────────────────────────────────────────────────────────
  {
    id: 44, name: "Reverse a Linked List",
    leetcode: "https://leetcode.com/problems/reverse-linked-list/",
    gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/reverse-a-linked-list/problem",
    platform_ids: { leetcode: "206" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Linked List",
    category: "Linked List",
    source: "Previous Years",
  },
  {
    id: 45, name: "Doubly Linked List from 2D Array (Even/Odd Rows)",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/doubly-linked-list/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Linked List",
    category: "Linked List",
    source: "Previous Years",
  },
  // ─── GRAPHS ──────────────────────────────────────────────────────────────
  {
    id: 46, name: "BFS of Graph",
    leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/bfsshortreach/problem",
    platform_ids: { leetcode: "102" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Graph / BFS",
    category: "Graphs",
    source: "Previous Years",
  },
  {
    id: 47, name: "DFS / Number of Islands",
    leetcode: "https://leetcode.com/problems/number-of-islands/",
    gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "200" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Graph / DFS",
    category: "Graphs",
    source: "Previous Years",
  },
  // ─── DYNAMIC PROGRAMMING ─────────────────────────────────────────────────
  {
    id: 48, name: "0/1 Knapsack Problem",
    leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
    gfg: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
    codechef: "https://www.codechef.com/problems/KNAPSACK",
    hackerrank: null,
    platform_ids: { leetcode: "416", codechef: "KNAPSACK" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Dynamic Programming",
    source: "Previous Years",
  },
  {
    id: 49, name: "Longest Increasing Subsequence",
    leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "300" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Dynamic Programming",
    source: "Previous Years",
  },
  // ─── STACK / QUEUE ───────────────────────────────────────────────────────
  {
    id: 50, name: "Valid Parentheses",
    leetcode: "https://leetcode.com/problems/valid-parentheses/",
    gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/balanced-brackets/problem",
    platform_ids: { leetcode: "20" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Stack",
    category: "Stack / Queue",
    source: "Previous Years",
  },
];

// ─── STUDY RESOURCES (from GFG 2026 Guide) ────────────────────────────────────
const resources = [
  {
    section: "Section 1: Verbal Ability",
    color: "#10b981",
    icon: "📖",
    topics: [
      { name: "Rules for Usage of Nouns", video: "https://www.youtube.com/watch?v=SJMNAltbKpM", pdf: "https://media.geeksforgeeks.org/wp-content/uploads/20260223160837422156/TCS_NQT_2026_LEC_1_NOUNS-.pdf", quiz: "https://www.geeksforgeeks.org/quizzes/rules-for-the-usage-of-nouns/", hw: "https://www.geeksforgeeks.org/quizzes/noun-quiz/", article: "https://www.geeksforgeeks.org/english/nouns/" },
      { name: "Rules for Usage of Pronouns", video: "https://www.youtube.com/watch?v=TVfKqbenTgM", pdf: "https://media.geeksforgeeks.org/wp-content/uploads/20260224152047271419/TCS_NQT_LEC_2_VERBAL_PRONOUN.pdf", article: "https://www.geeksforgeeks.org/english/what-are-pronouns-meaning-and-examples/" },
      { name: "Rules for Usage of Verbs", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Rules for Usage of Adjectives", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Rules for Usage of Adverbs", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Rules for Usage of Prepositions", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Rules for Usage of Conjunctions", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Direct and Indirect Speech", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Active and Passive Voice", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Reading Comprehension", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Jumbled and Para-Jumbled Sentences", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Vocabulary", article: "https://www.geeksforgeeks.org/english/" },
      { name: "Verbal Reasoning", article: "https://www.geeksforgeeks.org/english/" },
    ],
  },
  {
    section: "Section 2: Numerical Ability & Reasoning",
    color: "#f59e0b",
    icon: "🔢",
    topics: [
      { name: "Time & Work, Pipes & Cisterns, LCM & HCF", video: "https://www.youtube.com/watch?v=3EI9YAySwHQ", pdf: "https://media.geeksforgeeks.org/wp-content/uploads/20260223221726359180/20260223220636087.pdf", quiz: "https://www.geeksforgeeks.org/quizzes/tcqnqt2026classtimeworkpipecisternlcmhcf/", hw: "https://www.geeksforgeeks.org/quizzes/tcs-nqt-2026-time-and-work-hcf-lcm/", article: "https://www.geeksforgeeks.org/ssc-banking/time-and-work/" },
      { name: "Time, Speed & Distance, Boats & Streams", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Percentage", article: "https://www.geeksforgeeks.org/aptitude/percentage/" },
      { name: "Ratio & Proportion, Mixture", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Profit, Loss & Discount", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Simple & Compound Interest, Average", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Number System", article: "https://www.geeksforgeeks.org/aptitude/number-system/" },
      { name: "Mensuration 2D & 3D", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Clocks and Calendars", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Series, Coding-Decoding & Analogy", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Blood Relations, Directions & Math Operations", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Seating Arrangement and Puzzle Test", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Non-Verbal Reasoning", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Algebra and Progressions", article: "https://www.geeksforgeeks.org/aptitude/" },
      { name: "Permutation, Combination & Probability, DI", article: "https://www.geeksforgeeks.org/aptitude/permutation-and-combination/" },
    ],
  },
  {
    section: "Section 3: Programming Logic & Coding",
    color: "#6366f1",
    icon: "💻",
    topics: [
      { name: "Array 01 — Sum, Largest, Mean, Reverse, 2nd Largest, Sorted Check", video: "https://www.youtube.com/watch?v=g9W7uh_Jfxs", pdf: "https://media.geeksforgeeks.org/wp-content/uploads/20260223184228144414/tcs-nqt-2026-programming-1-.pdf", article: "https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/" },
      { name: "Array 02 — Rotation, Duplicates, Sorting Techniques", article: "https://www.geeksforgeeks.org/array-data-structure/" },
      { name: "Array 03 — Subarray Problems, Searching", article: "https://www.geeksforgeeks.org/array-data-structure/" },
      { name: "Array 04 — 2D Arrays, Matrix Operations", article: "https://www.geeksforgeeks.org/multidimensional-arrays-in-c/" },
      { name: "String 01 — Basics, Palindrome, Reverse, ASCII", article: "https://www.geeksforgeeks.org/cpp/strings-in-cpp/" },
      { name: "String 02 — Anagram, Character Frequency", article: "https://www.geeksforgeeks.org/cpp/strings-in-cpp/" },
      { name: "String 03 — Pattern Matching, Subsequences", article: "https://www.geeksforgeeks.org/cpp/strings-in-cpp/" },
      { name: "String 04 — Advanced String Algorithms", article: "https://www.geeksforgeeks.org/cpp/strings-in-cpp/" },
      { name: "Number Theory 01 — Prime, Factorial, Fibonacci", article: "https://www.geeksforgeeks.org/maths/number-theory-competitive-programming/" },
      { name: "Number Theory 02 — Bit Manipulation, Binary Conversion", article: "https://www.geeksforgeeks.org/bits-manipulation-important-tactics/" },
      { name: "Number Theory 03 — LCM, HCF, Modular Arithmetic", article: "https://www.geeksforgeeks.org/maths/hcf-and-lcm/" },
      { name: "Number Theory 04 — Armstrong, Perfect, Abundant Numbers", article: "https://www.geeksforgeeks.org/maths/number-theory-competitive-programming/" },
      { name: "Number Theory 05 — Advanced Number-Theoretic Problems", article: "https://www.geeksforgeeks.org/maths/number-theory-competitive-programming/" },
    ],
  },
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PROFILES = ["All", "Ninja", "Digital", "Prime"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const CATEGORIES = ["All", "Arrays", "Strings", "Number System", "Series & Aptitude", "Searching & Sorting", "Linked List", "Graphs", "Dynamic Programming", "Stack / Queue"];
const SOURCES = ["All", "GFG 2026", "Previous Years"];

const tagColor = {
  Ninja:   { bg: "#052e16", border: "#16a34a", color: "#4ade80" },
  Digital: { bg: "#0c1a3e", border: "#2563eb", color: "#93c5fd" },
  Prime:   { bg: "#2e1065", border: "#7c3aed", color: "#c4b5fd" },
};
const diffColor = { Easy: "#4ade80", Medium: "#fbbf24", Hard: "#f87171" };

function Tag({ label }) {
  const s = tagColor[label] || {};
  return (
    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>{label}</span>
  );
}

function PlatformLink({ href, label, id }) {
  if (!href) return null;
  const icons = { LeetCode: "🟡", GFG: "🟢", CodeChef: "🟤", HackerRank: "🟩" };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 7px", borderRadius: 5, fontSize: 10, background: "#1e293b", border: "1px solid #334155", color: "#e2e8f0", textDecoration: "none" }}>
      {icons[label]} {label}{id ? <span style={{ color: "#64748b" }}>#{id}</span> : null}
    </a>
  );
}

function ResourceBadge({ href, label, color }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 8px", borderRadius: 5, fontSize: 11, background: "#1e293b", border: `1px solid ${color}55`, color: color, textDecoration: "none" }}>
      {label}
    </a>
  );
}

// ─── QUESTIONS TAB ───────────────────────────────────────────────────────────
function QuestionsTab() {
  const [profile, setProfile] = useState("All");
  const [diff, setDiff] = useState("All");
  const [category, setCategory] = useState("All");
  const [source, setSource] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => questions.filter(q => {
    if (profile !== "All" && !q.profile.includes(profile)) return false;
    if (category !== "All" && q.category !== category) return false;
    if (source !== "All" && q.source !== source) return false;
    if (diff !== "All" && !Object.values(q.difficulty).includes(diff)) return false;
    if (search && !q.name.toLowerCase().includes(search.toLowerCase()) && !q.type.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [profile, diff, category, source, search]);

  return (
    <div>
      {/* Filters */}
      <div style={{ background: "#0f172a", borderBottom: "1px solid #1e293b", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search name or type..."
            style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 6, padding: "5px 11px", color: "#e2e8f0", fontSize: 12, outline: "none", minWidth: 190 }} />
          {/* Profile buttons */}
          <div style={{ display: "flex", gap: 3 }}>
            {PROFILES.map(p => (
              <button key={p} onClick={() => setProfile(p)} style={{ padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "1px solid", background: profile === p ? "#6366f1" : "#1e293b", borderColor: profile === p ? "#818cf8" : "#334155", color: profile === p ? "#fff" : "#94a3b8" }}>{p}</button>
            ))}
          </div>
          {/* Diff */}
          <div style={{ display: "flex", gap: 3 }}>
            {DIFFICULTIES.map(d => (
              <button key={d} onClick={() => setDiff(d)} style={{ padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "1px solid", background: diff === d ? "#1e293b" : "#0f172a", borderColor: diff === d ? "#6366f1" : "#334155", color: diff === d ? (diffColor[d] || "#818cf8") : "#475569" }}>{d}</button>
            ))}
          </div>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 5, padding: "4px 9px", color: "#94a3b8", fontSize: 11, outline: "none" }}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={source} onChange={e => setSource(e.target.value)} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 5, padding: "4px 9px", color: "#94a3b8", fontSize: 11, outline: "none" }}>
            {SOURCES.map(s => <option key={s}>{s}</option>)}
          </select>
          <span style={{ color: "#475569", fontSize: 11 }}>{filtered.length} results</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px" }}>
        <div style={{ overflowX: "auto", borderRadius: 8, border: "1px solid #1e293b" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#0f172a" }}>
                {["#", "Question Name", "Profile", "Difficulty", "Type", "Source", "Platform Links"].map(h => (
                  <th key={h} style={{ padding: "10px 13px", textAlign: "left", color: "#475569", fontWeight: 700, fontSize: 11, borderBottom: "1px solid #1e293b", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((q, i) => (
                <tr key={q.id}
                  style={{ borderBottom: "1px solid #0f172a", background: i % 2 === 0 ? "#0a0e1a" : "#0c1120", transition: "background 0.1s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1e293b"}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#0a0e1a" : "#0c1120"}>
                  <td style={{ padding: "9px 13px", color: "#334155", fontWeight: 700, width: 32 }}>{q.id}</td>
                  <td style={{ padding: "9px 13px", maxWidth: 230 }}><span style={{ color: "#e2e8f0", fontWeight: 600 }}>{q.name}</span></td>
                  <td style={{ padding: "9px 13px" }}>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                      {q.profile.map(p => <Tag key={p} label={p} />)}
                    </div>
                  </td>
                  <td style={{ padding: "9px 13px", whiteSpace: "nowrap" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {Object.entries(q.difficulty).map(([p, d]) => (
                        <span key={p} style={{ fontSize: 11, fontWeight: 700, color: diffColor[d] }}>{p}: {d}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: "9px 13px" }}>
                    <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#1e293b", border: "1px solid #334155", color: "#94a3b8" }}>{q.type}</span>
                  </td>
                  <td style={{ padding: "9px 13px" }}>
                    <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4,
                      background: q.source === "GFG 2026" ? "#052e16" : "#1e1b4b",
                      border: `1px solid ${q.source === "GFG 2026" ? "#16a34a" : "#4338ca"}`,
                      color: q.source === "GFG 2026" ? "#4ade80" : "#a5b4fc" }}>
                      {q.source}
                    </span>
                  </td>
                  <td style={{ padding: "9px 13px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      <PlatformLink href={q.leetcode} label="LeetCode" id={q.platform_ids?.leetcode} />
                      <PlatformLink href={q.gfg} label="GFG" />
                      <PlatformLink href={q.codechef} label="CodeChef" id={q.platform_ids?.codechef} />
                      <PlatformLink href={q.hackerrank} label="HackerRank" />
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ padding: "40px", textAlign: "center", color: "#475569" }}>No questions match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 14, padding: "10px 14px", background: "#0f172a", borderRadius: 6, border: "1px solid #1e293b", fontSize: 11, color: "#475569", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontWeight: 700 }}>PLATFORMS:</span>
          <span>🟡 LeetCode</span><span>🟢 GFG</span><span>🟤 CodeChef</span><span>🟩 HackerRank</span>
          <span style={{ borderLeft: "1px solid #1e293b", paddingLeft: 16, fontWeight: 700 }}>DIFFICULTY:</span>
          <span style={{ color: "#4ade80", fontWeight: 700 }}>● Easy</span>
          <span style={{ color: "#fbbf24", fontWeight: 700 }}>● Medium</span>
          <span style={{ color: "#f87171", fontWeight: 700 }}>● Hard</span>
        </div>
      </div>
    </div>
  );
}

// ─── RESOURCES TAB ───────────────────────────────────────────────────────────
function ResourcesTab() {
  const [open, setOpen] = useState(2); // default open coding section
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
      <div style={{ marginBottom: 18, padding: "10px 14px", background: "#0f172a", borderRadius: 7, border: "1px solid #1e293b", fontSize: 12, color: "#64748b" }}>
        📚 Official <strong style={{ color: "#a5b4fc" }}>GFG TCS NQT 2026</strong> live lecture series — videos, PDFs, class quizzes & homework MCQs. Click a section to expand.
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {resources.map((sec, si) => (
          <div key={si} style={{ borderRadius: 8, border: `1px solid ${sec.color}44`, overflow: "hidden" }}>
            <button onClick={() => setOpen(open === si ? -1 : si)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", background: `${sec.color}18`, border: "none", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{sec.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: sec.color }}>{sec.section}</span>
                <span style={{ fontSize: 11, color: "#64748b", background: "#1e293b", padding: "1px 7px", borderRadius: 10 }}>{sec.topics.length} topics</span>
              </div>
              <span style={{ color: sec.color }}>{open === si ? "▲" : "▼"}</span>
            </button>
            {open === si && (
              <div style={{ background: "#0a0e1a" }}>
                {sec.topics.map((t, ti) => (
                  <div key={ti} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 18px", borderTop: "1px solid #1e293b", flexWrap: "wrap", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "#cbd5e1", minWidth: 300 }}>
                      <span style={{ color: "#475569", marginRight: 8, fontSize: 11 }}>{ti + 1}.</span>{t.name}
                    </span>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {t.video   && <ResourceBadge href={t.video}   label="▶ Video"      color={sec.color} />}
                      {t.pdf     && <ResourceBadge href={t.pdf}     label="📄 PDF"       color="#f59e0b"   />}
                      {t.quiz    && <ResourceBadge href={t.quiz}    label="📝 Class Quiz" color="#10b981"   />}
                      {t.hw      && <ResourceBadge href={t.hw}      label="📋 HW MCQs"   color="#6366f1"   />}
                      {t.article && <ResourceBadge href={t.article} label="🔗 Article"   color="#64748b"   />}
                      {!t.video && !t.pdf && !t.quiz && !t.hw && (
                        <span style={{ fontSize: 10, color: "#334155", fontStyle: "italic" }}>Material coming soon</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("questions");
  const profileCount = p => questions.filter(q => q.profile.includes(p)).length;

  return (
    <div style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace", background: "#0a0e1a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 60%,#0f172a 100%)", borderBottom: "1px solid #1e293b", padding: "22px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 24 }}>⚡</span>
            <h1 style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", margin: 0 }}>TCS NQT Master Sheet</h1>
            <span style={{ padding: "2px 8px", fontSize: 10, fontWeight: 700, borderRadius: 4, background: "#6366f1", color: "#fff" }}>2020–2026</span>
            <span style={{ padding: "2px 8px", fontSize: 10, fontWeight: 700, borderRadius: 4, background: "#059669", color: "#fff" }}>GFG 2026 ✓</span>
          </div>
          <p style={{ color: "#64748b", fontSize: 11, marginLeft: 34, marginBottom: 12 }}>
            {questions.length} coding questions + full GFG 2026 study guide • Ninja / Digital / Prime
          </p>
          <div style={{ display: "flex", gap: 14, marginLeft: 34, marginBottom: 12, flexWrap: "wrap" }}>
            {["Ninja", "Digital", "Prime"].map(p => {
              const s = tagColor[p];
              return (
                <span key={p} style={{ fontSize: 11, display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ padding: "1px 7px", borderRadius: 4, background: s.bg, border: `1px solid ${s.border}`, color: s.color, fontWeight: 700 }}>{p}</span>
                  <span style={{ color: "#475569" }}>{profileCount(p)}</span>
                </span>
              );
            })}
          </div>
          {/* Tab bar */}
          <div style={{ display: "flex" }}>
            {[["questions", "📋 Coding Questions"], ["resources", "📚 Study Resources (GFG 2026)"]].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)}
                style={{ padding: "10px 18px", fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none", borderBottom: tab === k ? "2px solid #818cf8" : "2px solid transparent", background: "transparent", color: tab === k ? "#818cf8" : "#475569", transition: "color 0.15s" }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "questions" ? <QuestionsTab /> : <ResourcesTab />}
    </div>
  );
}