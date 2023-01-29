import {Configuration, container} from 'webpack';



export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4205/',
    uniqueName: 'orders',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'orders',
      library: {type: 'var', name: 'orders'},
      filename: 'remoteOrders.js',
      exposes: {
        OrderModule: './projects/app3-orders/src/app/order/order.module.ts',
        OrderComponent: './projects/app3-orders/src/app/order/order.component.ts'
      },
      shared: {
        '@angular/core': {
          eager: true
         
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
