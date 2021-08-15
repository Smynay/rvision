export interface ILocalStorageService {
  loadData: <T = any>(key: string) => T | false;
  saveData: (key: string, data: any) => void;
}

class LocalStorageService implements ILocalStorageService {
  loadData<T = any>(key: string) {
    const entitiesFromStore: T = JSON.parse(
      localStorage.getItem(key) as string
    );

    if (!entitiesFromStore) {
      return false;
    }

    return entitiesFromStore as T;
  }

  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export const LocalStorageServiceInstance = new LocalStorageService();
