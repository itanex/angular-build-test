# Angular Build Test

The code solution for a client has a really poorly set up for building an Angular Application. Basically it uses a webpack build script instead of using the AngularCLI to make things efficient and simple.

## Things to solve

1. Replace the webpack.config.js file with the angular.json file

## Webpack Build output

    $ npx webpack
    Hash: 004c9e79d7f52088cd86
    Version: webpack 4.16.5
    Time: 8272ms
    Built at: 10/05/2018 11:23:16 PM
                Asset      Size  Chunks             Chunk Names
        ./dist/app.js  2.83 MiB    main  [emitted]  main
    ./dist/app.js.map  2.89 MiB    main  [emitted]  main
    [./node_modules/@angular/core/fesm5 lazy recursive] ./node_modules/@angular/core/fesm5 lazy namespace object 160 bytes {main} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
    [./src/app/app.component.ts] 1.01 KiB {main} [built]
    [./src/app/app.module.ts] 1.13 KiB {main} [built]
    [./src/main.ts] 413 bytes {main} [built]
        + 204 hidden modules

## Angular Build output (version 1)

    $ ng build

    Date: 2018-10-06T07:36:26.284Z
    Hash: c2e44b309aa0568fcb5c
    Time: 8094ms
    chunk {main} main.js, main.js.map (main) 7.94 kB [initial] [rendered]
    chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 396 kB [initial] [rendered]
    chunk {runtime} runtime.js, runtime.js.map (runtime) 6.22 kB [entry] [rendered]
    chunk {styles} styles.js, styles.js.map (styles) 15.6 kB [initial] [rendered]
    chunk {vendor} vendor.js, vendor.js.map (vendor) 2.95 MB [initial] [rendered]
