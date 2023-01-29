import {Configuration, container} from 'webpack';


export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4204/',
    uniqueName: 'restaurant',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'restaurant',
      library: {type: 'var', name: 'restaurant'},
      filename: 'remoteRestaurant.js',
      exposes: {
        RestaurantModule: 'projects/app2-restaurant/src/app/restaurant/restaurant.module.ts'
      },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true
        
        },
        '@angular/common': {
          eager: true,
          singleton: true
         
        },
        '@angular/router': {
          eager: true,
          singleton: true
       
        },
        'place-my-order-assets': {eager: true, singleton: true},
      }
    })
  ]
};

export default webpackConfig;
