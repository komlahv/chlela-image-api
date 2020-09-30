"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFrame = void 0;
const tslib_1 = require("tslib");
const jimp_1 = tslib_1.__importDefault(require("jimp"));
exports.addFrame = (imageData) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const base64DataTrim = imageData.replace(/^data:image\/\w+;base64,/, '');
    const image = yield jimp_1.default.read(Buffer.from(base64DataTrim, 'base64'));
    const base = yield jimp_1.default.read('src/blackFrame.jpg');
    const frame = yield jimp_1.default.read('src/goldFrame.png');
    frame.resize(756, 599);
    image.resize(656, 499);
    base.resize(756, 599);
    base.composite(image, 50, 50);
    base.composite(frame, 2, -2);
    const framedImageData = yield base.getBase64Async('image/png');
    return framedImageData;
});
