/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'S3PMcw15aTeQK8RINZgg4EpMcQy2',
        username: 'Fazley',
        fullName: 'Fazley Rabbi',
        emailAddress: 'fazley111@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'hamid',
        fullName: 'Md. Hamid',
        emailAddress: 'hamid@gmail.com',
        following: [],
        followers: ['S3PMcw15aTeQK8RINZgg4EpMcQy2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'samir',
        fullName: 'samir',
        emailAddress: 'samir@gmail.com',
        following: [],
        followers: ['S3PMcw15aTeQK8RINZgg4EpMcQy2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['S3PMcw15aTeQK8RINZgg4EpMcQy2'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }