import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CardTabsMain/index.css";
import "../styles/CouponForm/index.scss";
import "../styles/Footer/index.scss";
import "../styles/Transform/TabComp/index.scss";
import "../styles/Transform/TabComp/TabContentItem/index.scss";
import "../styles/Transform/TabComp/TabItem/index.scss";
import "../styles/WebDesignIndustry/index.scss";
import "../styles/WebDesignIndustry/TabContentItem/index.scss";
import "../styles/WebDesignIndustry/TabItem/index.scss";
import "../styles/BottomSlider/index.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
