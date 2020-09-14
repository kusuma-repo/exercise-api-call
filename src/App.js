import React, { Component} from 'react'
import './App.css';
import {Cardlist} from './component/card-list/Card-list-component'
import {Search } from './component/Search';
export class App extends Component {
    constructor(){
        super();
            this.state = {
                monsters:[],
                searchfield:''
            }       
    }
  
    componentDidMount(){

       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((data) => this.setState({monsters:data}))    
    }
    render() {
        
        const { searchfield,monsters} = this.state;
        const searchfilter = monsters.filter(card => card.name.toLowerCase().includes(searchfield.toLowerCase()));
        return (
            <div className="App">
             <h1>Monsters Rolodex</h1>
             
         <Search querySearch={e => this.setState({searchfield :e.target.value})} />
          <hr style={{color: "white"}}></hr>
         <Cardlist cards={searchfilter} />

            </div>
        )
    }
}

export default App
