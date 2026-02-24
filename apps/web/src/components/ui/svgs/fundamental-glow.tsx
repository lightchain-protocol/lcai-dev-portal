import { memo } from "react";

const FundamentalGlow = () => {
	return (
		<svg
			fill="none"
			height="213"
			viewBox="0 0 1300 213"
			width="1300"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Fundamental Glow</title>
			<g filter="url(#filter0_f_185_1451)" opacity="0.6">
				<path d="M647.697 68L114 -26.5L1187 -26.5L647.697 68Z" fill="#7342FE" />
			</g>
			<defs>
				<filter
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
					height="383.084"
					id="filter0_f_185_1451"
					width="1361.58"
					x="-30.292"
					y="-170.792"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_185_1451"
						stdDeviation="72.146"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default memo(FundamentalGlow);
