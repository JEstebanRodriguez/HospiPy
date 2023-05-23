import React from 'react'

export const Waves = ({ dir, firstColor, secondColor }) => {
    return (
        <>
            {dir === 'wv__down' && <div className='bottom-0 w-full h-[30vh] overflow-hidden -z-9 absolute'>
                <svg className='w-full -top-[10%] absolute' id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><path className={firstColor} d="M0,245L80,261.3C160,278,320,310,480,285.8C640,261,800,180,960,155.2C1120,131,1280,163,1440,179.7C1600,196,1760,196,1920,228.7C2080,261,2240,327,2400,359.3C2560,392,2720,392,2880,326.7C3040,261,3200,131,3360,65.3C3520,0,3680,0,3840,24.5C4000,49,4160,98,4320,163.3C4480,229,4640,310,4800,343C4960,376,5120,359,5280,334.8C5440,310,5600,278,5760,245C5920,212,6080,180,6240,171.5C6400,163,6560,180,6720,196C6880,212,7040,229,7200,196C7360,163,7520,82,7680,89.8C7840,98,8000,196,8160,253.2C8320,310,8480,327,8640,302.2C8800,278,8960,212,9120,179.7C9280,147,9440,147,9600,138.8C9760,131,9920,114,10080,130.7C10240,147,10400,196,10560,212.3C10720,229,10880,212,11040,179.7C11200,147,11360,98,11440,73.5L11520,49L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path><path className={secondColor} d="M0,343L80,285.8C160,229,320,114,480,98C640,82,800,163,960,179.7C1120,196,1280,147,1440,114.3C1600,82,1760,65,1920,114.3C2080,163,2240,278,2400,326.7C2560,376,2720,359,2880,318.5C3040,278,3200,212,3360,171.5C3520,131,3680,114,3840,155.2C4000,196,4160,294,4320,310.3C4480,327,4640,261,4800,245C4960,229,5120,261,5280,302.2C5440,343,5600,392,5760,416.5C5920,441,6080,441,6240,416.5C6400,392,6560,343,6720,310.3C6880,278,7040,261,7200,228.7C7360,196,7520,147,7680,147C7840,147,8000,196,8160,236.8C8320,278,8480,310,8640,343C8800,376,8960,408,9120,416.5C9280,425,9440,408,9600,359.3C9760,310,9920,229,10080,236.8C10240,245,10400,343,10560,359.3C10720,376,10880,310,11040,277.7C11200,245,11360,245,11440,245L11520,245L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path><path className={firstColor} d="M0,49L80,57.2C160,65,320,82,480,138.8C640,196,800,294,960,277.7C1120,261,1280,131,1440,114.3C1600,98,1760,196,1920,245C2080,294,2240,294,2400,277.7C2560,261,2720,229,2880,179.7C3040,131,3200,65,3360,89.8C3520,114,3680,229,3840,236.8C4000,245,4160,147,4320,163.3C4480,180,4640,310,4800,318.5C4960,327,5120,212,5280,196C5440,180,5600,261,5760,253.2C5920,245,6080,147,6240,138.8C6400,131,6560,212,6720,269.5C6880,327,7040,359,7200,318.5C7360,278,7520,163,7680,171.5C7840,180,8000,310,8160,351.2C8320,392,8480,343,8640,277.7C8800,212,8960,131,9120,106.2C9280,82,9440,114,9600,130.7C9760,147,9920,147,10080,122.5C10240,98,10400,49,10560,65.3C10720,82,10880,163,11040,212.3C11200,261,11360,278,11440,285.8L11520,294L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path></svg>
            </div>}
            {dir === 'wv__up' && <div className='top-0 w-full -z-9 rotate-180 absolute'>
                <svg className={`opacity-50 ${firstColor} fill-slate-200`} id="wave" viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0,95L34.3,95C68.6,95,137,95,206,95C274.3,95,343,95,411,88.7C480,82,549,70,617,82.3C685.7,95,754,133,823,142.5C891.4,152,960,133,1029,120.3C1097.1,108,1166,101,1234,98.2C1302.9,95,1371,95,1440,95C1508.6,95,1577,95,1646,79.2C1714.3,63,1783,32,1851,19C1920,6,1989,13,2057,38C2125.7,63,2194,108,2263,114C2331.4,120,2400,89,2469,91.8C2537.1,95,2606,133,2674,142.5C2742.9,152,2811,133,2880,117.2C2948.6,101,3017,89,3086,98.2C3154.3,108,3223,139,3291,126.7C3360,114,3429,57,3497,44.3C3565.7,32,3634,63,3703,72.8C3771.4,82,3840,70,3909,76C3977.1,82,4046,108,4114,117.2C4182.9,127,4251,120,4320,123.5C4388.6,127,4457,139,4526,148.8C4594.3,158,4663,165,4731,139.3C4800,114,4869,57,4903,28.5L4937.1,0L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"></path></svg>
            </div>}
        </>
    )
}


