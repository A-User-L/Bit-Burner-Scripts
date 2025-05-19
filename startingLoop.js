/** @param {NS} ns */
export async function main(ns) {
  const host = ns.getHostname();

  // program List (Add More programs, Comment out, and Remove Programs as needed)
  const programList = ["buyPrograms.js", "betterworm.js", "stockgoburr.js", "gang:3.js", "N00dles.js", "BladeBurner.js"];

  // programs that verbose through terminal
  const termBose = ["buyPrograms.js", "N00dles.js"];

  // go through program List
  for(let a = 0; a < programList.length; a++) {

    // see if YOU have the file
    if(ns.fileExists(programList[a], host)) {

      // see if YOU can run the program
      if((ns.getServerMaxRam(host) - ns.getServerUsedRam(host)) >= ns.getScriptRam(programList[a])) {

        // is program running?
        if(ns.isRunning(programList[a]) == false) {

          // for "gang:3.js" check if in gang
          if(programList[a] == "gang:3.js" && ns.gang.inGang() == false) {
            ns.tprint("WARN: You are not in a gang...");
            ns.tprint("Skiping...");
            a++
          }

          // run program
          ns.tprint(`Running ${programList[a]}`);
          ns.run(programList[a]);

          // give program time to run if verbose through terminal
          for (let b = 0; b < termBose.length; b++) {
            if(programList[a] == termBose[b]) {
              do {
                await ns.sleep(2000);
              } while(ns.isRunning(programList[a]));
            }
            else {
              await ns.sleep(1000);
            }
          }
        }
        else{
          ns.tprint(`${programList[a]} is already running...`);
          ns.tprint("Skiping...");
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

  // does "backdoorTarget.js" exist?
  if(ns.fileExists("backdoorTarget.js")){
    
    // faction list
    let factionServName = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "fulcrumassets"]

    // go through faction list
    for(let i = 0; i < factionServName.length; i++) {

      // check if target already has a backdoor
      if(ns.fileExists("DoNotRemove.txt", factionServName[i])){
        i++
      }

      // backdoor reqirements
      let backdoorNeed = ns.getServerRequiredHackingLevel(factionServName[i]);
      let myLvL = ns.getHackingLevel();

      // wait if can't backdoor
      do {
        await ns.sleep(1000);
      } while(myLvL <= backdoorNeed)

      // backdoor target
      ns.run("backdoorTarget.js", 1, factionServName[i]);
    }
  }

  ns.tprint("Script complete, exiting...");
}
