import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ErrorBoundary from "./ErrorBoundary";
import NavBanner from "./components/NavBanner";
import RemoteLoader from "./remote/RemoteLoader";

const Navbar = React.lazy(() => import("Remote1/Navbar"));
const Product = React.lazy(() => import("Remote1/Product"));
const Stats = React.lazy(() => import("Remote2/Stats"));
const Newsletter = React.lazy(() => import("Remote2/Newsletter"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

const App = () => (
  <>
    <Suspense fallback={"loading..."}>
      <NavBanner />
      <RemoteWrapper>
        <Navbar />
        <Product />
        <Stats />
        <Newsletter />
        {/* <RemoteLoader remote={'remote_1'} module={'./Navbar'} /> */}
      </RemoteWrapper>
    </Suspense>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
