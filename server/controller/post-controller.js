import { request, response } from "express";
import Post from '../model/post.js';



export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        return response.status(200).json('Post saved successfully');
    } catch (error) {
        return response.status(500).json(error);
    }
}

// export const getAllPosts = async(request,response) => {
//     let category = request.query.category;
//     let posts;
//     try {
//         if(category) {
//             posts = await Post.find({ categories: category })
//         } else {
//              posts = await Post.find({});
//         }

//         return response.status(200).json(posts);
//     } catch (error) {
//         return response.status(500).json({ msg: error.message })
//     }
// }

// export const getAllPosts = async (request, response) => {
//     let category = request.query.category;
//     let posts;
//     try {
//       console.log("Category:", category); // Add this console.log statement
//       if (category) {
//         posts = await Post.find({ categories: category });
//       } else {
//         posts = await Post.find({});
//       }
  
//       console.log("Posts:", posts); // Add this console.log statement
//       return response.status(200).json(posts);
//     } catch (error) {
//       return response.status(500).json({ msg: error.message });
//     }
//   };

export const getAllPosts = async (request, response) => {
    try {
      let category = request.query.category;
      let posts;
  
      if (category && category !== "All") {
        posts = await Post.find({ categories: category });
      } else {
        posts = await Post.find({});
      }
  
      return response.status(200).json(posts);
    } catch (error) {
      return response.status(500).json({ msg: error.message });
    }
};

export const getPost = async (request,response) => {
  try {
    const post = await Post.findById(request.params.id);

    return response.status(200).json(post);
  } catch (error) {
    return response.status(500).json({ msg: error.message })
  }
}
  
  
  