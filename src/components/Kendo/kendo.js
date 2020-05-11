import React, { Component } from 'react'
import { Popup } from '@progress/kendo-react-popup'
class kendo extends Component {
    anchor = null;
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: `.popup-content { padding= 30px; color: #787878; background-color: #fcf7f8;
                         border: 1px solid rgba(0,0,0,.05);  }` }} />

                <button className="k-button" onClick={this.onClicks} ref={(button) => {
                    this.anchor = button;
                }}  >
                    {this.state.show ? 'Hide' : 'Show'}
                </button>
                <Popup anchor={this.anchor} show={this.state.show} popupClass={'popup-content'}>
                    Hai Popup
                    </Popup>

                <label>
                    <input type="checkbox" ref="check_me" value='hello' onChange={ this.handleChecked }/> Check me out
        </label>
            </div>
        );
    }
    handleChecked = () => { console.log(this.refs.check_me.value); }        
      
    onClicks = () => { this.setState({ show: !this.state.show }); }
}

export default kendo;