/** @param {NS} ns */
export async function main(ns) {
 var player = ns.getPlayer();
 ns.tprint (player);
 ns.sleep(5000);
 ns.exit();
}
