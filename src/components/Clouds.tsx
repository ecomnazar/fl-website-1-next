'use client'
import Script from 'next/script'
import React from 'react'
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three";
import Button from './Button';
import Text from './Text';
import MainText from './MainText';

const Clouds = () => {
    const myRef = React.useRef<HTMLDivElement>(null);

    // React.useEffect(() => {
    //     CLOUDS({
    //         THREE: THREE,
    //         el: myRef.current,
    //         cloudColor: "#628BBB",
    //         skyColor: "#30332F",
    //         sunColor: "#30332F",
    //         sunlightColor: "30332F",
    //         cloudShadowColor: "#30332F",
    //         sunGlareColor: "#30332F",
    //     });

    //     return () => {
    //         if (myRef.current) {
    //             //@ts-ignore
    //             if (myRef.current.vanta) { // <-- ERROR HAPPENS HERE
    //                 //@ts-ignore
    //                 myRef.current.vanta.destroy();
    //             }
    //         }
    //     };
    // }, []);


    return (
        <>
            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
            <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" /> */}
            <section ref={myRef} className="bg-[url('/images/header-image.png')] py-16 bg-cover bg-centers">
                <div className="container mx-auto px-4 py-8">
                    <div className='max-w-[800px] text-left mx-auto'>
                        <MainText className='mb-12 text-center sm:text-left'>Персональный <span className="text-primary">цифровой психолог онлайн</span></MainText>
                        <p className="max-w-[524px] text-[14px] md:text-[25px] italic mb-8">“В грусти таится тяжесть, но в освобождении от нее рождается легкость. Нужно просто начать говорить об этом.”  </p>
                    </div>
                    <Text title={"Поговорим прямо сейчас?"} className="text-center" />
                    <Button title={"Начать"} className="!bg-[#ffffff] !text-primary my-8" />
                    <p className="text-[18px] text-center mt-4">Попробуйте сервис бесплатно на <span className="font-[700]">24 часа</span></p>
                    <p className="text-[20px] text-center mt-12">Подробнее</p>
                    <img src="/images/arrow-down.svg" className="mx-auto mt-6" />
                </div>
            </section>
        </>
    )
}

export default Clouds