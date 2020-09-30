import Jimp from 'jimp';

export const addFrame = async (imageData: string) => {
  const base64DataTrim: string = imageData.replace(
    /^data:image\/\w+;base64,/,
    ''
  );
  const image: Jimp = await Jimp.read(Buffer.from(base64DataTrim, 'base64'));
  const base: Jimp = await Jimp.read('src/blackFrame.jpg');
  const frame: Jimp = await Jimp.read('src/goldFrame.png');
  frame.resize(756, 599);
  image.resize(656, 499);

  // add border around images to avoid frame overlap
  base.resize(756, 599);
  base.composite(image, 50, 50);

  // add frame
  base.composite(frame, 2, -2);

  const framedImageData: string = await base.getBase64Async('image/png');

  return framedImageData;
};
