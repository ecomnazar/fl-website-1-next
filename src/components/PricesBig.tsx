import Image from 'next/image'
import React from 'react'

const PricesBig = () => {
    return (
        <>
            <div className="rounded-lg relative pb-8 overflow-hidden bg-[#ffffff]">
                <div className="bg-[#0094FF] h-[100px] absolute top-0 left-0 w-full z-[0]">
                    <img src="/images/blue-bg.svg" className="w-full [min-w: 300px]:hidden translate-y-[30px] lg:translate-y-[10px] xl:translate-y-[-10px]" />
                </div>
                <div className="relative z-[10]">
                    <div className="text-primary bg-[#ffffff] rounded-bl-2xl w-fit rounded-br-2xl px-10 py-2 font-[700] mx-auto text-[16px] mb-4">Психолог</div>
                    <p className="text-center text-[24px]">390 руб <br /><span className="text-[16px]">Целый день</span></p>
                    <div className="flex flex-col w-fit mx-auto mt-12">
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Бесплатная пробная сессия</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Круглосуточно</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Все методики</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Дружелюбный и отзывчивый</p>
                        </div>
                    </div>
                    <button className="block mx-auto bg-primary w-[170px] py-2.5 rounded-xl mt-8">Попробовать</button>
                    {/* <Button title={":("} className="bg-[#202020]" /> */}
                </div>
            </div>
            <div className="rounded-lg relative pb-8 overflow-hidden bg-[#ffffff]">
                <div className="bg-[#B53535] h-[100px] absolute top-0 left-0 w-full z-[0]">
                    <img src="/images/red-bg.svg" className="w-full [min-w: 300px]:hidden translate-y-[30px] lg:translate-y-[10px] xl:translate-y-[-10px]" />
                </div>
                <div className="relative z-[10]">
                    <div className="text-[#000000] bg-[#ffffff] rounded-bl-2xl w-fit rounded-br-2xl px-10 py-2 font-[700] mx-auto text-[16px] mb-4">Психолог</div>
                    <p className="text-center text-[24px]">3500 руб <br /><span className="text-[16px]">средняя цена за 1 час</span></p>
                    <div className="flex flex-col w-fit mx-auto mt-24 md:mt-12">
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Дорого</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Долго ждать запись</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Одна рабочая методика</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                            <p className="max-w-[200px] text-[#000000] text-lg">Шанс не понравиться друг другу</p>
                        </div>
                    </div>
                    <button className="block mx-auto bg-[#202020] w-[170px] py-2.5 rounded-xl mt-8">:(</button>
                    {/* <Button title={":("} className="bg-[#202020]" /> */}
                </div>
            </div>
        </>

    )
}

export default PricesBig