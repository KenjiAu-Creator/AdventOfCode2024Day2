# Advent of Code 2024 - Day 2
## Problem Constraints
A report is considered **safe** if:
- All numbers are either **strictly increasing** or **strictly decreasing**
- Adjacent values differ by **at least 1 and at most 3**

## Design Decisions
- Implemented a reusable 'isSafeReport()' helper function to validate reports and increase code readability

## Complexity
- Time complexity: **O(n x m)** per report (Where n is the number of reports and m is the number of levels inside a report)
- Space complexity: **O(1)**

## Lessons learned
- Handling sequence direction early simplifies validation logic
- Breaking down the solution into reusable functions improves readability
- Ensure that variable type checking is done before comparisons 

## Problem Link
The core problem and information can be found at: https://adventofcode.com/2024/day/2
