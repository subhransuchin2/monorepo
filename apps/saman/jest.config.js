module.exports = {
  name: 'saman',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/saman/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
