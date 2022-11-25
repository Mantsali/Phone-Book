const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');


getContacts = asyncHandler(async (req, res) => {
   // res.send();
   const contacts = await Contact.find();
   
    res.status(200).json(contacts);
})


getContact = asyncHandler(async (req, res) => {
    //const id = req.params.id;
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
   // res.send(`get contact id ${id}`);
   res.status(200).json(contact);
})


createContact = asyncHandler(async (req, res) => {
   // res.send('create contact');

   
   if(!req.body.fullname || !req.body.email || !req.body.phone ){
        res.status(400).json({ message: `Please enter parameters` });
   }else{
        const contact = await Contact.create({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            profile_url: req.body.profile_url
        });
        res.status(200).json(contact);
   }

})
updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    //res.send(`update contact id ${id}`);
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    res.status(200).json(updatedContact);
})
deleteContact = asyncHandler(async (req, res) => {
    //const id = req.params.id;
    //res.send(`delete contact id ${id}`);

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }

    await contact.remove();

    res.status(200).json({ id: req.params.id });
})


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}