import React from "react";
import Header from "../components/Header/Header";
import News from "../components/FetchAPI/FetchApi";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => {
    return (
        <>
        <Header /><br />
        <News/>
        <Footer />
        </>
    )
}

export default HomeScreen;