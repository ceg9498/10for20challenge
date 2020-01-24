
function initIDB(dbName:string, dbVersion:number, objectStoreNames:string[]){
  return new Promise((resolve,reject)=> {
    // dbName will be the DB name, storeName will be the store name.
    if(!('indexedDB' in window)){
      console.warn("This browser doesn't support IndexedDB");
      return;
    }
    // create or open IndexedDB
    let request = window.indexedDB.open(dbName, dbVersion);

    // handle errors
    request.onerror = function(event:any){
      console.error("IndexedDB Error: ", request.error);
      reject("Failed to open database");
    };

    // handle db upgrades
    request.onupgradeneeded = function(event:any) {
      // save the IDBDatabase interface
      let db = event.target.result;
      let successCount = 0;
      // Create an objectStore for the database
      objectStoreNames.forEach((name, index)=>{
        updgradeDB(db, name).then(()=>{
          successCount++;
        }).catch((message)=>{
          console.error(message);
        }).finally(()=>{
          if(index+1 === objectStoreNames.length){
            console.log("Reached end of foreach:",index+1, objectStoreNames.length)
            if(objectStoreNames.length === successCount){
              resolve("Database access granted");
            } else {
              reject("Database access rejected");
            }
          }
        });
      });
    };

    request.onsuccess = (event:any) => {
      let curVer = event.target.result.version;
      if(curVer === dbVersion){
        resolve('success');
      }
    };
  });
}

function updgradeDB(db:any, name:string){
  return new Promise((resolve, reject)=>{
    let store = db.createObjectStore(
      name,
      {keyPath:'id',autoIncrement:true}
    );

    store.onerror = () => {
      console.error("store not created, error: ",store.error);
      reject("Failed to open database");
    };
    store.onsuccess = () =>{
      resolve(`Store ${name} created successfully`);
    }
  });
}

function getAll(dbName:string, dbVersion:number, objectStoreName:string):Promise<object[]|string>{
  return new Promise((resolve, reject)=>{
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');

      let store = transaction.objectStore(objectStoreName);
      let objStoreReq = store.getAll();

      objStoreReq.onsuccess = (event:any) => {
        resolve(event.target.result);
      };

      objStoreReq.onerror = (event:any) => {
        reject("Unable to get data");
      };

      transaction.onerror = (event:any) => {
        reject("Unable to get data");
      };
    };

    request.onerror = (event:any) => {
      reject("Unable to get data");
    };
  });
}

function getOne(dbName:string, dbVersion:number, objectStoreName:string, id:any){
  return new Promise((resolve, reject)=>{
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');

      let store = transaction.objectStore(objectStoreName);
      let objStoreReq = store.get(id);

      objStoreReq.onsuccess = (event:any) => {
        resolve(event.target.result);
      };

      objStoreReq.onerror = (event:any) => {
        reject("Unable to get data");
      };

      transaction.onerror = (event:any) => {
        reject("Unable to get data");
      };
    };

    request.onerror = (event:any) => {
      reject("Unable to get data");
    };
  });
}

function addOrUpdateMany(dbName:string, dbVersion:number, objectStoreName:string, items:any[]) {
  return new Promise((resolve,reject) => {
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');
      let store = transaction.objectStore(objectStoreName);
      let objStoreReq;
      items.forEach((item:any) => {
        objStoreReq = store.put(item);
        
        objStoreReq.onerror = function(event) {
          reject("Error storing item "+item);
        };
      });

      transaction.oncomplete = function(event) {
        resolve("Data saved successfully");
      };

      transaction.onerror = (event:any) => {
        reject("Failed to save data");
      };
    };

    request.onerror = (event:any) => {
      reject("Failed to save data");
    };
  });
}

function addOrUpdateOne(dbName:string, dbVersion:number, objectStoreName:string, item:any){
  return new Promise((resolve,reject) => {
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');
      let store = transaction.objectStore(objectStoreName);
      store.put(item);

      transaction.oncomplete = (event:any) => {
        resolve("Data saved successfully");
      };

      transaction.onerror = (event:any) => {
        reject("Failed to save data");
      };
    };

    request.onerror = (event:any) => {
      reject("Failed to save data");
    };
  });
}

function deleteOne(dbName:string, dbVersion:number, objectStoreName:string, id:any){
  return new Promise((resolve,reject)=>{
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;
      let transaction = db.transaction(objectStoreName, 'readwrite');
      let store = transaction.objectStore(objectStoreName);
      let objStoreReq = store.delete(id);

      objStoreReq.onsuccess = (event:any) => {
        resolve("Item was deleted");
      };

      objStoreReq.onerror = (event:any) => {
        reject("Unable to delete entry");
      };

      transaction.onerror = (event:any) => {
        reject("Unable to delete entry");
      };
    };

    request.onerror = (event:any) => {
      reject("Unable to delete entry");
    };
  });
}

function deleteAll(dbName:string, dbVersion:number, objectStoreNames:string[]){
  return new Promise((resolve,reject)=>{
    let request = window.indexedDB.open(dbName, dbVersion);

    request.onsuccess = (event:any) => {
      let db = request.result;

      objectStoreNames.forEach((name)=>{
        let transaction = db.transaction(name, 'readwrite');
        let store = transaction.objectStore(name);
        let objStoreReq = store.clear();
  
        objStoreReq.onsuccess = (event:any) => {
          let message = "Data has been successfully deleted";
          resolve(message);
        };
  
        objStoreReq.onerror = (event:any) => {
          reject("Unable to delete data");
        };

        transaction.onerror = (event:any) => {
          reject("Unable to delete data");
        };
      });
    };

    request.onerror = (event:any) => {
      reject("Unable to delete data");
    };
  });
}
let iDB = {
  init: initIDB,
  getAll: getAll,
  getOne: getOne,
  addOrUpdateMany: addOrUpdateMany, 
  addOrUpdateOne: addOrUpdateOne, 
  deleteOne: deleteOne, 
  deleteAll: deleteAll
};
export default iDB;