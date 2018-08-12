/**
 * @fileoverview This file will read each component of specified application and
 * by convention save each component with a static method off to
 * firebase collection named components.
 * @notes: At somepoint move to a cloud function but first we need to be able
 * to read a bundle on the server similar to routes!
 */
import * as admin from 'firebase-admin';
import * as globby from 'globby';


const serviceAccount = require('./service-token.json');


async function prePublish(glob, db) {

  const componentPaths = await globby(glob);
  const dirPaths = componentPaths.map(i => `./${i.split('.ts')[ 0 ]}`);
  console.log(db);
  for (const dp of dirPaths) {
    const ref = await require(dp);

    if (ref && ref[ Object.keys(ref)[ 0 ] ] && typeof ref[ Object.keys(ref)[ 0 ] ].getSchema === 'function') {
      console.log(ref[ Object.keys(ref)[ 0 ] ].getSchema(), 'ref 1');

      // const docRef = db.collection('components')
      //                  .doc('alovelace');
      // console.log(docRef);
      // const setAda = docRef.set({
      //   first: 'Ada',
      //   last: 'Lovelace',
      //   born: 1815
      // });

    }
  }
}

// Maybe make prePublish a generator could work and yeild the getSchema().
// Then call .next after prepublish and initFirebase async are finished.
function initFirebase() {
  // Add firebase cred and connection
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  return admin.firestore();
}

async function main() {
  const db = initFirebase();
  await prePublish('../apps/morningharwood/src/app/**/*.component.ts', db);
}

main();
