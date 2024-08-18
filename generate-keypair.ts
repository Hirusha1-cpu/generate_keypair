import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import fs from "fs/promises";

const generateAndSaveKeypair = async () => {
  // Generate a new keypair
  const keypair = Keypair.generate();

  // Get the public key in base58 format
  const publicKey = keypair.publicKey.toBase58();

  // Encode the secret key to base58
  const secretKey = bs58.encode(keypair.secretKey);

  console.log(`The public key is: `, publicKey);
  console.log(`The secret key is: `, secretKey);

  // Save the keys to a .env file
  const envContent = `PUBLIC_KEY=${publicKey}\nSECRET_KEY=${secretKey}`;
  
  try {
    await fs.writeFile('.env', envContent);
    console.log('✅ Keypair generated and saved to .env file');
  } catch (error) {
    console.error('Error saving to .env file:', error);
  }
};

generateAndSaveKeypair();