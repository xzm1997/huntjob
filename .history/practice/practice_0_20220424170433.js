let n1=readInt(), n2=readInt(), n3=readInt();
read_line();
let n1Input = read_line(), n2Input = read_line(), n3Input = read_line();
let lines = readInt();
read_line();
let n1List = n1Input.split(' ');
let n2List = n2Input.split(' ');
let n3List = n3Input.split(' ');
list = [n1List, n2List, n3List];
juziList = []

for (let i = 0; i < lines; ++i) {
    let juzi = read_line().split(' ');
    juziList.push(juzi);
}

let isn1 = true, isn2=false, isn3=false; 
juziList.forEach((juzi) => {
    while (juzi.length != 0) {
        let ciyu = juzi.shift();
        if (n1) {
            if (n1List.includes(ciyu)) n1 = true;
            else if (n2List.includes(ciyu)) {
                n1 = false;
                n2 = true;
            }
            else {
                console.log(NO);
                break;
            }
        } else if (n1 && n2List.includes(ciyu)) {
            
        } else if (n2 && n2List.includes(ciyu)) {
            console.log(NO);
            break;
        } else if (n2 && n3List.includes(ciyu)) {
            n2 = false;
            n3 = true;
        } 
    }
    if (n1 && (!n2) && (!n3)) console.log(YES);
    else if ((!n1) && (n2) && (!n3)) console.log(YES);
    else if ((!n1) && (!n2) && (n3)) console.log(YES);
})