import React, { Component } from 'react'
import mck from './JSON/MCKTemplate.json'
import tf from './JSON/TFTemplate.json'
import mcs from './JSON/MCSTemplate.json'
import mcms from './JSON/MCMSTemplate.json'
import multi from './JSON/MULTITemplate.json'
class Template extends Component {
    state = {
        value: null,
    };
    

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };
    render() {
        const languages = {
            mcck: require('./JSON/MCKTemplate.json'),            
          };
        return (
            <div >
                <div><h1 align="center">Item Creation</h1>
                    <hr className='new'></hr>
                </div>
                &emsp;&emsp; <b>Task Type :</b>&emsp;
                <select id="dropdown" onChange={this.handleChange} >
                    <option >Select Task Type</option>
                    <option value="1">Multiple Choice - Keyed</option>
                    <option value="2">True/False</option>
                    <option value="3">Multiple Choice - Scaled</option>
                    <option value="4">Multiple Choice - Multiple Selection</option>
                    <option value="5">Multi-Part</option>
                </select>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <b >Task Sub-Type :</b>&emsp;
                <select id="dropdown" disabled>
                    <option >Select Task Sub-Type</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <hr></hr>
                {(() => {
                    switch (this.state.value) {
                        case "1": return (languages.mcck.map(obj => <Item obj={obj} />))
                        case "2": return (tf.map(obj => <Item obj={obj} />))
                        case "3": return (mcs.map(obj => <Item obj={obj} />))
                        case "4": return (mcms.map(obj => <Item obj={obj} />))
                        case "5": return (multi.map(obj => <MultiItem obj={obj} />))
                        default: return ("")
                    }
                })()}
                <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
                <style dangerouslySetInnerHTML={{ __html: `.new {border: 2px solid green; } ` }} />
            </div>

        )
    }
}
export default Template

const Item = props => {
    return (
        <div>
            <br />
            <table><tr>
                &emsp; &emsp; <td><b>{props.obj.stem.label}
                    <br />
                </b>&emsp; <td>
                        <textarea rows="5" cols="60" className="area" />
                    </td></td>&emsp; &emsp;

                <td className="tab"  >

                    {props.obj.responses.map(responses =>
                        <tr >
                            <td > <b>  <br />
                                {responses.label} &emsp;
                                {
                                    props.obj.tasktype == "mcs" ?
                                        <b> score:<input type="number" placeholder={responses.score} className="size"></input></b>
                                        : <input type="checkbox"></input>
                                }
                            </b>
                                <br />
                                <textarea rows="4" cols="60" className="area" /> </td>
                            <br /> <br />
                        </tr>
                    )}</td></tr>
            </table>
            <style dangerouslySetInnerHTML={{ __html: `.size {width: 3em;} ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.area {border:solid 1px orange;} ` }} />
        </div>
    );
};

const MultiItem = props => {
    return (
        <div>
            <table>
                <tr>
                    &emsp; &emsp;
                    <td>
                        <br />
                        <td><b>
                            <label >{props.obj.part1.stem.label}</label>
                            <br />
                            <br />
                            <textarea rows="4" cols="60" className="area" />
                        </b></td>
                        {props.obj.part1.responses.map(responses =>
                            <tr>
                                <td><b>
                                    <br />
                                    <label >{responses.label}</label>
                                    <input type="checkbox"></input>
                                    <br />
                                    <textarea rows="4" cols="60" className="area" />
                                    <br />
                                </b> </td>
                            </tr>
                        )}
                    </td >&emsp; &emsp;
                    <td className="tab">
                        <td><b>
                            <label >{props.obj.part2.stem.label}</label>
                            <br />
                            <br />
                            <textarea rows="4" cols="60" className="area" />
                        </b> </td>
                        {props.obj.part2.responses.map(responses =>
                            <tr>
                                <td><b>
                                    <br />
                                    <label >{responses.label}</label>
                                    <input type="checkbox"></input>
                                    <br />
                                    <textarea rows="4" cols="60" className="area" />
                                    <br />
                                </b></td>
                            </tr>
                        )}</td>
                </tr>
            </table>
            <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.area {border:solid 1px orange;} ` }} />
        </div>
    );
};