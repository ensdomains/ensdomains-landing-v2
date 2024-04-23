import React from 'react';

import IconBase from './Icon';

export default function StopParentIcon({ active }) {
    return (
        <IconBase
            active={active}
            width="151"
            height="32"
            className="register-svg"
        >
            <g clipPath="url(#clip0_1691_7014)">
                <path d="M98 12L106 20Z" fill="black" />
                <path d="M98 12L106 20" stroke="black" strokeWidth="2" />
                <path d="M106 12L98 20Z" fill="black" />
                <path d="M106 12L98 20" stroke="black" strokeWidth="2" />
                <path
                    d="M125.759 7.55034C126.059 6.99298 126.493 6.51782 127.021 6.16677L135.884 0L126.803 14.9623C126.803 14.9623 126.009 13.6262 125.7 12.9502C125.314 12.1002 125.12 11.1765 125.13 10.2437C125.14 9.31095 125.355 8.3917 125.759 7.55034ZM122.101 17.8718C122.201 19.3026 122.607 20.6956 123.291 21.9575C123.975 23.2195 124.922 24.3212 126.069 25.1889L135.872 32C135.872 32 129.739 23.1926 124.565 14.4287C124.041 13.5028 123.689 12.4904 123.525 11.4402C123.453 10.9646 123.453 10.4808 123.525 10.0052C123.391 10.2543 123.129 10.7642 123.129 10.7642C122.604 11.8301 122.247 12.97 122.069 14.1441C121.967 15.385 121.978 16.6327 122.101 17.8718ZM147.097 19.0576C146.779 18.3817 145.994 17.0455 145.994 17.0455L136.928 32L145.791 25.8372C146.319 25.4861 146.753 25.011 147.053 24.4536C147.457 23.6122 147.672 22.693 147.682 21.7603C147.693 20.8275 147.498 19.9037 147.113 19.0537L147.097 19.0576ZM150.695 14.1321C150.595 12.7014 150.189 11.3083 149.505 10.0464C148.821 8.78447 147.874 7.68277 146.728 6.81507L136.939 0C136.939 0 143.069 8.8074 148.247 17.5713C148.77 18.4975 149.12 19.5098 149.283 20.5598C149.355 21.0354 149.355 21.5192 149.283 21.9948C149.418 21.7457 149.679 21.2358 149.679 21.2358C150.204 20.1699 150.561 19.03 150.739 17.8559C150.842 16.6151 150.833 15.3674 150.711 14.1282L150.695 14.1321Z"
                    fill="#5298FF"
                />
                <g clipPath="url(#clip1_1691_7014)">
                    <path
                        d="M11.5865 11.3188C11.6764 11.2666 11.7389 11.2315 11.8001 11.1935C13.8669 9.94018 15.9334 8.68682 17.9997 7.43353C18.539 7.10553 19.066 7.1047 19.6057 7.43353C22.4554 9.16898 25.307 10.9012 28.1603 12.6303C28.6924 12.9515 28.9258 13.3977 28.925 14.0035C28.9193 17.5041 28.9175 21.0047 28.9195 24.5051C28.9215 24.7031 28.8986 24.9006 28.8511 25.0929C28.749 25.4819 28.5102 25.7785 28.1612 25.9907C25.2918 27.7334 22.4224 29.4762 19.553 31.2192C19.0373 31.5313 18.5086 31.5464 17.9726 31.2192C15.1508 29.4985 12.3264 27.7819 9.49944 26.0693C8.90364 25.7083 8.61124 25.199 8.61329 24.5034C8.61698 16.7303 8.61869 8.95715 8.61842 1.18398C8.61568 1.02271 8.63646 0.861892 8.67999 0.706463C8.74032 0.502034 8.8664 0.322682 9.03908 0.195633C9.21169 0.0685839 9.42147 0.000777071 9.63658 0.00250666C9.94777 -0.000835555 10.2589 -0.000835555 10.57 0.00250666C10.8311 0.00557807 11.0812 0.107057 11.2693 0.286278C11.4575 0.465498 11.5695 0.708981 11.5827 0.967151C11.587 1.03985 11.5852 1.11296 11.5852 1.18607C11.5852 4.48317 11.5852 7.78024 11.5852 11.0774L11.5865 11.3188ZM26.018 19.2913C26.018 17.8566 26.0187 16.4223 26.0201 14.9882C26.0201 14.8842 25.9939 14.8211 25.8986 14.7626C23.5715 13.3385 21.2477 11.9115 18.9272 10.4816C18.8314 10.4223 18.766 10.4285 18.674 10.4849C16.361 11.9085 14.0471 13.3293 11.7321 14.7475C11.6843 14.7713 11.6448 14.8088 11.6187 14.855C11.5926 14.9012 11.5811 14.9542 11.5857 15.007C11.5893 17.8604 11.5893 20.714 11.5857 23.5677C11.5857 23.6954 11.6313 23.761 11.7359 23.8254C14.048 25.2414 16.3582 26.6602 18.6664 28.0817C18.7723 28.1473 18.8436 28.1439 18.9478 28.0817C21.2586 26.6566 23.5722 25.2347 25.8888 23.8162C25.9321 23.7942 25.9677 23.7599 25.9911 23.7177C26.0144 23.6755 26.0244 23.6273 26.0197 23.5793C26.0157 22.1503 26.0149 20.7209 26.0171 19.2913H26.018Z"
                        fill="black"
                    />
                    <path
                        d="M35.5967 19.3011C35.5967 17.4804 35.6031 15.6597 35.5938 13.8395C35.59 13.1422 35.8841 12.635 36.4799 12.2745C39.4568 10.4758 42.4316 8.67406 45.4043 6.86927C45.9494 6.53839 46.4786 6.53881 47.0234 6.87178C50.0177 8.70216 53.0137 10.5293 56.0113 12.353C56.5675 12.691 56.8321 13.1727 56.8321 13.8064C56.8321 17.4829 56.8321 21.1605 56.8321 24.8391C56.8321 25.4745 56.5519 25.963 56.005 26.2947C52.9685 28.1367 49.9303 29.9764 46.8904 31.8135C46.398 32.1097 45.8836 32.0286 45.4072 31.7391C43.7193 30.7145 42.0324 29.6864 40.3465 28.6551C39.0383 27.8563 37.7302 27.0529 36.4162 26.2608C35.8545 25.9224 35.5926 25.4382 35.5938 24.7944C35.5988 22.9632 35.5999 21.132 35.5967 19.3011ZM53.8952 19.2723C53.8952 17.7491 53.896 16.2256 53.8977 14.7022C53.8977 14.5856 53.8686 14.5163 53.7627 14.4515C51.2848 12.9539 48.8092 11.453 46.3359 9.9487C46.249 9.89563 46.1883 9.88936 46.0967 9.94536C43.6191 11.4636 41.1399 12.979 38.659 14.4916C38.6177 14.5123 38.5835 14.5447 38.561 14.5848C38.5384 14.6249 38.5284 14.6707 38.5324 14.7164C38.5349 17.7737 38.5349 20.8309 38.5324 23.8883C38.5276 23.9337 38.5366 23.9796 38.5585 24.0199C38.5803 24.0602 38.6138 24.0931 38.6548 24.1143C41.136 25.6272 43.6152 27.1427 46.0925 28.6609C46.1265 28.6876 46.1687 28.702 46.2121 28.702C46.2555 28.702 46.2977 28.6876 46.3318 28.6609C48.8073 27.131 51.2854 25.6039 53.766 24.0796C53.8092 24.0576 53.8447 24.0233 53.868 23.9812C53.8912 23.939 53.9011 23.891 53.8964 23.8431C53.8936 22.3191 53.8932 20.7952 53.8952 19.2723Z"
                        fill="black"
                    />
                    <path
                        d="M71.8266 24.7944L64.0806 30.5037C63.5194 30.9173 62.916 30.8041 62.5429 30.2138C62.4033 29.9928 62.2619 29.773 62.1252 29.5499C61.8057 29.0293 61.9251 28.4098 62.4171 28.0459C65.0309 26.1122 67.6454 24.1798 70.2611 22.2488C70.3062 22.22 70.3424 22.1795 70.3663 22.1319C70.3902 22.0842 70.4005 22.0312 70.3964 21.9781C70.3923 20.1834 70.3923 18.3886 70.3964 16.5938C70.3998 16.5407 70.3888 16.4877 70.3642 16.4402C70.3403 16.3927 70.3041 16.3524 70.259 16.3235C67.5831 14.3502 64.9088 12.3752 62.2357 10.3986C62.0257 10.2453 61.8814 10.0195 61.8316 9.76597C61.7819 9.51241 61.8301 9.24952 61.9669 9.02956C62.167 8.71081 62.3783 8.39825 62.5999 8.09244C62.905 7.66928 63.4755 7.59992 63.9156 7.92535C64.9978 8.72333 66.0796 9.5218 67.161 10.3209C68.6949 11.4528 70.2283 12.5855 71.7603 13.7191C71.8662 13.7976 71.9325 13.8026 72.0418 13.7216C74.6405 11.8032 77.2488 9.89766 79.8387 7.96799C80.4441 7.51721 81.1179 7.73655 81.409 8.2466C81.5279 8.4555 81.6748 8.64771 81.8067 8.84903C82.1442 9.36959 82.0308 10.0067 81.5285 10.379C78.8307 12.3759 76.1329 14.3715 73.4331 16.3657C73.388 16.3941 73.3511 16.4339 73.3265 16.4812C73.3019 16.5285 73.291 16.5813 73.2944 16.6344C73.2985 18.4032 73.2985 20.1718 73.2944 21.9401C73.291 21.9932 73.3019 22.0463 73.3265 22.0938C73.3504 22.1413 73.3873 22.1814 73.4331 22.21C76.0359 24.1317 78.638 26.0536 81.2395 27.9753C81.6468 28.2757 81.8415 28.6521 81.7424 29.1505C81.7089 29.2922 81.6495 29.4266 81.5661 29.5466C81.3973 29.804 81.2094 30.0504 81.027 30.2986C80.66 30.7974 80.1065 30.8797 79.6077 30.5129C77.0568 28.6368 74.5059 26.7604 71.9544 24.8837C71.9168 24.8579 71.8771 24.8298 71.8266 24.7944Z"
                        fill="black"
                    />
                    <path
                        d="M4.33757 27.2737C4.33757 27.5661 4.33757 27.8586 4.33757 28.151C4.34109 28.2977 4.30457 28.4427 4.23187 28.5706C4.15917 28.6986 4.05297 28.8047 3.92447 28.8779C3.46789 29.1582 3.00667 29.4311 2.55094 29.7134C2.31168 29.8618 2.06863 29.8689 1.83359 29.731C1.32131 29.4308 0.813686 29.123 0.310693 28.8077C0.0929559 28.6707 0.00898344 28.4447 0.00602967 28.1998C-0.00114386 27.5845 -0.00283175 26.9691 0.00602967 26.3537C0.00601364 26.2194 0.0413374 26.0874 0.108522 25.9707C0.175707 25.854 0.272435 25.7566 0.38918 25.6882C0.866433 25.3912 1.3479 25.1008 1.83021 24.8108C1.93107 24.7472 2.04818 24.7134 2.16779 24.7134C2.2874 24.7134 2.40452 24.7472 2.50537 24.8108C2.9995 25.1004 3.4911 25.3957 3.97425 25.7011C4.20972 25.8503 4.32956 26.083 4.3342 26.3625C4.34137 26.6683 4.33757 26.9712 4.33757 27.2737Z"
                        fill="black"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1691_7014">
                    <rect width="151" height="32" fill="white" />
                </clipPath>
                <clipPath id="clip1_1691_7014">
                    <rect width="82" height="32" fill="white" />
                </clipPath>
            </defs>
        </IconBase>
    );
}
