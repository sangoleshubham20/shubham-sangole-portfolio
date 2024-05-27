import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/probability-density-function.png";
import blog2 from "../../public/images/articles/feature-engineering.png";
import blog3 from "../../public/images/articles/hyperparameter-tuning.png";
import blog4 from "../../public/images/articles/l1-l2.png";
import blog5 from "../../public/images/articles/bias-var.png";
import blog6 from "../../public/images/articles/overfit-underfit.png";
import blog7 from "../../public/images/articles/text-vect.png";
import blog8 from "../../public/images/articles/pca.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Explore My Articles | Articles Page</title>
        <meta name="description" content="Explore my repository of data science articles and tutorials encompassing subjects such as 
        Python, Machine Learning, Scikit-learn, NLP, and more. Uncover valuable insights and remain abreast of best practices in 
        data visualization, model optimization, and cloud deployment to enhance your data skills." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Exploring Probability Density Function (PDF) in Depth"
              time="6 min read"
              summary="Learn the intricacies of Probability Density Function (PDF), 
              diving into its mathematical underpinnings and practical applications through Python implementation. 
              Gain insights into statistical analysis and data visualization with PDF, a fundamental concept in probability theory."
              link="https://medium.com/@sangoleshubham20/exploring-probability-density-function-pdf-in-depth-a2801af16e04"
            />

            <FeaturedArticle
              img={blog2}
              title="Unveiling the Art of Feature Engineering: A Comprehensive Guide"
              time="10 min read"
              summary="Dive into the world of Feature Engineering in my latest Medium article, uncovering techniques to transform raw data 
              into predictive features for enhanced machine learning models."
              link="https://medium.com/@sangoleshubham20/unveiling-the-art-of-feature-engineering-a-comprehensive-guide-5ce666a0b7ff"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            Other Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Tuning Triumphs: Strategies to Elevate Your Machine Learning Models"
              img={blog3}
              date="May 27, 2024"
              link="https://medium.com/@sangoleshubham20/tuning-triumphs-strategies-to-elevate-your-machine-learning-models-328e870a0b05"
            />
            <Article
              title="Understanding L1 and L2 Regularization: The Guardians Against Overfitting"
              img={blog4}
              date="May 22, 2024"
              link="https://medium.com/@sangoleshubham20/understanding-l1-and-l2-regularization-the-guardians-against-overfitting-175fa69263dd"
            />
            <Article
              title="Striking the Perfect Chord: Bias-Variance Duet in Machine Learning"
              img={blog5}
              date="May 21, 2024"
              link="https://medium.com/@sangoleshubham20/striking-the-perfect-chord-bias-variance-duet-in-machine-learning-10ac7515f1a0"
            />
            <Article
              title="Navigating the Balance: Tackling Overfitting and Underfitting in Machine Learning"
              img={blog6}
              date="May 18, 2024"
              link="https://medium.com/@sangoleshubham20/navigating-the-balance-tackling-overfitting-and-underfitting-in-machine-learning-bbf840138725"
            />
            <Article
              title="Text Vectorization: Transforming Text into Knowledge with Vectorization"
              img={blog7}
              date="May 17, 2024"
              link="https://medium.com/@sangoleshubham20/text-vectorization-transforming-text-into-knowledge-with-vectorization-989d8a0e5e77"
            />
            <Article
              title="Unlocking Insights with Principal Component Analysis (PCA): A Comprehensive Guide"
              date="May 14, 2024"
              img={blog8}
              link="https://medium.com/@sangoleshubham20/unlocking-insights-with-principal-component-analysis-pca-a-comprehensive-guide-537e81bda975"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
