const KV = await Deno.openKv();
Deno.serve(() => {
    KV.set([Date.now().toString()],"hello");
    return new Response("Sample2!")
})
