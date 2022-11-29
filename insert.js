const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'Micromax 1',
        brand: 'micromax',
        price: 5000
    });
if(result.acknowledged){
    console.log("Data inserted");
}
}

insert();