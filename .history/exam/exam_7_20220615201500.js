var s = "aaa bbb ccc";
var reg = /\b\w+\b/;//没有g
var rs_match = s.match(reg);
var rs_exec = reg.exec(s);
console.log("match:",rs_match);
console.log("exec:",rs_exec);

/*
match: [ 'aaa', index: 0, input: 'aaa bbb ccc', groups: undefined ]
exec: [ 'aaa', index: 0, input: 'aaa bbb ccc', groups: undefined ]
*/
