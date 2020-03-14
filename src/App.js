import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useRoutes, A as Link } from "hookrouter";
import NoPageFound from "./components/NotFound";
import Layout from "./components/Layout";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";

import routes from "./routes";


function App() {
  const routeResult = useRoutes(routes);

  return (
    <Layout>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar Link={Link} />
        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          {routeResult || <NoPageFound />}
        </main>
      </div>
    </div>
  </Layout>
  );
}

export default App;

