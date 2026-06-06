export const saveOfflineTransaction = (type: string, data: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('amdox_offline_db', 1);
    request.onupgradeneeded = (e: any) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('transactions')) {
        db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = (e: any) => {
      const db = e.target.result;
      const tx = db.transaction('transactions', 'readwrite');
      const store = tx.objectStore('transactions');
      store.add({ type, data, timestamp: new Date() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
};

export const getOfflineTransactions = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('amdox_offline_db', 1);
    request.onupgradeneeded = (e: any) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('transactions')) {
        db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = (e: any) => {
      const db = e.target.result;
      const tx = db.transaction('transactions', 'readonly');
      const store = tx.objectStore('transactions');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    };
    request.onerror = () => reject(request.error);
  });
};

export const clearOfflineTransactions = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('amdox_offline_db', 1);
    request.onsuccess = (e: any) => {
      const db = e.target.result;
      const tx = db.transaction('transactions', 'readwrite');
      const store = tx.objectStore('transactions');
      store.clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
};
