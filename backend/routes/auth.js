const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');



const JWT_SECRET = "I_AM_A_Iron_man";

//* ROUTE 1 : Create a User using : POST " /api/auth/createUser" . No Login Required
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

        const salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const AuthTokken = jwt.sign(data, JWT_SECRET);

        // res.send("User Created Successfully");
        res.json({ AuthTokken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



//* ROUTE 2 : Authenticate  a User using : POST " /api/auth/login". No Login Required

router.post('/login', [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password cannot be blank").exists()
], async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const AuthTokken = jwt.sign(data, JWT_SECRET);
        res.json({ AuthTokken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


//* ROUTE 3 : Getting loggedin User details using : POST " /api/auth/getuser". Login Required

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});






module.exports = router;