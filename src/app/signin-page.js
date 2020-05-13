import React, {Component, useEffect} from 'react'; 
import SigninComponent from '../modules/signin-component'

import axios from 'axios';

class SigninPage extends Component {
    state ={
        visible: false,
        makanan : []
    }

    componentDidMount(){

    }

    getGizi=(ingr)=>{
      axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${ingr}&app_id=897d1eb6&app_key=78e388625db412c233349cab2c3f68c6`)
      .then(res => {
        console.log(res.data.hints);
        this.setState({ makanan : res.data.hints})
      })
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      handleChange = (e) => {
        let target = e.target.name;
        let value = e.target.value;
        this.setState({
            [target]: value
        })
      }

    render(){
        return (
            <SigninComponent
                initialData = {this.state} 
                showModal = {this.showModal} 
                handleCancel = {this.handleCancel} 
                handleOk = {this.handleOk} 
            />
        );
    }
}

export default SigninPage;