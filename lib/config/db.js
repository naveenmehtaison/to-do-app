import { mongoose } from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://naveenmehta099:Iv2OjRrCQledejzG@cluster0.5tccfwd.mongodb.net/to-doapp')
    console.log('db connected')

}
