import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";

import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import BecomeARider from "./Pages/BecomeARider";
import HowItWorks from "./Pages/HowItWorks";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/become-a-rider" element={<BecomeARider />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
