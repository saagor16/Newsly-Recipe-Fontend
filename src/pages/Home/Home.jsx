import Hero from "../../components/Hero";
import CategoryWrapper from "../category/CategoryWrapper";
import FeaturedSection from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero></Hero>
        <CategoryWrapper></CategoryWrapper>
      </div>

      {/**other COmponent */}

      <FeaturedSection></FeaturedSection>
      <LatestRecipe></LatestRecipe>
    </div>
  );
};

export default Home;
