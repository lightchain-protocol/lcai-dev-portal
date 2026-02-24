import { memo } from "react";

const GetStartedGlow = () => {
	return (
		<svg
			fill="none"
			height="181"
			viewBox="0 0 1100 181"
			width="1100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Get Started Glow</title>
			<g filter="url(#filter0_f_1684_1352)" opacity="0.6">
				<path d="M524.697 36L-9 -58.5L1064 -58.5L524.697 36Z" fill="#7342FE" />
			</g>
			<defs>
				<filter
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
					height="383.084"
					id="filter0_f_1684_1352"
					width="1361.58"
					x="-153.292"
					y="-202.792"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_1684_1352"
						stdDeviation="72.146"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default memo(GetStartedGlow);
