/** @param {NS} ns */
export async function main(ns) {

  // see if the computer knows the treads the script can use
  if(!ns.fileExists("RAMshareThreads.txt")){

    ns.tprint("Finding out how many threads to use...");
    await ns.sleep(1000);

    // Usable RAM
    let freeRAM = ns.getServerMaxRam(ns.getHostname()) - ns.getServerUsedRam(ns.getHostname());
    let scriptRAM = ns.getScriptRam(ns.getScriptName());

    // find out how many threads YOU can run this script with.
    let threads = Math.floor(freeRAM / scriptRAM);

    // write that number to a temp file
    ns.write("RAMshareThreads.txt", threads);

    ns.tprint(`You can use ${threads} threads...`);
    await ns.sleep(1000);

    /*
      I only did this so that it could run itself again,
      with almost the max amount of threads it can run at...

      Yes I know there are better ways, but eh... :p
    */

    var dontRun2OfThisScript = true;
  }

  // read the number from the temp file
  let threads = ns.read("RAMshareThreads.txt");

  // get script name
  let scriptName = ns.getScriptName();
  
  // run script again with however many threads...
  ns.run(scriptName, threads);

  // doesnt let 2 instiances run at same time (kinda self explanatory)
  if(dontRun2OfThisScript){
    ns.kill(ns.pid);
  }

  // verboseness
  ns.tprint("You are now sharing your RAM with factions...");
  await ns.sleep(1000);
  ns.tprint("WARN: Thank You...");
  await ns.sleep(1000);
  ns.tprint(`If you would like to stop sharing your RAM: "kill ${ns.pid}"`);
  await ns.sleep(1000);

  // remove no longer needed temp file
  ns.rm("RAMshareThreads.txt");

  // amount of ram used from script (with threads)
  let usedRam = Math.floor(ns.getScriptRam(scriptName) * threads);

  // figure out which size measurement to use
  if(usedRam < 1000){
    var sizeMeasurement = "GB";
  }
  else if(usedRam < 1048576){
    var sizeMeasurement = "TB";
    Math.floor(usedRam = usedRam / 1000);
  }
  else{
    var sizeMeasurement = "PB";
    Math.floor(usedRam = usedRam / 1000000);
  }


  // counter
  let i = 0;

  // repeat till killed from terminal
  do {

    // share ram
    await ns.share();

    // add to counter
    i++
    ns.toast(`You have shared ${usedRam}${sizeMeasurement} of your ram with factions ${i} times.`);
  } while (true);
}
