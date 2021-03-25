import React, { lazy, Suspense } from "react";
import Footer from "./components/footer";
import styled from "styled-components";
import Navigator from "./components/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const HomePage = lazy(() => import("./pages/home"));
const GalleryPage = lazy(() => import("./pages/gallery"));
const SponsorsPage = lazy(() => import("./pages/sponsors"));
const FoundersPage = lazy(() => import("./pages/founders"));
const ContactPage = lazy(() => import("./pages/contact"));
const UploadPage = lazy(() => import("./pages/upload"));
const LogoPage = lazy(() => import("./pages/logo"));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Navigator />

        <Switch>
          <Suspense
            fallback={<span style={{ color: "White" }}>Loading...</span>}
          >
            <Route exact path="/" component={HomePage} />

            <Route exact path="/gallery" component={GalleryPage} />

            <Route exact path="/sponsors" component={SponsorsPage} />

            <Route exact path="/founders" component={FoundersPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/upload" component={UploadPage} />

            <Route exact path="/logo" component={LogoPage} />
          </Suspense>
        </Switch>

        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
