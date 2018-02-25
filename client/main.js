import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});



import './main.html';


Template.body.helpers({
notes(){
console.log('ici');
//console.log(Notes.find().count());
return Notes.find({});
}

});

Template.upd.helpers({
  notes(){
  console.log('ici');
  //console.log(Notes.find().count());
  return Notes.find(ObjectId(this));
  }
  
  });


Template.add.events({
  'submit .add-form': function(event){
    event.preventDefault();
    const target=event.target;
    const titre=target.titre.value;
    const url=target.url.value;
    console.log(224);

    Meteor.call('notesInsert', titre)



      target.titre.value='';
      target.url.value='';

      $('#addModal').modal('close');
    return false;
}

});


Template.note.events({
'click .delete-note':function(event){
  Meteor.call('notesRemove',this);
return false;
}


});


Template.upd.events({
  'click .upd-form':function(event){
    Meteor.call('notesUpdate',this);
    console.log('bebe');
  return false;
  }
  
  
  });














