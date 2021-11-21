import React from 'react'; 
import Layout from './components/layout';
import Profile from './components/Profile';

const App = () => {
  return (
  <main>
    <Layout>
      <Profile/>
      <div>Reporitories</div>
      <div>Starreds</div>
    </Layout>
    </main>
  );
}

export default App;
