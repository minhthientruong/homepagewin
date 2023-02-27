import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Img from "next/image";

export default function Home() {
  return (
    <main className="bg-width h-[7673px] ">
      {/* <div className="relative ">
        <img
          src="./bg color.svg"
          className="min-h-[718px] w-full object-cover"
        /> */}
      <div className=" relative">
        <img
          src="./bg.svg"
          className="min-h-[718px] object-cover w-full "
        ></img>

        <div className="whitespace-nowrap ">
          <div className=" absolute top-[24px] right-[82px] flex h-[76px] w-[1276px] rounded-[24px] bg-white bg-opacity-30 px-4 py-2 ">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] bg-gradient-to-br from-[#4A38AD] to-[#9726A3]">
              <button className="relative h-[24px] w-[24px] bg-transparent">
                <img src="./Icon.svg" alt="" />
              </button>
            </div>
            <div className="ml-2 h-[60px] w-[1192px] rounded-t-[18px] rounded-br-[18px] bg-white ">
              <div className="flex">
                <div className="mt-[8px] ml-[8px] flex  whitespace-nowrap">
                  <img src="./logo.svg" alt="" />
                </div>
                <div className="mt-[8px] ml-[192px] flex h-[44px] w-[622px] ">
                  <button className="my-[8px] font-bold text-gray-700 ml-[20px] inline-flex h-[24px] w-[78px] justify-center ">
                    Trang chủ
                  </button>
                  <button className="my-[8px] font-bold text-gray-700 ml-[28px] inline-flex h-[44px] w-[159px] justify-center ">
                    Chúng tôi là ai?
                  </button>
                  <button className="my-[8px] font-bold text-gray-700 ml-[8px] inline-flex h-[44px] w-[86px] justify-center ">
                    Dự án
                  </button>
                  <button className="my-[8px] font-bold text-gray-700 ml-[8px] inline-flex h-[44px] w-[131px] justify-center ">
                    Tuyển dụng
                  </button>
                  <button className="my-[8px] font-bold text-gray-700 ml-[8px] inline-flex h-[44px] w-[96px] justify-center ">
                    Liên hệ
                  </button>
                </div>
                <div className=" mt-[8px] mr-[8px] ml-[189px] h-[44px] w-[84px] rounded-[8px] border-[1px] border-[#1B1B1B0D] bg-[#1B1B1B1A] bg-opacity-10">
                  <div className="my-[1px]">
                    <button className="font-bold border-[#E7E7E7 text-r-[#25109A] ml-[1px] h-[40px] w-[40px] rounded-[8px] border-[1px] hover:bg-white focus:bg-white focus:outline-none text-[#7F028C] ">
                      VI
                    </button>

                    <button className="  hover:bg-white font-bold  hover:bg-white focus:bg-white focus:outline-none text-gray-700 mr-[1px] h-[40px] w-[40px] rounded-[8px] ">
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/image1.svg"
              className=" absolute top-[119px] right-[17px]"
            ></img>
            <img
              src="./image2.svg"
              className="absolute top-[115px] right-[21px]"
            ></img>
            <img
              className=" absolute top-[126px] right-[1063px]"
              src="./vienngoai.svg"
            ></img>
            <button className="text-left-[16px]  absolute right-[1060px] top-[129px] h-[99px] w-[99px] whitespace-pre-line rounded-full bg-gradient-to-r from-[#FFC0AF] to-[#EF9DAF] text-[19px] text-white">
              Chúng tôi là ai?
            </button>
            <div className=" w-[116px] absolute top-[269px] font-bold text-white text-[10px] justify-center flex items-center left-[1125px] h-[24px] rounded-full bg-gradient-to-r from-[#E55C79] to-[#FF9679]">
              Liên hệ chúng tôi
            </div>
            <div className=" w-[967px] h-[128px] absolute top-[262px] left-[236px] ">
              <h1 className=" bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text text-center text-[52px] font-bold text-transparent ">
                Xây dựng sản phẩm kỹ thuật số
                <p className="bg-gradient-to-r mt-[-10px] from-[#25109A] to-[#7F028C] bg-clip-text text-center text-[52px] font-bold text-transparent ">
                  thương hiệu và trải nghiệm người dùng
                </p>
              </h1>
            </div>
            <span className=" w-[620px] h-[48px] text-center text-[#7F028C] absolute top-[414px] right-[410.5px] whitespace-normal text-[16px] ">
              We have three projects with this template and that is because we
              love the design, the large number of possibilities.
            </span>
            <img
              src="./shape.svg"
              className=" absolute left-[822px] top-[260.86px] "
            ></img>
            <img
              src="./nuavien1.svg"
              className=" absolute top-[280px] right-[1346px]"
            ></img>
            <img
              src="./nuavien2.svg"
              className="absolute top-[276px] right-[1350px]"
            ></img>
            <button className="w-[123px] h-[123px] absolute top-[486px] right-[659px]">
              <img className="ml-[55.61px]" src="./muiten.svg" alt="" />
            </button>
            <img
              className="top-[486px]  right-[659px] w-[123px] h-[123px] absolute "
              src="./circle.svg"
            ></img>
            <img
              className=" absolute left-[170px] top-[495px]"
              src="./vuong.svg"
              alt=""
            />
          </div>
          <img
            className=" absolute left-[1360px] top-[519px]"
            src="./tronnua.svg"
          ></img>
          <img
            className=" absolute z-0 left-[84px] top-[635px]"
            src="./shape03.svg"
          ></img>
          <img
            className=" absolute z-10 top-[708px] right-[208px]"
            src="./vienngoai.svg"
          ></img>
          <button className="text-left-[16px]  absolute right-[212px] top-[704px] h-[99px] w-[99px] whitespace-pre-line rounded-full bg-gradient-to-r from-[#FFC0AF] to-[#EF9DAF] text-[14px] text-white">
            Chúng tôi đã làm gì?
          </button>
          <div>
            <div className="w-[45px] flex h-[45px] z-20 rounded-full bg-gradient-to-r from-[#FFC0AF] to-[#EF9DAF] absolute top-[853px] right-[377px]"></div>
            <div className="w-[76px] flex h-[76px] rounded-full z-10 bg-gradient-to-r from-[#FFEAE4] to-[#FADEE4] absolute top-[1107px] left-[127px]"></div>
            <div className="w-[1260px] h-[260px] z-0 rounded-[48px] bg-gradient-to-r from-[#FFEAE4] to-[#FADEE4] absolute top-[887px] left-[78px]"></div>
            <div className="w-[1260px]  absolute top-[875px] left-[90px] h-[260px] z-0 rounded-[48px] bg-gradient-to-br from-[#FF9679] to-[#E55C79]">
              <div className="w-[419px] h-[164px] top-[48px] flex absolute ">
                <h1 className="text-[52px] font-bold w-[105px] h-[64px] text-white my-[30px] px-[157px]">
                  30+
                </h1>
                <p className="w-[419px] flex absolute text-[16px] text-white h-[24px] mt-[110px] justify-center">
                  Dự án đã hoàn thành
                </p>
              </div>
              <div className="w-[419px] h-[164px] top-[48px] left-[420.67px] flex absolute">
                <h1 className="text-[52px] font-bold w-[105px] h-[64px] text-white mt-[30px] ml-[158px]">
                  20+
                </h1>
                <p className="w-[419px] flex absolute text-[16px] text-white h-[24px] mt-[110px] justify-center">
                  Khách hàng
                </p>
              </div>
              <div className="w-[419px] h-[164px] top-[48px] left-[841.33px] flex absolute ">
                <h1 className="text-[52px] font-bold w-[105px] h-[64px] text-white my-[30px] px-[157px]">
                  5+
                </h1>
                <p className="w-[419px] flex absolute text-[16px] text-white h-[24px] mt-[110px] justify-center">
                  Năm kinh nghiệm
                </p>
              </div>
              <img
                className="absolute bottom-0 left-0"
                src="./vienbl.svg"
              ></img>
              <img
                className="absolute py-[48px] ml-[418.67px]"
                src="./cay1.svg"
              ></img>
              <img
                className="absolute py-[48px] ml-[839.33px]"
                src="./cay1.svg"
              ></img>
              <img className="flex ml-[499px]" src="./vientr.svg"></img>
            </div>
            <img
              className=" absolute z-10 top-[708px] right-[208px]"
              src="./vienngoai.svg"
            ></img>
          </div>
          <div className="w-[540px] overflow-hidden h-[336px] absolute top-[1279px] right-[90px]">
            <p className="font-bold text-[52px] text-gray-700 whitespace-pre-line w-[540px] h-[192px]">
              Chúng tôi cung cấp những
              <span className="text-[#E55C79]"> giải pháp</span> tốt nhất cho
              bạn
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
