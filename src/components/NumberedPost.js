import React, {useState} from 'react';
import Separator from './common/Separator';
import Button from './common/Button';

import '../assets/css/NumberedPost.css'

import numbered1 from '../assets/img/numbered-post1.jpg';
import numbered2 from '../assets/img/numbered-post2.jpg';

const NumberedPost = (props) => {
    const [posts] = useState([
        {
            title: "Surf Training",
            content: "By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.",
            thumb: `${numbered1}`,
            category: "Surf Camps",
            path: "#"

        },
        {
            title: "Point Break",
            content: "By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.",
            thumb: `${numbered2}`,
            category: "Surf Camps",
            path: "#"
        }
    ]);

    return(
        
        <div className="numbered-posts container">
            {posts.map((post, index) => (
                <div key={index} className={index %2 !== 0 ? "reverse numbered-post" : "numbered-post"}>
                    <div className="details">
                        <div className="post-index">{index < 9 ? `0${index+1}` : index+1}</div>
                        <h3>
                            {post.title}
                            <Separator width="20px" height="2px" color="#5da8ef" position="left" />
                        </h3>
                        <p>
                            {post.content}
                        </p>
                        <Button title="READ MORE" link={post.path} />
                    </div>
                    {post.thumb && (
                        <div className="titled-image">
                            <img src={post.thumb} alt={post.title} />
                            <div className="side-title">
                                <span>{post.category}</span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            
        </div>
    )
}

export default NumberedPost;