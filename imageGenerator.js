module.exports = async(image) => {
    const { createCanvas, loadImage } = require('canvas')
    const canvas = createCanvas(350, 350)
    const ctx = canvas.getContext('2d')
    
    return await loadImage(image).then((image) => {
        ctx.drawImage(image, 0, 0, 350, 350)
        return canvas.toDataURL()
    })
}