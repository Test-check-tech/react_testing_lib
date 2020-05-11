import React from "react";
import springboot from "../api/springboot";
import "./App.css";

class HealthCheck extends React.Component {
	state = { server: "INIT", color:"black" };

	componentDidMount() {
		this.checkServerHealth();
		setInterval(() => this.checkServerHealth(), 10000);
	}
	
	checkServerHealth = async ()=> {
		try { 
			await springboot.get("/actuator/health");
			this.setState({server:"UP", color:"green"});
		} catch (error) {
			this.setState({server:"DOWN", color:"red"});
		}
	}
	
	render() {
	  return (
	   <div className="main">
	    <div className="ui card">
	     <div className="content">
	      <h3>Content Builder Server Monitor</h3>
	     </div>
	     <div className={this.state.color}>
	     	Server is {this.state.server}
	     </div>
	    </div>
	   </div>
	  );
	 }
}
export default HealthCheck;