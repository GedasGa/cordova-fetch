/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

/* eslint-env jasmine */
var fetch = require('../index.js');
var fs = require('fs-extra');
var superspawn = require('cordova-common').superspawn;

describe('unit tests for index.js', function () {
    beforeEach(function () {
        spyOn(superspawn, 'spawn').and.returnValue('+ foo@1.2.3');
        spyOn(fetch, 'isNpmInstalled').and.returnValue(Promise.resolve());
        spyOn(fs, 'ensureDirSync').and.returnValue(false);
    });

    it('should handle missing options', function () {
        return fetch('platform', 'tmpDir');
    });

    it('npm install should be called with production flag (default)', function () {
        var opts = { cwd: 'some/path', production: true, save: true };
        return fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/production/), jasmine.any(Object));
            });
    });

    it('save-exact should be true if passed in', function () {
        var opts = { cwd: 'some/path', save_exact: true };
        return fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/save-exact/), jasmine.any(Object));
            });
    });

    it('noprod should turn production off', function () {
        var opts = { cwd: 'some/path', production: false };
        return fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).not.toHaveBeenCalledWith('npm', jasmine.stringMatching(/production/), jasmine.any(Object));
            });
    });

    it('when save is false, no-save flag should be passed through', function () {
        var opts = { cwd: 'some/path', production: true, save: false };
        return fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/--no-save/), jasmine.any(Object));
            });
    });
});
