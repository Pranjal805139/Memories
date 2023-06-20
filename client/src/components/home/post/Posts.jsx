import { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import { useSearchParams ,Link} from "react-router-dom";


import {API} from '../../../service/api';

// components
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({ category: category || ''});
            if(response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    }, [category])

    return (
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link to={`details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                             <Post post={post}/>
                        </Link>
                    </Grid>
                )) : <Box style={{color: '#878787', margin: '30px 80px', fontSize: 18}}>No data available to display</Box>
            }
        </>
    )
}

export default Posts;

// ----------------------------------------------------------------------------------------------------


// import { useEffect, useState } from "react";
// import { Box, Grid } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { API } from "../../../service/api";
// import Post from "./Post";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const category = searchParams.get("category");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await API.getAllPosts({ category: category || "" });
//         if (response.isSuccess) {
//           setPosts(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchData();
//   }, [category]);

//   return (
//     <>
//       {posts && posts.length > 0 ? (
//         <Grid container spacing={2}>
//           {posts.map((post) => (
//             <Grid key={post.id} item lg={3} sm={4} xs={12}>
//               <Post post={post} />
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Box
//           style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}
//         >
//           No data available to display
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;

// ----------------------------------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import { Box, Grid } from "@mui/material";
// import { useSearchParams } from "react-router-dom";

// import { API } from "../../../service/api";
// import Post from "./Post";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category");

//   useEffect(() => {
//     const fetchData = async () => {
//       console.log("Category:", category); // Add this console.log statement
//       let response = await API.getAllPosts({ category: category || "" });
//       console.log("Response:", response.data); // Add this console.log statement
//       if (response.isSuccess) {
//         setPosts(response.data);
//       }
//     };
//     fetchData();
//   }, [category]);

//   console.log("Posts:", posts); // Add this console.log statement

//   return (
//     <>
//       {posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <Grid item lg={3} sm={4} xs={12} key={post.id}>
//             <Post post={post} />
//           </Grid>
//         ))
//       ) : (
//         <Box
//           style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}
//         >
//           No data available to display
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;

