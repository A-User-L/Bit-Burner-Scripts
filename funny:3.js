//** @param {NS} ns */
export async function main(ns) {
  var name = ns.getHostname();
  var targetMaxMoney = ns.getServerMaxMoney(name);


  // if script is trying to run on home or hacknet server 0-10 exit
  if (name == "home") {
    ns.tprint("Can't Hack " + name + ". Exiting script");
    await ns.sleep(5000);
    ns.exit();
    // if can hack
  } else {
    while (true) {
      var hackchance = ns.hackAnalyzeChance(name);
      var availableTargetMoney = ns.getServerMoneyAvailable(name);

      // weaken if chance to hack chance is to small
      if (hackchance < 0.70) {
        await ns.weaken(name);
        await ns.sleep(100);

        // if hack chance isnt to small grow intill have enough money then hack
      } else if ((hackchance >= 0.70) & (availableTargetMoney <= (targetMaxMoney * .70))) {
        await ns.grow(name);
        await ns.sleep(100);
      } else {
        await ns.hack(name);
        await ns.sleep(100);
      }
    }
  }

}
