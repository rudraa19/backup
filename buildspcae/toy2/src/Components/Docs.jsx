import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import Code from "./Code";
import InlineCode from "./InlineCode"
import './Docs.css';
import { useParams } from "react-router-dom";

const Docs = () => {
    const { language, name } = useParams();
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const article = await import(`../markdown/${language}/${name}.md?raw`);
                setPostContent(article.default);
            } catch (error) {
                console.error("Error loading markdown file:", error);
                setPostContent("Error loading article.");
            }
        };

        fetchMarkdown();
    }, [language, name]);

    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <Markdown options={{
                        overrides: {
                            code: {
                                component: Code
                            },
                            span: {
                                component: InlineCode
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

export default Docs;
