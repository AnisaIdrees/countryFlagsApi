import React from "react";
import Flags from "../Flags";
import DetailPage from "../DetailPage";
import PageNotFound from "./PageNotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

function Routing() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Flags />} />
      <Route path="/Country/:cca3" element={<DetailPage />} />
      <Route path="*" element={<PageNotFound />} />
    </>
    )
  );

  return (
    <>
      <RouterProvider router={router} fallBackElement={<h1>loading ...1</h1>} />


    </>
  )


}

export default Routing;
