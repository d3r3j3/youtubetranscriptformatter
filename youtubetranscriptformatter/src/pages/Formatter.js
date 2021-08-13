import React, {Component} from 'react';
import {NavBar, LinkBar, Donate, CopyRight} from '../layouts'
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
                <CopyRight />
                <Donate />
                <div class="w-full h-full bg-gray fixed -z-10">
                    &nbsp;
                </div>
            </div>
        )
    }
    
}


export default Formatter;