const Joi = require("joi");
module.exports.ListingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country:Joi.string(),
    price: Joi.number().required().min(0),
    imageUrl: Joi.string().allow("",null),
}).required();

module.exports.reviewSchema=Joi.object({
   review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required(),
   }).required()
});