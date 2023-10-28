import { useEffect } from "react";

export default async function About() {
    // const randNum = Math.round(Math.random() * (10 - 1) + 1)
    // console.log(randNum)
    // if (randNum  > 5) {
    //     throw new Error(` Failed to load ${randNum}`)
    // }
    // throw new Error(" Failed to load ")

    // Api call 
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    await sleep(3000)


    return (<div>
        About page 
        {/* cons randNum  {randNum} */}
    </div>)
}
