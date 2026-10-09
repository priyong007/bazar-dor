import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const headlines = await res.json()
    
    return (
        <div className='bg-[#FAFCFA] border-purple-100 border-y-2 px-4 my-4'>

            <MarqueeText className='py-1  border-gray-200' direction='right' duration={10}>

            { 
            headlines.map(h => ( 
            <span key={h.id}> <span> <span>{h.image}</span>{" "} {h.nameBn}{" "} <span>{h.today} টাকা/কেজি</span>{" "} 
            <span className={`text-sm font-semibold ${ h?.change?.dir === "up" ? "text-red-500" : h?.change?.dir === "down" ? "text-green-600" : "text-gray-500" }`} > {h?.change?.dir === "up" ? "▲" : h?.change?.dir === "down" ? "▼" : "—"}{" "} {Math.abs(h?.change?.pct || 0)}% 
                </span> </span> <span className="mx-4"></span> 
                
                </span> 
        
        )
        
        ) 
            }

            </MarqueeText>
        </div>
    );
};

export default Marquee;