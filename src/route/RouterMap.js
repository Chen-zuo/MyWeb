import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import loadable from './RouterLoading';

/**
 * @name 路由配置 
 */

 const AsyncHome =loadable(()=>import('../page/home/Home'))
 const AsyncWork =loadable(()=>import('../page/work/Work'))
 const AsyncWelcome =loadable(()=>import('../page/blog/Blog'))
 const AsyncAbout =loadable(()=>import('../page/about/About'))
 const AsyncErro =loadable(()=>import('../page/notfind/Notfind'))


 export default ()=>{
     return(
        <Switch>
        <Route exact path='/' component={ AsyncHome }/>
        <Route path='/work' component={ AsyncWork }/>
        <Route path='/blog' component={ AsyncWelcome}/>
        <Route path='/about' component={ AsyncAbout}/>
        <Route path='/404' component={ AsyncErro }/>
        <Redirect to="/404"/>
      </Switch>
     )
 }