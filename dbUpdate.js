const dbConnect = require('./mongodb')

const updateData = async ()=>{
    const data = await dbConnect();
    const result = await data.update(
        {name: 'Micromax 1'},
        { $set: {name: 'Max Pro 5',price: 550}}
        
    )
    if(result.acknowledged){
        console.log("Data updateD");
    }
};

//console.warn(result);

updateData();