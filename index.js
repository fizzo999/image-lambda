// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({region: 'us-west-2'});
// Create S3 service object
let s3 = new AWS.S3();

exports.handler = async (event, context) => {

  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket : 'fun-2-bucket',
  };
  let ImageObjectsList, imageArray;

  try {
        // Call S3 to obtain a list of the objects in the bucket
        ImageObjectsList = await s3.listObjects(bucketParams).promise();
        imageArray = ImageObjectsList.Contents.map(item => {

            let ImageObjects = {
                name: item.key,
                size: item.size,
                tag: item.eTag
            }
    
            return ImageObjects;  

        })

    } catch (err) {

      console.log('Error: ', err.message);

    }

  console.log(JSON.stringify(event), JSON.stringify(imageArray));

  // return;

  // let stuffThatcomesbACK =  JSON.stringify(event, undefined, 2)
  // console.log(stuffThatcomesbACK);
  // console.log(stuffThatcomesbACK.Records[0].object);
  // return stuffThatcomesbACK;
}




