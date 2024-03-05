import { writable, get } from 'svelte/store';

export const sequence = writable(Array(8).fill().map(() => Array(16).fill(false)));
export const isPlaying = writable(false);
export const tempo = writable(120);
export const swing = writable(0);
export const volume = writable(100);

export async function playSequence() {
    isPlaying.set(true);
}

export function stopSequence() {
    isPlaying.set(false);
}
