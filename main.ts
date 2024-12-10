const KV = await Deno.openKv();
Deno.serve(() => {
    KV.set([Date.now().toString(),1],"hello");
    return new Response("Sample2 final!")
})
