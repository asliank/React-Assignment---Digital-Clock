import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  time: new Date()}
        this.intervalId = null;
    }
    
    render() {
        return(
            <div className="Clock">
               <h3 id="time">{this.getTimeString()}</h3>
            </div>
        )
    }
    getTimeString() {
        const currTime = this.state.time
        const [hours,minutes,seconds] = [
            currTime.getHours(),
            currTime.getMinutes(),
            currTime.getSeconds()
        ]
        const amOrPm = hours>=12? "PM" : "AM"
        const hourFormat = hours > 12 ? hours - 12 : hours
        const hourString = this.padNumberToTwoDigits(hourFormat)
        const minutesString = this.padNumberToTwoDigits(minutes)
        const secondString = this.padNumberToTwoDigits(seconds)

        const timeString = `${hourString}:${minutesString}:${secondString} ${amOrPm}`
        return timeString
    }

    padNumberToTwoDigits(num){
        return (num<10 ? ("0" + num) : (""+ num));
    }

    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({
                time:new Date()
            })
        })
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
}


export default App;
