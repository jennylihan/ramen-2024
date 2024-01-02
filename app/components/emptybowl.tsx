import { motion } from "framer-motion";
export default function EmptyBowl({ soupColor, children }: { soupColor: string, children: any }) {
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
        }
    }
    return (
        <svg width="1210" height="696" viewBox="0 0 1210 696" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M570.878 57.3588C525.874 59.6988 465.148 68.4558 423.378 78.6288C381.961 88.7158 352.262 99.1468 320.378 114.806C292.792 128.353 273.788 141.418 258.339 157.456C248.052 168.134 244.911 172.233 239.914 181.497C232.169 195.856 230.654 201.783 230.111 219.852C229.076 254.309 235.312 299.005 246.568 337.802C260.918 387.266 288.144 439.488 321.149 480.86C338.45 502.546 353.803 518.214 377.628 538.497L391.878 550.629L391.886 556.215C391.911 575.061 398.23 588.628 414.475 604.714C444.768 634.71 495.023 655.021 561.878 664.287C601.274 669.747 654.32 669.745 693.878 664.28C746.742 656.978 789.671 642.203 823.878 619.536C837.411 610.569 854.606 594.065 860.235 584.642C864.517 577.471 867.878 565.429 867.878 557.253C867.878 550.672 868.296 550.047 877.878 542.298C932.255 498.326 975.097 439.034 1002.16 370.302C1013.3 341.994 1021.03 311.677 1026.5 274.802C1028.85 259.026 1029.19 253.528 1029.28 230.302C1029.37 204.769 1029.29 203.565 1027 197.302C1020.86 180.474 1012.2 167.623 997.63 153.7C941.797 100.341 820.922 63.5498 680.878 57.2898C656.375 56.1938 592.499 56.2338 570.878 57.3588ZM715.378 85.1868C811.848 94.7188 883.077 113.078 938.378 142.666C973.742 161.587 998.316 186.527 1002.95 208.202C1003.59 211.173 1003.92 217.556 1003.69 222.389C1003.31 230.276 1002.83 232.051 999.023 239.741C988.11 261.765 965.973 280.631 929.878 298.67C871.431 327.879 794.791 345.968 698.378 353.308C675.839 355.024 611.305 355.644 582.878 354.417C487.84 350.316 397.766 331.2 337.059 302.248C295.895 282.617 272.132 263.099 260.651 239.492C256.641 231.246 256.406 230.262 256.047 220.234C255.701 210.564 255.903 209.076 258.417 202.734C267.813 179.036 290.562 158.272 327.868 139.342C386.643 109.519 472.187 89.6728 570.878 82.9638C573.903 82.7588 602.703 82.6858 634.878 82.8018C686.493 82.9878 695.967 83.2688 715.378 85.1868Z" fill="white" />
            <ellipse cx="629.5" cy="217.991" rx="374.5" ry="141.5" fill={"#EACEB1"} />
            <motion.path
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
                fillRule="evenodd" clipRule="evenodd" d="M819.647 96.0613C763.913 83.6262 698.911 76.491 629.498 76.491C561.012 76.491 496.818 83.4371 441.585 95.5666C445.097 96.8132 448.602 97.8047 452.122 98.3116C458.604 99.245 465.344 98.5561 472.353 97.1845C476.53 96.3671 480.559 95.3665 484.656 94.3492L484.656 94.3491C487.611 93.6154 490.601 92.873 493.707 92.1841C508.104 88.9914 522.353 87.6534 536.007 90.1041C540.899 90.9823 545.765 92.367 550.427 93.6935L550.428 93.6937C552.173 94.1903 553.89 94.6789 555.569 95.1296C561.871 96.8214 567.859 98.0569 573.884 97.7703C579.967 97.4811 586.265 95.6436 592.927 93.6913L593.048 93.6556L593.049 93.6555C599.512 91.7613 606.361 89.7538 612.996 89.5445C619.729 89.332 626.065 90.9688 632.155 92.6685C632.699 92.8202 633.24 92.9725 633.781 93.1244C639.404 94.7045 644.889 96.2461 650.864 96.7495C663.132 97.7831 677.581 94.4575 691.062 91.3548C692.097 91.1167 693.126 90.8798 694.148 90.6463C708.209 87.4341 720.754 84.9167 732.852 87.0172C738.636 88.0215 744.248 90.0734 749.806 92.1059L750.502 92.3603C756.368 94.5031 762.288 96.6199 768.856 97.8155C782.067 100.22 798.209 98.9499 811.109 97.2778C814.12 96.8875 816.934 96.4784 819.647 96.0613ZM377.394 113.353C394.042 107.624 412.062 102.454 431.247 97.9219C437.486 100.573 444.26 103.241 451.267 104.25C458.712 105.322 466.211 104.5 473.505 103.073C477.721 102.248 482.114 101.161 486.403 100.1C489.35 99.3704 492.248 98.6534 495.006 98.0418C508.978 94.9432 522.364 93.7513 534.947 96.0098C539.524 96.8314 543.948 98.0902 548.506 99.3872L548.508 99.3878C550.316 99.9023 552.145 100.423 554.013 100.924C560.454 102.654 567.181 104.096 574.169 103.764C581.005 103.438 587.919 101.412 594.35 99.5266L594.614 99.4491C601.283 97.4945 607.415 95.7235 613.185 95.5415C618.898 95.3612 624.43 96.7416 630.542 98.4476C631.088 98.6 631.638 98.7549 632.194 98.9112L632.205 98.9144C637.755 100.477 643.785 102.174 650.361 102.728C663.618 103.845 678.978 100.302 692.212 97.2481L692.226 97.2449C693.328 96.9908 694.415 96.74 695.485 96.4956C709.683 93.252 721.087 91.0642 731.825 92.9287C737.068 93.8391 742.226 95.7239 747.954 97.8171L748.444 97.996C754.288 100.131 760.649 102.42 767.781 103.718C781.969 106.301 798.901 104.91 811.88 103.228C817.787 102.462 822.953 101.625 827.974 100.811L827.975 100.81C828.501 100.725 829.026 100.64 829.55 100.555C831.375 100.26 833.191 99.969 835.03 99.686C856.436 105.006 876.311 111.133 894.354 117.952C893.72 117.915 893.076 117.872 892.423 117.822C888.341 117.508 883.94 116.928 879.237 116.308C876.692 115.972 874.059 115.625 871.339 115.302C863.72 114.397 855.632 113.715 847.795 114.221C839.954 114.728 832.489 116.416 825.724 118.078C824.756 118.316 823.806 118.552 822.873 118.784L822.865 118.786C817.175 120.201 812.126 121.456 807.578 121.942C802.408 122.494 797.845 122.04 792.809 121.213C791.249 120.957 789.613 120.658 787.892 120.344L787.891 120.343C784.151 119.661 780.008 118.904 775.357 118.348C768.513 117.53 760.412 117.115 752.464 116.727L751.429 116.676C743.785 116.303 736.333 115.939 730.093 115.261C726.849 114.908 723.919 114.469 721.123 114.035C720.795 113.985 720.468 113.934 720.142 113.883L720.13 113.881L720.129 113.881C717.703 113.503 715.34 113.135 713.003 112.859C707.628 112.222 702.275 112.051 695.817 113.236C691.384 114.05 686.352 115.532 681.233 117.04L681.231 117.04C679.129 117.66 677.011 118.283 674.915 118.867C667.521 120.924 660.122 122.574 653.241 122.44C646.373 122.306 639.814 120.396 633.083 118.311C632.679 118.186 632.274 118.06 631.867 117.934L631.866 117.934C625.656 116.003 619.188 113.992 612.71 113.704C605.75 113.394 598.955 115.065 592.399 116.942C591.151 117.299 589.913 117.663 588.682 118.025L588.678 118.026L588.677 118.027C583.311 119.605 578.058 121.15 572.563 121.957C560.684 123.701 547.766 121.966 536.717 120.483L536.712 120.482C535.19 120.278 533.704 120.078 532.26 119.893C520.36 118.368 512.099 117.972 498.169 119.37C493.969 119.792 489.325 120.365 484.47 120.964L484.469 120.964L484.469 120.964C473.167 122.36 460.729 123.895 450.128 123.981C436.906 124.088 426.771 121.912 416.671 119.744L416.67 119.744C415.359 119.462 414.049 119.181 412.732 118.905C401.689 116.588 390.626 114.737 377.394 113.353ZM299.245 151.211C316.516 139.043 338.36 127.94 363.908 118.231C367.775 118.466 371.619 118.799 375.322 119.172C388.978 120.548 400.237 122.414 411.501 124.777C412.792 125.048 414.089 125.327 415.397 125.608C425.493 127.779 436.258 130.093 450.177 129.981C461.137 129.892 474.203 128.28 485.642 126.869L485.642 126.869L485.643 126.869C490.386 126.284 494.85 125.733 498.768 125.34C512.183 123.993 519.983 124.368 531.497 125.845C532.887 126.023 534.341 126.219 535.85 126.423L535.855 126.423C546.818 127.903 560.65 129.77 573.434 127.893C579.388 127.019 585.136 125.326 590.523 123.739L590.526 123.738C591.719 123.387 592.894 123.041 594.05 122.71C600.559 120.847 606.538 119.435 612.443 119.698C618.118 119.95 623.888 121.741 630.323 123.737L630.324 123.738L630.34 123.743C630.661 123.842 630.984 123.942 631.308 124.043C637.992 126.113 645.303 128.286 653.124 128.438C660.932 128.591 669.041 126.729 676.524 124.647C678.859 123.997 681.113 123.333 683.285 122.693L683.286 122.693C688.252 121.229 692.792 119.891 696.9 119.138C702.601 118.092 707.323 118.228 712.298 118.817C714.517 119.08 716.764 119.43 719.203 119.809L719.205 119.809L719.948 119.925L720.204 119.965C723.016 120.4 726.058 120.857 729.444 121.225C735.868 121.924 743.483 122.295 751.054 122.665L751.056 122.665L752.171 122.719C760.164 123.11 768.048 123.517 774.644 124.306C779.117 124.84 782.928 125.537 786.574 126.204C788.348 126.528 790.083 126.845 791.836 127.134C797.111 128 802.277 128.542 808.215 127.908C813.21 127.375 818.723 126.002 824.373 124.595C825.297 124.365 826.226 124.133 827.156 123.905C833.882 122.252 840.908 120.679 848.182 120.209C855.459 119.739 863.11 120.366 870.632 121.26C873.163 121.561 875.707 121.895 878.215 122.226C883.036 122.861 887.729 123.479 891.963 123.804C898.145 124.28 903.552 124.15 908.953 123.79C924.813 130.503 939.005 137.79 951.281 145.559C948.444 146.527 945.687 147.622 943.045 148.695C942.461 148.931 941.884 149.166 941.314 149.399C934.886 152.019 929.284 154.303 924.257 154.838C918.978 155.399 914.174 154.009 908.648 152.09C908.03 151.875 907.403 151.654 906.765 151.429C901.824 149.684 896.281 147.728 889.905 147.124C882.752 146.447 874.634 147.475 866.918 148.496L866.079 148.607C858.5 149.61 851.319 150.561 845.078 150.2C838.927 149.844 833.618 148.204 828.14 146.513L827.491 146.312C821.873 144.58 815.978 142.823 809.358 143C802.809 143.175 795.754 145.24 788.89 147.438C787.802 147.786 786.718 148.138 785.638 148.489C779.746 150.401 773.962 152.279 768.287 153.329C754.982 155.791 742.228 153.681 728.755 151.27C728.316 151.191 727.875 151.112 727.435 151.033L726.226 150.816C713.676 148.56 700.748 146.237 688.687 146.083C678.612 145.955 669.108 147.348 660.12 148.666C657.637 149.03 655.194 149.388 652.788 149.707C641.598 151.19 630.759 151.914 617.585 150.219C610.953 149.366 603.702 147.898 596.356 146.401L595.945 146.317C588.784 144.858 581.54 143.381 574.932 142.511C561.315 140.717 550.443 141.499 536.861 144.617C530.737 146.023 524.042 147.909 517.331 149.8L517.313 149.805C516.656 149.99 516 150.175 515.343 150.359C507.931 152.444 500.549 154.482 493.74 155.913C480.196 158.759 469.063 159.172 457.1 155.952C452.853 154.809 448.563 153.235 444.059 151.583L444.058 151.583C442.051 150.847 440.001 150.095 437.892 149.358C431.204 147.021 424.115 144.918 416.897 144.545C409.691 144.173 402.548 145.54 395.603 146.97C395.276 147.037 394.95 147.105 394.624 147.172C394.427 147.213 394.231 147.254 394.035 147.294C387.527 148.642 381.141 149.964 374.489 150.197C367.306 150.449 359.725 149.429 352.202 148.315C351.581 148.223 350.959 148.131 350.337 148.038L350.307 148.033L350.307 148.033C343.542 147.023 336.792 146.016 330.87 146.083C324.426 146.157 319.015 147.495 313.974 148.742L313.974 148.742L313.674 148.817C308.879 150.002 304.399 151.083 299.245 151.211ZM272.892 174.65C278.107 168.52 284.399 162.571 291.683 156.837C293.858 157.069 295.972 157.213 297.993 157.223C304.504 157.256 309.972 155.913 315.114 154.641L315.214 154.617L315.214 154.616C320.364 153.343 325.195 152.148 330.939 152.083C336.353 152.021 342.622 152.955 349.53 153.984L349.53 153.984L349.536 153.985C350.127 154.073 350.723 154.162 351.323 154.251C358.811 155.359 366.898 156.467 374.7 156.193C381.885 155.941 388.753 154.517 395.175 153.186L395.187 153.183C395.732 153.07 396.274 152.958 396.813 152.847C403.809 151.406 410.248 150.209 416.588 150.537C422.916 150.864 429.339 152.725 435.913 155.022C437.817 155.687 439.753 156.397 441.701 157.111L441.701 157.112L441.702 157.112C446.328 158.808 451.027 160.531 455.541 161.746C468.69 165.285 480.83 164.757 494.973 161.785C502.008 160.307 509.573 158.215 516.968 156.135C517.618 155.952 518.267 155.769 518.915 155.587L518.936 155.581C525.68 153.681 532.231 151.836 538.204 150.465C551.183 147.485 561.332 146.771 574.149 148.459C580.545 149.302 587.614 150.742 594.862 152.22L595.158 152.28C602.459 153.768 609.93 155.284 616.82 156.17C630.69 157.955 642.089 157.178 653.577 155.655C656.148 155.314 658.701 154.941 661.251 154.567C670.17 153.262 679.059 151.961 688.61 152.083C700.154 152.23 712.615 154.468 725.307 156.747C726.103 156.89 726.9 157.033 727.698 157.176C741.075 159.57 754.855 161.917 769.379 159.229C775.477 158.1 781.697 156.079 787.575 154.169C788.635 153.824 789.684 153.483 790.719 153.152C797.646 150.935 803.937 149.147 809.519 148.998C815.03 148.851 820.049 150.297 825.723 152.046C825.99 152.129 826.259 152.212 826.529 152.295C831.899 153.956 837.835 155.791 844.731 156.19C851.559 156.585 859.257 155.564 866.615 154.588L866.616 154.588L866.659 154.582C867.008 154.536 867.357 154.49 867.705 154.444C875.561 153.405 882.985 152.496 889.34 153.098C894.934 153.627 899.766 155.327 904.757 157.084C905.395 157.309 906.035 157.534 906.68 157.758C912.254 159.693 918.171 161.519 924.892 160.804C930.818 160.174 937.234 157.551 943.423 155.02C943.839 154.85 944.253 154.681 944.667 154.512C944.878 154.426 945.09 154.34 945.301 154.254C949.515 152.544 953.674 150.933 957.783 149.842C967.577 156.563 975.967 163.618 982.805 170.949C978.041 170.959 973.241 171.212 968.413 171.805C957.832 173.105 947.095 176.054 937.191 178.774L937.19 178.775C934.191 179.598 931.268 180.401 928.449 181.131C916.213 184.298 905.659 186.183 893.187 184.158C887.804 183.284 882.058 181.687 875.921 179.98C874.829 179.677 873.724 179.37 872.607 179.063C865.31 177.057 857.565 175.081 849.806 174.366C835.624 173.057 821.648 175.997 808.372 178.79C807.147 179.048 805.929 179.304 804.717 179.556C790.043 182.602 776.411 184.935 766.417 182.652C761.761 181.589 757.82 179.508 753.353 177.15L752.85 176.884L752.597 176.751C747.887 174.269 742.659 171.612 736.004 170.298C722.96 167.723 704.825 170.411 689.616 173.381C685.693 174.147 681.965 174.93 678.407 175.677L678.404 175.678C667.835 177.898 658.767 179.803 650.538 180.008C645.143 180.142 640.096 179.532 634.705 178.672C633.151 178.423 631.556 178.152 629.913 177.872C625.925 177.194 621.662 176.468 617.044 175.916C603.96 174.353 587.581 174.11 574.03 176.453C568.828 177.352 564.022 178.641 559.391 179.883L559.39 179.883L559.389 179.884C558.007 180.254 556.639 180.621 555.282 180.972C549.317 182.514 543.339 183.812 536.371 184.122C529.346 184.434 521.21 183.747 512.888 182.861C510.952 182.655 509.002 182.437 507.057 182.22L507.056 182.22C500.738 181.516 494.469 180.816 488.858 180.525C478.599 179.992 470.3 180.824 462.133 181.643L462.132 181.643C458.612 181.995 455.116 182.346 451.498 182.583C439.261 183.387 424.725 183.033 411.944 181.568C407.993 181.116 404.29 180.569 400.64 180.03L400.639 180.03C398.305 179.686 395.992 179.345 393.649 179.033C387.757 178.249 381.925 177.694 376.005 177.954C372.067 178.127 368.016 178.677 363.985 179.224H363.985L363.984 179.224C362.09 179.481 360.202 179.737 358.331 179.953C352.336 180.647 346.064 181.01 339.026 180.035C332.938 179.192 326.25 177.354 319.349 175.457L319.348 175.457C318.149 175.127 316.943 174.795 315.732 174.467C307.732 172.297 299.489 170.25 292.358 170.241C285.098 170.232 279.176 172.327 273.789 174.318L273.106 174.571C273.035 174.597 272.964 174.624 272.892 174.65ZM255.284 212.411C256.318 202.341 260.137 192.541 266.458 183.117C269.479 182.317 272.293 181.272 274.986 180.273L274.986 180.273L275.016 180.262C275.302 180.156 275.586 180.051 275.869 179.946C281.233 177.964 286.264 176.233 292.351 176.241C298.566 176.249 306.063 178.061 314.161 180.258C315.324 180.573 316.5 180.896 317.682 181.222L317.683 181.222C324.558 183.114 331.689 185.076 338.203 185.979C345.945 187.051 352.778 186.636 359.02 185.914C361.165 185.666 363.191 185.39 365.146 185.124L365.148 185.124C369.013 184.598 372.599 184.109 376.268 183.948C381.662 183.711 387.084 184.212 392.858 184.98C395.016 185.267 397.263 185.598 399.576 185.939L399.579 185.94C403.33 186.492 407.255 187.07 411.261 187.529C424.391 189.034 439.287 189.398 451.891 188.571C455.898 188.307 459.588 187.936 463.203 187.573C471.162 186.772 478.755 186.008 488.547 186.517C493.963 186.798 499.981 187.469 506.257 188.169L506.257 188.169L506.266 188.17C508.239 188.39 510.239 188.613 512.253 188.827C520.58 189.714 529.116 190.45 536.638 190.116C544.218 189.779 550.664 188.363 556.783 186.781C558.25 186.402 559.687 186.017 561.111 185.635C565.691 184.407 570.145 183.213 575.051 182.365C587.874 180.149 603.642 180.357 616.333 181.874C620.795 182.407 624.821 183.092 628.75 183.761L628.75 183.761L628.753 183.762C630.431 184.048 632.091 184.33 633.759 184.597C639.275 185.477 644.746 186.154 650.687 186.006C659.514 185.787 669.352 183.718 680.096 181.458C683.56 180.73 687.117 179.982 690.765 179.269C706.101 176.275 723.117 173.87 734.842 176.184C740.57 177.315 745.13 179.598 749.8 182.059C750.088 182.211 750.377 182.364 750.667 182.517L750.704 182.537C755.034 184.826 759.628 187.256 765.08 188.502C776.584 191.129 791.565 188.414 805.936 185.43C807.121 185.184 808.303 184.936 809.482 184.689C822.923 181.868 836.022 179.119 849.255 180.34C856.438 181.003 863.735 182.847 871.017 184.848C872.093 185.144 873.17 185.444 874.247 185.743C880.367 187.446 886.486 189.148 892.226 190.08C905.937 192.307 917.46 190.173 929.952 186.939C932.956 186.162 936.002 185.326 939.078 184.481L939.079 184.481C948.904 181.784 959.043 179.001 969.144 177.761C975.467 176.984 981.77 176.819 988.072 177.036C995.707 186.591 1000.74 196.573 1002.86 206.865C992.372 207.48 982.639 205.385 973.718 203.465C970.6 202.794 967.582 202.144 964.665 201.639C953.023 199.623 944.427 200.327 932.231 202.677C929.845 203.137 927.344 203.653 924.764 204.186L924.763 204.186C914.089 206.39 902.057 208.874 891.187 208.791C881.618 208.718 873.157 206.684 864.544 204.614C860.988 203.759 857.407 202.898 853.711 202.166C841.322 199.713 828.863 199.082 814.181 198.513C799.563 197.947 782.006 197.403 767.658 200.641C760.788 202.191 754.698 204.597 749.083 206.816L748.243 207.148C742.319 209.486 736.96 211.532 731.352 212.426C720.315 214.187 707.967 211.557 693.833 208.547L692.871 208.343C678.576 205.301 662.894 202.097 650.217 201.597C637.378 201.091 627.691 203.358 615.956 206.312L615.065 206.536C603.451 209.463 590.289 212.781 577.023 210.877C571.066 210.023 565.065 208.12 558.898 206.164C557.979 205.872 557.056 205.58 556.129 205.289C549.146 203.1 541.888 201.019 534.936 201.081C528.017 201.143 521.613 203.329 515.588 205.386L515.424 205.442C509.217 207.561 503.319 209.56 496.806 209.821C490.247 210.085 482.884 208.593 475.288 206.822C474.243 206.578 473.192 206.328 472.138 206.078L472.131 206.076C465.71 204.552 459.184 203.003 453.431 202.629C446.581 202.185 440.862 203.389 435.334 204.63C435.054 204.693 434.774 204.756 434.495 204.819C429.229 206.005 424.065 207.168 417.732 207.249C411.001 207.336 402.848 206.199 394.582 204.752C391.429 204.201 388.235 203.599 385.118 203.012C380.21 202.087 375.494 201.199 371.435 200.599C360.665 199.009 353.826 199.336 345.185 199.748C342.944 199.855 340.583 199.968 338 200.055C335.674 200.133 333.124 200.191 330.425 200.252H330.425H330.425C318.619 200.522 303.961 200.856 292.767 203.201C286.742 204.463 281.692 206.309 277.126 207.979L277.123 207.979C276.412 208.239 275.713 208.495 275.023 208.744C269.857 210.606 265.202 212.086 259.802 212.394C258.357 212.476 256.85 212.476 255.284 212.411ZM257.554 234.609C255.907 229.292 255.041 223.884 255 218.403C256.76 218.477 258.481 218.479 260.143 218.384C266.461 218.024 271.802 216.283 277.058 214.388C277.782 214.127 278.503 213.864 279.227 213.6L279.227 213.599C283.801 211.929 288.426 210.24 293.997 209.073C304.586 206.856 318.481 206.534 330.284 206.26C333.063 206.196 335.725 206.134 338.201 206.051C340.934 205.96 343.382 205.843 345.663 205.735H345.664C354.193 205.331 360.407 205.036 370.558 206.535C374.532 207.122 379.011 207.966 383.799 208.87C386.935 209.461 390.203 210.077 393.548 210.663C401.848 212.115 410.475 213.343 417.809 213.249C424.787 213.159 430.503 211.87 435.716 210.694C436.029 210.624 436.339 210.554 436.648 210.485C442.145 209.251 447.127 208.233 453.042 208.617C458.245 208.954 464.196 210.364 470.667 211.897L470.67 211.898C471.741 212.151 472.827 212.409 473.925 212.665C481.475 214.425 489.574 216.117 497.047 215.817C504.483 215.518 511.121 213.251 517.163 211.189L517.362 211.121C523.591 208.994 529.135 207.133 534.989 207.081C540.872 207.028 547.284 208.805 554.335 211.015C555.227 211.294 556.129 211.581 557.04 211.87C563.163 213.815 569.684 215.886 576.171 216.817C590.633 218.891 604.811 215.313 616.198 212.439C616.609 212.335 617.017 212.232 617.421 212.13C629.102 209.19 638.068 207.123 649.98 207.593C662.054 208.069 677.22 211.147 691.622 214.211C692.14 214.322 692.658 214.432 693.176 214.542L693.179 214.543C706.798 217.448 720.133 220.292 732.297 218.352C738.645 217.339 744.585 215.042 750.445 212.729L751.183 212.438L751.183 212.438C756.873 210.19 762.573 207.939 768.979 206.493C782.425 203.46 799.174 203.937 813.948 204.509C828.659 205.078 840.678 205.702 852.546 208.052C855.77 208.69 859.079 209.485 862.484 210.303C871.342 212.431 880.842 214.713 891.142 214.791C902.72 214.879 915.579 212.218 926.273 210.005L926.275 210.004C928.772 209.488 931.15 208.996 933.366 208.569C945.138 206.301 952.954 205.7 963.641 207.551C966.144 207.985 968.884 208.576 971.819 209.209L971.819 209.21C981.013 211.194 992.106 213.588 1003.75 212.82C1003.92 214.536 1004 216.26 1004 217.991C1004 225.496 1002.45 232.865 999.473 240.055C987.57 241.182 975.585 240.763 965.265 238.663C961.103 237.817 957.302 236.726 953.449 235.62C951.427 235.04 949.391 234.456 947.28 233.9C941.285 232.323 935.043 231.095 928.038 231.41C921.103 231.722 913.591 233.542 906.392 235.563C904.084 236.211 901.82 236.875 899.606 237.525C894.774 238.943 890.179 240.291 885.888 241.244C873.676 243.958 864.438 243.307 853.699 241.228C850.148 240.54 846.352 239.674 842.304 238.75L842.303 238.75C834.22 236.906 825.13 234.831 814.972 233.489C802.61 231.855 788.391 231.248 776.547 230.743C773.696 230.621 770.982 230.505 768.465 230.383C766.969 230.31 765.53 230.233 764.137 230.159C753.475 229.593 745.485 229.169 734.79 231.474C731.289 232.229 727.355 233.316 723.324 234.43C720.641 235.171 717.916 235.924 715.248 236.599C708.359 238.34 701.414 239.693 694.845 239.631C688.296 239.57 681.933 238.102 675.117 236.196C673.528 235.751 671.908 235.281 670.257 234.802L670.254 234.801L670.254 234.801C664.919 233.252 659.255 231.607 653.243 230.434C637.496 227.363 618.901 227.405 606.592 231.014C602.212 232.299 598.501 234.105 595.279 235.673C594.018 236.287 592.831 236.864 591.709 237.36C587.632 239.159 583.657 240.31 577.97 239.651C572.576 239.026 565.687 236.81 557.966 234.326L557.965 234.325L557.961 234.324C557.088 234.043 556.203 233.758 555.308 233.472C546.73 230.728 537.377 227.893 529.005 227.302C520.517 226.704 513.217 228.414 506.768 230.281C505.41 230.674 504.107 231.068 502.848 231.448C497.971 232.92 493.75 234.194 489.515 234.499C484.293 234.874 479.02 233.74 473.128 232.356C472.961 232.317 472.793 232.278 472.625 232.238L472.133 232.122L472.133 232.122C466.641 230.827 460.642 229.413 454.294 229.351C447.548 229.285 440.557 230.739 433.744 232.478C431.38 233.082 429.056 233.713 426.76 234.338C422.296 235.552 417.934 236.739 413.568 237.636C400.542 240.315 388.12 240.236 374.1 240.145C360.017 240.054 345.193 239.95 333.67 237.146C329.343 236.093 325.523 234.677 321.585 233.217C320.275 232.731 318.951 232.241 317.591 231.757C312.226 229.848 306.536 228.15 299.698 227.813C287.474 227.21 271.802 231.018 257.554 234.609ZM276.396 265.251C268.879 257.234 263.221 248.885 259.617 240.278C273.844 236.704 288.332 233.259 299.403 233.805C305.38 234.1 310.427 235.576 315.58 237.41C316.788 237.839 318.016 238.295 319.27 238.76C323.281 240.248 327.552 241.833 332.251 242.976C344.492 245.954 359.931 246.054 373.705 246.143L374.061 246.145L374.337 246.147H374.338C388.16 246.236 401.125 246.32 414.777 243.514C419.318 242.58 424.009 241.305 428.588 240.061L428.589 240.06C430.839 239.449 433.062 238.844 435.228 238.292C441.947 236.576 448.309 235.293 454.235 235.351C459.894 235.406 465.292 236.676 470.923 238.001C471.2 238.067 471.478 238.132 471.756 238.197C477.557 239.559 483.682 240.933 489.946 240.483C494.914 240.126 499.954 238.599 504.901 237.1L504.901 237.1L504.905 237.099C506.089 236.74 507.267 236.383 508.437 236.044C514.67 234.239 521.158 232.764 528.583 233.288C536.126 233.819 544.811 236.413 553.48 239.187C554.381 239.475 555.284 239.766 556.186 240.057L556.196 240.06L556.197 240.06C563.751 242.495 571.253 244.913 577.279 245.611C584.346 246.43 589.419 244.929 594.132 242.849C595.622 242.191 597.01 241.514 598.382 240.845C601.43 239.359 604.406 237.908 608.281 236.772C619.4 233.511 636.97 233.374 652.094 236.323C657.816 237.439 663.122 238.98 668.404 240.513C670.101 241.005 671.796 241.497 673.501 241.974C680.42 243.909 687.413 245.562 694.788 245.631C702.144 245.7 709.69 244.193 716.718 242.416C719.704 241.661 722.531 240.878 725.228 240.13L725.231 240.13C729.073 239.065 732.653 238.073 736.055 237.34C745.928 235.211 753.124 235.59 763.827 236.153H763.827C765.212 236.225 766.656 236.301 768.172 236.375C770.765 236.502 773.533 236.62 776.423 236.744C788.257 237.25 802.118 237.842 814.185 239.437C824.102 240.748 832.628 242.697 840.538 244.506L840.539 244.507C844.677 245.453 848.646 246.361 852.558 247.118C863.849 249.305 873.953 250.042 887.189 247.102C891.681 246.103 896.599 244.661 901.534 243.213C903.702 242.577 905.873 241.94 908.013 241.34C915.166 239.332 922.11 237.683 928.307 237.404C934.435 237.128 940.003 238.189 945.753 239.703C947.602 240.189 949.512 240.736 951.476 241.299C955.472 242.444 959.691 243.652 964.069 244.543C974.005 246.564 985.253 247.105 996.492 246.32C994.54 249.948 992.221 253.527 989.55 257.049C984.118 258.107 979.11 259.82 974.087 261.538C971.7 262.355 969.31 263.172 966.87 263.921C954.997 267.565 940.73 270.135 926.668 269.957C916.506 269.829 906.54 268.292 897.398 266.881C893.76 266.32 890.254 265.779 886.917 265.355C875.265 263.874 866.553 263.986 853.957 264.824C852.181 264.942 850.336 265.074 848.439 265.209L848.429 265.21L848.429 265.21C836.819 266.038 823.285 267.004 811.792 265.86C805.728 265.256 800.228 264.062 794.667 262.855C794.139 262.74 793.61 262.625 793.079 262.511C787.021 261.203 780.839 259.949 774.092 259.679C763.096 259.24 750.685 261.444 738.806 263.553L738.804 263.554C736.281 264.002 733.783 264.445 731.327 264.859C717.085 267.255 703.848 268.734 692.598 267.408C688.465 266.921 684.64 266.068 680.606 265.169L680.603 265.168C679.096 264.832 677.56 264.49 675.967 264.158C670.2 262.954 663.988 261.962 656.663 262.249C649.419 262.534 641.187 264.071 633.238 265.64C632.428 265.8 631.622 265.96 630.819 266.119C623.631 267.546 616.754 268.911 610.763 269.455C604.195 270.052 598.657 269.658 592.941 269.045C591.771 268.919 590.588 268.784 589.383 268.646C584.735 268.114 579.775 267.546 574.11 267.388C567.398 267.201 559.668 267.587 552.161 267.961L550.796 268.029C542.784 268.426 535.131 268.769 528.964 268.42C522.874 268.075 518.187 267.051 513.436 265.967L512.795 265.821C508.245 264.781 503.533 263.704 497.655 263.283C491.558 262.845 484.262 263.116 476.795 263.479C475.575 263.538 474.348 263.6 473.12 263.662C466.762 263.983 460.34 264.307 454.266 264.303C447.05 264.298 440.31 263.828 433.742 263.272C432.142 263.136 430.547 262.995 428.955 262.854C424.052 262.419 419.186 261.988 414.327 261.737C401.397 261.07 388.396 261.667 376.25 263.302C371.676 263.918 367.347 264.656 363.06 265.386L363.059 265.386C355.741 266.634 348.547 267.86 340.463 268.422C327.809 269.301 313.335 268.477 299.266 267.396C291.412 266.792 283.772 266.115 276.396 265.251ZM308.088 290.658C298.66 284.717 290.353 278.494 283.277 272.029C288.369 272.536 293.553 272.974 298.806 273.378C312.883 274.46 327.745 275.32 340.878 274.408C349.199 273.83 356.98 272.509 364.538 271.226C368.76 270.51 372.912 269.805 377.051 269.248C388.839 267.661 401.468 267.081 414.018 267.729C418.755 267.973 423.464 268.391 428.337 268.822L428.341 268.823C429.952 268.966 431.581 269.11 433.235 269.25C439.857 269.812 446.793 270.298 454.263 270.303C460.504 270.307 467.109 269.974 473.464 269.653H473.464C474.682 269.591 475.891 269.53 477.087 269.472C484.591 269.107 491.54 268.859 497.226 269.267C502.636 269.656 506.952 270.641 511.544 271.69L512.102 271.817C516.904 272.912 522.003 274.035 528.625 274.41C535.17 274.781 543.156 274.415 551.094 274.021L552.378 273.958L552.379 273.958C559.965 273.58 567.474 273.206 573.943 273.386C579.324 273.536 583.967 274.067 588.586 274.595L588.586 274.595L588.588 274.595C589.823 274.736 591.056 274.877 592.301 275.011C598.172 275.64 604.161 276.08 611.306 275.431C617.634 274.856 624.839 273.425 631.957 272.011L631.958 272.011C632.774 271.849 633.588 271.687 634.4 271.526C642.409 269.946 650.194 268.508 656.898 268.245C663.521 267.985 669.189 268.873 674.742 270.031C676.162 270.327 677.595 270.647 679.044 270.97L679.045 270.97C683.173 271.891 687.434 272.841 691.895 273.366C704.055 274.8 718.016 273.182 732.322 270.775C734.917 270.339 737.51 269.88 740.09 269.423L740.101 269.421L740.102 269.421C751.968 267.319 763.572 265.264 773.853 265.675C780.032 265.922 785.765 267.07 791.813 268.376C792.347 268.491 792.884 268.608 793.423 268.725C798.945 269.924 804.773 271.19 811.197 271.83C823.251 273.031 837.385 272.018 848.948 271.189C850.825 271.055 852.634 270.925 854.356 270.81C866.742 269.986 875.034 269.893 886.16 271.307C889.205 271.694 892.529 272.207 896.053 272.75L896.054 272.75C905.324 274.18 915.979 275.823 926.593 275.957C941.386 276.143 956.277 273.448 968.631 269.657C971.43 268.798 974.043 267.908 976.556 267.052C978.716 266.317 980.803 265.606 982.872 264.961C973.963 274.53 962.409 283.627 948.542 292.129C948.16 292.207 947.778 292.286 947.396 292.364C946.675 292.512 945.955 292.661 945.234 292.809C938.293 294.239 931.371 295.665 925.101 296.727C910.497 299.202 899.661 299.663 887.104 297.253C881.48 296.173 875.503 294.519 869.365 292.82C868.557 292.597 867.746 292.372 866.933 292.148C860.018 290.244 852.944 288.374 846.344 287.461C839.697 286.542 833.621 286.601 827.76 286.917C825.47 287.04 823.266 287.197 821.081 287.353C817.557 287.605 814.085 287.853 810.39 287.948C806.161 288.056 801.798 287.956 797.227 287.851L797.225 287.851C795.391 287.809 793.523 287.766 791.617 287.736C785.028 287.63 778.113 287.679 771.064 288.48C765.546 289.107 759.948 290.2 754.437 291.275C752.956 291.564 751.482 291.852 750.017 292.129C743.019 293.453 736.127 294.562 729.225 294.629C722.319 294.697 715.28 293.723 708.203 292.56C706.804 292.331 705.4 292.093 703.994 291.855L703.992 291.854C698.372 290.902 692.731 289.946 687.355 289.499C680.576 288.936 674.224 289.176 668.254 289.492C667.777 289.517 667.304 289.543 666.833 289.569C666.455 289.59 666.078 289.61 665.704 289.631L665.703 289.631C660.648 289.91 655.911 290.172 651.234 290.005C645.8 289.811 640.422 289.034 634.54 288.165L634.087 288.098L634.087 288.098C628.37 287.253 622.213 286.343 615.341 285.897C601.258 284.983 584.207 286.015 569.222 289.57C564.525 290.684 559.911 292.085 555.548 293.41L555.547 293.411C553.071 294.163 550.675 294.89 548.391 295.527C541.9 297.336 535.919 298.544 529.98 298.231C523.993 297.915 517.863 296.057 511.398 294.098L511.351 294.084L511.345 294.082C505.035 292.169 498.337 290.139 491.849 290.004C485.514 289.871 479.533 291.547 473.976 293.104L473.976 293.104L473.477 293.244C467.641 294.877 462.198 296.343 456.409 296.172C450.698 296.003 444.511 294.246 437.664 292.302L437.663 292.302L437.132 292.151C430.243 290.195 422.757 288.114 415.267 287.948C407.758 287.781 400.419 289.539 393.517 291.296C393.285 291.355 393.055 291.414 392.824 291.473C392.569 291.538 392.314 291.603 392.06 291.668L392.06 291.668C385.571 293.327 379.485 294.883 373.436 295.146C366.979 295.426 360.438 294.227 353.595 292.744C352.578 292.523 351.551 292.296 350.517 292.067L350.517 292.067C344.718 290.782 338.684 289.445 332.676 288.984C325.535 288.435 318.489 289.114 311.766 290.093C310.515 290.275 309.291 290.465 308.088 290.658ZM350.585 312.42C338.052 307.139 326.554 301.499 316.212 295.548C321.568 294.891 326.908 294.558 332.217 294.966C337.764 295.392 343.32 296.621 349.133 297.907C350.188 298.14 351.251 298.375 352.325 298.608C359.194 300.096 366.398 301.457 373.697 301.14C380.398 300.849 387.074 299.139 393.424 297.513C393.951 297.378 394.475 297.244 394.997 297.111C401.95 295.341 408.549 293.8 415.134 293.946C421.737 294.093 428.5 295.938 435.493 297.923L436.364 298.17C442.922 300.035 449.756 301.978 456.232 302.17C463.065 302.372 469.353 300.628 475.094 299.022L475.231 298.983L475.232 298.983C481.056 297.353 486.288 295.888 491.724 296.002C497.237 296.118 503.122 297.859 509.611 299.826L510.009 299.947L510.009 299.947C516.217 301.829 522.944 303.868 529.665 304.223C536.592 304.588 543.328 303.166 550.002 301.306C552.57 300.591 555.081 299.827 557.601 299.06L557.603 299.059L557.604 299.059C561.812 297.778 566.045 296.49 570.607 295.408C584.937 292.008 601.384 291.004 614.952 291.885C621.575 292.315 627.521 293.193 633.277 294.043L633.279 294.044L633.663 294.1C639.502 294.963 645.201 295.793 651.019 296.001C655.993 296.179 661.037 295.899 666.076 295.62C666.908 295.574 667.74 295.528 668.572 295.484C674.497 295.17 680.509 294.951 686.858 295.479C691.954 295.902 697.27 296.802 702.862 297.749L702.862 297.749L702.864 297.749C704.301 297.992 705.756 298.239 707.23 298.481C714.354 299.651 721.825 300.702 729.284 300.629C736.747 300.556 744.075 299.36 751.133 298.024C752.676 297.733 754.201 297.435 755.712 297.14L755.717 297.139L755.719 297.139C761.196 296.071 766.485 295.039 771.741 294.442C778.4 293.685 785.009 293.631 791.521 293.735C793.325 293.764 795.133 293.805 796.934 293.847L796.938 293.847H796.939C801.57 293.953 806.16 294.059 810.543 293.946C814.334 293.849 818.095 293.582 821.745 293.323L821.746 293.323C823.902 293.169 826.019 293.019 828.082 292.908C833.76 292.602 839.41 292.559 845.521 293.405C851.679 294.257 858.397 296.021 865.34 297.933C866.144 298.154 866.951 298.378 867.76 298.602C873.865 300.292 880.094 302.017 885.973 303.145C899.461 305.734 911.063 305.192 926.104 302.643C927.866 302.344 929.678 302.017 931.525 301.671C921.72 306.714 911.051 311.503 899.602 316.007C896.137 315.819 892.716 315.559 889.429 315.206C885.884 314.826 882.484 314.337 879.113 313.852L879.099 313.85C875.751 313.368 872.42 312.889 869.102 312.547C862.431 311.859 855.681 311.71 848.416 313.194C841.972 314.509 835.188 317.109 828.77 319.569C828.062 319.84 827.36 320.109 826.662 320.375C819.462 323.118 812.861 325.467 807.108 325.996C801.485 326.512 796.474 325.295 790.911 323.648C790.191 323.435 789.461 323.214 788.719 322.99C783.814 321.506 778.393 319.867 772.183 319.313C765.05 318.676 756.964 319.467 749.027 320.508C746.628 320.822 744.248 321.158 741.901 321.49L741.9 321.49L741.898 321.49C736.349 322.274 730.977 323.033 725.939 323.422C712.599 324.452 701.959 322.833 691.083 321.178C690.422 321.078 689.76 320.977 689.097 320.877C677.555 319.132 665.673 317.553 653.011 318.278C648.387 318.542 643.63 319.119 638.838 319.701L638.837 319.701L638.831 319.702C637.125 319.909 635.413 320.116 633.702 320.31C627.111 321.058 620.346 321.633 613.205 321.359C607.673 321.147 601.924 320.432 596.035 319.7L596.025 319.699C594.241 319.477 592.443 319.253 590.635 319.042C582.98 318.146 575.181 317.473 568.031 318.292C561.282 319.066 555.232 321.16 549.795 323.042L549.77 323.051C549.445 323.163 549.123 323.275 548.802 323.385C542.98 325.394 537.958 327.008 532.904 327.011C527.822 327.014 522.493 325.395 516.365 323.444L515.723 323.24C509.918 321.39 503.493 319.344 496.652 318.797C489.535 318.227 482.135 319.283 474.978 320.765C471.412 321.503 467.856 322.359 464.401 323.19L464.399 323.19L464.334 323.206C460.841 324.046 457.457 324.859 454.178 325.53C441.125 328.199 429.801 328.588 418.001 325.563C413.202 324.333 408.333 322.547 403.123 320.637L403.123 320.637C401.819 320.159 400.494 319.673 399.144 319.186C392.483 316.784 385.334 314.412 377.642 313.171C368.893 311.76 359.537 311.835 350.585 312.42ZM477.71 347.386C435.318 340.276 397.069 330.28 364.713 318.056C368.788 318.154 372.807 318.469 376.687 319.095C383.801 320.242 390.517 322.453 397.109 324.83C398.379 325.288 399.65 325.754 400.92 326.221C406.158 328.143 411.39 330.062 416.512 331.375C429.439 334.689 441.725 334.2 455.379 331.408C458.777 330.713 462.263 329.875 465.738 329.039L465.762 329.034C469.246 328.195 472.723 327.359 476.194 326.64C483.171 325.196 489.91 324.276 496.173 324.777C502.315 325.269 508.159 327.129 514.129 329.03L514.545 329.162C520.504 331.058 526.732 333.015 532.909 333.011C539.113 333.007 545.05 331.027 550.76 329.057C551.046 328.958 551.333 328.859 551.619 328.76L551.619 328.76C557.165 326.843 562.642 324.949 568.714 324.253C575.112 323.52 582.304 324.108 589.938 325.001C591.642 325.2 593.371 325.416 595.115 325.633L595.121 325.633C601.06 326.373 607.161 327.132 612.976 327.355C620.57 327.646 627.689 327.031 634.379 326.272C636.203 326.065 637.983 325.849 639.729 325.637L639.731 325.637L639.732 325.637C644.459 325.064 648.936 324.521 653.354 324.268C665.34 323.582 676.684 325.069 688.2 326.809C688.877 326.911 689.554 327.015 690.233 327.118L690.272 327.124C701.105 328.775 712.357 330.489 726.402 329.404C731.638 329 737.315 328.198 742.95 327.402C745.253 327.077 747.55 326.752 749.807 326.457C757.717 325.42 765.231 324.716 771.65 325.289C777.202 325.785 782 327.232 786.929 328.718C787.684 328.946 788.443 329.175 789.207 329.401C794.874 331.079 800.821 332.598 807.657 331.97C814.363 331.354 821.724 328.677 828.799 325.982C829.477 325.723 830.154 325.464 830.828 325.206L830.872 325.189C837.385 322.696 843.689 320.283 849.617 319.072C856.062 317.756 862.145 317.862 868.486 318.515C871.669 318.843 874.884 319.305 878.259 319.791L878.297 319.796L878.298 319.796C880.94 320.176 883.673 320.57 886.506 320.911C857.334 331.315 823.74 339.967 786.902 346.423C782.823 346.33 778.54 346.35 773.847 346.546C767.51 346.81 760.439 347.396 753.243 348.005L752.072 348.104L752.07 348.105C745.227 348.685 738.287 349.273 731.662 349.631C723.663 350.064 716.288 350.162 708.762 350.263H708.761H708.759C702.916 350.34 696.981 350.419 690.593 350.657C681.192 351.007 671.069 351.706 661.844 352.343L661.843 352.343C657.035 352.675 652.472 352.99 648.381 353.23C643.008 353.546 638.265 353.74 633.665 353.929C628.181 354.154 622.901 354.371 616.998 354.774C615.888 354.85 614.757 354.931 613.606 355.015L613.588 355.016C603.24 355.765 591.247 356.633 578.151 354.299C570.853 352.999 563.175 350.697 555.247 348.301L554.779 348.16C547.067 345.828 539.128 343.429 531.408 341.969C515.585 338.978 500.736 339.933 488.368 343.582C484.641 344.681 481.075 346.053 477.71 347.386ZM709.513 356.254C709.202 356.258 708.891 356.263 708.58 356.267H708.579H708.577C702.707 356.348 696.828 356.429 690.816 356.653C681.498 357 671.576 357.685 662.415 358.318C657.575 358.653 652.947 358.972 648.732 359.22C647.96 359.265 647.205 359.308 646.466 359.348C668.005 358.985 689.071 357.935 709.513 356.254ZM564.988 357.399C538.978 355.693 513.889 352.973 490.016 349.351C490.033 349.346 490.049 349.341 490.065 349.336C501.477 345.97 515.359 345.042 530.293 347.865C537.695 349.264 545.37 351.584 553.194 353.949L553.194 353.949L553.511 354.045C557.318 355.195 561.161 356.354 564.988 357.399Z" fill={soupColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M609.001 358.998L610.059 394.507C610.059 394.507 630.141 394.889 643 394.507C655.916 394.125 676.029 392.543 676.029 392.543L674.971 357C663.951 357.698 652.788 358.219 641.502 358.555C630.558 358.881 619.717 359.027 609.001 358.998Z" fill="#A90000" />
            <path d="M616 76.5L615 56.5H595.25L576.5 57L577 78C591.302 77.101 601.414 76.7664 616 76.5Z" fill="#A90000" />
            {children}
        </svg>
    )
}