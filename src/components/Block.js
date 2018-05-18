import React from 'react';

class Block extends React.Component {
    render() {
        return(
            <div className="block">
                <iframe src={this.props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
            </div>
        );
    }
}

export default Block;