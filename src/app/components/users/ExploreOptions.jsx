"use client"

import { useAppSelector } from '@/utils/store';
import React from 'react'


function RejectBtn({theme}) {

    return (
        <div className="w-20 aspect-square choiseBtn p-3 justify-center items-center">
            <svg
                fill={theme=='light'?"#00000":"#ffffff"}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 27.965 27.965"
                xmlSpace="preserve"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <g id="c142_x">
                            <path d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982 C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78 l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782 c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"></path>{" "}
                        </g>{" "}
                        <g id="Capa_1_104_"> </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}




function AddBtn({theme}) {
    
    return (
        <div className="w-20 aspect-square choiseBtn p-3">
            <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--emojione-monotone"
                preserveAspectRatio="xMidYMid meet"
                fill={theme=='light'?"#00000":"#ffffff"}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M56.724 6.01L9.259 9.174c-.884.061-3.659 1.675-4.039 5.176L2.046 43.676C1.881 45.207 2.007 48.78 5 49.338l46.189 8.58c.292.055.589.082.882.082c1.117 0 5.141-.899 5.559-4.794l4.323-39.932c.406-3.732-1.862-7.493-5.229-7.264M9.385 10.963l47.46-3.165a2.8 2.8 0 0 1 1.701.42L39.455 25.512a9.47 9.47 0 0 0-.121-2.672c-1.695-8.926-10.391-4.813-11.59-.574c-.486-4.49-7.365-7.576-10.336.332a9.257 9.257 0 0 0-.337 1.13L8.495 11.396c.299-.26.609-.414.89-.433M3.854 43.865l3.174-29.326c.058-.53.191-1.055.386-1.535l9.401 13.314c.054 1.557.451 3.088 1.055 4.549L3.875 45.247a5.588 5.588 0 0 1-.021-1.382m47.672 12.291L5.337 47.575c-.254-.047-.506-.219-.731-.489l14.088-14.477c2.445 4.577 6.446 8.163 6.886 9.039c.639-.616 6.646-3.979 10.559-8.849l2.278 3.039l15.027 20.034a3.009 3.009 0 0 1-1.918.284m8.62-43.968l-4.323 39.931c-.105.972-.457 1.872-.996 2.582L37.255 31.273a15.67 15.67 0 0 0 1.223-2.198l21.258-19.5c.366.748.513 1.658.41 2.613"
                        fill={theme=='light'?"#00000":"#ffffff"}
                    ></path>
                </g>
            </svg>
        </div>
    )
}








function ExploreOptions() {
    const theme = useAppSelector((state) => state?.uiReducer?.theme);

    return (
        <div className="choise flex gap-20 ">
            <RejectBtn theme={theme} />

            <AddBtn theme={theme} />
        </div>
    )
}

export default ExploreOptions
