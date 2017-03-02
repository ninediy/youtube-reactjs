import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={term:''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        let {onSearchTermChange} = this.props;
        return (
            <div className="search-bar">
                <input placeholder="Search Here..." value={this.state.term} onChange={this.onInputChange} onKeyPress={(e)=>this.onSubmit(e,onSearchTermChange)}/>
            </div>
        );
    }

    onSubmit(e,onSearchTermChange){
        if(e.charCode==13){
            onSearchTermChange(e.target.value);
        }
    }

    onInputChange(e){//this is the event listener
        this.setState({term:e.target.value});
    }

}

export default SearchBar;
