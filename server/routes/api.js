var express = require('express');
var router = express.Router();
const Snippet = require("../models/Snippet")
/* GET home page. */
const Comment = require("../models/Comment")

router.get('/snippets', (req, res, next) => {
    Snippet.find({}, (err, snip) => {
        if (err) throw err;
        if (snip) {
            return res.json(snip);
        } else {
            console.log("Error finding snippets");
            return res.json({});
        }
    });
});

router.get("/snippets/:id", (req, res) => {
    Snippet.findOne({ _id: req.params.id }, (err, snip) => {
        if (err) throw err;
        if (snip) {
            console.log(snip)
            return res.json(snip);
        } else {
            console.log("Error finding spesific post");
            return res.json({});
        }
    })
})


router.post("/comment/:id", (req, res) => {
    Comment.find({}, (err, com) => {
        if (err) throw err;
        let id = req.params.id
        //console.log(id)

        Comment.create({
            commentID: id,
            commentText: req.body.commentText
        }), (err) => {


            if (err) throw err;

            return res.redirect("/")
        }
    })
})

router.get('/comment/:id', (req, res, next) => {
    Comment.find({}, (err, com) => {
        if (err) throw err;
        if (com) {
            return res.json(com);
        } else {
            console.log("Error finding snippets");
            return res.json({});
        }
    });
});


router.post("/snippets", (req, res) => {
    Snippet.create({
        username: req.body.username,
        title: req.body.title,
        text: req.body.text,
        code: req.body.code
    }, (err) => {
        if (err) throw err;
        return res.json({ "success": true });
    });
});




module.exports = router;
