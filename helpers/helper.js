const tranformIntoObject = (BC) => {
    const contentTable = [];
    BC.map((R,index) => {
        let splt = R.split('->');
        contentTable.push({
            id: 'R'+(index+1),
            key: splt[0],
            value: splt[1]
        });
    });
    return contentTable;
}
const and = (BH,auxKeyValue) => {
    let splitKey = auxKeyValue.split('&');
    for (const key of Object.keys(splitKey)) {
        if (!BH.includes(splitKey[key])) return false;
    }
    return true;
}

module.exports = {

    tranformIntoObject,
    and
}