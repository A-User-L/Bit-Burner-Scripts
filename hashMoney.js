/** @param {NS} ns */
export async function main(ns) {

    // Idk why you would name this script something diffrent...
    // But if you do this script will still work...
    let scriptName = ns.getScriptName();

    // Find out if user has enough hashes (As a buffer just in case).
    let bufferAmount = 100 //Change as needed.
    let hashCountCheck = ns.hacknet.numHashes();
    if(hashCountCheck <= bufferAmount){
        ns.tprint(`ERROR: You have ${hashCountCheck} Hashes, you need ${bufferAmount} or more to run this script...`);
        ns.tprint("Exiting script...");
        ns.exit;
    }

    // Tell user how to kill this script.
    let scriptPID = ns.pid;
    ns.tprint(`To kill this script: "kill ${scriptPID}"`);


    // If user would not like to spend all or most Hashes/Second (H/S).
    // The user can add a argument in the form of a number for how much less to not buy.
    let amountOfHashesToNotSpend = ns.args[0];
    Number(amountOfHashesToNotSpend);

    // user did not supply a argument assume User wants to spend all or most H/S.
    if (amountOfHashesToNotSpend == undefined){
        amountOfHashesToNotSpend = 0;
    }

    // If user put anything NaN as a argument.
    if(amountOfHashesToNotSpend === NaN){
        ns.tprint("Warn: Argument must be a number");
        ns.tprint(`INFO: EX: ${scriptName} 1`);

        // Assume User wants to spend all or most H/S.
        amountOfHashesToNotSpend = 0;
    }

    // Confirm to user how much hashes to not spend...
    ns.tprint(`You will not convert ${amountOfHashesToNotSpend} Hashes...`);
    ns.tprint(`INFO: If that is incorrect, please kill this script and Give a argument...`);
    ns.tprint(`INFO: EX: ${scriptName} 1`);

    // Find out user H/S.
    let hashPerSecNum = 0;
    async function HashPerSec(){
        ns.print("Finding Hash/Second...");
        let numHashes1 = ns.hacknet.numHashes();
        await ns.sleep(1000);
        let numHashes2 = ns.hacknet.numHashes();
        hashPerSecNum = numHashes2 - numHashes1;
        ns.print(`You make ${hashPerSecNum}Hash/Second...`);
    }


    // Run till killed by user...
    do{

        // Recheck H/S.
        await HashPerSec();

        // Find cost to convert Hashes to money.
        let hashToMoneyCost = ns.hacknet.hashCost("Sell for Money");

        // $1M cost 4 hashes.
        // Find out how many hashes to buy and how much money that is.
        let hashesToConvt = (hashPerSecNum / hashToMoneyCost) - amountOfHashesToNotSpend;
        let moneyGained = hashesToConvt * 1000000;
        ns.print(`Turning ${hashesToConvt} Hashes into $${moneyGained}`);

        // Convert the hashes
        ns.hacknet.spendHashes("Sell for Money", "home", hashesToConvt);
    }while(true)
}
