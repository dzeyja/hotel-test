import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { BuildOptions } from './types/config'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildWebpackDevServer'

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration  {
    const {paths, mode, isDev} = options
    
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer:isDev ?  buildDevServer(options) : undefined
    }
}