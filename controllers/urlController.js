const shortId = require("shortid");
const urlModel = require("../models/schema");

async function generatenewShortUrl(req, res) {
    try {
        const body = req.body;
        console.log("Request Body:", body); // Debugging

        if (!body.url) {
            return res.status(400).json({ error: "Bad request, give url" });
        }

        const generatedShortid = shortId.generate(); // Generate a unique short ID
        //console.log("Generated Short ID:", generatedShortid); // Debugging

        const newUrl = new urlModel({
            shortid: generatedShortid, // Matches the schema
            redirectedUrl: body.url,
            visitedHistory: [],
        });

        await newUrl.save(); // Save the new URL to the database
        console.log("Saved URL to database:", newUrl); // Debugging

        // Respond with success and the short URL
        return res.status(201).json({ message: "Short URL created", shortID: generatedShortid });
    } catch (error) {
        console.error("Error in generating short URL:", error); // Log error details
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { generatenewShortUrl };
