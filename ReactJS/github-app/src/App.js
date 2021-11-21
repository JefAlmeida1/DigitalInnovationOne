import React from 'react'; 
import Layout from './components/layout';
import Profile from './components/Profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import useGithub from './hooks/github-hooks';
import NoSearch from './no-serach';
import GithubProviders from './providers/github-providers';

const App = () => {
const {githubState} = useGithub();

  return (
    <Layout>
      {githubState.hasUser ?(
      <>
        {githubState.loading ?( 
        <p>Loading</p>
        ) : (
          <>
            <Profile/>
            <Repositories/>
          </> 
        )}
          </>
        ) : (
          <NoSearch/>
        )}  
    </Layout>
  );
}

export default App;
