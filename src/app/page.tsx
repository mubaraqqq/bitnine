import Image from "next/image";
import Navbar from "./components/Navbar";
import headerImg from "@/assets/AgenSQL-Logo.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
    </>
  );
}
