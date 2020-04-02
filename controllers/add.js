const Shoe = require('../models/shoe')


exports.addShoe = async(req,res) => {
    const shoeExists = await Shoe.findOne({productcode: req.body.productcode})
    if(shoeExists){
        return res.status(403).json({
            error:"Shoe is already Available"
        })
    }
    const shoe = await new Shoe(req.body)
    await shoe.save()
    res.status(200).json({message: "Shoe added sucessfully"})
}



