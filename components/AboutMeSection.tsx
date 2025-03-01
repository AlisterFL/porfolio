"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { FiraCodeFont, OpenSansFont } from "../lib/fonts";
import { motion } from "framer-motion";
import Image from 'next/image'


const AboutMeSection: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className={`max-w-[1300px] m-auto w-full h-auto flex flex-col px-4 justify-center py-14`}>
    <div className="flex flex-row justify-between">
        <p className={`${FiraCodeFont.className} text-white text-xs font-medium`}>./About me ...</p>
    </div>
    <div className={`w-full flex items-stretch justify-between ${OpenSansFont.className} mt-4 flex-col-reverse md:flex-row`}>
        {/* Left Blocks */}
        <div className="w-full md:w-3/5 flex flex-col space-y-4 max-w-[550px] gap-2">
            <p className={`${OpenSansFont.className} text-[#A6A6A6] font-light text-justify`}>{translations.aboutMe}</p>
            <div className="bg-white rounded-3xl p-4">
                <h2 className="mb-4">Front-end</h2>
                <p className={`${FiraCodeFont.className} text-xs`}>Typescript / React / Svelte / Angular / Next / React Native</p>
            </div>
            <div className="flex w-full">
                <div className="border border-[#A6A6A6] rounded-3xl p-4 text-white w-full md:w-3/5">
                    <h2 className="text-[#A6A6A6] mb-4">Back-end</h2>
                    <p className={`${FiraCodeFont.className} text-xs`}>PostgreSQL / Supabase / Node / Express</p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    {/* Conteneur principal relatif pour bien gérer le chevauchement */}
                    <div className="relative w-14 h-14">
                        {/* Cercle avec le logo GitHub */}
                        <div className="absolute w-12 h-12 flex items-center justify-center rounded-full border border-[#A6A6A6] bg-black">
                            <img src="/github-white.png" alt="Logo GitHub" className="w-5 h-5" />
                        </div>

                        {/* Cercle avec la flèche (chevauche 1/3 sur la droite) */}
                        <a href="https://github.com/alisterfl" target="_blank" rel="noopener noreferrer">
                            <div className="absolute w-12 h-12 flex items-center justify-center rounded-full border border-[#A6A6A6] bg-white left-[58%]">
                                <motion.span
                                    className="text-black text-xl"
                                    whileHover={{
                                    x: 4,
                                    y: -4,
                                    transition: { duration: 0.15 },
                                    }}
                                    animate={{
                                    x: 0,
                                    y: 0,
                                    transition: { duration: 0.15 },
                                    }}
                                >
                                    &#8599;
                                </motion.span>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
            <div className="border border-[#A6A6A6] rounded-3xl p-4 text-white">
                <h2 className="text-[#A6A6A6] mb-4">{translations.tools}</h2>
                <p className={`${FiraCodeFont.className} text-xs`}>GitHub / N8N / Docker / Vercel / Figma / Notion</p>
            </div>
        </div>

        {/* Image on the Right */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
                src="/alisterTest.jpg"
                alt="Picture of the author"
                className="w-full object-cover rounded-lg"
            />
        </div>
    </div>
</section>

  );
};

export default AboutMeSection;
