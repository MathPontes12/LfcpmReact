import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {

        const { pathname } = useLocation();

        useEffect(() => {
          window.scrollTo(0, 790);
        }, [pathname]);
      
        return null;
}

export default ScrollToTop