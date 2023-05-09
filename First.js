import React from "react";
import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
/* hdi bch n9dru nswetchiw bin pages f react  */
import './First.css';
/* ici rdi nderu header container or body and footer  */
import { Header,Container,Footer,Hero,MostPopular,Library } from "./components/index";
import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile";
// hd impoort bch bla mn3ytu 3la kul whd budu jm3nhum hna f index li f componnents 
const First= ()=>{

    return (
      <>
        {/* bch n9dru n switchiw bin khsna , n7tu kuklchy bin router  */}

        {/* 3 routes to use  */}
        <Router>
          {" "}
          {/* le principal qui doit engober tout  */}
          <Header />
          <Container>
            <Routes>
              {/* routes englobes les poges qu on va swithcer  */}
              <Route path="/" element={<Home />} />{" "}
              <Route path="/profile" element={<Profile />} />{" "}
              {/* ila klika utilisateur hna, rdii imchi 3nd component home  */}
            </Routes>
          </Container>
          <Footer />
        </Router>
      </>
    );

}


export default First;