import React, {Component} from 'react';




class SearchBox extends Component
{
render()
{
    
const {searchChange} = this.props;
    


return(

    <div>

    <input onChange={searchChange} className='pa3 ma3 ba b--green bg-lightest-blue' type='text' placeholder='Search Robot'></input>


    </div>




);
};


};



export default SearchBox;