import {Footer} from "@/components/layouts/Footer";
import {Header} from "@/components/layouts/Header";
import {Main} from "@/components/layouts/Main";
import {Children} from "@/interfaces/Children";

const Layout = ({ children }: Children) => {
  return (
    <div className="min-h-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
