export default function Glow({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			height="375"
			viewBox="0 0 1000 375"
			width="1000"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Glow</title>
			<g style={{ mixBlendMode: "difference" }}>
				<g filter="url(#filter0_f_185_2425)">
					<path
						d="M468.358 397.281L34 -380.719H967L468.358 397.281Z"
						fill="#7342FE"
					/>
				</g>
				<g filter="url(#filter1_f_185_2425)">
					<path
						d="M475.868 219.281L143 -380.719H858L475.868 219.281Z"
						fill="#E017FB"
					/>
				</g>
			</g>
			<defs>
				<filter
					color-interpolation-filters="sRGB"
					filterUnits="userSpaceOnUse"
					height="1378"
					id="filter0_f_185_2425"
					width="1533"
					x="-266"
					y="-680.719"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_185_2425"
						stdDeviation="150"
					/>
				</filter>
				<filter
					color-interpolation-filters="sRGB"
					filterUnits="userSpaceOnUse"
					height="1200"
					id="filter1_f_185_2425"
					width="1315"
					x="-157"
					y="-680.719"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						mode="normal"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur_185_2425"
						stdDeviation="150"
					/>
				</filter>
			</defs>
		</svg>
	);
}
