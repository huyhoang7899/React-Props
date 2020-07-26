import React from 'react';

class TabMenu extends React.Component {
    render() {
        return(
                <div className="menu d-flex flex-column align-items-center justify-content-center shadow bg-white rounded">
                    <img src={this.props.items.icon} alt="Home icon" width="48px"></img>
                    <a href="/home">{this.props.items.label}</a>
                </div>
        )
    }
}

export default TabMenu