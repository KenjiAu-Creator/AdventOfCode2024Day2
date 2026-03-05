# Advent of Code 2024 - Day 2
# Part 1
## Problem Constraints
A report is considered **safe** if:
- All numbers are either **strictly increasing** or **strictly decreasing**
- Adjacent values differ by **at least 1 and at most 3**

# Part 2
A dampener allows for the reactor system to tolerate a single bad level in an otherwise safe report
This means we can remove a single level from a bad report IF the report would be safe without this level

## Design Decisions
- Implemented a reusable 'isSafeReport()' helper function to validate reports and increase code readability

## Complexity
### Part 1
- Time complexity: **O(n x m)** per report (Where n is the number of reports and m is the number of levels inside a report)
- Space complexity: **O(1)**

### Part 2
- Time complexity: **O(n x m)** at best and at worst we have **O(n x m x m)** since we check for every permutation for bad reports
- 
## Lessons learned
- Handling sequence direction early simplifies validation logic
- Breaking down the solution into reusable functions improves readability
- Ensure that variable type checking is done before comparisons
- Simple solutions work better than complicated ones

## Problem Link
The core problem and information can be found at: https://adventofcode.com/2024/day/2
