import * as SecureStore from 'expo-secure-store';
import * as Updates from "expo-updates";

// Validate the key
function isValidKey(key) {
  const keyPattern = /^[a-zA-Z0-9._-]+$/;
  return keyPattern.test(key) && key.trim().length > 0;
}

// Store token securely
async function saveToken(key, token) {
  if (!isValidKey(key)) {
    console.error('Invalid key provided');
    return;
  }
  try {
    await SecureStore.setItemAsync(key, token);
    console.log('Token stored securely');
  } catch (error) {
    console.error('Error storing the token:', error);
  }
}

// Retrieve token securely
async function getToken(key) {
  if (!isValidKey(key)) {
    console.error('Invalid key provided');
    return null;
  }
  try {
    const token = await SecureStore.getItemAsync(key);
    
    return token;
  } catch (error) {
    console.error('Error retrieving the token:', error);
    return null;
  }
}

// Remove token securely
async function removeToken(key) {
  if (!isValidKey(key)) {
    console.error('Invalid key provided');
    return;
  }
  try {
    await SecureStore.deleteItemAsync(key);
await Updates.reloadAsync();
    console.log('Token removed securely');
  } catch (error) {
    console.error('Error removing the token:', error);
  }
}

export { saveToken, getToken, removeToken };
