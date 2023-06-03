import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register = (req, res) => {

    const { name, email, password } = req.body;
    // CHECK EXISTING USER

    const q = "SELECT * FROM USERS WHERE email = ? OR username = ?";

    db.query(q, [email, name], async (err, data) => {

        if (err) return res.json(err);

        if (data.length) return res.status(409).json("User already exist");

        const salt = await bcrypt.genSalt(10);
        bcrypt.hash(password, salt, async (error, data) => {
            if (error) {
                res.send(error);
            }
            else {
                const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
                const values = [
                    name,
                    email,
                    data,
                ]

                db.query(q, [values], async (err, data) => {
                    if (err) return res.json(err);

                    return res.status(200).json("User has been created.")
                });
            }
        })

        //Hash the password and create a user
        // const salt = bcrypt.genSalt(10);
        // const hash = bcrypt.hashSync(password, salt);


    });

}

export const login = (req, res) => {
    const { email } = req.body;

    const q = "SELECT * FROM USERS WHERE email = ?";
    try {
        db.query(q, [email], (err, data) => {

            if (err) return res.json(err);
    
            if (data.length === 0) res.status(404).json("User not exist, need to be register first!");

            const isPassCorrect = bcrypt.compareSync(req.body.password, data[0].password);
            if(!isPassCorrect)
                return res.status(400).json({ "message" : "Wrong email or password"});
            
            const token = jwt.sign({id:data[0].id},"jwtSecretKey");
            console.log(token);
            
            const {password, ...other} = data[0];
            res.cookie("access_token", token)
            .status(200)
            .json(other);
            // res.send('Cookie set!');

            // res.status(201).json(other);

            // bcrypt.compare(req.body.password, data[0].password,
            //     async (error, result) => {
            //         if(error){
            //             res.json(error);
            //         }
                    
            //         if(!result) 
            //         return res.status(400).json({
            //             "message" : "Wrong email or password",
            //         });
        
            //         if(result){
            //             const token = jwt.sign({id:data[0].id},"jwtSecretKey");

            //             const {password, ...other} = data[0];
            //             res.cookie("access_token", token, {
            //             httpOnly: true
            //             }).status(201).json(other);
            //             return res.status(201).json({
            //                 "authenticate" : true,
            //             });
            //         }
            //     }
            // );
            
        });
        
    } catch (error) {
        return res.status(500).json({
            "error" : "Internal Server error",
        });        
    }
    
     
}

export const logout = (req, res) => {

}