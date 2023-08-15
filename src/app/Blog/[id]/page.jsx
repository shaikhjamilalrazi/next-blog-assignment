import blogData from "../../blogData";
import styles from "./singlePost.module.css";

const Post = ({ params }) => {
    const id = params.id;
    const post = blogData.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postContent}>{post.content}</p>
            <p className={styles.postDate}>Date: {post.date}</p>
        </div>
    );
};

export default Post;
