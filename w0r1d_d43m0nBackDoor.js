/** @param {NS} ns */
export async function main(ns) {

  // open ports and gain root function
  function openPortsGainRoot() {

    // open ports if can
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.tprint("opening SSH port...");
      ns.brutessh("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"BruteSSH.exe" not found, exiting.');
      ns.exit();
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
      ns.tprint("opening FTP port...");
      ns.ftpcrack("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"FTPCrack.exe" not found, exiting.');
      ns.exit();
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
      ns.tprint("opening SMTP port...");
      ns.relaysmtp("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"relaySMTP.exe" not found, exiting.');
      ns.exit();
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
      ns.tprint("opening HTTP port...");
      ns.httpworm("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"HTTPWorm.exe" not found, exiting.');
      ns.exit();
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
      ns.tprint("opening SQL port...");
      ns.sqlinject("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"SQLInject.exe" not found, exiting.');
      ns.exit();
    }

    // gain root access
    if (ns.fileExists("NUKE.exe", "home")) {
      ns.tprint("Gaining Root access...");
      ns.nuke("w0r1d_d43m0n");
      ns.sleep(1000);
    }
    else {
      ns.tprint('"NUKE.exe" not found, exiting.');
      ns.exit();
    }
  }

  // check if have root, if not call function to open ports and gain root
  ns.hasRootAccess("w0r1d_d43m0n") ? ns.tprint("You already have root access.") : openPortsGainRoot();
  await ns.sleep(1000);

  // get LVL to backdoor & get MY LVL
  const backDoorLVL = ns.getServerRequiredHackingLevel("w0r1d_d43m0n");
  const myLVL = ns.getHackingLevel();

  // see if can backdoor
  if (myLVL >= backDoorLVL) {
    ns.tprint("installing Backdoor...");
    ns.Singularity.installBackdoor();
  }
  else {
    ns.tprint(`Can't install a Backdoor...   your hacking LVL needs to be ${backDoorLVL}, Try again later...`);
    ns.tprint("Exiting...");
    ns.exit();
  }
}
