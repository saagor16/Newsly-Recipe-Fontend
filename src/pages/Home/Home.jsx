import Hero from "../../components/Hero";
import CategoryWrapper from "../category/CategoryWrapper";
import AboutSection from "./AboutSection";
import FeaturedSection from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero></Hero>
        <CategoryWrapper></CategoryWrapper>
      </div>

      {/**other Component */}

      <FeaturedSection></FeaturedSection>
      <LatestRecipe></LatestRecipe>
      <NewsLetter></NewsLetter>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
