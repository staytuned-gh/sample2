import { assertEquals } from "jsr:@std/assert";

Deno.test("add 1+1", () => {
    const result = 1 + 1;
    assertEquals(result, 2);
})
