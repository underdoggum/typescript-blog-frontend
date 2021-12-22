import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import BlogPage from "./pages/blog";
import EditPage from "./pages/edit";
import HomePage from "./pages/Home";

export interface IApplicationProps {}

// Note: second route for <EditPage /> is the "new" route
const Application: React.FunctionComponent<IApplicationProps> = props => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/edit" element={<EditPage />} />


      </Routes>
    </main>
  )
}

export default Application;
