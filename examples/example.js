const path = require("path");
const { convertHtmlStringsToPdf, convertHtmlStringToPdf, convertHtmlFileToPdf } = require('../index');

const htmls = [`
    <!DOCTYPE html>
                <html>
                    <head>
                    <title>Page Title</title>
                    </head>
                    <body>
                    
                    <h1>This is a Heading</h1>
                    <p>This is a paragraph.</p>
                    
                    </body>
                </html>`,
    `<!DOCTYPE html>
                <html>
                    <head>
                    <title>Page Title</title>
                    </head>
                    <body>
                    
                    <h1>This is a Heading</h1>
                    <p>This is a paragraph.</p>
                    
                    </body>
                </html>`
]

async function generateHtmlFromStrings() {
    try {
        await convertHtmlStringsToPdf(htmls, 'multi.pdf')
    } catch (error) {
        console.log(error);
    }
}

async function generateHtmlFromString() {
    try {
        await convertHtmlStringToPdf(htmls[0], 'single.pdf')
    } catch (error) {
        console.log(error);
    }
}

async function generateHtmlFromFile() {
    try {
        await convertHtmlFileToPdf(path.resolve('.', 'examples/example.html'), 'fromFile.pdf')
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    try {
        await generateHtmlFromStrings();
        await generateHtmlFromString();
        await generateHtmlFromFile();
    } catch (error) {
        console.log(error);
    }
})()
