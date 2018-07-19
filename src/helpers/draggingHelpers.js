export const getGCD = (a, b) => {
    if (b === 0) {
        return a;
    }

    return getGCD(b, a % b);
};

// get element of Farey sequence based on prev and next elements
// numerator/denominator - posN/posD
export const getPosition = ({ prevPos = { posN: 1, posD: 1 }, nextPos = { posN: 0, posD: 1 } }) => {
    const posN = prevPos.posN + nextPos.posN;
    const posD = prevPos.posD + nextPos.posD;

    const gcd = getGCD(posN, posD);

    return {
        posN: Math.floor(posN / gcd),
        posD: Math.floor(posD / gcd)
    };
};

export const positionSortFunctions = (a, b) => {
    const aPos = a.posN / a.posD;
    const bPos = b.posN / b.posD;

    return bPos - aPos;
};

export const sortByPositions = items => items.sort(positionSortFunctions);

export const moveItems = (items, itemUuid, overItemUuid) => {
    let sourceIndex = -1;
    let distIndex = -1;

    items.forEach((item, index) => {
        if (item.uuid === itemUuid) {
            sourceIndex = index;
        }
        if (item.uuid === overItemUuid) {
            distIndex = index;
        }
    });

    console.log(sourceIndex, distIndex);
    if (sourceIndex === -1 || distIndex === -1) {
        return items;
    }

    const item = items[sourceIndex];

    const newItems = [...items];

    newItems.splice(sourceIndex, 1);
    newItems.splice(distIndex, 0, item);

    return newItems;
};

export const afterDrop = (items, itemUuid) => {
    let itemIndex = -1;

    const element = items.find((item, index) => {
        if (item.uuid === itemUuid) {
            itemIndex = index;
            return true;
        }

        return false;
    });

    return {
        ...element,
        ...getPosition({
            prevPos: items[itemIndex - 1],
            nextPos: items[itemIndex + 1]
        })
    };
};
