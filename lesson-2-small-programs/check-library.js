try {
  // Try to import the readline-sync library
  const readline = require('readline-sync');

  // If the import is successful, log a message indicating that the library is installed
  console.log('readline-sync is installed.');
} catch (error) {
  // If an error occurs during import, log a message indicating that the library is not installed
  console.error('readline-sync is not installed.');
}
