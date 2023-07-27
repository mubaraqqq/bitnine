import Image from "next/image";
import Navbar from "./components/Navbar";
import headerImg from "@/assets/AgenSQL-Logo.png";
import enterprise from "@/assets/enterprise.png";
import features from "@/assets/features.png";
import password from "@/assets/password.png";
import data from "@/assets/data.png";
import auditing from "@/assets/auditing.png";
import replication from "@/assets/replication.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <section className="pt-[70px] pb-[24px] sm:pb-[40px] lg:pb-[64px] text-center flex flex-col items-center gap-[15px] lg:gap-[30px] text-[#444444] px-[3%]">
          <div>
            <Image src={headerImg} alt="header" />
          </div>
          <h3 className="font-bold text-[21px]">
            An integration of Bitnine’s DB technology and PG expertise
          </h3>
          <p>
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise
            <br />
            and knowledge accumulated through database research and development.
          </p>
          <p>
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures
            <br />
            the efficiency and scalability of data management.
          </p>
          <p>
            Get AgensSQL now for stable operation and management services at a
            reduced
            <br />
            maintenance cost.
          </p>
          <div className="text-[#ffffff] flex items-center justify-center w-[100%] gap-[5%] uppercase mt-[30px]">
            <p className="py-[5px] px-[20px] bg-[#022EA9] rounded-[3px]">
              contact
            </p>
            <p className="py-[5px] px-[20px] bg-[#022EA9] rounded-[3px]">
              brochure
            </p>
            <p className="py-[5px] px-[20px] bg-[#022EA9] rounded-[3px]">
              blog
            </p>
          </div>
        </section>

        <section className="bg-[#f3f6fb] py-[60px] flex flex-col items-center justify-center">
          <div className="w-[90%] lg:w-[70%] mx-[auto]">
            <Image src={enterprise} alt="enterprise" />
          </div>
        </section>

        <section className="px-[3%] py-[80px] flex flex-col items-center justify-center text-center gap-[30px]">
          <h2 className="font-bold text-[24px] sm:text-[34px]">Key Features</h2>
          <p>
            Manage your data with Agens Enterprise Package
            <br />
            Essential enterprise features such as high availability and sharding
            are provided
          </p>
          <div className="w-[90%] lg:w-[70%] mx-[auto]">
            <Image src={features} alt="features" />
          </div>
        </section>

        <section className="bg-[#f3f6fb] px-[3%] py-[80px] flex flex-col items-center justify-center text-center gap-[30px]">
          <h2 className="font-bold text-[24px] sm:text-[34px]">
            AgensSQL DB Engine
          </h2>
          <h4 className="text-[#444444] underline text-[18px] font-bold">
            Enhanced Data Security
          </h4>
          <p>
            AgensSQL is a PostgreSQL-based DBMS
            <br />
            that guarantees optimal security and stability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[5%]">
            <div className="w-[90%] sm:w-[30%] lg:w-[25%] bg-white px-[60px] py-[40px] rounded-[5px] border-solid border border-[#cccccc]">
              <Image src={password} alt="password" />
            </div>
            <div className="w-[90%] sm:w-[30%] lg:w-[25%] bg-white px-[60px] py-[40px] rounded-[5px] border-solid border border-[#cccccc]">
              <Image src={data} alt="data" />
            </div>
            <div className="w-[90%] sm:w-[30%] lg:w-[25%] bg-white px-[60px] py-[40px] rounded-[5px] border-solid border border-[#cccccc]">
              <Image src={auditing} alt="auditing" />
            </div>
          </div>
        </section>

        <section className="px-[3%] py-[80px] flex flex-col items-center justify-center text-center gap-[30px]">
          <h2 className="font-bold text-[24px] sm:text-[34px]">
            Agens Enterprise Package
          </h2>
          <p>
            Agens Enterprise Package comes with a high availability management
            server that
            <br />
            supports backup and data monitoring dashboard that helps enterprise
            customers manage their data efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-[30px] sm:gap-[5%]">
            <div>
              <div className="w-[90%] lg:w-[70%] mx-[auto]">
                <Image src={replication} alt="replication" />
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}
