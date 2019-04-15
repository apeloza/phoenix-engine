const secrets = {
  dbUri: 'mongodb://tony:no1locking@ds139946.mlab.com:39946/mern-comment-box'
};

export const getSecret = key => secrets[key];
