const express = require('express');
const { validationResult } = require('express-validator');
const businessValidator = require('../validators/businessValidator');
const businessController = require('../controllers/businessController');

const router = express.Router();

// Middleware to check validation errors
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Routes
router.post(
    '/',
    businessValidator.create,
    validateRequest,
    businessController.createBusiness
);

router.get('/', businessController.getAllBusinesses);

router.get(
    '/:id',
    businessValidator.idParam,
    validateRequest,
    businessController.getBusinessById
);

router.put(
    '/:id',
    businessValidator.idParam,
    validateRequest,
    businessController.updateBusiness
);

router.delete(
    '/:id',
    businessValidator.idParam,
    validateRequest,
    businessController.deleteBusiness
);

module.exports = router;
