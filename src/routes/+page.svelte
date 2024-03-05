<script>
    import headerImage from '../assets/header.png';
    import Controls from '../components/Controls.svelte';
    import Sequencer from '../components/Sequencer.svelte';
</script>

<main>
    <img src={headerImage} alt="beat originator" />
    <Controls />
    <Sequencer />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
