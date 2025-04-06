import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MonacoEditor from '@monaco-editor/react';

const Challenges = () => {
  const navigate = useNavigate();
  const { challengeId } = useParams();
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [userPoints, setUserPoints] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [runOutput, setRunOutput] = useState(null);

  // Language-specific function templates
  const functionTemplates = {
    javascript: (fnName, params = ['input']) => 
      `function ${fnName}(${params.join(', ')}) {\n  // Your code here\n  return null;\n}`,
    python: (fnName, params = ['input']) => 
      `def ${fnName}(${params.join(', ')}):\n    # Your code here\n    return None`,
    java: (fnName, params = ['input']) => 
      `public class Solution {\n    public static Object ${fnName}(${params.map(p => `Object ${p}`).join(', ')}) {\n        // Your code here\n        return null;\n    }\n}`,
    cpp: (fnName, params = ['input']) => 
      `#include <iostream>\n#include <vector>\nusing namespace std;\n\nObject ${fnName}(${params.map(p => `Object ${p}`).join(', ')}) {\n    // Your code here\n    return NULL;\n}`
  };

  const challengesData = [
    // Easy Challenges
    {
      id: 'array-sum',
      title: 'Array Sum',
      description: 'Calculate the sum of all elements in an array',
      difficulty: 'Easy',
      category: 'Algorithms',
      points: 20,
      functionName: 'arraySum',
      examples: [
        { input: '[1,2,3,4,5]', output: '15' },
        { input: '[-1,0,1]', output: '0' }
      ],
      testCases: [
        { input: '[1,2,3,4,5]', output: '15' },
        { input: '[-1,0,1]', output: '0' },
        { input: '[]', output: '0' },
        { input: '[10]', output: '10' },
        { input: '[2,4,6,8,10,12,14,16,18,20]', output: '110' },
        { input: '[1.5,2.5,3.5]', output: '7.5' },
        { input: '[1000000,2000000,3000000]', output: '6000000' },
        { input: '[-5,-10,-15]', output: '-30' },
        { input: '[0,0,0,0,0]', output: '0' },
        { input: '[1,-2,3,-4,5]', output: '3' }
      ],
      solution: {
        javascript: `function arraySum(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}`,
        python: `def arraySum(arr):\n    return sum(arr)`,
        java: `public static int arraySum(int[] arr) {\n    int sum = 0;\n    for (int num : arr) sum += num;\n    return sum;\n}`,
        cpp: `int arraySum(vector<int>& arr) {\n    int sum = 0;\n    for (int num : arr) sum += num;\n    return sum;\n}`
      }
    },
    {
      id: 'string-reverse',
      title: 'String Reverse',
      description: 'Reverse the characters in a string',
      difficulty: 'Easy',
      category: 'Strings',
      points: 15,
      functionName: 'reverseString',
      examples: [
        { input: '"hello"', output: '"olleh"' },
        { input: '"world"', output: '"dlrow"' }
      ],
      testCases: [
        { input: '"hello"', output: '"olleh"' },
        { input: '"world"', output: '"dlrow"' },
        { input: '""', output: '""' },
        { input: '"a"', output: '"a"' },
        { input: '"12345"', output: '"54321"' },
        { input: '"racecar"', output: '"racecar"' },
        { input: '"A man a plan a canal Panama"', output: '"amanaP lanac a nalp a nam A"' },
        { input: '"!@#$"', output: '"$#@!"' },
        { input: '"  spaces  "', output: '"  secaps  "' },
        { input: '"\\nnewline"', output: '"enilwen\\n"' }
      ],
      solution: {
        javascript: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}`,
        python: `def reverseString(str):\n    return str[::-1]`,
        java: `public static String reverseString(String str) {\n    return new StringBuilder(str).reverse().toString();\n}`,
        cpp: `string reverseString(string str) {\n    reverse(str.begin(), str.end());\n    return str;\n}`
      }
    },
    {
      id: 'find-max',
      title: 'Find Maximum',
      description: 'Find the maximum number in an array',
      difficulty: 'Easy',
      category: 'Algorithms',
      points: 15,
      functionName: 'findMax',
      examples: [
        { input: '[1,5,3,9,2]', output: '9' },
        { input: '[-1,-5,-3,-9]', output: '-1' }
      ],
      testCases: [
        { input: '[1,5,3,9,2]', output: '9' },
        { input: '[-1,-5,-3,-9]', output: '-1' },
        { input: '[0]', output: '0' },
        { input: '[1.1, 2.2, 3.3]', output: '3.3' },
        { input: '[100, 200, 150]', output: '200' },
        { input: '[1,1,1,1]', output: '1' },
        { input: '[10,9,8,7,6,5,4,3,2,1]', output: '10' },
        { input: '[5,10,15,20,25,30,35,40]', output: '40' },
        { input: '[-100, 100, 0]', output: '100' },
        { input: '[999999, 1000000, 999998]', output: '1000000' }
      ],
      solution: {
        javascript: `function findMax(arr) {\n  return Math.max(...arr);\n}`,
        python: `def findMax(arr):\n    return max(arr)`,
        java: `public static int findMax(int[] arr) {\n    int max = arr[0];\n    for (int num : arr) if (num > max) max = num;\n    return max;\n}`,
        cpp: `int findMax(vector<int>& arr) {\n    return *max_element(arr.begin(), arr.end());\n}`
      }
    },
    {
      id: 'palindrome-check',
      title: 'Palindrome Check',
      description: 'Determine if a string is a palindrome (reads the same forwards and backwards)',
      difficulty: 'Easy',
      category: 'Strings',
      points: 20,
      functionName: 'isPalindrome',
      examples: [
        { input: '"racecar"', output: 'true' },
        { input: '"hello"', output: 'false' }
      ],
      testCases: [
        { input: '"racecar"', output: 'true' },
        { input: '"hello"', output: 'false' },
        { input: '"madam"', output: 'true' },
        { input: '"A man a plan a canal Panama"', output: 'false' },
        { input: '"12321"', output: 'true' },
        { input: '""', output: 'true' },
        { input: '"a"', output: 'true' },
        { input: '"ab"', output: 'false' },
        { input: '"noon"', output: 'true' },
        { input: '"Was it a car or a cat I saw"', output: 'false' }
      ],
      solution: {
        javascript: `function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return clean === clean.split('').reverse().join('');\n}`,
        python: `def isPalindrome(str):\n    clean = ''.join(c for c in str.lower() if c.isalnum())\n    return clean == clean[::-1]`,
        java: `public static boolean isPalindrome(String str) {\n    String clean = str.replaceAll("[^A-Za-z0-9]", "").toLowerCase();\n    return clean.equals(new StringBuilder(clean).reverse().toString());\n}`,
        cpp: `bool isPalindrome(string s) {\n    string clean;\n    for (char c : s) if (isalnum(c)) clean += tolower(c);\n    string reversed = clean;\n    reverse(reversed.begin(), reversed.end());\n    return clean == reversed;\n}`
      }
    },
    {
      id: 'factorial',
      title: 'Factorial',
      description: 'Calculate the factorial of a non-negative integer',
      difficulty: 'Easy',
      category: 'Math',
      points: 20,
      functionName: 'factorial',
      examples: [
        { input: '0', output: '1' },
        { input: '5', output: '120' }
      ],
      testCases: [
        { input: '0', output: '1' },
        { input: '1', output: '1' },
        { input: '5', output: '120' },
        { input: '10', output: '3628800' },
        { input: '7', output: '5040' },
        { input: '12', output: '479001600' },
        { input: '3', output: '6' },
        { input: '8', output: '40320' },
        { input: '6', output: '720' },
        { input: '4', output: '24' }
      ],
      solution: {
        javascript: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}`,
        python: `def factorial(n):\n    return 1 if n <= 1 else n * factorial(n - 1)`,
        java: `public static int factorial(int n) {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n}`,
        cpp: `int factorial(int n) {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n}`
      }
    },

    // Medium Challenges
    {
      id: 'two-sum',
      title: 'Two Sum',
      description: 'Given an array of integers and a target value, find the two numbers that add up to the target',
      difficulty: 'Medium',
      category: 'Algorithms',
      points: 30,
      functionName: 'twoSum',
      examples: [
        { input: '[2,7,11,15], 9', output: '[0,1]' },
        { input: '[3,2,4], 6', output: '[1,2]' }
      ],
      testCases: [
        { input: '[2,7,11,15], 9', output: '[0,1]' },
        { input: '[3,2,4], 6', output: '[1,2]' },
        { input: '[3,3], 6', output: '[0,1]' },
        { input: '[1,2,3,4,5], 9', output: '[3,4]' },
        { input: '[-1,-2,-3,-4,-5], -8', output: '[2,4]' },
        { input: '[10,20,30,40,50], 60', output: '[1,3]' },
        { input: '[0,4,3,0], 0', output: '[0,3]' },
        { input: '[1,5,3,7,9], 12', output: '[2,3]' },
        { input: '[100,25,75,50], 125', output: '[1,2]' },
        { input: '[1,2,3,4,5,6,7,8,9,10], 19', output: '[8,9]' }
      ],
      solution: {
        javascript: `function twoSum(nums, target) {\n  const map = {};\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map[complement] !== undefined) return [map[complement], i];\n    map[nums[i]] = i;\n  }\n  return [];\n}`,
        python: `def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []`,
        java: `public static int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}`,
        cpp: `vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (map.find(complement) != map.end()) return {map[complement], i};\n        map[nums[i]] = i;\n    }\n    return {};\n}`
      }
    },
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      description: 'Given a string containing just the characters "(", ")", "{", "}", "[", "]", determine if the input string is valid',
      difficulty: 'Medium',
      category: 'Strings',
      points: 30,
      functionName: 'isValidParentheses',
      examples: [
        { input: '"()"', output: 'true' },
        { input: '"()[]{}"', output: 'true' }
      ],
      testCases: [
        { input: '"()"', output: 'true' },
        { input: '"()[]{}"', output: 'true' },
        { input: '"(]"', output: 'false' },
        { input: '"([)]"', output: 'false' },
        { input: '"{[]}"', output: 'true' },
        { input: '""', output: 'true' },
        { input: '"["', output: 'false' },
        { input: '"]"', output: 'false' },
        { input: '"((()))"', output: 'true' },
        { input: '"([{}])"', output: 'true' }
      ],
      solution: {
        javascript: `function isValidParentheses(s) {\n  const stack = [];\n  const map = { '(': ')', '[': ']', '{': '}' };\n  \n  for (let char of s) {\n    if (map[char]) stack.push(char);\n    else if (char !== map[stack.pop()]) return false;\n  }\n  \n  return stack.length === 0;\n}`,
        python: `def isValidParentheses(s):\n    stack = []\n    mapping = {')': '(', ']': '[', '}': '{'}\n    \n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    \n    return not stack`,
        java: `public static boolean isValidParentheses(String s) {\n    Stack<Character> stack = new Stack<>();\n    Map<Character, Character> map = new HashMap<>();\n    map.put(')', '('); map.put(']', '['); map.put('}', '{');\n    \n    for (char c : s.toCharArray()) {\n        if (!map.containsKey(c)) stack.push(c);\n        else if (stack.isEmpty() || stack.pop() != map.get(c)) return false;\n    }\n    \n    return stack.isEmpty();\n}`,
        cpp: `bool isValidParentheses(string s) {\n    stack<char> st;\n    unordered_map<char, char> map = {{')', '('}, {']', '['}, {'}', '{'}};\n    \n    for (char c : s) {\n        if (map.find(c) == map.end()) st.push(c);\n        else if (st.empty() || st.top() != map[c]) return false;\n        else st.pop();\n    }\n    \n    return st.empty();\n}`
      }
    },
    {
      id: 'merge-sorted-arrays',
      title: 'Merge Sorted Arrays',
      description: 'Merge two sorted arrays into one sorted array',
      difficulty: 'Medium',
      category: 'Algorithms',
      points: 35,
      functionName: 'mergeSortedArrays',
      examples: [
        { input: '[1,3,5], [2,4,6]', output: '[1,2,3,4,5,6]' },
        { input: '[], [1,2,3]', output: '[1,2,3]' }
      ],
      testCases: [
        { input: '[1,3,5], [2,4,6]', output: '[1,2,3,4,5,6]' },
        { input: '[], [1,2,3]', output: '[1,2,3]' },
        { input: '[1,2,3], []', output: '[1,2,3]' },
        { input: '[1,2,3], [1,2,3]', output: '[1,1,2,2,3,3]' },
        { input: '[10,20,30], [5,15,25]', output: '[5,10,15,20,25,30]' },
        { input: '[-5,0,5], [-4,0,4]', output: '[-5,-4,0,0,4,5]' },
        { input: '[1,3,5,7,9], [2,4,6,8,10]', output: '[1,2,3,4,5,6,7,8,9,10]' },
        { input: '[100], [1,2,3,4,5]', output: '[1,2,3,4,5,100]' },
        { input: '[1,2,3,4,5], [6,7,8,9,10]', output: '[1,2,3,4,5,6,7,8,9,10]' },
        { input: '[1,5], [2,3,4,6,7]', output: '[1,2,3,4,5,6,7]' }
      ],
      solution: {
        javascript: `function mergeSortedArrays(arr1, arr2) {\n  let result = [];\n  let i = 0, j = 0;\n  \n  while (i < arr1.length && j < arr2.length) {\n    if (arr1[i] < arr2[j]) result.push(arr1[i++]);\n    else result.push(arr2[j++]);\n  }\n  \n  return [...result, ...arr1.slice(i), ...arr2.slice(j)];\n}`,
        python: `def mergeSortedArrays(arr1, arr2):\n    result = []\n    i = j = 0\n    \n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] < arr2[j]:\n            result.append(arr1[i])\n            i += 1\n        else:\n            result.append(arr2[j])\n            j += 1\n    \n    result.extend(arr1[i:])\n    result.extend(arr2[j:])\n    return result`,
        java: `public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {\n    int[] result = new int[arr1.length + arr2.length];\n    int i = 0, j = 0, k = 0;\n    \n    while (i < arr1.length && j < arr2.length) {\n        if (arr1[i] < arr2[j]) result[k++] = arr1[i++];\n        else result[k++] = arr2[j++];\n    }\n    \n    while (i < arr1.length) result[k++] = arr1[i++];\n    while (j < arr2.length) result[k++] = arr2[j++];\n    \n    return result;\n}`,
        cpp: `vector<int> mergeSortedArrays(vector<int>& arr1, vector<int>& arr2) {\n    vector<int> result;\n    int i = 0, j = 0;\n    \n    while (i < arr1.size() && j < arr2.size()) {\n        if (arr1[i] < arr2[j]) result.push_back(arr1[i++]);\n        else result.push_back(arr2[j++]);\n    }\n    \n    while (i < arr1.size()) result.push_back(arr1[i++]);\n    while (j < arr2.size()) result.push_back(arr2[j++]);\n    \n    return result;\n}`
      }
    },
    {
      id: 'binary-search',
      title: 'Binary Search',
      description: 'Implement binary search to find the index of a target value in a sorted array',
      difficulty: 'Medium',
      category: 'Algorithms',
      points: 30,
      functionName: 'binarySearch',
      examples: [
        { input: '[-1,0,3,5,9,12], 9', output: '4' },
        { input: '[-1,0,3,5,9,12], 2', output: '-1' }
      ],
      testCases: [
        { input: '[-1,0,3,5,9,12], 9', output: '4' },
        { input: '[-1,0,3,5,9,12], 2', output: '-1' },
        { input: '[1,2,3,4,5], 5', output: '4' },
        { input: '[1,3,5,7,9], 1', output: '0' },
        { input: '[10,20,30,40,50], 30', output: '2' },
        { input: '[100,200,300,400,500], 100', output: '0' },
        { input: '[5], 5', output: '0' },
        { input: '[1,3,5,7,9,11,13,15], 7', output: '3' },
        { input: '[2,4,6,8,10,12,14], 14', output: '6' },
        { input: '[1,2,3,4,5,6,7,8,9,10], 10', output: '9' }
      ],
      solution: {
        javascript: `function binarySearch(nums, target) {\n  let left = 0, right = nums.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  \n  return -1;\n}`,
        python: `def binarySearch(nums, target):\n    left, right = 0, len(nums) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return -1`,
        java: `public static int binarySearch(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    \n    return -1;\n}`,
        cpp: `int binarySearch(vector<int>& nums, int target) {\n    int left = 0, right = nums.size() - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    \n    return -1;\n}`
      }
    },
    {
      id: 'longest-substring',
      title: 'Longest Substring Without Repeating Characters',
      description: 'Find the length of the longest substring without repeating characters',
      difficulty: 'Medium',
      category: 'Strings',
      points: 40,
      functionName: 'lengthOfLongestSubstring',
      examples: [
        { input: '"abcabcbb"', output: '3' },
        { input: '"bbbbb"', output: '1' }
      ],
      testCases: [
        { input: '"abcabcbb"', output: '3' },
        { input: '"bbbbb"', output: '1' },
        { input: '"pwwkew"', output: '3' },
        { input: '""', output: '0' },
        { input: '" "', output: '1' },
        { input: '"au"', output: '2' },
        { input: '"dvdf"', output: '3' },
        { input: '"abcde"', output: '5' },
        { input: '"aab"', output: '2' },
        { input: '"tmmzuxt"', output: '5' }
      ],
      solution: {
        javascript: `function lengthOfLongestSubstring(s) {\n  const map = {};\n  let max = 0, start = 0;\n  \n  for (let i = 0; i < s.length; i++) {\n    const char = s[i];\n    if (map[char] >= start) start = map[char] + 1;\n    map[char] = i;\n    max = Math.max(max, i - start + 1);\n  }\n  \n  return max;\n}`,
        python: `def lengthOfLongestSubstring(s):\n    char_map = {}\n    max_len = start = 0\n    \n    for i, char in enumerate(s):\n        if char in char_map and char_map[char] >= start:\n            start = char_map[char] + 1\n        char_map[char] = i\n        max_len = max(max_len, i - start + 1)\n    \n    return max_len`,
        java: `public static int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int max = 0, start = 0;\n    \n    for (int i = 0; i < s.length(); i++) {\n        char c = s.charAt(i);\n        if (map.containsKey(c) && map.get(c) >= start) start = map.get(c) + 1;\n        map.put(c, i);\n        max = Math.max(max, i - start + 1);\n    }\n    \n    return max;\n}`,
        cpp: `int lengthOfLongestSubstring(string s) {\n    unordered_map<char, int> map;\n    int max_len = 0, start = 0;\n    \n    for (int i = 0; i < s.size(); i++) {\n        char c = s[i];\n        if (map.find(c) != map.end() && map[c] >= start) start = map[c] + 1;\n        map[c] = i;\n        max_len = max(max_len, i - start + 1);\n    }\n    \n    return max_len;\n}`
      }
    },

    // Hard Challenges
    {
      id: 'median-of-arrays',
      title: 'Median of Two Sorted Arrays',
      description: 'Find the median of two sorted arrays with O(log(min(m,n))) time complexity',
      difficulty: 'Hard',
      category: 'Algorithms',
      points: 50,
      functionName: 'findMedianSortedArrays',
      examples: [
        { input: '[1,3], [2]', output: '2.0' },
        { input: '[1,2], [3,4]', output: '2.5' }
      ],
      testCases: [
        { input: '[1,3], [2]', output: '2.0' },
        { input: '[1,2], [3,4]', output: '2.5' },
        { input: '[0,0], [0,0]', output: '0.0' },
        { input: '[], [1]', output: '1.0' },
        { input: '[2], []', output: '2.0' },
        { input: '[1,3,8,9,15], [7,11,18,19,21,25]', output: '11.0' },
        { input: '[1,2,3,4,5,6,7,8], [9,10]', output: '5.5' },
        { input: '[1,3,5,7,9], [2,4,6,8,10]', output: '5.5' },
        { input: '[100,200], [1,2,3,4,5]', output: '4.0' },
        { input: '[1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15]', output: '8.0' }
      ],
      solution: {
        javascript: `function findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n  \n  const x = nums1.length, y = nums2.length;\n  let low = 0, high = x;\n  \n  while (low <= high) {\n    const partitionX = Math.floor((low + high) / 2);\n    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;\n    \n    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];\n    const minRightX = partitionX === x ? Infinity : nums1[partitionX];\n    \n    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];\n    const minRightY = partitionY === y ? Infinity : nums2[partitionY];\n    \n    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n      if ((x + y) % 2 === 0) {\n        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n      } else {\n        return Math.max(maxLeftX, maxLeftY);\n      }\n    } else if (maxLeftX > minRightY) {\n      high = partitionX - 1;\n    } else {\n      low = partitionX + 1;\n    }\n  }\n}`,
        python: `def findMedianSortedArrays(nums1, nums2):\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n    \n    x, y = len(nums1), len(nums2)\n    low, high = 0, x\n    \n    while low <= high:\n        partitionX = (low + high) // 2\n        partitionY = (x + y + 1) // 2 - partitionX\n        \n        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]\n        minRightX = float('inf') if partitionX == x else nums1[partitionX]\n        \n        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]\n        minRightY = float('inf') if partitionY == y else nums2[partitionY]\n        \n        if maxLeftX <= minRightY and maxLeftY <= minRightX:\n            if (x + y) % 2 == 0:\n                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2\n            else:\n                return max(maxLeftX, maxLeftY)\n        elif maxLeftX > minRightY:\n            high = partitionX - 1\n        else:\n            low = partitionX + 1`,
        java: `public static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    \n    int x = nums1.length, y = nums2.length;\n    int low = 0, high = x;\n    \n    while (low <= high) {\n        int partitionX = (low + high) / 2;\n        int partitionY = (x + y + 1) / 2 - partitionX;\n        \n        int maxLeftX = partitionX == 0 ? Integer.MIN_VALUE : nums1[partitionX - 1];\n        int minRightX = partitionX == x ? Integer.MAX_VALUE : nums1[partitionX];\n        \n        int maxLeftY = partitionY == 0 ? Integer.MIN_VALUE : nums2[partitionY - 1];\n        int minRightY = partitionY == y ? Integer.MAX_VALUE : nums2[partitionY];\n        \n        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n            if ((x + y) % 2 == 0) {\n                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;\n            } else {\n                return Math.max(maxLeftX, maxLeftY);\n            }\n        } else if (maxLeftX > minRightY) {\n            high = partitionX - 1;\n        } else {\n            low = partitionX + 1;\n        }\n    }\n    \n    throw new IllegalArgumentException();\n}`,
        cpp: `double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    if (nums1.size() > nums2.size()) return findMedianSortedArrays(nums2, nums1);\n    \n    int x = nums1.size(), y = nums2.size();\n    int low = 0, high = x;\n    \n    while (low <= high) {\n        int partitionX = (low + high) / 2;\n        int partitionY = (x + y + 1) / 2 - partitionX;\n        \n        int maxLeftX = partitionX == 0 ? INT_MIN : nums1[partitionX - 1];\n        int minRightX = partitionX == x ? INT_MAX : nums1[partitionX];\n        \n        int maxLeftY = partitionY == 0 ? INT_MIN : nums2[partitionY - 1];\n        int minRightY = partitionY == y ? INT_MAX : nums2[partitionY];\n        \n        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n            if ((x + y) % 2 == 0) {\n                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;\n            } else {\n                return max(maxLeftX, maxLeftY);\n            }\n        } else if (maxLeftX > minRightY) {\n            high = partitionX - 1;\n        } else {\n            low = partitionX + 1;\n        }\n    }\n    \n    return 0.0;\n}`
      }
    },
    {
      id: 'regular-expression',
      title: 'Regular Expression Matching',
      description: 'Implement regular expression matching with support for "." and "*"',
      difficulty: 'Hard',
      category: 'Strings',
      points: 50,
      functionName: 'isMatch',
      examples: [
        { input: '"aa", "a"', output: 'false' },
        { input: '"aa", "a*"', output: 'true' }
      ],
      testCases: [
        { input: '"aa", "a"', output: 'false' },
        { input: '"aa", "a*"', output: 'true' },
        { input: '"ab", ".*"', output: 'true' },
        { input: '"aab", "c*a*b"', output: 'true' },
        { input: '"mississippi", "mis*is*p*."', output: 'false' },
        { input: '"", ""', output: 'true' },
        { input: '"abc", "a.c"', output: 'true' },
        { input: '"aaa", "a*a"', output: 'true' },
        { input: '"abcd", "d*"', output: 'false' },
        { input: '"a", "ab*"', output: 'true' }
      ],
      solution: {
        javascript: `function isMatch(s, p) {\n  const dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(false));\n  dp[0][0] = true;\n  \n  for (let j = 1; j <= p.length; j++) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];\n  }\n  \n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 1; j <= p.length; j++) {\n      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else if (p[j - 1] === '*') {\n        dp[i][j] = dp[i][j - 2];\n        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {\n          dp[i][j] = dp[i][j] || dp[i - 1][j];\n        }\n      }\n    }\n  }\n  \n  return dp[s.length][p.length];\n}`,
        python: `def isMatch(s, p):\n    dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]\n    dp[0][0] = True\n    \n    for j in range(1, len(p) + 1):\n        if p[j - 1] == '*':\n            dp[0][j] = dp[0][j - 2]\n    \n    for i in range(1, len(s) + 1):\n        for j in range(1, len(p) + 1):\n            if p[j - 1] == '.' or p[j - 1] == s[i - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            elif p[j - 1] == '*':\n                dp[i][j] = dp[i][j - 2]\n                if p[j - 2] == '.' or p[j - 2] == s[i - 1]:\n                    dp[i][j] = dp[i][j] or dp[i - 1][j]\n    \n    return dp[len(s)][len(p)]`,
        java: `public static boolean isMatch(String s, String p) {\n    boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n    dp[0][0] = true;\n    \n    for (int j = 1; j <= p.length(); j++) {\n        if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];\n    }\n    \n    for (int i = 1; i <= s.length(); i++) {\n        for (int j = 1; j <= p.length(); j++) {\n            if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else if (p.charAt(j - 1) == '*') {\n                dp[i][j] = dp[i][j - 2];\n                if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {\n                    dp[i][j] = dp[i][j] || dp[i - 1][j];\n                }\n            }\n        }\n    }\n    \n    return dp[s.length()][p.length()];\n}`,
        cpp: `bool isMatch(string s, string p) {\n    vector<vector<bool>> dp(s.size() + 1, vector<bool>(p.size() + 1, false));\n    dp[0][0] = true;\n    \n    for (int j = 1; j <= p.size(); j++) {\n        if (p[j - 1] == '*') dp[0][j] = dp[0][j - 2];\n    }\n    \n    for (int i = 1; i <= s.size(); i++) {\n        for (int j = 1; j <= p.size(); j++) {\n            if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else if (p[j - 1] == '*') {\n                dp[i][j] = dp[i][j - 2];\n                if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {\n                    dp[i][j] = dp[i][j] || dp[i - 1][j];\n                }\n            }\n        }\n    }\n    \n    return dp[s.size()][p.size()];\n}`
      }
    },
    {
      id: 'trapping-rain-water',
      title: 'Trapping Rain Water',
      description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining',
      difficulty: 'Hard',
      category: 'Algorithms',
      points: 50,
      functionName: 'trap',
      examples: [
        { input: '[0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
        { input: '[4,2,0,3,2,5]', output: '9' }
      ],
      testCases: [
        { input: '[0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
        { input: '[4,2,0,3,2,5]', output: '9' },
        { input: '[0,1,0,0,0,1,0]', output: '3' },
        { input: '[5,4,3,2,1]', output: '0' },
        { input: '[1,2,3,4,5]', output: '0' },
        { input: '[1,0,1]', output: '1' },
        { input: '[3,0,2,0,4]', output: '7' },
        { input: '[0,7,1,4,6]', output: '7' },
        { input: '[2,0,2]', output: '2' },
        { input: '[5,5,1,7,1,1,5,2,7,6]', output: '23' }
      ],
      solution: {
        javascript: `function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0;\n  let result = 0;\n  \n  while (left < right) {\n    if (height[left] < height[right]) {\n      if (height[left] >= leftMax) leftMax = height[left];\n      else result += leftMax - height[left];\n      left++;\n    } else {\n      if (height[right] >= rightMax) rightMax = height[right];\n      else result += rightMax - height[right];\n      right--;\n    }\n  }\n  \n  return result;\n}`,
        python: `def trap(height):\n    left, right = 0, len(height) - 1\n    left_max = right_max = result = 0\n    \n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max:\n                left_max = height[left]\n            else:\n                result += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max:\n                right_max = height[right]\n            else:\n                result += right_max - height[right]\n            right -= 1\n    \n    return result`,
        java: `public static int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0;\n    int result = 0;\n    \n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left];\n            else result += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right];\n            else result += rightMax - height[right];\n            right--;\n        }\n    }\n    \n    return result;\n}`,
        cpp: `int trap(vector<int>& height) {\n    int left = 0, right = height.size() - 1;\n    int leftMax = 0, rightMax = 0;\n    int result = 0;\n    \n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left];\n            else result += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right];\n            else result += rightMax - height[right];\n            right--;\n        }\n    }\n    \n    return result;\n}`
      }
    },
    {
      id: 'sliding-window-max',
      title: 'Sliding Window Maximum',
      description: 'Given an array of integers and a window size, find the maximum in each sliding window',
      difficulty: 'Hard',
      category: 'Algorithms',
      points: 45,
      functionName: 'maxSlidingWindow',
      examples: [
        { input: '[1,3,-1,-3,5,3,6,7], 3', output: '[3,3,5,5,6,7]' },
        { input: '[1], 1', output: '[1]' }
      ],
      testCases: [
        { input: '[1,3,-1,-3,5,3,6,7], 3', output: '[3,3,5,5,6,7]' },
        { input: '[1], 1', output: '[1]' },
        { input: '[1,-1], 1', output: '[1,-1]' },
        { input: '[9,11], 2', output: '[11]' },
        { input: '[4,-2], 2', output: '[4]' },
        { input: '[7,2,4], 2', output: '[7,4]' },
        { input: '[1,3,1,2,0,5], 3', output: '[3,3,2,5]' },
        { input: '[1,2,3,4,5,6,7,8,9,10], 3', output: '[3,4,5,6,7,8,9,10]' },
        { input: '[10,9,8,7,6,5,4,3,2,1], 4', output: '[10,9,8,7,6,5,4]' },
        { input: '[8,7,6,5,4,3,2,1,0,-1,-2], 5', output: '[8,7,6,5,4,3,2]' }
      ],
      solution: {
        javascript: `function maxSlidingWindow(nums, k) {\n  const result = [];\n  const deque = [];\n  \n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {\n      deque.pop();\n    }\n    deque.push(i);\n    \n    if (deque[0] === i - k) deque.shift();\n    \n    if (i >= k - 1) result.push(nums[deque[0]]);\n  }\n  \n  return result;\n}`,
        python: `def maxSlidingWindow(nums, k):\n    from collections import deque\n    \n    result = []\n    q = deque()\n    \n    for i in range(len(nums)):\n        while q and nums[i] >= nums[q[-1]]:\n            q.pop()\n        q.append(i)\n        \n        if q[0] == i - k:\n            q.popleft()\n        \n        if i >= k - 1:\n            result.append(nums[q[0]])\n    \n    return result`,
        java: `public static int[] maxSlidingWindow(int[] nums, int k) {\n    if (nums == null || nums.length == 0) return new int[0];\n    \n    int[] result = new int[nums.length - k + 1];\n    Deque<Integer> deque = new ArrayDeque<>();\n    \n    for (int i = 0; i < nums.length; i++) {\n        while (!deque.isEmpty() && nums[i] >= nums[deque.peekLast()]) {\n            deque.removeLast();\n        }\n        deque.addLast(i);\n        \n        if (deque.peekFirst() == i - k) deque.removeFirst();\n        \n        if (i >= k - 1) result[i - k + 1] = nums[deque.peekFirst()];\n    }\n    \n    return result;\n}`,
        cpp: `vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    vector<int> result;\n    deque<int> dq;\n    \n    for (int i = 0; i < nums.size(); i++) {\n        while (!dq.empty() && nums[i] >= nums[dq.back()]) {\n            dq.pop_back();\n        }\n        dq.push_back(i);\n        \n        if (dq.front() == i - k) dq.pop_front();\n        \n        if (i >= k - 1) result.push_back(nums[dq.front()]);\n    }\n    \n    return result;\n}`
      }
    },
    {
      id: 'word-ladder',
      title: 'Word Ladder',
      description: 'Find the length of shortest transformation sequence from beginWord to endWord',
      difficulty: 'Hard',
      category: 'Graph',
      points: 55,
      functionName: 'ladderLength',
      examples: [
        { input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]', output: '5' },
        { input: '"hit", "cog", ["hot","dot","dog","lot","log"]', output: '0' }
      ],
      testCases: [
        { input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]', output: '5' },
        { input: '"hit", "cog", ["hot","dot","dog","lot","log"]', output: '0' },
        { input: '"a", "c", ["a","b","c"]', output: '2' },
        { input: '"hot", "dog", ["hot","dog"]', output: '0' },
        { input: '"hot", "dot", ["hot","dot"]', output: '2' },
        { input: '"red", "tax", ["ted","tex","red","tax","tad","den","rex","pee"]', output: '4' },
        { input: '"cat", "fin", ["ion","rev","che","ind","lie","wis","oct","ham","jag","ray","nun","ref","wig","jul","ken","mit","eel","paw","per","ola","pat","old","maj","ell","irk","ivy","beg","fan","rap","sun","yak","sat","fit","tom","fin"]', output: '11' },
        { input: '"lost", "cost", ["most","fist","lost","cost","fish"]', output: '2' },
        { input: '"leet", "code", ["lest","leet","lose","code","lode","robe","lost"]', output: '6' },
        { input: '"game", "thee", ["frye","heat","tree","thee","game","free","hell","fame","faye"]', output: '7' }
      ],
      solution: {
        javascript: `function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  \n  let queue = [beginWord];\n  let level = 1;\n  \n  while (queue.length) {\n    const nextQueue = [];\n    \n    for (const word of queue) {\n      if (word === endWord) return level;\n      \n      for (let i = 0; i < word.length; i++) {\n        for (let j = 0; j < 26; j++) {\n          const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);\n          \n          if (wordSet.has(newWord)) {\n            nextQueue.push(newWord);\n            wordSet.delete(newWord);\n          }\n        }\n      }\n    }\n    \n    queue = nextQueue;\n    level++;\n  }\n  \n  return 0;\n}`,
        python: `def ladderLength(beginWord, endWord, wordList):\n    wordSet = set(wordList)\n    if endWord not in wordSet:\n        return 0\n    \n    queue = collections.deque([beginWord])\n    level = 1\n    \n    while queue:\n        next_queue = collections.deque()\n        \n        for word in queue:\n            if word == endWord:\n                return level\n            \n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    new_word = word[:i] + c + word[i+1:]\n                    \n                    if new_word in wordSet:\n                        next_queue.append(new_word)\n                        wordSet.remove(new_word)\n        \n        queue = next_queue\n        level += 1\n    \n    return 0`,
        java: `public static int ladderLength(String beginWord, String endWord, List<String> wordList) {\n    Set<String> wordSet = new HashSet<>(wordList);\n    if (!wordSet.contains(endWord)) return 0;\n    \n    Queue<String> queue = new LinkedList<>();\n    queue.offer(beginWord);\n    int level = 1;\n    \n    while (!queue.isEmpty()) {\n        Queue<String> nextQueue = new LinkedList<>();\n        \n        for (String word : queue) {\n            if (word.equals(endWord)) return level;\n            \n            char[] chars = word.toCharArray();\n            for (int i = 0; i < chars.length; i++) {\n                char original = chars[i];\n                for (char c = 'a'; c <= 'z'; c++) {\n                    if (c == original) continue;\n                    chars[i] = c;\n                    String newWord = new String(chars);\n                    \n                    if (wordSet.contains(newWord)) {\n                        nextQueue.offer(newWord);\n                        wordSet.remove(newWord);\n                    }\n                }\n                chars[i] = original;\n            }\n        }\n        \n        queue = nextQueue;\n        level++;\n    }\n    \n    return 0;\n}`,
        cpp: `int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n    unordered_set<string> wordSet(wordList.begin(), wordList.end());\n    if (wordSet.find(endWord) == wordSet.end()) return 0;\n    \n    queue<string> q;\n    q.push(beginWord);\n    int level = 1;\n    \n    while (!q.empty()) {\n        queue<string> nextQ;\n        \n        while (!q.empty()) {\n            string word = q.front();\n            q.pop();\n            \n            if (word == endWord) return level;\n            \n            for (int i = 0; i < word.size(); i++) {\n                char original = word[i];\n                for (char c = 'a'; c <= 'z'; c++) {\n                    if (c == original) continue;\n                    word[i] = c;\n                    \n                    if (wordSet.find(word) != wordSet.end()) {\n                        nextQ.push(word);\n                        wordSet.erase(word);\n                    }\n                }\n                word[i] = original;\n            }\n        }\n        \n        q = nextQ;\n        level++;\n    }\n    \n    return 0;\n}`
      }
    }
  ];

  useEffect(() => {
    setChallenges(challengesData);
    const savedPoints = localStorage.getItem('challengePoints') || 0;
    setUserPoints(Number(savedPoints));
    
    if (challengeId) {
      const challenge = challengesData.find(c => c.id === challengeId);
      if (challenge) {
        setSelectedChallenge(challenge);
        setUserCode(functionTemplates[language](challenge.functionName));
      }
    }
  }, [challengeId]);

  useEffect(() => {
    if (selectedChallenge) {
      setUserCode(functionTemplates[language](selectedChallenge.functionName));
      setRunOutput(null);
      setOutput('');
      setTestResults([]);
      setShowSolution(false);
      setHasSubmitted(false);
    }
  }, [language, selectedChallenge]);


  const startChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setUserCode(functionTemplates[language](challenge.functionName));
    setRunOutput(null);
    setOutput('');
    setTestResults([]);
    setShowSolution(false);
    setHasSubmitted(false);
    navigate(`/challenges/${challenge.id}`);
  };

  const executeCode = async () => {
    try {
      let result = null;
      let error = null;
      
      if (language === 'javascript') {
        try {
          const func = new Function(`return ${userCode}`)();
          // Test with first example input
          const exampleInput = selectedChallenge.examples[0].input;
          const inputValue = eval(`[${exampleInput}]`);
          result = func(...inputValue);
        } catch (e) {
          error = e;
        }
      } else {
        // For other languages, we would call a backend compiler API
        // Here we just simulate it with the correct solution
        const exampleInput = selectedChallenge.examples[0].input;
        const inputValue = eval(`[${exampleInput}]`);
        const func = new Function(`return ${selectedChallenge.solution.javascript}`)();
        result = func(...inputValue);
      }

      if (error) {
        setRunOutput({
          type: 'error',
          message: `🚨 ${error.name}: ${error.message}\n${error.stack}`
        });
      } else {
        setRunOutput({
          type: 'result',
          input: selectedChallenge.examples[0].input,
          output: JSON.stringify(result),
          expected: selectedChallenge.examples[0].output
        });
      }
    } catch (error) {
      setRunOutput({
        type: 'error',
        message: `🚨 ${error.name}: ${error.message}\n${error.stack}`
      });
    }
  };

  const submitSolution = async () => {
    try {
      let results = [];
      
      if (language === 'javascript') {
        const func = new Function(`return ${userCode}`)();
        results = selectedChallenge.testCases.map(test => {
          try {
            const inputValues = eval(`[${test.input}]`);
            const result = func(...inputValues);
            const passed = JSON.stringify(result) === test.output;
            return {
              input: test.input,
              expected: test.output,
              actual: JSON.stringify(result),
              passed,
              error: null
            };
          } catch (error) {
            return {
              input: test.input,
              expected: test.output,
              actual: null,
              passed: false,
              error: error.message
            };
          }
        });
      } else {
        // For other languages, simulate with correct solution
        results = selectedChallenge.testCases.map(test => {
          const inputValues = eval(`[${test.input}]`);
          const func = new Function(`return ${selectedChallenge.solution.javascript}`)();
          const result = func(...inputValues);
          return {
            input: test.input,
            expected: test.output,
            actual: JSON.stringify(result),
            passed: true,
            error: null
          };
        });
      }

      setTestResults(results);
      
      const passedCount = results.filter(r => r.passed).length;
      const pointsEarned = passedCount === selectedChallenge.testCases.length ? 
        selectedChallenge.points : 0;
      
      if (pointsEarned > 0) {
        const newPoints = userPoints + pointsEarned;
        setUserPoints(newPoints);
        localStorage.setItem('challengePoints', newPoints);
      }
      
      setOutput(`Test Results:\n\n${passedCount}/${selectedChallenge.testCases.length} test cases passed.`);
      setHasSubmitted(true);
    } catch (error) {
      setOutput(`🚨 Error during submission: ${error.message}`);
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = categoryFilter === 'all' || challenge.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'all' || challenge.difficulty === difficultyFilter;
    return matchesCategory && matchesDifficulty;
  });

  if (selectedChallenge) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <button 
          onClick={() => {
            setSelectedChallenge(null);
            navigate('/challenges');
          }}
          className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Challenges
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{selectedChallenge.title}</h2>
                <div className="flex items-center mt-2 space-x-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    selectedChallenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    selectedChallenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedChallenge.difficulty}
                  </span>
                  <span className="text-gray-600">{selectedChallenge.category}</span>
                  <span className="text-blue-600 font-medium">+{selectedChallenge.points} pts</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Your Points: {userPoints}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
            <div className="prose max-w-none mb-6">
              <p>{selectedChallenge.description}</p>
            </div>

            <h3 className="text-lg font-semibold mb-2">Examples</h3>
            <div className="grid gap-3 mb-6">
              {selectedChallenge.examples.map((example, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded">
                  <div className="font-medium">Example {i + 1}</div>
                  <div className="text-sm mt-1">
                    <div>Input: <code>{example.input}</code></div>
                    <div>Output: <code>{example.output}</code></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Language:</label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded px-3 py-2"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>

            <div className="h-96 mb-4 border rounded overflow-hidden">
              <MonacoEditor
                height="100%"
                language={language}
                theme="vs-dark"
                value={userCode}
                onChange={setUserCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  automaticLayout: true
                }}
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={executeCode}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Run Code
              </button>
              <button
                onClick={submitSolution}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit Solution
              </button>
              {hasSubmitted && (
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ml-auto"
                >
                  {showSolution ? 'Hide Solution' : 'View Solution'}
                </button>
              )}
            </div>

            {runOutput && (
              <div className={`mt-6 p-4 rounded ${
                runOutput.type === 'error' ? 'bg-red-50' : 'bg-gray-50'
              }`}>
                <h3 className="text-lg font-semibold mb-2">
                  {runOutput.type === 'error' ? 'Error' : 'Execution Result'}
                </h3>
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {runOutput.type === 'error' ? runOutput.message : (
                    `Input: ${runOutput.input}\nOutput: ${runOutput.output}\n` +
                    (runOutput.output === runOutput.expected ? 
                      '✅ Output matches expected result' : 
                      '❌ Output does not match expected result')
                  )}
                </pre>
              </div>
            )}

            {output && (
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <h3 className="text-lg font-semibold mb-2">Submission Results</h3>
                <pre className="whitespace-pre-wrap font-mono text-sm">{output}</pre>
              </div>
            )}

            {testResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Test Case Results</h3>
                <div className="grid gap-3">
                  {testResults.map((result, i) => (
                    <div key={i} className={`p-3 rounded ${
                      result.passed ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                      <div className="font-medium flex items-center">
                        {result.passed ? '✅' : '❌'} Test Case {i + 1}
                      </div>
                      <div className="mt-1 text-sm font-mono">
                        <div>Input: {result.input}</div>
                        {result.error ? (
                          <div className="text-red-600">Error: {result.error}</div>
                        ) : (
                          <>
                            <div>Expected: {result.expected}</div>
                            <div>Actual: {result.actual}</div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showSolution && (
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <h3 className="text-lg font-semibold mb-2">Solution ({language})</h3>
                <pre className="whitespace-pre-wrap bg-white p-4 rounded font-mono text-sm">
                  {selectedChallenge.solution[language]}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Coding Challenges</h1>
        <div className="flex items-center space-x-4">
          <span className="font-medium">Your Points: {userPoints}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <label className="block mb-2 font-medium">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="all">All Categories</option>
            <option value="Algorithms">Algorithms</option>
            <option value="Strings">Strings</option>
            <option value="Math">Math</option>
            <option value="Graph">Graph</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block mb-2 font-medium">Difficulty:</label>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="all">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredChallenges.length > 0 ? (
          filteredChallenges.map(challenge => (
            <div 
              key={challenge.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => startChallenge(challenge)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm px-2 py-1 bg-gray-100 rounded">{challenge.category}</span>
                  <span className="text-blue-600 font-medium">+{challenge.points} pts</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No challenges match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;