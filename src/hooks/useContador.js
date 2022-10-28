import { useEffect, useState } from "react"


export const useContador=()=>{
    
    const [numberChange,setnumberChange]=useState(1)
    const diminishHandled=()=>{
        (numberChange>0)?setnumberChange(numberChange-1):setnumberChange(0)
        console.log(numberChange)
    }

    const ResetHandled=()=>{
        setnumberChange(0)
        console.log(numberChange)

    }

    const increaseHandled =()=>{
        setnumberChange(numberChange+1)
        console.log(numberChange)

    }

    return {numberChange,setnumberChange,diminishHandled, ResetHandled, increaseHandled,useEffect}
}
export let numberChange