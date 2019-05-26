const getBC = (content) => {
    let res = content.match(/BC{[\S\s]*?\}/gi)[0];
    res = res.match(/[^{\}]+(?=})/g);
    res = res[0].split('\n');
    return cleanContent(res);
}

const getBH = (content) => {
    let res = content.match(/BH={[\S\s]*?\}/gi)[0];
    res = res.match(/[^{\}]+(?=})/g);
    res = res[0].split('\n');
    return cleanContent(res);
}

const goal = (content) => {
    let res = content.match(/G={[\S\s]*?\}/gi)[0];
    res = res.match(/[^{\}]+(?=})/g);
    res = res[0].split('\n');
    return cleanContent(res);
}

const cleanContent = (res) =>{
    const real = [];
    for (const key of Object.keys(res)) {
        res[key] = res[key].replace(/\s/g,'');
        if(res[key]!=='') real.push(res[key]);
    }
    return real;
}

module.exports={
    getBC,
    getBH,
    goal
}