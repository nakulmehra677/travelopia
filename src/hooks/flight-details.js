import useSWRImmutable from "swr/immutable";

import fetcher from "api/fetcher";

export default function useFlightDetails({ id }) {
  return useSWRImmutable(`/flights/${id}`, {
    fetcher,
    revalidateOnMount: true,
  });
}
