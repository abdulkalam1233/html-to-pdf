const fs = require('fs');
const htmlPdf = require('html-pdf');
const { PDFDocument } = require('pdf-lib');

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

// pass array of html strings and path to save file
async function savePdf(htmlStrings, filePath) {
    try {
        if (!filePath.includes('.pdf')) {
            filePath += '.pdf';
        }
        const doc = await PDFDocument.create();
        let index = 0;
        if (Array.isArray(htmlStrings)) {
            for (const page of htmlStrings) {
                const buffer = await htmlToPdfBuffer(page);
                const cover = await PDFDocument.load(buffer);
                const contentPages = await doc.copyPages(cover, cover.getPageIndices());
                for (const p of contentPages) {
                    doc.addPage(p);
                }
                index += 1;
            }
        } else {
            throw { message: 'htmlStrings should be array of strings.', errorCode: 500 }
        }
        return await fs.writeFileSync(filePath, await doc.save());
    } catch (error) {
        console.error('ERROR occurred in utils.file.savepdf().');
        console.error(error);
        throw error;
    }
}

module.exports = savePdf;
