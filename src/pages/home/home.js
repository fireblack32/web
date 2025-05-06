import React from "react";
import HomeStart from "../../components/HomeStart";
import Information from "../../components/information";
import Products from "../../components/products";
import Section from "../../components/section-final";

export default function Home() {
    return (
        <div className="HomeStart">
            <HomeStart />
            <Information />
            <Products />
            <Section />
        </div>
    );
}
