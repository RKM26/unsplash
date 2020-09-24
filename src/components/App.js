import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
require('dotenv').config();


class App extends React.Component{

    
    state={
        images:[]
    }


     onSearchSubmit=async(term)=>{
        console.log("client",process.env.REACT_APP_CLIENT);
       const response=await unsplash.get('/search/photos',{
            params:{query:term}
        });
        this.setState({images:response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>    
                <SearchBar  onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        
        )
    }
}



export default App;