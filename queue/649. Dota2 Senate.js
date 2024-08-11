/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let DKiller = 0;
    let RKiller = 0;
    let Dcount = 0;
    let Rcount = 0;
    const array = Array.from(senate);
    array.forEach((el) => {
        if (el === "R") Rcount++;
        else Dcount++;
    });
    let winner = array[0];
    while (Dcount > 0 && Rcount > 0) {
        const target = array.shift();
        console.log(target);
        if (target === "R") {
            if (RKiller > 0) {
                RKiller--;
                Rcount--;
            } else {
                DKiller++;
                winner = "R";
                array.push(target);
            }
        } else {
            if (DKiller > 0) {
                DKiller--;
                Dcount--;
            } else {
                RKiller++;
                winner = "D";
                array.push(target);
            }
        }
    }
    return Rcount > 0 ? "Radiant" : "Dire";
};

// 솔루션
/**
 * @param {string} senate
 * @return {string}
 */
// function predictPartyVictory(senate) {
//     // Initialize two arrays to keep track of the indices of the senators from each party.
//     let radiant = [];
//     let dire = [];
//     const n = senate.length;
  
//     // Loop through each senator in the given order.
//     for (let i = 0; i < n; i++) {
//       // If the senator is from the Radiant party, add their index to the radiant array
//       // with an offset of n, representing their vote in the next round.
//       if (senate[i] === 'R') {
//         radiant.push(i + n);
//       } else {
//         // If the senator is from the Dire party, add their index to the dire array
//         // with an offset of n, representing their vote in the next round.
//         dire.push(i + n);
//       }
//     }
  
//     // Loop through each round until one party has all the votes.
//     while (radiant.length > 0 && dire.length > 0) {
//       // Compare the indices of the first senator from each party.
//       if (radiant[0] < dire[0]) {
//         // If the Radiant senator's index is less than the Dire senator's index,
//         // add their index to the end of the radiant array with an offset of n,
//         // representing their vote in the next round.
//         radiant.push(radiant[0] + n);
//       } else {
//         // If the Dire senator's index is less than or equal to the Radiant senator's index,
//         // add their index to the end of the dire array with an offset of n,
//         // representing their vote in the next round.
//         dire.push(dire[0] + n);
//       }
//       // Remove the first senator from each party's array, since they have voted in this round.
//       radiant.shift();
//       dire.shift();
//     }
  
//     // Return the winner of the voting procedure based on which party has remaining votes.
//     return (radiant.length > 0) ? "Radiant" : "Dire";
//   }