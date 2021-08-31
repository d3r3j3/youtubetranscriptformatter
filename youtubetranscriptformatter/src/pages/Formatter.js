import React, {Component} from 'react';
<<<<<<< HEAD
import {NavBar, LinkBar} from '../layouts'
=======
import {NavBar, LinkBar, Donate, CopyRight} from '../layouts'
>>>>>>> 22a698c96b62e3980f7b7e79d4f66ab4106389eb
import queryString from 'query-string';

export class Formatter extends Component {
    values = queryString.parse(this.props.location.search)
    state = {
        vUrl: this.values.v
    }
    
    
    render() {
        
        return(
            <div class="w-full h-full bg-gray grid grid-rows flex justify-center items-center">
                <NavBar/>
                <LinkBar urlParam={this.state.vUrl !== undefined ? this.state.vUrl : ''}/>
<<<<<<< HEAD
                
                
=======
                <CopyRight />
                <Donate />
                <div class="w-full h-full bg-gray fixed -z-10">
                    &nbsp;
                </div>
>>>>>>> 22a698c96b62e3980f7b7e79d4f66ab4106389eb
            </div>
        )
    }
    
}


export default Formatter;