// blog
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import hello from "../../_posts/hello.md";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
`;

const BlogPage = () => {
    return (
        <>
            <h1>Blog Page</h1>
            <Wrapper>
                <div>
                    <ReactMarkdown >
                        
                    </ReactMarkdown>
                </div>
            </Wrapper>
        </>
    );
};

export default BlogPage;
