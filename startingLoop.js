/** @param {NS} ns */
export async function main(ns) {
  
  // run betterworm.js if can
  if (ns.fileExists("betterworm.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("betterworm.js")) {
      ns.run("betterworm.js");
      ns.tprint('Running "betterworm.js"');
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

  // run gang:3.js if can
  if (ns.fileExists("gang:3.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("gang:3.js")) {
      ns.run("gang:3.js");
      ns.tprint('Running "gang:3.js"');
      await ns.sleep(1000);
    }
    else {
      ns.tprint('You do not have enough RAM to run "gang:3.js"');
      ns.tprint("Skiping...");
    }
  }
  else {
    ns.tprint('Cant Find "betterworm.js"...');
    ns.tprint("Skiping...");
  }

  // run N00dles.js if can
  if (ns.fileExists("N00dles.js", "home")) {
    if ((ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) >= ns.getScriptRam("N00dles.js")) {
      ns.run("N00dles.js");
      ns.tprint('Running "N00dles.js"');
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
