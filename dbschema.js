let db = {
  users: [
    {
      userId: 'dh23ggj5h32g543j5gf43',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'Capetown, ZA',
    },
  ],
  recipes: [
    {
      userHandle: 'user',
      title: 'Title',
      ingredients: 'Ingredients list',
      method: 'Method',
      createdAt: '2019-03-15T10:59:52.798Z',
      likeCount: 5,
      commentCount: 3,
      images: [imageUrl],
    },
  ],
  comments: [
    {
      userHandle: 'user',
      recipeId: 'kdjsfgdksuufhgkdsufky',
      body: 'nice one!',
      createdAt: '2019-03-15T10:59:52.798Z',
      image: 'commentImage',
    },
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      recipeId: 'kdjsfgdksuufhgkdsufky',
      type: 'like | comment',
      createdAt: '2019-03-15T10:59:52.798Z',
    },
  ],
};
const userDetails = {
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Capetown, ZA',
  },
  likes: [
    {
      userHandle: 'user',
      recipeId: 'hh7O5oWfWucVzGbHH2pa',
    },
    {
      userHandle: 'user',
      recipeId: '3IOnFoQexRcofs5OhBXO',
    },
  ],
};
