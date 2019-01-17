let messagesArray = [];
let messageID = 0;

module.exports = {
    create: function(req,res){
        const { text, time } = req.body
        messagesArray.push( { id: messageID,text: text ,time: time } )
        res.status(200).send(messagesArray)
    },
    read: function(req,res){
        res.status(200).send(messagesArray);
    },
    update: function(req,res){
        const {text: textMess} = req.body
        const updateID = parseInt(req.params.id);
        console.log(textMess)
        const messageID = messagesArray.findIndex((element) => {
            return element.id === updateID
        })
        messagesArray[messageID].text = textMess || messagesArray[messageID].text;
        res.status(200).send(messagesArray);
    },

    delete: function(req,res){
        const deleteID = req.params.messageID;
        const messageID = messagesArray.findIndex((element) => {
            return element.messageID === deleteID
        })

        messagesArray.splice(messageID,1);
        res.status(200).send(messagesArray);
    }

}


