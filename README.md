# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
npm install 生成 package-lock.json, node_modules, 删除后项目都可以正常运行,重新npm intall 又会重新生成
npm start 生成 .umi 目录, 删除后项目不能正常运行, 要重新 npm start
        官网解释：会在 umi dev 和 umi build 时被删除并重新生成

package.json文件中会记录项目中所需要的模块。记录的只是每个模块的基本信息。模块名称和大版本信息。
package-lock.json文件则会记录每个模块的详细信息，如模块的具体版本号和各个模块所依赖的子模块的信息。

npm install的过程大致就是从package.json中读取所有的依赖信息，然后再与node_modules中已经安装的依赖进行对比，如果没有则通过package-lock.json获取相应版本号下载安装.如果已经存在则会通过package-lock.json检查更新。


### layout
umi 内置了 ant-design/pro-layout 
    内置这个表达对吗？反正是不用重新 install, package.json 中已经引入了，默认是在生产环境的

    ```
     warning  in ./src/.umi/plugin-layout/layout/layout/renderRightContent.tsx

     "export 'SelectLang' was not found in 'umi'
    ```
    // 配置文件加上默认语言就不会再有警告
    locale: {
        default: 'zh-CN',
    },
添加布局，直接在 .umirc.ts 中添加 layout:{} 即可
routes 是默认添加的, 重定向到 index 页面

#### serve 初体验
npm install serve, 先在本地做一下验证, 再部署到服务器上

### 配置文件
不指定配置时，local.js 的权限最高，指定时，UMI_ENV 指定的权限最高
多环境多配置文件时，低权限的文件会被覆盖，而不是替换，当高权限的配置文件没有定义时，会去低权限的文件中找
（官网说 local.js 的权限最高，后面给了个例子又与这句话相悖）

#### 本地配置
config/config.ts 对应的是 config/config.local.ts
.local.ts 是本地验证使用的临时配置，请将其添加到 .gitignore，务必不要提交到 git 仓库中
.local.ts 配置的优先级最高，比 UMI_ENV 指定的配置更高

#### 多环境多配置文件

### 路由
不会被注册为路由的文件
    以 . 或 _ 开头的文件或目录
    以 d.ts 结尾的类型定义文件
    以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）
    components 和 component 目录
    utils 和 util 目录
    不是 .js、.jsx、.ts 或 .tsx 文件
    文件内容不包含 JSX 元素