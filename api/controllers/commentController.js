const Comment = ("../models/commentModel");

exports.getCommentsForPost = async(req, res) => {
    try{
        const postId = req.params.postId;
        const comments = await Comment.find({ postId });
        res.status(200).json(comments);
    } catch (error){
        res.status(500).json({ message: "Erreur serveur."});
    }
}
exports.addCommentToPost = async(req, res) => {
    try{
        const postId = req.params.postId;
        const { content } = req.body;
        const newComment = new Comment({
            content,
            postId
        });
        const comment = await newComment.save;
        res.status(201).json(comment);
    } catch (error){
        res.status(500).json({ message: "Erreur serveur."});
    }
}
exports.deleteComment = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const deleteComment = await Comment.findByIdAndRemove(commentId);

        if (!deleteComment) {
            res.status(404).json({ message: "Commentaire non trouvé." });
            return;
        }

        res.status(204).send(); // 204 No Content, car le post a été supprimé avec succès
    } catch (error){
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur"});
    }
}