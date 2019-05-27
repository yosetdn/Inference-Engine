const helper = require('../helpers/helper');

const main = (BC, BH, G) => {
    const table = [];
    const CC = [];
    console.log("\tForward Chaining\n\tInitial table BC")
    console.table(helper.tranformIntoObject(BC));
    BH = BH[0];
    G = G[0];
    let BCObject = helper.tranformIntoObject(BC);
    table.push({
        CC: '',
        NH: '',
        Goal: G,
        R: '',
        BH
    })
    var i = 0;
    do {
        let BHonArray = BH.split(',');
        BHonArray.map(singleBH => {
            for (const key of Object.keys(BCObject)) {
                let auxKeyValue = BCObject[key].key
                if (auxKeyValue.includes(singleBH)) {
                    if (auxKeyValue.includes('&')) {
                        if (helper.and(BH, auxKeyValue) && (!CC.some(element => element===BCObject[key].id))) CC.push(BCObject[key].id);
                    }
                    if (CC.length !== 0) {
                        if ((!CC.some(element => element===BCObject[key].id))) CC.push(BCObject[key].id);
                    } else CC.push(BCObject[key].id);
                }

            }
        });
       
        let r = CC[0];
        let CCReal = ',' + CC.map(element => {return element});
        const index = BCObject.findIndex(value => value.id === r);
        BH+=','+BCObject[index].value;
        table.push({
            CC:CCReal.substr(1),
            NH: BCObject[index].value,
            Goal: G,
            R: r,
            BH
        })
        CC.shift();
       
        BCObject.splice(index, 1);

        if(BH.includes(G)) break;

    } while (CC.length !== 0);
    console.table(table);
    (BH.includes(G)) ? console.log('\n!SSSSSSSSSUUUUUUUUCCES!') : console.log('\n:( Failureeeeee');

}  


module.exports = {
    main
}