import "dotenv/config";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const secretKeyS = process.env.SECRET_KEY

if (!secretKeyS) {
    console.error("SECRET_KEY not found in environment variables");
    process.exit(1);
  }
  try {
    const secretKey = bs58.decode(secretKeyS);
    const keypair = Keypair.fromSecretKey(secretKey);
  
    console.log(`The public key is: `, keypair.publicKey.toBase58());
    console.log(`The secret key is: `, keypair.secretKey);
    console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
  } catch (error) {
    console.error("Error decoding secret key:", error);
  }
