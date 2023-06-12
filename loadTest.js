/* globals meteorDown */
meteorDown.init(function (Meteor) {
  /*
  Meteor.call('getInitialWallFeedsMethod', { getSocialAndMedia: false }, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(res)
      Meteor.kill()
    }
  })
  */
  Meteor.call('getUserExtrasMethod', {}, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      Meteor.kill()
    }
  })
})

meteorDown.run({
  concurrency: 200,
  key: '',
  // url: "http://localhost:3000",
  url: 'https://www.activitree.com',
  // auth: { userIds: ['WbK49tH2hCbvffn7G', 'TY2fHa6GJXqweBeFu'] }
  auth: { userIds: ['nXBvE8avf7HTsPAcy', 'TY2fHa6GJXqweBeFu'] }
})
