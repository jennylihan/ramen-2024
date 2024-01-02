import * as React from "react";
import { motion } from "framer-motion";
import Egg from "./egg";
import EmptyBowl from "./emptybowl";
import Seaweed from "./seaweed";
import Onion from "./onion";

type Veggie = {
  category: string;
  link: string;
  action: string;
};

let soupColors = {
  "bowl-veggie": "#FF6059",
  "bowl-red": "#FF6059",
  "bowl-green": "#FF6059",
  "bowl-original": "orange",
  "bowl-black": "#FF6059",
}


export default function Bowl({
  bowlType, veggie1, veggie2, veggie3, egg
}: {
  bowlType: string | null, veggie1: Veggie | null, veggie2: Veggie | null, veggie3: Veggie | null, egg: boolean
}) {
  let soupColor: string = soupColors[bowlType as keyof typeof soupColors];
  return (
    <div className="">
      <EmptyBowl soupColor={soupColor}>
        <Egg />
        {/* <Seaweed /> */}
        {/* <Onion veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} /> */}
      </EmptyBowl>
    </div >
  )
}
