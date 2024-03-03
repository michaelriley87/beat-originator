<script>
    let isPlaying = false;

    function togglePlay() {
        isPlaying = !isPlaying;
    }
</script>

<svelte>
    <button on:click={togglePlay}>
        {isPlaying ? "Stop" : "Play"}
    </button>
</svelte>
