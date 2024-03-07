export function ExpandingArrowRight({ className }: { className?: string }) {
  return (
    <div className="group relative flex items-center">
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute transition-all sm:group-hover:translate-x-1 sm:group-hover:opacity-0`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12L9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
        />
      </svg>
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute opacity-0 transition-all sm:group-hover:translate-x-1 sm:group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z"
        />
      </svg>
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute opacity-0 transition-all sm:group-hover:translate-x-1 sm:group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z"
        />
      </svg>
    </div>
  );
}
