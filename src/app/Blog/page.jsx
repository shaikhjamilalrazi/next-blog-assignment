import Link from "next/link";
import blogData from "../blogData";
import styles from "./blog.module.css";

const Blog = () => {
    return (
        <div className={styles.container}>
            <h1>Blog Posts</h1>
            <ul className={styles.postList}>
                {blogData.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <Link href={`/Blog/${post.id}`}>
                            <span className={styles.postLink}>
                                {post.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
