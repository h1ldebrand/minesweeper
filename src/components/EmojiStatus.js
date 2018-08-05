import React from 'react';

import Emoji from './Emoji.js';

import './EmojiStatus.css';

export default props => {
    const { status, mapper } = props;

    return (
        <div className="em-status-base">
            <Emoji type={mapper[status]} />
        </div>
    );
};
