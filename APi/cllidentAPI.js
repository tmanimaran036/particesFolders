
async function  apiHandele(){
 try{
  const promissData=await fetch('https://jsonplaceholder.typicode.com/posts');
  const  actuvalData=await promissData.json()
  console.log(actuvalData)
}
catch(err){
     console.log("error is ", err)
}

}

apiHandele();



