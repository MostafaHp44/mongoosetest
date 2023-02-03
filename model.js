// 1)- import monggose to connect with database
const mongoose=require('mongoose')
// 2)- get my own url to connent with my data
let url='mongodb+srv://mostafahp44:moo1234@cluster0.bj1wsfi.mongodb.net/mostafa'
// 3)- now here , I connect the data 
mongoose.set('strictQuery', false).connect(url,{
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    }).then(()=>{console.log('Done...!!')}).catch((err)=>{console.log(err)})

// 4)- creat schema like format of you data 
const personschema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        type:Number
    },
    favoriteFoods:[String],
})
// 5)- create model and collection include documnet 
let Person = mongoose.model('Person', personschema);
// 6)- make a function to creat easy object
const newperson=(name,age,favfood)=>{
    let newper=new Person({
        name:name,
        age:age,
        favoriteFoods:favfood
    })
    // 7)- save my object 
    newper.save().then(()=>{console.log('Person is Created......!!!')}).catch((err)=>{console.log(err);})
}
newperson('mostafa',20,['',''])
newperson('mostafa',20,['',''])
newperson('mostafa',20,['',''])
newperson('mostafa',20,['',''])
newperson('mostafa',20,['',''])


Person.find().then((data)=>{console.log(data)})
Person.findById('63dcf630eaa932a676395c89').then((data)=>{console.log(data)})
Person.deleteOne().then((data)=>{console.log(data)})
Person.deleteMany().then((data)=>{console.log(data)})




