let input = [['A','B'], ['a','b'],['1','2']], res;

function pailie (arr) {
    let res = []
    const dfs = (path,index) => {
        if(path.length == arr.length) {
            res.push(path)
            return
        }
        arr.forEach((n,i) => {
            n.forEach(k => {
                if(i == index) {
                    dfs(path + k,index+1)
                }
            })
        })
    }
    dfs("",0)
    return res
}


// res = pailie(input);
// console.log(res);

let test = [1,2,3,4,5];

test.forEach((value, index, i) => {
    console.log(value, index, i)
})


