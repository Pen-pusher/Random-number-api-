// 1 Create a package.json to describe the metadata of your app.
// 2 Create a file called app.js, which will contain all of your code.
// 3 Create an Express application in app.js and attach a single route that gives a
// random number.

// Anyone who requests the API must send a minimum value and a maximum value.
// ■ Your service will parse those values, calculate your random number, and send it
// back as JSON.


var express = require("express");
var app = express();
app.get("/random/:min/:max", function (req, res) {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
});
app.listen(3000, function () {
    console.log("App started on port 3000");
});


// 1 Set the HTTP status code to 400. If you’ve ever seen a 404 error, this is only a variant:
// it signals that something about the user’s request was bad.We’ll talk more
// about it later in this chapter.
// 2 Send a JSON object.In this case, you send an object that has the error.
// 3 Return.If you didn’t return, you’d continue on to the rest of the function and
// you’d send the request twice, and Express would start throwing nasty errors.