/** @param {NS} ns */
export async function main(ns) {

  var filename = "funny:3.js"
  var host = "n00dles"
  var worktime = 5000
  var waittime = 1000

  //Gaining root
  if (ns.hasRootAccess(host)) {
    ns.tprint("WARN: Gaining Root to " + host + " failed...   You already have root.")
    await ns.sleep(waittime)
  } else {
    ns.tprint("Gaining Root to " + host + ".")
    ns.nuke(host)
    await ns.sleep(worktime)
  };

  //copying payload
  if (ns.fileExists(filename, host)) {
    ns.tprint("WARN: copying " + filename + " to " + host + " failed...   File already exists.")
    await ns.sleep(waittime)
  } else {
    ns.tprint("copying " + filename + " to " + host + ".")
    ns.scp(filename, host, "home");
    await ns.sleep(worktime)
  };

  //running payload
  if (ns.isRunning(filename, host)) {
    ns.tprint("WARN: running " + filename + " on " + host + " failed...   File already running...   Exiting script")
    ns.exit
  } else {
    ns.tprint("running " + filename + " on " + host + ".")
    ns.exec(filename, host, 1);
    await ns.sleep(worktime)
    ns.tprint("Done...   Exiting script.")
    ns.exit
  };
}
