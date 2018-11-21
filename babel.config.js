module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: {
          node: 'current'
        }
      }
    ],
    'minify'
  ],
  ignore: [
    '**/templates/'
  ]
}
