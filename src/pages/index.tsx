import { getEvents, EventItem } from "@/api";
import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function getSafeQueryParam(input: string | string[] | undefined) {
  if (Array.isArray(input) && input.length > 0) {
    return input[0];
  }

  return input as string | undefined;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = getSafeQueryParam(query["location"]);
  const language = getSafeQueryParam(query["language"]);

  const events = await getEvents({
    location,
    language,
  });
  return {
    props: {
      events,
      location: location ?? null,
      language: language ?? null,
    },
  };
};

const useRouterState = (router: NextRouter) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    const handleError = (args) => {
      console.log("Error handled", args);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return {
    isLoading,
  };
};

export default function Home({
  events,
  language,
  location,
}: {
  events: EventItem[];
  language?: string;
  location?: string;
}) {
  const router = useRouter();
  const { isLoading } = useRouterState(router);

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 p-24 ${inter.className}`}
    >
      <form
        className="flex flex-row gap-4"
        onChange={(e: ChangeEvent<HTMLFormElement>) => {
          e.target?.form.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          );
        }}
        onSubmit={(e) => {
          e.preventDefault();

          router.push({
            pathname: "/",
            query: new URLSearchParams(
              new FormData(e.currentTarget) as unknown as URLSearchParams
            ).toString(),
          });
        }}
      >
        <label className="flex flex-col gap-1">
          <span>Sprog</span>
          <select name="language" defaultValue={language?.toLowerCase()}>
            <option value="">Alle sprog</option>
            <option value="dansk">Dansk</option>
            <option value="engelsk">Engelsk</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span>Lokation</span>
          <select name="location" defaultValue={location?.toLowerCase()}>
            <option value="">Alle steder</option>
            <option value="århus">Århus</option>
            <option value="silkeborg">Silkeborg</option>
          </select>
        </label>
      </form>

      <section className="flex flex-col gap-4">
        <h1 className="font-medium text-xl flex gap-2 items-center">
          Events
          {isLoading ? (
            <span className="block h-6 w-6 animate-spin">🌀</span>
          ) : null}
        </h1>
        <ul className="flex flex-col gap-6">
          {events.map((x) => (
            <li key={x.id} className="flex flex-col gap-1">
              <h2 className="text-md font-medium">{x.name}</h2>
              <p className="flex flex-row gap-2 divide-x-2 capitalize">
                <span>{x.location}</span> | <span>{x.language}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
