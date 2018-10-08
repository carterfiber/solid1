// log user in on click
const popupUri = 'popup.html';
$('#login button').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout button').click(() => solid.auth.logout());

// Update components to match the users login status
solid.auth.trackSession(session => {
  const loggedIn = !!session;
  $('#login').toggle(!loggedIn);
  $('#logout').toggle(loggedIn);
  if (loggedIn) {
    $('#user').text(session && session.webId);
    //use users webId as default profile
    if (!$('#profile').val())
      $('#profile').val(session.webId);
  }
});
