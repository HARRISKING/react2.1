import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        setInterval( () => {
            this.setState({
                date: new Date()
            })
        } )
    }
    render(){
        return (
            <div>
                <h1>我是{this.props.name}</h1>
                <h2>现在的时间是{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Welcome;