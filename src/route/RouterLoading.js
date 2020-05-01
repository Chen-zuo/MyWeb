import React from 'react';
import Loadable from 'react-loadable';

export default (loader)=>{
    return(
        Loadable({
            loader,
            loading(){
                return <div>Sorry, there was a problem loading the page.</div>
            }
        })
    )
};