import path from 'path'
import webpack from 'webpack'
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
} 

const mode = 'development'
const isDev = mode === 'development'
const PORT = 3000


const config: webpack.Configuration = BuildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT
})

export default config;