'use strict';

import * as fs from 'node:fs';
/**
 * This function will return the number of 'safe' reports from the data from the engineers.
 *
 * It can be assumed that the reports are given as a m x n format.
 * Where m is the number of reports and n is the number of levels in a report
 * Not all reports have the same number of levels.
 *
 * @param {string} filePath the relative file path to the data to be parsed for the unusual data.
 *
 * @returns {number} the number of safe reports
 */

function checkReports(filePath = "./adventDay2Input.txt") {
    let reports = fs.readFileSync(filePath, "utf8")
    let numberOfSafeReports = 0;

    if(reports) {
        const reportsArr = reports.split("\n");

        for(const report of reportsArr) {
            if(isSafeReport(report, true)) {
                numberOfSafeReports++;
            }
        }
    }

    return numberOfSafeReports;
}

/**
 * This function will parse the report and check to see if the report is considered 'safe'
 *
 * A report is considered safe if the two conditions below are true:
 *   The levels are either all increasing or all decreasing.
 *   Any two adjacent levels differ by at least one and at most three.
 *
 * @param {string} report string containing numbers of the report that indicate the levels of the report
 * @param {boolean} dampener flag to indicate whether to use the problem dampener that will allow for a single bad level in a report to be marked as safe
 *
 * @returns {boolean} Returns true if the report is safe and false otherwise
 */
function isSafeReport(report, dampener = false) {
    const levels = report.split(" ");
    const numOfLevels = levels.length;

    let direction = 0; // 1 for increasing, -1 for decreasing

    for(let i = 1; i < numOfLevels; i++) {
        const difference = parseInt(levels[i]) - parseInt(levels[i - 1]);
        let currentDirection = (difference > 0) ? 1 : -1;
         if(direction === 0) {
            // Set the initial direction for the report
            direction = currentDirection;
        }

        if(difference === 0 || Math.abs(difference) > 3 || currentDirection !== direction) {
            if(dampener) {
                return problemDampener(levels);
            }

            return false;
        }
    }

    return true;
}

/**
 * This function will parse a bad report and then see if it can dampen the report so that it will be considered safe
 * So we can remove at most ONE level inside each report
 *
 * @param {string} report report containing the levels
 *
 * @returns {boolean} true if the report is safe and false otherwise
 */
function problemDampener(report) {
    // We know this report is unsafe
    let result = false;
    // generate all possible permutations of the dampened report
    let possibleReports = [];
    for(let i = 0; i < report.length; i++) {
        const cReport = report.toSpliced(i, 1);
        possibleReports.push(cReport)
    }

    for(const rep of possibleReports) {
        const reportString = rep.join(" ");

        // Re-run the helper function but DON'T dampen further
        if(isSafeReport(reportString, false)) {
            // console.log('dampened:',reportString);
            result = true;
            break;
        }
    }

    return result;
}

console.log(checkReports());