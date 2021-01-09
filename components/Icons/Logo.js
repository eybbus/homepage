import React from "react";

const Logo = ({
	ringFill = "#311244",
	ringStroke = "#00f9ff",
	symbolFill = "#ffdd50",
	onClick,
	width = 250,
	height = 250,
	style,
}) => (
		<svg
			onClick={onClick}
			width={width}
			height={height}
			style={style}
			version="1.1"
			viewBox="0 0 66.146 66.146"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="translate(-317.69 -48.57)">
				<path
					d="m382.83 81.643a32.071 32.071 0 0 1-32.071 32.071 32.071 32.071 0 0 1-32.071-32.071 32.071 32.071 0 0 1 32.071-32.071 32.071 32.071 0 0 1 32.071 32.071z"
					fill={ringFill}
					stroke={ringStroke}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2.0044"
				/>

				<g fill={symbolFill}>
					<path
						transform="matrix(1 0 -.62211 .78293 0 0)"
						d="m418.24 119.29h14.361c0.46155 0 0.83312 0.37158 0.83312 0.83313v3.2072c0 0.46155-0.37157 0.83312-0.83312 0.83312h-14.361c-0.46155 0-0.83312-0.37157-0.83312-0.83312v-3.2072c0-0.46155 0.37157-0.83313 0.83312-0.83313z"
						strokeWidth=".21858"
					/>
					<path
						transform="rotate(22.75)"
						d="m357.52-60.105a3.235 3.235 0 0 1-2.6039 3.1728 3.235 3.235 0 0 1-3.6198-1.9348 3.235 3.235 0 0 1 1.1915-3.9277 3.235 3.235 0 0 1 4.0847 0.40231l-2.2875 2.2875z"
					/>
					<g>
						<path
							transform="matrix(-1 0 .62211 .78293 0 0)"
							d="m-302.84 84.727h14.361c0.46155 0 0.83312 0.37157 0.83312 0.83312v3.2072c0 0.46155-0.37157 0.83312-0.83312 0.83312h-14.361c-0.46155 0-0.83313-0.37157-0.83313-0.83312v-3.2072c0-0.46155 0.37158-0.83312 0.83313-0.83312z"
							strokeWidth=".21858"
						/>
						<path
							transform="matrix(0 1 .6366 -.77119 0 0)"
							d="m486.5 531.98h20.438c0.51828 0 0.93553 0.41725 0.93553 0.93553v3.6015c0 0.51828-0.41725 0.93553-0.93553 0.93553h-20.438c-0.51828 0-0.93553-0.41725-0.93553-0.93553v-3.6015c0-0.51828 0.41725-0.93553 0.93553-0.93553z"
							strokeWidth=".27328"
						/>
						<path
							transform="matrix(0 1 -.6366 -.77119 0 0)"
							d="m-343.39-537.45h20.438c0.51828 0 0.93553 0.41725 0.93553 0.93553v3.6015c0 0.51828-0.41725 0.93553-0.93553 0.93553h-20.438c-0.51828 0-0.93553-0.41725-0.93553-0.93553v-3.6015c0-0.51828 0.41725-0.93553 0.93553-0.93553z"
							strokeWidth=".27328"
						/>
					</g>
				</g>
			</g>
		</svg>
	);

export default Logo;
