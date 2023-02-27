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
          className="min-h-[718px] w-full object-cover "
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
                  <button className="my-[8px] ml-[20px] inline-flex h-[24px] w-[78px] justify-center font-bold text-gray-700 ">
                    Trang chủ
                  </button>
                  <button className="my-[8px] ml-[28px] inline-flex h-[44px] w-[159px] justify-center font-bold text-gray-700 ">
                    Chúng tôi là ai?
                  </button>
                  <button className="my-[8px] ml-[8px] inline-flex h-[44px] w-[86px] justify-center font-bold text-gray-700 ">
                    Dự án
                  </button>
                  <button className="my-[8px] ml-[8px] inline-flex h-[44px] w-[131px] justify-center font-bold text-gray-700 ">
                    Tuyển dụng
                  </button>
                  <button className="my-[8px] ml-[8px] inline-flex h-[44px] w-[96px] justify-center font-bold text-gray-700 ">
                    Liên hệ
                  </button>
                </div>
                <div className=" mt-[8px] mr-[8px] ml-[189px] h-[44px] w-[84px] rounded-[8px] border-[1px] border-[#1B1B1B0D] bg-[#1B1B1B1A] bg-opacity-10">
                  <div className="my-[1px]">
                    <button className="border-[#E7E7E7 text-r-[#25109A] ml-[1px] h-[40px] w-[40px] rounded-[8px] border-[1px] font-bold text-[#7F028C] hover:bg-white focus:bg-white focus:outline-none ">
                      VI
                    </button>

                    <button className="  mr-[1px] h-[40px]  w-[40px] rounded-[8px] font-bold text-gray-700 hover:bg-white hover:bg-white focus:bg-white focus:outline-none ">
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
            <div className=" absolute top-[269px] right-[170px] flex h-[24px] w-[116px] items-center justify-center rounded-full bg-gradient-to-r from-[#E55C79] to-[#FF9679] text-[10px] font-bold text-white">
              Liên hệ chúng tôi
            </div>
            <div className=" absolute top-[262px] left-[236px] h-[128px] w-[967px] ">
              <h1 className=" bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text text-center text-[52px] font-bold  text-transparent ">
                Xây dựng sản phẩm kỹ thuật số
                <p className="mt-[-10px] bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text text-center text-[52px] font-bold  text-transparent ">
                  thương hiệu và trải nghiệm người dùng
                </p>
              </h1>
            </div>
            <span className=" absolute top-[414px] right-[410.5px] h-[48px] w-[620px] whitespace-normal text-center text-[16px] text-[#7F028C] ">
              We have three projects with this template and that is because we
              love the design, the large number of possibilities.
            </span>
            <img
              src="./shape.svg"
              className=" absolute left-[834px] top-[260px] "
            ></img>
            <img
              src="./nuavien1.svg"
              className=" absolute top-[280px] right-[1346px]"
            ></img>
            <img
              src="./nuavien2.svg"
              className="absolute top-[276px] right-[1350px]"
            ></img>
            <button className="absolute top-[486px] right-[659px] h-[123px] w-[123px]">
              <img className="ml-[55.61px]" src="./muiten.svg" alt="" />
            </button>
            <img
              className="absolute  top-[486px] right-[659px] h-[123px] w-[123px] "
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
            className=" absolute left-[84px] top-[635px] z-0"
            src="./shape03.svg"
          ></img>
          <img
            className=" absolute top-[708px] right-[208px] z-10"
            src="./vienngoai.svg"
          ></img>
          <button className="text-left-[16px]  absolute right-[212px] top-[704px] h-[99px] w-[99px] whitespace-pre-line rounded-full bg-gradient-to-r from-[#FFC0AF] to-[#EF9DAF] text-[14px] text-white">
            Chúng tôi đã làm gì?
          </button>
          <div>
            <div className="absolute top-[853px] right-[377px] z-20 flex h-[45px] w-[45px] rounded-full bg-gradient-to-r from-[#FFC0AF] to-[#EF9DAF]"></div>
            <div className="absolute top-[1107px] left-[127px] z-10 flex h-[76px] w-[76px] rounded-full bg-gradient-to-r from-[#FFEAE4] to-[#FADEE4]"></div>
            <div className="absolute top-[887px] left-[78px] z-0 h-[260px] w-[1260px] rounded-[48px] bg-gradient-to-r from-[#FFEAE4] to-[#FADEE4]"></div>
            {/* statistic */}
            <div className="absolute  top-[875px] left-[90px] z-0 h-[260px] w-[1260px] rounded-[48px] bg-gradient-to-br from-[#FF9679] to-[#E55C79]">
              <div className="absolute top-[48px] flex h-[164px] w-[419px] ">
                <h1 className="my-[30px] h-[64px] w-[105px] px-[157px] text-[52px] font-bold text-white">
                  30+
                </h1>
                <p className="absolute mt-[110px] flex h-[24px] w-[419px] justify-center text-[16px] text-white">
                  Dự án đã hoàn thành
                </p>
              </div>
              <div className="absolute top-[48px] left-[420.67px] flex h-[164px] w-[419px]">
                <h1 className="mt-[30px] ml-[158px] h-[64px] w-[105px] text-[52px] font-bold text-white">
                  20+
                </h1>
                <p className="absolute mt-[110px] flex h-[24px] w-[419px] justify-center text-[16px] text-white">
                  Khách hàng
                </p>
              </div>
              <div className="absolute top-[48px] left-[841.33px] flex h-[164px] w-[419px] ">
                <h1 className="my-[30px] h-[64px] w-[105px] px-[157px] text-[52px] font-bold text-white">
                  5+
                </h1>
                <p className="absolute mt-[110px] flex h-[24px] w-[419px] justify-center text-[16px] text-white">
                  Năm kinh nghiệm
                </p>
              </div>
              <img
                className="absolute bottom-0 left-0"
                src="./vienbl.svg"
              ></img>
              <img
                className="absolute ml-[418.67px] py-[48px]"
                src="./cay1.svg"
              ></img>
              <img
                className="absolute ml-[839.33px] py-[48px]"
                src="./cay1.svg"
              ></img>
              <img className="ml-[499px] flex" src="./vientr.svg"></img>
            </div>
            <img
              className=" absolute top-[708px] right-[208px] z-10"
              src="./vienngoai.svg"
            ></img>
          </div>
          {/* right side */}
          <div className="absolute top-[1279px]  right-[90px] h-[336px] w-[540px] overflow-hidden">
            <p className="h-[192px] w-[540px] whitespace-pre-line text-[52px] font-bold leading-[64px] text-gray-700">
              Chúng tôi cung cấp những
              <span className="text-[#E55C79]"> giải pháp</span> tốt nhất cho
              bạn
            </p>

            <div className="mt-[24px]">
              <h1 className="h-[48px] w-[540px] whitespace-pre-line text-[16px] leading-[24px] text-gray-700 ">
                Các chuyên gia của chúng tôi sẽ giúp bạn lập kế hoạch thúc đẩy
                và phát triển các dự án của các bạn.
              </h1>
            </div>

            <div className="mt-[24px] h-[48px] w-[384px]">
              <div className="h-[48px] w-[48px] rounded-full bg-gradient-to-r from-[#CAC3F1] to-[#EBA6F3]">
                <div className="flex">
                  <button className="mt-[12px] ml-[24px] flex bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text font-extrabold text-transparent">
                    CHO CHÚNG TÔI BIẾT VỀ DỰ ÁN CỦA BẠN
                    <img
                      className="mt-[6px] ml-[14px]"
                      src="./muitenduan.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className=" absolute top-[1279px] left-[90px] h-[184px] w-[620px] ">
            <div className=" h-[24px] w-[620px]">
              01
              <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
            </div>
            <div>
              <div className="h-[136px] w-[620px] ">
                <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                  Truyền thông
                </p>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Profile optimization
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Tăng lượt tương tác
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Quảng cáo
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Measuring
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Phim
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Posting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute top-[1507px] left-[90px] h-[184px] w-[620px]">
            <div className=" h-[24px] w-[620px]">
              02
              <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
            </div>
            <div>
              <div className="h-[136px] w-[620px] ">
                <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                  Thiết kế mỹ thuật
                </p>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Minh hoạ / Truyện tranh cộng đồng
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Sáng tạo nhân vật
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Truyện tranh
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Hoạt hình
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Video Âm Nhạc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute top-[1735px] left-[90px] h-[184px] w-[620px]">
            <div className=" h-[24px] w-[620px]">
              03
              <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
            </div>
            <div>
              <div className="h-[136px] w-[620px] ">
                <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                  Thiết kế đồ hoạ
                </p>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Logo
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Infographics
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Banners & Posters
                    </p>
                    <div className="flex items-center">
                      <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                      <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                        Minh họa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Bao bì
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Tạp chí
                    </p>
                    <div className="flex items-center">
                      <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                      <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                        Bưu thiếp, tờ rơi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute top-[1963px] left-[90px] h-[184px] w-[620px]">
            <div className=" h-[24px] w-[620px]">
              04
              <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
            </div>
            <div>
              <div className="h-[136px] w-[620px] ">
                <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                  Thiết kế sản phẩm
                </p>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Thương mại điện tử
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Tin tức, báo chí
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px]  text-[16px] ">
                      Kinh doanh, công ty
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="ml-[48px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Quản trị quan hệ khách hàng
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                    <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                      Hệ thống quản lý khách hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute top-[2191px] left-[90px] h-[184px] w-[620px]">
          <div className=" h-[24px] w-[620px]">
            05
            <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
          </div>
          <div>
            <div className="h-[136px] w-[620px] ">
              <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                Âm nhạc
              </p>
              <div className="flex items-center">
                <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                  Nghệ sĩ
                </p>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Soạn nhạc
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Viết lời
                  </p>
                  <div className="flex items-center">
                    <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                    <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                      Audio mastering
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img className="ml-[48px] mt-[16px]" src="./tick.svg" />
                <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                  Ghi âm, lồng tiếng
                </p>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Remix
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[16px]" src="./tick.svg" />
                  <p className="mt-[16px] ml-[10px] text-base text-[16px] ">
                    Service Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute top-[2419px] left-[90px] h-[184px] w-[620px]">
          <div className=" h-[24px] w-[620px]">
            06
            <div className="ml-[24px] inline-block w-[572px] border-b  border-gray-500 pb-[6px] "></div>
          </div>
          <div>
            <div className="h-[136px] w-[620px] ">
              <p className="ml-[46px] mt-[24px] h-[52px] w-[574px] text-[40px] font-bold">
                Video
              </p>
              <div className="flex items-center">
                <img className="ml-[48px] mt-[22px]" src="./tick.svg" />
                <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                  Chỉnh sửa video
                </p>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Đồ hoạ chuyển động
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="ml-[26px] mt-[22px]" src="./tick.svg" />
                  <p className="mt-[22px] ml-[10px] text-base text-[16px] ">
                    Hoạt họa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1917px] right-[318px] h-[54px] w-[54px] rounded-full bg-[#FCEEEB]"></div>
        <div className="absolute top-[2063px] right-[180px] h-[116px] w-[116px] rounded-full bg-[#F8DED7]"></div>
        {/*picture annimation*/}
        <div>
          <img className=" absolute top-[2949.5px] w-full" src="/bg1.svg"></img>
          <img className=" absolute top-[2949px] w-full" src="/bg2.svg"></img>
          <img
            className=" absolute top-[2853px] right-[90px]"
            src="/bg3.svg"
          ></img>
          <img className=" absolute top-[2983px] w-full" src="/bg4.svg"></img>
          <img
            className=" absolute top-[2759px] right-[175px]"
            src="/people1.svg"
          ></img>
          <img
            className=" absolute top-[3238px] right-[175px]"
            src="/people2.svg"
          ></img>
          <div className="absolute top-[3148px] left-[90px] h-[264px] w-[620px]">
            <h1 className="text-[52px] font-bold leading-[64px] text-[#F3F3F3]">
              Create your hight-engaged, hight performance
            </h1>
            <h1 className="mt-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
              Shall there whose those stand she end. So unaffected partiality
              indulgence dispatched to of celebrated remark allowance own
              perceived abilities.
            </h1>
          </div>
          {/* dấu point*/}
          <div className="absolute top-[2772px] left-[90px] h-[90px] w-[90px] rounded-full bg-[#FCEFF2]"></div>
          <div className="absolute top-[2907px] right-[13px] h-[54px] w-[54px] rounded-full bg-[#FCEEEB]"></div>
          <div className="absolute top-[3515px] right-[55px] h-[74px] w-[74px] rounded-full bg-gradient-to-bl from-[#FFD5C9] to-[#F5BEC9]"></div>
          <div className="absolute top-[3201px] right-[682px] h-[54px] w-[54px] rounded-full bg-gradient-to-bl from-[#FFC0AF] to-[#EF9DAF]"></div>
          <div className="absolute top-[3569px] left-[141px] h-[54px] w-[54px] rounded-full bg-gradient-to-bl from-[#FFD5C9] to-[#F5BEC9]"></div>
          <div className="absolute top-[3880px] left-[65px] h-[116px] w-[116px] rounded-full bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4]"></div>
        </div>
        {/*khung ảnh*/}
        <div className="bd absolute top-[3945px] right-[330px] h-[136px] w-[780px] text-center">
          <p className="h-[64px] w-[780px] whitespace-pre-line bg-gradient-to-br from-[#FF9679] to-[#E55C79] bg-clip-text text-[52px] font-bold font-extrabold leading-[64px] text-transparent">
            Dự án
            <span className="text-gray-700"> nổi bật</span>
          </p>
          <p className="mt-24px ml-[80px] mt-[24px] flex h-[48px] w-[620px] whitespace-pre-line text-[16px] leading-[24px]">
            Urna tempus, lectus volutpat tortor commodo dis sed scelerisque
            volutpat bibendum euismod dictum egestas odio
          </p>
        </div>
        <div className="flex flex-col-reverse">
          <div className="absolute top-[4125px] left-[90px] flex h-[1552px] w-[1260px] flex-row ">
            <div className="h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
          </div>
          <div className="absolute top-[4657px] left-[90px] flex h-[1552px] w-[1260px] flex-row ">
            <div className="h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
          </div>
          <div className="absolute top-[5189px] left-[90px] flex h-[1552px] w-[1260px] flex-row ">
            <div className="h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
            <div className="ml-[24px] h-[488px] w-[404px]">
              <img src="./img1.svg"></img>
              <h1 className="mt-[20px] h-[32px] w-[404px] text-[24px]">
                Title of project
                <p className="mt-[8px] h-[24px] w-[404px] text-[16px] ">
                  Services of project
                </p>
              </h1>
            </div>
          </div>
        </div>

        <div className=" mt-[56px] flex">
          <button className="absolute top-[5733px] left-[579px] z-10 flex h-[48px] w-[330px] bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text font-extrabold text-transparent">
            XEM THÊM CÁC DỰ ÁN NỔI BẬT
            <img className="mt-[6px] ml-[14px]" src="./muitenduan.svg" alt="" />
          </button>
        </div>
        <div className="absolute top-[5721px] left-[555px] h-[48px] w-[48px] rounded-full bg-gradient-to-r from-[#CAC3F1] to-[#EBA6F3]"></div>
        {/* dòng line bg 2 */}
        <div className="absolute top-[6002px] z-40 h-[677.38px] w-full ">
          <h1 className="mt-[115px] text-center text-[52px] font-bold leading-[64px] text-white ">
            Khách hàng nói về chúng tôi
          </h1>
          <h1 className="mt-[80px] text-center text-[36px] font-bold leading-[44px] text-[#F3F3F3]">
            CJ Group
          </h1>
          {/* dòng line bg 2 */}
          <img className=" ml-[644px] mt-[16px]" src="./star.svg" alt="" />
          <h1 className="ml-[408px] mt-[24px] h-[72px] w-[629px] whitespace-pre-line text-center text-[16px] leading-[24px] text-white ">
            Ultrices posuere pretium, elit adipiscing phasellus orci, platea
            elit vel, habitant magna lacinia vitae volutpat non volutpat quisque
            ornare in nibh hendrerit pulvinar amet purus imperdiet scelerisque
            massa gravida aliquet
          </h1>
          <div className="ml-[664px] flex h-[48px] w-[112px] justify-center ">
            <div className="flex justify-center space-x-4">
              <button className="mt-[24px] h-[48px] w-[48px] rounded-[8px] bg-gradient-to-br from-[#CAC3F1] to-[#EBA6F3]">
                <img src="./back1.svg" className=" my-auto mx-auto " alt="" />
              </button>
              <button className="mt-[24px] h-[48px] w-[48px] rounded-[8px] bg-gradient-to-br from-[#CAC3F1] to-[#EBA6F3]">
                <img src="./back2.svg" className=" my-auto mx-auto " alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* dấu point*/}
        <div className="absolute top-[5830px] right-[604px] h-[74px] w-[74px] rounded-full bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4]"></div>
        <div className="absolute top-[6060px] right-[56px] z-50 h-[116px] w-[116px] rounded-full bg-gradient-to-br from-[#FFC0AF] to-[#EF9DAF]"></div>
        {/* logo ảnh trống */}
        <img
          src="./pointnone1.svg"
          className="absolute top-[6363px] left-[90px] z-50 "
          alt=""
        />
        <img
          src="./pointnone2.svg"
          className="absolute top-[6455px] left-[286px] z-50 "
          alt=""
        />
        <img
          src="./pointnone1.svg"
          className="absolute top-[6225px] right-[310px] z-50 "
          alt=""
        />
        <img
          src="./pointnone2.svg"
          className="absolute top-[6314px] right-[90px] z-50 "
          alt=""
        />
        <img
          src="./pointnone3.svg"
          className="absolute top-[6408px] right-[170px] z-50 "
          alt=""
        />
        {/* hoạ tiết dấu sao */}
        <img
          src="./hoatiet1.svg"
          className="absolute top-[6322px] right-[1278px] z-50 "
          alt=""
        />
        <img
          src="./hoatiet2.svg"
          className="absolute top-[6443px] right-[1160px] z-50 "
          alt=""
        />
        <img
          src="./hoatiet3.svg"
          className="absolute top-[6225px] right-[1022px] z-50 "
          alt=""
        />
        <img
          src="./hoatiet4.svg"
          className="absolute top-[6324px] right-[396px] z-50 "
          alt=""
        />
        <img
          src="./hoatiet5.svg"
          className="absolute right-[150px] top-[6290px] z-50 "
          alt=""
        />
        <img
          src="./hoatiet6.svg"
          className="absolute right-[124px] top-[6504px] z-50 "
          alt=""
        />
        <img
          src="./logocj.svg"
          className="absolute top-[6225px] left-[189px] z-50"
          alt=""
        />
        <div className="absolute top-[6088px] left-[279px] z-40 h-[54px] w-[54px] rounded-full bg-gradient-to-br from-[#FFC0AF] to-[#EF9DAF]"></div>
        {/* 3 layer line bg 2*/}
        <img className="absolute top-[6002px] z-10" src="./lay3.svg" alt="" />
        <img className="absolute top-[5987px] z-20" src="./lay2.svg" />
        <img className="absolute top-[6002px] z-30" src="./lay1.svg" alt="" />
        <div className="bd absolute top-[6801px] h-[456px] w-[1440px] "></div>
        {/* Tạo header 2 nhận thông báo */}
        <div className="absolute top-[6909px] left-[78px] h-[180px] w-[1260px] rounded-[48px] bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4] "></div>
        <div className=" absolute top-[6897px] left-[90px] h-[180px] w-[1260px] rounded-[48px] bg-gradient-to-br from-[#FF9679] to-[#E55C79] ">
          <img src="./vienblr.svg" alt="" />
        </div>
        <button className=" absolute top-[6963px] right-[150px] h-[48px] w-[188px] rounded-[999px] bg-gradient-to-br from-[#CAC3F1] to-[#EBA6F3] ">
          NHẬN THÔNG BÁO
        </button>
        <div className="absolute left-[150px] top-[6945px] h-[84px] w-[560px] text-[36px] font-bold text-[#F3F3F3] ">
          Nhận tin tức từ chúng tôi
        </div>
        <div className="absolute top-[7005px] left-[150px] h-[24px] w-[560px] text-white ">
          We’ll send you a nice letter once per week. No spam.
        </div>

        <input
          placeholder="youremail@mail.com"
          className=" absolute top-[6963px] right-[346px] h-[48px] w-[364px] rounded-[999px] border-[1px] border-gray-300 bg-white pl-[16px] "
        ></input>
        {/* hoạ tiết point */}
        <div className="absolute top-[7040px] left-[196px] h-[74px] w-[74px] rounded-full bg-gradient-to-br from-[#FFD5C9] to-[#FFD5C9]"></div>
        <div className="absolute top-[6612px] left-[484px] z-50 h-[116px] w-[116px] rounded-full bg-gradient-to-br from-[#FFD5C9] to-[#FFD5C9]"></div>
        <div className="absolute top-[6870px] left-[826px] z-50 h-[54px] w-[54px] rounded-full bg-gradient-to-br from-[#FFC0AF] to-[#EF9DAF]"></div>
        <div className="absolute top-[7154px] left-[1403px] z-50 h-[74px] w-[74px] rounded-full bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4]"></div>

        <div className=" absolute top-[7131px] left-[90px] flex h-[30px] w-[1103px] items-center">
          <div className=" w-[44px] items-start border-b border-gray-300"></div>
          <div>
            <div className="ml-[16px] mr-[16px] inline-flex h-[24px] w-[235px] space-x-1 whitespace-pre-line text-[16px] text-gray-700">
              <p className="inline-block font-bold">Hãy gọi</p>
              <span className="inline-block text-gray-700">
                bất cứ khi nào bạn cần
              </span>
            </div>
          </div>
          <div className="w-[444px] border-b border-gray-300"></div>
        </div>
        <div className="absolute top-[7109px] right-[90px] h-[52px] w-[137px]">
          <p className="h-[24px] w-[137px] bg-gradient-to-br from-[#FF9679] to-[#E55C79] bg-clip-text text-[16px] text-transparent">
            Cuộc gọi miễn phí
          </p>
          <span className="ml-[9px] mt-[8px] text-[15px] font-bold">
            (442) 948-7736
          </span>
        </div>
        {/* footer trang */}
        <footer className="">
          <div className="absolute top-[7257px] h-[416px] w-[1440px] bg-[#F3F3F3]">
            <div className="mt-[90px] flex h-[188px] w-[1440px]   ">
              <div className="ml-[90px] h-[172px] w-[404px] ">
                <img className="" src="./logo.svg" alt="" />
                <div className="mt-[16px] h-[112px] w-[404px] ">
                  <div className="flex h-[48px] w-[389px] text-[16px] leading-[24px]">
                    <div className=" h-[24px] w-[56px] whitespace-nowrap text-[#1B1B1B] ">
                      Địa chỉ:
                    </div>
                    <div className="ml-[8px] h-[48px] w-[325px] text-gray-700">
                      265/40 Nơ Trang Long, Phường 11, Quận Bình Thạnh, Ho Chi
                      Minh City, Vietnam
                    </div>
                  </div>
                  <div className=" mt-[8px] flex h-[24px] w-[63px] whitespace-nowrap text-[16px] text-[#1B1B1B] ">
                    Liên lạc:
                    <div className="ml-[8px] h-[24px] w-[126px] font-semibold text-gray-700">
                      (442) 948-7736
                    </div>
                  </div>
                  <div className=" mt-[8px] flex h-[24px] w-[36px] whitespace-nowrap text-[16px] text-[#1B1B1B] ">
                    Mail:
                    <div className="ml-[8px] h-[24px] w-[126px] font-semibold text-gray-700">
                      contact@vaecorp.vn
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[24px] h-[188px] w-[190px] ">
                <div className="h-[20px] w-[190px] text-gray-500 ">
                  SuZu Group
                </div>
                <div className=" font-semibold">
                  <div className="mt-[16px] text-gray-600">Trang chủ</div>
                  <div className="mt-[8px] text-gray-600">Dự án</div>
                  <div className="mt-[8px] text-gray-600">Chúng tôi là ai</div>
                  <div className="mt-[8px] text-gray-600">Tuyển dụng</div>
                  <div className="mt-[8px] text-gray-600">Liên hệ</div>
                </div>
              </div>

              <div className="ml-[24px]  h-[124px] w-[190px] ">
                <div className="h-[20px] w-[190px] text-gray-500 ">
                  SuZu Studio
                </div>
                <div className=" font-semibold">
                  <div className="mt-[16px] text-gray-600">Suzu Studio</div>
                  <div className="mt-[8px] text-gray-600">Dự án</div>
                  <div className="mt-[8px] text-gray-600">Về Studio</div>
                </div>
              </div>
              <div className="ml-[24px]  h-[124px] w-[190px]">
                <div className="h-[20px] w-[190px] text-gray-500 ">
                  SuZu Social
                </div>
                <div className=" font-semibold">
                  <div className="mt-[16px] text-gray-600"> SuZu Social</div>
                  <div className="mt-[8px] text-gray-600">Dự án</div>
                  <div className="mt-[8px] text-gray-600">Về Social</div>
                </div>
              </div>
              <div className="ml-[24px]  h-[124px] w-[190px] ">
                <div className="h-[20px] w-[190px] text-gray-500 ">
                  Kết nối với chúng tôi
                </div>
                <div>
                  <div className="mt-[16px] flex text-gray-700">
                    <img src="./fb.svg" alt="" />
                    <div className="ml-[9.5px] font-semibold"> Facebook</div>
                  </div>
                </div>
                <div className="mt-[8px] flex text-gray-700">
                  <img src="./ig.svg" alt="" />
                  <div className="ml-[9.5px] font-semibold"> Instagram</div>
                </div>
                <div className="mt-[8px] flex text-gray-700">
                  <img src="./ytb.svg" alt="" />
                  <div className="ml-[9.5px] font-semibold"> Youtube</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[7585px] h-[88px] w-[1440px] bg-gradient-to-br from-[#FF9679] to-[#E55C79] ">
            <h1 className="my-[32px] mx-[551.5px] h-[24px] w-[337px] bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4] bg-clip-text text-[16px] text-transparent">
              {" "}
              © 2022 SuZu Group. Đã đăng ký bản quyền.
            </h1>
          </div>
        </footer>
      </div>
    </main>
  );
}
