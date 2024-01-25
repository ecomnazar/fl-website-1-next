import React from 'react';
import Text from './Text';
import Image from 'next/image';

interface Props {
    className?: string;
}

const SecondSession: React.FC<Props> = ({ className }) => {
    return (
        <div className={`p-8 pb-12 bg-[url('/images/radial-gradient-1.png')] rounded-xl bg-cover bg-center relative ${className}`}>
            <Text title={"Оценка каждой сессии"} className="mb-8" />
            <p className="text-lg">После, ваш дневник прогресса доступен в личном кабинете</p>
            <div className="border border-[#ffffff] rounded-xl p-2 w-[70%] mt-4">
                <p>Сессия №2</p>
                <p className="text-[14px] my-4">Мое самочувствие</p>
                <h4 className="text-[13px]">14 февраля 24г.</h4>
            </div>
            <Image width={35} height={35} src="/images/like.svg" className="absolute bottom-5 right-5" alt='' />
        </div>
    )
}

export default SecondSession