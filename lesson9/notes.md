# Notes

- `v-show` vs. `v-if`: https://forum-archive.vuejs.org/topic/12/v-if-vs-v-show/4
    - `v-show`: hides element, DOM element gets always created, display:none, toggling is cheap
    - `v-if`: removes element, changes DOM structure, lazy, initial cost could be low but toggling could become expensive
