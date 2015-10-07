# Meteor In-App Notifications

Package built by <a href="http://twitter.com/harryward05">Harry Ward</a> 

## overview

This package is built to work with raix:push and allow for mirroring sent push notifications inside of your application.

Each user will see only notifications they HAVE NOT dismissed, and that HAVE NOT expired.

#### links & engagement tracking
You have the ability to optionally include a relative link in your notification.
For all notification links, <b>clicks will be tracked</b> in the <code>clicks</code> array (containing user ids that have clicked) inside each push notification object.

This allows you to send a push notification and have something for the user to refer to/click on after they open the app.


## mongo collection
<code>NotificationHistory = new Mongo.Collection("notification_history");</code>
<i>you don't hve to add this, its included in the package</i>

## installation

1. save the <code>app-notifications</code> folder inside your <code>/packages</code> directory.
2. add <code>app-notifications</code> to your <code>.meteor/packages</code> file.
3. insert a demo notification (see inserting a notification below)
4. insert the templates into your layout


## screenshots
<img width="600px" src="http://api.harryward.biz/dTJC/Screen%20Shot%202015-10-07%20at%209.54.54%20AM.png">
<br>
<img width="320px" height="auto" src="http://api.harryward.biz/dTJS/Screen%20Shot%202015-10-07%20at%209.55.41%20AM.png"><img width="320px" src="http://api.harryward.biz/dTQo/Screen%20Shot%202015-10-07%20at%209.56.28%20AM.png">

## templates
<code>{{>notificationTeaser}} // required - dynamic notification count</code>
<code>{{>notificationLayout}} // required - list of notifications </code>

Place these wherever you want. If you want them to be global, put them both in globally available templates


## inserting a notification
<pre>
Meteor.call('insertNotification',{
title:'title', //required
text:'body', // required
link: '/docs', // optional relative link
expiration: new Date('1/1/2016') // has to be a future date
},function(err,resp){
if(!err){
console.log('notification insert response',resp) // for testing
}
})

</pre>

## click tracking
When a user clicks on the arrow icon on a notification (if link is included) then it registers a click within that notification object.
<pre>NotificationHistory.find('_id':'whateveridyouwant').clicks.length // total clicks</pre>
<pre>NotificationHistory.find('_id':'whateveridyouwant').dismissals.length // total dismissals</pre>
