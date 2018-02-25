//https://www.youtube.com/watch?v=9494-2E4riQ

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Check } from 'meteor/check';

export const Notes = new Mongo.Collection('newnotes');


Meteor.methods({
    'notesInsert'(titre){
        check(titre, String);
       // check(url,String);
        if(!Meteor.userId){
            throw new Meteor.Error('non authorise');
        }

        Notes.insert(
            {
            titre: titre,
            CreatedAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            });
   
    },
    'notesRemove'(note){
        check(note._id, String);
        if(note.owner !== Meteor.userId()){
            throw new Meteor.Error('not-authorized');
          }
        Notes.remove(note._id);
    },

    'notesUpdate'(note){
        
        //check(note._id, String);
        
        if(note.owner !== Meteor.userId()){
            throw new Meteor.Error('not-authorized');
          }
          console.log("bo");
     //   Notes.update(note._id);
    }
});



