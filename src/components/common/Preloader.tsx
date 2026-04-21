import { useEffect, useState } from "react";

type PreloaderProps = {
  /** When true, show until unmounted (React Suspense); otherwise hide after first tick (template-style). */
  suspenseFallback?: boolean;
};

export default function Preloader({
  suspenseFallback = false,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (suspenseFallback) return;
    setTimeout(() => {
      setIsLoading(false);
    });
  }, [suspenseFallback]);
  if (!suspenseFallback && !isLoading) return null;
  return (
    <div id="preloader">
      <div className="loader">
        <img
          alt="Loading..."
          src="/assets/images/logo.svg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
