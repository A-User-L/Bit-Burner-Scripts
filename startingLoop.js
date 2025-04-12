/** @param {NS} ns */
export async function main(ns) {

  // run buyPrograms.js if can
  if (ns.fileExists("buyPrograms.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("buyPrograms.js")) {
      ns.run("buyPrograms.js");
      ns.tprint('Running "buyPrograms.js"');

      // give script time to run
      await ns.sleep(1000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "buyPrograms.js"');
      ns.tprint("Skiping...");
    }
  }
  else {
    ns.tprint('Cant Find "buyPrograms.js"...');
    ns.tprint("Skiping...");
  }

  // run betterworm.js if can
  if (ns.fileExists("betterworm.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("betterworm.js")) {
      ns.run("betterworm.js");
      ns.tprint('Running "betterworm.js"');

      // give script time to run
      await ns.sleep(1000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "betterworm.js"');
      ns.tprint("Skiping...");
    }
  }
  else {
    ns.tprint('Cant Find "betterworm.js"...');
    ns.tprint("Skiping...");
  }

  // run stockgoburr.js if can
  if (ns.fileExists("stockgoburr.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("stockgoburr.js")) {
      ns.run("stockgoburr.js");
      ns.tprint('Running "stockgoburr.js"');

      // give script time to run
      await ns.sleep(1000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "stockgoburr.js"');
      ns.tprint("Skiping...");
    }
  }
  else {
    ns.tprint('Cant Find "stockgoburr.js"...');
    ns.tprint("Skiping...");
  }

  // see if can run gang:3.js
  if (ns.fileExists("gang:3.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("gang:3.js")) {

      // run gang:3.js if in gang
      if (ns.gang.inGang()) {
        ns.run("gang:3.js");
        ns.tprint('Running "gang:3.js"');

        // give script time to run
        await ns.sleep(1000);
      }
      else {
        ns.tprint("You are not in a gang...");
        ns.tprint('Skipping "gang:3.js"...');
      }
    }
    else {
      ns.tprint('You do not have enough RAM to run "gang:3.js"');
      ns.tprint("Skiping...");
    }
  }
  else {
    ns.tprint('Cant Find "gang:3.js"...');
    ns.tprint("Skiping...");
  }

  // run N00dles.js if can
  if (ns.fileExists("N00dles.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("N00dles.js")) {
      ns.run("N00dles.js");
      ns.tprint('Running "N00dles.js"');

      // give script time to run
      await ns.sleep(15000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "N00dles.js"');
      ns.tprint("Skipping...");
    }
  }
  else {
    ns.tprint('Cant Find "N00dles.js"...');
    ns.tprint("Skipping...");
  }

  // run BladeBurner.js if can
  if (ns.fileExists("BladeBurner.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("BladeBurner.js")) {
      ns.run("BladeBurner.js");
      ns.tprint('Running "BladeBurner.js"');

      // give script time to run
      await ns.sleep(1000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "BladeBurner.js"');
      ns.tprint("Exiting script...");
      ns.exit();
    }
  }
  else {
    ns.tprint('Cant Find "BladeBurner.js"...');
    ns.tprint("Exiting script...");
    ns.exit();
  }
}
