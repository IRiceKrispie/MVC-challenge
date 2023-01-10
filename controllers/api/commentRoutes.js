const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.session.user_name);
        const newComment = await Comment.create({
            ...req.body,
            user_id:req.session.user_id,
            user_name:req.session.user_name,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;