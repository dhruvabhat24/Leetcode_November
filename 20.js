// These are the types of trash flags we can toggle
const TRASH_TYPES = {
  None: 0,
  Metal: 1,
  Paper: 2,
  Glass: 4
};

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let totalCollectionTime = 0
  let typesCollected = TRASH_TYPES.None
  
  for (let i = garbage.length - 1; i >= 0; i--) {
    // Sets collected types flags and increments time by 1 min
    for (let j = garbage[i].length - 1; j >= 0; j--) {
      if (!(typesCollected & TRASH_TYPES.Metal) && garbage[i][j] == 'M') {
        typesCollected |= TRASH_TYPES.Metal
      } else if (!(typesCollected & TRASH_TYPES.Paper) && garbage[i][j] == 'P') {
        typesCollected |= TRASH_TYPES.Paper
      } else if (!(typesCollected & TRASH_TYPES.Glass) && garbage[i][j] == 'G') {
        typesCollected |= TRASH_TYPES.Glass
      }
      totalCollectionTime++
    }

    // Adds the applicable amount of travel time to the total time
    let prevIndex = i - 1
    if (prevIndex >= 0)
    {
      if (typesCollected & TRASH_TYPES.Metal) {
        totalCollectionTime += travel[prevIndex]
      }
      if (typesCollected & TRASH_TYPES.Paper) {
        totalCollectionTime += travel[prevIndex]
      }
      if (typesCollected & TRASH_TYPES.Glass) {
        totalCollectionTime += travel[prevIndex]
      }
    }
  }

  return totalCollectionTime
};
