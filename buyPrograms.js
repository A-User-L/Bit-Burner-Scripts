/** @param {NS} ns */
export async function main(ns) {

  // check money YOU have
  const homeMoney = ns.getServerMoneyAvailable("home");

  // add commas to num for readability
  function formatNum(numToFormat) {
    let formatedNum = numToFormat.toLocaleString();
    return formatedNum;
  }

  // buy TOR router if can
  if(homeMoney <= 200000) {
    ns.tprint("ERROR: You can not buy a TOR router...");

    // how much more do YOU need?
    const needMoneyToBuyTOR = 200000 - homeMoney;
    ns.tprint(`INFO: You need $${formatNum(needMoneyToBuyTOR)} more...`);
    ns.tprint("Exititing script...");
    ns.exit();
  }
  else if(ns.hasTorRouter() == false) {
    ns.tprint("Buying a TOR router...");
    ns.singularity.purchaseTor();
  }

  // get available programs on darkweb
  const programsForSale = ns.singularity.getDarkwebPrograms();

  // see what YOU can buy and buy if YOU can
  for(var i=0; i < programsForSale.length; i++){

    // check amount of money YOU have
    homeMoney = ns.getServerMoneyAvailable("home");

    // get program cost
    let program = programsForSale[i]
    let programCost = ns.singularity.getDarkwebProgramCost(program);
    if(programCost == 0){
      ns.tprint(`WARN: You have already purchased ${program}...`);
    }
    else if(homeMoney <= programCost){

      // how much more do YOU need?
      const needMoneyToBuyProgram = programCost - homeMoney;
      ns.tprint(`ERROR: You need $${formatNum(needMoneyToBuyProgram)} more to buy ${program}...`);
    }
    else{
      ns.tprint(`purchased ${program} for $${formatNum(programCost)}`);
      ns.singularity.purchaseProgram(program);
    }
  }
  ns.tprint("Exiting script...");
}
