const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const { PDFDocument } = require('pdf-lib');
const cors = require('cors');
 // Import node-fetch for making HTTP requests


const app = express();
const port = 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        // Convert uploaded file to PDF
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();

        // Fetch and load the custom font file as a buffer
        // const fontUrl = 'http://localhost:5000/upload';
        const fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
// Replace with your actual font URL
        const fontResponse = await fetch(fontUrl);
        const fontBuffer = await fontResponse.buffer();

        // Embed the font into the PDF document
        const customFont = await pdfDoc.embedFont(fontBuffer);

        // Add text to the page using the embedded font
        page.drawText('Hello, PDF!', {
            x: 50,
            y: height - 50,
            size: 30,
            font: customFont,
        });

        // Save the PDF document as bytes
        const pdfBytes = await pdfDoc.save();

        // Set headers and send the PDF as response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
        res.send(pdfBytes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error converting file to PDF');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
