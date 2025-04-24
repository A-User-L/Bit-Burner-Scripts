/** @param {NS} ns */
export async function main(ns) {

  const host = ns.getHostname();

  // program List (Add More programs, Comment out, and Remove Programs as needed)
  const programList = ["buyPrograms.js", "betterworm.js", "stockgoburr.js", "gang:3.js", "N00dles.js", "BladeBurner.js"];

  // programs that run forever
  const termBose = ["buyPrograms.js", "N00dles.js","BladeBurner.js"];

  // go through program List
  for (let a = 0; a < programList.length; a++) {

    // see if YOU have the file
    if (ns.fileExists(programList[a], host)) {

      // see if YOU can run the program
      if ((ns.getServerMaxRam(host) - ns.getServerUsedRam(host)) >= ns.getScriptRam(programList[a])) {

        // for "gang:3.js" check if in gang
        if (programList[a] == "gang:3.js" && ns.gang.inGang() == false) {
          ns.tprint("WARN: You are not in a gang...");
          ns.tprint("Skiping...");
          i++
        }

        // run program
        ns.tprint(`Running ${programList[a]}`);
        let runScript = ns.run(programList[a]);

        // give program time to run if it uses terminal to be verbose
        for (let b = 0; b < termBose.length; b++) {
          if (programList[a] == termBose[b]) {
            do {
              await ns.sleep(2000);
            } while (ns.isRunning(runScript));
          }
          else{
            await ns.sleep(1000);
          }
        }
      }
      else {
        ns.tprint(`WARN: You do not have enough RAM to run ${programList[a]}`);
        ns.tprint("Skiping...");
      }
    }
    else {
      ns.tprint(`ERROR: Cant Find ${programList[a]}...`);
      ns.tprint("Skiping...");
    }
  }
  ns.tprint("Done...");
  ns.tprint("Exiting Script...");
}
