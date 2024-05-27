import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import digitalSignature from "../../public/images/svgs/digital-signature.svg";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Get To Know Me | About Page</title>
        <meta name="description" content="A Data Scientist with 1.5 years of relevant experience, 
        specializing in leveraging advanced analytics and machine learning techniques 
        to extract meaningful insights from complex datasets. Proficient in designing and implementing 
        end-to-end machine learning solutions, from data acquisition to model building, process optimization, 
        and deploying models on cloud services for widespread accessibility." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="my-4 font-medium">
                Hi, I&apos;m <strong>Shubham Sangole</strong> – a Junior Data Scientist.
                As a recent entrant into the field of data science, 
                I bring a fresh perspective and a fervent commitment to mastering 
                the intricacies of advanced analytics and machine learning.<br>
                </br>
              </p>
              <p className="my-4 font-medium">
                Over the past 2 years, I have deeply engaged in the study and practical implementation 
                of data science principles, placing specific emphasis on leveraging cutting-edge techniques 
                to extract actionable insights from complex datasets.
              </p>
              <p className="my-4 font-medium">
                My journey as a Data Scientist has equipped me with a solid foundation in 
                programming languages such as Python and SQL, along with hands-on experience in 
                utilizing frameworks like TensorFlow and Scikit-learn.<br>
                </br>
              </p>
              <p className="my-4 font-medium">
                I have cultivated a deep understanding in orchestrating the entire machine learning lifecycle – 
                from data acquisition to model deployment, and I continuously seek to enhance my skills 
                through ongoing learning and experimentation.<br>
                </br>
              </p>
              <p className="my-4 font-medium">
                I look forward to the opportunity to bring my skills and passion to your present endeavours.<br>
                </br>
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Shubham Sangole"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={20} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Articles Published
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  relevant experience(yrs)
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Image
            className="relative h-auto w-auto mt-16"
            src={digitalSignature}
            alt="Shubham Sangole"
            />
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
