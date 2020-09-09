const savePdf = require('../index');

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

savePdf(htmls, 'example.pdf')