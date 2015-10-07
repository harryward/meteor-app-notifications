Package.describe({
  name: 'app-notifications',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/harryward/meteor-app-notifications',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use("useraccounts:core");
  api.use("accounts-password");
  api.use("useraccounts:bootstrap");
  api.use("kadira:flow-router");
  api.use('reactive-var');
  api.use('blaze-html-templates');
  api.use('mongo');
  api.use("kadira:blaze-layout");
  api.addFiles('app-notifications-shared.js');
  api.addFiles('app-notifications-server.js','server');
  api.addFiles('app-notifications.html','client');
  api.addFiles('app-notifications.js','client');
  api.addFiles('app-notifications.css','client');
  api.export('NotificationHistory')
});

