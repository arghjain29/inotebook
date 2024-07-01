const router = require('express').Router();
const Note = require('../models/Note');
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');




//* ROUTE 1 : Get all The NOTES using : GET " /api/notes/fetchallnotes". Login Required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    
    try {
        const notes = await Note.find({ user: req.user.id });
       
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


//* ROUTE 2 : ADD The NOTES using : POST " /api/notes/addnote". Login Required

router.post('/addnote', fetchuser, [

    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be minimum 5 character").isLength({ min: 5 }),

], async (req, res) => {
    
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const { title, description, tag } = req.body;

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savednote = await note.save();
        res.json(savednote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


//* ROUTE 3 : Update The NOTES using : PUT " /api/notes/updatenote". Login Required

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        //* Create a newNote object
        const newNote = {};

        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };


        //* Find the note to be updated and update it

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });  //* new:true is used to get the updated data

        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


//* ROUTE 4 : Delete The NOTES using : DEL " /api/notes/deletenote". Login Required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //* Find the note to be deleted and delete it

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);  //* new:true is used to get the updated data

        res.json({ "Success": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});



module.exports = router; 