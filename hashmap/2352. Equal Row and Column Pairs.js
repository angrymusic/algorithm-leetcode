/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let rows = {};
    let columns = {};
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        let stringGrid = JSON.stringify(grid[i]);
        if (rows[stringGrid]) rows[stringGrid]++;
        else rows[stringGrid] = 1;

        let column = [];
        for (let j = 0; j < grid.length; j++) {
            column.push(grid[j][i]);
        }
        let stringColumn = JSON.stringify(column);

        if (columns[stringColumn]) columns[stringColumn]++;
        else columns[stringColumn] = 1;

        column.length = 0;
    }

    for (let key in rows) {
        if (columns[key]) count += rows[key] * columns[key];
    }

    return count;
};
