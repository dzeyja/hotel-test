import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({paths}: BuildOptions) {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
          }),
          new BundleAnalyzerPlugin()
    ]
}