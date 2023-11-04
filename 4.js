/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {

    right = {label: 'right', length: right.length, source: right};
    left = {label: 'left', length: left.length, source: left};

    let getMoment = (units => (label, acc, cur) => Math.max(acc, label == 'left'? cur: units - cur))(n);

    let smallest,
        longest,
        moment = 0;

    (right.length > left.length)? (smallest = left, longest = right) : (smallest = right, longest = left);

    for(let i = 0; i < longest.length; i++) {

        if(i < smallest.length)
            moment = getMoment(smallest.label, moment, smallest.source[i]);

        moment = getMoment(longest.label, moment, longest.source[i]);

    }

    return moment;

};
