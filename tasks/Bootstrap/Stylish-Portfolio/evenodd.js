function trafficSign(color){
       if(color === "red") return "stop";
       else if(color === "green") return "Go";
       else if(color === "yellow") return "get ready"; 
       return "broken signal";
}

console.log(trafficSign("green"));