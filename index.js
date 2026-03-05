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
            if(isSafeReport(report)) numberOfSafeReports++;
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
 *
 * @returns {boolean} Returns true if the report is safe and false otherwise
 */
function isSafeReport(report) {
    const levels = report.split(" ");
    const numOfLevels = levels.length;

    let direction = 0; // 1 for increasing, -1 for decreasing

    for(let i = 1; i < numOfLevels; i++) {
        const difference = parseInt(levels[i]) - parseInt(levels[i - 1]);

        // If two values are the same then we have an unsafe report
        if(difference === 0) {
            return false;
        }

        if(Math.abs(difference) > 3) {
            return false;
        }

        let currentDirection = (difference > 0) ? 1 : -1;

        if(direction === 0) {
            // Set the initial direction for the report
            direction = currentDirection;
        } else if(currentDirection !== direction) {
            return false;
        }
    }

    return true;
}

console.log(checkReports());