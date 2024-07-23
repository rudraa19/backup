import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import article from '../markdown/article.md?raw';
import Code from "./Code";

const Post = () => {
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        setPostContent(article);
    }, []);


    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <h1>Posts</h1>
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
