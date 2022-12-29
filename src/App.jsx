import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components/loading/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const NavigationBar = lazy(() => import("./components/navbar/NavigationBar"));
const EmptyPage = lazy(() => import("./pages/EmptyPage"));

const StepNavigation = lazy(() => import("./components/step/StepNavigation"));
const TransFirstPage = lazy(() => import("./pages/TransFirstPage"));
const TransSecondPage = lazy(() => import("./pages/TransSecondPage"));
const TransThirdPage = lazy(() => import("./pages/TransThirdPage"));

function App() {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "*", element: <EmptyPage /> },
    { path: "/transaction", element: <TransFirstPage /> },
    { path: "/transaction/payment", element: <TransSecondPage /> },
    { path: "/transaction/checkout", element: <TransThirdPage /> },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route) => {
          let element;
          try {
            if (route.path.match(/^\/transaction/)) {
              element = (
                <>
                  <StepNavigation />
                  {route.element}
                </>
              );
            } else {
              element = (
                <>
                  <NavigationBar />
                  {route.element}
                </>
              );
            }
          } catch (error) {
            element = <p>An error occurred: {error.message}</p>;
          }
          return <Route key={route.path} path={route.path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
