const router = require('express').Router();
const { getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact} = require('../controllers/contactController');


//CRUd

//create contact and get all contacts
router.route('/contact').post(createContact).get(getContacts);

//get one contact and update contactand delete contact
router.route('/contact/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;