const prompt= require("prompt-sync")();
var marks = prompt(`Enter your marks  `)
//marks between 79 and 100
if(marks> 79 && marks <= 100){
    console.log( "A")
}
//marks between 60 and 79
else if (marks>=60 && marks <=79){
    console.log(" B")
 //marks between 49 and 59
}else if (marks>=49 && marks <=59){
    console.log(" C")}
    //marks between 49 and 40
    else if (marks>=40 && marks <=49){
        console.log("D")
    }
        else if(marks>=0 && marks <=39){
            console.log("E")
        }else{
            console.log("invalid mark")
        }