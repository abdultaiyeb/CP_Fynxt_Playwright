const { exec } = require('child_process');

exec('npx playwright test', (error, stdout, stderr) => {
  if (error) {
    console.error(`Test execution error: ${error}`);
    return;
  }
  console.log(stdout);

  exec('allure generate my-allure-results -o allure-report --clean', (genError, genStdout, genStderr) => {
    if (genError) {
      console.error(`Report generation error: ${genError}`);
      return;
    }
    console.log(genStdout);

    exec('allure open allure-report', (openError, openStdout, openStderr) => {
      if (openError) {
        console.error(`Error opening report: ${openError}`);
        return;
      }
      console.log(openStdout);
    });
  });
});
