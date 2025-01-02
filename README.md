# Infinite Render Loop in React 19 useEffect Hook

This repository demonstrates a common error in React 19 involving infinite render loops caused by improper use of the `useEffect` hook.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The original code suffers from an infinite render loop because the effect within `useEffect` depends on a value (`count`) that is updated during the same render cycle. This creates a continuous loop of rendering and updating, leading to performance degradation or crashes.

## Solution

The solution involves using functional updates with `setCount` to ensure the effect only runs when the count actually changes.  Avoid directly using `count` in the effect's dependency array. 

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React development server.
4. Observe the console logs for the number of render cycles. In the buggy version, the number of renders will rapidly increase. 

## Learning Points

- Understand the dependency array in `useEffect`.
- Use functional updates with state setters to avoid infinite render loops.
- Carefully observe console logs to detect performance issues.