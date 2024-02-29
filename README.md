# 移动软件开发exp

### **一、实验目标**

1、学习使用快速启动模板创建小程序的方法； 

2、学习不使用模板手动创建小程序的方法。

### 二、实验步骤

1、准备工作：注册小程序账号

（1）浏览器登录微信公众平台，通过邮箱进行小程序的注册，并进行信息登记。

![img](https://img-blog.csdnimg.cn/c0a30b491d1449ac856612e3788665e4.png)

（2）登录微信公众平台，查看自己注册的小程序，记录下AppID。

![img](https://img-blog.csdnimg.cn/d5cb81a2ed3d4998b100157721aa7cb6.png)

（3）下载微信开发工具并安装，通过刚注册的小程序的管理员账号扫码登录。

![img](https://img-blog.csdnimg.cn/5f02b0a939094557bbef7cc120e9e3d5.png)

2、自动生成小程序

（1）进入微信开发工具，创建小程序项目，依次填写项目名称、目录和AppID，新建一个小程序项目。

![img](https://img-blog.csdnimg.cn/5e0d8d9d4f43414699bb483a4c6bc9f9.png)

 （2）新建成功后进入开发页面，左边即可查看小程序预览效果，右边是代码部分。

![img](https://img-blog.csdnimg.cn/029047b6b5d24e07a3b2e883a8f08d71.png)

 3、手动创建小程序

（1）进入微信开发工具，创建小程序项目，依次填写项目名称、目录和AppID，新建一个小程序项目。

![img](https://img-blog.csdnimg.cn/8e12bd6ab46d4d0e8f049c7e988d9beb.png)

（2）创建完毕后，对文件进行修改和删除操作，具体操作为：修改app.json文件内的pages属性；删除utils文件夹及其内部所有内容；删除pages文件夹下的logs目录及其内部所有内容；删除index.wxml和index.wxss中的全部代码；删除index.js中的全部代码，并输入关键词"page"自动补全函数；删除app.wxss中的全部代码，删除app.js中的全部代码并输入关键词"app"自动补全函数。

完毕后，文件框架如下图所示。
![img](https://img-blog.csdnimg.cn/3c292088a64341e0bf2e0320ee5735c8.png)

（3）进行视图设计，包括导航栏设计和页面设计。相关代码如下。app.json

![img](https://img-blog.csdnimg.cn/485f22ee68294bcbafafa4f909d09157.png)

index.wxml

![img](https://img-blog.csdnimg.cn/80379951d52e44c39107ff6161c84580.png)

index.wxss

![img](https://img-blog.csdnimg.cn/28824bde870f4ed9b2801663a4dc6ddc.png)

（4）实现逻辑，创建登录接口，获取用户信息。相关代码如下。index.wxml

![img](https://img-blog.csdnimg.cn/6805a274005b497db5bc642d98601353.png)

index.js

![img](https://img-blog.csdnimg.cn/2f9180e0b7f24e9185c50a2c095c2cd7.png)

![img](https://img-blog.csdnimg.cn/d983f48f08fa405dbdc7728c388f6bcf.png)

### 三、程序运行结果

1、自动生成小程序的运行结果如下：

<img src="https://img-blog.csdnimg.cn/2c1e65a5971e45ae8641139e1638b949.png" alt="img"  />

2、手动创建小程序的运行结果如下：

<img src="https://img-blog.csdnimg.cn/3c7d562f97b74e5eb06db72ab0ac604d.png" alt="img" style="zoom: 33%;" />

<img src="https://img-blog.csdnimg.cn/e6e2eb54c2c844818c1318805c8ace84.png" alt="img" style="zoom:33%;" />

四、问题总结与体会
        本次实验是该课程第一次制作小程序，收获颇多。实验过程中遇到了诸多问题，比如在根据实验手册进行代码书写时，发现并不能完成登录功能，原因是随着开发库的改版，一些功能需要通过新的代码来实现。另外，小程序中index.wxml和index.wxss的实现与前端页面的html和css大致相同，由于我对前端知识掌握不多，所以常用的html代码和css代码的一些知识还需要加深。最后，谢谢老师的讲解和帮助。
