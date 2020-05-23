// // how to read stuff from files
// const fs = require(`fs`);
// const textIn = fs.readFileSync(`./txt/input.txt`,`utf-8`);
// console.log(textIn);
// // how to write to files:
// const textOut = `About Avocado:\n${textIn}`;
// fs.writeFileSync(`./txt/output.txt`,textOut);
// console.log(`writing to the output.txt is done`);

// reading file, asyncronous style (non-blocking style)
// const fs2 = require(`fs`);
// fs2.readFile(`./txt/start.txt`,`utf-8`,(err, data)=>{
//     console.log(`data:\n${data}\n`);
//     fs2.readFile(`./txt/${data}.txt`,`utf-8`,(err,data2)=>{
//         console.log(`data2:\n${data2}\n`);
//         fs2.readFile(`./txt/append.txt`,`utf-8`,(err, data3)=>{
//             console.log(`data3:\n${data3}\n`);
//             fs2.writeFile(`./txt/final.txt`,`${data2}++++\n+++++${data3}\n`,(vv)=>{
//                 console.log(`Done ! ... Written`);
//             });
            
//         })
//     })
// });
// console.log(`is working on files....`);

///////////////// Http module /////////////////////////
const myhttp = require(`http`);
// const myUrl = require(`url`);
const server = myhttp.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === `/` || pathName === `/overview`){
        res.end(`this is the overview page\n---- & http server created ----`);
    }
    else if(pathName === `/product`){
        res.end(`this is the product page\n---- & http server created ----`);
    }
});
server.listen(8000,`127.0.0.1`,()=>{
   console.log(`---- Listening ----`);
});