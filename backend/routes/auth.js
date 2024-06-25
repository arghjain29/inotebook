const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//* Create a User using : POST " /api/auth/createUser"
router.post('/createUser', [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password must be atleast 5 character").isLength({ min: 5 })
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    //* Check whether the user with this email exists already

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already exists" });
        }

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.send("User Created Successfully");
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;