// apollo - @client
// import { gql, useQuery } from "@apollo/client";

//components
import HomePage from "./components/Home/HomePage";
import Layout from "./components/layout/Layout";

import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/blog/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
