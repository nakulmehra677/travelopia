import useSWR from "swr";
import fetcher from "../api/fetcher";

export default function useFlightList() {
  return useSWR(`/flights`, { fetcher, refreshInterval: 5000 });
}
