import * as React from "react";
import { motion } from "framer-motion";
import Egg from "./egg";
import EmptyBowl from "./emptybowl";
import Seaweed from "./seaweed";
import Onion from "./onion";
import Mushroom from "./mushroom";
import Cabbage from "./cabbage";
import Garlic from "./garlic";

type Veggie = {
  category: string;
  link: string;
  action: string;
};

let soupColors = {
  "bowl-veggie": "#426714",
  "bowl-red": "#A0310E",
  "bowl-green": "#426714",
  "bowl-original": "#A0310E",
  "bowl-black": "#301D1D",
}


export default function Bowl({
  bowlType, veggie1, veggie2, veggie3, egg
}: {
  bowlType: string | null, veggie1: Veggie | null, veggie2: Veggie | null, veggie3: Veggie | null, egg: boolean | null
}) {

  let soupColor: string = soupColors[bowlType as keyof typeof soupColors];
  return (
    <div className="">
      <EmptyBowl soupColor={soupColor}>
        <Egg egg={egg} />
        <Onion veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
        <Seaweed veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
        <Mushroom veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
        <Cabbage veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
        <Garlic veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
      </EmptyBowl>
    </div >
  )
}
