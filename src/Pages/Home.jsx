import FeatureJob from "../components/FeatureJob";
import Hero from "../components/Hero";
import JobCategoryList from "../components/JobCategoryList";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <JobCategoryList />
        <FeatureJob />
      </div>
    </>
  );
}

export default Home;
