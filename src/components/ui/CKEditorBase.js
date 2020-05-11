import React from "react";
import CKEditor from 'ckeditor4-react';
import "../App.css";

//need to set to local editor base
//CKEditor.editorUrl = 'https://your-website.example/ckeditor/ckeditor.js';
//not sure where to do that

class CKEditorBase extends React.Component {
	state = { server: "INIT", color:"black" };

	componentDidMount() {
//		this.checkServerHealth();
//		setInterval(() => this.checkServerHealth(), 10000);
	};
	
	checkServerHealth = async ()=> {
//		try { 
//			await springboot.get("/actuator/health");
//			this.setState({server:"UP", color:"green"});
//		} catch (error) {
//			this.setState({server:"DOWN", color:"red"});
//		}
	};
	
	render() {
	  return (
	   <div className="main">
	    <div className={this.state.color}>
			<CKEditor
				//type = "inline"
				config={ {
					extraPlugins: 'button,clipboard,codesnippet,colorbutton,dialog,dialogui,fakeobjects,find,floatpanel,font,htmlwriter,justify,lineutils,listblock,menu,menubutton,notification,pagebreak,panelbutton,preview,print,richcombo,scayt,selectall,showblocks,stylesheetparser,toolbar,undo,widget,widgetselection,wsc,xml' //setids,,wordcount
				} }
           />
	     </div>
	   </div>
	  );
	 };
}

export default CKEditorBase;