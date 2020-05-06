import React,{ Component } from 'react';
import classes from './App.module.css';
import LandingPage from './components/LandingPage';
import {Route} from 'react-router';
import axios from 'axios';
import { BrowserRouter} from 'react-router-dom';

class App extends Component {
      constructor(props) 
      {
        super(props);
        this.state = {
          value: 'Enter your code here.....'
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(event) {
        this.setState({value: event.target.value});
      }
    
      onSubmit(event) 
      {   //API POST REQUEST HERE
        alert("Im clicked"); 
        const postData=this.state.value;
        axios.post('url',postData)
        .then((res) => console.log(res) )
        .catch( (err) => console.log(err));
      }
     render() {
       const formm =(
        <form className={classes.container}onSubmit={this.onSubmit}>
        <select className={classes.dropdown}>
           <option value="volvo">C++</option>
           <option value="volvo">JAVA</option>
           <option value="volvo">PYTHON</option>
           <option value="volvo">HASKELL</option>
           <option value="volvo">RUST</option>
          </select>
         <label>
           <textarea value={this.state.value} onChange={this.onChange} rows="30" cols="100"/>
         </label>
         <button type="submit" className={classes.hello}>Submit</button>
         <textarea value='Output from server...' rows="10" cols="30"/>
         </form> 

       );
        return (
          <BrowserRouter>
          <div>
          <Route path='/' exact component={LandingPage}/>
          {formm}
          </div>
          </BrowserRouter>
        );
      }
    }

export default App;
