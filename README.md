# Steps

1. yarn
2. yarn dev
3. Error being reported:

```
TypeError: Cannot destructure property `p` of 'undefined' or 'null'.
    at setup (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2498:27)
    at callWithErrorHandling (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:156:22)
    at setupStatefulComponent (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6377:29)
    at setupComponent (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6338:11)
    at renderComponentVNode (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:160:17)
    at renderVNode (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:248:22)
    at renderVNodeChildren (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:263:9)
    at renderElementVNode (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:299:17)
    at renderVNode (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:245:17)
    at renderComponentSubTree (/Users/Razvan/work/test/vue3-ssr-bug-keepalive/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:217:13)
```

# Point of interest

`/src/pages/Home.js`. The rest of the files don't matter.
