[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Migrated - simple way to migrate objects.

Migrated is a simple TypeScript library that migrates objects from one version to another.

```
npm install migrated --save
```

Simply migrate the object using function:

```ts
import { migrated, MigratingData, MigratingFnsc } from 'migrated';

const migratedObject = migrated(
  dataOld as MigratingData, // object that we want to migrate
  migrationFncs as MigratingFnsc, // functions can mutate object, but NOT reassign a new value
  dataNew as MigratingData, // OPTIONAL new data version model, with default values set
);
```

You can also use helper functions:

```ts
import { hydrateData, mergeData } from 'migrated';
```

Please check the tests!

Inspired by: https://github.com/michi88/encrypted
