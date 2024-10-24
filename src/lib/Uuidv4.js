import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

function generateUuid() {
  // Generate a UUID (e.g., '123e4567-e89b-12d3-a456-426614174000')
  const uuid = uuidv4();
  
  // Convert the first part of the UUID to a 34-bit number
  // Substring the first 18 characters (i.e., first part of the UUID)
  const uuid34BitHex = uuid.substring(0, 9); // 34 bits in hex representation is 9 hex digits

  // Convert the 34-bit hex string to an integer
  const uuid34BitInt = parseInt(uuid34BitHex, 16);

  // Convert the integer to a base-32 string representation
  const uuid34BitBase32 = uuid34BitInt.toString(32);

  return uuid34BitBase32;
}

export default generateUuid;
