import { useState, useMemo } from "react";

const questions = [
  // ─── ARRAYS ───────────────────────────────────────────────────────────────
  {
    id: 1, name: "Move Zeroes to End (Chocolate Factory)",
    leetcode: "https://leetcode.com/problems/move-zeroes/",
    gfg: "https://www.geeksforgeeks.org/move-zeroes-end-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "283", gfg: "move-zeroes-end-array" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Array Manipulation",
    category: "Arrays",
  },
  {
    id: 2, name: "Reverse an Array In-Place",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
    codechef: "https://www.codechef.com/problems/REVARRAY",
    hackerrank: "https://www.hackerrank.com/challenges/arrays-ds/problem",
    platform_ids: { gfg: "write-a-program-to-reverse-an-array", codechef: "REVARRAY" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Array Manipulation",
    category: "Arrays",
  },
  {
    id: 3, name: "Second Largest Element in Array",
    leetcode: "https://leetcode.com/problems/second-largest-digit-in-a-string/",
    gfg: "https://www.geeksforgeeks.org/find-second-largest-element-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1796", gfg: "find-second-largest-element-array" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Array Traversal",
    category: "Arrays",
  },
  {
    id: 4, name: "Find Duplicates in Array",
    leetcode: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    gfg: "https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "442" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Hashing",
    category: "Arrays",
  },
  {
    id: 5, name: "Odd Occurring Element (XOR Trick)",
    leetcode: "https://leetcode.com/problems/single-number/",
    gfg: "https://www.geeksforgeeks.org/find-element-appears-odd-number-times/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "136" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Bit Manipulation",
    category: "Arrays",
  },
  {
    id: 6, name: "Count Subsets with Given Sum",
    leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
    gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "416" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Arrays",
  },
  {
    id: 7, name: "Smallest Missing Positive Integer",
    leetcode: "https://leetcode.com/problems/first-missing-positive/",
    gfg: "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "41" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Hard", Prime: "Hard" },
    type: "Array Manipulation",
    category: "Arrays",
  },
  {
    id: 8, name: "Maximum Subarray Sum (Kadane's Algorithm)",
    leetcode: "https://leetcode.com/problems/maximum-subarray/",
    gfg: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    codechef: "https://www.codechef.com/problems/KADANE",
    hackerrank: null,
    platform_ids: { leetcode: "53", codechef: "KADANE" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Sliding Window / DP",
    category: "Arrays",
  },
  {
    id: 9, name: "Two Sum",
    leetcode: "https://leetcode.com/problems/two-sum/",
    gfg: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Hashing / Two Pointer",
    category: "Arrays",
  },
  {
    id: 10, name: "Cyclic Rotation of Array by K",
    leetcode: "https://leetcode.com/problems/rotate-array/",
    gfg: "https://www.geeksforgeeks.org/array-rotation/",
    codechef: null, hackerrank: "https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem",
    platform_ids: { leetcode: "189" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Array Manipulation",
    category: "Arrays",
  },
  {
    id: 11, name: "Sort Array of 0s, 1s, 2s (Dutch National Flag)",
    leetcode: "https://leetcode.com/problems/sort-colors/",
    gfg: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "75" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Two Pointer",
    category: "Arrays",
  },
  {
    id: 12, name: "Missing Number in Array",
    leetcode: "https://leetcode.com/problems/missing-number/",
    gfg: "https://www.geeksforgeeks.org/find-the-missing-number/",
    codechef: "https://www.codechef.com/problems/MISSINGNO",
    hackerrank: null,
    platform_ids: { leetcode: "268", codechef: "MISSINGNO" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Arrays",
  },

  // ─── STRINGS ──────────────────────────────────────────────────────────────
  {
    id: 13, name: "Backspace String Compare (Alice & Bob Typewriter)",
    leetcode: "https://leetcode.com/problems/backspace-string-compare/",
    gfg: "https://www.geeksforgeeks.org/backspace-string-compare/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "844" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Stack / String",
    category: "Strings",
  },
  {
    id: 14, name: "First Non-Repeating Character",
    leetcode: "https://leetcode.com/problems/first-unique-character-in-a-string/",
    gfg: "https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "387" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Hashing / String",
    category: "Strings",
  },
  {
    id: 15, name: "Valid Palindrome",
    leetcode: "https://leetcode.com/problems/valid-palindrome/",
    gfg: "https://www.geeksforgeeks.org/check-whether-the-given-string-is-palindrome/",
    codechef: "https://www.codechef.com/problems/PALIN",
    hackerrank: "https://www.hackerrank.com/challenges/palindrome-index/problem",
    platform_ids: { leetcode: "125", codechef: "PALIN" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Two Pointer / String",
    category: "Strings",
  },
  {
    id: 16, name: "Valid Anagram",
    leetcode: "https://leetcode.com/problems/valid-anagram/",
    gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
    codechef: "https://www.codechef.com/problems/ANA",
    hackerrank: null,
    platform_ids: { leetcode: "242", codechef: "ANA" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Hashing / String",
    category: "Strings",
  },
  {
    id: 17, name: "Remove One Letter to Make Equal Frequency",
    leetcode: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/",
    gfg: "https://www.geeksforgeeks.org/remove-one-character-from-string-to-make-all-character-frequencies-same/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1647" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Greedy / Hashing",
    category: "Strings",
  },
  {
    id: 18, name: "Longest Common Subsequence",
    leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
    codechef: "https://www.codechef.com/problems/LCS",
    hackerrank: null,
    platform_ids: { leetcode: "1143", codechef: "LCS" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Strings",
  },
  {
    id: 19, name: "Count Character Occurrences",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/frequency-of-each-character-in-a-string/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP3",
    hackerrank: null,
    platform_ids: { codechef: "TCSNQTCP3" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Hashing / String",
    category: "Strings",
  },

  // ─── NUMBER SYSTEM ────────────────────────────────────────────────────────
  {
    id: 20, name: "Toggle Bits After MSB",
    leetcode: "https://leetcode.com/problems/complement-of-base-10-integer/",
    gfg: "https://www.geeksforgeeks.org/toggle-all-bits-after-msb/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1009" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Bit Manipulation / Number System",
    category: "Number System",
  },
  {
    id: 21, name: "Count Set Bits (Hamming Weight)",
    leetcode: "https://leetcode.com/problems/number-of-1-bits/",
    gfg: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
    codechef: "https://www.codechef.com/problems/SETBIT",
    hackerrank: null,
    platform_ids: { leetcode: "191", codechef: "SETBIT" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Easy" },
    type: "Bit Manipulation",
    category: "Number System",
  },
  {
    id: 22, name: "Check Armstrong Number",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/program-to-check-armstrong-number/",
    codechef: "https://www.codechef.com/problems/ARMNUMB",
    hackerrank: null,
    platform_ids: { codechef: "ARMNUMB" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Number System",
  },
  {
    id: 23, name: "Prime Number Check",
    leetcode: "https://leetcode.com/problems/count-primes/",
    gfg: "https://www.geeksforgeeks.org/prime-numbers/",
    codechef: "https://www.codechef.com/problems/PRB01",
    hackerrank: "https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---fibonacci-numbers/problem",
    platform_ids: { leetcode: "204", codechef: "PRB01" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Sieve",
    category: "Number System",
  },
  {
    id: 24, name: "Fibonacci Series / Nth Fibonacci",
    leetcode: "https://leetcode.com/problems/fibonacci-number/",
    gfg: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
    codechef: "https://www.codechef.com/problems/FIBO",
    hackerrank: null,
    platform_ids: { leetcode: "509", codechef: "FIBO" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Recursion / Math",
    category: "Number System",
  },
  {
    id: 25, name: "Factorial of a Number",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/",
    codechef: "https://www.codechef.com/problems/FAC",
    hackerrank: "https://www.hackerrank.com/challenges/extra-long-factorials/problem",
    platform_ids: { codechef: "FAC" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Recursion / Math",
    category: "Number System",
  },
  {
    id: 26, name: "Convert Number to Words",
    leetcode: "https://leetcode.com/problems/integer-to-english-words/",
    gfg: "https://www.geeksforgeeks.org/convert-number-to-words/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP4",
    hackerrank: null,
    platform_ids: { leetcode: "273", codechef: "TCSNQTCP4" },
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Medium", Digital: "Medium" },
    type: "Number System / String",
    category: "Number System",
  },
  {
    id: 27, name: "Good Number (Divisibility Check)",
    leetcode: null,
    gfg: null,
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP1",
    hackerrank: null,
    platform_ids: { codechef: "TCSNQTCP1" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Number System / Math",
    category: "Number System",
  },
  {
    id: 28, name: "Auction Number",
    leetcode: null,
    gfg: null,
    codechef: "https://discuss.codechef.com/t/help-tcs-digital-coding-question-auction-number/",
    hackerrank: null,
    platform_ids: { codechef: "Discuss" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Number System / Math",
    category: "Number System",
  },

  // ─── SERIES ───────────────────────────────────────────────────────────────
  {
    id: 29, name: "Nth Term of Mixed Numeric Series",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/find-nth-term-of-the-series-1-2-6-24-120/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja", "Digital"],
    difficulty: { Ninja: "Easy", Digital: "Medium" },
    type: "Series / Pattern",
    category: "Series",
  },
  {
    id: 30, name: "Automobile (TW + FW) - Vehicle Count Equation",
    leetcode: null,
    gfg: null,
    codechef: null,
    hackerrank: null,
    platform_ids: {},
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Math / Equations",
    category: "Series",
  },

  // ─── SORTING & SEARCHING ─────────────────────────────────────────────────
  {
    id: 31, name: "Search in Rotated Sorted Array",
    leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "33" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Binary Search",
    category: "Searching & Sorting",
  },
  {
    id: 32, name: "Merge Two Sorted Arrays",
    leetcode: "https://leetcode.com/problems/merge-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/merge-two-sorted-arrays/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "88" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Two Pointer / Merge",
    category: "Searching & Sorting",
  },
  {
    id: 33, name: "How Many Numbers Smaller Than Current",
    leetcode: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    gfg: "https://www.geeksforgeeks.org/count-of-smaller-elements-on-right-side/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "1365" },
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Sorting / Counting",
    category: "Searching & Sorting",
  },

  // ─── LINKED LIST ─────────────────────────────────────────────────────────
  {
    id: 34, name: "Doubly Linked List from 2D Array (Even/Odd Index Rows)",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/doubly-linked-list/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Linked List",
    category: "Linked List",
  },
  {
    id: 35, name: "Reverse a Linked List",
    leetcode: "https://leetcode.com/problems/reverse-linked-list/",
    gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/reverse-a-linked-list/problem",
    platform_ids: { leetcode: "206" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Linked List",
    category: "Linked List",
  },

  // ─── GRAPHS / BFS / DFS ──────────────────────────────────────────────────
  {
    id: 36, name: "BFS of Graph",
    leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/bfsshortreach/problem",
    platform_ids: { leetcode: "102", gfg: "breadth-first-search-or-bfs-for-a-graph" },
    profile: ["Digital", "Prime"],
    difficulty: { Digital: "Medium", Prime: "Medium" },
    type: "Graph / BFS",
    category: "Graphs",
  },
  {
    id: 37, name: "DFS of Graph",
    leetcode: "https://leetcode.com/problems/number-of-islands/",
    gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "200" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Graph / DFS",
    category: "Graphs",
  },

  // ─── DYNAMIC PROGRAMMING ─────────────────────────────────────────────────
  {
    id: 38, name: "0/1 Knapsack Problem",
    leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
    gfg: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
    codechef: "https://www.codechef.com/problems/KNAPSACK",
    hackerrank: null,
    platform_ids: { leetcode: "416", codechef: "KNAPSACK" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Dynamic Programming",
  },
  {
    id: 39, name: "Longest Increasing Subsequence",
    leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
    codechef: null, hackerrank: null,
    platform_ids: { leetcode: "300" },
    profile: ["Prime"],
    difficulty: { Prime: "Hard" },
    type: "Dynamic Programming",
    category: "Dynamic Programming",
  },

  // ─── STACK / QUEUE ───────────────────────────────────────────────────────
  {
    id: 40, name: "Valid Parentheses",
    leetcode: "https://leetcode.com/problems/valid-parentheses/",
    gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    codechef: null,
    hackerrank: "https://www.hackerrank.com/challenges/balanced-brackets/problem",
    platform_ids: { leetcode: "20" },
    profile: ["Digital"],
    difficulty: { Digital: "Easy" },
    type: "Stack",
    category: "Stack / Queue",
  },
  {
    id: 41, name: "Identify Row with Most 1s in Binary Matrix",
    leetcode: "https://leetcode.com/problems/row-with-maximum-ones/",
    gfg: "https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/",
    codechef: "https://www.codechef.com/practice/course/tcs-nqt-questions/TCSNQTC/problems/TCSNQTCP2",
    hackerrank: null,
    platform_ids: { leetcode: "2643", codechef: "TCSNQTCP2" },
    profile: ["Digital"],
    difficulty: { Digital: "Medium" },
    type: "Binary Search / 2D Array",
    category: "Arrays",
  },
  {
    id: 42, name: "Circular Permutation (Seating Arrangement)",
    leetcode: null,
    gfg: "https://www.geeksforgeeks.org/circular-permutation/",
    codechef: null, hackerrank: null,
    platform_ids: {},
    profile: ["Ninja"],
    difficulty: { Ninja: "Easy" },
    type: "Math / Combinatorics",
    category: "Number System",
  },
];

const PROFILES = ["All", "Ninja", "Digital", "Prime"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const CATEGORIES = ["All", "Arrays", "Strings", "Number System", "Series", "Searching & Sorting", "Linked List", "Graphs", "Dynamic Programming", "Stack / Queue"];

const tagColor = {
  Ninja: "bg-emerald-900 text-emerald-300 border border-emerald-700",
  Digital: "bg-blue-900 text-blue-300 border border-blue-700",
  Prime: "bg-purple-900 text-purple-300 border border-purple-700",
};
const diffColor = {
  Easy: "text-green-400",
  Medium: "text-amber-400",
  Hard: "text-red-400",
};
const typeColor = "bg-slate-800 text-slate-300 border border-slate-600";

function PlatformLink({ href, label, id }) {
  if (!href) return null;
  const icons = {
    LeetCode: "🟡",
    GFG: "🟢",
    CodeChef: "🟤",
    HackerRank: "🟩",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors"
    >
      <span>{icons[label]}</span>
      <span>{label}</span>
      {id && <span className="text-slate-500">#{id}</span>}
    </a>
  );
}

export default function App() {
  const [profile, setProfile] = useState("All");
  const [diff, setDiff] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      if (profile !== "All" && !q.profile.includes(profile)) return false;
      if (category !== "All" && q.category !== category) return false;
      if (diff !== "All") {
        const diffs = Object.values(q.difficulty);
        if (!diffs.includes(diff)) return false;
      }
      if (search && !q.name.toLowerCase().includes(search.toLowerCase()) && !q.type.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [profile, diff, category, search]);

  const profileCount = (p) => questions.filter(q => q.profile.includes(p)).length;

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", background: "#0a0e1a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)", borderBottom: "1px solid #1e293b", padding: "28px 24px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="flex items-center gap-3 mb-1">
            <span style={{ fontSize: 28 }}>⚡</span>
            <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", color: "#f1f5f9" }}>
              TCS NQT Coding Sheet
            </h1>
            <span className="px-2 py-0.5 text-xs font-bold rounded" style={{ background: "#6366f1", color: "#fff" }}>2020–2026</span>
          </div>
          <p style={{ color: "#64748b", fontSize: 12, marginLeft: 44 }}>
            {questions.length} questions • Ninja / Digital / Prime profiles • Platform links included
          </p>
          <div className="flex gap-4 mt-3" style={{ marginLeft: 44 }}>
            {["Ninja", "Digital", "Prime"].map(p => (
              <span key={p} className="text-xs">
                <span className={`inline-block px-2 py-0.5 rounded ${tagColor[p]}`}>{p}</span>
                <span className="text-slate-500 ml-1">{profileCount(p)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: "#0f172a", borderBottom: "1px solid #1e293b", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search question or type..."
            style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 6, padding: "6px 12px", color: "#e2e8f0", fontSize: 12, outline: "none", minWidth: 220 }}
          />
          <div className="flex gap-1 flex-wrap">
            {PROFILES.map(p => (
              <button key={p} onClick={() => setProfile(p)}
                style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "1px solid", transition: "all 0.15s",
                  background: profile === p ? "#6366f1" : "#1e293b",
                  borderColor: profile === p ? "#818cf8" : "#334155",
                  color: profile === p ? "#fff" : "#94a3b8"
                }}>{p}</button>
            ))}
          </div>
          <div className="flex gap-1 flex-wrap">
            {DIFFICULTIES.map(d => (
              <button key={d} onClick={() => setDiff(d)}
                style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "1px solid", transition: "all 0.15s",
                  background: diff === d ? "#1e293b" : "#0f172a",
                  borderColor: diff === d ? "#6366f1" : "#334155",
                  color: diff === d ? (d === "Easy" ? "#4ade80" : d === "Medium" ? "#fbbf24" : d === "Hard" ? "#f87171" : "#818cf8") : "#475569"
                }}>{d}</button>
            ))}
          </div>
          <select value={category} onChange={e => setCategory(e.target.value)}
            style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 6, padding: "5px 10px", color: "#94a3b8", fontSize: 11, outline: "none", cursor: "pointer" }}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <span style={{ color: "#475569", fontSize: 11 }}>{filtered.length} results</span>
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px" }}>
        <div style={{ overflowX: "auto", borderRadius: 8, border: "1px solid #1e293b" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#0f172a", borderBottom: "1px solid #1e293b" }}>
                {["#", "Question Name", "Profile", "Difficulty", "Type", "Platforms"].map(h => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#475569", fontWeight: 700, letterSpacing: "0.05em", fontSize: 11, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((q, i) => (
                <tr key={q.id} style={{ borderBottom: "1px solid #0f172a", background: i % 2 === 0 ? "#0a0e1a" : "#0c1120", transition: "background 0.1s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1e293b"}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#0a0e1a" : "#0c1120"}>
                  <td style={{ padding: "10px 14px", color: "#334155", fontWeight: 700, width: 36 }}>{q.id}</td>
                  <td style={{ padding: "10px 14px", maxWidth: 260 }}>
                    <span style={{ color: "#e2e8f0", fontWeight: 600 }}>{q.name}</span>
                  </td>
                  <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>
                    <div className="flex gap-1 flex-wrap">
                      {q.profile.map(p => (
                        <span key={p} className={`text-xs px-1.5 py-0.5 rounded font-semibold ${tagColor[p]}`}>{p}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>
                    <div className="flex flex-col gap-0.5">
                      {Object.entries(q.difficulty).map(([p, d]) => (
                        <span key={p} className={`text-xs font-bold ${diffColor[d]}`}>{p}: {d}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: "10px 14px" }}>
                    <span className={`text-xs px-2 py-0.5 rounded ${typeColor}`}>{q.type}</span>
                  </td>
                  <td style={{ padding: "10px 14px" }}>
                    <div className="flex flex-wrap gap-1">
                      <PlatformLink href={q.leetcode} label="LeetCode" id={q.platform_ids?.leetcode} />
                      <PlatformLink href={q.gfg} label="GFG" id={q.platform_ids?.gfg} />
                      <PlatformLink href={q.codechef} label="CodeChef" id={q.platform_ids?.codechef} />
                      <PlatformLink href={q.hackerrank} label="HackerRank" />
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ padding: "40px", textAlign: "center", color: "#475569" }}>No questions match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div style={{ marginTop: 20, padding: 16, background: "#0f172a", borderRadius: 8, border: "1px solid #1e293b", fontSize: 11, color: "#475569" }}>
          <span style={{ color: "#64748b", fontWeight: 700 }}>LEGEND: </span>
          <span className="mr-4">🟡 LeetCode</span>
          <span className="mr-4">🟢 GeeksForGeeks</span>
          <span className="mr-4">🟤 CodeChef</span>
          <span className="mr-4">🟩 HackerRank</span>
          <span className="mr-6" />
          <span className={`mr-3 font-bold ${diffColor.Easy}`}>● Easy</span>
          <span className={`mr-3 font-bold ${diffColor.Medium}`}>● Medium</span>
          <span className={`font-bold ${diffColor.Hard}`}>● Hard</span>
        </div>
      </div>
    </div>
  );
}
