const textReplace = (template, content) => {
  const res = /[\{]{2}(\w+)[\}}{2}]/;
  if (res.test(template)) {
    
  }
}


var template = '我是一名{{defaultGrade}}学生，我的名字叫{{defaultName}}';
var content = {defaultGrade:'初中', defaultName};