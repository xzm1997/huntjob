const textReplace = (template, content) => {
  const grade = /\{\{defaultGrade\}\}/;
  const name = /\{\{defaultName\}\}/;

  return template.replace(grade, content['defaultGrade']).replace(name, content['defaultName']);
}


var template = '我是一名{{defaultGrade}}学生，我的名字叫{{defaultName}}';
var content = {defaultGrade:'初中', defaultName:'张三'};

console.log(content.key);