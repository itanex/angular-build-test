# Angular Build Test

The code solution for a client has a really poorly set up for building an Angular Application. Basically it uses a webpack build script instead of using the AngularCLI to make things efficient and simple.

## Things to solve

1. Replace the webpack.config.js file with the angular.json file

## Build output

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
