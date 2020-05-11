import React from 'react'
class propertyreader extends React.Component {

    

    render() {


        // const PropertiesReader = require('properties-reader');
        // const appProperties = PropertiesReader('./build.properties')
        const PropertiesReader = require('properties-reader');
        const properties = PropertiesReader('build.properties');
        properties.get('main.some.thing');
        var property = "hai";
    
               
        return (
            <div>
                <h1>{this.property}</h1>
            </div>
        )
    }
}
export default propertyreader