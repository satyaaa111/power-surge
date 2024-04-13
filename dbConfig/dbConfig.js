// iimport React, { useEffect } from 'react'; // Import React and useEffect if needed

// const MongoDBConnector = () => {
//     useEffect(() => {
//         // Your MongoDB connection code
//         try {
//             mongoose.connect(process.env.MONGO_URI!);
//             const connection = mongoose.connection;

//             connection.on('connected', () => {
//                 console.log('MongoDB connected successfully');
//             });

//             connection.on('error', (err) => {
//                 console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//                 process.exit();
//             });
//         } catch (error) {
//             console.log('Something goes wrong!');
//             console.log(error);
//         }
//     }, []); // Empty dependency array to run only once on component mount

//     // If this is a standalone JSX file, you might want to return null or an empty JSX fragment
//     return null; // or <></>;
// };

// export default MongoDBConnector;
