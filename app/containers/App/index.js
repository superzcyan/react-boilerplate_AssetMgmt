/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import FeaturePage from 'containers/FeaturePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleDown)

import { Switch, Route } from 'react-router-dom';
import LoginPage from 'containers/AssetLoginPage/Loadable';
import SideNavBar from 'components/SideNavBar'
import AssetHomePage from 'containers/AssetHomePage/Loadable';
import AssetCategories from 'containers/AssetCategories/Loadable';
import AssetManufacturers from 'containers/AssetManufacturers/Loadable';
import AssetModels from 'containers/AssetModels/Loadable';
import AssetProcessors from 'containers/AssetProcessors/Loadable';
import AssetSuppliers from 'containers/AssetSuppliers/Loadable';
import AssetHardDisk  from 'containers/AssetHardDisk/Loadable';
import AssetMemory  from 'containers/AssetMemory/Loadable';
import AssetVideoCard  from 'containers/AssetVideoCard/Loadable';
import AssetUsers from 'containers/AssetUsers/Loadable';
import AssetUsersAddNew from 'containers/AssetUsersAddNew/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App({
  OnLoginFalse,
}) {
  return (
    <AppWrapper  >
      <Helmet
        titleTemplate="%s - Asset Management React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      
      <Switch>
        <Route exact path="/" component={LoginPage} />
        
        <Route path="/Home"> 
        <SideNavBar/>             
          <AssetHomePage/>
        </Route> 
        <Route path="/Categories">   
        <SideNavBar/>  
          <AssetCategories/>
        </Route>
        <Route path='/Manufacturers'>
          <SideNavBar/>          
          <AssetManufacturers/>       
        </Route>
        <Route path='/Models'>
          <SideNavBar/>         
          <AssetModels/>
        </Route>
        <Route path='/Processors'>
          <SideNavBar/>
          <AssetProcessors/>
        </Route>
        <Route path='/Suppliers'>
          <SideNavBar/>
          <AssetSuppliers/>
        </Route>
        <Route path='/Sizes/Hard_Disk'>
          <SideNavBar/>
          <AssetHardDisk/>
        </Route>
        <Route path='/Sizes/Memory'>
          <SideNavBar/>
          <AssetMemory/>
        </Route>
        <Route path='/Sizes/Video_Card'>
          <SideNavBar/>
          <AssetVideoCard/>
        </Route>
        <Route path='/Users'>
          <SideNavBar/>
          <AssetUsersAddNew/>
          <AssetUsers/>        
        </Route>       
        
        <Route path="*" component={NotFoundPage} />

      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
