import { useEffect, useState } from "react";
import Card from "../components/fragments/Card";
import Header from "../components/layouts/header";

const Products = () => {
  const [dataProduct, setDataProduct] = useState([]);

  // Call API
  const getApiProduct = async () => {
    const response = await fetch(
      "https://65130d0f8e505cebc2e982ab.mockapi.io/api/Product"
    );
    const data = await response.json();
    setDataProduct(data);
  };

  // Use Effect
  useEffect(() => {
    getApiProduct();
  }, []);

  // console.log(dataProduct, "halo");

  return (
    <>
      <Header />
      <div className="grid grid-cols-4">
        {dataProduct.map((item, key) => {
          return (
            <>
              <Card
                imgLink={item.image}
                title={item.name}
                price={item.price}
                key={key}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
