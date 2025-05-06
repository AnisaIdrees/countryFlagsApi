import React from "react";
import Flags from "../Flags";
import DetailPage from "../DetailPage";
import PageNotFound from "./PageNotFound";
import App from "../../App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

function Routing() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Flags />}>
        <Route path="/" element={<Flags />} />
        <Route  loader ={({params})=> fetchSingleFlag(params) } path="/detailFlag" element={<DetailPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );

  return(
    <>
  <RouterProvider router ={router } fallBackElement={<h1>loading ...1</h1>}/>

 
  </>
  ) 
  
  
}

export default Routing;
