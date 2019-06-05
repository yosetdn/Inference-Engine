const helper = require('../helpers/helper');

const main = (BC, BH, G) => {

    table.push({
        CC: '',
        Goal: G,
        R: '',
        BH
    });

    console.log("\tBackward Chaining\n\tInitial table BC")
    console.table(helper.tranformIntoObject(BC));
    Goal.push(G);
    BHGlobal = BH;
    BCGlobal = helper.tranformIntoObject(BC);

    var x = true;
    if(verify()){ 

        table.push({
            CC: CC[CC.length-1],
            Goal: Goal[Goal.length-1],
            R: R,
            BH: BHGlobal
        });
        BHGlobal+=','+Goal[Goal.length-1];
    }else{  console.log("Failure"); x=false }
    table.push({
        CC: CC[CC.length-1],
        Goal: Goal[Goal.length-1],
        R: R,
        BH: BHGlobal
    });
    console.table(table);

    (x) ? console.log('\n!SSSSSSSSSUUUUUUUUCCES!'): console.log('\n:( Failureeeeee');

}

const NM = []
const CC = []
const Goal = []

let BCGlobal;
let R = []
let BHGlobal;

const table = [];

const verify = () => {
    
    let v = false;
    if (BHGlobal.includes(Goal[Goal.length - 1])) return true
    else {
        let auxArr = [];
        for (const key of Object.keys(BCGlobal)) {
            if (BCGlobal[key].value === Goal[Goal.length - 1]) auxArr.push(BCGlobal[key].id)
        }
        if (auxArr.length > 0) {
            CC.push(auxArr)
            while ((CC.length != 0) && (!v)) {
               
                R.push(CC[CC.length - 1].shift())
                if(CC[CC.length-1].length===0) CC.pop()
                let auxiliar = "";
                for (const key of Object.keys(BCGlobal)) {
                    if (BCGlobal[key].id === R[R.length - 1]) {
                        if (BCGlobal[key].key.includes('&')) {
                            const spltVar = BCGlobal[key].key.split('&');
                            let auxFlag = true
                            spltVar.map(letter => {
                                if ((!NM.some(element => element === letter)) && !BHGlobal.includes(letter)) {
                                    auxiliar += letter + " ";
                                    auxFlag = false
                                }
                                if (auxFlag) R.pop();
                            })

                        } else if (BCGlobal[key].key.includes('|')) {
                            const spltVar = BCGlobal[key].key.split('|');
                            let flag = false;
                            let letterAux = "";
                            spltVar.map(letter => {
                                if (NM.some(element => element === letter) || BHGlobal.includes(letter)) {
                                    flag = true;
                                } else {
                                    letterAux += letter + " "
                                }
                            })
                            if (flag) R.pop()
                            else auxiliar += letterAux + " ";
                        } else {
                            if (BHGlobal.includes(BCGlobal[key].key)) {
                                R.pop();
                            } else auxiliar = BCGlobal[key].key;
                        }
                    }
                }
                
                v = true;
                if (auxiliar !== '') {
                    auxiliar.split(" ").forEach(element => {
                        if (element !== '') NM.push(element)
                    });

                   
                    while ((NM.length !== 0 && v)) {
                        
                        Goal.push(NM.shift())
                        table.push({
                            CC: CC[CC.length-1],
                            Goal: Goal[Goal.length-1],
                            R,
                            BH: BHGlobal
                        });
                        v = verify();
                        if (v) {
                            BHGlobal += ',' + Goal.pop();
                            
                        }else{
                            Goal.pop();
                        }
                    }
                }
            }
        }
        
        return v;
    }
}

module.exports = {
    main
}