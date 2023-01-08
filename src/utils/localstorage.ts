import { LocalStorageMap } from 'constants/localstorage'

export const getLocalStorage = async <K extends keyof LocalStorageMap>(
  keyName: K,
): Promise<LocalStorageMap[K] | undefined> => {
  try {
    const storedData = await localStorage.getItem(keyName)
    if (storedData != null) {
      return JSON.parse(storedData)
    }
  } catch (error) {
    // Error reading
  }
}

export const setLocalStorage = async <K extends keyof LocalStorageMap>(
  keyName: K,
  value: LocalStorageMap[K],
) => {
  try {
    await localStorage.setItem(keyName, JSON.stringify(value))
  } catch (e) {
    // Error saving
  }
}
