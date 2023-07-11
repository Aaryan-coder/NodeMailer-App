const express = require("express");
const sendMail = require("./utils/sendEmail")
const app = express();
const PORT = process.env.PORT || 9000//Creating port

//set engine
app.set("view engine", "ejs")

//serve static files
app.use(express.static("public"))
//pass the data from form
app.use(express.urlencoded({extended: false}))

//route to render email form
app.get("/",(req,res)=>{
    res.render("email-form")
})

//route to send mail
app.post("/send-email",async(req,res)=>{
    const{email,message} = req.body
    try{
        sendMail(email,message)
        res.render('email-form',{
            status: "success",
            message: "Email sent successfully"
        })
    }catch(err){
        console.log(error)
        res.render('email-form',{
            status: "error",
            message: "Error Sending mail"
        })
    }
})

//start the server
app.listen(PORT,console.log(`PORT is running on ${PORT}`))