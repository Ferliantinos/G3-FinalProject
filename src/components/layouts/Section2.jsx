import Content_1 from "../fragments/content1";
import Content_2 from "../fragments/content2";
import Content_3 from "../fragments/content3";

const Section2 = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center pt-10">
        <Content_1 />
        <Content_2 />
        <Content_3 />
      </section>
    </>
  );
};

export default Section2;
