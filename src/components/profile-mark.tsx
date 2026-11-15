import Image from "next/image";

type ProfileMarkProps = {
  logo?: string;
  kind: "education" | "language" | "certificate" | "publication";
  className?: string;
};

// El contenedor conserva su espacio al sustituir el ícono por un logo en los datos.
export default function ProfileMark({
  logo,
  kind,
  className,
}: ProfileMarkProps) {
  return (
    <span className={className} aria-hidden="true">
      {logo ? (
        <Image src={logo} alt="" fill sizes="48px" className="object-contain" />
      ) : (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {kind === "education" ? (
            <>
              <path d="m3 9 9-5 9 5-9 5-9-5Zm4 3v5c3 2 7 2 10 0v-5M21 9v7" />
            </>
          ) : kind === "language" ? (
            <>
              <path d="M3 5h11M8 3v2M5 5c1 5 4 8 8 10M12 5c-1 5-4 8-8 10M13 21l4-10 4 10M14 18h6" />
            </>
          ) : kind === "certificate" ? (
            <>
              <circle cx="12" cy="9" r="6" />
              <path d="m9 9 2 2 4-4M8 14l-1 7 5-3 5 3-1-7" />
            </>
          ) : (
            <>
              <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Zm0 0v5h5M9 12h6M9 16h6" />
            </>
          )}
        </svg>
      )}
    </span>
  );
}
