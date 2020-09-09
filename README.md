# node-html-to-pdf
A Node wrapper for generating the single pdf for multiple html templates.
While often in Node this is achieved through phantomjs, and pdf-lib.

# Installation
To install html-to-pdf simply use NPM:

> npm i @vinevitable/html-to-pdf


# How To Use html-to-pdf
To use html-to-pdf in your Node application, just require it:

You can use convertHTMLPdf to convert HTML strings to PDF. 
Simply provide a array of html strings and saving path to function.

````
const {convertHtmlStringsToPdf, convertHtmlStringToPdf, convertHtmlFileToPdf} = require('@vinevitable/html-to-pdf');

try{
    const htmlStrings = [`<h1>Hello</h1>`,`<h1>World</h1`]

    convertHtmlStringsToPdf(htmlStrings,savingFilePathWithName).catch(error){
        throw error;
    }
} catch(error){
    console.log(error);
}

try{
    const htmlString = `<h1>Hello</h1>`;

    convertHtmlStringToPdf(htmlString,savingFilePathWithName).catch(error){
        throw error;
    }
} catch(error){
    console.log(error);
}

try {
        await convertHtmlFileToPdf(filePath, savingFilePathWithName)
    } catch (error) {
        console.log(error);
    }
````

# Note:
````
use html {
    zoom: 0.5 // user your choice of zoom to avoid big font in pdf
}
place this in styles

Currently flex is not supporting use below flex to avoid the allignment issues.
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-self: auto;

or else use custom css in styles

Currently  we are using default pdf attributes like below
format: 'A4',
quality: '100',
border: {
    top: '0.3in',            // default is 0, units: mm, cm, in, px
    right: '0.3in',
    bottom: '0.3in',
    left: '0.3in',
},

Soon we will provide user input for the above attributes.
````
