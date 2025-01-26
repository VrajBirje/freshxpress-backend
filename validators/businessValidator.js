const { body, param } = require('express-validator');

const businessValidator = {
    create: [
        body('business_type').notEmpty().withMessage('Business type is required.'),
        body('business_name').notEmpty().withMessage('Business name is required.'),
        body('owner').notEmpty().withMessage('Owner name is required.'),
        body('address').notEmpty().withMessage('Address is required.'),
        body('city').notEmpty().withMessage('City is required.'),
        body('state').notEmpty().withMessage('State is required.'),
        body('country').notEmpty().withMessage('Country is required.'),
        body('pincode').notEmpty().withMessage('Pincode is required.'),
        body('phone_number').notEmpty().withMessage('Phone number is required.'),
        body('email').isEmail().withMessage('Valid email is required.'),
    ],
    idParam: [
        param('id').isInt().withMessage('ID must be an integer.'),
    ],
};

module.exports = businessValidator;
