<script>
    import { isPlaying, playSequence, stopSequence } from '../lib/store';

    function togglePlayback() {
        if ($isPlaying) {
            stopSequence();
        } else {
            playSequence();
        }
    }
</script>

<svelte>
    <button on:click={togglePlayback}>
        {$isPlaying ? 'Stop' : 'Play'}
    </button>
</svelte>
