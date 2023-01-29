import {Configuration, container} from 'webpack';


export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4203/',
    uniqueName: 'home',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'home',
      library: {type: 'var', name: 'home'},
      filename: 'remoteHome.js',
      exposes: {
        HomeComponent: 'src/app/pages/home/home.component.ts'
      },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
         
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          
        },
        '@angular/router': {
          eager: true,
          singleton: true,
       
        },
        'place-my-order-assets': {eager: true, singleton: true, strictVersion: true},
      }
    })
  ]
};
export default webpackConfig;
