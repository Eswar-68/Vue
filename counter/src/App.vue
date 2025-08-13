<script setup>
//components must be imported inside vue files only
import luckynumber from "./components/parentluckynumber.vue";
import customComposible from "./components/composibles/useComposible.js"
const maxluckynumber = customComposible();
</script>

<template>
<luckynumber>
<p>This is parent component</p>
<!--<slot></slot> tag is used to display the contents written inside the child component tag-->
<!--They are show where you mention the tag in the child componenet file-->

<template v-slot:namedslot>
<p>This is an example for named slot</p>
</template>

</luckynumber>
</template>

<style scoped>

</style>