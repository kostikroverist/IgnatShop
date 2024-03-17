import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import CardReviewsSlider from "../components/CardReviewsSlider/CardReviewsSlider";
import CatalogNavigation from "../components/CatalogNavigation/CatalogNavigation";
import EmailSubscriptionPrompt from "../components/EmailSubscriptionPrompt/EmailSubscriptionPrompt";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";

const MainPage = () => {
  return (
    <div>
      <BannerCarousel />
      <CatalogNavigation />
      <ProductsSlider />
      <EmailSubscriptionPrompt />
      <CardReviewsSlider />
    </div>
  );
};

export default MainPage;
