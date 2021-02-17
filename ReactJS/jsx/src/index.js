// Import React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

// create recat Component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Gaurav"
                    timeAgo="Today at 4:32PM"
                    commentText="Haha... Nice One!"
                    profileImg={faker.image.people() + "?random=" + Math.random() * 1000}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sahil"
                    timeAgo="Today at 5:07PM"
                    commentText="Didn't expect this...!"
                    profileImg={faker.image.people() + "?random=" + Math.random() * 1000}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kashish"
                    timeAgo="Today at 8:48PM"
                    commentText="Amazing!"
                    profileImg={faker.image.people() + "?random=" + Math.random() * 1000}
                />
            </ApprovalCard>
        </div>
    );
};

// Take the react component and show on the screen
ReactDOM.render(<App />, document.getElementById('root')
);