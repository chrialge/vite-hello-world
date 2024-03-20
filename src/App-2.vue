<script>
export default {
    data() {
        return {
            text: 'Command important for terminal'
        }
    }
}
</script>

<template>
    <div class="left">
        <header>
            <h1>{{ text }}</h1>
        </header>
        <main>
            <ul>
                <li>cd - command for select repo and inside entry</li>
                <li>ls - command show repo and file of the repo parent</li>
                <li>mkdir - make repo</li>
                <li>rmdir - remove repo</li>
                <li>cat - command call content of the file</li>
                <li>echo - insert content inside of file</li>
                <li>tree - show tree from the repo parent</li>
                <li>man - show manual of the command</li>
                <li>cp - copy file or directory</li>
                <li>mv - move and rename file or repo</li>
            </ul>
        </main>
        <footer>

        </footer>
    </div>
</template>

<style></style>