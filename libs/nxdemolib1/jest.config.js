module.exports = {
  name: 'nxdemolib1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/nxdemolib1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
