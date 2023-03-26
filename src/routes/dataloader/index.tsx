import { component$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

import { songs } from "./Song";

export const useSongs = loader$(() => {
  return songs;
});


export const useGetServerTime = loader$(() => {
  return new Date().toISOString();
});

export default component$(() => {
  const serverTime = useGetServerTime();
  const songs = useSongs();
  return (
    // 

    <div>
      <div>{serverTime}</div>
      <ul>
        {songs.value.map((song) => {
          return (
            <li>
              <div>{song.id}</div>
              <div>{song.name}</div>
              <div>{song.year}</div>
            </li>
          );
        })}
      </ul>
    </div>





  )
});