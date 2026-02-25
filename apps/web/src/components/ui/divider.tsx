import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4 items-center justify-center", className)}>
      <svg className="max-w-full" xmlns="http://www.w3.org/2000/svg" width="297" height="1" viewBox="0 0 297 1" fill="none">
        <path d="M296.678 0V1H0V0H296.678Z" fill="url(#paint0_linear_2002_156)" />
        <defs>
          <linearGradient id="paint0_linear_2002_156" x1="296.995" y1="1.5" x2="0" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#171E2E" />
            <stop offset="1" stopColor="#171E2E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="max-w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
        <path d="M5.86779 0.703102C6.72533 -0.518105 8.67201 -0.0639956 8.86877 1.41404L8.88244 1.55955V1.56345L9.14611 6.99021L13.0084 7.04002H13.0074C14.3107 7.04865 15.0913 8.49996 14.3668 9.58689L8.81311 17.9238L8.81213 17.9228C7.9179 19.2713 5.78408 18.6677 5.78381 17.0136V11.6826H1.66076C0.401577 11.6826 -0.467281 10.2851 0.27209 9.15818H0.271113C1.51126 7.23866 4.27932 2.99899 5.86389 0.708961L5.86779 0.703102ZM7.78381 15.8603L12.3336 9.03123L8.79846 8.98631H8.7799C7.93281 8.95981 7.2222 8.29697 7.16662 7.43552L7.16564 7.42771V7.4199L6.9342 2.68552C5.49836 4.79989 3.50192 7.85245 2.31506 9.68259H6.12561C7.0116 9.68259 7.78381 10.3787 7.78381 11.3193V15.8603Z" fill="url(#paint0_linear_2002_158)" />
        <defs>
          <linearGradient id="paint0_linear_2002_158" x1="-2.48948" y1="1.95971" x2="17.2586" y2="3.76142" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B4BFF" />
            <stop offset="1" stopColor="#EE11FB" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="max-w-full" xmlns="http://www.w3.org/2000/svg" width="297" height="1" viewBox="0 0 297 1" fill="none">
        <path d="M296.678 0V1H0V0H296.678Z" fill="url(#paint0_linear_2002_157)" />
        <defs>
          <linearGradient id="paint0_linear_2002_157" x1="0" y1="1.5" x2="296.678" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#171E2E" />
            <stop offset="1" stopColor="#171E2E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}