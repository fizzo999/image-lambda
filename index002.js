'use strict';

const {GetObjectCommand, S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const client = new S3Client({ region: 'us-west-2'});
const command = new ListObjectsV2Command({Bucket: 'fun-2-bucket'});

exports.handler = async (event, context, callback) => {

  console.log('EVENT DETAILS ARE AS FOLLOWS: ', JSON.stringify(event, undefined, 2));

  // try {
const stuffThatComesBack = await client.send(command);
console.log('THE STUFF FROM S3', stuffThatComesBack.Records);
//   } catch (error) {
//     console.log(error.message);
//   }
}
