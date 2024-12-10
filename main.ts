const KV = await Deno.openKv();
Deno.serve(() => {
    await KV.set([Date.now().toString()],"hello"]);
    return new Response("Sample2!")
})
