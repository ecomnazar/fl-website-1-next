import clsx from 'clsx';
import Image from 'next/image'
import React from 'react'

interface Props {
    type: 'red' | 'blue';
}

const Prices: React.FC<Props> = ({ type = 'blue' }) => {
    const imagePath = type === 'blue' ? '/images/tick-icon.svg' : '/images/x-icon.svg'
    return (
        <div className="rounded-lg relative pb-8 overflow-hidden bg-[#ffffff]">
            <div className={clsx("absolute top-0 left-0 w-full z-[0] sm:h-[80px]", {
                ['bg-primary']: type === 'blue',
                ['bg-[#B53535]']: type === 'red'
            })}>
                <img src={`/images/${type}-bg.svg`} className="w-full translate-y-[50px] sm:translate-y-[20px] lg:-translate-y-[20px]" />
            </div>
            <div className="relative z-[10]">
                <div className="text-[#000000] bg-[#ffffff] rounded-bl-2xl rounded-br-2xl font-[700] mx-auto w-[132px] h-[26px] text-[12px] mb-4 flex items-center justify-center">{type === 'blue' ? 'Сеанс.онлайн' : 'Психолог'}</div>
                <p className="text-center text-[18px] leading-5">{type === 'blue' ? '390 руб' : '3500'} <br /><span className="text-[10px]"> {type === 'blue' ? 'Целый день' : 'средняя цена за 1 час'}</span></p>
                <div className="flex flex-col w-fit mx-auto mt-12 md:mt-12 gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <Image width={12} height={10} src={imagePath} alt="" />
                        <p className="!text-[10px] md:!text-[14px] leading-[13.6px] max-w-[100px] text-[#000000] text-lg">{type === 'blue' ? 'Бесплатная пробная сессия' : 'Дорого'}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Image width={12} height={10} src={imagePath} alt="" />
                        <p className="!text-[10px] md:!text-[14px] leading-[13.6px] max-w-[100px] text-[#000000] text-lg">{type === 'blue' ? 'Круглосуточно' : 'Долго ждать запись'}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Image width={12} height={10} src={imagePath} alt="" />
                        <p className="!text-[10px] md:!text-[14px] leading-[13.6px] max-w-[100px] text-[#000000] text-lg">{type === 'blue' ? 'Все методики' : 'Одна рабочая методика'}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Image width={12} height={10} src={imagePath} alt="" />
                        <p className="!text-[10px] md:!text-[14px] leading-[13.6px] max-w-[100px] text-[#000000] text-lg">{type === 'blue' ? 'Дружелюбный и отзывчивый' : 'Шанс не понравиться друг другу'}</p>
                    </div>
                </div>
                <button className={clsx("block mx-auto w-[105px] h-[28px] text-[8px] rounded-xl mt-8", {
                    ['bg-primary']: type === 'blue',
                    [' bg-[#202020]']: type === 'red'
                })}> {type === 'blue' ? 'Попробовать' : ':('}</button>
                {/* <Button title={":("} className="bg-[#202020]" /> */}
            </div>
        </div>
    )
}

export default Prices