import React, { Component } from 'react'

export default class CCCounter extends Component {

constructor(props) {
  super(props)

  this.state = {
    counter:0,
    runs:0,
     
  }
}


componentDidMount = ()=>{
    console.log("CCCounter - onloaded");

};


shouldComponentUpdate = ()=>{
    console.log("CCCounter - should component update");
    return true;

}

componentWillMount = ()=>{
    console.log("CCCounter - component will unload");
};

componentDidUpdate = ()=>{
    console.log("CCCounter  - component updated");
}



  render() {


    console.log("reder");
    return (
        <div className="counter">
        <h2>CCCounter</h2>
        <h1>Counter:{this.state.counter}</h1>
        <h1>Runs:{this.state.runs}</h1>
        <button onClick={()=>{

            this.setState({counter:this.state.counter+1});
            
        }}>Increment</button>
        <button onClick={()=>{
                this.setState({counter:this.state.counter-1});
           
        }}
        >Decrement</button>
        <br></br>
        <button onClick={()=>{
            this.setState({runs:this.state.runs+1});
            
        }}>Increment Runs</button>
        <button onClick={()=>{
            this.setState({runs:this.state.runs-1});
        }}
        >Decrement Runs</button>

    </div>
    )
  }
}
