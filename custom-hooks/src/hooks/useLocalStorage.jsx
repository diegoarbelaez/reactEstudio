export function useLocalStorage(itemName, itemValue) {
  const localStorageItem = localStorage.getItem(itemName);

  if (!localStorageItem) {
    console.log("No existia y se creó");
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  } else {
    console.log("Ya existia y el valor anterior era...");
    console.log(JSON.parse(localStorageItem));
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }
}
