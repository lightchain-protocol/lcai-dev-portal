import { memo } from "react";

const CommunityGlow = () => {
	return (
		<svg
			fill="none"
			height="204"
			viewBox="0 0 323 204"
			width="323"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Community Glow</title>
			<g opacity="0.5" style={{ mixBlendMode: "lighten" }}>
				<g filter="url(#filter0_f_188_3155)">
					<path
						d="M166.663 94.8553L304 340.847L9 340.847L166.663 94.8553Z"
						fill="#7342FE"
					/>
				</g>
				<g filter="url(#filter1_f_188_3155)">
					<path
						d="M164.289 151.136L269.536 340.847L43.4643 340.847L164.289 151.136Z"
						fill="#E017FB"
					/>
				</g>
			</g>
			<defs>
				<filter
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
					height="435.702"
					id="filter0_f_188_3155"
					width="484.711"
					x="-85.8553"
					y="0.000160217"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_188_3155"
						stdDeviation="47.4277"
					/>
				</filter>
				<filter
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
					height="379.421"
					id="filter1_f_188_3155"
					width="415.782"
					x="-51.391"
					y="56.2809"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_188_3155"
						stdDeviation="47.4277"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default memo(CommunityGlow);
