<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

[![NPM](https://nodei.co/npm/cordova-fetch.png)](https://nodei.co/npm/cordova-fetch/)

# cordova-fetch [![Travis Badge]][Travis] [![AppVeyor Badge]][AppVeyor]

This package can be used to install and uninstall Node.js packages using npm.

## Usage

### `fetch`

Installs a module from npm, a git url or the local file system. Returns a `Promise` resolving to the absolute path to the installed package.

```js
const fetch = require('cordova-fetch');

fetch(spec, dest, opts).then(pathToInstalledPackage => {
    // Do something
});
```

#### Parameters

Parameter | Description
-|-
`spec` | A spec for the package to be installed (anything supported by `npm install`)
`dest` | Location where to install the package
`opts` | Additional options (optional)

##### Options

Option | Default | Description
-|-|-
`save` | `false` | Adds the package as dependency to `package.json` iff `true`

### `uninstall`

Uninstalls a package from given directory. Returns a `Promise` that resolves when removal has finished

```js
const { uninstall } = require('cordova-fetch');

uninstall(packageName, dest, opts).then(() => {
    // Do something
});
```

#### Parameters

Parameter | Description
-|-
`packageName` | Name of the package to be uninstalled
`dest` | Location from where to uninstall the package
`opts` | An Object with additional options

##### Options

Option | Default | Description
-|-|-
`save` | `false` | Removes dependency from `package.json` iff `true`


[Travis Badge]: https://travis-ci.org/apache/cordova-fetch.svg?branch=master
[Travis]: https://travis-ci.org/apache/cordova-fetch

[AppVeyor Badge]: https://ci.appveyor.com/api/projects/status/6xv212nihtcnbsov?svg=true
[AppVeyor]: https://ci.appveyor.com/project/ApacheSoftwareFoundation/cordova-fetch/branch/master
