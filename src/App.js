import React from "react";

import PreNav from "./components/PreNav.jsx";
import NavSection from "./components/NavSection.jsx";
import Slider from "./components/Slider.jsx";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProducts from "./components/StarProducts.jsx";
import MainProducts from "./components/MainProducts.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

import data from "./data/data.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PreNav />
      <NavSection url={data.logo} />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <MainProducts
        products={data.hotAccessories}
        cover={data.hotAccessoriesCover}
      />
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
