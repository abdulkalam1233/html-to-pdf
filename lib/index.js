const htmlPdf = require('html-pdf');

function htmlToPdfBuffer(html) {
    return new Promise((resolve, reject) => {
        htmlPdf.create(html, {
            format: 'A4',
            quality: '100',
            border: {
                top: '0.3in',            // default is 0, units: mm, cm, in, px
                right: '0.3in',
                bottom: '0.3in',
                left: '0.3in',
            },
        }).toBuffer((error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        });
    });
}

// return file data
function htmlToPdfFile(html, filePath) {
    return new Promise((resolve, reject) => {
        htmlPdf.create(html, {
            format: 'A4',
            quality: '100',
            border: {
                top: '0.3in',            // default is 0, units: mm, cm, in, px
                right: '0.3in',
                bottom: '0.3in',
                left: '0.3in',
            },
        }).toFile(filePath, (error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = {
    htmlToPdfBuffer,
    htmlToPdfFile,
}
