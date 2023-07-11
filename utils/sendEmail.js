const nodeMailer = require("nodemailer")

const sendMail = async (to,messageContent) =>{
    try{
        //create transporter 
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user:'aryanmehta376@gmail.com',
                pass:'pcsaaduvsxzkctai'
            }
        })
         //message obj
         const message = {
            to,
            subject: "New Message from NodeMailer App",
            html: `
            <h3>You have received a new message from NodeMailer App</h3>
            <p>${messageContent}</p>
            `
         }
         //send the email
         const info = await transporter.sendMail(message)
         console.log("Message sent",info.messageId)
    }catch(err){
        console.log(err)
        throw new Error("Email could not be sent")

    }
}

module.exports = sendMail