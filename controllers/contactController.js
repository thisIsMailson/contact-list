const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
});

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
});

//@desc Create a contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
  console.log('The body is ', req.body);
  const { name, email, contact } = req.body;
  if (!name || !email || !contact) {
    res.status(400);
    throw new Error('All Fields are required');
  }
  res.status(201).json({ message: `Create contact` });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
