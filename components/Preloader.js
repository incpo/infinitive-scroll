import * as React from "react"

const Preloader = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 128 128"
        xmlSpace="preserve"
        {...props}
    >
        <rect width="100%" height="100%" fill="#FFF" />
        <circle cx={64} cy={64} r={64} />
        <g>
            <path
                d="M113.33 49c0 9.5-5 14.22-7 20.67-.88.1-.58 1.93-3.33 1.33-1.32-.98-2.4-1.87-2-4-.86-2.03-2.3-1.06-3 1.33-.56.78-.78 1.2-1.88.25l-.02-.03a32.9 32.9 0 0 1-65.7-.15l-.1.2c-1.1.95-1.33.52-1.88-.26-.72-2.4-2.15-3.37-3-1.33.4 2.16-.7 3.05-2 4-2.75.6-2.45-1.2-3.34-1.3-2-6.44-7-11.16-7-20.66-.3-5.5 10.84-34.12 30.67-9.33l-.28.6a32.92 32.92 0 0 1 39.44-.1l-.2-.5c19.83-24.8 30.96 3.8 30.66 9.33zm-72 13.33a4 4 0 1 0 4 4 4 4 0 0 0-4-4zM63.5 58c-4.88 0-8.83 6.42-8.83 14.33s3.95 14.34 8.83 14.34 8.83-6.42 8.83-14.34S68.38 58 63.5 58zm21.83 4.33a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"
                fill="#fff"
            />
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 64 64"
                to="360 64 64"
                dur="1440ms"
                repeatCount="indefinite"
            />
        </g>
    </svg>
)

export default Preloader
