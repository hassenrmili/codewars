function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}
