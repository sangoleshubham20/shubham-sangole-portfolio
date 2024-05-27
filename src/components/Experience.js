import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            {/* @{company} */}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        {/* <p className="font-medium w-full md:text-sm"> {work}</p> */}
        <p className="font-medium w-full md:text-sm" dangerouslySetInnerHTML={{ __html: work }} />
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Project Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Autonomous Driving"
              company="Google"
              companyLink="https://google.com"
              time="March 2024"
              address="India"
              work="<br>Ideated an Autonomous Driving System using a Convolutional Neural Network (CNN) trained on a dataset of 43,000 images. 
              Leveraged OpenCV for Image Processing and conducted Exploratory Data Analysis (EDA) to extract valuable insights 
              from steering angles.<br><br>Utilized Rectified Linear Unit (ReLU) activation and employed Kaiming Initialization for weight initialization. 
              Integrated Data Normalization techniques like batch normalization and a dropout rate of 0.2 
              to augment the model’s overall stability and performance.<br><br>Optimized model convergence by implementing Stochastic Gradient Descent (SGD) and Adam Optimizer, 
              resulting in a reduction of the training loss from 6.4698 to 0.1350."
            />

            <Details
              position="Human Activity Recognition"
              company="Facebook"
              companyLink="https://facebook.com"
              time="January 2024"
              address="India"
              work="<br>Devised a Human Activity Recognition system, utilizing gyroscope and accelerometer data collected from the smartphones of 30 individuals. 
              Evaluated time-series data with 561 features, employing fixed window widths of 2.56 seconds with a 50% overlap, 
              to classify human activities into one of the six predefined categories.<br><br>Performed Exploratory Data Analysis on 10k motion sensor readings 
              that helped identify and categorize stationary and moving activities.<br><br>Implemented Logistic Regression and hyperparameter tuning techniques, 
              such as grid search and random search, to enhance the F1-score from 89% to 96%, resulting in an 8% increase."
            />

            <Details
              position="Forecasting Taxi Demands in Manhattan"
              company="Amazon"
              companyLink="https://amazon.com"
              time="December 2023"
              address="India"
              work="<br>Designed a web application to optimize the workday of a taxi driver by calculating the best pickups based on location and time 
              in high-demand areas of Manhattan, resulting in an 8% increase in monthly earnings.<br><br>Applied K-Means clustering algorithm to segment New York City into 40 clusters. 
              Used dask to load 146 million data points, enhancing operational efficiency. Executed time binning to organize the data efficiently into 10-minute intervals for improved analysis.
              <br><br>Designed Linear Regression and fine-tuned hyperparameters, reducing Mean Absolute Percentage Error by 27% from 0.1821 to 0.1335."
            />

            <Details
              position="Personalized Cancer Diagnosis"
              company="Microsoft"
              companyLink="https://microsoft.com"
              time="October 2023"
              address="India"
              work="<br>Developed a web application to classify genetic mutations into 9 different classes based on evidence extracted from clinical literature.
              <br><br>Analyzed individual features through univariate analysis and applied TF-IDF vectorization to generate 100-dimensional word embeddings.
              <br><br>Restructured class balancing via oversampling and implemented Logistic Regression to achieve a 59% reduction in log loss, decreasing from 2.4659 to 0.9862."
            />

            <Details
              position="Quora Duplicate Questions Identification"
              company="MIT"
              companyLink="https://mit.edu"
              time="September 2023"
              address="India"
              work="<br>Built a Machine Learning web application to empower users in identifying duplicate questions on Quora.
              <br><br>Executed SQL queries to extract 0.4 million rows from a database file and stored the data in an SQL table. 
              Enhanced Natural Language Processing (NLP) using TF-IDF weighted Word2Vec and integrated Fuzzy features to achieve robust semantic understanding and vector representations of words.
              <br><br>Enhanced the performance of a baseline random model by implementing XGBoost and reduced the log loss by 60% from 0.8854 to 0.3509."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
