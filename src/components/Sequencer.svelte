<script>
    import Pad from './Pad.svelte';
    import { sequence } from '../lib/store.js';

    function togglePad(soundIndex, stepIndex) {
        sequence.update(s => {
            const newSeq = [...s];
            newSeq[soundIndex] = [...newSeq[soundIndex]];
            newSeq[soundIndex][stepIndex] = !newSeq[soundIndex][stepIndex];
            return newSeq;
        });
    }
</script>

<svelte>
    {#each $sequence as soundPads, soundIndex}
        <div class="sound-row">
            {#each soundPads as isActive, stepIndex}
                <Pad 
                    {isActive} 
                    onToggle={() => togglePad(soundIndex, stepIndex)} />
            {/each}
        </div>
    {/each}
</svelte>
