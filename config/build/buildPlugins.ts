import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildPlugins({paths}: BuildOptions) {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}