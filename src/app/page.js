import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
            <h1>Welcome to My Blog!</h1>
            <Link href="/Blog">
                <span className="link">Go to Blog</span>
            </Link>
        </div>
    );
}
