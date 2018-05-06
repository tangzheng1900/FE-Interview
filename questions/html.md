
###常见的布局问题
- 1,响应式布局，html根据@media媒体查询中的宽度自动加载合适的样式
```
<meta name="viewpot" content="width = divice-width,initial-scale=1">
```
```
<style> @media (min-width: 700px) and (orientation: landscape){ .sidebar { display: none; } } </style>
```

- 2，垂直居中的3种方法，大容器固定，小容器垂直居中

		.middle1{  //知道高度
   		 height: 100px;
    	position: absolute;
    	top: 50%;
    	margin-top: -50px;
		}
		.middle2{  //不知道高度
   		position: absolute;
   		top: 50%;
    	margin-top: -50px;
    	transform: translateY(50%);
		}
		.middle3{ //父容器 dispaly:table
    	display: table-cell;
    	vertical-align: middle;
		}
		.middle4{ //父容器  display:flex
    	align-items: center;
		}

