"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const imageHandler_1 = require("../services/imageHandler");
const router = express_1.Router();
router.get('/', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        message: 'awake',
    });
}));
router.post('/', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { imageData } = req.body;
    if (!imageData) {
        return res.status(400).json({
            error: 'bad request',
        });
    }
    const framedImageData = yield imageHandler_1.addFrame(imageData);
    return res.status(200).json({
        imageData: framedImageData,
    });
}));
exports.default = router;
