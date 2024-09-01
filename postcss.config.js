export default {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 16, // 1rem = 16px，基准值，可以根据你的设计稿调整
        propList: ['*'], // 需要转换的属性，例如['*'] 表示所有属性都转换
        unitPrecision: 5, // 保留rem小数位数
        selectorBlackList: [], // 要忽略的选择器，保留px
        replace: true, // 替换直接使用rem
        mediaQuery: false, // 是否转换媒体查询中的px
        minPixelValue: 2, // 最小的转换数值，小于这个值的不进行转换
      },
    },
  };
  