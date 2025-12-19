import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";
import { HomeRoute } from "./routes/home.route";
import { NotFoundRoute } from "./routes/not-found.route";
import { PostsRoute } from "./routes/posts.route";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundRoute />} />

        <Route path="/" element={<HomeRoute />} />
        <Route path={ROUTES.POSTS} element={<PostsRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
