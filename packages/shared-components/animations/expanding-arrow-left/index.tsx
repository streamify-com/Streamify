export function ExpandingArrowLeft({ className }: { className?: string }) {
  return (
    <div className="group relative flex items-center">
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute transition-all sm:group-hover:-translate-x-1 sm:group-hover:opacity-0`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
        />
      </svg>
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute opacity-0 transition-all sm:group-hover:-translate-x-1 sm:group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
        />
      </svg>
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute opacity-0 transition-all sm:group-hover:-translate-x-1 sm:group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
        />
      </svg>
    </div>
  );
}
