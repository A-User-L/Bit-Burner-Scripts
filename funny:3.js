//** @param {NS} ns */
export async function main(ns) {
  var name = ns.getHostname();
  var targetMaxMoney = ns.getServerMaxMoney(name);

  if(name == "home"){
    ns.tprint("ERROR: You can not hack home...");
    ns.tprint("exiting script...");
    ns.exit();
  }
  while (true) {
    var hackchance = ns.hackAnalyzeChance(name);
    var availableTargetMoney = ns.getServerMoneyAvailable(name);

    // weaken if chance to hack chance is to small
    if (hackchance < 0.70) {
      await ns.weaken(name);
      await ns.sleep(10);

      // if hack chance isnt to small grow intill have enough money then hack
    } else if ((hackchance >= 0.70) & (availableTargetMoney <= (targetMaxMoney * .70))) {
      await ns.grow(name);
      await ns.sleep(10);
    } else {
      await ns.hack(name);
      await ns.sleep(10);
    }
  }
}
