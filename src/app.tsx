import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout";
import Home from "./routes/home";
import Blog from "./routes/blog";
import Post from "./routes/blog/post";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
