import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-500 py-12">
      <div className="relative h-[696px] w-[576px] rounded-tl-[48px] rounded-br-[48px] bg-[#FADEE4] shadow-md  ">
        <div className="absolute  flex justify-start">
          <img src="/vientren.svg" />
        </div>
        <div className=" right relative flex py-12   px-12  ">
          <div>
            <div>
              <h1 className=" text-4xl font-bold text-[#E55C79] ">
                Nộp hồ sơ ứng tuyển
              </h1>
              <p className=" mt-4 pr-[48px] text-base text-gray-500">
                Vui lòng cho chúng tôi một số thông tin về bạn nhé! SuZu Group
                sẽ liên hệ lại sớm nhất.
              </p>
            </div>
            <div className="flex">
              <p className="border-soild mt-6 border-red-500 text-gray-700">
                Họ
              </p>
              <p className="border-soild mt-6 border-red-500 px-[237px] text-gray-700">
                Tên
              </p>
            </div>
            <div className="relative flex">
              <input
                placeholder="Họ"
                className=" mt-[6px] h-[44px] w-[224px] rounded-lg border border-gray-300 bg-white p-2"
              ></input>

              <input
                placeholder="Tên"
                className="mt-[6px] ml-8 h-[44px] w-[224px] rounded-lg border border-gray-300 bg-white p-2 "
              ></input>
            </div>
            <p className="pt-[24px] text-gray-700">Email</p>
            <div>
              <input
                placeholder="you@company.com"
                className=" mt-[6px] h-[44px] w-[480px] rounded-lg border border-[#FE6E6E] bg-white p-2 text-red-900 "
              ></input>
            </div>
          </div>
        </div>

        <div className=" absolute  bottom-0 right-0  flex justify-end  ">
          <img src="/vienduoi.svg" />
        </div>
      </div>
    </main>
  );
}
