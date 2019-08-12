const path = require('path');
const { getAllFiles } = require('yu-node');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntry(dirPath){
    let arr = getAllFiles(dirPath);
    let obj = {};
    arr.forEach(val=>{
        let pathO = path.parse(val);
        obj[pathO.name] = val;
    });
    return obj;
}

function getEntryNames(dirPath){
    let arr = getAllFiles(dirPath);
    let names = [];
    arr.forEach(val=>{
        let pathO = path.parse(val);
        names.push(pathO.name);
    });
    return names;
}

function getHtmlWebpackPlugins_dev(dirPath){
    let names = getEntryNames(dirPath);
    let HWPs = [];
    names.forEach(name=>{
      let HWP = new HtmlWebpackPlugin({
        template: `view/${name}.html`,
        filename: `${name}.html`,
        inject: true,
        excludeChunks:names.filter(val=>val!==name)
      });
      HWPs.push(HWP);
    });
    return HWPs;
}

function getHtmlWebpackPlugins_pro(dirPath){
    let names = getEntryNames(dirPath);
    let HWPs = [];
    names.forEach(name=>{
        let HWP = new HtmlWebpackPlugin({
            template: `view/${name}.html`,
            filename: path.resolve(__dirname,`../dist/${name}.html`),
            inject: true,
            excludeChunks:names.filter(val=>val!==name),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        });
        HWPs.push(HWP);
    });
    return HWPs;
}

module.exports = { getEntry,getEntryNames,getHtmlWebpackPlugins_dev,getHtmlWebpackPlugins_pro };