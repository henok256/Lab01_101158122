const fs = require('fs');
var parse = require('csv-parser');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});

fs.createReadStream(__dirname+'/input_countries.csv').pipe(parser);
 //const usaData=parser.columns
 //const canadaData;

 const path = './usa.txt'

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}

const pathCanada = './canada.txt'

try {
  fs.unlinkSync(pathCanada)
  //file removed
} catch(err) {
  console.error(err)
}

fs.writeFile("canada.txt", parser, (err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("write success");
    }
})

fs.writeFile("usa.txt", parser, (err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("write success");
    }
})

