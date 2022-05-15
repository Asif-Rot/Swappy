const mongoose = require("mongoose");

const Books = require("../models/books");

exports.showBook = async (req, reply) => {
    try {
        const id = req.params.id;
        results = await Books.findById(id);
        return result;
    } catch (error){
        console.log(err);
    }
}

exports.delete_book = async (req, reply)=>{
    try{
        const id = req.params.id;
        await Books.findByIdAndDelete(id);
        return {Message: `${id} deleted!`}
    }catch (err){
        console.log(err);
    }
}
