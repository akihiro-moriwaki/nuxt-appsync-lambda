const uuid = require('uuid');
const aws = require('aws-sdk');
const docClient = new aws.DynamoDB.DocumentClient({ region: 'ap-northeast-1' });

exports.handler = (event, context, callback) => {
  const tableName = 'nuxt_appsync';
  const item = {
    id: uuid.v4(),
    tweet: event.tweet
  };

  const params = {
    TableName: tableName,
    Item: item
  };

  docClient.put(params, (err) => {
    if (err) {
      return
    }

    callback(null, item);
  });
};
