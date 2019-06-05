const helper = require('../helpers/helper');

const main = (BC, BH, G) => {
    const table = [{
        CC: '',
        NH: '',
        Goal: G,
        R: '',
        BH
    }];
    const CC = [];
    console.log("\tForward Chaining\n\tInitial table BC")
    console.table(helper.tranformIntoObject(BC));
    let BCObject = helper.tranformIntoObject(BC);
    do {
        let BHonArray = BH.split(',');
        BHonArray.map(singleBH => {
            for (const key of Object.keys(BCObject)) {
                let auxKeyValue = BCObject[key].key
                if (auxKeyValue.includes(singleBH)) {
                    if (auxKeyValue.includes('&')) {
                        if (helper.and(BH, auxKeyValue) && (!CC.some(element => element === BCObject[key].id))) CC.push(BCObject[key].id);
                    }
                        if ((!CC.some(element => element === BCObject[key].id))) CC.push(BCObject[key].id);
                }

            }
        });

        let r = CC[0];
        let CCReal = ',' + CC.map(element => {
            return element
        });
        const index = BCObject.findIndex(value => value.id === r);
        BH += ',' + BCObject[index].value;
        table.push({
            CC: CCReal.substr(1),
            NH: BCObject[index].value,
            Goal: G,
            R: r,
            BH
        })
        CC.shift();
        BCObject.splice(index, 1);
        if (BH.includes(G)) break;
    } while (CC.length !== 0);
    console.table(table);
    (BH.includes(G)) ? console.log('\n!SSSSSSSSSUUUUUUUUCCES!'): console.log('\n:( Failureeeeee');
}


module.exports = {
    main
}