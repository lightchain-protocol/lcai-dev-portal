import { memo } from "react";

const EventGlow = () => {
	return (
		<svg
			fill="none"
			height="221"
			viewBox="0 0 1300 221"
			width="1300"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Event Glow</title>
			<g filter="url(#filter0_f_1684_2335)" opacity="0.6">
				<path d="M647.697 76L114 -18.5L1187 -18.5L647.697 76Z" fill="#7342FE" />
			</g>
			<defs>
				<filter
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
					height="383.084"
					id="filter0_f_1684_2335"
					width="1361.58"
					x="-30.292"
					y="-162.792"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_1684_2335"
						stdDeviation="72.146"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default memo(EventGlow);
