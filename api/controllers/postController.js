const Post = require("../models/postModel");

exports.listAllPosts = async(req, res) => {
    /* ES5
    Post.find({}, (error, posts) => {
            if(error) {
                res.status(500);
                console.log(error);
                res.json({message: "Erreur serveur"});
            } else {
                res.status(200);
                res.json(posts);
            }
        })
    */
    
    // ES6
    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.createAPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(201);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
exports.getAPost = async (req, res) => {
    try {
        constpostId = req.params.postId;
        const post = await Post.findById(postId);

        if (!post) {
            res.status(404).json({message: "Post non trouvé."});
            return;
        }
        res.status(200).json(getAPost);
    } catch (error){
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur"});
    }

    } 
exports.updateAPost = async (req, res) => {
        try{
            const postId = req.params.postId;
            const newData = req.body;
            const updatePost = await Post.findByIdAndUpdate(postId, newData, { new: true});
            
            if (!updatedPost) {
                res.status(404).json({ message: "Post non trouvé." });
                return;
            }
            res.status(200).json(updatePost);
       }catch (error){
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur"});
    }
}
exports.deleteAPost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const deletePost = await Post.findByIdAndRemove(postId);

        if (!deletePost) {
            res.status(404).json({ message: "Post non trouvé." });
            return;
        }

        res.status(204).send(); // 204 No Content, car le post a été supprimé avec succès
    } catch (error){
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur"});
    }
}
}