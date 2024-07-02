import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import TodoModal from "@/lib/models.js/TodoModal";
const LoadDb = async ()=>{
    await ConnectDB()
}
LoadDb()
export async function POST(request){
    console.log(request)
    const {title,description } = await request.json()
    try{   
        await TodoModal.create({
            title,description

        })
    }
    catch(err){
        console.log(err)
    }
    return( NextResponse.json({message:'To-do Created'}))

}
export async function GET(response){
    const todos = await TodoModal.find({})
    return NextResponse.json({todos:todos})


}
export async function DELETE(request){
    const mongoId = request.nextUrl.searchParams.get('mongoId')
    console.log(mongoId)
    await TodoModal.findByIdAndDelete(mongoId)
    return NextResponse.json({message:'todo deleted'})


}
export async function PUT(request){
    const mongoId = request.nextUrl.searchParams.get('mongoId')
    console.log(mongoId)
    await TodoModal.findByIdAndUpdate(mongoId,
        {$set:{
        isCompleted:true
    }})
    return NextResponse.json({message:'todo completed'})


}
