import React, { lazy, Suspense } from "react";
import Footer from "./components/footer";
import styled from "styled-components";
import Navigator from "./components/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import("./pages/home"));
const GalleryPage = lazy(() => import("./pages/gallery"));
const SponsorsPage = lazy(() => import("./pages/sponsors"));
const FoundersPage = lazy(() => import("./pages/founders"));
const ContactPage = lazy(() => import("./pages/contact"));
const UploadPage = lazy(() => import("./pages/upload"));
const LogoPage = lazy(() => import("./pages/logo"));
const LoginPage = lazy(() => import("./pages/login"));
const ForgotPasswordPage = lazy(() => import("./pages/forgotpassword"));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <AuthProvider>
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

              <PrivateRoute exact path="/upload" component={UploadPage} />

              <PrivateRoute exact path="/logo" component={LogoPage} />

              <Route path="/login" component={LoginPage} />
              <Route
                exact
                path="/forgot-password"
                component={ForgotPasswordPage}
              />
            </Suspense>
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </Wrapper>
  );
}

export default App;
