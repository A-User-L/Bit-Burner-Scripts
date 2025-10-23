/** @param {NS} ns */
export async function main(ns) {

  // If you did copy the script "backdoorTarget.js" from my Github...
  // You must change that script name to match what this script is looking for, or...
  // Change what script this script is looking for...
  
  // shorten "backdoorTarget.js" file name to lessen errors
  const bT = "backdoorTarget.js"

  // see if "backdoorTarget.js" exists
  if(ns.fileExists(bT) == false) {

    // ask if you want to download "backdoorTarget.js"
    const askYorN = await ns.prompt(`ERROR: You do not have ${bT} on this server...\nINFO: You need ${bT} to run this script...\nWould you like to download ${bT} from Github?`, { type: "boolean" });
    if(askYorN) {
      const scriptDownload = await ns.wget("https://raw.githubusercontent.com/A-User-L/Bit-Burner-Scripts/refs/heads/main/backdoorTarget.js", bT);
      ns.tprint(`Downloading ${bT}...`);
      await ns.sleep(1000);
      if(scriptDownload){
        ns.tprint(`INFO: Successfully downloaded ${bT}...`);
      }
      else {
        ns.tprint(`ERROR: downloading ${bT} failed...`);
        ns.tprint("Exiting...");
        ns.exit();
      }
    }
    else {
      ns.tprint("Exiting...");
      ns.exit();
    }
  }

  // Target List                                                    For Corpo Faction...
  let targets = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "fulcrumassets"];

  // backdoor targets to unlock factions
  for(let i = 0; i < targets.length; i++){
    ns.tprint(`Running ${bT} on ${targets[i]}`);
    let backDoorRun = ns.run(bT, 1, targets[i]);

    // wait till backdoor is finished before moving on
    do{
      await ns.sleep(3000);
    }while(ns.isRunning(backDoorRun));
  }
  ns.tprint("Script is done...");
  ns.tprint("Exiting...");
}
