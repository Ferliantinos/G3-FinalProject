import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MenLayouts from "../components/layouts/menLayout";
import PageDirectory from "../components/fragments/PageDirectory";
import AsideLeftProduct from "../components/fragments/asideLeftProdcuts";
import HotCard from "../components/fragments/hotCard";
import AsideHeader from "../components/elements/asideLeft/asideHeader";
import List from "../components/elements/asideLeft/asideList";
import Navbar from "../components/layouts/Navbar";
import DiscountBanner from "../components/fragments/discountBanner";

const MenPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageDirectory />
      <MenLayouts>
        <AsideLeftProduct>
          <AsideHeader title="New Arrivals">
            <List>View all</List>
            <List>Clothes</List>
            <List>Shoes & Accessories</List>
          </AsideHeader>
          <AsideHeader title="Shop by Product">
            <List>View all</List>
            <List>T-Shirts & Vests</List>
            <List>Hoodies & Sweatshirts</List>
            <List>Trousers</List>
            <List>Shirts</List>
            <List>Basics</List>
            <List>Shorts</List>
            <List>Jeans</List>
            <List>Cardigans & Jumpers</List>
            <List>Jacket & Coats</List>
            <List>Blazers & Suits</List>
            <List>Sportswear</List>
            <List>Swimwear</List>
            <List>Underwear</List>
            <List>Lounge Wear</List>
            <List>Shoes</List>
            <List>Socks</List>
            <List>Accessories</List>
          </AsideHeader>
        </AsideLeftProduct>
        <div className="w-3/4">
          <img src="../public/assets/images/Men/offers-banner1.jpg" />
          <HotCard className="bg-contentmen1 bg-cover w-full h-screen flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-8 w-24 font-bold">Join Us</button>
          </HotCard>
          <HotCard className="bg-contentmen2 bg-cover w-full h-screen flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-8 w-24 font-bold">Join Us</button>
          </HotCard>
          <HotCard className="bg-contentmen3 bg-cover w-full h-[36.25rem] flex justify-center items-end gap-3 mt-10">
            <button className="bg-white mb-8 w-24 font-bold">Join Us</button>
          </HotCard>
        </div>
      </MenLayouts>
      <Footer />
    </div>
  );
};
export default MenPage;
