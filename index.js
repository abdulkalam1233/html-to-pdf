const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const { htmlToPdfFile, htmlToPdfBuffer } = require('./lib')

// pass array of html strings and path to save file
async function convertHtmlStringsToPdf(htmlStrings, filePath) {
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

async function convertHtmlStringToPdf(htmlString, filePath) {
    try {
        if (!filePath.includes('.pdf')) {
            filePath += '.pdf';
        }
        await htmlToPdfFile(htmlString, filePath);
        return filePath;
    } catch (error) {
        console.error('ERROR occurred in utils.file.savepdf().');
        console.error(error);
        throw error;
    }
}

async function convertHtmlFileToPdf(htmlFilePath, savePdfPath) {
    try {
        if (!savePdfPath.includes('.pdf')) {
            savePdfPath += '.pdf';
        }
        await htmlToPdfFile(fs.readFileSync(htmlFilePath).toString('utf8'), savePdfPath);
        return savePdfPath;
    } catch (error) {
        console.error('ERROR occurred in utils.file.savepdf().');
        console.error(error);
        throw error;
    }
}

module.exports = {
    convertHtmlStringsToPdf,
    convertHtmlStringToPdf,
    convertHtmlFileToPdf,
};
