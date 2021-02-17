import React from 'react';

class Searchbar extends React.Component {

    onInputChange() {

    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onchange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;