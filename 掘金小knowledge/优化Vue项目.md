# 从4个方面优化你的Vue项目  

1. 运行时优化 

用v-if代替v-show

v-if: v-if不渲染DOM  
v-show： 会预渲染DOM

2. v-for必须加上key，并避免同时使用v-if

## 首屏优化 

1. 图片裁剪  使用webp

图片需要裁剪  一般使用二倍图即可
尽量使用webp图片 
