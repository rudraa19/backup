import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import Code from "./Code";
import './Post.css'
import { useParams } from "react-router-dom";

const Post = ({ name='article' }) => {
    const params = useParams();
    name = params.name;
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const article = await import(`../markdown/${name}.md?raw`);
                setPostContent(article.default);
            } catch (error) {
                console.error("Error loading markdown file:", error);
                setPostContent("Error loading article.");
            }
        };

        fetchMarkdown();
    }, [name]);

    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <Markdown options={{
                        overrides: {
                            code: {
                                component: Code
                            }
                        }
                    }}>
                        {postContent}
                    </Markdown>
                </div>
            </div>
        </article>
    );
};

export default Post;
