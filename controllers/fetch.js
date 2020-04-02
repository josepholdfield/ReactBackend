const Shoe = require('../models/shoe')


exports.allShoes = (req,res) => {
    Shoe.find((err, shoes) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        else {
        return res.json({ shoes })
        }
    })
}
