import React, { Component } from 'react'
import TechItem from './TechItem'

class TechList extends Component{
  static defaultProps = {
    tech: 'Oculto'
  };

  state = {
    newTech:'',
    techs:[]
  }

  // executes when the component appears on the screen
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)})
    }
  }

  // executed when there is an alteration to any prop or state
  componentDidUpdate(_, prevState){ // you can access previous values through prevProps and prevState params
    if (prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // executes when a component "dies"
  componentWillUnmount(){

  }

  // every function inside react need to be an arrow function, so it gets the right this
  handleInputChange = e =>{
    this.setState({ newTech: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault();
    //console.log(this.state.newTech);
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  handleDelete = (tech) =>{
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
  } 

  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}/>
            )
          }
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Send</button>
      </form>
      </>
    );
  }
}

export default TechList;