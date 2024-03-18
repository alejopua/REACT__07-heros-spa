module.exports = {
  presents: [
  [ '@babel/preset-env', { targets: { esmodules: true } } ],
  [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
}