/** @param {NS} ns */
export async function main(ns) {

  // pick target
  const targetName = ns.args[0];
  String(targetName);

  // see if target is real
  if(targetName == null) {
    ns.tprint("ERROR: Please add a target name...");
    ns.tprint('INFO: EX:"backdoorTarget.js [Server]"');
  }
  else if (ns.serverExists(targetName) == false) {
    ns.tprint("ERROR: please add a valid target name...");
    ns.tprint('INFO: EX:"backdoorTarget.js [Server]"');
  }
  else {

    // print target
    ns.tprint(`Your Target is ${targetName}...`)

    // if file is real open ports and gain root function
    function openPortsGainRoot() {

      const portsNeedOpen = ns.getServerNumPortsRequired(targetName);

      // open ports if can
      if(portsNeedOpen === 0) {
        ns.tprint("INFO: You do not need to open any ports...");
      }
      else if(portsNeedOpen >= 1) {
        if(ns.fileExists("BruteSSH.exe", "home")) {
          ns.tprint("opening SSH port...");
          ns.brutessh(targetName);
        }
        else {
          ns.tprint('ERROR: "BruteSSH.exe" not found...');
          ns.tprint("Exiting...");
          ns.exit();
        }
      }
      if(portsNeedOpen >= 2) {
        if(ns.fileExists("FTPCrack.exe", "home")) {
          ns.tprint("opening FTP port...");
          ns.ftpcrack(targetName);
        }
        else {
          ns.tprint('ERROR: "FTPCrack.exe" not found...');
          ns.tprint("Exiting...");
          ns.exit();
        }
      }
      if(portsNeedOpen >= 3) {
        if(ns.fileExists("relaySMTP.exe", "home")) {
          ns.tprint("opening SMTP port...");
          ns.relaysmtp(targetName);
        }
        else {
          ns.tprint('ERROR: "relaySMTP.exe" not found...');
          ns.tprint("Exiting...");
          ns.exit();
        }
      }
      if(portsNeedOpen >= 4) {
        if(ns.fileExists("HTTPWorm.exe", "home")) {
          ns.tprint("opening HTTP port...");
          ns.httpworm(targetName);
        }
        else {
          ns.tprint('ERROR: "HTTPWorm.exe" not found...');
          ns.tprint("Exiting...");
          ns.exit();
        }
      }
      if(portsNeedOpen === 5) {
        if(ns.fileExists("SQLInject.exe", "home")) {
          ns.tprint("opening SQL port...");
          ns.sqlinject(targetName);
        }
        else {
          ns.tprint('ERROR: "SQLInject.exe" not found...');
          ns.tprint("Exiting...");
          ns.exit();
        }
      }

      // gain root access
      if(ns.fileExists("NUKE.exe", "home")) {
        ns.tprint("Gaining Root access...");
        ns.nuke(targetName);
      }
      else {
        ns.tprint('ERROR: "NUKE.exe" not found, exiting...');
        ns.exit();
      }
    }

    // check if have root, if not call function to open ports and gain root
    ns.hasRootAccess(targetName) ? ns.tprint("INFO: You already have root access...") : openPortsGainRoot(), ns.tprint("Gaining Root successful...");
    await ns.sleep(1000);

    // get LVL to backdoor & get MY LVL
    const backDoorLVL = ns.getServerRequiredHackingLevel(targetName);
    const myLVL = ns.getHackingLevel();



    if(myLVL >= backDoorLVL) {

      // get current server name
      const hostname = ns.getHostname();

      // if not at target then find path and go to target
      if(ns.scan(hostname) != targetName) {

        // find path... thanks to "Tyryt" for this part
        var temp = ns.scan(ns.args[0]) //initializing temp to array of scan of target system
        var path = []; //initializing final output
        var prev = temp[0]; //intitializing previous server to first result (previous server) of the temp scan
        var done = 0; //prepping for while loop
        while (done == 0) { //workloop start  this could probably just be a ture/false or 1/0, optimize as you will
          if (prev == "home") { //when the previous server is home, trigger this
            done = 1; //set var to get us out of the while loop, ending the program.
          }
          else { //if the previous server is anything other than home, this runs
            temp = ns.scan(prev); //scan the next server in the path
            path.push(prev)  // compile the current path
            prev = temp[0]; //set the previous server as the new server to scan from
          }
        }

        // reverse array... EX: [path, path, path, target]
        path.reverse();
        path.push(targetName);

        // connect through path
        for(let i = 0; i < path.length; i++) {
          ns.tprint(`connecting to ${path[i]}`)
          ns.singularity.connect(path[i]);
        }
      }

      // install backdoor
      ns.tprint("installing Backdoor...");
      await ns.singularity.installBackdoor();
      ns.tprint("Backdoor installed...");

      // return home
      ns.tprint("Returning Home");

      // reverse array...   EX:[target, path, path, path, home]
      path.reverse();
      path.push("home");
      for(let i = 0; i < path.length; i++) {
        ns.singularity.connect(path[i]);
      }
    }
    else {
      ns.tprint("ERROR: Can't install a Backdoor..."); 
      ns.tprint(`INFO: your hacking LVL needs to be ${backDoorLVL}, Try again later...`);
      ns.tprint("Exiting script...");
      ns.exit();
    }
  }
}
