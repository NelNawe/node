const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/posts/:postId/comments", commentController.getCommentForPost);
router.post("/posts/:postId/comments", commentController.addCommentToPost);
router.delete("/comment/:commentId", commentController.deleteComment);

module.exports = router;