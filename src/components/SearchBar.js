import React from 'react';


class SearchBar extends React.Component{
    state={
        term:''
    }

    onFormSubmit =(event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.term)
        

        // console.log(this.state..);
    }
    render(){
        
        return(
            <div className="ui segment">
                <div className="field">
                <form onSubmit={this .onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    <input 
                         type="text" 
                         value={this.state.term}
                         onChange={e=>this.setState({term:e.target.value})}/> 
                </form>
                </div>
            </div>
        )
    }
}



export default SearchBar;