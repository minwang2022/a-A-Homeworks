// AJAX - asynchronous javascript and xml
    
// asyn - code that will run after all syn functions. code that run in the background.

// single page web app - rails app is going to be API. 


let path = require("path");

module.exports = {
    ontext:__dirname,
    entry: "./frontend/gifomatic.js",
    output: {
        path: path.resolve(__dirname, "app", "asset", ""
    }
}


// routes.rb 
    Rails.application.routes.draw do 
        root to: "static_page#root
        "   
    