import React from 'react'; 
import Layout from './components/layout';
import Profile from './components/Profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import GithubProviders from './providers/github-providers';
const App = () => {
  return (
  <main>
    <GithubProviders>
        <ResetCSS/>
      <Layout>
        <Profile/>
        <Repositories/>
      </Layout>
    </GithubProviders>
    </main>
  );
}

export default App;
