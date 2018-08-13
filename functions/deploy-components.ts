/**
 * @fileoverview This file will read each component of specified application and
 * by convention save each component with a static method off to
 * firebase collection named components.
 * @notes: At somepoint move to a cloud function but first we need to be able
 * to read a bundle on the server similar to routes!
 */
import * as admin from 'firebase-admin';
import * as globby from 'globby';
import * as path from 'path';
import { get } from 'lodash';
import { removeExt } from 'path-extra';


const serviceAccount = require('./service-token.json');
const removeExtAndJoinDir = i => path.join(__dirname, removeExt(i));
const mapRemoveExtAndJoinDir = (g) => g.map(removeExtAndJoinDir);
const COMPONENT_COLLECTION = 'components';
const hasValidSchema = (ref) => {

    return [
      get(ref, `[${ Object.keys(ref)[ 0 ] }].getSchema`,  false) ,
      get(ref, `[${ Object.keys(ref)[ 0 ] }]`),
    ];

};

async function prePublish(glob, db) {
  const componentPaths = await globby(glob)
    .then(mapRemoveExtAndJoinDir);
  for (const dp of componentPaths) {
    const ref = await require(dp);
    const [ schemaFn, refKey ] = hasValidSchema(ref);

    if (schemaFn && schemaFn === 'function') {
      const docRef = db.collection(COMPONENT_COLLECTION)
                       .doc(refKey.name);
      docRef.set({
        schema: schemaFn()
      });

    }
  }
}

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
