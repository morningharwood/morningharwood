const globby = require('globby');


async function prePublish(glob) {

  const componentPaths = await globby(glob);
  const dirPaths = componentPaths.map(i => `./${i.split('.ts')[ 0 ]}`);

  for (const dp of dirPaths) {
    const ref = await require(dp);

    if (ref && ref[ Object.keys(ref)[ 0 ] ] && typeof ref[ Object.keys(ref)[ 0 ] ].getSchema === 'function') {
      console.log(ref[ Object.keys(ref)[ 0 ] ].getSchema(), 'ref 1');

    }
  }
}

// Maybe make prePublish a generator could work and yeild the getSchema().
// Then call .next after prepublish and initFirebase async are finished.
async function initFirebase() {
  // Add firebase cred and connection
}

async function main() {
  await initFirebase();
  await prePublish('apps/morningharwood/src/app/**/*.component.ts');
}

main();
